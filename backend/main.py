from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Product(BaseModel):
    id: int
    name: str
    price: float

products = [
    {"id": 1, "name": "Laptop", "price": 75000},
    {"id": 2, "name": "Phone", "price": 30000}
]

@app.get("/")
def home():
    return {"status": "E-Commerce Backend Running"}

@app.get("/products")
def get_products():
    return products

@app.post("/cart")
def add_to_cart(product: Product):
    return {"message": f"{product.name} added to cart"}
