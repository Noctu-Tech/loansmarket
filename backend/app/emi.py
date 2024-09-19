# /app/emi.py
from flask import Blueprint, request, jsonify
import math

emi = Blueprint('emi', __name__)

@emi.route('/calculate_emi', methods=['POST'])
def calculate_emi():
    data = request.json
    loan_amount = data.get('loan_amount')
    interest_rate = data.get('interest_rate', 10.0)  # Default 10% interest rate
    tenure = data.get('tenure', 12)  # Default 12 months

    if not loan_amount:
        return jsonify({"error": "Loan amount is required"}), 400

    # Convert interest rate into monthly interest rate
    monthly_interest_rate = interest_rate / (12 * 100)

    # EMI formula: [P * r * (1+r)^n] / [(1+r)^n-1]
    emi_amount = (loan_amount * monthly_interest_rate * math.pow(1 + monthly_interest_rate, tenure)) / (math.pow(1 + monthly_interest_rate, tenure) - 1)

    return jsonify({"emi_amount": round(emi_amount, 2)})
