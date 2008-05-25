function processData(stories) {
  var parchment = "parchment.html";

  if (window.location.pathname.indexOf(".min") != -1)
    parchment = "parchment.min.html";

  for (var i = 0; i < stories.length; i++) {
    $("#content").append(
      '<div class="story"><a href="' + parchment + '?story=' +
      stories[i].path +
      '">' + stories[i].desc.entityify() + '</a></div>'
    );
  }
}

$(document).ready(function() {
  processData(stories);
});
