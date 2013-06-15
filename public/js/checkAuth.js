if(window.location.hash) {
  var hash = window.location.hash.substring(1);
  console.log(hash);
  var tokens = {};
  _(hash.split('&')).each(function(item) {
    var keyValuePair = item.split('=');
    if (keyValuePair.length === 2) {
      tokens[keyValuePair[0]] = keyValuePair[1];
    }
  });
}
