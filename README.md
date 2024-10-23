Hello sir this is Kuruba saipraveen
Run the Project
1.cd frontend
2.npm install
3. npm start

Project details 

In this project E-commerce developed by react js and css

.Header
The Header component in your React project features a top bar with promotional text for free shipping on orders over 999 and a customer support contact number. The main section includes a logo displaying the "Chaperone Plants" brand, along with a navigation menu containing links to Home, Plants & Pots (styled in orange), Tools (with a dropdown), Our Services, Blog, Our Story, and FAQs. A profile icon and a cart icon displaying the cart item count (retrieved from local storage) are also included. Below the navigation is a search bar with a search icon and an input field for users to search for plants. The component uses CSS for styling and react-router-dom for navigation, while ensuring dynamic cart updates and a responsive layout.

.Product page
The Produce Page in your project will feature a grid layout showcasing a variety of plant products. Each product will display key details such as the product name, price, and image, with an option for users to add items to the cart. Additionally, the page will include a filter sidebar, allowing users to sort products based on attributes like price range or categories. The layout will be responsive, ensuring a smooth user experience across devices. The page will integrate your existing Header component, maintaining consistent navigation, cart functionality, and search options throughout the site.

.cart module
The CartModal component is a modal dialog that allows users to view details of a product and confirm adding it to their cart. It interacts with local storage to manage cart items, enhancing the shopping experience in your application.
Adding to Cart: When the user clicks the "Confirm" button:
The modal retrieves existing cart items from local storage.
It adds the current product to the cart.
It updates local storage with the new cart items.
The modal closes using the onClose function.
Displaying Product Details: The modal displays the product's image, name, description, original price, and discounted price.
.cart
The Cart Page in your project will provide users with a comprehensive overview of the items they have selected for purchase
A list displaying each item in the cart, including:
Product Image: A visual representation of the item.
Product Name: The name of the plant or product.
Price: The cost of each item.
Quantity Selector: Options to adjust the quantity of each item.
Remove Button: An option to remove the item from the cart.removed from the local storage 

.Thankyou
The Thankyou page display when user click on the vide produce on the produce page navigate to the thank page using react rouetr dom 

.Filter

in the filter page functionalities show in given figma as tease
both product and filter cart for display as column

footer
The Footer component of your project will serve as an essential section at the bottom of each page, providing users with key information and links. It will feature company information, including the "Chaperone Plants" logo, a brief description emphasizing the brand’s mission of nurturing a greener future, and contact details such as a phone number and email address. Additionally, the footer will include customer support links to FAQs, shipping information, and return policies, ensuring users can easily find assistance. Social media icons will link to platforms like Instagram and Facebook, promoting community engagement. For added functionality, a newsletter signup section can encourage users to subscribe for updates. Overall, the footer enhances the user experience by offering crucial navigation and fostering brand connection.

![image alt](https://github.com/Kurubasaipraveen/Easesmith/blob/1e6bbedbbd71dcb2ecd7d0fcabbb1cd014815118/frontend/screencapture-easesmith-mu-vercel-app-2024-10-23-07_26_41.png)
