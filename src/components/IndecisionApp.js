import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    state = {
        option:[],
        selectedOption: undefined
    }
    
    //   constructor(props){
    //     super(props)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.handlePickOption = this.handlePickOption.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOptionsingular = this.handleDeleteOptionsingular.bind(this);
           
    //   }
    handleDeleteSelectOption = () =>  {
      this.setState(()=>({ selectedOption: undefined}));
    };
      handleDeleteOption = () => {
        //  this.setState(() => {
        //   return {
        //       option: []
        //   };
        //  });
         this.setState(() => ({ option: []  }));
        }
       
        handleDeleteOptionsingular = (optionToremove) => {
          this.setState((prevState)=>({
            option: prevState.option.filter((option)=> optionToremove !== option)
      
          }));
      
        }
      
        handlePickOption = () => {
      
          const myran = Math.floor(Math.random() * this.state.option.length);
          const option23 = this.state.option[myran];
       
        this.setState(() => ({ selectedOption: option23  }));
       
             }
             handleAddOption = (option) => {
             
              if(!option){
                  return 'Enter valid value to add item'
              }else if (this.state.option.indexOf(option) > -1){
                return 'This item already exists..';
      
              }
             
              // this.setState((prevState)=>{
              //   return {
              //   option : prevState.option.concat(option)  
              //   };
      
              // });
      
              this.setState((prevState) => ({option : prevState.option.concat(option)}))
      
              
             }
      

      componentDidMount(){
        try{
    
          const json = localStorage.getItem('options');
          const opt = JSON.parse(json);
      
         if(opt){
          this.setState(() => ({ option: opt }))
        }
        }
        catch(e){
    
        }
        
      }
      componentDidUpdate(prevProps,prevState){
        if(prevState.option.length !== this.state.option.length){
          const json = JSON.stringify(this.state.option);
          localStorage.setItem('options',json);
        }
        
      }
      componentwillUnmount(){
        console.log('component will unmount');
      }
    
     
       render(){
        const title = 'Indecision App'; 
        const subtitle = 'Here is the subtitle';
       
        return(
          <div>
            <Header  subtitle={subtitle}/>
            <div className="container">
            <Action hasOption = {this.state.option.length > 0}
              handlePickOption = {this.handlePickOption}/>
              <div className="widget">
            <Options option= {this.state.option} 
              handleDeleteOption = {this.handleDeleteOption}
              handleDeleteOptionsingular = {this.handleDeleteOptionsingular}/>
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>
            </div>
            <OptionModal selectedOption={this.state.selectedOption} handleDeleteSelectOption={this.handleDeleteSelectOption}/>
          </div>
        );
      }
    }
    
export default IndecisionApp;