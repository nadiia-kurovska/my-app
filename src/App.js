import React from 'react';
import ImageSlider from './components/ImageSlider';
import Lamp from './components/Lamp';


function App() {
  const slides = [
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn2400', title: 'Bubble Nebula', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn2400', title: 'Eagle Nebula', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn2400', title: 'Lagoon Nebula', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-carina-nebula.jpg?t=tn2400', title: 'Carina Nebula', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {url: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-monkey-head.jpg?t=tn2400', title: 'Monkey Head Nebula', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'},
];

const containerStyles = {
  width: '500px',
  height: '380px',
  margin: '0 auto',
};

const LampHandler = (lampState) => {
  console.log('lamp click')
  console.log(!lampState.isOn);
};

return (
    <div>
      <Lamp callback={LampHandler}/>

      <h1>NEBULAS</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
        
    </div>
);
}

export default App;
