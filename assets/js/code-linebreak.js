// https://stackoverflow.com/a/29497876
// add line break opportunities in long urls and inline code (mainly python/latex).
[...document.getElementsByTagName('code')].forEach(code => {
  // skip <pre> tags and <code> that has children or the nolatex class
  if (code.parentNode.tagName === 'PRE' || code.childElementCount > 0 || code.classList.contains('nolatex')) return;
  // add line break before
  code.innerHTML = code.innerHTML.replace(/(?<!^|\.|{|\s)(\.|\(|{|\\|@)/g, '<wbr />\$1');
  // add line break after
  code.innerHTML = code.innerHTML.replace(/(,|})(?!$|}|\s)/g, '\$1<wbr />');
  // add line breaks around
  code.innerHTML = code.innerHTML.replace(/(?<!^|-|\.|\s)(_|-|=|\/)(?!$|\s)/g, '<wbr />\$1<wbr />');
});
