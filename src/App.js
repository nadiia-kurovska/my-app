import React from 'react';
import ImageSlider from './components/ImageSlider'


function App() {
  const slides = [
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn2400', title: 'Bubble Nebula'},
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn2400', title: 'Eagle Nebula'},
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn2400', title: 'Lagoon Nebula'},
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-carina-nebula.jpg?t=tn2400', title: 'Carina Nebula'},
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-monkey-head.jpg?t=tn2400', title: 'Monkey Head Nebula'},
];

const containerStyles = {
  width: '500px',
  height: '380px',
  margin: '0 auto',
};

return (
    <div>
      <h1>NEBULAS</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
        
    </div>
);
}

export default App;
