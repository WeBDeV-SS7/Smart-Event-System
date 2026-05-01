function registerEvent(eventId) {
  const userId = localStorage.getItem('user_id');

  // 🔒 Check login
  if (!userId) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  // 🔥 Prevent duplicate registration (frontend check)
  let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

  if (myEvents.includes(eventId)) {
    alert('Already registered for this event');
    return;
  }

  // 🔗 Call backend API (clean version)
  apiRequest('/register-event', 'POST', {
    user_id: userId,
    event_id: eventId,
  })
    .then((data) => {
      console.log('Success:', data);

      // Update localStorage
      myEvents.push(eventId);
      localStorage.setItem('myEvents', JSON.stringify(myEvents));

      alert('Event Registered Successfully!');
      location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error registering event');
    });
}
