let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');   // change icon
    navbar.classList.toggle('active');   // show / hide menu
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');

            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            //active sections far animation on scroll
            sec.classList.add('show-animate');
        }

        //if want to use animation that reports on sroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });
        let Header = document.querySelector('header');
    Header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');   // change icon
    navbar.classList.remove('active'); 
}

function replayHomeAnimation() {
  // Select all reveal elements
  const reveals = document.querySelectorAll('.reveal, .reveal-img');

  reveals.forEach(el => {
    // Remove span temporarily
    const span = el.querySelector('span');
    span.style.animation = 'none';

    // Force reflow
    void span.offsetWidth;

    // Re-add animation
    span.style.animation = '';
  });
}

// Trigger on page load
window.addEventListener('load', replayHomeAnimation);

// Optional: trigger when clicking a link to home
document.querySelectorAll('a[href="#home"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(replayHomeAnimation, 100);
  });
});

