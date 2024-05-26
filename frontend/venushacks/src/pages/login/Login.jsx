import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../helper/supabaseClient'
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import './Login.css'
import 'tailwindcss/tailwind.css';

import Home from '../home/Home';

const Login = ({ user, setUser }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the current session
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            if (session?.user) {
                navigate('/home'); // Redirect to /home if the user is already logged in
            }
        };

        fetchUser();

        // Listen for changes to the user's authentication state
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
            if (session?.user) {
                navigate('/home'); // Redirect to /home on successful login
            }
        });

        // Clean up the subscription
        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, [navigate, setUser]);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <Auth
                        supabaseClient={supabase}
                        providers={[]}
                        appearance={{
                            theme: ThemeSupa,
                            className: {
                                container: 'space-y-4',
                                label: 'block text-sm font-medium text-gray-700',
                                input: 'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                                button: 'btn btn-primary w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            }
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Login;