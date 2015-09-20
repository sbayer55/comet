console.log("Connecting to Mongo");

Chats = new Mongo.Collection("chats");

Chats.allow({
    insert: function(userId, message) {
        return true;
    },
    update: function(userId, message, fields, modifier) {
        return true;
    },
    remove: function(userId, message) {
        return true;
    }
});