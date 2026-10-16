import IMask from 'imask'

const rootSelector = '[data-js-form-phone]'

class InputMask {
// data-js-form-phone доступен через dataset.jsFormPhone.
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.mask = IMask(this.rootElement, {
            mask: this.rootElement.dataset.jsFormPhone
        })

        this.mask.on('accept', this.validate)
        this.validate()
    }

    validate = () => {
        // отбрасываются дефисы и скобки у вводимого номера встроенным в Imask
        // св-вом unmaskedValue чтобы потом проверить длину номера и встроенным
        // методом браузера setCustomValidity сгенерировать поле с предупреждением
        //  /\D/g - шщет все не числовые значения
        const digits = this.mask.unmaskedValue.replace(/\D/g, '')

        this.rootElement.setCustomValidity(
            digits.length === 10 ? '' : 'Введите полный номер телефона',
        )
    }
}
class InputMaskCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new InputMask(element)
        })
    }
}
export default InputMaskCollection
