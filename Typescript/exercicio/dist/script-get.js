"use strict";
fetch('https://chat-api-course.onrender.com/rooms')
    .then(res => res.json())
    .then(data => refreshRooms(data));
function refreshRooms(listRooms) {
    var _a;
    const modele = document.querySelector('li');
    for (const room of listRooms.data) {
        //modele
        //clone
        const clone = modele === null || modele === void 0 ? void 0 : modele.cloneNode(true);
        //ajout du clone
        (_a = document.querySelector('ul')) === null || _a === void 0 ? void 0 : _a.append(clone);
        // Customization
        clone.innerHTML = room.roomName;
    }
    modele === null || modele === void 0 ? void 0 : modele.remove();
}
