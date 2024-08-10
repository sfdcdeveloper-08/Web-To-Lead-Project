function handleSave() {
  debugger;
  let inputDateVal = document.querySelector(".inputDate");
  console.log("🚀 ~ handleSave ~ inputDateVal:", inputDateVal.value); // this date is in string format
  let outputDateVal = document.querySelector(".outputDate");

  let formattedDate = new Date(inputDateVal.value).toLocaleDateString("en-In");
  outputDateVal.value = formattedDate;
}
