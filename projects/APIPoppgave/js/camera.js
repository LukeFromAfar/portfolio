const cameraVideoStream = document.getElementById('camera-stream');
const shutterButton = document.getElementById('shutter');
const photosButton = document.getElementById('photos-btn');
const gallery = document.querySelector('.gallery-view');
const currentImageElement = document.querySelector('.gallery-view img');
const closeGalleryButton = document.getElementById('close-gallery');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const canvas = document.getElementById('canvas');

let width = window.innerWidth;
let height = 0;
let streaming = false;

const capturedImages = [];
const currentImage = 0;

// Connect media device
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia({ video: true })) {
  navigator.mediaDevices.getUserMedia({ video: true }).then ((stream) => {
    cameraVideoStream.srcObject = stream;
    cameraVideoStream.play();
  })
};

cameraVideoStream.addEventListener(
  "canplay",
  (ev) => {
    if (!streaming) {
      height = cameraVideoStream.videoHeight / (cameraVideoStream.videoWidth / width);
      
      if (isNaN(height)) {
        height = width / (4 / 3);
      }

      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      cameraVideoStream.setAttribute("width", width);
      cameraVideoStream.setAttribute("height", height);
      streaming = true;
    }
  },
  false
);

// Capture snapshots using HTML Canvas
function captureImage () {
  const canvasContext = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  canvasContext.drawImage(cameraVideoStream, 0, 0, width, height);

  // Convert captured data to image (base64)
  const data = canvas.toDataURL('image/png');
  currentImageElement.src = data;
  photosButton.style.backgroundImage = `url(${data})`;
  capturedImages.push(data);
  capturedImages.reverse();

  // Create new Image elements from array
  capturedImages.forEach((image) => {

  });
}

shutterButton.addEventListener('click', () => captureImage());

// Event handlers to close and open gallery
photosButton.addEventListener('click', () => {
  gallery.classList.add('show-gallery');
  currentImageElement.setAttribute('data-index', 0);
});
closeGalleryButton.addEventListener('click', () => gallery.classList.remove('show-gallery'));

// Event handlers to browse gallery (next and previous)
nextButton.addEventListener('click', () => {
  const index = Number(currentImageElement.getAttribute('data-index'));
  if (capturedImages[index + 1]) {
    currentImageElement.src = capturedImages[index + 1];
    currentImageElement.setAttribute('data-index', index + 1);
  }
});
prevButton.addEventListener('click', () => {
  const index = Number(currentImageElement.getAttribute('data-index'));
  if (capturedImages[index - 1]) {
    currentImageElement.src = capturedImages[index - 1];
    currentImageElement.setAttribute('data-index', index - 1);
  }
});

const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');
const resetZoomButton = document.getElementById('resetZoom');

let scale = 1; // Initial scale
let flipped = false; // Initial flip state

// Function to apply zoom and flip
function applyTransformations() {
  const flipTransform = flipped ? 'scaleX(-1)' : ''; // Apply horizontal flip if needed
  const scaleTransform = `scale(${scale})`; // Apply current scale
  cameraVideoStream.style.transform = `${flipTransform} ${scaleTransform}`; // Combine transformations
}

// Function to toggle flip
function toggleFlip() {
  cameraVideoStream.classList.toggle('flipped');
  // Ensure the current scale is maintained when flipping
  applyCurrentScale();
}

// Function to zoom in
function zoomIn() {
  scale = 3; // Increase scale by 3x
  applyTransformations();
  removeActiveClassFromButtons();
  this.classList.add('active'); // 'this' refers to the zoomInButton element in this context
};

// Function to zoom out
function zoomOut() {
  scale = 0.5; // Decrease scale by 0.5x (half)
  applyTransformations();
  removeActiveClassFromButtons();
  this.classList.add('active'); // 'this' refers to the zoomOutButton element in this context
};

// Function to reset zoom to 1x
function resetZoom() {
  scale = 1; // Reset scale to 1
  applyTransformations();
  removeActiveClassFromButtons();
  this.classList.add('active'); // 'this' refers to the resetZoomButton element in this context
};


function applyCurrentScale() {
  const currentTransform = cameraVideoStream.classList.contains('flipped') ? 'scaleX(-1)' : '';
  cameraVideoStream.style.transform = `${currentTransform} scale(${scale})`;
}

// Add event listeners to the buttons
zoomInButton.addEventListener('click', zoomIn);
zoomOutButton.addEventListener('click', zoomOut);
resetZoomButton.addEventListener('click', resetZoom);

// Function to remove 'active' class from all buttons
function removeActiveClassFromButtons() {
  // Query all buttons again in case more buttons have been added dynamically
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(button => {
    button.classList.remove('active');
  });
}

// Example button for flipping the image
const flipButton = document.getElementById('switch-device');
flipButton.addEventListener('click', toggleFlip);

// let scale = 1; // Initial scale

// // Function to reset zoom to 1x
// function resetZoom() {
//   scale = 1; // Reset scale to 1
//   applyZoom();
// }

// // Function to zoom in
// function zoomIn() {
//   scale == 3; // Increase scale by 3x
//   applyZoom();
// }

// // Function to zoom out
// function zoomOut() {
//   scale == 0.5; // Decrease scale by 0.5x (half)
//   applyZoom();
// }

// // Apply zoom by updating the transform style
// function applyZoom() {
//   cameraVideoStream.style.transform = `scale(${scale})`;
// }

// // Add event listeners to the zoom buttons
// zoomInButton.addEventListener('click', zoomIn);
// zoomOutButton.addEventListener('click', zoomOut);
// resetZoomButton.addEventListener('click', resetZoom);
