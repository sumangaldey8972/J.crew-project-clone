import navbar from "../components/navbar.js"
import footer from "../components/footer.js"
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let cartData = JSON.parse(localStorage.getItem("cart"));
let container = document.getElementById("cart_items");
console.log(cartData);

let length = document.getElementById("items_appen");
length.innerText = `${cartData.length} Items`



append(cartData);
function append(cartData) {



    container.innerHTML = null
    cartData.forEach((el, i) => {
        let div1 = document.createElement("div");
        div1.setAttribute("id", "items");

        let div2 = document.createElement("div");

        let div3 = document.createElement("div");
        div3.setAttribute("id", "items_details");

        let div4 = document.createElement("div");

        let div5 = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;
        div2.append(image);
        let name = document.createElement("p");
        name.innerText = el.name;

        let remove = document.createElement("p");
        remove.setAttribute("id", "remove")
        remove.innerText = "REMOVE";
        remove.addEventListener("click", () => {
            removeItem(el, i)
        })
        div3.append(name, remove);
        let price = document.createElement("p");
        price.innerText = `Rs- ${el.price}`;
        price.setAttribute("class", "price");
        div4.append(price);
        let qty = document.createElement("p");
        qty.innerText = "1 pcs";
        div5.append(qty);

        div1.append(div2, div3, div4, div5);
        container.append(div1);
    })
}



let removeItem = (el, i) => {
    cartData.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    append(cartData);
}
if (cartData.length < 0) {
    let defalutText = document.createElement("p");
    defalutText.setAttribute("id", "cart_items")
    defalutText.innerText = "Your Shopping Bag is Empty."
} else {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "checkout_item_div");

    let p1 = document.createElement("p");
    p1.innerText = "Item subtotal";

    let p2 = document.createElement("p");
    let total = cartData.reduce(function (sum, el) {
        return sum + Number(el.price.split(",").join(""));
    }, 0)
    console.log(total);
    p2.innerText = `INR ${total}.00`;

    div1.append(p1, p2);

    //checkoout item div complete here

    let div2 = document.createElement("div");
    div2.setAttribute("id", "checkout_estimated_div");

    let div3 = document.createElement("div");

    let p3 = document.createElement("p");
    p3.setAttribute("class", "estimated_text");
    p3.innerText = "Estimated Total";
    let p4 = document.createElement("p");
    p4.setAttribute("class", "shipping_text");
    p4.innerText = "Shipping charge calculated in Checkout";

    div3.append(p3, p4);

    let div4 = document.createElement("div");
    let p5 = document.createElement("p");
    p5.setAttribute("class", "inr_text")
    p5.innerText = "INR";
    let p6 = document.createElement("div");
    p6.setAttribute("class", "amount_text");
    p6.innerText = `${total}.00`;

    div4.append(p5, p6);

    div2.append(div3, div4);

    div2.append(div3, div4);

    let btn = document.createElement("button");
    btn.setAttribute("id", "checkout_btn");
    btn.innerText = "Check out now";
    btn.addEventListener("click", () =>{
        window.location.href = "payment.html"
    })

    let p7 = document.createElement("p");
    p7.setAttribute("class", "delaration_text")
    p7.innerText = "By clicking Check out now you will be redirected to the eShopWorld Checkout page where payment will be taken and your order fulfilled by eShopWorld, J.Crews preffered partner for international sales";

    let p8 = document.createElement("p");
    p8.setAttribute("class", "promo_text")
    p8.innerText = "Add a Promo";

    let input = document.createElement("input");
    // input.placeholder("Promo");
    input.setAttribute("id", "promo");

    let btn2 = document.createElement("button");
    btn2.setAttribute("id", "apply_btn");
    btn2.innerText = "APPLY"

    document.getElementById("checkout_container").append(div1, div2, btn, p7, p8, input, btn2)

}