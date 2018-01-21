const obj = {
    'name':'Harshal',
    getName(){
      return this.name;
    }
  }
  
  const op = obj.getName.bind(obj);
  console.log(op());
  
  
  class IndecisionApp extends React.Component{
  
    constructor(props){
      super(props)
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handlePickOption = this.handlePickOption.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
          option: []
      };
  
    }
  
    handleDeleteOption(){
     this.setState(() => {
      return {
          option: []
      };
     });
    }
  
    handlePickOption(){
  
      const myran = Math.floor(Math.random() * this.state.option.length);
      const option23 = this.state.option[myran];
    alert(option23);
      
         }
         handleAddOption(option){
  
          if(!option){
              return 'Enter valid value to add item'
          }else if (this.state.option.indexOf(option) > -1){
            return 'This item already exists..';
  
          }
         
          this.setState((prevState)=>{
            return {
            option : prevState.option.concat(option)  
            };
  
          });
         }
   
     render(){
      const title = 'Indecision App'; 
      const subtitle = 'Subtitle Is here';
     
      return(
        <div>
          <Header  title={title} subtitle={subtitle}/>
          <Action hasOption = {this.state.option.length > 0}
            handlePickOption = {this.handlePickOption}/>
          <Options optionss= {this.state.option} 
            handleDeleteOption = {this.handleDeleteOption}/>
          <AddOption handleAddOption={this.handleAddOption}/>
        </div>
      );
    }
  }
  
  
  class Header extends React.Component {
    render(){
      return (
      <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
      </div>
      )
     }
  }
  
  
  
  class Action extends React.Component{
    //handlepick(){
    //alert('handlepick');
  //}
  
  render(){
    return(
      <div>
      <button 
      onClick={this.props.handlePickOption}
      disabled = {!this.props.hasOption}>SignUp</button>
      </div>
    )
  }
  }
  
  class Options extends React.Component  {
  constructor (props){
    super(props);
    //this.handleRemoveAll = this.handleRemoveAll.bind(this);
    
  }
  
    handleRemoveAll(){
     // console.log(this.props.optionss);
    }
   
          render(){
                 
                      return(
                              <div>
                              <button onClick={this.props.handleDeleteOption}>Remove All</button>
                              {
                                //this.props.options.map((option) => {
                                  //    return <p key={option}>{option}</p>
                                //})
  
                                this.props.optionss.map((option) => <Option key={option} optionText={option} />)
  
                                
                              }
                              </div>
                            )
                  }
  }
  
  class Option extends React.Component {
    render(){
      return(
          <div>
          
            <p>Option : {this.props.optionText}</p>
          </div>
      );
    }
  
  }
  
  const test = () => {
  
    return "Hello";
  }
  
  class AddOption extends React.Component {
    constructor(props){
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      }
    }
  
     
     handleAddOption(e) {
         
          e.preventDefault();
          const name = e.target.elements.inputname.value.trim();
          const error = this.props.handleAddOption(name);
    this.setState(() => {
      return {error};
    });
          
        }
    
    render(){
      return(
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          
        <form onSubmit={this.handleAddOption}>
          Input : <input type="text" name="inputname" />
          <button>Submit</button>
          </form>
        </div>
      )
    }
  }
  
  //const jsx = (
    //<div>
    //<Header />
    //<Option />
    
    //<AddOption />
    //<Action />
    //</div>
  
  //);
  
  const User = (props) =>{
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age : {props.age}</p>
      </div>
    )
  }
  
  
  ReactDOM.render(<IndecisionApp />,document.getElementById('app'));