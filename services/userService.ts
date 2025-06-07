// IMPORTANT: This is a mock user service using localStorage.
// Passwords are stored in PLAIN TEXT. This is HIGHLY INSECURE and
// should NEVER be used in a production environment.
// Real applications MUST use a secure backend with password hashing.

interface User {
  id: string;
  fullName: string;
  email: string;
  password // In a real app, this would be a hashed password
    : string;
}

interface AuthResponse {
  success: boolean;
  message?: string;
  user?: Omit<User, 'password'>; // Don't return password
}

const USERS_STORAGE_KEY = 'krishiMitraUsers';

const getUsers = (): User[] => {
  try {
    const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  } catch (error) {
    console.error("Error reading users from localStorage:", error);
    return [];
  }
};

const saveUsers = (users: User[]): void => {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (error) {
    console.error("Error saving users to localStorage:", error);
  }
};

const isEmailTaken = (email: string): boolean => {
  const users = getUsers();
  return users.some(user => user.email.toLowerCase() === email.toLowerCase());
};

const registerUser = (fullName: string, email: string, password: string): AuthResponse => {
  if (isEmailTaken(email)) {
    return { success: false, message: 'Email address is already registered.' };
  }

  const users = getUsers();
  const newUser: User = {
    id: Date.now().toString(), // Simple ID generation
    fullName,
    email: email.toLowerCase(),
    password, // Storing plain text password - INSECURE!
  };
  users.push(newUser);
  saveUsers(users);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = newUser;
  return { success: true, user: userWithoutPassword, message: 'Registration successful!' };
};

const authenticateUser = (email: string, passwordInput: string): AuthResponse => {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    return { success: false, message: 'User not found. Please check your email or sign up.' };
  }

  // Plain text password comparison - INSECURE!
  if (user.password === passwordInput) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    return { success: true, user: userWithoutPassword };
  } else {
    return { success: false, message: 'Invalid password. Please try again.' };
  }
};

// Initialize with a default user if none exist, for easier testing of login.
// This is for the `user@example.com` and `password` default.
// In a real scenario with proper sign-up, you might not pre-populate like this.
const initializeDefaultUser = () => {
    const users = getUsers();
    if (!users.some(u => u.email === 'user@example.com')) {
        registerUser('Test User', 'user@example.com', 'password');
        console.log("Default user 'user@example.com' initialized in localStorage for testing.");
    }
};
initializeDefaultUser();


export const userService = {
  registerUser,
  authenticateUser,
  isEmailTaken,
  getUsers, // Potentially for admin/debug, not typically exposed
};
