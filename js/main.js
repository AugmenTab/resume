const delay = 4000;
const words = ['Software', 'Android', 'Java', 'Python', 'React', 'Elm', 'Full Stack'];

function animateTitle() {
  let count = 0;
  const wordsLength = words.length;
  setInterval(() => {insertWord(words[count++ % wordsLength], count)}, delay);
}

function insertWord(current, count) {
  const element = document.getElementById('word');
  element.classList.add('hidden');
  element.classList.remove('visible');
  setTimeout(() => {
    element.classList.remove('hidden');
    element.innerHTML = current;
  }, 600);
  element.classList.add('visible');
}

function handlePrint() {
  window.print();
}

document.getElementById('print-icon').addEventListener('click', handlePrint);

animateTitle();
