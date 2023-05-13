function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Email sent successfully!", response);
        },
        function(error) {
            console.log("Email failed to send...", error);
        }
    );

    return false;
    
}