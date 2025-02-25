document.getElementById("add-money").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("get-bonus").style.display = "none";
document.getElementById("pay-bill").style.display = "none";
document.getElementById("transaction-history").style.display = "block";

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("add-money", "block");
  handleToggle("cashout", "none");
  handleToggle("transfer-money", "none");
  handleToggle("get-bonus", "none");
  handleToggle("pay-bill", "none");
  handleToggle("transaction-history", "none");
});
document.getElementById("cashout-box").addEventListener("click", function () {
  handleToggle("add-money", "none");
  handleToggle("cashout", "block");
  handleToggle("transfer-money", "none");
  handleToggle("get-bonus", "none");
  handleToggle("pay-bill", "none");
  handleToggle("transaction-history", "none");
});
document.getElementById("transter-box").addEventListener("click", function () {
  handleToggle("add-money", "none");
  handleToggle("cashout", "none");
  handleToggle("transfer-money", "block");
  handleToggle("get-bonus", "none");
  handleToggle("pay-bill", "none");
  handleToggle("transaction-history", "none");
});
document.getElementById("bonus-box").addEventListener("click", function () {
  handleToggle("add-money", "none");
  handleToggle("cashout", "none");
  handleToggle("transfer-money", "none");
  handleToggle("get-bonus", "block");
  handleToggle("pay-bill", "none");
  handleToggle("transaction-history", "none");
});
document.getElementById("paybill-box").addEventListener("click", function () {
  handleToggle("add-money", "none");
  handleToggle("cashout", "none");
  handleToggle("transfer-money", "none");
  handleToggle("get-bonus", "none");
  handleToggle("pay-bill", "block");
  handleToggle("transaction-history", "none");
});
document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    handleToggle("add-money", "none");
    handleToggle("cashout", "none");
    handleToggle("transfer-money", "none");
    handleToggle("get-bonus", "none");
    handleToggle("pay-bill", "none");
    handleToggle("transaction-history", "block");
  });
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
