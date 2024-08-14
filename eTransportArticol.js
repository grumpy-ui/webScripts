
const adaugaArticolBtn = document.querySelectorAll(".btn-success")[2];
const unitatiDeMasura = [
  "BUC",
  "ML",
  "KG",
  "SET",
  "TONA",
  "PERECHI",
  "LITRU",
  "CUTIE",
  "ROLA",
  "MP",
  "MC",
  "GRAME",
  "PACHET",
  "MM",
  "LEG",
  "BIDON",
  "ZILE",
  "TUB",
  "SAC",
  "ml",
];

const optionUM = unitatiDeMasura.indexOf("BUC");
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function selectDropDownValue(dropdownField, option) {
  if (dropdownField) {
    if (option > -1) {
      dropdownField.dispatchEvent(new Event("focus", { bubbles: true }));
      dropdownField.dispatchEvent(new Event("click", { bubbles: true }));
      await wait(1000);
      const options = document.querySelectorAll('button[role="option"]');
      if (options[option]) {
        console.log("clicked:", options[option]);
        options[option].click();
      } else {
        console.warn(`Option ${option} not found for dropdown`);
      }
    } else {
      console.warn(`Invalid option ${option} for dropdown`);
    }
  } else {
    console.error("Dropdown field not found");
  }
}

const clickEvent = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  view: window,
  button: 0, // Left mouse button
});
async function fillAndSaveForm() {
  adaugaArticolBtn.click();
  await wait(1000);
  
  const numeProdus = document.getElementById("nume");
  const codUnitateMasura = document.getElementById("codUnitateMasura");
  const cantitateField = document.getElementById("cantitate");
  const greutateNetaField = document.getElementById("greutateNeta");
  const greutateBrutaField = document.getElementById("greutateBruta");
  const valoareField = document.getElementById("valoareLeiFaraTva");
  const codTarifarField = document.getElementById("codTarifar");
  const saveBtnArt = document.querySelectorAll(".btn-success")[4];

  numeProdus.value = "%denumireProdus%";
  codTarifarField.value = "%codTarifar%";
  cantitateField.value = "%cantitate%";
  greutateNetaField.value = "%greutateNeta%";
  greutateBrutaField.value = "%greutateBruta%";
  valoareField.value = "%valoare%";

  const event = new Event("input", { bubbles: true });
  numeProdus.dispatchEvent(event);
  codTarifarField.dispatchEvent(event);
  cantitateField.dispatchEvent(event);
  greutateNetaField.dispatchEvent(event);
  greutateBrutaField.dispatchEvent(event);
  valoareField.dispatchEvent(event);

  await selectDropDownValue(codUnitateMasura, optionUM);
  await wait(2000);

  console.log("Button is enabled:", !saveBtnArt.disabled);
  console.log(
    "Button is visible:",
    saveBtnArt.offsetWidth > 0 && saveBtnArt.offsetHeight > 0
  );

  // Log values
  console.log("Nume Produs:", numeProdus.value);
  console.log("Cod Unitate Masura:", codUnitateMasura.value);
  console.log("Cantitate:", cantitateField.value);
  console.log("Greutate Neta:", greutateNetaField.value);
  console.log("Greutate Bruta:", greutateBrutaField.value);
  console.log("Valoare:", valoareField.value);
  console.log("Cod Tarifar:", codTarifarField.value);
  console.log("Buton save:", saveBtnArt)
  await wait(2000)
  saveBtnArt.click()
}

fillAndSaveForm();
