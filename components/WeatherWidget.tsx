import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from './Card';
import { MOCK_WEATHER_DATA, TEXTS } from '../constants';
import { AppContext } from '../AppContext';
import { SunIcon, CloudIcon, CloudRainIcon } from './Icons';

const WeatherWidget: React.FC = () => {
  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];

  const [weatherData, setWeatherData] = useState(MOCK_WEATHER_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'a87d1b6f06e3f128c23598f7acce4a38'; // Replace with your OpenWeatherMap API key

  const getWeatherIcon = (condition: string) => {
    const cond = condition.toLowerCase();
    if (cond.includes('sun') || cond.includes('clear')) return <SunIcon className="w-12 h-12 text-yellow-400" />;
    if (cond.includes('cloud')) return <CloudIcon className="w-12 h-12 text-gray-400" />;
    if (cond.includes('rain') || cond.includes('shower') || cond.includes('drizzle')) return <CloudRainIcon className="w-12 h-12 text-blue-400" />;
    return <SunIcon className="w-12 h-12 text-yellow-400" />; // Default
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        try {
          const { latitude, longitude } = pos.coords;

          const currentRes = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );

          const forecastRes = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );

          const current = {
            temp: `${Math.round(currentRes.data.main.temp)}°C`,
            condition: currentRes.data.weather[0].main,
            icon: currentRes.data.weather[0].main,
            humidity: `${currentRes.data.main.humidity}%`,
            wind: `${currentRes.data.wind.speed} m/s`
          };

          const forecast = [
            forecastRes.data.list[8], // ~Tomorrow
            forecastRes.data.list[16] // ~Day After
          ].map((item, i) => ({
            day: i === 0 ? 'Tomorrow' : 'Day After',
            temp: `${Math.round(item.main.temp)}°C`,
            condition: item.weather[0].main,
            icon: item.weather[0].main
          }));

          setWeatherData({ current, forecast });
        } catch (err) {
          console.error(err);
          setError('Failed to fetch real-time weather. Showing default.');
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Location permission denied. Showing default weather.');
        setLoading(false);
      }
    );
  }, []);

  const { current, forecast } = weatherData;

  return (
    <Card title={texts.weatherForecast} className="bg-blue-500 dark:bg-blue-700 text-white">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="space-y-4">
          <div className="text-center">
            <div className="flex justify-center items-center">
              {getWeatherIcon(current.condition)}
            </div>
            <p className="text-4xl font-bold">{current.temp}</p>
            <p className="text-lg">{current.condition}</p>
            <p className="text-sm">Humidity: {current.humidity} | Wind: {current.wind}</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-center">3-Day Forecast:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center">
              {forecast.map(day => (
                <div key={day.day} className="p-2 bg-white/20 dark:bg-black/20 rounded-lg">
                  <p className="font-medium">{day.day}</p>
                  <div className="flex justify-center items-center my-1">
                    {getWeatherIcon(day.condition)}
                  </div>
                  <p>{day.temp}</p>
                  <p className="text-xs">{day.condition}</p>
                </div>
              ))}
            </div>
          </div>

          {error && <p className="text-red-300 text-sm text-center mt-2">{error}</p>}
        </div>
      )}
    </Card>
  );
};

export default WeatherWidget;
