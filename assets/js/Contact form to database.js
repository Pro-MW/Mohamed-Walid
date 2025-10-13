function submitForm(event) { 
  event.preventDefault(); 
  var form = event.target; 
  var status = document.getElementById('status'); 

  var firstName = document.getElementById('inputFirstName').value; 
  var lastName = document.getElementById('inputLastName').value; 
  var email = document.getElementById('inputEmail').value; 
  var message = document.getElementById('message').value; 

  if (firstName === '' || lastName === '' || email === '' || message === '') { 
    status.innerHTML = 'Please complete all fields.'; 
    status.style.color = 'red'; 
    return; 
  } 

  status.innerHTML = 'Sending...'; 
  status.style.color = 'green'; 

  var formData = new FormData(form); 

  fetch(form.action, { 
    method: 'POST', 
    body: formData
  }) 
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      status.innerHTML = 'Message sent successfully ✓✓'; 
      status.style.color = 'green'; 
      form.reset();
    } else {
      status.innerHTML = 'Oops! There was a problem sending the message.'; 
      status.style.color = 'red'; 
    }
  })
  .catch(error => {
    console.error('Error:', error);
    status.innerHTML = 'Oops! There was a problem sending the message.'; 
    status.style.color = 'red'; 
  });
}





  




