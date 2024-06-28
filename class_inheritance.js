//Create a class named Animal with a constructor that sets the name property 
//and a method named speak that logs "The animal makes a sound." Create 
//a subclass named Dog that overrides the speak method to log "The dog barks." 
//Instantiate a Dog object and call its speak method.

class Animal {
    constructor(name) {
        this._name = name;
    }

    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

const dog1 = new Dog("golden");
dog1.speak();
