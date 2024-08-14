const navbar = document.getElementById('navbar');
const form = document.getElementById('form')
let lastScrollPosition = window.scrollY;

window.addEventListener('scroll', function() {
  let currentScrollPosition = window.scrollY;

  if (currentScrollPosition >= 1 && this.window.innerWidth >= 648) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
  lastScrollPosition = currentScrollPosition;
});

form.addEventListener('submit', event => {
  event.preventDefault()
  Swal.fire({
    title: "Mensaje enviado correctamente",
    icon: "success",
    timer: 2000,
    customClass: {
      confirmButton: 'button-bg'
    }
  })
})
