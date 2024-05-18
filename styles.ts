interface Contact {
  name: string,
  lastname: string,
  phone: string
}

document.addEventListener("DOMContentLoaded", function() {

  let contactsList = document.getElementById('contactsList') as HTMLUListElement;
  let personName = document.getElementById('personName') as HTMLInputElement;
  let personLastname = document.getElementById('personLastname') as HTMLInputElement;
  let personPhone = document.getElementById('personPhone') as HTMLInputElement;
  let sendButton = document.getElementById('sendButton') as HTMLButtonElement;

  sendButton.addEventListener('click', handlePersonValue);

  function handlePersonValue(event: Event) {
    event.preventDefault();
    let name = personName.value.trim();
    let lastname = personLastname.value.trim();
    let phone = personPhone.value.trim();

    let personContacts = new RegExp(/^[а-яА-Я]+$/);
    let personContactPhone = new RegExp(/^[\+]?[0-9]{1}[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/im);

    let deleteButton = document.createElement('button') as HTMLButtonElement;
    let editButton = document.createElement('button') as HTMLButtonElement;
    deleteButton.textContent = 'Del';
    editButton.textContent = 'Edit';


    if(name === '' && lastname === '' && phone === '') {
      alert('невозможно добавить пустые строки');
    } else {
      if(!name.match(personContacts) && (name.length < 15 && name.length > 2)) {
        alert('Имя должно содержать от 3 до 15 букв без посторонних символов');
      } else if(!lastname.match(personContacts) && (lastname.length < 15 && lastname.length > 2)) {
        alert('Фамилия должна содержать от 3 до 15 букв без посторонних символов');
      } else if(!phone.match(personContactPhone)) {
        alert('Поверьте правильность введеного номера телефона');
      } else {
        let li = makePersonContacts({ name, lastname, phone });
  
        function makePersonContacts(contact: Contact): HTMLLIElement {
          let li = document.createElement('li') as HTMLLIElement;
          li.textContent = contact.name + ' ' + contact.lastname + ' ' + contact.phone;
          return li;
        };
  
        li.appendChild(deleteButton);
        li.appendChild(editButton);
  
        contactsList.append(li);
      }
    }


    personName.value = '';
    personLastname.value = '';
    personPhone.value = '';

    deleteButton.addEventListener('click', deletePerson);
    editButton.addEventListener('click', editPerson);
  };
});

function deletePerson() {
  this.parentElement.remove();
};

function editPerson() {
  let personElement = this.parentElement;
  let personValues = personElement.firstChild.textContent;
  let getPersonValues = personValues.split(' ');

  let form = document.createElement('form') as HTMLFormElement;
  let formButton = document.createElement('button') as HTMLButtonElement;
  formButton.textContent = 'Save';

  let arrFormValues = ['Имя', 'Фамилия', 'Телефон'];
  let inputs: HTMLInputElement[] = [];

  arrFormValues.forEach((value, index) => {
    let input = document.createElement('input') as HTMLInputElement;
    input.placeholder = value;
    input.value = getPersonValues[index] || '';
    form.appendChild(input);
    inputs.push(input);
  });

  form.appendChild(formButton);

  formButton.addEventListener('click', function(event: Event) {
    event.preventDefault();

    let obj = {
      name: inputs[0].value.trim(),
      lastname: inputs[1].value.trim(),
      phone: inputs[2].value.trim()
    }

    personElement.firstChild.textContent = obj.name + ' ' + obj.lastname + ' ' + obj.phone;
    form.remove();
  });

  personElement.appendChild(form);
};