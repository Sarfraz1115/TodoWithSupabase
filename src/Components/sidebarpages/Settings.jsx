// import React from 'react';
// import { Moon, Sun } from 'lucide-react';
import React  from "react"
import { useState } from "react"
import { Moon, Sun, Bell, Globe, Lock, User, Shield } from "lucide-react"

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (

        <div className="w-[99vw] p-[20px]">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-gray-500">Manage your account settings and preferences</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm divide-y">
                {/* Appearance */}
                <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Appearance</h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    {darkMode ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-gray-600" />}
                                </div>
                                <div>
                                    <div className="font-medium">Theme</div>
                                    <div className="text-sm text-gray-500">Choose between light and dark theme</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Notifications</h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <Bell className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Task Reminders</div>
                                    <div className="text-sm text-gray-500">Get notified about upcoming tasks</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <Bell className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Email Notifications</div>
                                    <div className="text-sm text-gray-500">Receive email for important updates</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Account */}
                <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Account</h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <User className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Personal Information</div>
                                    <div className="text-sm text-gray-500">Update your personal details</div>
                                </div>
                            </div>
                            <button className="text-blue-500 hover:text-blue-600">Edit</button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <Lock className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Password</div>
                                    <div className="text-sm text-gray-500">Change your password</div>
                                </div>
                            </div>
                            <button className="text-blue-500 hover:text-blue-600">Change</button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <Globe className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Language</div>
                                    <div className="text-sm text-gray-500">Choose your preferred language</div>
                                </div>
                            </div>
                            <select className="border rounded-md px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Privacy & Security */}
                <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Privacy & Security</h2>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <Shield className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Two-Factor Authentication</div>
                                    <div className="text-sm text-gray-500">Add an extra layer of security</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                    <Shield className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Data Privacy</div>
                                    <div className="text-sm text-gray-500">Manage how your data is used</div>
                                </div>
                            </div>
                            <button className="text-blue-500 hover:text-blue-600">Manage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )}
export default Settings







