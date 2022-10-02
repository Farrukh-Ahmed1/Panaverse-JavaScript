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
