
// import subtract,{ square, add } from './utils.js';
// import  isSenior,{ isAdult,canDrink } from './person.js'


// console.log("app js is running ! hello hw r u");
// console.log(square(2));
// console.log(add(100,200));
// console.log(subtract(500,200));
// console.log(isAdult(19));
// console.log(canDrink(23));
// console.log(isSenior(64));

// import validator from 'validator';

// console.log(validator.isEmail('harshal.prajapati37@gmail.com'));
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


    IndecisionApp.defaultProps = {
      option: []
    };
    
    
    class OldSyntax {
        constructor(){
                this.name = 'Harshal';
                this.getGreetings = this.getGreetings.bind(this);
        }
        getGreetings(){
            return `hi my name is ${this.name}`
        }
    }
    const old = new OldSyntax();
    const getGreetings = old.getGreetings;
    console.log(getGreetings());
//------------------Here is the new Syntax -------------------------------//
    class NewSyntax {
                name = 'Tarun';
            getGreeting = () =>{
                return `Hello my self ${this.name}.`
            }
    }
    const newsyn = new NewSyntax();
    const getGreeting = newsyn.getGreeting
    console.log(getGreeting());

    const LayOut = (props) => {
        return(
            <div>
                <p>Header</p>
                {props.children}
                <p>Footer</p>
            </div>
        )
    }

    const template = (
        <div>
            <p>Hello</p>
        </div>
    );
    
    ReactDOM.render(<IndecisionApp />,document.getElementById('app'));