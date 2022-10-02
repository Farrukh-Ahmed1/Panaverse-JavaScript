let favouriteFruits = ['Mango','Kiwi', 'Grapes'];

favouriteFruits.includes('Mango')
  ? console.log(`You really like mango`)
  : favouriteFruits.includes('Apple')
  ? console.log(`You really like Apple`)
  : favouriteFruits.includes('Guava')
  ? console.log(`You really like Guava`)
  : favouriteFruits.includes('Banana')
  ? console.log(`You really like Banana`)
  : favouriteFruits.includes('Orange')
  ? console.log(`You really like Orange`)
  : console.log(`Bye`);