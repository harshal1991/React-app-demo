
class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      //count: props.count
      count: 0
    };
  }
  
  componentDidMount(){
    try {
   const json = localStorage.getItem('count');
   const cnt = parseInt(json,10);

   if(!isNaN(cnt)){
     this.setState(()=>({count: cnt}));
   }
  }
  catch(e){

  }
  }

  componentDidUpdate(prevProps,prevState){
 if(prevState.count !== this.state.count){
   const json = JSON.stringify(this.state.count);
   localStorage.setItem('count', json);
  }
  }

handleAddOne() {
  this.setState((prevState) => {
        return {
            count: prevState.count + 1
      };

  });
}
handleMinusOne(){
  this.setState((prevState)=>{
      return {
        count: prevState.count - 1  

      };
  });


}
handleReset(){
  this.setState(()=> {
    return {
      count: 0
    };

  });  

  // this.setState((prevState)=>{
  //   return {
  //       count: prevState.count + 1 
  //   };
    
  //     }); 
}
  render(){
    return(
          <div>
            <h1>count: {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
          </div>
    );
  }
}

Counter.defaultProps = {
  count : 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
// //console.log("Button is pressed");
// count++;
// renderCounterApp();
// };

// const minusOne = () => {
//   //console.log("minusOne");
//   count --;
//   renderCounterApp();
// };

// const reset =() => {
//   count=0;
//   renderCounterApp();
// }


// const renderCounterApp = () =>{

//   const templateThree =(
//     <div>
//       <h1>Count: {count}</h1>
//       <button id="my-id" onClick={addOne} className="button">+1</button>
//       <button id="minusbu" onClick={minusOne} className="button">-1</button>
//       <button id="resetbu" onClick={reset} className="button">Reset</button>
//     </div>
    
//     );
//     ReactDOM.render(templateThree,appRoot);

// }

// renderCounterApp();