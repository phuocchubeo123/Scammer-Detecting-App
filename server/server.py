import pickle
from flask import Flask, request
from PIL import Image
import pytesseract
import base64

app = Flask(__name__)

with open('model/model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('model/vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

@app.route("/server/predict/")
def predict_result():
    message = request.args.get("message")
    X = [message]
    X_transform = vectorizer.transform(X)
    return model.predict(X_transform)[0]

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

@app.route('/server/scanner/')
def base64_scanner():
    image_base64 = request.args.get("base64")
    image_encode = base64.encodebytes(image_base64)
    return pytesseract.image_to_string(image_encode)

if __name__ == "__main__":
    app.run(port = 5000)