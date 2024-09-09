function SayWelcome() {
    alert("Welcome, " + userName + "!");
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const userName = getQueryParam("name");
if (userName) {
    const welcomeMessage = `<br><button onclick="SayWelcome()"><h1>${userName}!</h1></button><br><hr>`;
    document.body.insertAdjacentHTML('beforeend', welcomeMessage);
}

const titleTag = document.title;
window.addEventListener("blur", function () {
    document.title = "بیا اینجا 😐";
});
window.addEventListener("focus", function () {
    document.title = titleTag;
});