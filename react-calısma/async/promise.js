function testPromise(callback) {
  setTimeout(() => {
    callback("hey buradayım");
  }, 1000);
}
function testPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hey buradayim");
    }, 1500);
  });
}

testPromise().then((message) => {
  console.log("mesaj geldi", message);
});

testPromise((message) => {
  console.log(message);
});

console.log("async");

function getUser(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("settimeout içerisi");
      //   resolve({ username: "mehmet" });
      reject(new Error("user not found"));
    }, 2000);
  });
  console.log("getuser içerisinde");
}

function getAdresses(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["ankara", "mugla", "eskisehir"]);
    }, 1000);
  });
}

function getRestaruants(addresses) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["a restoran", "b restoran", "c restoran"]);
    }, 1000);
  });
}
getUser()
  .then((user) => getAdresses(user.username))
  .then((addresses) => getRestaruants(addresses))
  .then((openRestaurants) =>
    document.body.append("acik restoranlar:", openRestaurants.toString())
  )
  .catch((error) => {
    console.log(error);
  });
