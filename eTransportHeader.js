//TO BE USED WITH PDA

const adaugaNotificareBtn = document.querySelectorAll(".btn-success")[0];
const salveazaBtn = document.querySelectorAll('[type="button"]')[8];
const notificareDropdownBtn = document.querySelectorAll(".dropdown-item")[9];
const incarcareTab = document.getElementById("ngb-nav-1");

//Flow variables
const documentNumber = "%cmrNumber%";
const numarVehicul = "%numarVehicul%";
const birouVamalFinal = "%birouVamalFinal%";
const ptfFinal = "%ptfFinal%";
const scopOperatiune = "%scopOperatiune%";
const tipOperatiune = "%tipOperatiune%";

//Save options for the dropdown menus
const ptfFinalArray = [
  "Petea (HU)",
  "Borș(HU)",
  "Vărșand(HU)",
  "Nădlac(HU)",
  "Calafat (BG)",
  "Bechet(BG)",
  "Turnu Măgurele(BG)",
  "Zimnicea(BG)",
  "Giurgiu(BG)",
  "Ostrov(BG)",
  "Negru Vodă(BG)",
  "Vama Veche(BG)",
  "Călărași(BG)",
  "Corabia(BG)",
  "Oltenița(BG)",
  "Carei  (HU)",
  "Cenad (HU)",
  "Episcopia Bihor (HU)",
  "Salonta (HU)",
  "Săcuieni (HU)",
  "Turnu (HU)",
  "Urziceni (HU)",
  "Valea lui Mihai (HU)",
  "Vladimirescu (HU)",
  "Porțile de Fier 1 (RS)",
  "Naidăș(RS)",
  "Stamora Moravița(RS)",
  "Jimbolia(RS)",
  "Halmeu (UA)",
  "Stânca Costești (MD)",
  "Sculeni(MD)",
  "Albița(MD)",
  "Oancea(MD)",
  "Galați Giurgiulești(MD)",
  "Constanța Sud Agigea",
  "Siret  (UA)",
  "Nădlac 2 - A1 (HU)",
  "Borș 2 - A3 (HU)",
];

const birouriVamaleArray = [
  "BVI Alba Iulia (ROBV0300)",
  "BVI Arad (ROTM0200)",
  "BVF Arad Aeroport (ROTM0230)",
  "BVF Zona Liberă Curtici (ROTM2300)",
  "BVI Pitești (ROCR7000)",
  "BVI Bacău (ROIS0600)",
  "BVF Bacău Aeroport (ROIS0620)",
  "BVI Oradea (ROCJ6570)",
  "BVF Oradea Aeroport (ROCJ6580)",
  "BVI Bistriţa-Năsăud (ROCJ0400)",
  "BVI Botoşani (ROIS1600)",
  "BVF Stanca Costeşti (ROIS1610)",
  "BVF Rădăuţi Prut (ROIS1620)",
  "BVI Braşov (ROBV0900)",
  "BVF Zona Liberă Brăila (ROGL0710)",
  "BVF Brăila (ROGL0700)",
  "BVI Buzău (ROGL1500)",
  "BVI Reșița (ROTM7600)",
  "BVF Naidăș (ROTM6100)",
  "BVI Cluj Napoca (ROCJ1800)",
  "BVF Cluj Napoca Aero (ROCJ1810)",
  "BVF Constanţa Sud Agigea (ROCT1900)",
  "BVF Mihail Kogălniceanu (ROCT5100)",
  "BVF Mangalia (ROCT5400)",
  "BVF Constanţa Port (ROCT1970)",
  "BVI Sfântu Gheorghe (ROBV7820)",
  "BVI Târgoviște (ROBU8600)",
  "BVI Craiova (ROCR2100)",
  "BVF Craiova Aeroport (ROCR2110)",
  "BVF Bechet (ROCR1720)",
  "BVF Calafat (ROCR1700)",
  "BVF Zona Liberă Galaţi (ROGL3810)",
  "BVF Giurgiuleşti (ROGL3850)",
  "BVF Oancea (ROGL3610)",
  "BVF Galaţi (ROGL3800)",
  "BVI Târgu Jiu (ROCR8810)",
  "BVI Miercurea Ciuc (ROBV5600)",
  "BVI Deva (ROTM8100)",
  "BVI Slobozia (ROCT8220)",
  "BVF Iaşi Aero (ROIS4660)",
  "BVF Sculeni (ROIS4990)",
  "BVF Iaşi (ROIS4650)",
  "BVI Antrepozite/Ilfov (ROBU1200)",
  "BVF Otopeni Călători (ROBU1030)",
  "BVI Baia Mare (ROCJ0500)",
  "BVF Aero Baia Mare (ROCJ0510)",
  "BVF Sighet (ROCJ8000)",
  "BVF Orşova (ROCR7280)",
  "BVF Porţile De Fier I (ROCR7270)",
  "BVF Porţile De Fier II (ROCR7200)",
  "BVF Drobeta Turnu Severin (ROCR9000)",
  "BVI Târgu Mureş (ROBV8800)",
  "BVF Târgu Mureş Aeroport (ROBV8820)",
  "BVI Piatra Neamţ (ROIS7400)",
  "BVI Corabia (ROCR2000)",
  "BVI Olt (ROCR8210)",
  "BVI Ploiești (ROBU7100)",
  "BVI Satu-Mare (ROCJ7810)",
  "BVF Halmeu (ROCJ4310)",
  "BVF Aeroport Satu Mare (ROCJ7830)",
  "BVI Zalău (ROCJ9700)",
  "BVI Sibiu (ROBV7900)",
  "BVF Sibiu Aeroport (ROBV7910)",
  "BVI Suceava (ROIS8230)",
  "BVF Dorneşti (ROIS2700)",
  "BVF Siret (ROIS8200)",
  "BVF Suceava Aero (ROIS8250)",
  "BVF Vicovu De Sus (ROIS9620)",
  "BVI Alexandria (ROCR0310)",
  "BVF Turnu Măgurele (ROCR9100)",
  "BVF Zimnicea (ROCR5800)",
  "BVI Timişoara Bază (ROTM8720)",
  "BVF Jimbolia (ROTM5010)",
  "BVF Moraviţa (ROTM5510)",
  "BVF Timişoara Aeroport (ROTM8730)",
  "BVF Sulina (ROCT8300)",
  "BVF Aeroport Delta Dunării Tulcea (ROGL8910)",
  "BVF Tulcea (ROGL8900)",
  "BVF Isaccea (ROGL8920)",
  "BVI Vaslui (ROIS9610)",
  "BVF Fălciu (-)",
  "BVF Albiţa (ROIS0100)",
  "BVI Râmnicu Vâlcea (ROCR7700)",
  "BVI Focșani (ROGL3600)",
  "BVI Bucureşti Poştă (ROBU1380)",
  "BVI Târguri și Expoziții (ROBU1400)",
  "BVF Băneasa (ROBU1040)",
  "BVI Călăraşi (ROCT1710)",
  "BVI Giurgiu (ROBU3910)",
  "BVF Zona Liberă Giurgiu (ROBU3980)",
];

const tipOperatiuneArray = [
  "Achiziţie intracomunitară",
  "Operaţiuni în sistem lohn (UE) - intrare",
  "Stocuri la dispoziţia clientului (Call-off stock) - intrare",
  "Livrare intracomunitară",
  "Operaţiuni în sistem lohn (UE) - ieşire",
  "Stocuri la dispoziţia clientului (Call-off stock) - ieşire",
  "Transport pe teritoriul naţional",
  "Import",
  "Export",
  "Tranzacţie intracomunitară - Intrare pentru depozitare/formare nou transport",
  "Tranzacţie intracomunitară - Ieşire după depozitare/formare nou transport",
];

const scopOperatiuneArray = [
  "Comercializare",
  "Producție",
  "Gratuități",
  "Echipament comercial",
  "Mijloace fixe",
  "Consum propriu",
  "Operațiuni de livrare cu instalare",
  " Transfer între gestiuni ",
  "Bunuri puse la dispoziția clientului",
  "Leasing financiar/operațional",
  "Bunuri în garanție",
  "Operațiuni scutite",
  "Investiție în curs",
  "Donații, ajutoare",
  "Altele",
  "Același cu operațiunea",
];

const codDocumentArray = [
  "CMR",
  "Factura",
  "Aviz de însoțire a mărfii",
  "Altele",
];

const optionPtf = ptfFinalArray.indexOf("%ptfFinal%");
const optionBirouVamal = birouriVamaleArray.indexOf("%birouVamalFinal%");
const optionTipOperatiune = tipOperatiuneArray.indexOf("%tipOperatiune%");
const optionScopOperatiune = scopOperatiuneArray.indexOf("%scopOperatiune%");
const optionCodDocument = codDocumentArray.indexOf("%codDocument%");
//Navigate to the 'Incarcare' tab
incarcareTab.click();
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//Enter document number
(async () => {
  await wait(2000);

  const documentTransportInput = document.querySelector(
    'input[name="numarDocumentTransport"]'
  );
  if (documentTransportInput) {
    notificareDropdownBtn.click();
    await wait(500); // Short wait for dropdown to appear
    documentTransportInput.value = documentNumber;
    documentTransportInput.dispatchEvent(new Event("input", { bubbles: true }));
  } else {
    console.error("Document transport input not found");
  }
})();

const codDocumentDropDown = document.getElementById("codTipDocumentTransport");
const partenerComercialField = document.getElementById("idPartener");
const numarVehiculField = document.querySelector('[name="numarInmatriculare"]');
const tipOperatiuneDropDown = document.querySelector(
  '[name="codTipOperatiune"]'
);
const scopOperatiuneDropDown = document.querySelector(
  '[name="codScopOperatiune"]'
);

const taraFinalField = document.getElementById("idTaraFinal");
const regiuneFinalField = document.getElementById("idRegiuneFinal");
const localitateFinalField = document.querySelector(
  '[name="adresaLocalitateFinal"]'
);
const stradaFinalField = document.querySelector('[name="adresaStradaFinal"]');
const numarFinalField = document.querySelector('[name="adresaNumarFinal"]');
const ptfFinalDropDown = document.getElementById("codPtfFinal");
const birouVamalFinalDropDown = document.getElementById("codBirouVamalFinal");

const focusEventInputField = new Event("focus", { bubbles: true });
const clickEventInputField = new MouseEvent("click", { bubbles: true });

const clickOption = (option) => {
  if (option) {
    option.click();
  } else {
    console.error("Option not found");
  }
};

const simulateTyping = async (element, text) => {
  for (let i = 0; i < text.length; i++) {
    element.value += text[i];
    element.dispatchEvent(new Event("input", { bubbles: true }));
    await wait(50); // Adjust this value to change typing speed
  }
};

const selectPartner = async () => {
  if (partenerComercialField) {
    await wait(3000);
    const focusEventPartenerComercial = new Event("focus", { bubbles: true });
    partenerComercialField.dispatchEvent(focusEventPartenerComercial);
    const clickEventPartenerComercial = new Event("click", { bubbles: true });
    partenerComercialField.dispatchEvent(clickEventPartenerComercial);

    await simulateTyping(partenerComercialField, "%partenerComercial%");
    await wait(2000);
    const element = document.querySelector(
      'button[role="option"]:nth-child(1)'
    );
    element.click();

    // Wait for a short time to ensure the click event has been processed
    await wait(500);

    return true;
  }
  return false;
};

async function fillForm() {
  (async () => {
    const partnerSelected = await selectPartner();
    const event = new Event("input", { bubbles: true });

    if (partnerSelected) {
      numarVehiculField.value = numarVehicul;
      taraFinalField.value = "";
      regiuneFinalField.value = "";
      localitateFinalField.value = "";
      stradaFinalField.value = "";
      numarFinalField.value = "";
      numarVehiculField.dispatchEvent(event);
      taraFinalField.dispatchEvent(event);
      regiuneFinalField.dispatchEvent(event);
      localitateFinalField.dispatchEvent(event);
      stradaFinalField.dispatchEvent(event);
      numarFinalField.dispatchEvent(event);
      salveazaBtn.click();
    } else {
      console.error("Failed to select partner. Subsequent actions aborted.");
    }
  })();

  const chooseDropDownValues = async () => {
    selectDropDownValue(codDocumentDropDown, optionCodDocument);
    selectDropDownValue(tipOperatiuneDropDown, optionTipOperatiune);
    selectDropDownValue(scopOperatiuneDropDown, optionScopOperatiune);
    selectDropDownValue(ptfFinalDropDown, optionPtf);
    selectDropDownValue(birouVamalFinalDropDown, optionBirouVamal);
  };

  (async () => {
    await chooseDropDownValues();
  })();

  //FUNCTIONS
  function selectDropDownValue(dropdownField, option) {
    console.log(option);
    if (dropdownField) {
      if (option > -1) {
        dropdownField.dispatchEvent(focusEventInputField);
        dropdownField.dispatchEvent(clickEventInputField);

        (async () => {
          await wait(3000);
          const options = document.querySelectorAll('button[role="option"]');
          console.log("clicked: ", options[option]);
          clickOption(options[option]);
        })();
      }
    } else {
      console.error("Cod Document not found");
    }
  }
}

fillForm();
