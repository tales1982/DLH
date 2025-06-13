interface RoomPOST {
  roomName: string;
}

const form = document.querySelector('#roomForm');
form?.addEventListener('submit', function (event) {
  event.preventDefault();

  const input = document.querySelector('#roomName') as HTMLInputElement;
  const roomValue = input.value.trim();

  if (!roomValue) {
    alert("Le nom de la room est requis.");
    return;
  }

  const bodyData: RoomPOST = {
    roomName: roomValue
  };

  fetch('https://chat-api-course.onrender.com/rooms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  })
    .then(res => {
      if (!res.ok) throw new Error("Erreur HTTP: " + res.status);
      return res.json();
    })
    .then(data => {
      console.log(' Room ajoutée avec succès:', data);
      alert('Salle créée avec succès !');
      input.value = ''; 
    })
    .catch(err => {
      console.error(' Erreur lors de l\'envoi de la room :', err);
      alert('Erreur lors de la création de la salle.');
    });
});
