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
      return; // توقف عن إرسال النموذج إذا كانت الحقول غير مكتملة
    }
    
    status.innerHTML = 'Sending...';
    status.style.color = 'green';
    
    var formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(function(response) {
      status.innerHTML = 'Message sent successfully ✓✓';
      status.style.color = 'green';
      form.reset();
    })
    .catch(function(error) {
      status.innerHTML = 'Oops! There was a problem sending the message.';
      status.style.color = 'red';
    });
  }





  