

console.log('App.js is runnuiing  ');

const app = {
  Title:'Mr',
  SubTitle:'here is the subtitle',
  Options: []
};





const user = {
  name:'Harshal',
  Age: 26,
  Location: 'New Jersey'
};

//var UserName = 'Tarun';

//var UserAge = 29;

function getLocation(Location){

  if(Location){

    return <p>Location: {Location}</p> ;
  }
} 
const templateTwo =(
  <div>
    <h1>{user.name ? user.name :  'Ano'}</h1> 
    {(user.Age && user.Age >=18) && <p>Age:{user.Age}</p>}  
    
    {getLocation(user.Location)}


  </div>
);

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
 
  if(option){
    app.Options.push(option);
    e.target.elements.option.value = '';
    renderFun();
  }
  
  
  };


  const clearArray = () => {

    app.Options.splice(0,app.Options.length)
    renderFun();
   // app.Options = [];
    //app.Options.length = 0;
    
  };

  const random =() => {
    const myran = Math.floor(Math.random() * app.Options.length);
    const option = app.Options[myran];
    alert(option);
     

  };

const appRoot = document.getElementById('app');

const arraydim = ["test","test2"];
const renderFun = () => {
  const template = 
  (
    <div>
    <h1>{app.Title}</h1>
    {(app.SubTitle) && <p>{app.SubTitle}</p>}
    <p>{(app.Options.length>0) ? "Here are your options" : "No Options"}</p>
    <p>{app.Options.length}</p>

    <ol>
    {
      app.Options.map((option)=>{
        return <li key={option}>{option}</li>

      })
    }
    </ol>
  
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"/>
    <button>Add Option</button>
    <button disabled = {app.Options.length === 0} onClick={random}>What should i do?</button>
    <button onClick={clearArray}>Remove All</button>

    </form>
    

  </div>
  );
  ReactDOM.render(template,appRoot);
};

renderFun();