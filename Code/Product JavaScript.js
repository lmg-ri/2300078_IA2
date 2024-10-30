// Array of product objects
const products = [
  {
    id: 0,
    category: "La Liga",
    name: "Real Madrid 24/25 Home Jersey",
    description: "Real Madrid's home kit is inspired by the traditional 'chulapo' outfits worn during Madrid's San Isidro Fiesta. The jersey features a houndstooth pattern for added style and includes ventilating HEAT.RDY technology and a heat-applied club badge, designed for performance on the pitch. Made from 100% recycled materials.",
    price: 26000.00,
    image: ["RMHK1.jpeg", "RMHK2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 1,
    category: "La Liga",
    name: "Barcelona 24/25 Home Jersey",
    description: "Nike Dri-FIT technology,High-stretch, quick-drying fabric,100% recycled polyester,Colour: Blue and scarlet.",
    price: 20000.00,
    image: ["BH1.jpeg", "BH2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 2,
    category: "La Liga",
    name: "Real Madrid 24/25 Away Jersey",
    description: "The adidas Real Madrid away jersey celebrates a new football generation with a vibrant orange base and an abstract, star-inspired design. Metallic blue details, including a heat-applied club badge, add contrast. Performance-enhancing HEAT.RDY technology ensures optimal play. Made from 100% recycled materials, the jersey reduces waste and the use of finite resources, lowering its environmental impact.",
    price: 26000.00,
    image: ["RMAWK1.jpeg", "RMAWK2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 3,
    category: "La Liga",
    name: "Barcelona 24/25 Away Jersey",
    description: "Ambilight patch on the left sleeve,Nike Dri-FIT technology,High-stretch, quick-drying fabric,100% recycled polyester,Colour: Lime ",
    price: 20000.00,
    image: ["BAW1.jpeg", "BAW2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 4,
    category: "EPL",
    name: "Manchester City 24/25 Home Jersey",
    description: "The Manchester City 2024/25 Home jersey is inspired by the city's 0161 area code, symbolizing Mancunian pride. The code is featured inside the neckline and in a patterned knit on the neckline and cuffs. The jersey includes the OKX print on the left sleeve, the Manchester City crest, and the PUMA Cat logo embroidered on the chest. Designed for fans, it combines the match-day look with a comfortable, casual fit, ideal for everyday wear. 'If it’s Sky Blue, it’s 0161' reflects the spirit of Manchester.",
    price: 14000.00,
    image: ["MCH1.jpeg", "MCH2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 5,
    category: "EPL",
    name: "Liverpool 24/25 Home Jersey",
    description: "The Liverpool FC Men's 2024/25 Home Jersey features a Chrome Yellow pattern, offering a modern take on the iconic 1984 Home Shirt, a season when the club became European Champions for the fourth time and the first English team to win a Treble. Part of the Stadium collection, the jersey combines design details with sweat-wicking Nike Dri-FIT technology to keep fans dry and comfortable. Each jersey showcases a unique section of a YNWA-inspired abstract print, paying tribute to the legendary 1984 shirt.",
    price: 14000.00,
    image: ["LHK1.jpeg", "LHK2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },

{
    id: 6,
    category: "EPL",
    name: "Manchester City 24/25 Definitely City Jersey",
    description: "Marking 30 years of <em>Definitely Maybe</em>, the Manchester City Fourth Kit is co-designed by Noel Gallagher, inspired by the iconic album cover. Featuring a retro collar, regular fit, and short sleeves, the kit has a vintage feel. It includes the PUMA Cat logo, Manchester City crest, and a unique 'Definitely City' inscription in Gallagher's handwriting on the back of the neck. Engineered with dryCELL sweat-control technology, the jersey ensures comfort while celebrating both music and football.",
    price: 14000.00,
    image: ["MCAW1.jpeg", "MCAW2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 7,
    category: "EPL",
    name: "Liverpool 24/25 Away Jersey",
    description: "The Liverpool FC Men's 2024/25 Away Jersey features an authentic design with lightweight, quick-drying fabric and advanced Dri-FIT ADV technology for moisture control. Tested by athletes, the jersey includes open-hole fabric in high-heat zones to keep players and fans cool during intense moments. Designed for optimal breathability, the jersey offers state-of-the-art performance for both on-pitch and casual wear.",
    price: 14000.00,
    image: ["LAW1.jpeg", "LAW2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 8,
    category: "NBA",
    name: "Los Angeles Lakers Jersey",
    description: "Match your favorite Los Angeles Lakers player this season with this LeBron James Fast Break Statement Edition Replica Player jersey from Fanatics. The detailed graphics give you a game-ready aesthetic while the lightweight feel and tailored fit ensure a comfortable game day experience. With multiple fabric technologies, this Statement jersey is a must-have for any dedicated Los Angeles Lakers supporter.",
    price: 13000.00,
    image: ["LL1.jpeg", "LL2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 9,
    category: "NBA",
    name: "Chicago Bulls Jersey",
    description: "The Chicago Bulls Icon Swingman Custom Jersey is inspired by Nike's Authentic jersey, featuring classic trims, Chicago Bulls graphics, and Dri-FIT technology for comfort. Fans can personalize the jersey by adding their preferred name or text. However, not all customization requests will be accepted, as Fanatics reserves the right to reject orders with offensive or inappropriate messages. Ideal for showing fandom at Bulls games, this jersey combines style and personalization options.",
    price: 15000.00,
    image: ["CB1.jpeg", "../Assets/CB2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 10,
    category: "NBA",
    name: "Boston Celtics Jersey",
    description: "Capture your team's distinct identity in an innovative design with this Jayson Tatum Boston Celtics Swingman Statement Edition Jersey from Jordan Brand. It features classic trims and integrated Dri-FIT technology for added appeal and breathability. Plus, bold Jayson Tatum graphics complete this striking jersey for a piece of gear that shows your fandom is on the cutting edge.",
    price: 13000.00,
    image: ["BCF.jpg", "BCB.jpg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 11,
    category: "NBA",
    name: "Golden State Warriors Jersey",
    description: "Attain the look of your favourite Golden State Warriors player this season with this Stephen Curry Fast Break Replica Icon Edition jersey from Fanatics. The detailed graphics give you a game-ready aesthetic while the lightweight feel and tailored fit ensure a comfortable game day experience. This jersey is a must-have for any dedicated Golden State Warriors supporter.",
    price: 13000.00,
    image: ["GWF.jpg", "GWB.jpg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 12,
    category: "NFL",
    name: "Cincinatti Bengals Jersey",
    description: "Rep the on-field look of your favorite Cincinnati Bengals player with this Joe Burrow Game jersey from Nike. Its heat-sealed name, numbers and team details provide a kickoff-ready aesthetic while also offering a comfortable, lightweight feel. Designed for everyday movement, this jersey has a versatile tailored fit and features mesh side panels for added ventilation as you celebrate every big play by the Cincinnati Bengals this season.",
    price: 20000.00,
    image: ["B1.jpeg", "B2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 13,
    category: "NFL",
    name: "Baltimore Ravens Jersey",
    description: "Represent your favourite team and player by grabbing this 2023 NFL Draft First Round Pick Game Jersey from Nike. Complete with the Baltimore Ravens trademark colours and graphics you love, this jersey is the best way to show support for the Baltimore Ravens for seasons to come!",
    price: 20000.00,
    image: ["BRD.jpg", "BRB.jpg"],
    sizes: ["S", "M", "L", "XL"]
  },
{
    id: 14,
    category: "NFL",
    name: "Philadelphia Eagles Jersey",
    description: "Show everyone you're a real Philadelphia Eagles fan with this Jalen Hurts Game Player Jersey from Nike. This jersey is a callback to the 1985-95 era when Randall Cunningham helped to redefine the Philly offense. With mesh side panels to keep you cool and the NFL's signature satin woven jock tag, this blast from the past is the perfect way to bring a piece of Philadelphia Eagles history to every game day.",
    price: 20000.00,
    image: ["PEF.jpg", "PEB.jpg"],
    sizes: ["S", "M", "L", "XL"]
  },

{
    id: 15,
    category: "NFL",
    name: "Kanas City Chiefs Jersey",
    description: "Rep the on-field look of your favorite Kansas City Chiefs player with this Patrick Mahomes Game jersey from Nike. Its heat-sealed name, numbers and team details provide a kickoff-ready aesthetic while also offering a comfortable, lightweight feel. Designed for everyday movement, this jersey has a versatile tailored fit and features mesh side panels for added ventilation as you celebrate every big play by the Kansas City Chiefs this season.",
    price: 20000.00,
    image: ["C1.jpeg", "C2.jpeg"],
    sizes: ["S", "M", "L", "XL"]
  },
];

 // Save the initial product list to localStorage
    function saveProductsToLocalStorage() {
        localStorage.setItem('AllProducts', JSON.stringify(products));
    }

    // Load products from localStorage
    function loadProductsFromLocalStorage() {
        const storedProducts = localStorage.getItem('AllProducts');
        if (storedProducts) {
            return JSON.parse(storedProducts);
        }
        return products; // Fallback to default products if none are stored
    }

function displayProducts() {
    // Clear existing content in each category container
    document.getElementById("la-liga-products").innerHTML = ""; 
    document.getElementById("epl-products").innerHTML = ""; 
    document.getElementById("nba-products").innerHTML = ""; 
    document.getElementById("nfl-products").innerHTML = ""; 

    products.forEach(product => {
        // Determine the appropriate section div by category
        let categoryDiv;
        switch (product.category) {
            case "La Liga":
                categoryDiv = document.getElementById("la-liga-products");
                break;
            case "EPL":
                categoryDiv = document.getElementById("epl-products");
                break;
            case "NBA":
                categoryDiv = document.getElementById("nba-products");
                break;
            case "NFL":
                categoryDiv = document.getElementById("nfl-products");
                break;
            default:
                console.warn(`Category "${product.category}" not recognized.`);
                return; // Skip unrecognized categories
        }

        // Create a div for each product
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Add product details
        const productName = document.createElement("h3");
        productName.textContent = product.name;
        
        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        
        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        // Add size dropdown
        const sizeLabel = document.createElement("label");
        sizeLabel.textContent = "Select Size: ";
        const sizeSelect = document.createElement("select");
        sizeSelect.id = `size-${product.id}`;
        product.sizes.forEach(size => {
            const option = document.createElement("option");
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });


        // Create an image element for each product image
        product.image.forEach(imgSrc => {
            const productImage = document.createElement("img");
            productImage.src = imgSrc;
            productDiv.appendChild(productImage);
        });

        // Append elements to the product div
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(sizeLabel);
        productDiv.appendChild(sizeSelect);

// Create and append "Add to Cart" button below product info
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.onclick = () => addToCart(product.id); 
        productDiv.appendChild(addToCartButton);

        // Append the product div to the category section
        categoryDiv.appendChild(productDiv);
    });
}

const TAX_RATE = 0.15; 
const DISCOUNT_RATE = 0.1; 

// Add to Cart Function 
function addToCart(productId) {
    // Find the product by ID
    const product = products.find(p => p.id === productId);
    if (!product) return;

// Get the selected size
    const selectedSize = document.getElementById(`size-${productId}`).value;

// Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
   // Check if the product with the selected size is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === productId && item.size === selectedSize);
    if (existingProductIndex !== -1) {
        // If it exists, increase the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If it doesn't exist, add it to the cart with the selected size
        cart.push({ ...product, size: selectedSize, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} (Size: ${selectedSize}) has been added to your cart.`);
}

// Calculate Total Function
function calculateCartTotals() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const tax = subtotal * TAX_RATE;
    const discount = subtotal * DISCOUNT_RATE; 
    const total = subtotal + tax - discount;

    return { subtotal, tax, discount, total };
}

// Call to save initial products to localStorage
    saveProductsToLocalStorage();

// Call displayProducts to show products on page load
displayProducts();


