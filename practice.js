document.querySelector('#button-id').addEventListener('click', logInForom)

function logInForom() {
  const getEmailInputFieldTaxt = document.querySelector('#email-id')
  const getEmailInputField = getEmailInputFieldTaxt.value
  const getPasswordInputFieldTaxt = document.querySelector('#password-id')
  const getPasswordInputField = getPasswordInputFieldTaxt.value
  if (
    getEmailInputField === 'istiak1234@gmail.com' &&
    getPasswordInputField === 'ashik1234'
  ) {
    window.location.href = 'bank.html'
  } else {
    alert('email or password is wrong , pls give valid email id and password ')
  }
  getEmailInputFieldTaxt.value = ''
  getPasswordInputFieldTaxt.value = ''
}
