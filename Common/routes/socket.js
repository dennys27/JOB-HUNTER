const io = require("socket.io")({
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const socketapi = {
    io:io
}

io.on("connection", (socket) => { 
    io.emit("like", "someone is here") 
    socket.on("disconnect", () => {
        console.log("disconnected");
    })
})

module.exports = socketapi; 