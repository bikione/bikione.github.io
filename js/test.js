
/*window.onload = function() {

    let kitty = document.getElementById("cat");
    let doggy = document.getElementById("dog");
    cat.onclick = f;
    dog.onclick = g;
}
function f()
{
  document.getElementById("pic").src = "../images/happy.jpg";
}
function g(){
    document.getElementById("pic").src = "../images/profile.png";
}
*/
var a = 10;
var b = 8;
function x(a) {
    console.log(a, b, c); //1. 8, undefined, 3
    var b = function (c) {
        console.log(a, b, c, this); //3. 8, function, 5, undefined, {hello: b}
    }
    if (a >= 10) {
        a = a * 2;
    }
    c = 5;
    console.log(a, b, c); //2. 8, function, 5
    return {
        hello: b
    };
}
var c = 3; // c = 5
z = x(b); // {hello: function}
z.hello();

//8, undefined, 3
//8, function, 5
//8, function, 5, undefined, {hello: b}

//CSS: postition default: static

//&lt (less than)
//&gt (greater than)

//a[target="_blank"] {
//    background-color: yellow;
//}

//float : left right 2 l baigaa

var Module = (function () {
    // locally scoped Object
    let myObject = {}; // "private" let
    privateMethod = function () {};
    myObject.someMethod = function () {
    // Public Method
    };
    let myPublic = function(){}

    myObject.privateMethod = function(){}

    myObject.myPublic = myPublic;

    return myObject;
});

//shift: urt ni nemne
//unshift: urdaas ni hasna
//pop //hoinoos ni has ni,
//push// hoino ni nemne, 

var giveMePizza = function(){
    return new Promise(function(resolve,reject){
    if(everythingWorks){
    resolve("This is true"); // then() will be called
    } else {
    reject("This is false"); // catch() will be called
    }
    })
    }
    giveMePizza()
    .then(data => console.log(data))
    .catch(err => console.error(err));
    console.log('I will run immediately after calling giveMePizza() and before any result arrives');

var btn = document.getElementsById("button");
btn.src = "https://...."



/*


// 42.
var a = 10;
function f()
{
    var b = 20;
    function g()
    {
        var c = a + b;
        return c;
    }
    b =30; return g;
}
var myFunc = f();
var x = myFunc();
console.log(x);                                         // 40
a = 100;
var y = myFunc();
console.log(y);                                         // 130



// 43. 
var b = 1000;
function g () {

var a = 100;
b = 10;
var z = a + b;
console.log(z);                                             // 110
function f(z)
{
    return 2 * z;
}
var b  = 20;
console.log(f(b));                                      // 40

}
g();
console.log(b);                                        //1000


// 45.


function Data()
{
    let x = [];
    return {
        put: function (item)
        {
            x.push(item);
        }
        ,
        take: function(){
            return x.pop();

        },
        size: function(){
            return x.length;
        }
    };
}
y = Data();
y.put(10);
y.put(-15);
console.log(y.size());     // 2
console.log(y.take());     // -15
console.log(y.size());     // 1


//46

var promist1 = new Promise(function(resolve, reject){
    setTimeout(function() { resolve('blue'); }, 300);
    });
promist1.then(function(value)

    {
        console.log(value);                                                                 // 2ND. blue
    });
    console.log('green');                                                                   // 1ST. green



//41 
let Account = (function()
{
    let Balance = 0;
    let AcctNo = 0;
    let Owner = "";
    let getBalance = function(){
        return Balance;
    }
    let Open = function(balance,acctno,Owner)
    {
        setBalance(balance);
        AcctNo = acctno;
        Owner = owner;
    }
    let Deposit = function(amount) {
        setBalance(getBalance() + amount);
    }
    return {
       


    };
}) ();


//44
*/
/*
42.
return{

    Open: Open;
    Deposit: Deposit;
}
*/