const { v4: uuidv4 } = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "raju",
        email: "raju@gmail.com"
    },
    {
        id: uuidv4(),
        username: "saju",
        email: "saju@gmail.com"
    },
];
module.exports = users;