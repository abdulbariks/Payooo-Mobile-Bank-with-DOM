document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const userNumber = document.getElementById("user-number").value;
    const userPin = document.getElementById("user-pin").value;
    const convertedPin = parseInt(userPin);
    if (userNumber.length === 11) {
      if (convertedPin === 1212) {
        window.location.href = "./main.html";
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid Number ");
    }
  });
