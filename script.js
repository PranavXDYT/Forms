const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  const name = document.querySelector('#name').value;

  const mobile = document.querySelector('#mobile').value;

  const email = document.querySelector('#email').value;

  const data = {

    name: name,

    mobile: mobile,

    email: email

  };

  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/submit-form', true);

  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.send(JSON.stringify(data));

});

