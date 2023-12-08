(()=>{
  const $button = document.getElementById('js-modal-button'); //要修正
  const $modal = document.getElementById('js-modal'); //要修正

  const clickHandler = () => {
    $modal.classList.toggle('is-active');
  };

  $button.addEventListener('click', () => clickHandler());
})();
