$(function () {
  $("#date-picker-from").datepicker({
    dateFormat: 'dd_mm_yy'
  });

  const openCalendarButtonFrom = document.querySelector('#date-picker-from-on');
  const closeCalendarButtonFrom = document.querySelector('#date-picker-from-off');

  openCalendarButtonFrom.addEventListener('click', () => $("#date-picker-from").datepicker("show"));
  closeCalendarButtonFrom.addEventListener('click', () => $("#date-picker-from").datepicker("hide"));
});

$(function () {
  $("#date-picker-to").datepicker({
    dateFormat: 'dd_mm_yy'
  });

  const openCalendarButtonTo = document.querySelector('#date-picker-to-on');
  const closeCalendarButtonTo = document.querySelector('#date-picker-to-off');

  openCalendarButtonTo.addEventListener('click', () => $("#date-picker-to").datepicker("show"));
  closeCalendarButtonTo.addEventListener('click', () => $("#date-picker-to").datepicker("hide"));
});

$(function () {
  const gridButton = document.querySelector('.main-button--tiles');
  const rowButton = document.querySelector('.main-button--rows');
  const gridButtonItems = document.querySelectorAll('.main-button-squire');
  const rowButtonItems = document.querySelectorAll('.main-button-row-item');

  gridButton.addEventListener('click', () => {
    if (gridButton.classList.contains('main-button--active')) {
      gridButton.classList.remove('main-button--active');
      gridButtonItems.forEach(item => item.classList.remove('main-button-item-active'));

      rowButton.classList.add('main-button--active');
      rowButtonItems.forEach(item => item.classList.add('main-button-item-active'));

      document.querySelector('.main-posts').classList.add('main-posts--grid');
    }
  });

  rowButton.addEventListener('click', () => {
    if (rowButton.classList.contains('main-button--active')) {
      rowButton.classList.remove('main-button--active');
      rowButtonItems.forEach(item => item.classList.remove('main-button-item-active'));

      gridButton.classList.add('main-button--active');
      gridButtonItems.forEach(item => item.classList.add('main-button-item-active'));

      document.querySelector('.main-posts').classList.remove('main-posts--grid');
    }
  });
});
