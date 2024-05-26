import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { supabase } from '../../helper/supabaseClient'
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    useEffect(() => {

        // Fetch the current session
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
        };

        fetchUser();

        // Listen for changes to the user's authentication state
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });

        // Clean up the subscription
        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, [user]);

    const handleLogout = async () => {
        console.log("logged out")
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        

        <div className='app title-screen'>
            <h1>SpaceTro</h1>
            <div className='title-menu'>
                {/* <p>click anywhere to start!</p> */}
                <p> Welcome to SpaceTro where we learn all about space</p>
                <div className='element'>
                    <img src="homeElm.png" className='rotating-moon' alt="Moon"/>
                </div>
            </div>
        </div>
    )
}

export default Home