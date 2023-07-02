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
  // console.log("mesaj geldi", message);
});

testPromise((message) => {
  console.log(message);
});

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
// getUser()
//   .then((user) => getAdresses(user.username))
//   .then((addresses) => getRestaruants(addresses))
//   .then((openRestaurants) =>
//     document.body.append("acik restoranlar:", openRestaurants.toString())
//   )
//   .catch((error) => {
//     console.log(error);
//   });

// async function dispalyRestaurants() {
//   try {
//     const user = await getUser();
//     const addresses = await getAdresses(user.username);
//     const openRestaurants = await getRestaruants(addresses);
//     document.body.append("acik restoranlar: ", openRestaurants.toString());
//   } catch (error) {
//     console.log(error);
//   }
// }
// dispalyRestaurants();

// let count = 0;
// let sec1 = setInterval(() => {
//   console.log(++count);
//   if (count > 10) {
//     clearInterval(sec1);
//   }
// }, 1000);

//? ****************PROMİSE YAPI ÖZET*******************
const netwarkReq = new Promise((resolve, reject) => {
  const data = { a: 1, b: 2 };
  const success = Math.floor(Math.random() * 5);
  if (success) {
    console.log("data feched");
    resolve(data);
  } else {
    reject("ohh no there is network error");
  }
});
netwarkReq
  .then((response) => console.log(response))
  .then(() => console.log("2. then"))
  .catch((err) => document.write(err));
// .finally(()=>console.log("her zman çalisir"))
//? ************************************************

//? *****FETCH-APİ******

fetch("https://api.github.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error("something went wrong", res.status);
    }
    // console.log(res.status);
    // console.log(res.ok);
    return res.json();
  })
  .then((data) => {
    //?veriyi dom a basmak için blok içinde fonksiyona değer olarak atadık
    //?sonrası aşaıda fonksiyonda verileri dom a bastık
    showUsers(data);
  })
  .catch((err) => {
    console.log(err);
    const userDiv = document.getElementById("users");
    userDiv.innerHTML = `
    <h2 className="text-warning">${err}</h2>
    `;
  });

const showUsers = (users) => {
  console.log(users);
  const userDiv = document.getElementById("users");
  users.forEach((user) => {
    userDiv.innerHTML += `
<h2>${user.login}</h2>
<img width="150px" src="${user.avatar_url}" alt="" />
`;
  });
};
//? *****************************************
