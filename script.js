function getNumber(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  =  parseInt(num1)+parseInt(num2);
    var output = document.getElementById("answer");
    output.innerHTML = "Sum= "+sum;
};
const findSum = document.querySelector(".addNum");
findSum.addEventListener("click", () => {
    getNumber()
})

