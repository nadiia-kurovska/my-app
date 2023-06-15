import React from "react";
import styles from './Aloha.module.scss';

class Aloha extends React.Component {
    constructor(props) {
        super(props);

        };

    render() {   
        const { names } = this.props;
        const alohaItems = names.map(person =>
        <li key={person.id}>
            Hello, {person.name}
        </li>
    )

    return <div> 
         <ul>{alohaItems}</ul>
         </div>

    }
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