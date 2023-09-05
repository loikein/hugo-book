// https://stackoverflow.com/a/29497876
(function() {
  var i, text, code, codes = document.getElementsByTagName('code');
  for (i = 0; i < codes.length;) {
    code = codes[i];
    if (code.parentNode.tagName !== 'PRE' && code.childElementCount === 0) {
      // add line break before
      code.innerHTML = code.innerHTML.replace(/(?<!^|\.|\s)(\.|\(|{|\\|@)/g, '<wbr />\$1');
      // add line break after
      code.innerHTML = code.innerHTML.replace(/(,|})(?!$|\s)/g, '\$1<wbr />');
      // add line breaks around
      code.innerHTML = code.innerHTML.replace(/(?<!^|-|\.|\s)(_|-|=|\/)(?!$|\s)/g, '<wbr />\$1<wbr />');
    }
    i++;
  }
})();
