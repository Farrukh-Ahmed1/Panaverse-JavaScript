let userNames = ['Admin', 'John', 'Tom', 'Shawn', 'Joe'];
for (userName of userNames) {
  userName === "Admin"
    ? console.log(`Hello ${userName}! would you like to see a status report?`)
    : console.log(`Hello ${userName}! thank you for logging in again`)
}


