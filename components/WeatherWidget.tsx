
import React, { useContext } from 'react';
import Card from './Card';
import { MOCK_WEATHER_DATA, TEXTS } from '../constants';
import { AppContext } from '../AppContext';
import { SunIcon, CloudIcon, CloudRainIcon } from './Icons'; // Assuming Icons.tsx exists

const WeatherWidget: React.FC = () => {
  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];

  // Placeholder, in a real app, this would fetch data
  const weatherData = MOCK_WEATHER_DATA;

  const getWeatherIcon = (condition: string) => {
    if (condition.toLowerCase().includes('sunny')) return <SunIcon className="w-12 h-12 text-yellow-400" />;
    if (condition.toLowerCase().includes('cloudy')) return <CloudIcon className="w-12 h-12 text-gray-400" />;
    if (condition.toLowerCase().includes('showers') || condition.toLowerCase().includes('rain')) return <CloudRainIcon className="w-12 h-12 text-blue-400" />;
    return <SunIcon className="w-12 h-12 text-yellow-400" />; // Default
  };


  return (
    <Card title={texts.weatherForecast} className="bg-blue-500 dark:bg-blue-700 text-white">
      <div className="space-y-4">
        <div className="text-center">
          <div className="flex justify-center items-center">
            {getWeatherIcon(weatherData.current.condition)}
          </div>
          <p className="text-4xl font-bold">{weatherData.current.temp}</p>
          <p className="text-lg">{weatherData.current.condition}</p>
          <p className="text-sm">Humidity: {weatherData.current.humidity} | Wind: {weatherData.current.wind}</p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold mb-2 text-center">3-Day Forecast:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center">
            {weatherData.forecast.map(day => (
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
      </div>
    </Card>
  );
};

export default WeatherWidget;
    