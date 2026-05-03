// ============================================================
// AUTH MODULE — EventSphere (FIXED ENDPOINTS)
// ============================================================

// 🔐 REGISTER USER (Account Creation)
// ============================================================
// AUTH MODULE — EventSphere
// ============================================================

// 🔐 REGISTER USER
async function registerUser(name, email, password) {
  try {
    const res = await apiRequest('/register/', 'POST', {
      username: email, // Django uses username by default
      password: password,
    });

    if (res.token) {
      alert('Account created! Proceeding to login.');
      window.location.href = 'login.html';
    }
  } catch (error) {
    console.error('Registration Error:', error);
    alert('Registration failed. Try a different email.');
  }
}

// 🔐 LOGIN USER
async function loginUser() {
  const loginBtn = document.getElementById('loginBtn');

  try {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    // UI Feedback
    if (loginBtn) {
      loginBtn.disabled = true;
      loginBtn.innerHTML = 'Logging in...';
    }

    const res = await apiRequest('/login/', 'POST', {
      username: email,
      password: password,
    });

    // Check for success via user_id or token
    const userId = res.user_id || res.id;
    const token = res.token || res.key;

    if (token) {
      localStorage.setItem('user_id', userId);
      localStorage.setItem('token', token);

      alert('Login successful!');
      window.location.href = 'events.html';
    } else {
      alert(res.error || 'Invalid credentials');
    }
  } catch (error) {
    console.error('Login Error:', error);
    alert('Server error. Ensure your Django server is running.');
  } finally {
    if (loginBtn) {
      loginBtn.disabled = false;
      loginBtn.innerHTML =
        '<i class="bi bi-box-arrow-in-right me-2"></i> Login';
    }
  }
}
// 🔐 LOGIN USER (Stays the same, but ensure it captures the token)
async function loginUser() {
  try {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    const res = await apiRequest('/login/', 'POST', {
      username: email,
      password: password,
    });

    console.log('Login Response:', res);

    const userId = res.user_id || res.userId || res.id;
    const token = res.token || res.key; // Django Knox/Token use 'token' or 'key'

    if (userId) {
      localStorage.setItem('user_id', userId);

      // CRITICAL: You must save the token to stay logged in
      if (token) {
        localStorage.setItem('token', token);
      }

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
