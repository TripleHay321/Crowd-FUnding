function copyToClipboard() {
  const text = "https://funddao.netlify.app"
  const status = document.getElementById("copyStatus");

  navigator.clipboard.writeText(text)
    .then(() => {
      status.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          ✅ Address copied to clipboard!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    })
    .catch(() => {
      status.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          ❌ Failed to copy address. Please try again.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    });
}


//Pay Page 
function handleSelection() {
  const input = document.getElementById("amountInput");
  const feedback = document.getElementById("flash");
  const selector = document.getElementById("optionSelector");
  const displayArea = document.getElementById("displayArea");
  const proceedBtn = document.getElementById("paymentStatus");

  const value = parseFloat(input.value);
  const selectedValue = selector.value;
  const minAmount = 10;

  // Clear previous feedback and display
  feedback.innerHTML = "";
  displayArea.innerHTML = "";

  // Validate amount
  if (isNaN(value)) {
    feedback.innerHTML = '<span style="color: red;">Please enter an amount.</span>';
    return;
  }

  if (value < minAmount) {
    feedback.innerHTML = `<span style="color: red;">Amount too low. Minimum is ${minAmount}.</span>`;
    return;
  }

  // Amount is valid
  feedback.innerHTML = `<span style="color: green;">Amount accepted: ${value}</span>`;

  // Define content for each payment option
  const contentMap = {
    transfer: `
      <p><strong>Bank Name:</strong> Opay</p>
      <p><strong>Account Number:</strong> 8082994405</p>
      <p><strong>Account Name:</strong> Adeola Adekunle Amos</p>
    `,
    usdt: '<img src="./Style/img/address.jpg" alt="USDT QR Code" style="max-width:200px;"> <p style="font-size: small;">Oxcba17fc12dfba5d50f471518d2ffb74c5a63d6a3</p> <p>Network: Arbitruum One</p>',
    card: '<p>Option not available yet.</p>'
  };

  // Show payment details if a valid option is selected
  if (contentMap[selectedValue]) {
    displayArea.innerHTML = contentMap[selectedValue];
    displayArea.style.padding = "2%";
    proceedBtn.style.display = "block"; 
  } else {
    feedback.innerHTML += '<br><span style="color: red;">Please select a payment method.</span>';
  }

}

function ShowPaymentStatus() {
    const feedback = document.getElementById("flash");
    feedback.innerHTML += '<br><span style="color: red;">Payment Unsuccessful.</span>';
  }
