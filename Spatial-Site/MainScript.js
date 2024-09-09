alert("Hello!");

var Name = document.getElementById("name");

function SayThanks(event) {
    event.preventDefault();
    const userName = Name.value;
    window.location.href = `./RegistrationSite.html?name=${encodeURIComponent(userName)}`;
}

const titleTag = document.title;
window.addEventListener("blur", function () {
    document.title = "رفتی که 😕";
});
window.addEventListener("focus", function () {
    document.title = titleTag;
});