alert("Welcom Please Enter Your Data");

var a = +prompt("Enter Your English Marks");
var b = +prompt("Enter Your Urdu Marks", "100");
var c = +prompt("Enter Your Math Marks");
var d = +prompt("Enter Your pakis Marks");
var e = +prompt("Enter Your biology Marks");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
var totle = a + b + c + d + e;
console.log("your totle marks " + totle)
var percantage = ((totle / 500) * 100);
if (percantage > 90) {
  console.log("A grade");

} else if (percantage > 80) {
  console.log("B grade");

} else if (percantage > 70) {
  console.log("C grade");

} else if (percantage > 60) {
  console.log("D grade");

} else {
  console.log("you are failed");
}

var age = +prompt("please enter your age", "18");
if (age > 17) {
  console.log("Allow");
}
else if (age < 17) { console.log("NotAllow"); }


var studentcard = +prompt("have you student card?", "Yes");
if (studentcard == "Yes") {
  console.log("Allow");
}
else if (studentcard =="no")
 { console.log("NotAllow"); }











