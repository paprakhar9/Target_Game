// Game state
let score = 0;

// Get DOM elements
const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');

// Function to get responsive target size
function getTargetSize() {
    const width = window.innerWidth;
    if (width >= 1200) return 80;
    if (width >= 768) return 70;
    if (width >= 480) return 60;
    return 50;
}

// Function to position target at random location
function positionTarget() {
    // Get game area dimensions
    const gameRect = gameArea.getBoundingClientRect();
    const targetSize = getTargetSize();
    
    // Calculate maximum positions (ensure target stays within bounds)
    const maxX = gameRect.width - targetSize;
    const maxY = gameRect.height - targetSize;
    
    // Generate random positions
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Apply positions
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

// Function to update score
function updateScore() {
    score++;
    scoreDisplay.textContent = score;
}

// Handle target click
target.addEventListener('click', function() {
    updateScore();
    positionTarget();
});

// Reposition target on window resize to maintain responsive design
window.addEventListener('resize', function() {
    positionTarget();
});

// Initialize game - position target on load
window.addEventListener('load', function() {
    positionTarget();
});
