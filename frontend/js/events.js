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
  // Note: Using your apiRequest helper for consistency
  apiRequest('/register-event', 'POST', {
    user_id: userId,
    event_id: eventId,
  })
    .then((data) => {
      console.log('Success:', data);

      // 4. ✅ Update localStorage ONLY after API success
      myEvents.push(eventId);
      localStorage.setItem('myEvents', JSON.stringify(myEvents));

      alert('Event Registered Successfully!');

      // 5. 🔄 Refresh UI now that data is saved
      location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error registering event. Please try again.');
    });
}
