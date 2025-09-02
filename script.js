const form = document.getElementById("feedbackForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    responseMsg.textContent = "✅ Thank you, " + name + "! Your feedback has been submitted.";
    responseMsg.style.color = "green";
    form.reset();
  } else {
    responseMsg.textContent = "⚠️ Please fill in all fields.";
    responseMsg.style.color = "red";
  }
});
