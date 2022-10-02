let cityCountry = (city, country) => {
    return `${city}, ${country}`;
  };
  let localCity = cityCountry('Karachi','Pakistan');
  let localCity1 = cityCountry('Hyderabad','Pakistan');
  let intCity = cityCountry('Florida','USA');
   
  console.log(localCity);
  console.log(localCity1);
  console.log(intCity);