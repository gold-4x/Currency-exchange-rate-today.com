let title = document.querySelector('.title');
window.onload = function(){
  if(window.navigator.onLine){
    onLine()
  }else{
    offLine()
  }
}
window.addEventListener("online", function(){
  onLine();
});
window.addEventListener("offline", function(){
  offLine();
});
function onLine(){
  title.innerHTML = 'Online';
  title.style.color = 'green';
  ul.classList.add('hide');
  reload.classList.add('hide');
}
function offLine(){
  title.innerHTML = 'Offline';
  title.style.color = '#666';
  ul.classList.remove('hide');
  reload.classList.remove('hide');
}

	
