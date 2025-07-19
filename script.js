

  function mano() {
    let name = "Student";
    
    // Convert string input to numbers
    let totalmarks = parseFloat(document.getElementById("tm1").value);
    let obtainmarks = parseFloat(document.getElementById("obt1").value);

    // Validation
    if (isNaN(totalmarks) || isNaN(obtainmarks) || totalmarks <= 0 || obtainmarks < 0 || obtainmarks > totalmarks) {
      alert("Please enter valid marks.");
      return false;
    }

    // Calculate percentage
    let result = (obtainmarks / totalmarks) * 100;
    let message = `Dear ${name}, you got ${result.toFixed(2)}% — `;

    if (result < 50) {
      message += "Fail 💔";
    } else if (result < 90) {
      message += "Pass 🎉";
    } else {
      message += "Excellent! 🏆";
    }

    // Display result on same screen
    document.getElementById("resultDisplay").innerText = message;

    return false; // prevent form reload
  }



  