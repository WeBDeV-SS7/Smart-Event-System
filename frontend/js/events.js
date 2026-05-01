function registerEvent(eventId) {
  const userId = localStorage.getItem('user_id');

  // 1. 🔒 Check login
  if (!userId) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

  // 2. ❌ Prevent duplicate local registration
  if (myEvents.includes(eventId)) {
    alert('Already registered!');
    return;
  }

  // 3. 🔗 Call backend API (Django)
  fetch('http://localhost:8000/api/register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      event_id: eventId,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to register event');
      }
      return response.json();
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
