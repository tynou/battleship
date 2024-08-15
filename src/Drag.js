function drag(obj, initialE, onEnd, rotated = false) {
  function setPos(x, y) {
    obj.style.position = 'absolute';
    obj.style.left = `${x}px`;
    obj.style.top = `${y}px`;
  }

  const offsetX = 0 //initialE.pageX - obj.offsetLeft;
  const offsetY = 0 //initialE.pageY - obj.offsetTop;

  if (rotated) obj.classList.add('rotated');

  setPos(initialE.pageX - offsetX, initialE.pageY - offsetY);

  document.onmousemove = (e) => {
    setPos(e.pageX - offsetX, e.pageY - offsetY);
  }

  document.onkeydown = (e) => {
    if (e.key !== 'r') return;
    rotated = !rotated;
    obj.classList.toggle('rotated');
  }
  
  document.onmouseup = (e) => {
    onEnd(e, rotated);

    document.onmousemove = undefined;
    document.onkeydown = undefined;
    document.onmouseup = undefined;
  }
}

export default drag;