let existingUserNames = ["Admin", "John", "Tom", "Shawn", "Joe"];
let newUserNames = ["David", "Anderson","John"];
for (let userName of newUserNames) {
  existingUserNames.includes(userName)
    ? console.log(
        `The name ${userName} is already in use. Please enter a new name`
      )
    : console.log(`This ${userName} is avaiable`);
}
