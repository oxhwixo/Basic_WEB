

let boxEl = document.querySelector(".box");
boxEl.addEventListener('click', function(){
	console.log('Click!');
	boxEl.classList.add('active');
	console.log(boxEl);
})

let boxEls = document.querySelectorAll(".box");
// 여러개가 검색되기 때문에 배열과 비슷한 데이터로 저장됨. 유사배열(Array-like)
boxEls.forEach(function(boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl)
})