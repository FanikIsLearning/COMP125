// JavaScript source code
function removeSelectedDefault() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

function copyBillingAddress() {
    var billingInputElements = document.querySelectorAll("#billingAddress input");
    var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
    if (document.getElementById("sameAddr").checked) {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i + 1].value = billingInputElements[i].value;
        }
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
        }else {
            for (var i = 0; i < billingInputElements.length; i++) {
                deliveryInputElements[i + i].value = "";
            }
        document.querySelector("#deliveryAddress select").selectedIndex = -1;
        }
    }
  
function createEventListeners() {
    var same = document.getElementById("sameAddr");
    if (same.addEventListener) {
        same.addEventListener("click", copyBillingAddress, false);
    } else if (same.attachEvent) {
        same.attachEvent("onclick", copyBillingAddress);
    }
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

function setUpPage() {
    removeSelectedDefault();
    createEventListeners();
    //copyBillingAddress();
   
}
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}