let carInfo = ({ brand, model, ...args }) => {
    return {  brand, model, ...args };
  };
  
  let car = carInfo({
    brand: "BMW",
    model: "i8",
    year: 2018,
  });
  
  const car1 = carInfo({
    brand: "Audi",
    model: "A8",
    year: 2021,
    color: "blue",
    type: "Hybrid",
  });
  
  console.log(car);
  console.log(car1);
  