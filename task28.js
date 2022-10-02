let age = 95;

age < 2
  ? console.log(`You are a baby`)
  : age >= 2 && age < 4
  ? console.log(`You are a toddler`)
  : age >= 4 && age < 13
  ? console.log(`You are a kid`)
  : age >= 13 && age < 20
  ? console.log(`You are a teenager`)
  : age >= 20 && age < 65
  ? console.log(`You are an adult`)
  : age >= 65
  ? console.log(`You are senior citizen`)
  : console.log(`Bye!`);
