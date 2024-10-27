// Helper function to add leading zero
function padZero(value) {
    return value < 10 ? '0' + value : value;
  }
  
  // Main function to calculate the difference between two dates
  function calculateDifference() {
    const dayIn = document.getElementById('dayIn').value;
    const monthIn = document.getElementById('monthIn').value;
    const yearIn = document.getElementById('yearIn').value;
  
    // Error handling if inputs are invalid
    if (!dayIn || !monthIn || !yearIn || isNaN(dayIn) || isNaN(monthIn) || isNaN(yearIn)) {
      displayError('Please enter valid day, month, and year.');
      return;
    }
  
    const inputDate = new Date(`${yearIn}-${padZero(monthIn)}-${padZero(dayIn)}`);
    const currentDate = new Date();
  
    // If input date is invalid or in the future
    if (inputDate > currentDate) {
      displayError('The input date cannot be in the future.');
      return;
    }
  
    // Calculate the time difference in milliseconds
    let diffMs = currentDate - inputDate;
  
    const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
    const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)) % 30;
    const months = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44)) % 12;
    const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
  
    // Display the result in the corresponding fields
    document.getElementById('yearOut').textContent = years;
    document.getElementById('monthOut').textContent = months;
    document.getElementById('dayOut').textContent = days;
    document.getElementById('hourOut').textContent = hours;
    document.getElementById('minuteOut').textContent = minutes;
  
    clearError(); // Clear any previous errors
  }
  
  // Display an error message below inputs
  function displayError(message) {
    const errors = document.querySelectorAll('.error');
    errors.forEach((error) => (error.textContent = message));
  }
  
  // Clear error messages
  function clearError() {
    const errors = document.querySelectorAll('.error');
    errors.forEach((error) => (error.textContent = ''));
  }
  
  // Add click event listener to the button
  document.getElementById('calculateBtn').addEventListener('click', calculateDifference);
  