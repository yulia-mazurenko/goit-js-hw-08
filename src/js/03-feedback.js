import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    formElements: document.querySelectorAll('.feedback-form input, .feedback-form textarea'),
   
}

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onFormSubmit);
const USER_FORM_DATA = "feedback-form-state";

filingForm();

const formData = {};

function onInputForm(e) {
    formData[e.target.name] = e.target.value;
   
    localStorage.setItem(USER_FORM_DATA, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem(USER_FORM_DATA));
    console.log(savedData);

    localStorage.removeItem(USER_FORM_DATA);
    e.target.reset();

}

function filingForm() {
    const savedReloadData = localStorage.getItem(USER_FORM_DATA);
    
    if (savedReloadData) {
        const parseReloadData = JSON.parse(savedReloadData)
                 
        for (const key in parseReloadData) {                              
                document.querySelector(`.js-form__item[name="${key}"]`).value = parseReloadData[key]
            }                            
        
    }
}
    
        
        
        
        
            
