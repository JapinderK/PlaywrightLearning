const user = {
    firstName: "Japinder",
    lastName: "Kaur",


get fullName() {
        return this.firstName + this.lastName
    },
    set fullName(value) {
        [this.firstName,this.lastName]= value.split(" ")
    }
}

//Objects - JS{}
//class and object are different
//this keyword is used to refer to the current value in the Object

console.log(user.fullName);
user.fullName = "Japinder Kaur";
console.log(user.fullName);
