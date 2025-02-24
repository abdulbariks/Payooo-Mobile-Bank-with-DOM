document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = document.getElementById("add-amount").value;
    const convertaddAmount = parseFloat(addAmount);
    const userPin = document.getElementById("user-pin").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertmainBalance = parseFloat(mainBalance);
    const convertedPin = parseInt(userPin);

    if (accountNumber.length === 11) {
      if (convertedPin === 1212) {
        const sum = convertmainBalance + convertaddAmount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("Invalid Pin Number");
      }
    } else {
      alert("Invalid Account Number");
    }
  });
