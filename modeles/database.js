const fs = require("fs").promises;
const path = require("path");

module.exports = class Database {
    constructor() {
        this.filepath = path.join(__dirname, "..", "database.json")
        this.data = [];
        this.readFile();
    }

    async readFile() {
        let data = await fs.readFile(this.filepath, "utf-8");
        
        data = await JSON.parse(data);
        this.data = data.data;
        return data.data;
    }

    async addData(name) {
        const data = {
            id: Math.random().toString(32).substring(2),
            name,
            isDone: false,
        }
        this.data.push(data);
        await fs.writeFile(
            this.filepath,
            JSON.stringify({
                data: this.data,
            })
        );
        return data;
    }
};