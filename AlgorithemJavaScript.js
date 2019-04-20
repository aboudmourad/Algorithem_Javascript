// 1. Print 1 - 135 
// Write a program using JavaScript that will print all the numbers from 1 to 135.
for (i=0; i<=135; i++){
   console.log(i);
}
// First of all we make a loop that starts from 0 and less of equal then 135 in order to print number 135 and then console log i.

i  |0|1|2|3|4|5|6|7|8|...

// Print the odd number.
for (var i = 1; i < 136; i++ ){
    if ((i % 2) !==0){
      console.log(i)
      }
}

// we make a for loop that count from 1 untill 135 then we make if statment that check whether the number modulo 2 not equal to 0 then print it.

i           |1|2|3|4|5|6|7|8...
%2          |1|0|3|0|5|0|7|0....
console.log |1|3|5|7|....


// Sum of Printed Numbers
var sum=0;
for (i=1; i<=135; i++){
sum=sum+i;
console.log("number is " +i+ " sum is " +sum);           
}

// we declare an varible that equal to 0 then we make a for loop that count from 1 till 135 after that we will make an equation that has the sum of the number + 1 

i           | 1|2 |3 |4 |5 |6 |7 |8 |9
sum         |1 |3 |6 |10 |15 |21 |28 |36 |45 

// print an array
var x=[1, 4, 2, 12];
for (var i = 0; i < x.length; i++) 
	console.log(x);

// first of all we declare an array with numbers then we make for loop that go through the array and print each element on the screen .

i |0 |1 |2 |3
x |1 |4 |2 |12

// find the maximun nmber in the array 
var X = [2,-3,-1, 4]
var Max = X[0];
for(i=0;i<=X.length-1;i++)
  {
    if(Max<X[i])
      {
        Max=X[i];
      }
  }
console.log("Maximum value is " + Max)

// We declare an array that has a number then we declare a varible that equal to one number in the array and then we make for loop that loop inside the array. Inside the for loop we check with if statment whither the variable is less then the each number in the array and then we make it equal to that number. 

x   | 2|-3 |-1|4
i   |0 |1 |2 |3
max |2 |2 |2 |4

// avarage number in the array
var numbers = [4, 5, 1, 3, 6];
for ( var i = 0; i < numbers.length; i++){
var avarage = (numbers[i] / numbers.length) * numbers.length
}
console.log(avarage);
            
// we declare an array then a for loop that loop through the array. After that we declare a variable equal to equation that dividing the number of the array to the number.length and multiply them with the number.length.

number  |4 |5 |1 |3 |6
i       |0 |1 |2 |3 |4
avarage |6


// Remove the negative numbers
x = [2,-1,4,-3]
l = 0;
for ( var i = 0; i < x.length; i++ ){
  if ( x[i] < 0) {
    x[i] = l;
  }
  console.log(x);
    
// we declare an array with numbers and variable that equal to zero then for loop that looping inside the array. After that we declare an if statment to check whither each number is negative and replace it to 0.
    
x           |2 |-1 |4 |-3
l           |- |0 |- |0
i           |0 |1 |2 |3
console.log |2 |0 |4 |0
    
// NUmber to String 
    x = [2,-1,4,-3]
l = "Turing";
for ( var i = 0; i < x.length; i++ ){
  if ( x[i] < 0) {
    x[i] = l;
  }
  
}
console.log(x);
    
    // we declare an array with numbers and variable that equal to zero then for loop that looping inside the array. After that we declare an if statment to check whither each number is negative and replace it to 0.
    
x           |2 |-1 |4 |-3
l           |- |"Turing"|- |"Turing"
i           |0 |1       |2 |3
console.log |2 |"Turing"|4 |"Turing"
    
//Addition
for (var i= 200; i<=2700; i++){
  if ( i%3 == 0){
   
    
    
    console.log(i);
  } else (i%5==0) {
      
      console.log(i);
  }
}

    // we make a for loop between 200 and 2700 then we make if statment to check whither the number is divisible to 3 or 5 to print it.
    
i  |200 |201 |202 |203| 204
%3 |- |- |- |0
%5 |0 |- |- |- 
    
    
// Shift the value 
    x = [2,1,6,4,-7]
l =[]
for (var i = x.length - 1; i >= 0; i--) {
  l.push(x[i]);
 
}
console.log(l);
    
    // we declare an array and empty array then for loop that looping oppositely and then we use the function push in order to puch the oppositely number inside it.

x | 2|1 |6 |4 |-7
l | -7|4 |6 |1 |2
i |4 |3 |2 |1 |0
    
//FizzBuzz
    
x=[];
for (var i = 1; i <= 135; i ++){

if ( i % 3 === 0 && i % 5 === 0 ){
    x[i-1] = "FizzBuzz";
    
  } else if ( i % 5 === 0){
    x[i-1] = "Buzz";
    
  } else if (  i % 3 === 0) {
    x[i-1] = "Fizz"
   
  } else {
   x[i-1]=i
  }
}
console.log(x);

// first of all we declare for loop that looping from 1 till 135 and three if statment that check whither the number is divisible to 3 or 5 or each of them then we replace it to a certain word.
i   | 1| 2| 3| 4| 5    |15
%3%5| -| -| -| -| - --- FizzBuzz
%5  | -| -| -| -|Buzz
%3  | -| -|  |Fizz| -|
    
    
// Factorialize 
    function iFact(num) {
    var fact = 1;
    
        for (var i = 1 ; i <= num; i++){
            fact = fact * i;
        }
        return fact
    }
    

console.log(iFact(5));
// first we declare a function with one arrgument then we declare a varible equal to 1 in order to make the equation which is the varible is multi to itself and the i that its inside a for loop that starts from 1 and i is less or equal to the arrgument of the function after we return the varible to get the final number.

i    |  1| 2|3|4 |5
--------------------
fact |  1| 2|6|24|120
--------------------
num  |  1| 2|3|4 |5


///// find the 3rd highest number
function thirdHighest (input){
    var first =0;
    var second =0;
    var third=0;
    
    for(var i =0; i<input.length; i++){
        if (input[i] > first){
            third = second;
            second = first;
            first = input[i];
        }
        else if (input[i] > second) {
            third = second;
            second = input[i];  
        }
        else if (input[i] > third) {
            third = input[i];
        }
    }
    return third;
}
console.log(thirdHighest([2,5,3,1,4]));

// we make a function that has one arrgument and insdie it three varibles that equal to 0 afterthat we make a for loop that looping the the array and three if statment that check the highest number in the array and then check the lower number then it to arrive to the third highest number and finaly return it.

i      | 2 |5 |3|1|4
first  | 2 |2 |3| |4
second | 0 |2 |3| |3
third  | 0 |0 |2| |3

// palind;
function palind (input) {
for (var i = 0; i < input.length / 2; i++) {
  if (input[i] === input[input.length - 1 -i]) {
  } else {
    return "its not a palindrome"
  }
}
return "its a palindrome";
}

console.log(palind("madam"));

// we make a function that has an arrgument and for loop. inside the for loop we are dividing the array into two part in the half in order to compary the two parts together then we make an if statment to check whether the two parts are equal to each other.
// Largest Number in Arrays

i                  |0 |1|2
input[i]           |m |a|d
input[length-1-i]  |m |a|d


// largest number in arrays
var x =[[19,1000],[-3,-2],[-34,95]]
var max =0;
var newarr = [];

for(var i =0; i < x.length; i++){
  max = x[i][0];
 for(var j =0; j <x[i].length; j++){

   if (x[i][j]>max){
     max = x[i][j];
   }
 }
 newarr.push(max);
}

console.log(newarr);

// we make a varibale that contain an arrays then will declare two varilbe and an array. then we make two for loops in order to check each biggest number in each array and then push the biggest number from each array into the new array.

i      |[19,1000,346,275]|[-3,-2] |[-34,95]
j      |19 / 1000        |-3 / -2 |-34 / 95
x[i][j]|19 / 1000        |-3 / -2 |-34 / 95
max    |1000             |-2      |95
newarr |1000             |[1000,-2]|[1000,-2,95]



///// Longest word in a String 

function longestWorld(sen){

var str = sen.split(" ");
console.log(str);
var max = 0;
for ( var i = 0; i < str.length; i++){
    if ( str[i].length > max) {
        
        max = str[i].length;
        
    }
   
}
 return max;
}
var sen = "the quick brown ";
console.log(longestWorld(sen))


// we make a function that has one arrgument which is the sentence. then we make a varibale that has an split function to make each word a string and count the number of the word after that we declare a for loop that count the numbers of the letters inside each word to compare it with another word. Finaly return the longest word in a string.

i             |0   |1    |2
Str           |the |quick|brown
str[i].length |3   |5    |5
max           |3   |5    |5

/////Title Case a Sentence

function firstLetter(str){
var sol = [];

var newStr = titleCase.split(" ");
for ( var i = 0; i < newStr.length; i ++){
    var l = newStr[i][0].toUpperCase().slice([i][1])
   
   
      sol.push(l + newStr[i].slice([1])) ;
     
  
}
    return sol
    
}

var titleCase = "I'm a little tea pot";
console.log(firstLetter(titleCase));

// we declare a function with one arrgument. inside it one empty array and one varibale that splut the string then for loop that looping inside each word and make the first letter a capital letter after that will push it inside the empty array and finaly return it.


newStr |"I\'m" 'a' 'little' 'tea' 'pot' 
i      |0   |1 |2     |3  |4
push   |I'm |a |little|tea|pot
sol    |i'm |A |Little|Tea|Pot


//Sum All Numbers in a Range

function sum(arr){
 var min=arr[0], max=arr[1], x =0;
  if (arr[0] > arr[1]){
   var ph=min;
    min = max;
    max=ph;
  
    }
for (var i = min; i <= max; i++){
     x+=i;
  
  }
  
return x;
  
}

console.log(sum([1,4]));
console.log(sum([14,1]));

// first of all we make a function that has one arrgument and inside it we declare 3 varibles to cover the the values of the array and one varible equal to zero. then we make if statment to check whether the first or the second are biggest then we make for loop with equation that make the sum of the numbers.

min |1 |1|1|1
max |4 |4|4|4
x   |1 |3|6|10
i   |1 |2|3|4
ph  |  |

// Fibonacci Sequence
var a = 0;
var b = 1;
var c = 1;

for(var i=1; i <=100; i++) {
 console.log(c);
 c=a+b;
 a=b;
 b=c;
}

// first we declare three variable one equal to 0 and two equal to 1 after that we make a for loop that starts from 2 untill 6. In the first place we console log the the last variable in order to get doule number then we make equation in order to get the  fibonacci result.

a |0|1|2|3|4
b |1|2|3|4|5
c |1|1|2|3|5
i |1|2|3|4|5

//Prime
function isPrime(num) {
    if(num < 2){
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num %i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(5))

// firs we declare a function that has one arrgument and one if statment to check whether the number in less then 2 to return false otherwise return true. Inside the if statment we make a for loop that check if the number is prime of not with equation that make the modulo the number of the i.

num  |5
num<2|true|
i    |2   |
num%i|----|
return true



//Bubble Sort:
function bubbleSort(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length-1; i++) {
       for (var j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bub([70, 8, 23, 1]))

//First of all, we make a function with one argument then in side the function we make two for loop that looping in order to compare two
//and switch it then moved to the next two element and check to whether the first element is bigger then the other.
//we defined a varible temp equal to zero to hold the number that bigger then the another and switch it. then will move to the second two 
//numbers and compare it. in the end will return the arr.

arr      |__70,8____|_____|_ 
i        |  0       |  1    |2        |1     |0
j        |   0      |  1    |2        |2     |1
arr[j]   |  70      |  70   |70       |23    |1
arr[j+1] |   8      |   23  |1        |1     |1
temp     |   8      |   23  |1        |1     |23
new arr  | 8,70     |8,23,70|8,23,1,70|8,1,23|1,8,23,70



// Selection sort:

function selectSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var temp;
        var min = arr[i];
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}
console.log(selectSort([70, 8, 23, 1]))


// first of all we declare a function that has one arrgument and three variable which are placeholder, the element of the array itself and the mini index in side the first loop then we make a another for loop to make the comprasion between two element one from the first loop and then second from the second loop and put the smallest element in place holder in order to put it in a first and so on untill we compare all the numbers in the array.

i        |0 |1|2 |3
j        |1 |2|3 |4
arr[i]   |70|8|70|-
arr[j]   |8 |1|23|- 
minIndex |j |j|j |-
temp     |8 |1|23|-
arr      |[1,8,23,78]
    


//rFactorial vs iFactorial
    
var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3));

// we declare a function that has one arrgument and if statment that has if statment to check whither the number is equal to zero in order to return 1 and then we make an equation which is to have a multi of the number to the number itself - 1 and each time the equation in right will make the equation again from the result of the minus

n          |3|3|3
n-1        |2|1|1
factorial*n|-|-|6
    (n-1)
   

//Bunny Ears
function bunnyEars(bunnies) {
  
  if (bunnies == 0) {
      return 0;
  }
 
  return 2 + bunnyEars(bunnies-1);
}

console.log(bunnyEars(5))

// we make a function that has one arrgument and if statment to check whither the arrgument is equal to zero in order to return 0 otherwine will return number two because each bunny has two ears in sum of the function minus 1 

bunnies   |5       |5      |5      |5
bunnies -1|4       |3      |2      |1
return    |2-(4-1) |2-(3-1)|2-(2-1)|2-(1-1)


// fibonacci in recursion
function fibonacci(n) {
   if (n <= 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}
console.log(fibonacci(3));


// first we make a function that has one arrgument and has one if statment that return to 1 if the number is less or equal to 2 then make the equation 

n      |3    |3      |3
(n-2)  |(1-2)|(1-1)  |(1)|1
(n-1)  |(2-3)|(1-2)  |(1)|1
return |     |       |   |2
    
    
// Maximum Product of 2 Values
<?php

function maxProduct(){
$arr = array(2, 3, 4, 7, 10);
sort($arr);
return ($arr[count($arr)-1] * $arr[count($arr)-2]);
}
print maxProduct();


?>



//PSEUDO CODE:
To get a Max of product:
1 - Create a function called maxProduct
2 - Create a variable array 
3 - Use built in function to sort this array from smaller to greater
4 - Return the multiplication of the two last elements





$arr      |(2, 3, 4, 7, 10)  
sort $arr |(2, 3, 4, 7, 10)
return    |7*10=70
    
    
// Validate an IP address

<?php

function validIP($arr){
if((count($arr)>0) && (count($arr)<5)){

for($i=0; $i<4; $i++){

if(($arr[$i]>=0) && ($arr[$i]<=255)){
  echo "(Vaild IP part)" . " ";
}

else{
  echo "(Invaild IP part)" . " ";
}
}
}
else{
  echo 'This is not an IP address format, IP address has to have 4 part';
}
}
validIP([-11,244,1,-9]);


?>



//PSEUDO CODE:
To validate an IP address format:
1 - Create a function called validIP
2 - Create a condition to check that the IP address has only 4 parts 
3 - Create a loop to check every part of the IP address. 
4 - Create a condition inside the loop, that check whether each part is greater than 0 and smaller than 255 and echo the result
4 - Call the function validIP


$arr                            |[100,255,-4,7]  
Condition to check the validity |100 is a valid IP part |255 is a valid IP part |-4 is NOT a avalid IP part |7 is a valid IP part

=> it is not a valid IP address



//Angle on the clock

<?php
function AngleOfClock($hours, $minutes) { 
  $hours = $hours % 12;
  
      $hourMinPart = 0.5 * $minutes; 
      $hourHourPart = 30 * $hours; 
      $minAngle = 6 * $minutes; 
      $totalAngle = abs($hourMinPart + $hourHourPart - $minAngle); 
      
        if ($totalAngle<=180){
        echo $totalAngle .' ' .'degrees'; 
        }
        
        else{
        echo (360 - $totalAngle) .' ' .'degrees'; 
        } 
  
}

AngleOfClock(10, 00);
?>

 //SEUDO CODE:
To get the Angle on the clock:
1 - Create a function called AngleOfClock
2 - Divid the hours by 12
3 - Create variables for minutes and hours
4 - Allocate math formulas to define hours and the minutes parts
5 - Apply a built in function 'abs'  to calculate the total angle corresponding to the chosen hour
6 - Create a condition to check and echo only the angle between the clock hands
7 - Call the function AngleOfClock




$hours                     |10
$minutes                   |30
the angel is less than 180 |135 degrees

