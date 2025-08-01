// visitor-counter.js atualizado
const visitsRef = database.ref('visits');
const totalVisitsRef = visitsRef.child('total');
const uniqueVisitsRef = visitsRef.child('unique');

function updateCounter(total, unique) {
    document.getElementById('total-visits').textContent = total;
    document.getElementById('unique-visits').textContent = unique;
}

function registerVisit() {
    const visitorId = localStorage.getItem('visitorId') || generateVisitorId();
    localStorage.setItem('visitorId', visitorId);
    
    // Incrementa contagem total
    totalVisitsRef.transaction((count) => (count || 0) + 1);
    
    // Verifica visita única
    const visitorRef = visitsRef.child('visitors').child(visitorId);
    visitorRef.transaction((current) => {
        if (current === null) {
            uniqueVisitsRef.transaction((count) => (count || 0) + 1);
            return true;
        }
        return current;
    });
}

function generateVisitorId() {
    return 'vid-' + Math.random().toString(36).substr(2, 9);
}

// Monitora mudanças
totalVisitsRef.on('value', (snapshot) => {
    const total = snapshot.val() || 0;
    uniqueVisitsRef.once('value', (uniqueSnapshot) => {
        const unique = uniqueSnapshot.val() || 0;
        updateCounter(total, unique);
    });
});

document.addEventListener('DOMContentLoaded', registerVisit);