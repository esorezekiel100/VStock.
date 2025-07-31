// Change main product image
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbnails.forEach((t) => t.classList.remove('border-purple-600'));
    thumb.classList.add('border-purple-600');
    mainImage.src = thumb.src;
  });
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((b) => {
      b.classList.remove('text-purple-600', 'border-b-2', 'border-purple-600');
      b.classList.add('text-gray-600');
    });
    btn.classList.add('text-purple-600', 'border-b-2', 'border-purple-600');
    btn.classList.remove('text-gray-600');

    tabContents.forEach((c) => c.classList.add('hidden'));
    tabContents[index].classList.remove('hidden');
  });
});
