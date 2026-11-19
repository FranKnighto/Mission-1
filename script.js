/*=====Greeting Prompt===================*/

function greeting() {
  const name = prompt('What is your name?') || 'visitor';
  return `Welcome to ${name}'s portfolio website.`;
}
alert(greeting());

// ============= show Goals ========================
function selection() {
  const showGoals = document.getElementById('goal-list');
  if (showGoals.style.display === 'none') {
    showGoals.style.display = 'block'; //block to show the element
  } else {
    showGoals.style.display = 'none'; //hidden again
  }
}

// ============== random quotes ============================
const quotes = [
  'The mind is everything. What you think you become. – Buddha',
  'Whatever the mind of man can conceive and believe, it can achieve. – Napoleon Hill',
  'Whether you think you can or you think you can’t, you’re right. – Henry Ford',
  'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced. – Vincent Van Gogh',
  'Believe you can and you’re halfway there. – Theodore Roosevelt',
];

function setquote() {
  const quote = document.getElementById('quote-text');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  console.log(randomQuote);
  quote.innerHTML = randomQuote;
}

setquote();
