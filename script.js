// Funktionen für die Popups
function openPopup(id) {
    document.getElementById("popup" + id).style.display = "block";
}

function closePopup(id) {
    document.getElementById("popup" + id).style.display = "none";
}

// Eventlistener für Icons
document.getElementById("icon1").addEventListener("click", function() {
    openPopup(1);
});

document.getElementById("icon2").addEventListener("click", function() {
    openPopup(2);
});
