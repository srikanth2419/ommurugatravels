function pick(v){document.getElementById("vehicle").value=v;document.getElementById("book").scrollIntoView({behavior:"smooth"});}
function send(){
let t=`🚖 OMMURUGA TOUR'S & TRAVELS Booking%0AName: ${name.value}%0APhone: ${phone.value}%0APickup: ${pickup.value}%0ADestination: ${drop.value}%0ADate: ${date.value}%0AVehicle: ${vehicle.value}`;
window.open("https://wa.me/919865955189?text="+t,"_blank");
}
const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if (current >= slides.length)
        current = 0;

    slides[current].classList.add("active");

}, 4000);


function sendBooking() {

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let pickup = document.getElementById("pickup").value.trim();
    let drop = document.getElementById("drop").value.trim();
    let date = document.getElementById("date").value;
    let vehicle = document.getElementById("vehicle").value;
    let days = document.getElementById("days").value;
    let person = document.getElementById("person").value;
    // Name
    if (name === "") {
        alert("Please enter your name.");
        document.getElementById("name").focus();
        return;
    }

    // Name validation
    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only letters.");
        document.getElementById("name").focus();
        return;
    }

    // Phone
    if (phone === "") {
        alert("Please enter your mobile number.");
        document.getElementById("phone").focus();
        return;
    }

    // Indian Mobile Number
    if (!/^[6-9]\d{9}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        document.getElementById("phone").focus();
        return;
    }

    // Pickup
    if (pickup === "") {
        alert("Please enter the pickup location.");
        document.getElementById("pickup").focus();
        return;
    }

    // Destination
    if (drop === "") {
        alert("Please enter the destination.");
        document.getElementById("drop").focus();
        return;
    }

    // Journey Date
    if (date === "") {
        alert("Please select the journey date.");
        document.getElementById("date").focus();
        return;
    }

    // Prevent past dates
    let today = new Date().toISOString().split("T")[0];

    if (date < today) {
        alert("Journey date cannot be in the past.");
        document.getElementById("date").focus();
        return;
    }

    // Vehicle
    if (vehicle === "") {
        alert("Please select a vehicle.");
        document.getElementById("vehicle").focus();
        return;
    }

    if (days == "") {
        alert("Please enter no of days.");
        document.getElementById("vehicle").focus();
        return;
    }

    if (person == "") {
        alert("Please enter no of persons.");
        document.getElementById("vehicle").focus();
        return;
    }

   let message =
`🚖 OMMURUGA TOUR'S & TRAVELS

👤 Name : ${name}

📞 Mobile : ${phone}

📍 Pickup : ${pickup}

🏁 Destination : ${drop}

📅 Journey Date : ${date}

🗓️ No. of Days : ${days}

👨‍👩‍👧 No. of Persons : ${person}

🚗 Vehicle : ${vehicle}

Kindly confirm my booking.`;

    window.open(
        "https://wa.me/919865955189?text=" + encodeURIComponent(message),
        "_blank"
    );

}
function toggleMenu() {

    document.getElementById("navbar").classList.toggle("active");

    document.querySelector(".overlay").classList.toggle("active");

}
function toggleMenu_reset() {

    document.getElementById("navbar").classList.remove("active");

    document.querySelector(".overlay").classList.remove("active");

}

/* ================= GALLERY SLIDER ================= */
function slideGallery(direction) {
    const slider = document.getElementById('gallerySlider');
    const scrollAmount = 340;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
