//Basic animations for website

$(document).ready(async function () {
  carousel(carouselText, '#sentence');
});

// type writer
async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split('');
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split('');
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(''));
  }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const carouselText = [
  { text: 'Computer Science Student' },
  { text: 'Software Engineer' },
  { text: 'Problem Solver' },
  { text: 'Wolverine!!' },
];

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(4000);
    await deleteSentence(eleRef);
    await waitForMs(750);
    i++;
    if (i >= carouselList.length) {
      i = 0;
      /* await typeSentence('Problem Solver', eleRef);
      await waitForMs(2000);
      break; */
    }
  }
}