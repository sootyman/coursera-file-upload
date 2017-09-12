function upload() {
  var fileselect = document.getElementById("fileselect");
  var imagefile = fileselect.value;

  var image = new SimpleImage(fileselect);

  var canvas = document.getElementById("canvas");

  image.drawTo(canvas);

}
