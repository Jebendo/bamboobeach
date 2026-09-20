document.addEventListener('DOMContentLoaded', function () {
  // Language switch setup
  const langButton = document.getElementById('lang-switch');
  let currentLang = 'en'; // Default English

  langButton.addEventListener('click', toggleLanguage);

  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ka' : 'en';
    document.body.className = currentLang; // Add 'en' or 'ka' to body

    // Update all text elements
    const textElements = document.querySelectorAll('[data-en]');
    textElements.forEach(el => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    // Update button text
    langButton.textContent = currentLang === 'en' ? 'EN / KA' : 'EN / KA'; // Same, as it's toggle

    // Optional: Re-calculate if needed (to update result text)
    calculateFee();
  }

  // Calculator logic (same as before)
  function calculateFee() {
    const resultDiv = document.getElementById('result');
    const breakdownDiv = document.getElementById('breakdown');

    // Reset
    resultDiv.style.color = '#2c5f2d';
    breakdownDiv.innerHTML = '';

    const period = parseInt(document.getElementById('period').value);
    const multiplier = period / 12;

    const apt = parseFloat(document.getElementById('apt').value) || 0;
    const commercial = parseFloat(document.getElementById('commercial').value) || 0;
    const terrace = parseFloat(document.getElementById('terrace').value) || 0;
    const support = parseFloat(document.getElementById('support').value) || 0;
    const parking = parseFloat(document.getElementById('parking').value) || 0;

    if (apt + commercial + terrace + support + parking <= 0) {
      resultDiv.innerHTML = '0.00 GEL';
      breakdownDiv.innerHTML = '<span style="color:red;" data-en="Please enter at least one positive area." data-ka="გთხოვთ, შეიყვანოთ მინიმუმ ერთი დადებითი ფართი.">Please enter at least one positive area.</span>';
      return;
    }

    const yearly = 
      (apt * 1) +
      (commercial * 1) +
      (terrace * 0.2) +
      (support * 0.2) +
      (parking * 0.2);

    const total = yearly * multiplier;

    resultDiv.innerHTML = `${total.toFixed(2)} GEL`;

    let breakdownText = `<strong data-en="Yearly breakdown:" data-ka="წლიური განაწილება:">Yearly breakdown:</strong><br>`;
    if (apt > 0) breakdownText += `<span data-en="Apartment + balcony:" data-ka="ბინა + აივანი:">Apartment + balcony:</span> ${ (apt * 1).toFixed(2) } GEL<br>`;
    if (commercial > 0) breakdownText += `<span data-en="Commercial:" data-ka="კომერციული:">Commercial:</span> ${ (commercial * 1).toFixed(2) } GEL<br>`;
    if (terrace > 0) breakdownText += `<span data-en="Terrace:" data-ka="ტერასა:">Terrace:</span> ${ (terrace * 0.2).toFixed(2) } GEL<br>`;
    if (support > 0) breakdownText += `<span data-en="Support area:" data-ka="საყრდენი ფართი:">Support area:</span> ${ (support * 0.2).toFixed(2) } GEL<br>`;
    if (parking > 0) breakdownText += `<span data-en="Parking:" data-ka="პარკინგი:">Parking:</span> ${ (parking * 0.2).toFixed(2) } GEL<br>`;
    breakdownText += `<strong data-en="Total yearly:" data-ka="სრული წლიური:">Total yearly:</strong> ${yearly.toFixed(2)} GEL<br>`;
    breakdownText += `<span data-en="Period:" data-ka="პერიოდი:">Period:</span> ${period} <span data-en="months" data-ka="თვე">months</span> → <strong data-en="Total to pay:" data-ka="სრული გადახდა:">Total to pay:</strong> ${total.toFixed(2)} GEL`;

    breakdownDiv.innerHTML = breakdownText;
  }
});