import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Fetch user data from Supabase
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setName(user.user_metadata?.full_name || '');
      setEmail(user?.email || '');
    };
    fetchUser();
  }, []);

  const handleUpdate = async () => {
    const { error } = await supabase.auth.updateUser({
      email,
      data: { name }
    });

    if (error) {
      alert('Error updating profile: ' + error.message);
    } else {
      alert('Profile updated!');
      setEditMode(false);
    }
  };

  return (
    <div className="p-6 m-[20px] bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile</h2>

      {user ? (
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            {editMode ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            ) : (
              <p className="text-gray-800 font-medium">{name || 'No name set'}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            {editMode ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            ) : (
              <p className="text-gray-800 font-medium">{email}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-4">
            {editMode ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="text-gray-500 hover:underline"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default Profile;
       
 
      
       