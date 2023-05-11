var fruits =["mango","apple","orange",11];
console.log(fruits.length);
fruits[4]="pineapple";
fruits.push("abc");//add last element
fruits.pop();//deletes last element
fruits.shift();//deletes first element
fruits.unshift("added");//adds as first element
console.log(fruits);