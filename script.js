document.addEventListener("DOMContentLoaded", function () {
    const partnerSwiper = new Swiper('.partner-list', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    const gallerySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        
        if (phone.length !== 10) {
            alert("Phone number should be 10 digits.");
            event.preventDefault();
        }
        
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    
        // Add more form validation checks as needed
        
        // If all validation checks pass, the form will be submitted as usual
    });
    
    // Function to validate email format
    function isValidEmail(email) {
        // Use a regular expression to validate email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
    
  const images = document.querySelectorAll('.swiper-slide img');
images.forEach(image => {
    console.log('Image dimensions:', image.width, 'x', image.height);
});