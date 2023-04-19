var button = document.querySelector('button');
const body = document.querySelector('body');
var header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const section = document.querySelector('section');
const sectionButton = document.querySelector('section button');
const footer = document.querySelector('footer');

var button = document.getElementById('button');
button.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
	header.classList.toggle('dark-mode');
	navLinks.forEach(link => link.classList.toggle('dark-mode'));
	section.classList.toggle('dark-mode');
	sectionButton.classList.toggle('dark-mode');
	footer.classList.toggle('dark-mode');
});

  window.onscroll = function() {stickyHeader()};

  var header = document.querySelector(".sticky");
  var mainContent = document.querySelector("main");
  var headerOffset = header.offsetTop;
  
  function stickyHeader() {
	if (window.pageYOffset > headerOffset) {
	  header.classList.add("sticky-active");
	  mainContent.style.paddingTop = header.offsetHeight + "px";
	} else {
	  header.classList.remove("sticky-active");
	  mainContent.style.paddingTop = 0;
	}
  }
  
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginLink = document.getElementById('login-link');
  const signupLink = document.getElementById('signup-link');
  
  loginLink.addEventListener('click', () => {
	loginForm.style.display = 'block';
	signupForm.style.display = 'none';
  });
  
  signupLink.addEventListener('click', () => {
	loginForm.style.display = 'none';
	signupForm.style.display = 'block';
  });

  // Add event listener to all links
var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();
    var url = this.href;
    document.body.classList.add('loading');
    setTimeout(function() {
      window.location = url;
    }, 500);
  });
}

// Remove loading class when page is fully loaded
window.addEventListener('load', function() {
  document.body.classList.remove('loading');
  document.body.classList.add('loaded');
});






	
  