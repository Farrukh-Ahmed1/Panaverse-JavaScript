let animals = ['fish', 'sea horse','prawn','lobster','octupus','crab'];
for (animal of animals){
    console.log(animal);
}
for (let animal of animals){
    animal === 'fish' 
    ? console.log(`${animal} can be good pet`)
    : animal === 'sea horse'
    ? console.log(`${animal} can't be pet`)
    : animal === 'prawn'
    ? console.log(`${animal} can't be pet`)
    : animal === 'lobster'
    ? console.log(`${animal} can't be pet`)
    : animal === 'octupus'
    ? console.log(`${animal} can't be pet`)
    : animal === 'crab'
    ? console.log(`${animal} can't be pet`)
    : console.log(`bye`);
}
console.log(`If you love to pet these animals you can`);