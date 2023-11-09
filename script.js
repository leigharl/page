let menu = document.querySelector('#menu-icon');
let navi = document.querySelector('.navi');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navi.classList.toggle('open');
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;


    var formData = {
        name: name,
        email: email,
        message: message
    };

    
    fetch("your-server-side-script.php", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        
        document.getElementById("response").innerHTML = data.message;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("response").innerHTML = "An error occurred while submitting the form.";
    });
});
