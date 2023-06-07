/************************/

//* ****************** ELEMENT SECME ******************
const addBtn = document.getElementById("ekle");
// console.log(addBtn);

const gelirInput = document.getElementById("gelir-val");
// console.log(gelirInput);

const gelirEkle = document.getElementById("gelir-eklendi");

const giderEklendi = document.getElementById("gider-eklendi");
// console.log(giderEklendi);
const ekleBtn = document.querySelector("#kaydet");
// console.log(kaydetBtn);

const giderMiktar = document.querySelector("#giderMiktar");

console.log(giderMiktar.value);

const kalanParaSpan = document.querySelector("#kalan-para");

const miktarTd = document.querySelector("#miktar-td");
// console.log(miktarTd);
const tableBodyTr = document.querySelector("#table-body");
const harcamaYeri = document.querySelector("#giderText");
const giderTarih = document.querySelector("#giderTarih");
//* ****************** EVENT LISTENERS SECME ****************
addBtn.addEventListener("click", () => {
  eklenecekDeger();
  kalanPara();
});

ekleBtn.addEventListener("click", () => {
  harcananDeger();
  kalanPara();
  //   tabloSatir();
});

//* ****************** FONKSIYON SECME ****************

let toplam = 0;
const eklenecekDeger = () => {
  if (gelirInput.value === "" || gelirInput.value === null) {
    gelirInput.focus();
  } else {
    const alinanMiktar = parseInt(gelirInput.value);
    toplam += alinanMiktar;
    const gelirEkleText = document.createTextNode(toplam);
    gelirEkle.innerText = "";
    gelirInput.value = "";
    gelirEkle.appendChild(gelirEkleText);
  }
};

let giderToplam = 0;

let harcananMiktar = 0;
const harcananDeger = () => {
  if (giderMiktar.value === "" || giderMiktar.value === null) {
    giderMiktar.focus();
  } else {
    harcananMiktar = parseInt(giderMiktar.value);
    giderToplam += harcananMiktar;
    let giderEkleText = document.createTextNode(giderToplam);

    //! *******
    tabloSatir();
    harcamaYeri.value = "";
    //! *********
    giderEklendi.innerText = "";
    giderMiktar.value = "";
    giderEklendi.appendChild(giderEkleText);
    //   *****************************
  }
};

let kalan = 0;
const kalanPara = () => {
  kalan = Number(toplam) - Number(giderToplam);
  const kalanParaText = document.createTextNode(kalan);
  kalanParaSpan.innerText = "";
  // console.log(typeof kalan);
  kalanParaSpan.appendChild(kalanParaText);
};

const tabloSatir = () => {
  const satir = document.createElement("tr");
  tableBodyTr.appendChild(satir);
  //? Tarih
  const tarihSatir = document.createElement("td");
  const tarihYeriEkle = document.createTextNode(giderTarih.value);
  tarihSatir.appendChild(tarihYeriEkle);
  satir.appendChild(tarihSatir);

  //? Harcanan Yer
  const harcananSatir = document.createElement("td");
  const harcananYerEkle = document.createTextNode(harcamaYeri.value);
  harcananSatir.appendChild(harcananYerEkle);
  satir.appendChild(harcananSatir);

  //?Miktar
  const miktarSatir = document.createElement("td");
  const giderEkleText = document.createTextNode(giderMiktar.value);
  miktarSatir.appendChild(giderEkleText);
  satir.appendChild(miktarSatir);
};
console.log(giderMiktar.value);
