// Toggle bouquet container when flower icon is clicked
document.getElementById('flowerTrigger').addEventListener('click', function() {
    const bouquetContainer = document.getElementById('bouquetContainer');
    const isVisible = bouquetContainer.style.display === 'block';
    
    if (isVisible) {
        bouquetContainer.style.display = 'none';
    } else {
        bouquetContainer.style.display = 'block';
        // Add a subtle animation
        bouquetContainer.style.animation = 'none';
        setTimeout(() => {
            bouquetContainer.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }
});

// Download button functionality
document.getElementById('downloadBtn').addEventListener('click', function() {
    // In a real implementation, this would trigger a file download
    // For this demo, we'll show a success message
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
    this.style.background = 'linear-gradient(to right, #4CAF50, #8BC34A)';
    this.style.boxShadow = '0 5px 15px rgba(76, 175, 80, 0.3)';
    
    setTimeout(() => {
        this.innerHTML = originalText;
        this.style.background = 'linear-gradient(to right, #ff7eb3, #ff9ec5)';
        this.style.boxShadow = '0 5px 15px rgba(255, 126, 179, 0.3)';
    }, 2000);
});

// Yes button functionality
document.getElementById('yesBtn').addEventListener('click', function() {
    const responseMessage = document.getElementById('responseMessage');
    
    // Create a shower of hearts animation
    createHeartAnimation();
    
    // Show response message
    responseMessage.textContent = "You've made me the happiest person! ❤️";
    responseMessage.style.opacity = '1';
    
    // Change button text
    this.innerHTML = '<i class="fas fa-heart"></i> You Said Yes! <i class="fas fa-heart"></i>';
    this.style.background = 'linear-gradient(to right, #4CAF50, #8BC34A)';
    this.style.boxShadow = '0 10px 30px rgba(76, 175, 80, 0.4)';
    this.disabled = true;
    
    // Add floating hearts to the container
    addCelebrationHearts();
});

// Back button functionality
document.getElementById('backBtn').addEventListener('click', function() {
    // In a real application, this would navigate back
    // For this demo, we'll simulate a navigation action
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Going back...';
    
    setTimeout(() => {
        this.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
        alert("In a real application, this would navigate to the previous page.");
    }, 1000);
});

// Polaroid click interaction
document.querySelector('.polaroid').addEventListener('click', function() {
    const placeholder = this.querySelector('.image-placeholder');
    const originalIcon = placeholder.querySelector('.placeholder-icon');
    const originalText = placeholder.querySelector('.placeholder-text');
    
    // Temporarily change the content to show a "memory"
    originalIcon.className = 'fas fa-kiss-wink-heart placeholder-icon';
    originalText.textContent = 'Our First Date';
    
    // Add a subtle glow effect
    placeholder.style.boxShadow = '0 0 20px rgba(255, 126, 179, 0.4)';
    placeholder.style.borderColor = 'rgba(255, 126, 179, 0.8)';
    
    // Revert after 3 seconds
    setTimeout(() => {
        originalIcon.className = 'fas fa-heart placeholder-icon';
        originalText.textContent = 'Our Memory';
        placeholder.style.boxShadow = 'none';
        placeholder.style.borderColor = 'rgba(255, 126, 179, 0.3)';
    }, 3000);
});

// Function to create heart animation for yes button
function createHeartAnimation() {
    const button = document.getElementById('yesBtn');
    const rect = button.getBoundingClientRect();
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = `${rect.left + rect.width/2}px`;
        heart.style.top = `${rect.top + rect.height/2}px`;
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.opacity = '0.9';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        // Random animation
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 100;
        const duration = 1 + Math.random() * 1;
        
        heart.style.animation = `
            heartFloat ${duration}s ease-out forwards,
            heartFade ${duration}s ease-out forwards
        `;
        
        // Set CSS variables for animation
        heart.style.setProperty('--end-x', `${Math.cos(angle) * distance}px`);
        heart.style.setProperty('--end-y', `${Math.sin(angle) * distance - 50}px`);
        
        document.body.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            document.body.removeChild(heart);
        }, duration * 1000);
    }
    
    // Add CSS for the animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartFloat {
            to {
                transform: translate(var(--end-x), var(--end-y)) rotate(360deg);
            }
        }
        
        @keyframes heartFade {
            0%, 70% { opacity: 0.9; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Function to add celebration hearts to the container
function addCelebrationHearts() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 24 + 16}px`;
        heart.style.opacity = '0.7';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '5';
        heart.style.animation = `gentleFloat ${3 + Math.random() * 4}s ease-in-out infinite`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(heart);
    }
}

// Add hover effect to activity cards
document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const placeholder = this.querySelector('.image-placeholder');
        if (placeholder) {
            placeholder.style.transform = 'scale(1.05)';
            placeholder.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const placeholder = this.querySelector('.image-placeholder');
        if (placeholder) {
            placeholder.style.transform = 'scale(1)';
            placeholder.style.boxShadow = 'none';
        }
    });
});