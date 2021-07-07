function getScrollOffset(w){

    w=w || window;
if (w.pageXOffset  != null) return {x: w.pageXOffset, y:pageYOffset};
var d = w.document;
if ( document.compatMode == "CSS1Compat")
return {x:d.documentElement.scrollLeft, y:d.documentElement.scrollTop};
return {x: d.body.scrollLeft, y:d.body.scrollTop};
  }

  

  function getViewportSize(W) {

    w=w || window;
    if (w.innerWidth !=null) return {w: W.innerWidth, h:w.innerHeight};
    var d = w.document;
    if (document.compatMode == "CSS1Compat")
    return {w: d.documentElement.clientWidth,
    h:d.documentElement.clientHeight};

    return {w: d.body.clientWidth, h:d.body.clientHeight};
  }