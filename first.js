/*
//1. Display the length of an array
let colors=['red','blue','yellow']
//console.log(colors);
console.log(colors.length);

//2. Remove last item in an array
colors.pop(colors);
console.log(colors);
console.log(colors.length);

//3. Push item into an array (lastIndex)
colors.push('black');
console.log(colors);
console.log(colors.length);

//4. Add new item to array (firstIndex)
const fruits = ['Apple', 'Orange', 'Strawberry','Peach'];
fruits.unshift('Mango')
console.log(fruits);
console.log(fruits.length); 

//5. Add items in an array using a function
let numbs=[9,10,11,1]
const addItemsArray=(numbs)=>{
  let sum =0;
  for (let i=0;i<numbs.length;i++){
    sum += numbs[i]
  }
  return sum
}
console.log(addItemsArray(numbs));


//6.Add Items from another array to another
let paid =['mose', 'kim', 'atandi']
let unpaid =['harry','karume']

paid.unshift(...unpaid)

console.log(paid); 

let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(...message){
        [].unshift.call(this, ...message)
    }
}
  greetings.prepend('Good day', 'Bye');
  console.log(greetings); 

//7. Remove item using splice method
let marangi=['red','blue','yellow']
marangi.splice(2,1,'purple')
console.log(marangi);  

//8. Reduce Function

let more=[20,30,50,100]
let sum=more.reduce((prev,current)=>{
  return prev * current
});
console.log(sum); */

// Given a list of integers, det the oroduct fi all the integers us even or odd:
  // a.) Return sum of integers if the product of integers is even.
  // b.) Returb 0 if the product of all integers is odd.

  
let hingegers=[4,4,2,0.3]
let product= hingegers.reduce((prev,current)=>{
  if ( prev * current %2 ==0){
    return prev + current
  }
  else {
    return 0};
})
console.log(product); 
