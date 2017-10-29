//
// Object Destructuring
//

const person = {
    name: 'Jesus',
    age: 30,
    location: {
        city: 'Monterrey',
        temp: 32
    }
};

const { name: firstName = 'Anoymous', age } = person;
const { city, temp } = person.location;

console.log(`${firstName} is ${age} years old`);
if(city && temp) {
    console.log(`The temperature in ${city} is ${temp}C`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'self-Published' } = book.publisher;

console.log(publisherName);

//
// Array Destructuring
//

const address = ['Huehuetoca 215', 'Garcia', 'Nuevo Leon', 66023];

const [, ciudad, state] = address;

console.log(`I live in ${ciudad} ${state}`);

const item = ['Coffee (Hot)', 2.0, 2.5, 2.75, ];

const [product, small, medium, large] = item;

console.log(`A medium ${product} costs $${medium}`);