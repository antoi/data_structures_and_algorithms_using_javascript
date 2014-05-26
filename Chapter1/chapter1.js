/*var david = {
   first_name: "David",
   last_name: "Durr"
};

var student1 = {
   id: "1234",
   courses: ["Programming I", "English II", "Algebra"],
   advised: false
};

console.log(david.last_name); // displays "Durr"
console.log(student1["id"]); // displays "1234"
console.log(student1.courses[1]); displays "English II"
student1.advised = true;
david.age = 50;*/
function Person(first, middle, last) {
   this.first = first;
   this.middle = middle;
   this.last = last;
   this.initials = initials;
}

function initials() {
   return this.first[0] + this.middle[0] + this.last[0];
}

var oPerson = new Person("John","Quincy","Public");
console.log("First name: " + oPerson.first);
console.log("Middle name: " + oPerson.middle);
console.log("Last name: " + oPerson.last);
console.log("Initials: " + oPerson.initials());
