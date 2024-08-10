let captchaChecked = false;
function handleSave(event) {
  debugger;
  if (captchaChecked) {
    let inputDateVal = document.querySelector(".inputDate");
    console.log("🚀 ~ handleSave ~ inputDateVal:", inputDateVal.value); // this date is in string format
    let outputDateVal = document.querySelector(".outputDate");

    let formattedDate = new Date(inputDateVal.value).toLocaleDateString(
      "en-In"
    );
    outputDateVal.value = formattedDate;
  } else {
    alert("Please check reCAPTCHA box to submit the Lead");
    event.preventDefault();
  }
}
function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchaSuccess() {
  captchaChecked = true;
}
