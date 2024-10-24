# /app/__init__.py
from flask import Flask
from app.form import forms
from app.emi import emi
from flask_cors import CORS
def create_app():
    app = Flask(__name__)
    CORS(app)
    # Register blueprints
    app.register_blueprint(forms, url_prefix='/api/forms')
    app.register_blueprint(emi, url_prefix='/api/emi')

    return app
