const submit = document.getElementById("button-form");

submit.addEventListener("click", () => {
    let firstName1 = document.getElementById("firstName").value;
    let lastName1 = document.getElementById("lastName").value;
    let adress1 = document.getElementById("emailAddress").value;
    let password1 = document.getElementById("password").value;
    let formDisplay = document.getElementById("form");
    let welcome = document.getElementById("welcome");

    const formcont = {
        firstName: firstName1,
        lastName: lastName1,
        adress: adress1,
        password: password1
    };

    if (firstName1 === '') {
        alert(`Enter your first name`);
    } else if (lastName1 === '') {
        alert(`Enter your last name`);
    } else if (adress1 === '') {
        alert(`Enter your email address`);
    } else if (password1 === '') {
        alert(`Enter your password`);
    } else {
        console.log(`${Object.keys(formcont)[0]}:`, firstName1);
        console.log(`${Object.keys(formcont)[1]}:`, lastName1);
        console.log(`${Object.keys(formcont)[2]}:`, adress1);
        formDisplay.style.display = 'none';
        welcome.style.display = 'block';
    }
});