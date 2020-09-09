let myName = ("Zach");
console.log(myName);

const numOfStates = 50;
console.log(numOfStates);

function sayHello() {
    alert("Hello world");
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    };
};
checkAge("Charles", 21),
    checkAge("Abby", 27),
    checkAge("James", 18),
    checkAge("John", 17);

let favVeg = ["Broccoli", "Squash", "Carrots",]
for (let i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
};

let myPet = {
    name: "Nola",
    breed: "German Shepard",
};
console.log(myPet.name, myPet.breed);

let people = [
    {
        name: "Bill",
        age: 11,
    },
    {
        name: "Bob",
        age: 10,
    },
    {
        name: "Harry",
        age: 21,
    },
    {
        name: "Marry",
        age: 89,
    },
    {
        name: "Jenny",
        age: 2
    },
];
for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);

};


function getLength(string) {
    return string.length
}
let stringLength = getLength('hello world');
let stringLength2 = getLength("hello mars");
if (stringLength % 2 === 0) {
    console.log("The world is nice and even")
} else console.log('the world is an odd place');

if (stringLength2 % 2 === 0) {
    console.log("The world is nice and even")
} else console.log('the world is an odd place');
