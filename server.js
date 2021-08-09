const express = require("express");
const server = express();

server.listen(3030, () => console.log(`Server ready  at 3030`));

server.use(middlewareForgetRequest);

server.get("/", (request, response) => {
    if (!request.user) {
    response.send("test");
    }
});