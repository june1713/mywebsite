const buttons = document.querySelectorAll('.toggleButton');
const contents = document.querySelectorAll('.boxContent');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents[index].classList.toggle('hidden');
  });
});
