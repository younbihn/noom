const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Conneted to Server");
});

socket.addEventListener("message", (message) => {
    console.log("New message: ", message.data);
});

socket.addEventListener("close", () => {
    console.log("Disconneted from Server");
});

setTimeout(() => {
    socket.send("hello! from the browser");
}, 1000);