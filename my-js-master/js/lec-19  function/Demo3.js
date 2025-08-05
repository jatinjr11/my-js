// const person = {
//     name: "sachin",
//     greet: function(){
//         console.log("Hello,", this.name);
//     }
// }

// person.greet();

const person = {
   greet: () => {
    console.log(this);
   }
}

person.greet();