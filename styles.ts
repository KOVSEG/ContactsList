document.addEventListener("DOMContentLoaded", function() {

  let contactsList = document.getElementById('contactsList') as HTMLUListElement;
  let getPerson = document.getElementById('person') as HTMLInputElement;
  let sendButton = document.getElementById('sendButton') as HTMLButtonElement;

  sendButton.addEventListener('click', handlePersonValue);

  function handlePersonValue(event: Event) {
    event.preventDefault();
    let person = getPerson.value.trim();

    if(person.length >= 4) {
      let deleteButton = document.createElement('button') as HTMLButtonElement;
      let editButton = document.createElement('button') as HTMLButtonElement;
      let li = document.createElement('li') as HTMLLIElement;
      li.textContent = person;

      deleteButton.textContent = 'Del';
      editButton.textContent = 'Edit';
      li.append(deleteButton);
      li.append(editButton);

      deleteButton.addEventListener('click', deletePerson);


      contactsList.append(li);
    }
  };

  function deletePerson() {
    this.parentElement.remove();
  };





















});


