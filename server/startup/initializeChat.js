Meteor.startup(function () {
    if (Chats.find().count() === 0) {
        console.log("Making some chats.")
        var chats = [
            "Yo Dawg!",
            "What's good?",
            "nm.. chillin."
        ];
        for (var i = 0; i < chats.length; i++)
            Chats.insert(chats[i]);
    }
    else {
        console.log("Chats found!");
    }
});
