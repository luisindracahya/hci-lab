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