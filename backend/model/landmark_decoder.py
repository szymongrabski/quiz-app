import pickle
import numpy as np
import cv2
import mediapipe as mp

def decodeLandmarksFromPicture(img, model_path):
    model_dict = pickle.load(open(model_path, 'rb'))
    model = model_dict['model']

    mp_hands = mp.solutions.hands
    hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = hands.process(img_rgb)
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            data_aux = []
            x_ = []
            y_ = []
            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                x_.append(x)
                y_.append(y)
            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                data_aux.append(x - min(x_))
                data_aux.append(y - min(y_))

            data_aux = np.array(data_aux).reshape(1, -1)
            prediction = model.predict(data_aux)

            return prediction
    else:
        print("Nie wykryto dłoni na obrazie.")
