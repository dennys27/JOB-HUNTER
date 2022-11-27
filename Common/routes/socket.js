const io = require("socket.io")({
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const socketapi = {
    io:io
}

let activeUsers = []

io.on("connection", (socket) => { 
  console.log("connected.....");
    //add new user

    socket.on("new-user-add", (newUserId) => {
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({
                userId: newUserId,
                socketId:socket.id
            })
        }

        io.emit("get-users", activeUsers)
        console.log("connected users",activeUsers);
    })


  
    socket.on("disconnect", () => {  
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
        console.log("user disconected",activeUsers)  
    })
  
  
    socket.on("send-message", (data) => {
      const { receiverId } = data;
      const user = activeUsers.find((user) => user.userId === receiverId);
      console.log("Sending from socket to :", receiverId);
      console.log("Data: ", data);
      if (user) {
        io.to(user.socketId).emit("recieve-message", data);
      }
    });
})

module.exports = socketapi; 