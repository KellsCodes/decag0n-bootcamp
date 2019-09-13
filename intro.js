
let user = {
    name: 'Tega',
    email: 'xxx@gmail.com',
    password: 'onetwo3',
    login: function(){
        console.log('user is logged in');
    },
    friends: ['Gideon', 'Mike', 'Tolu', 'Ndidi'],
}

let username = user['name'];
let login = user.login;
console.log(login);
console.log(username);
//Array Method:
//(1) I can be able to find out if an object is an array  by using Array.isArray(user.friends);

let newfriend = 'Mark';
user.friends.push(newfriend);
// using for in loop:
for(let index in user.friends){//this loops thru the array in the object user.friends
    console.log(user.friends[index]);
};


//using a for of looping
for(let index of user.friends){ // loops thru the array index and calls with the index
    console.log(index);
};

//using foreach method:
// forEach method is a fine way of writing the for loop
user.friends.forEach((value,index) =>{
    console.log(value);  //forEach loop is a higher order function, it takes a another function as an argument;
    //this combines both the for in and for of loops together..
    //the first item is the value while second is the index of the array;
});

//MAP METHOD:
//Array.map()
// it returns a new array from the original array;
let total = [1,2,3,4];
let mapped = total.map((value, index)=>{
    return value + 1;
});
console.log(mapped, total);
// map method can be used to mutate the array;

//ARRAY.REDUCE() METHOD:
//this can be used for many things but basically, we use it to add up items in an array

let added = total.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0); // if specified with the accumulator, in this case it starts from 0 as specified, if the accumulator is omitted, 
            //it will start from the first item of the array
            // it deals with the values on the array does not have business with the index of the array.

console.log(added);

//the accumulator can be an array, a function, or an object

let manipulateddata = total.reduce((accumulator, currentValue)=>{
    accumulator.push(currentValue + 1);
    return accumulator;
}, []);

console.log(accumulator);

//FILTER METHOD()
//this is used to filter items from an array; it also returns an array like the map
let itemGreaterThanThree = total.filter((value)=>{
    return value > 2;
});

console.log(itemGreaterThanThree);


//QUESTION 1:
function findElements(arrayy, element){
    let result = [];
    for(let char of array){
        if(element === char){
            result.push(char);
        }
    }
    return result;
};

findElements([2,3,4,5,67,8,],5);


//using forEach
function findElements(array,element){
    let result = [];
    array.forEach(item => {
        item === element ? result.push(item): '';
    });

    return result;
};


//using array.filter() and ES6 
const findElements = (array, element)=>{
    return array.filter(item=> item===element);
}

// QUESTION 2:
const lengthOfNum = (array)=>{
    return array.filter(item => (item%2===0 || item%3 ===0) && item > 15).length; // the bracket was used because of precedence in js, this is important for mathematical ques
};

lengthOfNum([25,22,15,16,18,27,20]);

// QUESTION 5:
//find the total age of the applicants that applied for this interview from the table below
//totalAge([{name: 'XYZ', age: 23,}, {name: 'ABC', age: 40}])

//reduce can solve arrays that requires you to add up arrays

const totalAge = (array)=>{
    return array.reduce((acc,curr)=>acc.age+curr.age);
    //or
    /*
    let result = 0;
    for(let applicant of array){
        result += applicant.age;
    }

    return
    */
};


// 