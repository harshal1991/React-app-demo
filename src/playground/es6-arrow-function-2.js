const user = {
 name : 'Harshal',
 cities: ['Vadodara','Ankleshwar','New jersey','Dublin'],
 //placelived : function(){
 placelived(){
        
    //const that = this;
    //this.cities.forEach(function(city){
        
    //const citymessage = this.cities.map((city)=>{
      //           return  this.name + ' has lived in' + city;
   // });

   return this.cities.map((city)=>this.name + ' has lived in' + city);
   
    //this.cities.forEach((city) =>{
      //  console.log(this.name + ' has lived in ' + city)
    //});
     }

}




console.log(user.placelived());

const multiplier = {
    numbers: [1,2,3],
    muliplyBy : 2,
    muliply(){
       return this.numbers.map((number) => this.muliplyBy * number );
                }

        }

console.log(multiplier.muliply());