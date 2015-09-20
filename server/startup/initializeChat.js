Meteor.startup(function () {
    if (Chats.find().count() === 0) {
        console.log("Making some chats.")
        var chats = [
            {
                message: "Yo Dawg!",
                author: "Steven Bayer"
            },
            {
                message: "Yo Dawg!",
                author: "Jerold Anderson"
            },
            {
                message: "Yo Dawg!",
                author: "Steven Bayer"
            }
        ];
        for (var i = 0; i < chats.length; i++)
            Chats.insert(chats[i]);
    }
    else {
        console.log("Chats found!");
    }
});
