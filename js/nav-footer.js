document.addEventListener('DOMContentLoaded', function () {
    const navToggleCheckbox = document.getElementById('toggle-bar');
    const navToggleLabel = document.querySelector('label[for="toggle-bar"]');
    const navBar = document.querySelector('.navbar');

    navToggleCheckbox.addEventListener('change', () => {
        if (navToggleCheckbox.checked) {
            navToggleLabel.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'; // Change to cross icon
            navBar.classList.add('nav-open'); // Open the nav
        } else {
            navToggleLabel.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'; // Change back to hamburger menu
            navBar.classList.remove('nav-open'); // Close the nav
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.pathname;

    navLinks.forEach(link => {
        if (link.href.includes(currentUrl)) {
            link.classList.add('active');
        }
    });
});

// loader
document.addEventListener("DOMContentLoaded", function(event) { 
    var loader = document.getElementById("loader");
    window.onload = function() {
        loader.style.display = "none";
    };
});

    // JavaScript function to toggle dropdown
    function toggleDropdown(event) {
        var dropdownContent = event.currentTarget.querySelector(".dropdown-content");
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    }
    
    // Add event listeners to each dropdown container
    document.querySelectorAll(".dropdown").forEach(function(dropdown) {
        dropdown.addEventListener("mouseenter", toggleDropdown);
        dropdown.addEventListener("mouseleave", toggleDropdown);
        dropdown.addEventListener("click", toggleDropdown);
    });
    
    // JavaScript function to toggle dropdown
    function toggleDropdown(event) {
        var dropdownContent = event.currentTarget.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("hidden"); // Toggle the 'hidden' class
    }
    

