// ============================================================
// AUTH MODULE — EventSphere (CLEAN VERSION)
// ============================================================

// 🔐 REGISTER USER
async function registerUser(name, email, password) {
  try {
    if (!name || !email || !password) {
      alert('All fields are required');
      return;
    }

    if (!email.includes('@')) {
      alert('Enter a valid email');
      return;
    }

    const res = await apiRequest('/register', 'POST', {
      name,
      email,
      password,
    });

    console.log(res);

    if (res.success || res.message) {
      alert('Registration successful!');
      window.location.href = 'login.html';
    } else {
      alert(res.error || 'Registration failed');
    }
  } catch (error) {
    console.error('Register Error:', error);
    alert('Server error. Try again later.');
  }
}

// 🔐 LOGIN USER
async function loginUser() {
  try {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    const res = await apiRequest('/login', 'POST', {
      email,
      password,
    });

    console.log(res);

    if (res.user_id || res.userId || res.id) {
      const userId = res.user_id || res.userId || res.id;

      localStorage.setItem('user_id', userId);

      alert('Login successful!');
      window.location.href = 'events.html';
    } else {
      alert(res.error || 'Invalid credentials');
    }
  } catch (error) {
    console.error('Login Error:', error);
    alert('Server error. Please try again.');
  }
}

// 🚪 LOGOUT
function logout() {
  localStorage.removeItem('user_id');
  window.location.href = 'index.html';
}

// 🔒 PROTECT PAGES
function requireLogin() {
  const user = localStorage.getItem('user_id');

  if (!user) {
    alert('Please login first');
    window.location.href = 'login.html';
  }
}
