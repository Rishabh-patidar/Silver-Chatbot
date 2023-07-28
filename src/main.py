from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Message(BaseModel):
    message: str


@app.post("/api/chat")
def chat(message: Message):
    user_message = message.message

    # Define your static responses based on user inputs
    if user_message == "hello":
        response = "Hello! How can I assist you?"
    elif user_message == "goodbye":
        response = "Goodbye! Have a great day!"
    else:
        response = "I'm sorry, I can't understand. Can you please rephrase?"

    return {"response": response}
