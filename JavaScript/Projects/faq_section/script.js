const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    // Close all
    document.querySelectorAll('.accordion-content').forEach(content => {
      content.classList.remove('active');
    });

    // Open clicked one
    const content = header.nextElementSibling;
    content.classList.add('active');
  });
});