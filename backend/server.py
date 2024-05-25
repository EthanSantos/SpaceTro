from flask import Flask, jsonify
from flask_cors import CORS
from supabase import create_client
from dotenv import load_dotenv
import os

app = Flask(__name__)

VITE_SUPABASE_URL = os.getenv('VITE_SUPABASE_URL')
VITE_SUPABASE_ANON_KEY = os.getenv('VITE_SUPABASE_ANON_KEY')

# Initialize Supabase client
supabase_url = "https://lxjocldupschbynmfkvi.supabase.co"
supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4am9jbGR1cHNjaGJ5bm1ma3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNjQ3NzgsImV4cCI6MjAzMTc0MDc3OH0.UhBHY4r_PSEC7OHbtElUgvwsiMGYv_JhibuTZpOrtHI"
supabase = create_client(supabase_url, supabase_key)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

if __name__ == '__main__':
    app.run(debug=True)