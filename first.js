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

//5. Add items in an array
const nums =[4,5,68,9,1]
addition=sumOf(nums)
console.log(addition); 

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
  console.log(greetings); */

//7. Remove item using splice method
let marangi=['red','blue','yellow']
marangi.splice(2,1,'purple')
console.log(marangi);