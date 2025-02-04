const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const secondname = document.getElementById('secondname');
const Email = document.getElementById('Email');
const Telephone = document.getElementById('Telephone');
const about = document.getElementById('about');


form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDiplay = inputControl.querySelector('.error');

    errorDiplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDiplay = inputControl.querySelector('.error');

    errorDiplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidFirstname = firstname =>{
    const regular = /^[a-zA-Zа-яА-Я]{1,20}$/;
    return regular.test(firstname);
}
 
const isValidSecondname = secondname =>{
    const regular = /^[a-zA-Zа-яА-Я]{1,20}$/;;
    return regular.test(secondname);
}

const isValidEmail = Email =>{
    const regular = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regular.test(Email);
}

const isValidTelephone = Telephone =>{
    const regular = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;
    return regular.test(Telephone);
}

const isValidAbout = about =>{
    const regular = /^.{1,250}$/;
    return regular.test(about);
}

const validateInputs = () =>{
    const firstnameValue = firstname.value.trim();
    const secondnameValue = secondname.value.trim();
    const EmailValue = Email.value.trim();
    const TelephoneValue = Telephone.value.trim();
    const aboutValue = about.value.trim();

    if(firstnameValue === ''){
        setError(firstname, 'Поле не должно быть пустым!');
    }else if(!isValidFirstname(firstnameValue)){
        setError(firstname, 'Недопустимый формат!');
    }
    else{
        setSuccess(firstname);
    }

    if(secondnameValue === ''){
        setError(secondname, 'Поле не должно быть пустым!');
    }
    else if(!isValidSecondname(secondnameValue)){
        setError(secondname, 'Недопустимый формат!');
    }
    else{
        setSuccess(secondname);
    }

    if(EmailValue === ''){
        setError(Email, 'Поле не должно быть пустым!');
    }
    else if(!isValidEmail(EmailValue)){
        setError(Email, 'Недопустимый формат!');
    }
    else{
        setSuccess(Email);
    }

    if(TelephoneValue === ''){
        setError(Telephone, 'Поле не должно быть пустым!');
    }else if(!isValidTelephone(TelephoneValue)){
        setError(Telephone, 'Недопустимый формат!');
    }
    else{
        setSuccess(Telephone);
    }

    if(aboutValue === ''){
        setError(about, 'Поле не должно быть пустым!');
    }else if(!isValidAbout(aboutValue)){
        setError(about, 'Недопустимый формат!');
    }
    else{
        setSuccess(about);
    }

};

document.getElementById('form').addEventListener('submit', function(event) {
    let city = document.querySelector('select').value;
    
    let radios = document.querySelectorAll('input[name="course"]');
    let course;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            course = radios[i].nextSibling.textContent.trim();
            break;
        }
    }

    let isBGTU = document.querySelector('.chek').checked;

    if (city !== 'Минск' || course !== '3' || !isBGTU) {
        let confirmResult = confirm('Вы уверены в своем ответе?');
        if (!confirmResult) {
            event.preventDefault();
        }
    }
}); 





