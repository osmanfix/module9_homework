const inputText = document.querySelector('.inp1');
const inputText2 = document.querySelector('.inp2');
const res = document.querySelector('.sumbit');
const resultNode = document.querySelector('.res');


res.addEventListener('click', () => {
if (!Number(inputText.value) || !Number(inputText2.value) || Number(inputText.value) < 100 || Number(inputText.value) > 300 || Number(inputText2.value) < 100 || Number(inputText2.value) > 300 ) {
  resultNode.innerHTML ="одно из чисел вне диапазона от 100 до 300";
} else {
  let cards = '';
  fetch(`https://picsum.photos/${parseInt(inputText.value)}/${parseInt(inputText2.value)}`)
  .then((response) =>{ 
    console.log('response', response);
    resultUrl = response.url;
    console.log(resultUrl)
    let cards = '';
        const cardBlock = `
    <img
        src="${resultUrl}">
    `;
    cards += cardBlock;

    resultNode.innerHTML = cards;
}) 
 .catch(() => { console.log('error') });
}
});