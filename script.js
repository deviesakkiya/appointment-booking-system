document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get form values
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;


        // Generate Appointment ID
        const appointmentId =
            "APT-" +
            Math.floor(100000 + Math.random() * 900000);


        // Display receipt details
        document.getElementById("receiptName").textContent = name;

        document.getElementById("receiptPhone").textContent = phone;

        document.getElementById("receiptDoctor").textContent = doctor;

        document.getElementById("receiptDate").textContent = date;

        document.getElementById("receiptTime").textContent = time;

        document.getElementById("appointmentId").textContent =
            appointmentId;


        // Success message
        document.getElementById("successMessage").textContent =
            "✓ Appointment Booked Successfully!";


        // Show receipt
        const receipt = document.getElementById("receipt");

        receipt.classList.remove("show");

        // Restart animation
        void receipt.offsetWidth;

        receipt.classList.add("show");


        // Reset form
        form.reset();

    });

});


/* =========================
   PRINT APPOINTMENT RECEIPT
========================= */

function printReceipt() {

    const receipt = document.getElementById("receipt");

    // Check whether appointment exists
    if (!receipt.classList.contains("show")) {

        alert("Please book an appointment first.");

        return;
    }

    // Open browser print window
    window.print();
}