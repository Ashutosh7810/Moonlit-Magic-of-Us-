let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if ((page = currentPage - 1)) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}

// JavaScript code to dynamically add page numbers to each page
document.addEventListener("DOMContentLoaded", function() {
  var pages = document.querySelectorAll('.page');
  var pageNumber = 1;
  pages.forEach(function(page) {
    var pageNumberElement = document.createElement('div');
    pageNumberElement.textContent = pageNumber;
    pageNumberElement.style.position = 'absolute';
    pageNumberElement.style.top = '10px'; // Top position
    pageNumberElement.style.right = '10px'; // Left position
    pageNumberElement.style.background = 'rgba(0, 0, 0, 0.5)';
    pageNumberElement.style.color = '#fff';
    pageNumberElement.style.padding = '5px 10px';
    pageNumberElement.style.borderRadius = '5px';
    page.appendChild(pageNumberElement);
    pageNumber++;
  });
});
