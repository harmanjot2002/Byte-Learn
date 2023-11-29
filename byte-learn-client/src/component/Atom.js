import React, { Component } from 'react';
import './Atom.css';

class Atom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electrons: 8,
    };

    this.electronImages = [
        'https://banner2.cleanpng.com/20180412/liq/kisspng-google-logo-google-search-advertising-google-5acf6363115c02.0087192015235408350711.jpg',
              'https://p7.hiclipart.com/preview/765/354/325/apple-company-corporation-nasdaq-aapl-apple.jpg',
              'https://static.vecteezy.com/system/resources/previews/014/018/561/original/amazon-logo-on-transparent-background-free-vector.jpg',
              "https://w7.pngwing.com/pngs/746/404/png-transparent-netflix-thumbnail.png",
              "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg",
              "https://pngimg.com/d/linkedIn_PNG15.png",
              "https://pngimg.com/uploads/microsoft/microsoft_PNG9.png",
              "https://www.freeiconspng.com/uploads/facebook-transparent-logo-png-0.png",
             
    ];
  }

  renderElectrons() {
    const electronElements = [];
    const radius = 150;
    const centerX = 150; 
    const centerY = 150;

    for (let i = 0; i < this.state.electrons; i++) {
      const angle = (i * (360 / this.state.electrons) * (Math.PI / 180));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const imgSrc = this.electronImages[i % this.electronImages.length];

      electronElements.push(
        <img
          key={i}
          src={imgSrc}
          alt={`electron-${i}`}
          className="electron"
          style={{ left: x, top: y }}
        />
      );
    }

    return electronElements;
  }

  render() {
    const centerImage = './favicon.ico'; 

    return (
      <div className="containerr">
        <div className="left">
          <h2 className="h3">Placement</h2>
          <br />
          <h1 className="startText">
            &nbsp;&nbsp;&nbsp;&nbsp;Get Offers From<br />Top Companies
          </h1>
          <br />
          <h3 className="h32">Our finest get offers from top-notch companies.</h3>
        </div>
        <div className="right">
          <div className="electron-circle">{this.renderElectrons()}</div>
          <img
            src={centerImage}
            alt="center-image"
            className="center-image"
          />
        </div>
      </div>
    );
  }
}

export default Atom;

