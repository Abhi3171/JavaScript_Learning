let myYouTubeName = "hiteshchoudhary.com";

let anotherName = myYouTubeName;  // This creates a copy of the value of myYouTubeName and assigns it to anotherName. Both variables now hold the same string value, but they are stored in different memory locations (stack memory for strings).

anotherName="AbhishekMahato"; // This will not change the value of myYouTubeName because strings are immutable and stored in stack memory. When we assign anotherName to myYouTubeName, it creates a copy of the value. Therefore, changing anotherName does not affect myYouTubeName.

console.log(myYouTubeName);

console.log(anotherName);



let user1 = {

email: "user@google.com",

upi: "user@ybl"

}

let user2 = user1

user2.email = "hitesh@google.com"    // This will change the email property of user1 as well because both user1 and user2 reference the same object in heap memory. When we assign user2 to user1, it does not create a copy of the object; instead, it creates a reference to the same object in memory. Therefore, any changes made through user2 will affect the same object that user1 references.

console.log(user1.email);

console.log(user2.email);