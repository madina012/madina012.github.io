alert("Hi!");
let mood = prompt("How are you?Are u ready?");
console.log(mood);


let myFriends = [  
    { name: 'Miras', gender: 'male', height: 175 },  
    { name: 'Nuray', gender: 'female', height: 170 }, 
    { name: 'Madi', gender: 'male', height: 177 }];
out.innerHTML += '<h4>Information about my friends:</h4>';
for (let i = 0; i < myFriends.length; i++) {
  out.innerHTML += [myFriends[i].name] + " " + '<br>';
  out.innerHTML += [myFriends[i].gender] + ", ";
  out.innerHTML += [myFriends[i].height] + " "+ '<br>';

}

let sum = 0;
for(let i =0; i<3; i++){
    sum+=myFriends[i].height;
}
let result = sum/3;
console.log(result);