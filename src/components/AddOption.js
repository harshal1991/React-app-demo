import React from 'react';


 export default class AddOption extends React.Component {
   state = {
     error: undefined
   }
    // constructor(props){
    //   super(props);
    //   this.handleAddOption = this.handleAddOption.bind(this);
      
    // }
      
     handleAddOption = (e) => {
         
          e.preventDefault();
          const name = e.target.elements.inputname.value.trim();
          const error = this.props.handleAddOption(name);
    // this.setState(() => {
    //   return {error};
    // });
  
    this.setState(() => ({ error }));
    
    if(!error) {
      e.target.elements.inputname.value = '';
    }
          
        }
    
    render(){
      return(
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="inputname" />
          <button className="button">Add Option</button>
          </form>
        </div>
      )
    }
  }
 