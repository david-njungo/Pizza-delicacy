function getData() {
    var checkBox = document.getElementById("delivery");
    if (checkBox.checked == true) {
      let location = prompt("Please enter your location:", "");
      if (location == null || location == "") {
        alert("User cancelled the prompt.");
      } else {
        alert("Your order will be delivered to " + location);
        var deliveryAmount = 200;
      }
    }
    else {
      alert("You're welcome to pick up your package.Thankyou");
    }
  }