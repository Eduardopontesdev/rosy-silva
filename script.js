// Efeito Parallax
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const header = document.querySelector('header');
    header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Sistema de Notificação
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Efeitos Sonoros
const hoverSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-hover-click-notification-358.mp3');
hoverSound.volume = 0.3;

document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(e => console.log("Autoplay blocked"));
    });
});

// Pré-carregamento
window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(preloader);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1500);
});

// Dados dos shows
const showsData = [
    {
        date: "03/08/2025",
        day: "03",
        month: "Ago",
        title: "Lucian'os Bar",
        location: "Domingo apartir das 15H",
        description: "Local: Pantanal",
        link: "#"
    },
    {
        date: "10/08/2025",
        day: "10",
        month: "Ago",
        title: "Barraca Fenix",
        location: "Domingo apartir das 13H",
        description: "Local: Lago Seco",
        link: "#"
    },
    {
        date: "10/08/2025",
        day: "10",
        month: "Ago",
        title: "Bar e Restaurante O Chumbada",
        location: "Domingo apartir das 19H",
        description: "Local: Bairro Cruzeiro",
        link: "#"
    },
    {
        date: "16/08/2025",
        day: "16",
        month: "Ago",
        title: "Embrasa",
        location: "Sábado apartir das 22H",
        description: "Local: Rua Perimetral",
        link: "#"
    },
    {
        date: "17/08/2025",
        day: "17",
        month: "Ago",
        title: "Agenda aberta",
        location: "Horario a combinar",
        description: "Local: indefinido",
        link: "#"
    },
     {
        date: "24/08/2025",
        day: "24",
        month: "Ago",
        title: "Agenda aberta",
        location: "Horario a combinar",
        description: "Local: indefinido",
        link: "#"
    },
];

// Galeria de fotos
const galleryImages = [
    "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
];

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar ano no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Carregar shows
    loadShows();
    
    // Carregar galeria
    // loadGallery();
    
    // Configurar player de música
    setupMusicPlayer();
    
    // Configurar lightbox
    setupLightbox();
    
    // Configurar scroll suave
    setupSmoothScroll();
    
    // Configurar animações
    setupAnimations();
    
    // Configurar formulários
    setupForms();
});

function loadShows() {
    const agendaContainer = document.querySelector('.agenda');
    
    showsData.forEach((show, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        eventElement.style.transitionDelay = `${index * 0.1}s`;
        eventElement.innerHTML = `
            <div class="event-date">
                <div class="day">${show.day}</div>
                <div class="month">${show.month}</div>
            </div>
            <div class="event-info">
                <h3>${show.title}</h3>
                <p class="event-location">${show.location}</p>
                <p>${show.description}</p>
            </div>
            
        `;
        
        agendaContainer.appendChild(eventElement);
    });
}

function loadGallery() {
    const galleryContainer = document.querySelector('.gallery-grid');
    
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.transitionDelay = `${index * 0.1}s`;
        galleryItem.innerHTML = `
            <img src="${image}" alt="Show da Rosy Silva">
            <div class="overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
    });
}

function setupMusicPlayer() {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeElement = document.getElementById('current-time');
    
    // Usando uma música de exemplo (substitua pelo arquivo real)
    audioPlayer.src = './beijo-de-cinema.mp3';
    
    playBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    audioPlayer.addEventListener('timeupdate', function() {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        const progressPercent = (currentTime / duration) * 100;
        
        progressBar.style.width = `${progressPercent}%`;
        
        // Atualizar tempo atual
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        currentTimeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });
    
    // Clique na barra de progresso para buscar
    document.querySelector('.progress-container').addEventListener('click', function(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        
        audioPlayer.currentTime = (clickX / width) * duration;
    });
    
    audioPlayer.addEventListener('ended', function() {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        progressBar.style.width = '0%';
        currentTimeElement.textContent = '0:00';
    });
}

function setupLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.event, .gallery-item, .music-player, .contact-grid').forEach(element => {
        observer.observe(element);
    });
}

function setupForms() {
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio (substitua por código real de envio)
            const name = document.getElementById('name').value;
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
            contactForm.reset();
        });
    }
    
    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletter-email').value;
            alert(`Obrigado por se inscrever com o e-mail ${email}!`);
            newsletterForm.reset();
        });
    }
}