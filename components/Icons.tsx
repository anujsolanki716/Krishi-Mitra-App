
import React from 'react';

// Common props for icons
interface IconProps extends React.SVGProps<SVGSVGElement> {}
interface IconImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}



export const HomeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const LightBulbIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://www.freeiconspng.com/thumbs/agriculture-icon-png/agriculture-icon-image-gallery-16.png" 
  alt="Home"
  {...props}
/>
);

export const ShoppingBagIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const BanknotesIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://cdn-icons-png.flaticon.com/512/14022/14022202.png" 
  alt="Home"
  {...props}
/>
);

export const UsersIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" 
  alt="Home"
  {...props}
/>
);

export const CogIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15.036-7.149A7.464 7.464 0 014.5 4.5m15.036 7.149a7.464 7.464 0 00-2.614-2.614m0 0a7.503 7.503 0 00-7.422 0M4.5 12V3.75m15 8.25V3.75m0 8.25a7.5 7.5 0 00-7.5-7.5M12 4.5A7.5 7.5 0 004.5 12m0 0a7.5 7.5 0 007.5 7.5m7.5-7.5a7.5 7.5 0 00-7.5 7.5M12 19.5V12m0 0V4.5" />
  </svg>
);

export const SunIcon: React.FC<IconImageProps> = (props) => (
  <img
    src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" 
    alt="Home"
    {...props}
  />
);

export const MoonIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21c3.089 0 5.897-1.055 8.118-2.805a11.192 11.192 0 011.884-3.193z" />
  </svg>
);

export const GlobeAltIcon: React.FC<IconImageProps> = (props) => (
  <img
    src="https://icons.iconarchive.com/icons/iconka/business-outline/512/globe-alt-icon.png" 
    alt="Home"
    {...props}
  />
);

export const UserCircleIcon: React.FC<IconImageProps> = (props) => (
  <img
    src="https://static.thenounproject.com/png/1743561-200.png" 
    alt="Home"
    {...props}
  />
);

export const InformationCircleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const WifiSlashIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038C8.744 14.46 9.497 14.026 10.334 13.751m1.996 0L10.334 13.75m1.996 0C13.256 14.026 14.01 14.46 14.465 15.038M17.03 12.41a6.678 6.678 0 00-2.433-1.638m-5.132 0c-.838.277-1.591.712-2.047 1.29M3 3l18 18m-1.763-1.026A10.468 10.468 0 0012 10.875c-2.458 0-4.707.868-6.497 2.336" />
  </svg>
);

export const SparklesIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://icons.iconarchive.com/icons/google/noto-emoji-activities/512/52705-sparkles-icon.png" 
  alt="Home"
  {...props}
/>
);

export const PaperAirplaneIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const MicrophoneIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const CloudIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://cdn-icons-png.freepik.com/256/1477/1477025.png?semt=ais_incoming" 
  alt="Home"
  {...props}
/>
);

export const CloudRainIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://cdn.iconscout.com/icon/free/png-256/free-cloud-rain-icon-download-in-svg-png-gif-file-formats--rainny-forecast-weather-pack-nature-icons-3219522.png?f=webp" 
  alt="Home"
  {...props}
/>
);

export const BookOpenIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://cdn-icons-png.flaticon.com/512/5402/5402751.png" 
  alt="Home"
  {...props}
/>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

export const ShoppingCartIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" 
  alt="Home"
  {...props}
  />
);

export const PlusCircleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const TagIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

export const ChatBubbleLeftEllipsisIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://cdn-icons-png.flaticon.com/512/5962/5962463.png" 
  alt="Home"
  {...props}
  />
);

export const PlayCircleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
  </svg>
);

export const PencilSquareIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

export const UserGroupIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.249-3.498a3.752 3.752 0 014.498 0M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 3a9 9 0 10-18 0 9 9 0 0018 0zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
  </svg>
);

export const CurrencyRupeeIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://cdn-icons-png.flaticon.com/512/3566/3566403.png" 
  alt="Home"
  {...props}
  />
);

export const BuildingStorefrontIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://static.vecteezy.com/system/resources/previews/021/008/042/non_2x/store-building-icon-symbol-for-shopping-online-png.png" 
  alt="Home"
  {...props}
  />
);

export const EnvelopeIcon: React.FC<IconImageProps> = (props) => (
  <img
  src="https://cdn-icons-png.flaticon.com/512/8766/8766320.png" 
  alt="Home"
  {...props}
  />
);

export const LockClosedIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const ArrowPathIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

export const ArrowLeftOnRectangleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
);
