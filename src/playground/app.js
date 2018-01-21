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
    this.handleDeleteOptionsingular = this.handleDeleteOptionsingular.bind(this);
    this.state = {
        option: props.option
    };

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

  handleDeleteOption(){
  //  this.setState(() => {
  //   return {
  //       option: []
  //   };
  //  });
   this.setState(() => ({ option: []  }));
  }
 
  handleDeleteOptionsingular(optionToremove) {
    this.setState((prevState)=>({
      option: prevState.option.filter((option)=> optionToremove !== option)

    }));

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
       
        // this.setState((prevState)=>{
        //   return {
        //   option : prevState.option.concat(option)  
        //   };

        // });

        this.setState((prevState) => ({option : prevState.option.concat(option)}))

        
       }
 
   render(){
    const title = 'Indecision App'; 
    const subtitle = 'Subtitle Is here';
   
    return(
      <div>
        <Header  subtitle={subtitle}/>
        <Action hasOption = {this.state.option.length > 0}
          handlePickOption = {this.handlePickOption}/>
        <Options option= {this.state.option} 
          handleDeleteOption = {this.handleDeleteOption}
          handleDeleteOptionsingular = {this.handleDeleteOptionsingular}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  option: []
};


const Header = (props) => {
  return (
    <div>
          <h1>{props.title}</h1>
          {
            props.subtitle && <h2>{props.subtitle}</h2>
          }        
    </div>
    )
};

Header.defaultProps ={
  title: "Indecision Application"
}

const Action = (props) => {
  return(
    <div>
    <button 
    onClick={props.handlePickOption}
    disabled = {!props.hasOption}>SignUp</button>
    </div>
  )
};


const Options = (props) => {
  
  return(
    <div>
    <button onClick={props.handleDeleteOption}>Remove All</button>
    { props.option.length === 0 && <p>Please add an option to get started!</p> }
    {
            props.option.map((option) => (
            <Option key={option} optionText={option} 
            handleDeleteOptionsingular={props.handleDeleteOptionsingular}
            />))
     
    }
    </div>
  )

};

const Option = (props) => {
  return(
    <div>
    
      <p>Option : {props.optionText}</p>
      <button onClick={()=> {
        props.handleDeleteOptionsingular(props.optionText);
      }}
      >Remove</button>
    </div>
);
};


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
        {this.state.error && <p>{this.state.error}</p>}
        
      <form onSubmit={this.handleAddOption}>
        Input : <input type="text" name="inputname" />
        <button>Submit</button>
        </form>
      </div>
    )
  }
}


const User = (props) =>{
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age : {props.age}</p>
    </div>
  )
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));