/* const paginationNumbers = document.getElementById("paginationNumbers");
const paginatedList = document.getElementById("paginationTest");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

let paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

const appendPageNumber = (i) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = i;
  pageNumber.setAttribute("page-index", i);
  pageNumber.setAttribute("aria-label", "Page " + i);
  paginationNumbers.appendChild(pageNumber);
};
const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

window.addEventListener("load", () => {
  getPaginationNumbers();
});

Nevermind non ho idea di cosa stia facendo
 */
