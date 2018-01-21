var vaname = 'Harshal';
var vaname = "Praja";
console.log('MyName',vaname);


let letname = 'Tarun';
letname = 'Tarun1';
console.log('MyName',letname);   

const constname = "Pravin";
console.log('MyName',constname);   

const fullname = "Harshal Prajapati";
function Testfun(){
     //fullname = "Harshal Prajapati"
     console.log(fullname);   
     
    return fullname;
}

 Testfun();
//console.log(fullname);   

//Block Scoping

const fulllname = "Tarun Prajapati";
let fisrtname;
let lastnamev;

if(fulllname)
    {
        fisrtname = fulllname.split(' ')[0];
        lastnamev = fulllname.split(' ')[1];
        console.log(fisrtname);   
    }
console.log(fisrtname); 
console.log(lastnamev); 