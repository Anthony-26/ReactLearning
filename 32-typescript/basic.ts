/* PRIMITIVES */

let age: number;
let userName: string;
let isInstructor: boolean;


/* MORE COMPLEX TYPES */

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// Creating a custom type
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 30,
};

// Same object than before, but array
let people: Person[];


/* TYPE INFERENCE */

let course: string | number = 'React';


/* FUNCTIONS & TYPES */

function add(a: number, b: number){
  return a + b;
}

function printValue(value: any){
    console.log(value);
}

/* GENERICS T TYPE : SAFETY AND FLEXIBILITY */ 

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2 ,3];
const updatedArray = insertAtBeginning(demoArray, -1);
// updatedArray[0].split(''); -> Impossible