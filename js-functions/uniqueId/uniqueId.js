window.uniqueId = (function() {
  return function(length) {
    var text = "",
      length = length || 6,
      possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i=0; i<length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };
})();