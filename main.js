document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after delay
    setTimeout(function() {
        document.getElementById('starlight-loader').style.display = 'none';
    }, 2000);
    
    document.getElementById('year').textContent = new Date().getFullYear();
    
    
    const magicToggle = document.getElementById('magic-toggle');
    const body = document.body;
    
    magicToggle.addEventListener('click', function() {
        body.classList.toggle('moonlight');
        body.classList.add('transitioning');
        
        // Change icon based on mode
        const icon = this.querySelector('i');
        if (body.classList.contains('moonlight')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        
        // Remove transitioning class after animation
        setTimeout(() => {
            body.classList.remove('transitioning');
        }, 1000);
    });
    
    // Create shooting stars occasionally
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(star);
        
        // Remove after animation
        setTimeout(() => {
            star.remove();
        }, 3000);
    }
    
    // Create shooting stars at intervals
    setInterval(createShootingStar, 5000);
    
    // Add hover effects to all skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('tech-wave');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('tech-wave');
        });
    });
    
    // Add hover effects to language items
    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('tech-pulse');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('tech-pulse');
        });
    });
    
    // Add animation to buttons on hover
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('tech-wave');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('tech-wave');
        });
    });
    
    // Typewriter effect for the header
    const typedText = document.getElementById('typed');
    const text = "Full-Stack Developer";
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
});