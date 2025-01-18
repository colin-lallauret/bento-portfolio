import React from "react";

function Software() {
  return (
    <div className="software">
      <div className="logo-slider">
        <div className="img-wrapper">
          {[...Array(16)].map((_, index) => (
            <div className="img-container" key={index}>
              <img src="https://picsum.photos/201" alt={`Slider ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="software-text">
        <span>J'UTILISE ACTUELLEMENT</span>
        <p>ET J'❤️ ÇA</p>
      </div>
    </div>
  );
}

export default Software;
