// ---------- toggle icon navbar ---------------//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
}

// ---------- scroll section active link ---------------//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
         navLinks.forEach(links => {
            links.classList.remove('active')
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

         });
      };

    // ---------- toggle icon navbar remove when get active ---------------//
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');  
   });
   // ---------- scroll section active link ---------------//
   let header = document.querySelector('header');
   header.classList.toggle(' ', window.scrollY > 100);

};


// ---------- scroll section active link ---------------//

ScrollReveal({
   // reset: true,
   distance:'80px',
   duration: 2000,
   delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .about-content p', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .glowing-circle2, .about-content h2', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content h3', { origin: 'right' });


const typed = new Typed('.multi-text',{
 strings: ['Software Developer','Web Developer'],
 typedSpeed: 130,
 backSpeed: 130,
 backDelay:150,
 loop: true
});

// form validation

var mailError = document.getElementById('mail-error');
var phoneError = document.getElementById('phone-error');
var smsError = document.getElementById('sms-error');
var submitError = document.getElementById('submit-error');

 function validateMail(){
   var email = document.getElementById('mail-id').value;

   if(email.length == 0){
      mailError.innerHTML = 'Email is required*';
      return false;
   }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)){
      mailError.innerHTML = 'Invalid Email*';
       return false;
   }
    mailError.innerHTML = '<i class= "bx bx-check-circle"></i>';
     return true;
   

}

function validatePhone(){

   var phone = document.getElementById('phone-id').value;
    
   if(phone.length == 0){
      phoneError.innerHTML = 'phone Number is required*';
      return false;
   }
   
   if(phone.length !== 10){
      phoneError.innerHTML = 'phone Number should be 10 digit*';
      return false;
   }

   if(!phone.match(/^[0-9]{10}$/)){
      phoneError.innerHTML = 'Only digits please*.';
      return false;
   }
   
   phoneError.innerHTML = '<i class= "bx bx-check-circle"></i>';
   return true;
}


function validateSms(){

   var sms = document.getElementById('sms-id').value;
   var required = 30;
   var left = required - sms.length;

   if(left > 0){
      smsError.innerHTML = left + 'more characters required';
      return false;
   }
    
   smsError.innerHTML = '<i class= "bx bx-check-circle"></i>';
   return true;

}


function validateForm(){
   if(!validateMail() || !validatePhone() || !validateSms()){
      submitError.style.display = 'block';
      submitError.innerHTML = 'Please fix error to submit*';
       setTimeout(function(){submitError.style.display = 'none';}, 3000);
      return false;
   }
}