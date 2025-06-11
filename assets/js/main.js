// Animazioni e interazioni
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Aggiungere observer a tutti gli elementi con la classe .animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
});

// Gestione del caricamento di immagini e video
document.addEventListener('DOMContentLoaded', () => {
    // Bottone per caricare media
    const mediaButton = document.createElement('button');
    mediaButton.className = 'btn-gradient fixed bottom-8 right-8 z-50';
    mediaButton.innerHTML = 'Carica Media';
    mediaButton.onclick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,video/*';
        input.multiple = true;
        input.onchange = (e) => {
            handleMediaUpload(e.target.files);
        };
        input.click();
    };
    document.body.appendChild(mediaButton);
});

function handleMediaUpload(files) {
    const previewContainer = document.createElement('div');
    previewContainer.className = 'fixed bottom-16 right-8 bg-gray-800 p-4 rounded-lg shadow-xl';
    
    Array.from(files).forEach(file => {
        const preview = document.createElement('div');
        preview.className = 'mb-4';
        
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.className = 'max-w-sm rounded-lg';
            img.src = URL.createObjectURL(file);
            preview.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            const video = document.createElement('video');
            video.className = 'max-w-sm rounded-lg';
            video.controls = true;
            video.src = URL.createObjectURL(file);
            preview.appendChild(video);
        }
        
        previewContainer.appendChild(preview);
    });
    
    document.body.appendChild(previewContainer);
}
