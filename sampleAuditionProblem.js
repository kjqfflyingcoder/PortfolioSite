function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["getEvens"].elements.length; 
        loopCounter++) {
        if (document.forms["getEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["getEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}
function displayEvens () {
    var startNum = document.forms["getEvens"]["startNum"].value;
    var endNum = document.forms["getEvens"]["endNum"].value;
    var stepNum = document.forms["getEvens"]["stepNum"].value;
    var evens = [];
    var possible = startNum;
        for (var i = 0; i < ((endNum - startNum)/stepNum); i++) {
            if (possible % 2 == 0) {
            evens.push(possible);
	        }
            possible = possible + stepNum;
        }
}
function validateItems() {
    clearErrors();
    var startNum = document.forms["getEvens"]["startNum"].value;
    var endNum = document.forms["getEvens"]["endNum"].value;
    var stepNum = document.forms["getEvens"]["stepNum"].value;
    if (startNum == "" || isNaN(startNum)) {
        alert("startNum must be filled in with a number.");
        document.forms["getEvens"]["startNum"]
           .parentElement.className = "form-group has-error";
        document.forms["getEvens"]["startNum"].focus();
        return false;
    }
   if (endNum == "" || isNaN(endNum)) {
        alert("endNum must be filled in with a number.");
        document.forms["getEvens"]["endNum"]
           .parentElement.className = "form-group has-error";
        document.forms["getEvens"]["endNum"].focus();
        return false;
    }
    if (stepNum == "" || isNaN(stepNum)) {
        alert("stepNum must be filled in with a number.");
        document.forms["getEvens"]["stepNum"]
           .parentElement.className = "form-group has-error";
        document.forms["getEvens"]["stepNum"].focus();
        return false;
    }
       if (endNum >= startNum) {
        alert("endNum must be greater than startNum.");
        document.forms["getEvens"]["endNum"]
           .parentElement.className = "form-group has-error";
        document.forms["getEvens"]["endNum"].focus();
        return false;
    }
       if (stepNum <= 0) {
        alert("stepNum must be greater than zero.");
        document.forms["getEvens"]["stepNum"]
           .parentElement.className = "form-group has-error";
        document.forms["getEvens"]["stepNum"].focus();
        return false;
    }
    //displayEvens();
    //document.getElementById("results").style.display = "block";
    //document.getElementById("submitButton").innerText = "Recalculate";
    var evens = [];
    var possible = startNum;
    for (var i = 0; i < ((endNum - startNum)/stepNum); i++) {
        if (possible % 2 == 0) {
            evens.push(possible);
	    }
        possible = possible + stepNum;
    }
    document.getElementById("start").innerText = startNum;
    document.getElementById("end").innerText = endNum;
    document.getElementById("step").innerText = stepNum;
    document.getElementById("results").innerText = evens;
    document.getElementById("evenElements").innerText = evens.length;
    document.getElementById("loopCounter").innerText = i;
    return false;
}