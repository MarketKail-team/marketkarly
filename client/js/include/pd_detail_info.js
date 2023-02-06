// 탭 li 클릭
let tab = document.querySelectorAll('.tab');

tab.forEach(function(item){
  
  item.addEventListener('click',function(){
    tab.forEach(function(e){
      e.classList.remove('is-selected');
    });
    item.classList.add('is-selected');
  });

});