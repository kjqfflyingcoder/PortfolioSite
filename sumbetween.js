function myFunction(){
    var startNum = document.getElementById("startNum").value;
    var endNum = document.getElementById("endNum").value;
    if (startNum == "" || isNaN(startNum)) {
        alert("startNum must be filled in with a number.");
        return false;
    }
    if (endNum == "" || isNaN(endNum)) {
        alert("endNum must be filled in with a number.");
        return false;
    }
	var sum = 0;
    startNum = parseInt(startNum);
    endNum = parseInt(endNum);
    if (endNum <= startNum) {
        alert("endNum must be greater than startNum.");
        return false;
    }
    if (startNum <= 0) {
        alert("startNum must be greater than zero.");
        return false;
    }
  	for (var i = startNum; i <= endNum; i++){
    sum = sum + i;
    }
    document.getElementById("start").innerText = startNum;
    document.getElementById("end").innerText = endNum;
    document.getElementById("range").innerText = endNum - startNum + 1;
    document.getElementById("results").innerText = sum;
}