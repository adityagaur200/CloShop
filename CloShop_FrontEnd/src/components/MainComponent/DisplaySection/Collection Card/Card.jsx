import React, { useState, useRef, useEffect } from 'react';
import './Card.css'; // Assuming you have a CSS file for styles

const Card = ({ dataImage, header, content }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.setProperty('--card-width', `${card.offsetWidth}px`);
      card.style.setProperty('--card-height', `${card.offsetHeight}px`);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = cardRef.current;
      setMouseX(e.pageX - offsetLeft - offsetWidth / 2);
      setMouseY(e.pageY - offsetTop - offsetHeight / 2);
    }
  };

  const handleMouseEnter = () => {
    if (mouseLeaveDelay) {
      clearTimeout(mouseLeaveDelay);
    }
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000));
  };

  const mousePX = mouseX / (cardRef.current?.offsetWidth || 1);
  const mousePY = mouseY / (cardRef.current?.offsetHeight || 1);

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
        <div className="card-info">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
