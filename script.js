function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    button.children[1].classList.toggle('rotate');
}
