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

//codigo para mostrar shows do dia
// Sistema ultra-simples que SEMPRE funciona
document.addEventListener('DOMContentLoaded', function() {
    // Verifica shows hoje de forma simples
    const today = new Date().toISOString().split('T')[0];
    const todaysShows = showsData.filter(show => show.date === today);
    
    if (todaysShows.length > 0) {
        const banner = document.getElementById('today-show-banner');
        const showInfo = document.getElementById('banner-show-info');
        
        if (banner && showInfo) {
            showInfo.textContent = `${todaysShows[0].title} - ${todaysShows[0].location} às ${todaysShows[0].time}`;
            banner.style.display = 'block';
        }
    }
});

// Função de fechamento simples
function closeBanner() {
    const banner = document.getElementById('today-show-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}
//fim do codigo para mostrar show do dia


//inicio do sistema de mes dos eventos
// Dados dos shows organizados por mês/ano
const showsData = [
  {
    id: 1,
    date: "2025-08-03",
    day: "03",
    month: "Ago",
    year: "2025",
    title: "Lucian's Bar",
    location: "Camocim - Pantanal",
    description: "Música ao vivo",
    poster: "../src/imagens/lucians-bar-dia-03.png",
    link: "#",
    time: "15:00",
    price: "",
  },
  {
    id: 2,
    date: "2025-08-08",
    day: "08",
    month: "Ago",
    year: "2025",
    title: "Restaurante Bom Prato",
    location: "Camocim - Avenida Beira Mar",
    description: "Música ao vivo",
    poster: "../src/imagens/restaurante-bom-prato-dia-08.png",
    link: "#",
    time: "20:00",
    price: "",
  },
  {
    id: 3,
    date: "2025-08-09",
    day: "09",
    month: "Ago",
    year: "2025",
    title: "Delegas Grill",
    location: "Camocim - Praça do Odus no quiosque",
    description: "Música ao vivo",
    poster: "../src/imagens/delegas-grill-dia-09.png",
    link: "#",
    time: "19:00",
    price: "",
  },
  {
    id: 4,
    date: "2025-08-10",
    day: "10",
    month: "Ago",
    year: "2025",
    title: "Barraca Fenix",
    location: "Camocim - Lago Seco",
    description: "Música ao vivo",
    poster: "../src/imagens/barraca-fenix-dia-10.png",
    link: "#",
    time: "13:00",
    price: "",
  },
  {
    id: 5,
    date: "2025-08-10",
    day: "10",
    month: "Ago",
    year: "2025",
    title: "Bar e Restaurante O Chumbada",
    location: "Camocim - Cruzeiro",
    description: "Música ao vivo",
    poster: "../src/imagens/bar-restaurante-o-chumbada-dia-10.png",
    link: "#",
    time: "19:00",
    price: "",
  },
  {
    id: 6,
    date: "2025-08-16",
    day: "16",
    month: "Ago",
    year: "2025",
    title: "Embrasa Pub",
    location: "Camocim - Rua Perimetral",
    description: "Música ao vivo",
    poster: "../src/imagens/embrasa-dia-16.png",
    link: "#",
    time: "22:00",
    price: "",
  },
  {
    id: 7,
    date: "2025-08-21",
    day: "21",
    month: "Ago",
    year: "2025",
    title: "Buteco da Mazé",
    location: "Camocim - Olinda",
    description: "Música ao vivo",
    poster: "../src/imagens/buteco-da-maze-dia-21.png",
    link: "#",
    time: "19:00",
    price: "",
  },
  {
    id: 7,
    date: "2025-08-23",
    day: "23",
    month: "Ago",
    year: "2025",
    title: "RM Piscina",
    location: "Camocim - Cidade com Deus",
    description: "Música ao vivo",
    poster: "../src/imagens/rm-piscina-dia-23.png",
    link: "#",
    time: "15:00",
    price: "",
  },
  {
    id: 8,
    date: "2025-08-31",
    day: "31",
    month: "Ago",
    year: "2025",
    title: "Barraca Marilago",
    location: "Camocim - Lago Seco",
    description: "Música ao vivo",
    poster: "../src/imagens/barraca-marilago-dia-31.jpg",
    link: "#",
    time: "19:00",
    price: "",
  },
  {
    id: 9,
    date: "2025-09-06",
    day: "06",
    month: "Set",
    year: "2025",
    title: "Evento Particular - Aniversário",
    location: "Camocim",
    description: "Música ao vivo",
    poster: "../src/imagens/agenda-setembro.png",
    link: "#",
    time: "Horario não definido",
    price: "",
  },
  {
    id: 10,
    date: "2025-09-13",
    day: "13",
    month: "Set",
    year: "2025",
    title: "Evento Particular",
    location: "Parnaiba",
    description: "Música ao vivo",
    poster: "../src/imagens/agenda-setembro.png",
    link: "#",
    time: "Horario não definido",
    price: "",
  },
  {
    id: 11,
    date: "2025-09-14",
    day: "14",
    month: "Set",
    year: "2025",
    title: "Evento Particular",
    location: "Parnaiba",
    description: "Música ao vivo",
    poster: "../src/imagens/agenda-setembro.png",
    link: "#",
    time: "Horario não definido",
    price: "",
  },
  {
    id: 12,
    date: "2025-09-21",
    day: "21",
    month: "Set",
    year: "2025",
    title: "Evento Particular",
    location: "Camocim",
    description: "Música ao vivo",
    poster: "../src/imagens/agenda-setembro.png",
    link: "#",
    time: "Horario não definido",
    price: "",
  },
  {
    id: 13,
    date: "2025-10-18",
    day: "18",
    month: "Out",
    year: "2025",
    title: "Evento Particular",
    location: "Luis Correia",
    description: "Música ao vivo",
    poster: "../src/imagens/agenda-outubro.png",
    link: "#",
    time: "Horario não definido",
    price: "",
  },
   {
    id: 14,
    date: "2025-10-19",
    day: "19",
    month: "Out",
    year: "2025",
    title: "Evento Particular",
    location: "Luis Correia",
    description: "Música ao vivo",
    poster: "../src/imagens/agenda-outubro.png",
    link: "#",
    time: "Horario não definido",
    price: "",
  },
];

// Variáveis de controle
let currentMonth = 7; // Agosto = 7 (0-11)
let currentYear = 2025;

// Função para formatar data
function formatMonthYear(month, year) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[month]} ${year}`;
}

// Função para filtrar shows por mês/ano
function getShowsByMonth(month, year) {
  return showsData.filter((show) => {
    const showDate = new Date(show.date);
    return showDate.getMonth() === month && showDate.getFullYear() === year;
  });
}

// Função para renderizar a agenda CORRIGIDA
function renderAgenda(month, year) {
  const container = document.getElementById("agenda-container");
  const monthDisplay = document.getElementById("current-month-display");

  console.log(`Renderizando: ${month}/${year}`); // Debug

  // Atualiza o display do mês atual
  monthDisplay.textContent = formatMonthYear(month, year);

  // Filtra shows do mês
  const monthShows = getShowsByMonth(month, year);

  console.log(`Shows encontrados: ${monthShows.length}`); // Debug

  if (monthShows.length === 0) {
    container.innerHTML = `
            <div class="no-shows">
                <i class="fas fa-calendar-times fa-2x"></i>
                <h3>Nenhum show agendado para este mês</h3>
                <p>Fique ligado nas próximas datas!</p>
            </div>
        `;
  } else {
    // CORREÇÃO: Usar innerHTML apenas uma vez
    let agendaHTML = `
            <div class="month-section">
                <h3 class="month-header">
                    <i class="fas fa-calendar-alt"></i>
                    ${formatMonthYear(month, year)}
                </h3>
                <div class="agenda">
        `;

    monthShows.forEach((show) => {
      agendaHTML += `
                <div class="event">
                    <div class="event-date">
                        <div class="day">${show.day}</div>
                        <div class="month">${show.month}</div>
                    </div>
                    <div class="event-info">
                        <h3>${show.title}</h3>
                        <p class="event-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${show.location}
                        </p>
                        <p class="event-description">${show.description}</p>
                        <div class="event-details">
                            <span class="event-time">
                                <i class="fas fa-clock"></i>
                                ${show.time}
                            </span>
                            <span class="event-price">
                                
                            </span>
                        </div>
                    </div>
                    <div class="event-poster">
    <img src="${show.poster || "default-poster.jpg"}" 
         alt="Cartaz ${show.title}" 
         class="poster-thumbnail"
         onclick="expandPoster(this)">
</div>
                </div>
            `;
    });

    agendaHTML += `
                </div>
            </div>
        `;

    container.innerHTML = agendaHTML;
  }
}

// Função para navegar entre meses
function navigateMonth(direction) {
  console.log(`Navegando para: ${direction}`); // Debug

  if (direction === "next") {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  } else {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
  }

  console.log(`Novo mês/ano: ${currentMonth}/${currentYear}`); // Debug
  renderAgenda(currentMonth, currentYear);
}

// Inicialização CORRIGIDA
document.addEventListener("DOMContentLoaded", function () {
  

  // Define explicitamente o mês/ano inicial
  currentMonth = 7; // Agosto
  currentYear = 2025;

  // Renderiza a agenda inicial
  renderAgenda(currentMonth, currentYear);

  // Event listeners para navegação - CORRIGIDO
  document.getElementById("prev-month").addEventListener("click", function (e) {
    e.preventDefault();
    navigateMonth("prev");
  });

  document.getElementById("next-month").addEventListener("click", function (e) {
    e.preventDefault();
    navigateMonth("next");
  });
});

// Adicione este CSS para debug visual

//fim do sistema de eventos

// Galeria de fotos
const galleryImages = [
  "../src/imagens/agenda-agosto.png",
  "../src/imagens/lucians-bar-dia-03.png",
  "../src/imagens/restaurante-bom-prato-dia-08.png",
  "../src/imagens/delegas-grill-dia-09.png",
  "../src/imagens/barraca-fenix-dia-10.png",
  "../src/imagens/bar-restaurante-o-chumbada-dia-10.png",
  "../src/imagens/embrasa-dia-16.png",
  "../src/imagens/buteco-da-maze-dia-21.png",
  "../src/imagens/rm-piscina-dia-23.png",
  "../src/imagens/barraca-marilago-dia-31.jpg",
  "../src/imagens/agenda-setembro.png",
  "../src/imagens/agenda-outubro.png"
];

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  // Atualizar ano no footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Carregar shows
  // loadShows();

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
  // loadPlayCounts(); // ← Adicione esta linha
}
//desativação da contagem de musicas tocadas
// ========== NOVAS FUNÇÕES PARA CONTAGEM ========== //
// Configuração
// Configuração
// const API_NAMESPACE_TRACK = 'rosysilva-music-tracks';
// const SYNC_INTERVAL = 30000; // 30 segundos

// // Objeto para controle de sincronização
// const syncState = {
//     lastSync: {},
//     pendingSyncs: {}
// }; // Namespace diferente para músicas

// // Função para contar plays
// // Função melhorada para contar plays
// async function countPlay(trackId) {
//     // 1. Atualização imediata local
//     const counterElement = document.getElementById(`plays-${trackId}`);
//     if (!counterElement) return;

//     const now = Date.now();
//     const lastUpdate = syncState.lastSync[trackId] || 0;

//     // Evitar múltiplas atualizações rápidas
//     if (now - lastUpdate < 5000) return;

//     // Atualizar estado local
//     let localCount = parseInt(localStorage.getItem(`track-${trackId}-plays`)) || 0;
//     localCount++;
//     localStorage.setItem(`track-${trackId}-plays`, localCount);
//     counterElement.textContent = localCount;

//     // 2. Sincronização com API (em segundo plano)
//     syncState.pendingSyncs[trackId] = true;
//     syncState.lastSync[trackId] = now;

//     if (navigator.onLine) {
//         try {
//             const response = await fetch(`https://api.countapi.xyz/hit/${API_NAMESPACE_TRACK}/${trackId}`);
//             const data = await response.json();

//             if (data.value) {
//                 // Atualizar apenas se o valor da API for maior
//                 if (data.value > localCount) {
//                     localStorage.setItem(`track-${trackId}-plays`, data.value);
//                     counterElement.textContent = data.value;
//                 }
//             }
//         } catch (error) {
//             console.error("Erro na sincronização:", error);
//             // Agenda nova tentativa
//             setTimeout(() => syncPlayCount(trackId), 10000);
//         }
//     }
//     delete syncState.pendingSyncs[trackId];
// }

//fim desativação da contagem de musicas tocadas

// // Função de sincronização periódica
// async function syncPlayCount(trackId) {
//     if (!navigator.onLine || syncState.pendingSyncs[trackId]) return;

//     try {
//         const response = await fetch(`https://api.countapi.xyz/get/${API_NAMESPACE_TRACK}/${trackId}`);
//         const data = await response.json();

//         if (data.value) {
//             const localCount = parseInt(localStorage.getItem(`track-${trackId}-plays`)) || 0;

//             // Atualiza se o valor da API for diferente
//             if (data.value !== localCount) {
//                 localStorage.setItem(`track-${trackId}-plays`, data.value);
//                 const counterElement = document.getElementById(`plays-${trackId}`);
//                 if (counterElement) {
//                     counterElement.textContent = data.value;
//                 }
//             }
//         }
//     } catch (error) {
//         console.error("Erro na sincronização periódica:", error);
//     }
// }

// // Iniciar sincronização periódica para todas as músicas
// function startPeriodicSync() {
//     setInterval(() => {
//         playlist.forEach(track => {
//             syncPlayCount(track.id);
//         });
//     }, SYNC_INTERVAL);
// }

// // Função para carregar contagens
// async function loadPlayCounts() {
//     for (const track of playlist) {
//         const counterElement = document.getElementById(`plays-${track.id}`);

//         // 1. Tenta pegar da API primeiro
//         if (navigator.onLine) {
//             try {
//                 const response = await fetch(`https://api.countapi.xyz/get/${API_NAMESPACE_TRACK}/${track.id}`);
//                 const data = await response.json();

//                 if (data.value) {
//                     counterElement.textContent = data.value;
//                     localStorage.setItem(`track-${track.id}-plays`, data.value);
//                     continue; // Pula para próxima música se obteve sucesso
//                 }
//             } catch (error) {
//                 console.log("Falha ao carregar da API:", error);
//             }
//         }

//         // 2. Fallback para localStorage
//         const localCount = localStorage.getItem(`track-${track.id}-plays`) || 0;
//         counterElement.textContent = localCount;
//     }
// }

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

  // countPlay(playlist[index].id);
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
const API_NAMESPACE_VISITS = "rosysilva-site-visits-v2"; // Alterei o namespace para evitar cache
const VISIT_KEY = "total_visits";

// Função principal para contar visitas
async function handleVisits() {
  const counterElement = document.getElementById("site-visits");
  if (!counterElement) return;

  // 1. Verifica se já contou nesta sessão
  if (!sessionStorage.getItem("visitCounted")) {
    try {
      // 2. Atualiza o localStorage primeiro (feedback imediato)
      let localCount = parseInt(localStorage.getItem(VISIT_KEY)) || 0;
      localCount++;
      localStorage.setItem(VISIT_KEY, localCount);
      counterElement.textContent = localCount;

      // 3. Tenta atualizar a API (se online)
      if (navigator.onLine) {
        const response = await fetch(
          `https://api.countapi.xyz/hit/${API_NAMESPACE_VISITS}/${VISIT_KEY}`
        );
        const data = await response.json();

        // 4. Atualiza com o valor real da API
        if (data.value) {
          counterElement.textContent = data.value;
          localStorage.setItem(VISIT_KEY, data.value);
        }
      }

      // 5. Marca como contado nesta sessão
      sessionStorage.setItem("visitCounted", "true");
    } catch (error) {
      console.error("Erro ao contar visita:", error);
    }
  }

  // 6. Carrega a contagem atual (mesmo se já tiver contado)
  loadVisitCount();
}

// Função para carregar a contagem atual
async function loadVisitCount() {
  const counterElement = document.getElementById("site-visits");
  if (!counterElement) return;

  try {
    // 1. Tenta pegar da API primeiro (se online)
    if (navigator.onLine) {
      const response = await fetch(
        `https://api.countapi.xyz/get/${API_NAMESPACE_VISITS}/${VISIT_KEY}`
      );
      const data = await response.json();

      if (data.value) {
        // 2. Atualiza o localStorage com o valor da API
        localStorage.setItem(VISIT_KEY, data.value);
        counterElement.textContent = data.value;
        return;
      }
    }

    // 3. Fallback para localStorage
    const localCount = localStorage.getItem(VISIT_KEY) || "0";
    counterElement.textContent = localCount;
  } catch (error) {
    console.error("Erro ao carregar contagem:", error);
    const localCount = localStorage.getItem(VISIT_KEY) || "0";
    counterElement.textContent = localCount;
  }
}

// // Sincronização periódica (a cada 2 minutos)
// function startVisitSync() {
//     setInterval(async () => {
//         if (navigator.onLine) {
//             try {
//                 const response = await fetch(`https://api.countapi.xyz/get/${API_NAMESPACE_VISITS}/${VISIT_KEY}`);
//                 const data = await response.json();

//                 if (data.value) {
//                     const currentLocal = parseInt(localStorage.getItem(VISIT_KEY)) || 0;
//                     if (data.value > currentLocal) {
//                         localStorage.setItem(VISIT_KEY, data.value);
//                         const counterElement = document.getElementById('site-visits');
//                         if (counterElement) {
//                             counterElement.textContent = data.value;
//                         }
//                     }
//                 }
//             } catch (error) {
//                 console.log("Erro na sincronização periódica:", error);
//             }
//         }
//     }, 120000); // 120000 ms = 2 minutos
// }

// // Inicialização
// document.addEventListener('DOMContentLoaded', () => {
//     handleVisits();
//     startVisitSync();
// });

// Inicialização (no final do seu script)
loadPlaylist();

// Garanta que loadPlayCounts() seja chamado após o carregamento da playlist
// setTimeout(() => {
//     // loadPlayCounts();
// }, 500);

// Iniciar sincronização periódica para todas as músicas
// function startPeriodicSync() {
//     setInterval(() => {
//         playlist.forEach(track => {
//             syncPlayCount(track.id);
//         });
//     }, SYNC_INTERVAL);
// }

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  loadPlaylist();
  // startPeriodicSync();
});


//sistema para expandir o cartaz
// Lightbox para cartaz expandido
function expandPoster(imgElement) {
    const lightbox = document.getElementById('poster-lightbox');
    const expandedImg = document.getElementById('expanded-poster');
    
    expandedImg.src = imgElement.src;
    expandedImg.alt = imgElement.alt;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previne scroll
}

function closeLightbox() {
    const lightbox = document.getElementById('poster-lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaura scroll
}

// Fechar com ESC ou clique fora da imagem
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('poster-lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }

});
//fim sistema para expandir cartaz