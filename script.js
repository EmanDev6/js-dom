function getperc() {

    let name = prompt(`enter your name`)
    let totalmarks = document.getElementById("totalmarks").value ;
    let obtainedmarks = document.getElementById("obtainedmarks").value ;

    let percentage = (obtainedmarks/totalmarks)*100

    alert("your percentage is:" + percentage)
    document.querySelector("#res").innerHTML = (`Dear ${name} your percentage is ${percentage} % `) 
    console.log("your percentage is:" + percentage)
    
}