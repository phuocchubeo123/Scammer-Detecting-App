import io
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


pytesseract.pytesseract.tesseract_cmd = r'/usr/share/tesseract-ocr/4.00/tessdata'


@app.route('/server/scanner/')
def base64_scanner():
    print(request.args.get("base64")[:10])

    image_base64 = request.args.get("base64").encode('utf-8')
    # image_base64 += "=" * ((4 - len(image_base64) % 4) % 4)  # ugh
    msg = base64.b64decode(image_base64)
    buf = io.BytesIO(msg)
    image_encode = Image.open(buf)
    return pytesseract.image_to_string(image_encode)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
