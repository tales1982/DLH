interface ReponseRooms{
  status: number;
  data: Room[]
}
interface Room{
    id: number;
    roomName: string;
}

fetch('https://chat-api-course.onrender.com/rooms')
    .then(res=> res.json())
    .then(data => refreshRooms(data as ReponseRooms))

function refreshRooms (listRooms: ReponseRooms){
    const modele = document.querySelector('li')
    for (const room of listRooms.data) {
        //modele
        //clone
        const clone = modele?.cloneNode(true) as HTMLElement
        //ajout du clone
        document.querySelector('ul')?.append(clone)
        // Customization
        clone.innerHTML = room.roomName
    }
    modele?.remove()
}