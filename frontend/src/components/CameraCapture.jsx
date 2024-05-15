import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

function CameraCapture({ setAnswer, availableAnswers, seconds }) {
  const webcamRef = React.useRef(null);
  const [time, setTime] = useState(seconds);
  const [response, setResponse] = useState({});

  useEffect(() => {
    if (time === 0) {
      capture();
    } else {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const handleUpload = (imageData) => {
    if (imageData) {
      fetch('http://127.0.0.1:5000/classify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_data: imageData }),
      })
        .then(response => response.json())
        .then(data => {
          setResponse(data);
          if (data.success === "yes" && availableAnswers.includes(data.gesture)) {
            setAnswer(data.gesture); 
          } else {
            setTime(seconds); 
          }
        })
        .catch(error => {
          console.error('Error sending request to server:', error);
          setTime(seconds); 
        });
    } else {
      console.warn('No image data available.');
    }
  };

  const capture = React.useCallback(() => {
    const imageData = webcamRef.current.getScreenshot();
    handleUpload(imageData);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      /> 
      <div className='text-white text-center'>
        Time left: {time}
      </div>
    </>
  );
}

export default CameraCapture;
