console.log("merhaba");
//butonları yakala
//butonları dinle
//butona tıklanmışsa arttır yada azalt
//title bul ona işlem yap

const arttirButton = document.querySelector(".arttir");
const azaltButton = document.querySelector(".azalt");
const number = document.querySelector("#numara");

let initialNumber = 0;
arttirButton.addEventListener("click", () => {
  initialNumber++;
  //   number.innerText = initialNumber;
  number.innerHTML = `<i>${initialNumber}</i>`;
});
azaltButton.addEventListener("click", () => {
  initialNumber--;
  //   number.innerText = initialNumber;
  number.innerHTML = `<i>${initialNumber}</i>`;
});
