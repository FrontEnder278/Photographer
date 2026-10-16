class Form {

    selectors = {
        root: '[data-js-form]',
        name: '[data-js-form-name]',
        email: '[data-js-form-email]',
        phone: '[data-js-form-phone]',
        messages: '[data-js-form-message]',
        button: '[data-js-form-button]',
        nameError: '[data-js-form-name-error]',
        emailError: '[data-js-form-email-error]',
        phoneError: '[data-js-form-phone-error]',
        messageError: '[data-js-form-message-error]',
    }

    stateClasses = {
        isInvalid: 'is-invalid',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.nameElement = this.rootElement.querySelector(this.selectors.name);
        this.emailElement = this.rootElement.querySelector(this.selectors.email);
        this.phoneElement = this.rootElement.querySelector(this.selectors.phone);
        this.messageElement = this.rootElement.querySelector(this.selectors.messages);
        this.buttonElement = this.rootElement.querySelector(this.selectors.button);
        this.nameErrorElement = this.rootElement.querySelector(this.selectors.nameError);
        this.emailErrorElement = this.rootElement.querySelector(this.selectors.emailError);
        this.phoneErrorElement = this.rootElement.querySelector(this.selectors.phoneError);
        this.messageErrorElement = this.rootElement.querySelector(this.selectors.messageError);
        this.bindEvents()
    }

    emailWasChecked = false;

    validateName = (field, trimEdges = true) => {
        const normalizedValue = field.value
            .replace(/[^\p{Script_Extensions=Latin}\p{Script_Extensions=Cyrillic}\s]/gu, '')
            .replace(/\s+/gu, ' ')

        const value = normalizedValue.trim();
        field.value = trimEdges ? value : normalizedValue.replace(/^\s+/u, '');
        const isValid = field.validity.valid && value.length >= 3 && value.length <= 16;
        const nameInvalid = !isValid;

        field.classList.toggle(this.stateClasses.isInvalid, nameInvalid);
        this.nameErrorElement.classList.toggle(this.stateClasses.isInvalid, nameInvalid);
        this.nameErrorElement.textContent = nameInvalid
            ? 'Мин. длина — 3 символа, макс. длина — 16 символов.'
            : '';
    }

    fieldValidate = (event) => {
        const field = event.target;

        if (field === this.nameElement) {
            const value = field.value
                .replace(/[^a-zа-яё\s]/gi, '')
                .replace(/\s+/gu, ' ')
                .replace(/^\s+/u, '');

            field.value = value;

            if (field.classList.contains(this.stateClasses.isInvalid)) {
                this.validateName(field, false);
            }
        }

        if (field === this.emailElement && this.emailWasChecked) {
            this.emailValidate(field);
        }

        if (field === this.messageElement) {
            this.messageValidate(field);
        }
    }

    emailValidate = (field) => {
        const invalid = !field.validity.valid;

        this.emailErrorElement.textContent = invalid
            ? field.value.length === 0
            ? 'Введите email.'
            : 'Введите корректный email.'
            : '';

        field.classList.toggle(this.stateClasses.isInvalid, invalid);
        this.emailErrorElement.classList.toggle(this.stateClasses.isInvalid, invalid);
    }

    phoneValidate = (field) => {
        const invalid = !field.validity.valid;

        this.phoneErrorElement.textContent = invalid
            ? field.value.length === 0
            ? 'Введите номер телефона.'
            : 'Введите корректный номер телефона.'
            : '';

        field.classList.toggle(this.stateClasses.isInvalid, invalid);
        this.phoneErrorElement.classList.toggle(this.stateClasses.isInvalid, invalid);
    }

    messageValidate = (field) => {
        const emptyMessage = field.value.trim().length === 0

        this.messageElement.classList.toggle(this.stateClasses.isInvalid, emptyMessage)
        this.messageErrorElement.classList.toggle(this.stateClasses.isInvalid, emptyMessage)
        this.messageErrorElement.textContent = emptyMessage
        ? 'Сообщение не должно быть пустым'
        : "";
    }

    fieldRequired = (event) => {
        const field = event.target;

        if (!field.matches(':required')) return;
        if (field === this.nameElement) {
            this.validateName(field);
            return;
        }

        if (field === this.emailElement) {
            this.emailValidate(field);
            this.emailWasChecked = true;
            return;
        }

        if (field === this.phoneElement) {
            this.phoneValidate(field);
            return;
        }

        if (field === this.messageElement) {
            this.messageValidate(field);
            return;
        }
    }

    inValidForm = (event) => {
        this.emailWasChecked = true

        this.validateName(this.nameElement);
        this.emailValidate(this.emailElement);
        this.phoneValidate(this.phoneElement);
        this.messageValidate(this.messageElement);

        const fieldsHasErrors = [
            this.nameElement,
            this.emailElement,
            this.phoneElement,
            this.messageElement,
        ].some((field) => field.classList.contains(this.stateClasses.isInvalid))

            if (fieldsHasErrors) {
                event.preventDefault()
            }
    }

    bindEvents() {
        this.rootElement.addEventListener('focusout', this.fieldRequired);
        this.rootElement.addEventListener('input', this.fieldValidate);
        this.buttonElement.addEventListener('click', this.inValidForm);
    }
}
export default Form
