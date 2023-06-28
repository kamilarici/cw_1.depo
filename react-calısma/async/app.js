console.log("async");

function getUser(callback) {
  console.log("getuser içerisinde");
  setTimeout(() => {
    console.log("settimeout içerisi");
    callback({ username: "mehmet" });
  }, 2000);
}

function getAdresses(username, callback) {
  setTimeout(() => {
    callback(["ankara", "mugla", "eskisehir"]);
  }, 1000);
}

function getRestaruants(addresses, callback) {
  setTimeout(() => {
    callback(["a restoran", "b restoran", "c restoran"]);
  }, 1000);
}
getUser((user) => {
  console.log(user);
  getAdresses(user.username, (addresses) => {
    getRestaruants(addresses, (openRestaurants) => {
      document.body.append("acıik restoranlar:", openRestaurants.toString());
    });
  });
});
console.log("son console");
