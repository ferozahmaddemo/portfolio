
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listeners to the navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Function to smoothly scroll to the target section
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Scroll to the target section with a smooth behavior
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }

