
// In a real application, API_KEY should strictly come from process.env.API_KEY
// For this example, if process.env.API_KEY is not set, we use a placeholder.
// THIS IS NOT FOR PRODUCTION. Ensure process.env.API_KEY is properly configured in your environment.
export const GEMINI_API_KEY = process.env.API_KEY || "YOUR_API_KEY_HERE"; // IMPORTANT: Replace in actual deployment environment

export const GEMINI_TEXT_MODEL = "gemini-2.5-flash-preview-04-17";

export const APP_NAME = "Krishi Mitra";

export const MOCK_WEATHER_DATA = {
  current: { temp: '28°C', condition: 'Sunny', icon: '☀️', humidity: '60%', wind: '10 km/h' },
  forecast: [
    { day: 'Tomorrow', temp: '29°C', condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Day After', temp: '27°C', condition: 'Showers', icon: '🌧️' },
  ]
};

export const TEXTS = {
  en: {
    welcome: "Welcome to Krishi Mitra!",
    askAgriExpert: "Ask Agri Expert",
    marketPrices: "Market Prices",
    govtSchemes: "Govt. Schemes",
    communityForum: "Community Forum",
    weatherForecast: "Weather Forecast",
    dashboardTitle: "Dashboard",
    farmingSupportTitle: "Farming Intel",
    marketLinkTitle: "Market Connect",
    govSchemesTitle: "Government Schemes",
    communityTitle: "Community & Learning",
    incomeTitle: "Income Hub",
    // Add more translations
  },
  hi: {
    welcome: "कृषि मित्र में आपका स्वागत है!",
    askAgriExpert: "कृषि विशेषज्ञ से पूछें",
    marketPrices: "बाजार मूल्य",
    govtSchemes: "सरकारी योजनाएं",
    communityForum: "सामुदायिक मंच",
    weatherForecast: "मौसम पूर्वानुमान",
    dashboardTitle: "डैशबोर्ड",
    farmingSupportTitle: "खेती की जानकारी",
    marketLinkTitle: "बाजार সংযোগ",
    govSchemesTitle: "सरकारी योजनाएं",
    communityTitle: "समुदाय और सीखना",
    incomeTitle: "आय केंद्र",
    // Add more translations
  }
  
};
    