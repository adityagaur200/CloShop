import React from 'react';
import './NewCard.css'; // Import the external CSS file

const NewCard = () => {
  const images = [
    'https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg',
    'https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg',
    'https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg',
    'https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg',
  ];

  return (
    <div className="app-container">
      <div className="container">
        {images.map((image, index) => (
          <div
            key={index}
            className="card"
          >
            <div
              className="cover"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCard;
