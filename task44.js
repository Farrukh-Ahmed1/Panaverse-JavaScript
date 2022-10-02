let personNeedSandwich = (...person) => {
    console.log(`${person.length} perons want sandwhiches`);
}
personNeedSandwich('Admin', 'John', 'Tom', 'Shawn', 'Joe');
personNeedSandwich('Admin', 'John', 'Tom', 'Shawn');
personNeedSandwich('Admin', 'John', 'Tom');