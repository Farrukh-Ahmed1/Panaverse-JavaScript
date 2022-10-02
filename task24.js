let laptop = "Apple";
console.log(`${laptop.indexOf("z") != -1}`);
console.log(`${laptop.indexOf("Z") != -1}`);
console.log(`${laptop.includes("z") && laptop.length > 9}`);
console.log(`${laptop.includes("z") || laptop.length > 9}`);
console.log(`${Array.isArray(laptop)}`);
console.log(
  `${
    Array.isArray(laptop)
      ? console.log(`Yes its array!`)
      : console.log(`No its not a array`)
  }`
);
