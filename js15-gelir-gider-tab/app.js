const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//? sonuç tablosu
const gelirinizTd = document.getElementById("geliriniz");
//? harcama formu
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");

//?veriables
let gelirler = 0;
let harcamaListesi = [];

//? ****** events*****

//? formun submit butonuna basıldığında
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //?reloud engeller
  gelirler += Number(gelirInput.value);

  localStorage.setItem("gelirler", gelirler);
  //? input değerini sıfırladık
  ekleFormu.reset();

  //? değişiklikleri dom a basan fonksiyon
  hesaplaGüncelle();
});

//? sayfa her yüklendiğinde çalışan fonksiyon
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler"));
  tarihInput.valueAsDate = new Date();

  hesaplaGüncelle();
});

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  const yeniHarcama = {
    id: new Date().getTime(),
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  };
  harcamaListesi.push(yeniHarcama);
  console.log(yeniHarcama);
  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date();
});

const hesaplaGüncelle = () => {
  gelirinizTd.innerText = gelirler;
};
