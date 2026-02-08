//Fundamentals of javascript
//Arrays and onjects
//functions return
//async js coding

//...........................alert............................
//alert("Hello World");

//...........................Arrays................................
var arr = [1, 2, 2, 3, 4];


 //forEach Function
arr.forEach(function(val)
{
    console.log(val + " hello");
})



// map function
var ans1 = arr.map(function(val){
    return 13;
})
 console.log(ans1);


// map function
   var ans2 = arr.map(function(val){
   return val * 2;
   })
   console.log(ans2);


//filter function
var ans3 =arr.filter(function(val){
    if(val>3) {
        return true;
    }
    else
        return false;
})
    console.log(ans3);



//find function
var ans4 = arr.find(function(val){
    if(val ===2)
        return val;
})
console.log(ans4);


//............................objects...............................

var obj = {
    name : "Anuj",
    age : 21,
}
Object.freeze(obj);
obj.age = 23;

function abcd(a,b,c){

}

function anuj(){
    return 65;
}

var ans5 = anuj();


//.........................await........................
/*
var blob = await fetch('https://randomuser.me/api/');
var res = await blob.json();

console.log(res);
*/

//..........................async function.......................

async function rana(){
  var blob = await fetch('https://randomuser.me/api/');
  var res = await blob.json();
  console.log(res.results[0].name);
}

rana();


