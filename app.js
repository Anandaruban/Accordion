const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
  },
  {
    id: "4",
    question: "create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework."
  },
];

const accordionData = document.querySelector('.accordion-container');

const createAccordion = () => {
  accordionData.innerHTML = data.map((items) => (`
    <div class="accordion-main">
      <div class="title">
        <h2>${items.question}</h2>
        <h1 class="icon">🔽</h1>
      </div>
      <div class="accordion-content">
        <p>${items.answer}</p>
      </div>
    </div>
  `))
}

createAccordion()

const accordionWrapper = document.querySelectorAll('.title')
console.log(accordionWrapper);

accordionWrapper.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      let currentActive = document.querySelectorAll('.active')
      
      currentActive.forEach((currentItems) => {
        currentItems.classList.remove('active');
      })
      item.classList.add('active');
    };
  });
});