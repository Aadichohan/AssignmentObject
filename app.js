// q1
var obj = [
  {name:"Juice",price:"50", quality:"3"},  
  {name:"Cookie",price:"40", quality:"1"},  
  {name:"Shirt",price:"60", quality:"8"},  
  {name:"Pen",price:"90", quality:"3"},  
];

var allTotal = 0;

for (let i = 0; i < obj.length; i++) {

    let eachTotal = parseInt(obj[i].price) * parseInt(obj[i].quality);
     allTotal += eachTotal ;
    console.log(obj[i].name+"'s total price is "+eachTotal);
    
}
console.log("Total price is "+allTotal);

//q2
var info = [
    {name:"Ali",email:"abc1@gmail.com", password:"1234", age:30, gender:"Male", city:"karachi", country:"Pakistan"},    
    {name:"Ahmed",email:"abc2@gmail.com", password:"1234", age:30, gender:"Male", city: "Lahore", country:"Pakistan"},    
    {name:"Ayan",email:"abc3@gmail.com", password:"1234", age:30, gender:"Male", city: "karachi", country:"Pakistan"},    
  ];
  
  for(inf in info){
    if(info[inf].hasOwnProperty('age')){
      console.log('property found name');
    }
    if(info[inf].hasOwnProperty('country')){
      console.log('country property found');
    }
    if(info[inf].hasOwnProperty('firstName')){
      console.log('property found');
    }
    else{
      console.log('firstName property not found');

    }
    if(info[inf].hasOwnProperty('lasstName')){
      console.log('property found');
    }
    else{
      console.log('lasstName property not found');

    }
  }
// for (let i = 0; i < info.length; i++) {
//   if(info[i].hasOwnProperty('name')){
//     console.log('name property found ');
//   }
//   else if(info[i].hasOwnProperty('password')){
//     console.log('name property found ');

//   }
  
//}
// question 3
  function Personal(name, email, age){
    this.name = name,
    this.email = email,
    this.age = age
  }
  var person1 = new Personal('Ali', 'ali@mail.cm', 22);
  var person2 = new Personal('Ayan', 'Ayan@mail.com', 34);
  var person3 = new Personal('Ahmed', 'Ahmed@mail.com', 20);

  console.log(person1);
  console.log(person2);
  console.log(person3);
  // var personarr = [];
  // function _const_call(){
  //   var person1 = new Personal('Ali', 'Ahmed');
  //   personarr.push(person1);
  // }

  // _const_call();
  // _const_call();
  // console.log(personarr);

  //q4
  function userData(name, address, gender, education, profession){
    this.name = name,
    this.address = address,
    this.gender = gender,
    this.education = education,
    this.profession = profession
  }
  var arr = [];
  function saveData(){
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
    var edu = document.getElementById('edu').value;
    var prof = document.getElementById('prof').value;
    var data = new userData(name, address, gender, edu, prof, data);
     arr.push(data);
    console.log(arr);
    localStorage.setItem('userData',JSON.stringify(arr));
    console.log('local storage ', localStorage.getItem('userData'));

    setDom(name, address, gender, edu, prof);
  }

    function setDom(name, address, gender, edu, prof){
      document.getElementById('result').style = 'display:inline';
    document.getElementById('lbl_name').innerHTML = 'Name: '+name;
    document.getElementById('lbl_address').innerHTML = 'Address: '+address;
    document.getElementById('lbl_gender').innerHTML = 'Gender: '+gender;
    document.getElementById('lbl_edu').innerHTML = 'Education: '+edu;
    document.getElementById('lbl_prof').innerHTML = 'Profession: '+prof;
  }
  // localStorage.setItem('userData',JSON.stringify(arr));
  // localStorage["userData"] = arr;
  // console.log('local storage ', arr);