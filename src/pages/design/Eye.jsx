import React, { useState, useEffect } from "react";

const Eye = () => {
  const [tiredness, setTiredness] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateAngle = (eyeId) => {
    const eyeElement = document.getElementById(eyeId);
    if (!eyeElement) return 0;

    const eyeRect = eyeElement.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = eyeCenterY - mousePosition.y; // Inverted Y-axis

    return (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
  };

  const angleLeftEye = calculateAngle("left-eye");
  const angleRightEye = calculateAngle("right-eye");

  const redEye =
    (angleLeftEye < 30 || (angleLeftEye < 360 && angleLeftEye > 330)) &&
    angleRightEye > 150 &&
    angleRightEye < 210;

  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
    backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
    transition: `all ${tiredness}s ease`,
  };

  const styleRightEye = {
    transform: `rotate(${-angleRightEye}deg)`,
    backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
    transition: `all ${tiredness}s ease`,
  };

  return (
    <div className="eyes-follow-tired mt-20">
      <div className="container">
        <div className="eyelid" />
        <div className="eyes">
          <div id="left-eye" className="eye" style={styleLeftEye}>
            <div className="pupil" />
          </div>
          <div id="right-eye" className="eye" style={styleRightEye}>
            <div className="pupil" />
          </div>
        </div>
      </div>
      <div className="tiredness">
        <input
          type="range"
          min="0.0"
          max="2.0"
          step="0.001"
          value={tiredness}
          onChange={(ev) => setTiredness(parseFloat(ev.target.value))}
        />
      </div>
    </div>
  );
};
export default Eye;
