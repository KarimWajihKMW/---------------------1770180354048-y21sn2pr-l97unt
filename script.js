console.log('Akwadra Super Builder Initialized');

// State Management
let isMicOn = true;
let currentRoomId = null;

document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSITION LOGIC ---
    // Preserving the original "card" click event logic but upgrading the action
    const landingCard = document.querySelector('.card');
    const landingPage = document.getElementById('landing-page');
    const mainApp = document.getElementById('main-app');

    if(landingCard) {
        landingCard.addEventListener('click', () => {
            console.log('تم النقر على البطاقة - الدخول للتطبيق');
            
            // Animate transition
            landingPage.style.opacity = '0';
            setTimeout(() => {
                landingPage.style.display = 'none';
                mainApp.classList.remove('hidden');
                // Slight delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    mainApp.classList.remove('opacity-0');
                }, 50);
            }, 700);
        });
    }

    // --- MIC TOGGLE ---
    const micBtn = document.getElementById('mic-btn');
    if(micBtn) {
        micBtn.addEventListener('click', toggleMic);
    }
});

// Open Room Functionality
function openRoom(roomId) {
    currentRoomId = roomId;
    const overlay = document.getElementById('room-overlay');
    const title = document.getElementById('current-room-title');
    
    // Set dynamic content based on room (Mock)
    if(roomId === 'room1') {
        title.innerText = 'سهرة طرب خليجي 🎵';
    } else {
        title.innerText = 'سوالف وضحك 😂';
    }

    overlay.classList.remove('translate-y-full');
}

// Minimize/Close Room
function minimizeRoom() {
    const overlay = document.getElementById('room-overlay');
    overlay.classList.add('translate-y-full');
    // We keep the room state 'active' in background conceptually
}

// Toggle Mic Logic
function toggleMic() {
    isMicOn = !isMicOn;
    const micBtn = document.getElementById('mic-btn');
    const icon = micBtn.querySelector('i');
    
    if (isMicOn) {
        micBtn.querySelector('div').classList.remove('bg-gray-500');
        micBtn.querySelector('div').classList.add('from-purple-500', 'to-pink-500', 'shadow-purple-500/30');
        icon.classList.remove('fa-microphone-slash');
        icon.classList.add('fa-microphone');
    } else {
        micBtn.querySelector('div').classList.remove('from-purple-500', 'to-pink-500', 'shadow-purple-500/30');
        micBtn.querySelector('div').classList.add('bg-gray-500');
        icon.classList.remove('fa-microphone');
        icon.classList.add('fa-microphone-slash');
    }
}

// Send Gift Animation
function sendGift() {
    const container = document.getElementById('reactions-container');
    const emojis = ['❤️', '🎁', '🌹', '💎', '🔥'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    const element = document.createElement('div');
    element.innerText = randomEmoji;
    element.className = 'absolute text-3xl float-up';
    element.style.left = Math.random() * 50 + 'px';
    
    container.appendChild(element);
    
    // Remove after animation
    setTimeout(() => {
        element.remove();
    }, 2000);
}