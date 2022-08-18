import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input"),
};

refs.form.addEventListener("submit", onFormSubmit);
//refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
//refs.input.addEventListener('input', throttle(onEmailInput, 500));

refs.form.addEventListener("input", throttle(onFormInput, 500));

function onFormInput(event) {
    //console.log(event.target.name);
    //console.log(event.target.value);

    formData[event.target.name] = event.target.value;
    console.log("form");

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

populateForm();

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();

    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
    const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedFormData) {
        const parcedFormData = JSON.parse(savedFormData);

        for (const name in parcedFormData) {
            refs.form.elements[name].value = parcedFormData[name];
        }
    }
}

/*const STORAGE_KEY = 'fedback-message';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', event => {
    //console.log(event.target.name);
    //console.log(event.target.value);

    formData[event.target.name] = event.target.value;
    console.log(formData);
});

populateTextarea();


//зупиняємо поведінку за замовчуванням
//прибираємо повідомлення зі сторадж
//очищуємо форму

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}


//отримуємо значення поля
//зберігаємо його в сторадж
//throttle

function onTextareaInput(event){
    const message = event.target.value;
    console.log(message);

    localStorage.setItem(STORAGE_KEY, message)
}


//отримуємо значення з сторадж
//якщо там щось було, оновлюємо DOM

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        console.log(savedMessage);

        refs.textarea.value = savedMessage;
    }
}
*/
