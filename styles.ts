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

    let deleteButton = document.createElement('button') as HTMLButtonElement;
    let editButton = document.createElement('button') as HTMLButtonElement;

    let li = makePersonContacts(name, lastname, phone);

    deleteButton.textContent = 'Del';
    editButton.textContent = 'Edit';
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    contactsList.append(li);

    personName.value = '';
    personLastname.value = '';
    personPhone.value = '';

    deleteButton.addEventListener('click', deletePerson);
    editButton.addEventListener('click', editPerson);
  };
});

function makePersonContacts(name: string, lastname: string, phone: string) {
  let li = document.createElement('li') as HTMLLIElement;
  li.textContent = name + ' ' + lastname + ' ' + phone;
  return li;
};

function deletePerson() {
  this.parentElement.remove();
};


function editPerson() {

  let personValue = this.parentElement.firstChild.textContent;
  let getPersonValues = personValue.split(' ');
  let formWindow = document.createElement('form') as HTMLFormElement;
  let formButton = document.createElement('button') as HTMLButtonElement;
  formButton.textContent = 'Save';

  let arrFormValues = ['Имя', 'Фамилия', 'Телефон'];

  for(let i = 0; i < getPersonValues.length; i++) {
    let formInput = document.createElement('input') as HTMLInputElement;
    formInput.placeholder = arrFormValues[i];
    formWindow.appendChild(formInput);
  }

  formWindow.appendChild(formButton);
  this.parentElement.appendChild(formWindow);

  let li = this.parentElement;
  let newValue = '';
  formButton.addEventListener('click', function(event: Event) {
    event.preventDefault();
    let editForm = this.parentNode as HTMLFormElement;

    for(let i = 0; i < editForm.length - 1; i++) {
      let inputEl = editForm[i] as HTMLInputElement;
      newValue += inputEl.value + ' ';
    }

    li.firstChild.textContent = newValue.trim();
    formWindow.remove();
  });
};