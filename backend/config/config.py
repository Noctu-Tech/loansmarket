import os 
from dotenv import load_dotenv

load_dotenv()

mongo_uri = os.getenv("mongo_uri")