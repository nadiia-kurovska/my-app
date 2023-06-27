import React from "react";
import styles from './Aloha.module.scss';

class Aloha extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHello: true,
        };
      };  

        clickHandler = () => {
            this.props.greeting(this.state);
            this.setState({isHello: !this.state.isHello})
        };
  

    render() {  
        const greetingText = (this.state.isHello? 'Hello' : 'Goodbye'); 
        const { names } = this.props;
        const alohaItems = names.map(person =>
        <li key={person.id}>
            <span onClick={this.clickHandler}>{greetingText}</span>, {person.name}
        </li>
        ); //how to make change in each element seprately?

    return <div> 
         <ul>{alohaItems}</ul>
         <button >sort in alpabeticat order</button>
         </div>

    };
};

    //     sayBye = () => {
    //         console.log('+')
    //     }; 
    
    // render (){
    //     const { names } = this.props;
    //     const alohaElements = names.map((names) => (
    //         <li onClick={this.sayBye} key={this.id} >
    //             <p>Hello, {this.props.name} </p>
    //         </li>
    //     ));

    //     return <div> 
    //     <ul>{alohaElements}</ul>
    //     <p>{this.props.text}</p>
    //     </div>
        
    // }

export default Aloha;