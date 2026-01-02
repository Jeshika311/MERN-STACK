const sendBtn = document.getElementById("send-btn");
const statusMsg = document.getElementById("status");
const otpDisplay = document.getElementById("otp-display");

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

function sendOTP() {
  const otp = generateOTP();
  return new Promise((resolve, reject) => {
    statusMsg.textContent = "Sending OTP...";
    setTimeout(() => {
        otpDisplay.textContent = `Your OTP is: ${otp}`;
        resolve(otp);
    }, 2000);
  });
}

sendBtn.addEventListener("click", () => {
  otpDisplay.textContent = "";
  
  sendOTP()
    .then((otp) => {
      statusMsg.textContent = "OTP Sent Successfully";
    })
    .catch((error) => {
      statusMsg.textContent = error;
    });
});