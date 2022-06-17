import navbar from "../components/navbar.js"
    import footer from "../components/footer.js"
    document.getElementById("navbar").innerHTML = navbar();
    document.getElementById("footer").innerHTML = footer();


    let userData = JSON.parse(localStorage.getItem("user"));
    //console.log(userData);


    function submitFun() {
        let user_email = document.getElementById("email").value;
        let user_password = document.getElementById("password").value;
        console.log(email, password);

        if (user_email === userData[0].email && user_password === userData[0].password) {
            alert("login SucessFull!")
            window.location.href = "index.html"
        } else {
            alert("Invalid Credential")
        }


        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

    document.getElementById("submit").addEventListener("click", submitFun)