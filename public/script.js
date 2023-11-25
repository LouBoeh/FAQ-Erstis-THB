function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : >
    button.children[1].classList.toggle('rotate');
}

// Mit fetch eine Anfrage an den Backend senden
fetch('http://34.79.116.218:8080/')
    .then(response => response.json())
    .then(data => {
        // Mit den zurückgegebenen Daten Akkordeon-Elemente erstellen
        createAccordionItems(data);
    })
    .catch(error => console.error('Error:', error));

// Eine Funktion zum Erstellen von Akkordeon-Elementen
function createAccordionItems(data) {
    const accordion = document.querySelector('.accordion');
    accordion.innerHTML = ''; // Den vorhandenen Inhalt leeren

    data.forEach(item => {
        // Akkordeon-Elemente erstellen
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        // Akkordeon-Tasten erstellen
        const accordionButton = document.createElement('button');
        accordionButton.className = 'accordion-button';
        accordionButton.onclick = function() { toggleAccordion(this); };
        accordionButton.innerHTML = `<div class="accordion-title">${item.>

        // Akkordeon-Inhalte erstellen
        const accordionContent = document.createElement('div');
        accordionContent.className = 'accordion-content';
        accordionContent.innerHTML = `<p>${item.answer}</p>`;

        // Knöpfe und Inhalte zu Akkordeon-Elementen hinzufügen
        accordionItem.appendChild(accordionButton);
        accordionItem.appendChild(accordionContent);

        // Akkordeon-Elemente zum Akkordeon-Container hinzufügen
        accordion.appendChild(accordionItem);
    });
