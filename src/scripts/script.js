// Efeito Parallax
window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  const header = document.querySelector("header");
  header.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});

// Sistema de Notificação
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

// Efeitos Sonoros
const hoverSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-hover-click-notification-358.mp3"
);
hoverSound.volume = 0.3;

document.querySelectorAll("button, a").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch((e) => console.log("Autoplay blocked"));
  });
});

// Pré-carregamento
window.addEventListener("load", function () {
  const preloader = document.createElement("div");
  preloader.className = "preloader";
  preloader.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(preloader);

  setTimeout(() => {
    preloader.style.opacity = "0";
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
    title: "Lucian's Bar",
    location: "Domingo apartir das 15H",
    description: "Local: Pantanal",
    link: "#",
  },
  {
    date: "09/08/2025",
    day: "09",
    month: "Ago",
    title: "Delegas Grill",
    location: "Sábado apartir das 19H",
    description: "Local: Praça do Odus no Quiosque",
    link: "#",
  },
  {
    date: "10/08/2025",
    day: "10",
    month: "Ago",
    title: "Barraca Fenix",
    location: "Domingo apartir das 13H",
    description: "Local: Lago Seco",
    link: "#",
  },
  {
    date: "10/08/2025",
    day: "10",
    month: "Ago",
    title: "Bar e Restaurante O Chumbada",
    location: "Domingo apartir das 19H",
    description: "Local: O Chumbada",
    link: "#",
  },
  {
    date: "16/08/2025",
    day: "16",
    month: "Ago",
    title: "Embrasa",
    location: "Sábado apartir das 22H",
    description: "Local: Rua Perimetral",
    link: "#",
  },
  {
    date: "17/08/2025",
    day: "17",
    month: "Ago",
    title: "Barraca 4 irmãos",
    location: "Apartir do meio dia > * + Duas atração aguardando confirmar",
    description: "Local: Lago seco",
    link: "#",
  },
  {
    date: "24/08/2025",
    day: "24",
    month: "Ago",
    title: "Agenda aberta",
    location: "Horario a combinar",
    description: "Local: indefinido",
    link: "#",
  },
  {
    date: "31/08/2025",
    day: "31",
    month: "Ago",
    title: "Agenda aberta",
    location: "Horario a combinar",
    description: "Local: indefinido",
    link: "#",
  },
];

// Galeria de fotos
const galleryImages = [
  "../src/imagens/lucians-bar-dia-03.png",
  "../src/imagens/delegas-grill-dia-09.png",
  "../src/imagens/barraca-fenix-dia-10.png",
  "../src/imagens/bar-restaurante-o-chumbada-dia-10.png",
  "../src/imagens/embrasa-dia-16.png",
  "../src/imagens/barraca-4-irmaos-dia-17.png",
];

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  // Atualizar ano no footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Carregar shows
  loadShows();

  // Carregar galeria
  loadGallery();

  // Configurar player de música
  // setupMusicPlayer();

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
  const agendaContainer = document.querySelector(".agenda");

  showsData.forEach((show, index) => {
    const eventElement = document.createElement("div");
    eventElement.className = "event";
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
  const galleryContainer = document.querySelector(".gallery-grid");

  galleryImages.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
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
//novo music player

// Configuração da Playlist
const playlist = [
  {
    id: "cama-de-solteiro",
    title: "Cama de solteiro",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/cama-de-solteiro-rosy_silva.mp3",
    duration: "3:23",
  },
  {
    id: "Destruindo-nosso-amor",
    title: "Destruindo nosso amor",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/destruindo-nosso-amor-rosy_silva.mp3",
    duration: "3:36",
  },
  {
    id: "Eu-nunca-te-trai",
    title: "Eu nunca te trai",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/eu-nunca-te-trai-rosy_sylva.mp3",
    duration: "3:15",
  },
  {
    id: "Me-doi",
    title: "Me doi",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/me-doi-rosy_silva.mp3",
    duration: "4:06",
  },
  {
    id: "Telefone-tocou",
    title: "Telefone tocou",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/telefone-tocou-rosy_silva.mp3",
    duration: "3:03",
  },
  {
    id: "Seu-beijo",
    title: "Seu beijo",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/seu-beijo-rosy_silva.mp3",
    duration: "2:45",
  },
  {
    id: "De-volta-pro-amor",
    title: "De volta pro amor",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/de-volta-pro-amor-rosy_silva.mp3",
    duration: "3:21",
  },
  {
    id: "18-Quilates",
    title: "18 Quilates",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/18-quilates-rosy_silva.mp3",
    duration: "3:21",
  },
  {
    id: "Amiga-falsa",
    title: "Amiga falsa",
    album: "CD Promocional Rosy Silva",
    cover: "../src/imagens/capa-cd-promocional-rosy-silva.png",
    file: "../src/musicas/amiga-falsa-rosy_silva.mp3",
    duration: "3:53",
  },
];

// Elementos do Player
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeElement = document.getElementById("current-time");
const totalTimeElement = document.getElementById("total-time");
const currentTrackElement = document.getElementById("current-track");
const currentAlbumElement = document.getElementById("current-album");
const currentAlbumCover = document.getElementById("current-album-cover");
const trackListElement = document.getElementById("track-list");
const volumeSlider = document.getElementById("volume-slider");

// Variáveis de controle
let currentTrackIndex = 0;
let isPlaying = false;

// Carrega a playlist
function loadPlaylist() {
  trackListElement.innerHTML = "";

  playlist.forEach((track, index) => {
    const trackElement = document.createElement("li");
    trackElement.className = "track";
    if (index === currentTrackIndex) {
      trackElement.classList.add("active");
    }

    trackElement.innerHTML = `
            <div class="track-info">
                <span class="track-title">${track.title}</span>
                <span class="track-album">${track.album}</span>
                <div class="play-count"> <!-- Adicione esta div -->
                    <i class="fas fa-play-circle"></i>
                    <span class="play-number" id="plays-${track.id}">0</span>
                    <span class="play-text">plays</span>
                </div>
            </div>
            <span class="track-duration">${track.duration}</span>
        `;

    trackElement.addEventListener("click", () => {
      playTrack(index);
    });

    trackListElement.appendChild(trackElement);
  });
  
  // Carrega as contagens ao inicializar
  loadPlayCounts(); // ← Adicione esta linha
}

// ========== NOVAS FUNÇÕES PARA CONTAGEM ========== //
// Configuração
// Configuração
const API_NAMESPACE_TRACK = 'rosysilva-music-tracks';
const SYNC_INTERVAL = 30000; // 30 segundos

// Objeto para controle de sincronização
const syncState = {
    lastSync: {},
    pendingSyncs: {}
}; // Namespace diferente para músicas

// Função para contar plays
// Função melhorada para contar plays
async function countPlay(trackId) {
    // 1. Atualização imediata local
    const counterElement = document.getElementById(`plays-${trackId}`);
    if (!counterElement) return;
    
    const now = Date.now();
    const lastUpdate = syncState.lastSync[trackId] || 0;
    
    // Evitar múltiplas atualizações rápidas
    if (now - lastUpdate < 5000) return;
    
    // Atualizar estado local
    let localCount = parseInt(localStorage.getItem(`track-${trackId}-plays`)) || 0;
    localCount++;
    localStorage.setItem(`track-${trackId}-plays`, localCount);
    counterElement.textContent = localCount;
    
    // 2. Sincronização com API (em segundo plano)
    syncState.pendingSyncs[trackId] = true;
    syncState.lastSync[trackId] = now;
    
    if (navigator.onLine) {
        try {
            const response = await fetch(`https://api.countapi.xyz/hit/${API_NAMESPACE_TRACK}/${trackId}`);
            const data = await response.json();
            
            if (data.value) {
                // Atualizar apenas se o valor da API for maior
                if (data.value > localCount) {
                    localStorage.setItem(`track-${trackId}-plays`, data.value);
                    counterElement.textContent = data.value;
                }
            }
        } catch (error) {
            console.error("Erro na sincronização:", error);
            // Agenda nova tentativa
            setTimeout(() => syncPlayCount(trackId), 10000);
        }
    }
    delete syncState.pendingSyncs[trackId];
}

// Função de sincronização periódica
async function syncPlayCount(trackId) {
    if (!navigator.onLine || syncState.pendingSyncs[trackId]) return;
    
    try {
        const response = await fetch(`https://api.countapi.xyz/get/${API_NAMESPACE_TRACK}/${trackId}`);
        const data = await response.json();
        
        if (data.value) {
            const localCount = parseInt(localStorage.getItem(`track-${trackId}-plays`)) || 0;
            
            // Atualiza se o valor da API for diferente
            if (data.value !== localCount) {
                localStorage.setItem(`track-${trackId}-plays`, data.value);
                const counterElement = document.getElementById(`plays-${trackId}`);
                if (counterElement) {
                    counterElement.textContent = data.value;
                }
            }
        }
    } catch (error) {
        console.error("Erro na sincronização periódica:", error);
    }
}

// Iniciar sincronização periódica para todas as músicas
function startPeriodicSync() {
    setInterval(() => {
        playlist.forEach(track => {
            syncPlayCount(track.id);
        });
    }, SYNC_INTERVAL);
}

// Função para carregar contagens
async function loadPlayCounts() {
    for (const track of playlist) {
        const counterElement = document.getElementById(`plays-${track.id}`);
        
        // 1. Tenta pegar da API primeiro
        if (navigator.onLine) {
            try {
                const response = await fetch(`https://api.countapi.xyz/get/${API_NAMESPACE_TRACK}/${track.id}`);
                const data = await response.json();
                
                if (data.value) {
                    counterElement.textContent = data.value;
                    localStorage.setItem(`track-${track.id}-plays`, data.value);
                    continue; // Pula para próxima música se obteve sucesso
                }
            } catch (error) {
                console.log("Falha ao carregar da API:", error);
            }
        }
        
        // 2. Fallback para localStorage
        const localCount = localStorage.getItem(`track-${track.id}-plays`) || 0;
        counterElement.textContent = localCount;
    }
}



// Toca uma faixa específica
function playTrack(index) {
  // Atualiza o índice atual
  currentTrackIndex = index;

  // Atualiza a UI
  const tracks = document.querySelectorAll(".track");
  tracks.forEach((track) => track.classList.remove("active"));
  tracks[index].classList.add("active");

  // Carrega a faixa
  const track = playlist[index];
  audioPlayer.src = track.file;
  currentTrackElement.textContent = track.title;
  currentAlbumElement.textContent = `Álbum: ${track.album}`;
  currentAlbumCover.src = track.cover;

  // Quando os metadados da música são carregados
  audioPlayer.addEventListener("loadedmetadata", () => {
    totalTimeElement.textContent = formatTime(audioPlayer.duration);
  });

  // Toca a música
  audioPlayer.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  isPlaying = true;

  countPlay(playlist[index].id);
}

// Agrupar requisições quando muitas músicas
const DEBOUNCE_TIME = 1000;
let syncTimeout;

function scheduleSync() {
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => {
        playlist.forEach(syncPlayCount);
    }, DEBOUNCE_TIME);
}

// Formata o tempo (segundos para MM:SS)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Atualiza a barra de progresso
function updateProgress() {
  const { currentTime, duration } = audioPlayer;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  currentTimeElement.textContent = formatTime(currentTime);
}

// Event Listeners
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
});

audioPlayer.addEventListener("timeupdate", updateProgress);

audioPlayer.addEventListener("ended", () => {
  // Vai para a próxima faixa quando a atual terminar
  const nextTrackIndex = (currentTrackIndex + 1) % playlist.length;
  playTrack(nextTrackIndex);
});

progressBar.parentElement.addEventListener("click", (e) => {
  const width = progressBar.parentElement.clientWidth;
  const clickX = e.offsetX;
  const duration = audioPlayer.duration;
  audioPlayer.currentTime = (clickX / width) * duration;
});

volumeSlider.addEventListener("input", () => {
  audioPlayer.volume = volumeSlider.value;
});

// Inicialização
loadPlaylist();
const track = playlist[0];
audioPlayer.src = track.file;
currentTrackElement.textContent = track.title;
currentAlbumElement.textContent = `Álbum: ${track.album}`;
currentAlbumCover.src = track.cover;

// Atualiza a duração total quando os metadados estiverem carregados
audioPlayer.addEventListener("loadedmetadata", () => {
  totalTimeElement.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.volume = volumeSlider.value;

// Adicione no final do seu script.js
function handleResponsiveLayout() {
  const player = document.querySelector(".music-player");
  const controls = document.querySelector(".controls");

  if (window.innerWidth < 768) {
    // Layout para mobile
    if (!controls.classList.contains("mobile-layout")) {
      controls.classList.add("mobile-layout");
    }
  } else {
    // Layout para desktop
    if (controls.classList.contains("mobile-layout")) {
      controls.classList.remove("mobile-layout");
    }
  }
}

// Execute na carga e no redimensionamento
window.addEventListener("load", handleResponsiveLayout);
window.addEventListener("resize", handleResponsiveLayout);

//fim do novo music player

// function setupMusicPlayer() {
//     const audioPlayer = document.getElementById('audio-player');
//     const playBtn = document.getElementById('play-btn');
//     const progressBar = document.getElementById('progress-bar');
//     const currentTimeElement = document.getElementById('current-time');

//     // Usando uma música de exemplo (substitua pelo arquivo real)
//     audioPlayer.src = './cama-de-solteiro.mp3';

//     playBtn.addEventListener('click', function() {
//         if (audioPlayer.paused) {
//             audioPlayer.play();
//             playBtn.innerHTML = '<i class="fas fa-pause"></i>';
//         } else {
//             audioPlayer.pause();
//             playBtn.innerHTML = '<i class="fas fa-play"></i>';
//         }
//     });

//     audioPlayer.addEventListener('timeupdate', function() {
//         const currentTime = audioPlayer.currentTime;
//         const duration = audioPlayer.duration;
//         const progressPercent = (currentTime / duration) * 100;

//         progressBar.style.width = `${progressPercent}%`;

//         // Atualizar tempo atual
//         const minutes = Math.floor(currentTime / 60);
//         const seconds = Math.floor(currentTime % 60);
//         currentTimeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     });

//     // Clique na barra de progresso para buscar
//     document.querySelector('.progress-container').addEventListener('click', function(e) {
//         const width = this.clientWidth;
//         const clickX = e.offsetX;
//         const duration = audioPlayer.duration;

//         audioPlayer.currentTime = (clickX / width) * duration;
//     });

//     audioPlayer.addEventListener('ended', function() {
//         playBtn.innerHTML = '<i class="fas fa-play"></i>';
//         progressBar.style.width = '0%';
//         currentTimeElement.textContent = '0:00';
//     });
// }

function setupLightbox() {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-lightbox");
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      lightboxImg.src = imgSrc;
      lightbox.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

function setupAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".event, .gallery-item, .music-player, .contact-grid")
    .forEach((element) => {
      observer.observe(element);
    });
}

function setupForms() {
  // Formulário de contato
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simular envio (substitua por código real de envio)
      const name = document.getElementById("name").value;
      alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
      contactForm.reset();
    });
  }

  // Formulário de newsletter
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("newsletter-email").value;
      alert(`Obrigado por se inscrever com o e-mail ${email}!`);
      newsletterForm.reset();
    });
  }
}
// Controles da Rádio
const radioPlayer = document.getElementById("radio-stream");
const radioPlayBtn = document.getElementById("radio-play-btn");
const radioVolume = document.getElementById("radio-volume");
const radioStatus = document.getElementById("radio-status-text");

// Configuração inicial
radioPlayer.volume = radioVolume.value;
let isRadioPlaying = false;

// Event Listeners
radioPlayBtn.addEventListener("click", function () {
  if (isRadioPlaying) {
    radioPlayer.pause();
    radioPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
    radioStatus.textContent = "Pausado";
    isRadioPlaying = false;
  } else {
    radioPlayer
      .play()
      .then(() => {
        radioPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
        radioStatus.textContent = "Tocando agora";
        isRadioPlaying = true;
      })
      .catch((error) => {
        console.error("Erro ao reproduzir rádio:", error);
        radioStatus.textContent = "Erro ao conectar";
        // Mostra alerta para o usuário
        showNotification(
          "Não foi possível conectar à rádio. Tente novamente mais tarde.",
          "error"
        );
      });
  }
});

radioVolume.addEventListener("input", function () {
  radioPlayer.volume = this.value;
});

// Mostrar status de conexão
radioPlayer.addEventListener("playing", function () {
  radioStatus.textContent = "Tocando agora";
});

radioPlayer.addEventListener("waiting", function () {
  radioStatus.textContent = "Conectando...";
});

radioPlayer.addEventListener("error", function () {
  radioStatus.textContent = "Erro de conexão";
  radioPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
  isRadioPlaying = false;
});

// Função para tentar reconexão automaticamente
function checkRadioConnection() {
  if (isRadioPlaying && radioPlayer.readyState === 0) {
    radioPlayer.load();
    radioPlayer
      .play()
      .catch((e) => console.log("Tentativa de reconexão falhou"));
  }
}

// Verifica a conexão a cada 30 segundos
setInterval(checkRadioConnection, 30000);

// Configuração
const API_NAMESPACE = 'rosysilva-site';

// Contador de visitas ao site
async function handleVisits() {
    const visitKey = 'visits';
    const counterElement = document.getElementById('site-visits');
    
    if (!sessionStorage.getItem('visitCounted')) {
        try {
            // Incrementa a API
            await fetch(`https://api.countapi.xyz/hit/${API_NAMESPACE}/${visitKey}`);
            
            // Atualiza localStorage
            const localCount = localStorage.getItem(visitKey) || 0;
            localStorage.setItem(visitKey, parseInt(localCount) + 1);
            
            sessionStorage.setItem('visitCounted', 'true');
        } catch (error) {
            console.log("Modo offline ativado para contador");
        }
    }
    
    // Exibe o valor atual
    try {
        const response = await fetch(`https://api.countapi.xyz/get/${API_NAMESPACE}/${visitKey}`);
        const data = await response.json();
        counterElement.textContent = data.value.toLocaleString();
    } catch {
        const localCount = localStorage.getItem(visitKey) || 1;
        counterElement.textContent = localCount;
    }
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
    handleVisits();
    // Sua inicialização de player aqui
});

// Inicialização (no final do seu script)
loadPlaylist();

// Garanta que loadPlayCounts() seja chamado após o carregamento da playlist
setTimeout(() => {
    loadPlayCounts();
}, 500);

// Iniciar sincronização periódica para todas as músicas
function startPeriodicSync() {
    setInterval(() => {
        playlist.forEach(track => {
            syncPlayCount(track.id);
        });
    }, SYNC_INTERVAL);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadPlaylist();
    startPeriodicSync();
});