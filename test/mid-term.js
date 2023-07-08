/* 
Name: HOI KIT FAN, Ivan
ID: 301249275
*/


//copy
const useBillHoiKitFan = document.getElementById("useBill");
useBill.addEventListener("click", copyBillingToDelivery);

function copyBillingToDelivery() {
    const firstnameBillHoiKitFan = document.getElementById("firstnameBill").value;
    const lastnameBillHoiKitFan = document.getElementById("lastnameBill").value;
    const addressBillHoiKitFan = document.getElementById("addressBill").value;
    const cityBillHoiKitFan = document.getElementById("cityBill").value;
    const stateBillHoiKitFan = document.getElementById("stateBill");
    const genderBillHoiKitFan = document.getElementById("genderBill");
    const phoneBillHoiKitFan = document.getElementById("phoneBill").value;
    const codeBillHoiKitFan = document.getElementById("codeBill").value;

    const firstnameDeliveryHoiKitFan = document.getElementById("firstnameDelivery");
    const lastnameDeliveryHoiKitFan = document.getElementById("lastnameDelivery");
    const addressDeliveryHoiKitFan = document.getElementById("addressDelivery");
    const cityDeliveryHoiKitFan = document.getElementById("cityDelivery");
    const stateDeliveryHoiKitFan = document.getElementById("stateDelivery");
    const genderDeliveryHoiKitFan = document.getElementById("genderDelivery");
    const phoneDeliveryHoiKitFan = document.getElementById("phoneDelivery");
    const codeDeliveryHoiKitFan = document.getElementById("codeDelivery");

    if (useBillHoiKitFan.checked) {
        firstnameDeliveryHoiKitFan.value = firstnameBillHoiKitFan;
        lastnameDeliveryHoiKitFan.value = lastnameBillHoiKitFan;
        addressDeliveryHoiKitFan.value = addressBillHoiKitFan;
        cityDeliveryHoiKitFan.value = cityBillHoiKitFan;
        phoneDeliveryHoiKitFan.value = phoneBillHoiKitFan;
        codeDeliveryHoiKitFan.value = codeBillHoiKitFan;
        stateDeliveryHoiKitFan.selectedIndex = stateBillHoiKitFan.selectedIndex;
        genderDeliveryHoiKitFan.selectedIndex = genderBillHoiKitFan.selectedIndex;
    }

}

//checkValidity() and setCustomValidity() methods
const formHoiKitFan = document.getElementById("billingForm");
const errorBoxHoiKitFan = document.getElementById("errorBox");

formHoiKitFan.addEventListener("submit", function (event) {
    event.preventDefault();
});

formHoiKitFan.addEventListener("click", function (event) {
    if (!formHoiKitFan.checkValidity()) {
        errorBoxHoiKitFan.textContent = "Please fill out all required fields.";
        return;
    }
    errorBoxHoiKitFan.textContent = 'Form completed';
})

//selectedIndex = -1
const stateBillDropdownHoiKitFan = document.getElementById("stateBill");
stateBillDropdownHoiKitFan.selectedIndex = -1;
    
