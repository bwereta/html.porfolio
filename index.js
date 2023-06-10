function functionName(){
    window.open("Contact.html");
    
    }
function functionProject(){
    window.open("Project.html");
}
function functionResume(){
    window.open("Resume.html");
}
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting via default action
    
    // Get form values
    var name = document.getElementById("myForm").elements["name"].value;
    var email = document.getElementById("myForm").elements["email"].value;
    var message = document.getElementById("myForm").elements["message"].value;
  
    // Perform form validation and other necessary checks
    
    // Send form data to the server or perform any desired action
    // You can use AJAX or fetch API to send an HTTP request to the server
    
    // Example AJAX request using jQuery:
    /*
    $.ajax({
      url: "your-server-url",
      method: "POST",
      data: {
        name: name,
        email: email,
        message: message
      },
      success: function(response) {
        // Handle success response
      },
      error: function(error) {
        // Handle error response
      }
    });
    */
    
    // Reset the form after submission, if needed
    document.getElementById("myForm").reset();
  });
  