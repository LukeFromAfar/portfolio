function showImage(src) {
    const imageHtml = `
        <div class="image-overlay" onclick="closeImage()">
            <div class="image-container" onclick="event.stopPropagation()">
                <img src="${src}" alt="Enlarged Image">
                <button class="close-image-button" onclick="closeImage()">Close</button>
            </div>
        </div>`;
    const overlay = document.createElement('div');
    overlay.id = 'imageOverlay';
    overlay.innerHTML = imageHtml;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';  // Disable scroll on the body
}

function closeImage() {
    const overlay = document.getElementById('imageOverlay');
    if (overlay) {
        document.body.removeChild(overlay);
        document.body.style.overflow = 'auto';  // Re-enable scroll on the body
    }
}