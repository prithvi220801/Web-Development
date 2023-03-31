let carts = document.querySelectorAll('.fa-heart-o');
let products = [{

    name: 'ambur biriyani',
    tag: 'bir1',
    price: 10,
    inCart: 0
},
{
    name: 'HYDERBADI',
    tag: 'hyd-Mutton-Biryani',
    price: 10,
    inCart: 0
},
{
    name: 'kampiribiriyani',
    tag: 'kampiri',
    price: 20,
    inCart: 0
},
{
    name: 'mulghaibiriyani',
    tag: 'mulghai',
    price: 10,
    inCart: 0
},
{
    name: 'egg biriyani',
    tag: 'eggbir',
    price: 10,
    inCart: 0
},
{
    name: 'palapan',
    tag: 'palakpaneer',
    price: 10,
    inCart: 0
},
{
    name: 'panebutt',
    tag: 'paneerbutter',
    price: 10,
    inCart: 0
},
{
    name: 'paneerdopyaza',
    tag: 'paneerdo',
    price: 10,
    inCart: 0
},
{
    name: 'paneerhyder',
    tag: 'paneerhyderbadi',
    price: 10,
    inCart: 0
},
{
    name: 'matarpa',
    tag: 'matarpaneer',
    price: 10,
    inCart: 0
},
{
    name: 'chikdopyaza',
    tag: 'chicken do pyaza',
    price: 10,
    inCart: 0
},
{
    name: 'CHICKENCURRY',
    tag: 'CHICKENCURRY',
    price: 10,
    inCart: 0
},
{
    name: 'CHICKENMASALA',
    tag: 'CHICKENMASALA',
    price: 10,
    inCart: 0
},
{
    name: 'HANDICHICKEN',
    tag: 'HANDICHICKEN',
    price: 10,
    inCart: 0
},
{
    name: 'VEG-BIRIYANI',
    tag: 'VEG-BIRIYANI',
    price: 10,
    inCart: 0
},
{
    name: 'VEG-KOHLAPURI',
    tag: 'VEG-KOHLAPURI',
    price: 10,
    inCart: 0
},
{
    name: 'VEG-MASALA',
    tag: 'VEG-MASALA',
    price: 10,
    inCart: 0
},
{
    name: 'VEG-PAKORA',
    tag: 'VEG-PAKORA',
    price: 10,
    inCart: 0
},
{
    name: 'VEG-JALFREZI',
    tag: 'VEG-JALFREZI',
    price: 10,
    inCart: 0
},
{
    name: 'SPRINGROLLS',
    tag: 'SPRINGROLLS',
    price: 10,
    inCart: 0
},
{
    name: 'SCHEZWANCHICKEN',
    tag: 'SCHEZWANCHICKEN',
    price: 10,
    inCart: 0
},
{
    name: 'MOMOS',
    tag: 'MOMOS',
    price: 10,
    inCart: 0
},
{
    name: 'CHOWMEIN',
    tag: 'CHOWMEIN',
    price: 10,
    inCart: 0
},
{
    name: 'BUTTERDOSA',
    tag: 'chicken do pyaza',
    price: 10,
    inCart: 0
},
{
    name: 'MASALADOSA',
    tag: 'chicken do pyaza',
    price: 10,
    inCart: 0
},
{
    name:'SAMBHARVADA',
    tag: 'chicken do pyaza',
    price: 10,
    inCart: 0
},
{
    name: 'MYSOREBONDA',
    tag: 'chicken do pyaza',
    price: 10,
    inCart: 0
},
{
    name: 'IDLI',
    tag: 'chicken do pyaza',
    price: 10,
    inCart: 0
}
];
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])      //cart number increases
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.menu span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log("the product clicked is ", product)
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.menu span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.menu span').textContent = 1;
    }
    setItems(product);

}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {
        `   `
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));//converting js to string to send data to server
}


function totalCost(product) {
    let cartCost = 0

   
    console.log(typeof cartCost);
    if(cartCost!=null){

        cartCost=localStorage.getItem("totalCost");
        console.log("my cartCost is", cartCost);
    if (cartCost != null) {
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
      
    }
    else {
        
        localStorage.setItem("totalCost",product.price);
    }

}}
function displayCart(){
    let cartItems =localStorage.getItem("productsInCart");
    cartItems=JSON.parse(cartItems);

    let productContainer=document.querySelector(".products");
   let cartCost=localStorage.getItem('totalCost');
    console.log(cartItems);

    if( cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class="product">
              <i class="fas fa-times-circle"></i>
              <span>${item.name}</span>
            </div>

            <div class="price">
            ${item.price}.00
            </div>

            <div class="quantity">
            <i class="fas fa-arrow-alt-circle-left"></i>
        <span>${item.inCart}</span>
        <i class="fas fa-arrow-alt-circle-right"></i>
          </div>

           <div class="total">
           $${item.inCart*item.price}.00
         </div>
           
            `
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
             <h4 class="basketTotalTitle">
                Basket Total
             </h4>
             <h4 class="basketTotal">
             $${cartCost}.00
        </h4>
        `
    }
   
}
onLoadCartNumbers();
displayCart();