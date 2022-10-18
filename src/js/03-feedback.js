import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    formElements: document.querySelectorAll('.js-form__item'),
}
//    console.log(refs.formElements[0].value)

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
const USER_FORM_DATA = "feedback-form-state";
const savedData = localStorage.getItem(USER_FORM_DATA);

filingForm();

let formData;
if (savedData) {
    formData = JSON.parse(savedData);
} else formData = {};

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
   
    localStorage.setItem(USER_FORM_DATA, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();

    for (const element of refs.formElements) {
        if (!element.value) {
            window.alert("Please enter data in all fields of the form");
            return;
}
    }
        
    e.target.reset();
    
    console.log(formData);

    formData = {}
    localStorage.removeItem(USER_FORM_DATA);

}

function filingForm() {
       
    if (savedData) {
                        
        for (const key in JSON.parse(savedData)) {
                document.querySelector(`.js-form__item[name="${key}"]`).value = JSON.parse(savedData)[key]
            }
        
    }
}