/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("show");

}


/* =========================
   LOGIN BUTTON
========================= */

function goToLogin() {

    alert("Login page will open here.");

    // Later we will change this to:
    // window.location.href = "login.html";

}


/* =========================
   FIND SAFE ROUTE
========================= */

function findSafeRoute() {

    alert(
        "Safe Route feature is ready!\n\n" +
        "The route page will be connected to the map system."
    );

    // Later:
    // window.location.href = "safe-route.html";

}


/* =========================
   EMERGENCY MODAL
========================= */

function openEmergency() {

    const modal =
        document.getElementById("emergencyModal");

    modal.classList.add("show");

}


function closeEmergency() {

    const modal =
        document.getElementById("emergencyModal");

    modal.classList.remove("show");

}


/* =========================
   ACTIVATE SOS
========================= */

function activateSOS() {

    closeEmergency();

    alert(
        "🚨 SOS ACTIVATED\n\n" +
        "Your emergency contacts would be notified here."
    );

}


/* =========================
   REPORT UNSAFE AREA
========================= */

function reportIssue() {

    alert(
        "Report Unsafe Area\n\n" +
        "The report form will open here."
    );

}


/* =========================
   CLOSE MODAL WHEN CLICKING
   OUTSIDE
========================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("emergencyModal");

    if (event.target === modal) {

        closeEmergency();

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const navLinks =
    document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

        document
            .getElementById("navMenu")
            .classList.remove("show");

    });

});
/* =========================
   LOGIN MODAL
========================= */

function openLogin() {
    const modal = document.getElementById("loginModal");

    if (modal) {
        modal.classList.add("show");
    }
}

function closeLogin() {
    const modal = document.getElementById("loginModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


/* =========================
   LOGIN USER
========================= */

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {

        alert("Login successful!");

        closeLogin();

    }
}


/* =========================
   REGISTRATION MODAL
========================= */

function openRegister() {
    closeLogin();

    const modal = document.getElementById("registerModal");

    if (modal) {
        modal.classList.add("show");
    }
}

function closeRegister() {
    const modal = document.getElementById("registerModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


/* =========================
   REGISTER USER
========================= */

function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const phone = document.getElementById("registerPhone").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }

    if (name && email && phone && password) {

        alert("Registration successful!");

        closeRegister();

        openLogin();
    }
}


/* =========================
   BACK TO LOGIN
========================= */

function backToLogin() {

    closeRegister();

    openLogin();
}