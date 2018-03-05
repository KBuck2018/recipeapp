var Controller = require("../models/");
const data = require("./seeds.json");
//This clears the collection and then adds the data to the database
.remove({}).then(() =>{
    return .collection.insert(data);
}).then(() => {
    process.exit();
});