# /app/forms.py
from flask import Blueprint, request, jsonify
from db.db import get_db

forms = Blueprint('forms', __name__)

@forms.route('/submit_form', methods=['POST'])
def submit_form():
    data = request.json
    required_fields = ['full_name', 'mobile_number', 'employment_type', 'email', 'pan', 'aadhar_number', 'dob', 'gender', 'state', 'city', 'pin_code', 'loan_amount']

    # Validate form data
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Field {field} is missing"}), 400

    # Insert data into MongoDB
    db = get_db()
    result = db.loan_applications.insert_one(data)

    return jsonify({"message": "Form submitted successfully", "form_id": str(result.inserted_id)}), 201
