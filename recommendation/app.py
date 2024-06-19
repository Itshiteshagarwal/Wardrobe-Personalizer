from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from difflib import SequenceMatcher
import certifi

app = Flask(__name__)
CORS(app)

# Connect to MongoDB Atlas with SSL encryption enabled
client = MongoClient("mongodb+srv://agarwalhitesh551:hitesh9887271@cluster0.1wispok.mongodb.net/e-commerce", tlsCAFile=certifi.where())
db = client['e-commerce']
products_collection = db['products']

def calculate_similarity(main_description, other_products):
    similarity_scores = [
        {"product": product, "similarity": SequenceMatcher(None, main_description, product.get('description', '')).ratio()}
        for product in other_products
    ]
    similarity_scores.sort(key=lambda x: x["similarity"], reverse=True)
    return similarity_scores

@app.route('/related_products/<int:product_id>', methods=['GET'])
def get_related_products(product_id):
    try:
        # Fetch product by ID
        product = products_collection.find_one({'id': product_id})
        if not product:
            return jsonify({"error": "Product not found"}), 404
        
        # Fetch products in the same category
        category = product['category']
        other_products = list(products_collection.find({'category': category}, {'_id': 0}))
        
        # Remove the queried product itself from the list of other products
        other_products = [p for p in other_products if p['id'] != product_id]
        
        # Calculate similarity between product description and descriptions of other products
        similarity_scores = calculate_similarity(product['description'], other_products)
        
        # Filter out products with low similarity scores
        threshold = 0.6  
        related_products = [score['product'] for score in similarity_scores if score['similarity'] > threshold and score['product']['avilable']]
        
        # Return at most 4 related available products
        return jsonify(related_products[:4]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
