from flask import Flask, jsonify
from flask_cors import CORS
from supabase import create_client
from dotenv import load_dotenv
import os

app = Flask(__name__)

# Initialize Supabase client
supabase_url = "https://ayyogzlsqqbwocmuuwph.supabase.co"
supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5eW9nemxzcXFid29jbXV1d3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MjA5NTEsImV4cCI6MjAzMjE5Njk1MX0.9y9t591c8v1RNCssBa4-GNK9ZQNpR7CDqVJfvycnWCk"
supabase = create_client(supabase_url, supabase_key)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

if __name__ == '__main__':
    app.run(debug=True)