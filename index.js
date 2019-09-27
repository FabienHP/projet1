const submit = document.getElementById("button-form");

submit.addEventListener("click", () => {
    let firstName1 = document.getElementById("First-name").value;
    let lastName1 = document.getElementById("Last-name").value;
    let adress1 = document.getElementById("Email-adresse").value;

    const formcont = {
        firstName: firstName1,
        lastName: lastName1,
        adress: adress1
    };

    switch (firstName1) {
        case '':
            alert(`Enter your first name`);
            break;
        default:
            switch (lastName1) {
                case '':
                    alert(`Enter your last name`);
                    break;
                default:
                    switch (adress1) {
                        case '':
                            alert(`Enter your email adress`);
                            break;
                        default:
                            console.log(`${Object.keys(formcont)[0]}:`, firstName1);
                            console.log(`${Object.keys(formcont)[1]}:`, lastName1);
                            console.log(`${Object.keys(formcont)[2]}:`, adress1);
                            break;
                        };        
                };            
            };
});