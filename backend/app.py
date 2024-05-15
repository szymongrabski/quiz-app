from flask import Flask, request, jsonify
import cv2
import numpy as np
import pickle
import base64
from flask_cors import CORS 
from model.landmark_decoder import decodeLandmarksFromPicture

app = Flask(__name__)
CORS(app)

labels_dict = {0: '1', 1: '2', 2: '3', 3: '4', 4: 'decline', 5: 'accept'}

@app.route('/classify', methods=['POST'])
def classify_image():
    data_url = request.json.get('image_data')
    
    _, base64_data = data_url.split(',', 1)
    image_data = base64.b64decode(base64_data)
    
    nparr = np.frombuffer(image_data, np.uint8)
    
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    gesture = decodeLandmarksFromPicture(image, './model/model.p')

    if(gesture): 
        return jsonify({
            "success": "yes",
            "gesture": labels_dict[int(gesture[0])],
        })
    else:
        return jsonify({
            "success": "no",
        })
    



if __name__ == '__main__':
    app.run(debug=True)
