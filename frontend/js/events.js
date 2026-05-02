function registerEvent(eventId) {
  const userId = localStorage.getItem('user_id');

  // 1. 🔒 Check login
  if (!userId) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  // 2. 🔥 Prevent duplicate registration (frontend check)
  let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

  if (myEvents.includes(eventId)) {
    alert('Already registered for this event');
    return;
  }

  // 3. 🔗 Call backend API (Django)
  apiRequest('/register-event/', 'POST', {
    user_id: userId,
    event_id: eventId,
  })
    .then((data) => {
      console.log('Success:', data);

      // 4. ✅ Update local cache only after success
      // Note: We use the existing 'myEvents' variable, no redeclaration needed
      if (!myEvents.includes(eventId)) {
        myEvents.push(eventId);
        localStorage.setItem('myEvents', JSON.stringify(myEvents));
      }

      alert('Event Registered Successfully! 🎉');

      // 5. 🔄 Refresh UI
      // If you want better UX without a full reload, you could call your
      // render functions here instead, but reload is safest for now.
      location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error registering event. Please try again.');
    });
}
