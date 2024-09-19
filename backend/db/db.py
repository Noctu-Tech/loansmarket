# /app/db.py
from pymongo import MongoClient
from config.config import mongo_uri
client = None

def init_db():
    global client
    client = MongoClient(mongo_uri)
    return client

def get_db():
    if client is None:
        init_db()
    return client['loan_application_db']
