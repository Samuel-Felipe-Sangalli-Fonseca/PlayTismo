var dragItem = document.querySelector('.dragElement');
var dropZoneSet = Array.from(document.querySelectorAll('.dropZone'));

dropZoneSet.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.appendChild(dragItem);
  });
  });