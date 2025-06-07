
import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Added imports
import { AppContext } from '../../AppContext';
import Card from '../Card';
import { UserCircleIcon, LockClosedIcon, EnvelopeIcon, ArrowPathIcon } from '../Icons';
import { userService } from '../../services/userService';

const AuthPage: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(AppContext);
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // To get 'from' state for redirection

  if (!context) {
    return <p className="text-center text-red-500">Error: Application context is not available.</p>;
  }
  const { login: contextLogin } = context; // Renamed to avoid confusion, this is from AppContext

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 750)); // Simulate API delay

    const from = location.state?.from?.pathname || '/'; // Get previous location or default to home

    if (isLoginMode) {
      const authResult = userService.authenticateUser(email, password);
      if (authResult.success) {
        contextLogin(); // Update auth state via context
        navigate(from, { replace: true }); // Navigate to 'from' location or home
      } else {
        setError(authResult.message || 'Invalid email or password.');
      }
    } else { // Sign up mode
      if (!fullName.trim()) {
        setError('Full name is required.');
      } else if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
        setError('Please enter a valid email address.');
      } else if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
      } else if (password !== confirmPassword) {
        setError('Passwords do not match.');
      } else {
        const registrationResult = userService.registerUser(fullName, email, password);
        if (registrationResult.success) {
          contextLogin(); // Update auth state via context
          navigate(from, { replace: true }); // Navigate to 'from' location or home (auto-login)
        } else {
          setError(registrationResult.message || 'Could not register user.');
        }
      }
    }
    setIsLoading(false);
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError(null);
    setEmail(''); 
    setPassword(''); 
    setFullName(''); 
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-12">
      <Card className="w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <UserCircleIcon className="w-20 h-20 text-primary dark:text-green-400 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {isLoginMode ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {isLoginMode ? 'Login to access Krishi Mitra.' : 'Join Krishi Mitra today.'}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLoginMode && (
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="focus:ring-primary focus:border-primary dark:focus:ring-green-400 dark:focus:border-green-400 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required={!isLoginMode}
                  disabled={isLoading}
                  aria-label="Full Name"
                />
              </div>
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-primary focus:border-primary dark:focus:ring-green-400 dark:focus:border-green-400 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  aria-label="Email Address"
                />
              </div>
          </div>
          <div>
            <label htmlFor="passwordAuthId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
             <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                 </div>
                <input
                  type="password"
                  name="password"
                  id="passwordAuthId"
                  className="focus:ring-primary focus:border-primary dark:focus:ring-green-400 dark:focus:border-green-400 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  aria-label="Password"
                />
              </div>
          </div>
          {!isLoginMode && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="focus:ring-primary focus:border-primary dark:focus:ring-green-400 dark:focus:border-green-400 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-lg p-2.5 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={!isLoginMode}
                  disabled={isLoading}
                  aria-label="Confirm Password"
                />
              </div>
            </div>
          )}

          {error && <p role="alert" className="text-sm text-red-600 dark:text-red-400 text-center bg-red-100 dark:bg-red-900/50 p-2 rounded-md">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-green-500 dark:focus:ring-offset-gray-800 disabled:opacity-60 transition-colors"
              aria-live="polite"
            >
              {isLoading ? (
                <>
                  <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                  Processing...
                </>
              ) : (isLoginMode ? 'Login' : 'Sign Up')}
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <button
            onClick={toggleMode}
            disabled={isLoading}
            className="text-sm font-medium text-primary dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 disabled:opacity-70"
          >
            {isLoginMode ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </button>
        </div>
         <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
            Note: For demonstration, credentials (user@example.com / password) are illustrative. Sign-ups are stored in your browser's local storage and are not secure for real-world use.
        </p>
      </Card>
    </div>
  );
};
export default AuthPage;
