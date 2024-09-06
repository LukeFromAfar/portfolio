function showMedia(src, type) {
    let mediaHtml;

    if (type === 'video') {
        mediaHtml = `
            <div class="image-overlay" onclick="closeMedia()">
                <div class="video-container" onclick="event.stopPropagation()">
                    <iframe width="100%" height="100%" src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <button class="close-image-button" onclick="closeMedia(event)">Close</button>
                </div>
            </div>`;
    } else if (type === 'image') {
        mediaHtml = `
            <div class="image-overlay" onclick="closeMedia()">
                <div class="image-container" onclick="event.stopPropagation()">
                    <img class="enlargedOslo" src="${src}" alt="Enlarged Image">
                    <button class="close-image-button" onclick="closeMedia(event)">Close</button>
                </div>
            </div>`;
    }

    const overlay = document.createElement('div');
    overlay.id = 'mediaOverlay';
    overlay.innerHTML = mediaHtml;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';  // Disable scroll on the body

    // Add event listener for "Esc" key to close media
    document.addEventListener('keydown', handleEscKey);
}

function closeMedia(event) {
    if (event) {
        event.stopPropagation();  // Prevent the event from bubbling up to the overlay
    }
    const overlay = document.getElementById('mediaOverlay');
    if (overlay) {
        document.body.removeChild(overlay);
        document.body.style.overflow = 'auto';  // Re-enable scroll on the body

        // Remove the "Esc" key event listener when the media is closed
        document.removeEventListener('keydown', handleEscKey);
    }
}

// Function to handle "Esc" key press
function handleEscKey(event) {
    if (event.key === 'Escape') {
        closeMedia();
    }
}