function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value
    console.log(loanAmountValue);

    interestRateValue = document.getElementById("interest-rate").value
    console.log(interestRateValue);

    monthsToPayValue = document.getElementById("months-to-pay").value
    console.log(monthsToPayValue);

    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue

    monthlyPayment = (loanAmountValue / monthsToPayValue + interest)

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
}