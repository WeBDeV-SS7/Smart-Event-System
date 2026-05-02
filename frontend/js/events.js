console.log('loadEventsFromAPI called');
function registerEvent(eventId) {
  const userId = localStorage.getItem('user_id');

  // 🔒 Check login
  if (!userId) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  // 🔗 Call backend API
  apiRequest('/register-event/', 'POST', {
    user_id: userId,
    event_id: eventId,
  })
    .then((data) => {
      console.log('Success:', data);

      // ⚠️ Local cache only for UI (NOT database)
      let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

      if (!myEvents.includes(eventId)) {
        myEvents.push(eventId);
        localStorage.setItem('myEvents', JSON.stringify(myEvents));
      }

      alert('Event Registered Successfully! 🎉');

      // optional better UX (no full reload)
      // location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error registering event. Please try again.');
    });
}
