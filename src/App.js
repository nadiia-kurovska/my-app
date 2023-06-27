import React from 'react';
import Light from './components/Light'
import Aloha from './components/Aloha';
import Form from './components/Form';
import Bucket from './components/Bucket';
// import ImageSlider from './components/ImageSlider'


class App extends React.Component {

    render( ){

        return(
            <>
                <Light/>
                <Form />
                <Bucket />
                {/* <ImageSlider/> */}
                
            </>
        )
    }
};    
// 
// const names = [
//   {name:'John Doe', id: '1'},
//   {name:'Will Smith', id: '2'},
//   {name:'Jack Wong', id: '3'},
//   {name: 'Kim Patisson', id: '4'},
//   {name:'Kelly Johnes', id: '5'},
//   {name: 'Anna Conner', id: '6'},
//   {name: 'Britanny Paugh', id: '7'},
// ]

// const AlohaHandler = (alohaState) => {}



// // const clickSpaceHandler = () => {
// //   alert('Now you will be send to the SPACE!');
// // };      why is it not working???

// return (
//     <div>
//       <Lamp 
//         callback={LampHandler}
//         comment="it is a comment to lamp"      
//       />
      
//       <Aloha names={names} text="i can do it" greeting={AlohaHandler}/>

//       <FlexContainer names={slides}>
//         <li></li>
//         <li></li>
//         <li>amracadabra</li>
//       </FlexContainer> 



        
//       <Image
//           width='700px'
//           height='500px'
//           // onClick={this.clickSpaceHandler}
//           title='Space'
//           style={{ border: '10px solid black' }}
//         >
//           <img
//             src='https://images.immediate.co.uk/production/volatile/sites/25/2020/04/Things-never-knew-astronomy-e454e5d.jpg?quality=90&webp=true&resize=1000,667'
//             alt='Space'
//           />
//         </Image>  
//     </div>
// );
// }

export default App;
