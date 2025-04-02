document.addEventListener("DOMContentLoaded", function () {
    const meetingButtons = document.querySelectorAll(".meeting-btn");
    
    meetingButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Redirecting to Meeting Link...");
        });
    });
});
