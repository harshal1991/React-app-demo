    class VisibilityToggle extends React.Component {
        
        constructor(props){
            super(props);
            this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
            this.state = {
                visibility: false
            }
           
        }
        handleToggleVisibility(){
            this.setState((prevState) => {
                return {
                      visibility : !prevState.visibility
                 };
            });
            
        }

        render(){
            
            return(
                <div>
                <h1>Visibility Toggle</h1>
                
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'hide detail':'show detail'}
                </button>
                { 
                    this.state.visibility && (
                        <div><p>Hello Here is some content</p></div>
                     )  
                }
                </div>
            )
        }
    }

    ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
 
// let visible = false;

// const toggleVisibility = () => {
//     visible = !visible;
//     render();
// }

// const render = () =>{

//     const jsx  = (
//         <div>
//         <h1>visibility Toggle </h1>
//         <button onClick ={toggleVisibility}>
//         {visible?'Hide Detail':'show detail'}
//         </button>
//         { 
//             visible && (
//                 <div> 
//                 <p>Hey, There are some details you can now see!</p>
//                 </div>

//             )}
//         </div>

        
//     );

//     ReactDOM.render(jsx,document.getElementById('app'));


// };

// render();