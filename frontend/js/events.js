function registerEvent(eventId) {
  const userId = localStorage.getItem('user_id');

  // 🔒 Check login
  if (!userId) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  // 🔗 Call backend API
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

      // ✅ OPTIONAL: update localStorage for UI
      let myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

      if (!myEvents.includes(eventId)) {
        myEvents.push(eventId);
        localStorage.setItem('myEvents', JSON.stringify(myEvents));
      }

      alert('Event Registered Successfully!');
      location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error registering event');
    });
}
