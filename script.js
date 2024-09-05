document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    document.getElementById('message').textContent = '';

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const platform = document.getElementById('platform').value;

    // Basic validation
    if (username === '' || email === '' || password === '' || platform === '') {
      document.getElementById('message').textContent =
        'Please fill out all required fields.';
      return;
    }

    // You can add more validation or handle the form submission here
    document.getElementById('message').textContent = 'Sign-up successful!';

    // Reset the form
    document.getElementById('signup-form').reset();
  });
