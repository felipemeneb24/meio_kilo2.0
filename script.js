    document.addEventListener('DOMContentLoaded', function() {  
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Simple animation on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.about-section, .why-card, .number-item, .testimonial-card, .gallery-item');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state for animated elements
            document.querySelectorAll('.about-section, .why-card, .number-item, .testimonial-card, .gallery-item').forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(50px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Add scroll event listener
            window.addEventListener('scroll', animateOnScroll);
            
            // Trigger once on load
            animateOnScroll();
        });