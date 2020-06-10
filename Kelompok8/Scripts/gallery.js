var i, expandable = document.getElementsByClassName("expandable");

len = expandable.length;
for (i = 0; i < len; i++) {
  expandable[i].addEventListener("click", function(){
    var next = this.nextElementSibling;
    var maxHeight = next.style.maxHeight;
    if (maxHeight){
      next.style.maxHeight = null;
    } 
    else 
    {
      next.style.maxHeight = next.scrollHeight + "px";
    } 
    this.classList.toggle("active");
  });
}

var imageToOpen1 = document.getElementById("image-to-open1");
var imageToOpen2 = document.getElementById("image-to-open2");
var imageToOpen3 = document.getElementById("image-to-open3");
var imageToOpen4 = document.getElementById("image-to-open4");
var imageToOpen5 = document.getElementById("image-to-open5");
var imageToOpen6 = document.getElementById("image-to-open6");
var imageToOpen7 = document.getElementById("image-to-open7");
var imageToOpen8 = document.getElementById("image-to-open8");
var modalDialogueBox = document.getElementById("modal-dialogue-box");
var modalImage = document.getElementById("modal-image");
var modalImageCaption = document.getElementById("modal-image-caption");
var closeX = document.getElementById("x-close");

imageToOpen1.onclick = function(){
  modalImage.src = this.src;
  modalImageCaption.innerHTML = this.alt;
  modalDialogueBox.style.display = "block";
}

imageToOpen2.onclick = function(){
  modalImage.src = this.src;
  modalImageCaption.innerHTML = this.alt;
  modalDialogueBox.style.display = "block";
}

imageToOpen3.onclick = function(){
  modalImage.src = this.src;
  modalImageCaption.innerHTML = this.alt;
  modalDialogueBox.style.display = "block";
}

imageToOpen4.onclick = function(){
  modalImage.src = this.src;
  modalImageCaption.innerHTML = this.alt;
  modalDialogueBox.style.display = "block";
}

imageToOpen5.onclick = function(){
  modalImage.src = this.src;
  modalImageCaption.innerHTML = this.alt;
  modalDialogueBox.style.display = "block";
}

imageToOpen6.onclick = function(){
  modalImage.src = this.src;
  modalImageCaption.innerHTML = this.alt;
  modalDialogueBox.style.display = "block";
}

imageToOpen7.onclick = function(){
  modalImage.src = this.src;
  modalImageCaption.innerHTML = this.alt;
  modalDialogueBox.style.display = "block";
}

imageToOpen8.onclick = function(){
  modalImage.src = this.src;
  modalImageCaption.innerHTML = this.alt;
  modalDialogueBox.style.display = "block";
}

closeX.onclick = function() { 
  modalDialogueBox.style.display = "none";
}