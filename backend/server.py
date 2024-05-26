from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client, Client

app = Flask(__name__)

SUPABASE_URL = "https://ayyogzlsqqbwocmuuwph.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5eW9nemxzcXFid29jbXV1d3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MjA5NTEsImV4cCI6MjAzMjE5Njk1MX0.9y9t591c8v1RNCssBa4-GNK9ZQNpR7CDqVJfvycnWCk"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

@app.route('/api/profile', methods=['GET'])
def get_profile_data():
    try:
        user_id = request.args.get('user_id')
        if not user_id:
            return jsonify({"error": "user_id is required"}), 400

        response = supabase \
            .from_('profiles') \
            .select('*') \
            .eq('id', user_id) \
            .execute()
        data = response.data

        return jsonify(data[0]), 200

    except Exception as error:
        print(f"Error fetching user profile: {error}")
        return jsonify({"error": str(error)}), 500
    
@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    try:
        response = supabase.rpc('get_leaderboard').execute() # custom sql function
        data = response.data

        if not data:
            return jsonify({"error": "No data found"}), 404

        return jsonify(data), 200

    except Exception as error:
        print(f"Error fetching leaderboard: {error}")
        return jsonify({"error": str(error)}), 500
    
@app.route('/api/points', methods=['POST'])
def add_points():
    try:
        response = supabase.rpc('add_points').execute()
        
    except Exception as error:
        print(f"Error fetching leaderboard: {error}")
        return jsonify({"error": str(error)}), 500

if __name__ == '__main__':
    app.run(debug=True)
