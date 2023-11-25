function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    button.children[1].classList.toggle('rotate');
}
// 使用 fetch 发送请求到后端 Mit fetch eine Anfrage an den Backend senden
fetch('http://34.79.116.218:8080/')
    .then(response => response.json())
    .then(data => {
        // 使用返回的数据来创建手风琴项 Mit den zurückgegebenen Daten Akkordeon-Elemente erstellen
        createAccordionItems(data);
    })
    .catch(error => console.error('Error:', error));

// 创建手风琴项的函数 Eine Funktion zum Erstellen von Akkordeon-Elementen
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    button.children[1].classList.toggle('rotate');
}

// 使用 fetch 发送请求到后端 Mit fetch eine Anfrage an den Backend senden
fetch('http://34.79.116.218:8080/')
    .then(response => response.json())
    .then(data => {
        // 使用返回的数据来创建手风琴项 Mit den zurückgegebenen Daten Akkordeon-Elemente erstellen
        createAccordionItems(data);
    })
    .catch(error => console.error('Error:', error));

// 创建手风琴项的函数  Eine Funktion zum Erstellen von Akkordeon-Elementen
function createAccordionItems(data) {
    const accordion = document.querySelector('.accordion');
    accordion.innerHTML = ''; // 清空现有的内容

    data.forEach(item => {
        // 创建手风琴项目  Akkordeon-Elemente erstellen
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        // 创建手风琴按钮  Akkordeon-Tasten erstellen
        const accordionButton = document.createElement('button');
        accordionButton.className = 'accordion-button';
        accordionButton.onclick = function() { toggleAccordion(this); };
        accordionButton.innerHTML = `<div class="accordion-title">${item.text}</div><div class="accordion-icon">&#9654;</div>`;

        // 创建手风琴内容  Akkordeon-Inhalte erstellen
        const accordionContent = document.createElement('div');
        accordionContent.className = 'accordion-content';
        accordionContent.innerHTML =  `<p>${item.answer}</p>`;

            // 将按钮和内容添加到手风琴项目中 Knöpfe und Inhalte zu Akkordeon-Elementen hinzufügen
            accordionItem.appendChild(accordionButton);
            accordionItem.appendChild(accordionContent);

            // 将手风琴项目添加到手风琴容器中  Akkordeon-Elemente in den Akkordeon-Container einfügen
            accordion.appendChild(accordionItem);
        });
    }
