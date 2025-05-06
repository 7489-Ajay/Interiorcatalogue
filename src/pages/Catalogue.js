import React, { useState } from 'react';
import './Catalogue.css';

// Bedroom images
import bedroom1 from '../assets/bedroom/bedroom1.jpg';
import bedroom2 from '../assets/bedroom/bedroom2.jpg';
import bedroom3 from '../assets/bedroom/bedroom3.jpg';
import bedroom4 from '../assets/bedroom/bedroom4.jpg';

// Livingroom images
import living1 from '../assets/livingroom/living1.jpg';
import living2 from '../assets/livingroom/living2.jpg';
import living3 from '../assets/livingroom/living3.jpg';
import living4 from '../assets/livingroom/living4.jpg';

// Kitchen images
import kitchen1 from '../assets/kitchen/kitchen1.jpg';
import kitchen2 from '../assets/kitchen/kitchen2.jpg';
import kitchen3 from '../assets/kitchen/kitchen3.jpg';
import kitchen4 from '../assets/kitchen/kitchen4.jpg';

// Office images
import office1 from '../assets/office/office1.jpg';
import office2 from '../assets/office/office2.jpg';
import office3 from '../assets/office/office3.jpg';
import office4 from '../assets/office/office4.jpg';

const data = {
  Bedroom: [bedroom1, bedroom2, bedroom3, bedroom4],
  Livingroom: [living1, living2, living3, living4],
  Kitchen: [kitchen1, kitchen2, kitchen3, kitchen4],
  Office: [office1, office2, office3, office4],
};

const textData = {
  Bedroom: "Discover a tranquil escape with our curated bedroom designs, blending elegance and comfort. From cozy textures to contemporary aesthetics, each space is thoughtfully crafted to promote restful sleep and personal expression.",

  Livingroom: "Elevate your living experience with modern and inviting living room setups. Our collection showcases stylish layouts, premium finishes, and warm ambiances—perfect for making memories with friends and family.",

  Kitchen: "Step into kitchens that inspire culinary creativity and effortless functionality. From sleek cabinetry to smart layouts, our designs bring a perfect balance of beauty and practicality to your cooking space.",

  Office: "Redefine productivity with office interiors that reflect sophistication and focus. Whether you're working from home or managing a studio, our workspace solutions are designed to energize your workflow with style."
};


const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('Bedroom');

  return (
    <div className="catalogue-container">
      <h1 className="catalogue-title">Our Collection</h1>

      <div className="category-buttons">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Add section text */}
      <p className="section-description">{textData[selectedCategory]}</p>

      <div className="image-grid">
        {data[selectedCategory].map((img, index) => (
          <div key={index} className="image-card">
            <img src={img} alt={`${selectedCategory} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
