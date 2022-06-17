let navbar = () => {
    return `
    <div>
    <a href="index.html"><img src="/jcrew logo main.png" alt="" class="jcrew_main_logo"></a> 
        </div>

        <div id="navbar_mid_div">
            <p>New</p>
            <p><a href="products.html">Women</a></p>
            <p>Men</p>
            <p>Kids</p>
            <p>Swim</p>
            <p>Cashmere</p>
            <p>Home</p>
            <p>Stories</p>
            <p style="color: red;">Sale</p>
        </div>

        <div id="navbar_last_div">
            <input type="text" placeholder="Search J.Crew" id="search_jcrew">

            <div id="navbar_sign_div">
                <p> <a href="signin.html">Sign In</a></p>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></span>

            </div>
        </div>
    `;
}

export default navbar;