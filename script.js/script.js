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
  function orderPizza(sizeAmount, crustAmount, toppings) {
    this.sizeAmount = sizeAmount;
    this.crustAmount = crustAmount;
    this.toppings = toppings;
  
    var small = document.getElementById("small")
    if (small.checked == true) {
      var sizeAmount = 400;
    }
    var large = document.getElementById("large")
    if (large.checked == true) {
      var sizeAmount = 800;
    }
    var medium = document.getElementById("medium")
    if (medium.checked == true) {
      var sizeAmount = 600;
    }
    var crispy = document.getElementById("crispy")
    if (crispy.checked == true) {
      var crustAmount = 100;
    }
    var stuffed = document.getElementById("stuffed")
    if (stuffed.checked == true) {
      var crustAmount = 150;
    }
    var gluttenfree = document.getElementById("gluttenfree")
    if (gluttenfree.checked == true) {
      var crustAmount = 120;
    }
    var total = sizeAmount + crustAmount;
    document.getElementById("total").innerHTML = ("Your total charge is; Ksh " + total + ".")
  }