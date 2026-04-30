function registerEvent(eventId) {
  // 🔒 Check login
  if (!localStorage.getItem('user_id')) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

  // ❌ Prevent duplicate
  if (myEvents.includes(eventId)) {
    alert('Already registered!');
    return;
  }

  // ✅ Add event
  myEvents.push(eventId);
  localStorage.setItem('myEvents', JSON.stringify(myEvents));

  alert('Event Registered!');

  // 🔄 Refresh UI
  location.reload();
}
