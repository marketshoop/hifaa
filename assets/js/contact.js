/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();
  
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_glsqfa9', 'template_e8qfj4a', '#contact-form', 'q_gk5sI4FqnWUKYRV')
  .then(() => {
    // Show sent message
    contactMessage.textContent = 'Message sent successfully ✅';
     
    // Remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = '';
    }, 5000);
     
    // Clear input fields
    contactForm.reset();
  }, () => {
    // Show Error Message
    contactMessage.textContent = 'Message not sent (service error) ❌';
  });
}

contactForm.addEventListener('submit', sendEmail);