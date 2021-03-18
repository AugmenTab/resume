const delay = 4000;
const words = [
  'Software', 
  // 'Game',
  // 'Mobile',
  'Android', 
  'Java', 
  'Python', 
  'C#', 
  'Elm', 
  // 'Blockchain', 
  // 'Machine Learning',
  // 'Haskell',
  // 'Clojure',
  // 'Solidity',
  // 'Vyper',
  // 'Rust',
  // 'Go',
  // 'F#',
  // 'Dart',
  // 'Prolog',
  // 'Dyalog APL',
  // 'Smalltalk',
  // 'Elixir',
  'Full Stack'
];

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

function handleResume() {
  window.location.href="traditional/main.pdf";
}

document.getElementById('print-icon').addEventListener('click', handlePrint);
document.getElementById('trad-resume-icon').addEventListener('click', handleResume);

animateTitle();
