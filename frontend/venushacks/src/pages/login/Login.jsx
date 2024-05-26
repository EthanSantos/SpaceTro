import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../helper/supabaseClient'
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import 'tailwindcss/tailwind.css';
import './Login.css';

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
        <div className="login-screen flex flex-col items-center justify-center h-screen"> 
            <h1 className="login-title">Sign in</h1>
            <div className="max-w-md w-full p-8 rounded-lg shadow-2xl" style={{ backgroundColor: '#0C0D2C' }}>
                <Auth
                    supabaseClient={supabase}
                    providers={[]}
                    appearance={{
                        theme: ThemeSupa,
                        className: {
                            container: 'space-y-4',
                            label: 'block text-sm font-medium text-gray-700',
                            input: 'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm input-field', // Add input-field class
                            button: 'btn bg-9D7582 w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white hover:bg-BCA7CB focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Login;