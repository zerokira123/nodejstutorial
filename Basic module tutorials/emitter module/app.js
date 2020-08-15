const EventEmitter = require('events')
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial',(num1, num2) =>{
//     console.log(num1 + num2);
// });

// eventEmitter.emit('tutorial',1,5);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    
    get name(){
        return this._name;
    }
}

let pedro = new Person('pedro')
let chris = new Person('pedro')

pedro.on('name',() => {
    console.log('my name is ' + pedro.name);
});
chris.on('name',() => {
    console.log('my name is ' + chris.name);
});

pedro.emit('name');
chris.emit('name');