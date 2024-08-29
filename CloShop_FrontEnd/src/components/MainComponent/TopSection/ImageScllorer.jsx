import React from 'react';

const ImageScroller = () => {
  const carouselInnerStyle = {
    height: '100vh', // 100% of viewport height
    position: 'relative', // Ensures the image is positioned relative to this container
  };

  const imageStyle = {
    position: 'absolute', // Allows the image to cover the container
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensure the image covers the container without distortion
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" style={carouselInnerStyle}>
        <div className="carousel-item active" style={{ position: 'relative', height: '100%' }}>
          <img src="ExampleImage.jpg" className="d-block w-100" alt="Slide 1" style={imageStyle}/>
        </div>
        <div className="carousel-item" style={{ position: 'relative', height: '100%' }}>
          <img src="..." className="d-block w-100" alt="Slide 2" style={imageStyle}/>
        </div>
        <div className="carousel-item" style={{ position: 'relative', height: '100%' }}>
          <img src="..." className="d-block w-100" alt="Slide 3" style={imageStyle}/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageScroller;
