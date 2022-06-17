function paymentFun() {
    let Fname = document.getElementsByClassName("Fname").value;
    let Lname = document.getElementsByClassName("Lname").value;
    let addressline1 = document.getElementById("addressline1").value;
    let addressline2 = document.getElementById("addressline2").value;
    let postal = document.getElementsByClassName("postal_code").value;
    let city = document.getElementsByClassName("city").value;
    let phone = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;

    if (Fname === "" || Lname === "" || addressline1 === "" || addressline2 === "" || postal === "" || city === "" || phone === "" || email === "") {
        alert("please Enter your details")
    } else {
        alert("Payment Successfull")
        window.location.href = "index.html"
    }
}

document.getElementById("payment").addEventListener("click", paymentFun)

