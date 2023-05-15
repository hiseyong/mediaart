from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
ls = [
        {
            'author' : 'seyong',
            'text' : '안세용 이준상 이승원 오민준 김종원'
        },
        {
            'author' : 'joonsang',
            'text' : '행복하자'
        },
        {
            'author' : 'seungwon',
            'text' : '안녕'
        },
        {
            'author' : 'minjune',
            'text' : 'hello'
        },{
            'author' : 'seyong',
            'text' : '안세용 이준상 이승원 오민준 김종원'
        },
        {
            'author' : 'joonsang',
            'text' : '행복하자'
        },
        {
            'author' : 'seungwon',
            'text' : '안녕'
        },
        {
            'author' : 'minjune',
            'text' : 'hello'
        },{
            'author' : 'seyong',
            'text' : '안세용 이준상 이승원 오민준 김종원'
        },
        {
            'author' : 'joonsang',
            'text' : '행복하자'
        },
        {
            'author' : 'seungwon',
            'text' : '안녕'
        },
        {
            'author' : 'minjune',
            'text' : 'hello'
        }
    ]
@app.get("/getTree")
def read_item():
    return ls