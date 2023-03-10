document.querySelector('#button-deposite').addEventListener('click', deposite)

function deposite() {
  const depositeInputField = document.getElementById('deposite-input')
  const getDeposite = document.getElementById('deposite')
  const depositeTotal = parseFloat(depositeInputField.value)
  const previousValue = parseFloat(getDeposite.innerText)
  const total = depositeTotal + previousValue
  getDeposite.innerText = total

  // total balance
  const getBalance = document.getElementById('total-blance')
  const totalPreviousvalue = getBalance.innerText
  const totalBalance = parseFloat(totalPreviousvalue)
  const getTotalBalance = depositeTotal + totalBalance
  getBalance.innerText = getTotalBalance
  depositeInputField.value = ''
}
document
  .querySelector('#withdraw-button')
   .addEventListener('click', withdrawMoney)
function withdrawMoney() {
  const withdrawInputField = document.getElementById('withdraw-input')
  const getwithdraw = document.getElementById('withdraw')
  const newwithdrawTotal = parseFloat(withdrawInputField.value)

  const withdrawPreviousValue = parseFloat(getwithdraw.innerText)
  const withdrawtotal = newwithdrawTotal + withdrawPreviousValue
  getwithdraw.innerText = withdrawtotal

  // total balance
  const getBalance = document.getElementById('total-blance')
  const totalPreviousvalue = getBalance.innerText
  const totalBalance = parseFloat(totalPreviousvalue)
  const getTotalBalance = totalBalance - newwithdrawTotal
  getBalance.innerText = getTotalBalance
  withdrawInputField.value = ''
}
