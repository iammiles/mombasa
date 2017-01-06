var modal = document.getElementById('modal');
var modalOpen = document.getElementById('menu-open');
var modalClose = document.getElementById('menu-close');
modalOpen.onclick = function() {
  modal.style.opacity = '1';
  modal.style.zIndex = '999';
  console.log('what do you want?');
}
modalClose.onclick = function() {
  modal.style.opacity = '0';
  modal.style.zIndex = '-999';
}