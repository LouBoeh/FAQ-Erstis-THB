function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    button.children[1].classList.toggle('rotate');
}
// 使用 fetch 发送请求到后端
fetch('http://34.79.116.218:8080/')
    .then(response => response.json())
    .then(data => {
        // 使用返回的数据来创建手风琴项
        createAccordionItems(data);
    })
    .catch(error => console.error('Error:', error));

// 创建手风琴项的函数
function createAccordionItems(data) {
    const accordion = document.querySelector('.accordion');
    data.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        const accordionButton = document.createElement('button');
        accordionButton.className = 'accordion-button';
        accordionButton.onclick = function() { toggleAccordion(this); };
        accordionButton.innerHTML = `<div class="accordion-title">${item.text}</div>
                                 <div class="accordion-icon">&#9654;</div>`;

        const accordionContent = document.createElement('div');
        accordionContent.className = 'accordion-content';
        accordionContent.innerHTML = `<p>${item.answer}</p>`;

        accordionItem.appendChild(accordionButton);
        accordionItem.appendChild(accordionContent);
        accordion.appendChild(accordionItem);
    });
}
