// ============================== FONCTIONS ==============================
/** 
     * Cette fonction qui créée la modal
     * @return {html} 
    */

export default function modal(){
/**
 * lancer la modal
 */
 async function launchContactModal() {

    const contactModalBackground = document.querySelector(".contact_background");
    const contactModalContent = document.querySelector(".contact_content");
    const mainWrapper = document.querySelector(".main");
    const contactModalFormInputs = document.querySelectorAll(".contact_form_input");

    contactModalBackground.style.display = "block";
    contactModalContent.setAttribute("aria-hidden", "false");
    mainWrapper.setAttribute("aria-hidden", "true");
    contactModalFormInputs[0].focus();

 }

/**
 * Férmer la modal
 */
 async function closeContactModal() {

    const contactModalBackground = document.querySelector(".contact_background");
    const contactModalContent = document.querySelector(".contact_content");
    const mainWrapper = document.querySelector(".main");

    contactModalContent.classList.add("isClosed");
    setTimeout(function() {
        contactModalContent.classList.remove("isClosed");
        contactModalBackground.style.display = "none";
        contactModalContent.setAttribute("aria-hidden", "true");
        mainWrapper.setAttribute("aria-hidden", "false");
    }, 300);

    
}


/**
 * les messages d'erreurs 
 * @param {DOMElement} input 
 * @param {string} message 
 */
async function showErrorMessage(input, message) {

    const contactForm = input.parentElement;
    input.setAttribute("aria-invalid", "true");
    contactForm.className = "contact_form error";
    const errorMessage = contactForm.querySelector(".contact_form_error");
    errorMessage.innerHTML = message;
    input.focus();
}


/**
 * Montrer les message d'erreurs
 * @param {DOMElement} input 
 */
 async function showSuccess(input) {

    const contactForm = input.parentElement;
    input.setAttribute("aria-invalid", "false");
    contactForm.className = "contact_form success";
    const errorMessage = contactForm.querySelector(".contact_form_error");
    errorMessage.innerHTML = "";
}


/**
 * vérification des données saisis 
 * @param {DOMElement} inputs
 * @returns {Boolean}
 */
 async function checkFormValidation(inputs) {

    let fields = { lastName: false, email: false, message: false};
    let regexAsciiLetters = /[a-zA-Z]/;
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let lastNameInput, emailInput, messageInput;
    [ lastNameInput, emailInput, messageInput] = inputs;
   
    // Last name input
    if (lastNameInput.value.length == 0) {
        showErrorMessage(lastNameInput, "Veuillez saisir votre nom.");
    }
    else if (regexAsciiLetters.test(lastNameInput.value) == false) {
        showErrorMessage(lastNameInput, "Veuillez entrer des caractères de A à Z (sans accents).");
    }
    else {
        showSuccess(lastNameInput);
        fields.lastName = true;
    }

    // Email input
    if (emailInput.value.length == 0) {
        showErrorMessage(emailInput, "Veuillez saisir votre adresse e-mail.");
    }
    else if (regexEmail.test(emailInput.value) == false) {
        showErrorMessage(emailInput, "Veuillez saisir un format d'adresse e-mail valide.");
    }
    else {
        showSuccess(emailInput);
        fields.email = true;
    }

    // Email input
    if (messageInput.value.length == 0) {
        showErrorMessage(messageInput, "Veuillez saisir votre message.");
    }
    else {
        showSuccess(messageInput);
        fields.message = true;
    }

    // Submit form if all fields are valid
    let fieldsValues = Object.values(fields);
    if (fieldsValues.includes(false) == true) {
        return false;
    }
    if (fieldsValues.includes(false) == false) {
        alert("Message envoyer!");
        closeContactModal();
        return true;
    }
}

// ============================== EVENEMENTS ==============================

setTimeout(function() {

    const contactButton = document.querySelector(".presentation_contact");
    const contactModalContent = document.querySelector(".contact_content");
    const contactModalCloseCross = document.querySelector(".contact_close");
    const contactFormInputs = document.querySelectorAll(".contact_form_input");
    const contactModalSubmitButton = document.querySelector(".contact_submit");

    // - Ouvérture de la modal -
    contactButton.addEventListener("click", launchContactModal);

    // - Fermeture de la modal avec le bouton férmer -
    contactModalCloseCross.addEventListener("click", closeContactModal);

  
    // Fermer la modal avec le bouton Submit
     contactModalSubmitButton.addEventListener("click", function(event) {
        event.preventDefault();  
        if (checkFormValidation(contactFormInputs)) {
            // Print contact form inputs in console logs and close contact modal
            for (let i = 0; i < contactFormInputs.length; i++) {
                console.log(contactFormInputs[i].value);
            }
        //   closeContactModal();
        }
      
    });

}, 500);


}
