//calculating emi from input
function calculateEmi(){
    var p = document.getElementById('amount').value;
    var r = document.getElementById('rate').value;
    var t = document.getElementById('time').value;

    const principal = parseFloat(p);
    const rate = parseFloat(r);
    const time = parseFloat(t);

    var emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    const output = document.getElementById('output');
    output.innerHTML = "EMI: " + emi;
}

const Calculate = document.querySelector('#calculate')
Calculate.addEventListener('click', () => {
    calculateEmi();
})