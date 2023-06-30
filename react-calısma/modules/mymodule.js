export const CALISMA_SAATI = 40;
export let maas = 20000;
let sayac = 0;
export const arttir = (miktar) => {
  sayac += miktar;
  return sayac;
};
export const azalt = (miktar) => {
  sayac -= miktar;
  return sayac;
};

export default function selam() {
  alert("mrb kml");
}
