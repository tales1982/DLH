interface UserRooms {
  id: number;
  name: string;
}

type UsersArray = User[];

fetch('https://chat-api-course.onrender.com/rooms')
  .then(res => res.json())
  .then(data => afficheUtilisateurs(data))


function afficheUtilisateurs(usersList: UsersArray) {
  for (const utilisateur of usersList) {
    const modele = document.querySelector('article');

    if (!modele) {
      console.log("Je n'ai pas trouvé <article>");
      return;
    }

    const clone = modele.cloneNode(true) as HTMLElement;
    document.querySelector('section')?.append(clone);

    const h3HTML = clone.querySelector('h3');
    if (h3HTML) {
      h3HTML.innerHTML = utilisateur.name;
    }
  }
}
