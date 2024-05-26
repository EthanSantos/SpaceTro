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

    return (
        <div className='title-screen'>

            <h1>Spacetro</h1>

            <div className='title-menu'>

                <Link to={'/login'} className='menu-option'>Login</Link>
                <Link to={'/signup'} className='menu-option'>Signup</Link>

            </div>
        </div>
    )
}

export default Home