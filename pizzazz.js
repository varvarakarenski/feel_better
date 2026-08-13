const button = document.getElementById('playAudioBtn');
const audio = document.getElementById('myAudio');

if (button && audio) {
  button.addEventListener('click', () => {
    audio.currentTime = 0;

    audio.play();
  });
}

const chestButton = document.getElementById('chestButton');
const closedScroll = document.getElementById('closed-scroll');
const closedScrollButton = document.getElementById('closedScrollButton');
const scroll = document.getElementById('scroll');
const scrollButton = document.getElementById('scrollButton');
const blankPage = document.getElementById('blank-page');
const stories = document.getElementById('stories')

chestButton.addEventListener('click', () => {
  closedScroll.classList.add('show');
  chestButton.style.display = 'none';
});

closedScrollButton.addEventListener('click', () => {
  scroll.classList.add('show');
  closedScroll.classList.remove('show');
});

scrollButton.addEventListener('click', () => {
  stories.classList.add('show');
  scroll.classList.remove('show');
});

[1, 2, 3].forEach((n) => {
  const storyButton = document.getElementById(`story${n}`);
  const storyScroll = document.getElementById(`story${n}-scroll`);

  storyButton.addEventListener('click', () => {
    storyScroll.classList.add('show');
    stories.classList.remove('show');
  });
});
