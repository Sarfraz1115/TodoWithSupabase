import React, { useState } from 'react';
import { Moon, Sun, Trash2, Bell } from 'lucide-react';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [notifications, setNotifications] = useState(true);

  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleClearTasks = () => {
    if (window.confirm('Are you sure you want to clear all completed tasks?')) {
      // Logic to clear tasks from Supabase
      alert('Completed tasks cleared!');
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('This action is permanent. Do you want to continue?')) {
      // Logic to delete account from Supabase
      alert('Account deleted!');
    }
  };

  return (
    <div className="p-6 m-[20px] bg-white rounded-lg shadow-md w-full max-w-3xl mx-auto space-y-8">
      <h2 className="text-xl font-semibold text-gray-700">Settings</h2>

      {/* Theme Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Appearance</h3>
        <button
          onClick={handleThemeToggle}
          className="flex items-center gap-2 px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          {theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Language Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Language</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded text-gray-700"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Urdu</option>
        </select>
      </div>

      {/* Notifications */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Notifications</h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">Enable task reminders</span>
          <Bell className="h-4 w-4 text-gray-500" />
        </label>
      </div>

      {/* Task Management */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Task Management</h3>
        <button
          onClick={handleClearTasks}
          className="text-sm text-orange-600 border border-orange-300 px-4 py-2 rounded hover:bg-orange-100"
        >
          Clear all completed tasks
        </button>
      </div>

      {/* Delete Account */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Danger Zone</h3>
        <button
          onClick={handleDeleteAccount}
          className="flex items-center gap-2 text-red-600 border border-red-200 px-4 py-2 rounded hover:bg-red-100"
        >
          <Trash2 className="h-4 w-4" />
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;