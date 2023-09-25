# JS_MCT

# Beer Product Search and Pagination

This web application allows users to search for Beer products based on keywords, filter products by price and ratings, and paginate through the results. It provides a user-friendly interface for browsing and finding products.

## Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [How it Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Demo

You can check out the live demo of the Product Search and Pagination [here](https://22pankajsahu.github.io/JS_MCT/).

## Screenshots

Include relevant screenshots of the application here.

![Screenshot dv1](https://github.com/22pankajsahu/JS_MCT/assets/135128502/3b02ca5b-64dd-4685-90ad-e43a41060bf0)
![Screenshot dv2](https://github.com/22pankajsahu/JS_MCT/assets/135128502/de94eef6-4413-4620-b097-9949cf9fcf60)

![Screenshot mb1](https://github.com/22pankajsahu/JS_MCT/assets/135128502/009458f9-3a2b-42e8-8eec-2a0c0ed11d5c)
![Screenshot mb2](https://github.com/22pankajsahu/JS_MCT/assets/135128502/7627101c-5ef5-46d7-923e-e58fa6ac6529)

![Screenshot tablet](https://github.com/22pankajsahu/JS_MCT/assets/135128502/d4a1ab60-9cf9-4c3f-a801-63c0829fbaed)


## Features

- **Search**: Users can search for products by entering keywords in the search bar.
- **Filtering**: Filter products by price and ratings using sliders.
- **Pagination**: Display a limited number of products per page for easy navigation.
- **Reset**: Reset the search and filters to view all products.
- **Responsive**: The application is responsive and works on various screen sizes.

## How it Works

The Product Search and Pagination web application combines the power of HTML, CSS, and JavaScript to create a user-friendly experience for searching, filtering, and displaying products.

### HTML Structure

The structure of the application is defined in HTML. Here's a breakdown of the key elements:

- **Header**: The header section provides a title for the web application, creating a visually appealing and informative starting point for users.

- **Search Form**: The search form consists of an input field and two buttons. Users can enter keywords in the input field and click the "Search" button to find products. The "Reset" button allows users to clear their search and filter criteria.

- **Filter Sliders**: Below the search form, two sliders are provided for filtering products based on price and ratings. These sliders allow users to dynamically set their criteria for product filtering.

- **Pagination**: The pagination section is responsible for displaying page numbers and allowing users to navigate through the product list. It ensures that only a limited number of products are shown per page for better usability.

- **Product Container**: This section is an empty container where the product cards will be dynamically generated and displayed based on user searches and filters.

### CSS Styling

The application's visual appearance is customized and enhanced using CSS. Here's how CSS contributes to the user interface:

- **Layout and Styling**: CSS is used to create an attractive and responsive layout. It adds styling to elements such as the header, buttons, sliders, and product cards.

- **Media Queries**: Media queries are implemented to ensure that the layout adapts to various screen sizes. This makes the application usable on both desktop and mobile devices, enhancing its accessibility.

### JavaScript Functionality

JavaScript provides the application with dynamic functionality and interactivity. Let's dive deeper into how JavaScript works within this context:

- **Data Fetching**: JavaScript fetches data from an external API. In this case, it retrieves a list of products. The fetched data is stored in memory for subsequent operations.

- **Filtering and Pagination**: JavaScript handles the logic for filtering products based on user-defined criteria. When users interact with the search bar or filter sliders, JavaScript processes their input and updates the list of displayed products accordingly. Pagination is also managed by JavaScript, ensuring that the correct products are displayed on each page.

- **Event Listeners**: Event listeners are set up to capture user actions. For example, when users input search terms or interact with filter sliders, event listeners detect these actions and trigger corresponding functions. This creates a seamless and responsive user experience.

- **Dynamic Product Card Creation**: JavaScript dynamically generates product cards based on the filtered data. For each product, JavaScript creates HTML elements representing the product image, name, ratings, and price. These elements are then added to the product container, creating a visually consistent and informative display.

## Installation

To run the Beer Product Search and Pagination web application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/22pankajsahu/JS_MCT.git
   ```

2. Open the project folder in your code editor.

3. Open the `index.html` file in a web browser.

## Usage

1. Open the web application in a web browser.

2. Use the search bar to enter keywords and search for products.

3. Use the filter sliders to refine your search by price and ratings.

4. Navigate through the pages using the pagination buttons.

5. Click the "Reset" button to clear the search and filters and view all products.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository to your own GitHub account.

2. Create a new branch for your feature:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push your changes to your forked repository:

   ```bash
   git push origin feature/new-feature
   ```

5. Open a pull request to the original repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- Name: [PANKAJ SAHU](https://linkedin.com/in/22pankajsahu-)
- Email: [22pankajsahu@gmail.com](mailto:22pankajsahu@gmail.com)
- GitHub: [22pankajsahu](https://github.com/22pankajsahu)

