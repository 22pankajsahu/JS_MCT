// Define the API URL
const apiUrl = "https://api.punkapi.com/v2/beers?page=1&per_page=60";

// Variables for managing state
let products = []; // Original list of products
let filteredProducts = []; // List of products after filtering
let currentPage = 1; // Current page for pagination
const productsPerPage = 10; // Number of products to display per page

// DOM elements
const searchInput = document.getElementById("search-input");
const resetButton = document.getElementById("reset-button");
const searchButton = document.getElementById("search-button");
const productList = document.getElementById("product-container");
const pagination = document.getElementById("pagination");

// DOM elements for sliders
const priceSlider = document.getElementById("price-slider");
const priceValue = document.getElementById("price-value");
const ratingsSlider = document.getElementById("ratings-slider");
const ratingsValue = document.getElementById("ratings-value");

// Initialize slider values
let selectedPrice = 1005; // Default maximum price
let selectedRatings = 4.0; // Default minimum ratings

// Event listener for price slider input
priceSlider.addEventListener("input", () => {
  selectedPrice = priceSlider.value;
  priceValue.textContent = selectedPrice;
  applyFilters();
});

// Event listener for ratings slider input
ratingsSlider.addEventListener("input", () => {
  selectedRatings = ratingsSlider.value;
  ratingsValue.textContent = selectedRatings;
  applyFilters();
});

// Function to filter products based on slider values
function applyFilters() {
  filteredProducts = products.filter((product) => {
    return (
      parseFloat(product.target_fg) <= selectedPrice &&
      parseFloat(product.abv) >= selectedRatings
    );
  });
  currentPage = 1;
  renderProducts(currentPage);
}

// Function to fetch data from the API
function fetchData() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      products = data;
      filteredProducts = data;
      currentPage = 1;
      renderProducts(currentPage);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Function to render a list of products on the current page
function renderProducts(page) {
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToRender = filteredProducts.slice(startIndex, endIndex);

  productList.innerHTML = "";

  productsToRender.forEach((product) => {
    // Create and append product elements here
    const productItem = document.createElement("div");

    const productImage = document.createElement("img");
    productImage.src = product.image_url;
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productRatings = document.createElement("h5");
    productRatings.textContent = product.abv;

    const productPrice = document.createElement("h4");
    productPrice.textContent = `$${product.target_fg}`;

    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productRatings);
    productItem.appendChild(productPrice);

    productList.appendChild(productItem);
  });

  updatePagination();
}

// Function to update pagination buttons
function updatePagination() {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.textContent = i;
    pageItem.addEventListener("click", () => {
      currentPage = i;
      renderProducts(currentPage);
    });
    pagination.appendChild(pageItem);
  }
}

// Event listener for search input
searchInput.addEventListener("input", () => { 
  const searchTerm = searchInput.value.toLowerCase();
  filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  currentPage = 1;
  renderProducts(currentPage);
});

// Event listener for reset button
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  filteredProducts = products;
  currentPage = 1;
  renderProducts(currentPage);
});

// Initial data fetch
fetchData();
