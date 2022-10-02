let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let ordinalNumber of ordinalNumbers){
    ordinalNumber === 1
      ? console.log(`1st`)
      : ordinalNumber === 2
      ? console.log(`2nd`)
      : ordinalNumber === 3
      ? console.log(`3rd`)
      : ordinalNumber === 4
      ? console.log(`4th`)
      : ordinalNumber === 5
      ? console.log(`5th`)
      : ordinalNumber === 6
      ? console.log(`6th`)
      : ordinalNumber === 7
      ? console.log(`7th`)
      : ordinalNumber === 8
      ? console.log(`8th`)
      : ordinalNumber === 9
      ? console.log(`9th`)
      : console.log(`bye`)
}