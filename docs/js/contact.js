const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validInputs()
})

inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.nextElementSibling.classList.add('hidden')
        input.classList.remove('invalid')
        input.classList.remove('valid')
        input.parentElement.children[0].classList.remove('wrong')
        if(input.value === "") {
            input.parentElement.children[0].classList.remove('invisible')
        } else {
            input.parentElement.children[0].classList.add('invisible')
        }
    })
})

textarea.addEventListener('input', () => {
    if(textarea.value === "") {
        textarea.parentElement.children[0].classList.remove('invisible')
    } else {
        textarea.parentElement.children[0].classList.add('invisible')
    }
})

function validInputs() {
    inputs.forEach(input => {
        if (input.type === "text") {
            if (input.value.length < 3 || input.value.length > 29) {
                input.nextElementSibling.classList.remove('hidden')
                input.classList.add('invalid')
                input.parentElement.children[0].classList.add('wrong')
            } else {
                input.classList.add('valid')
            }
        }

        if (input.type === "email") {
            if (input.value.length < 10 || input.value.length > 29 ) {
                input.nextElementSibling.classList.remove('hidden')
                input.classList.add('invalid')
                input.parentElement.children[0].classList.add('wrong')
            } else {
                input.classList.add('valid')
            }
        }
    })
}