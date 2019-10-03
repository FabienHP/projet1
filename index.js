const submit = document.getElementById("button-form");
const start = document.getElementById("buttonStart");
const logo = document.getElementById("navLogo");

logo.addEventListener('click', () => {
    window.location.href = "index.html";
});

start.addEventListener('click', () => {
    window.location.href = "techdegree.html";
});

function capitalizeFirst(val) {
    return val[0].toUpperCase() + val.slice(1, val.length);
};

submit.addEventListener("click", () => {
    let firstName1 = document.getElementById("firstName").value;
    let lastName1 = document.getElementById("lastName").value;
    let adress1 = document.getElementById("emailAddress").value;
    let password1 = document.getElementById("password").value;
    let formDisplay = document.getElementById("form");
    let welcomeDisplay = document.getElementById("welcomeDiv");
    let welcomeValue = document.getElementById("welcomeName");
    let listDisplay = document.getElementById("fh");
    let firstName2 = document.getElementById("firstName");
    let lastName2 = document.getElementById("lastName");
    let adress2 = document.getElementById("emailAddress");
    let password2 = document.getElementById("password");
    let invalideFirst = document.getElementById("invalideFirst");
    let invalideLast = document.getElementById("invalideLast");
    let invalideMail = document.getElementById("invalideMail");
    let invalidePass = document.getElementById("invalidePass");

    const formcont = {
        firstName: firstName1,
        lastName: lastName1,
        adress: adress1,
        password: password1
    };

    if (firstName1 === '') {
        // Input First Name
        firstName2.style.borderColor = "#ed5a5a";
        firstName2.style.margin = "0";
        firstName2.style.borderRadius = "4px 4px 0 0";

        // Text invalide First Name
        invalideFirst.style.display = "block";

        // Reset other inputs
        lastName2.style.borderColor = "#d4d9dd";
        lastName2.style.marginBottom = "24px";
        lastName2.style.borderRadius = "4px";
        invalideLast.style.display = "none";

        adress2.style.borderColor = "#d4d9dd";
        adress2.style.marginBottom = "24px";
        adress2.style.borderRadius = "4px";
        invalideMail.style.display = "none";

        password2.style.borderColor = "#d4d9dd";
        password2.style.marginBottom = "24px";
        password2.style.borderRadius = "4px";
        invalidePass.style.display = "none";

    } else if (lastName1 === '') {
        // Input Last Name
        lastName2.style.borderColor = "#ed5a5a";
        lastName2.style.margin = "0";
        lastName2.style.borderRadius = "4px 4px 0 0";

        // Text invalide Last Name
        invalideLast.style.display = "block";

        // Reset other inputs
        firstName2.style.borderColor = "#d4d9dd";
        firstName2.style.marginBottom = "24px";
        firstName2.style.borderRadius = "4px";
        invalideFirst.style.display = "none";

        adress2.style.borderColor = "#d4d9dd";
        adress2.style.marginBottom = "24px";
        adress2.style.borderRadius = "4px";
        invalideMail.style.display = "none";

        password2.style.borderColor = "#d4d9dd";
        password2.style.marginBottom = "24px";
        password2.style.borderRadius = "4px";
        invalidePass.style.display = "none";

    } else if (adress1 === '') {
        // Input Address
        adress2.style.borderColor = "#ed5a5a";
        adress2.style.margin = "0";
        adress2.style.borderRadius = "4px 4px 0 0";

        // Text invalide Address
        invalideMail.style.display = "block";

        // Reset other inputs
        firstName2.style.borderColor = "#d4d9dd";
        firstName2.style.marginBottom = "24px";
        firstName2.style.borderRadius = "4px";
        invalideFirst.style.display = "none";

        lastName2.style.borderColor = "#d4d9dd";
        lastName2.style.marginBottom = "24px";
        lastName2.style.borderRadius = "4px";
        invalideLast.style.display = "none";

        password2.style.borderColor = "#d4d9dd";
        password2.style.marginBottom = "24px";
        password2.style.borderRadius = "4px";
        invalidePass.style.display = "none";

    } else if (password1 === '') {
        // Input Password
        password2.style.borderColor = "#ed5a5a";
        password2.style.margin = "0";
        password2.style.borderRadius = "4px 4px 0 0";

        // Text invalide Password
        invalidePass.style.display = "block";

        // Reset other inputs
        firstName2.style.borderColor = "#d4d9dd";
        firstName2.style.marginBottom = "24px";
        firstName2.style.borderRadius = "4px";
        invalideFirst.style.display = "none";

        lastName2.style.borderColor = "#d4d9dd";
        lastName2.style.marginBottom = "24px";
        lastName2.style.borderRadius = "4px";
        invalideLast.style.display = "none";

        adress2.style.borderColor = "#d4d9dd";
        adress2.style.marginBottom = "24px";
        adress2.style.borderRadius = "4px";
        invalideMail.style.display = "none";

    } else {
        console.log(`${Object.keys(formcont)[0]}:`, firstName1);
        console.log(`${Object.keys(formcont)[1]}:`, lastName1);
        console.log(`${Object.keys(formcont)[2]}:`, adress1);
        formDisplay.style.display = 'none';
        welcomeDisplay.style.display = 'flex';
        
        welcomeValue.innerHTML = capitalizeFirst(formcont.firstName);;
        listDisplay.style.marginTop = 0;
    }
});