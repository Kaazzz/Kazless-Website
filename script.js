
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const yOffset = -100; 
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


function openBillingPopup() {
    const billingPopup = document.getElementById('billingPopup');
    billingPopup.style.display = 'flex'; 
}


function closeBillingPopup() {
    const billingPopup = document.getElementById('billingPopup');
    billingPopup.style.display = 'none'; 
}


document.addEventListener('DOMContentLoaded', function() {
    const cardImage = document.getElementById('cardImage');
    cardImage.addEventListener('click', openBillingPopup);
});





function processPayment() {
    const cardNumber = document.querySelector('input[placeholder="Card/Account Number"]').value;
    const accountName = document.querySelector('input[placeholder="Account Name"]').value;
    const expiryDate = document.querySelector('input[placeholder="Expiry Date"]').value;

    if (cardNumber && accountName && expiryDate) {
        alert('Payment processed successfully!');
    } else {
        alert('Please fill in all payment details.');
    }
}


document.getElementById('getAppButton').addEventListener('click', function(event) {
    event.preventDefault(); 


    document.getElementById('appPopup').style.display = 'block';
});

function closePopup() {

    document.getElementById('appPopup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});