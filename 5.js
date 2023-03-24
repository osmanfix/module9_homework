const inputText = document.querySelector('.inp1');
const inputText2 = document.querySelector('.inp2');
const res = document.querySelector('.sumbit');
const resultNode = document.querySelector('.res');


res.addEventListener('click', () => {
if ((!Number(inputText.value) || Number(inputText.value) < 1 || Number(inputText.value) > 10) && (!Number(inputText2.value) ||  Number(inputText2.value) < 1 || Number(inputText2.value) > 10 )) {
       resultNode.innerHTML ="Номер страницы и лимит вне диапазона от 1 до 10";
} else if (!Number(inputText.value) || Number(inputText.value) < 1 || Number(inputText.value) > 10) {
  resultNode.innerHTML ="Номер страницы вне диапазона от 1 до 10";
} else if( !Number(inputText2.value) || Number(inputText2.value) < 1 || Number(inputText2.value) > 10 ) {
   resultNode.innerHTML ="Лимит вне диапазона от 1 до 10";
} 
else{
  let cards = '';
  fetch(`https://picsum.photos/v2/list?page=${parseInt(inputText.value)}&limit=${parseInt(inputText2.value)}`)
   .then((response) => {
     console.log('response', response);
     const result = response.json();
     console.log('result', result);
     return result;
   })
   .then((data) => {
 let cards = '';
 data.forEach(item => {
   const cardBlock = `
     <div class="card">
       <img
         src="${item.download_url}"
         class="card-image"
       />
       <p>${item.author}</p>
     </div>
   `;
   cards = cards + cardBlock;
 });
 resultNode.innerHTML = cards;
})
.catch(() => { console.log('error') });
}
});
                    

function savePhotosToLocalStorage() {
  localStorage.setItem("last_photos", photosContainer.innerHTML);
}

function loadPhotosFromLocalStorage() {
  photosContainer.innerHTML = localStorage.getItem("last_photos");
  return  photosContainer.innerHTML.length > 0;
}