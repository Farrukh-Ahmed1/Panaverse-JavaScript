let userNames = ['Admin', 'John', 'Tom', 'Shawn', 'Joe'];
while (userNames.length != 0) {
    userNames.pop();
  }
  if (userNames.length <= 0) {
    console.log(`We need to find some users!`);
  }