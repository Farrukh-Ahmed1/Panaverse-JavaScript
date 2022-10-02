let listOfGuests = ['John','Eric','Jack'];
for (listOfGuest of listOfGuests ){
    console.log(`Hello ${listOfGuest}, come to the dinner!`);
}
console.log(`Unfortunatly ${listOfGuests[2]} can not come to the dinner! Am inviting someone else`);
listOfGuests[2] = 'Johnson';
for(listOfGuest of listOfGuests){
    console.log(`Hello ${listOfGuest}, come to the dinner!`);
}