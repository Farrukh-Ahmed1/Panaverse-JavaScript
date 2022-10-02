let listOfGuests = ['John','Eric','Jack'];
for (listOfGuest of listOfGuests ){
    console.log(`Hello ${listOfGuest}, come to the dinner!`);
}
console.log(`Unfortunatly ${listOfGuests[2]} can not come to the dinner! Am inviting someone else`);
listOfGuests[2] = 'Johnson';
for(listOfGuest of listOfGuests){
    console.log(`Hello ${listOfGuest}, come to the dinner!`);
}
console.log(`Just an quick update guys. The dinner is getting bigger am inviting more peeps!!`);

listOfGuests = ["Dwayne", ...listOfGuests];
listOfGuests = [...listOfGuests.splice(0, listOfGuests.length / 2),"Rock",listOfGuests.splice(listOfGuests.length / 2),];
listOfGuests.push("Tom");
for(listOfGuest of listOfGuests){
    console.log(`Hello ${listOfGuest}, come to the dinner!`);
}

console.log(`Hey guys am sorry, I can invite only two of you!! :(`);
while(listOfGuests.length != 2){
    let lessGuest = listOfGuests.pop();
    console.log(`Go away ${lessGuest} am not inviting you anymore!!`);
}
for(listOfGuest of listOfGuests){
    console.log(`${listOfGuest} you are still invited!!`);
}
while(listOfGuests.length != 0){
    listOfGuests.pop();
}
console.log(listOfGuests.length);