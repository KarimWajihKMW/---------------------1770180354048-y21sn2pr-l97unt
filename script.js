console.log('Akwadra Super Builder Initialized');

// State Management
let isMicOn = true;
let currentRoomId = null;

document.addEventListener('DOMContentLoaded', () => {
    // --- TRANSITION LOGIC ---
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

// --- NAVIGATION LOGIC ---
function switchTab(tabId) {
    const homeView = document.getElementById('home-view');
    const profileView = document.getElementById('profile-view');
    const appHeader = document.getElementById('app-header');
    
    // Nav Buttons
    const navHome = document.getElementById('nav-home');
    const navProfile = document.getElementById('nav-profile');

    // Reset all nav styles to inactive
    const allNavs = document.querySelectorAll('.nav-btn');
    allNavs.forEach(btn => {
        btn.classList.remove('text-purple-600');
        btn.classList.add('text-gray-400');
        const icon = btn.querySelector('i');
        if(icon.classList.contains('fa-solid')) {
             icon.classList.remove('fa-solid');
             icon.classList.add('fa-regular');
        }
    });

    if (tabId === 'home') {
        homeView.classList.remove('hidden');
        profileView.classList.add('hidden');
        appHeader.classList.remove('hidden');
        
        // Active Style for Home
        navHome.classList.remove('text-gray-400');
        navHome.classList.add('text-purple-600');
        navHome.querySelector('i').classList.remove('fa-regular');
        navHome.querySelector('i').classList.add('fa-solid');

    } else if (tabId === 'profile') {
        homeView.classList.add('hidden');
        profileView.classList.remove('hidden');
        appHeader.classList.add('hidden');

        // Active Style for Profile
        navProfile.classList.remove('text-gray-400');
        navProfile.classList.add('text-purple-600');
        navProfile.querySelector('i').classList.remove('fa-regular');
        navProfile.querySelector('i').classList.add('fa-solid');
    }
}

// Open Room Functionality
function openRoom(roomId) {
    currentRoomId = roomId;
    const overlay = document.getElementById('room-overlay');
    const title = document.getElementById('current-room-title');
    
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
    
    setTimeout(() => {
        element.remove();
    }, 2000);
}