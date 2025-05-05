import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient';

const Greeting = () => {
    const [username, setusername] = useState("");
    useEffect(() => {
      const fetchuser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setusername(user.user_metadata?.full_name || user.email || "User");
        }
      }
      fetchuser();

    }, [])
    
    const currentdate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    )
  return (
    <div>
    <h2 className="text-2xl font-bold">Hello, {username}!</h2>
    <p className="text-gray-600 dark:text-gray-400">{currentdate}</p>
  </div>
  )
}

export default Greeting