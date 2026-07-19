const rankNames = [

    {
        name: "S-Rank│Limitless ♾️",
        minPL: 2000000000
    },

    {
        name: "A-Rank│Transcendent",
        minPL: 1200000000
    },

    {
        name: "B-Rank│Godlike",
        minPL: 700000000
    },

    {
        name: "C-Rank│Ascendant",
        minPL: 300000000
    },

    {
        name: "D-Rank│Rookie",
        minPL: 150000000
    },

    {
        name: "E-Rank│Frangible",
        minPL: 50000000
    },

    {
        name: "F-Rank│Weakling",
        minPL: 5000000
    },

    {
        name: "Newbie 🙂",
        minPL: 0
    }

];



const leaderboard = [

{
    rank: "#1",
    playerName: "ঔৣ𝖃𝕴𝕹ঔৣ",
    pl: 2800000000,
    race: "images/Human.png",
    joinDate: "2025-01-14",
    avatar: "images/jack.png"
},

{
    rank: "#2",
    playerName: "2nd",
    pl: 2048538763,
    race: "images/Saiyan.png",
    joinDate: "2025-02-10",
    avatar: "images/2nd.png"
},

{
    rank: "#3",
    playerName: "★∬Kape∬★",
    pl: 989347950,
    race: "images/Human.png",
    joinDate: "2025-03-01",
    avatar: "images/kape.png"
},

{
    rank: "#4",
    playerName: "Existinghuman",
    pl: 280242378,
    race: "images/Saiyan.png",
    joinDate: "2025-04-05",
    avatar: "images/mrnoob.png"
},

{
    rank:"#5",
    playerName:"Fifth",
    pl:0,
    race:"images/<nobody>.png",
    joinDate:"2025-05-01",
    avatar:"images/5th.png"
},

{
    rank:"#6",
    playerName:"<nobody>",
    pl:0,
    race:"images/<nobody>.png",
    joinDate:"2025-06-01",
    avatar:"images/6th.png"
},

{
    rank:"#7",
    playerName:"<nobody>",
    pl:0,
    race:"images/<nobody>.png",
    joinDate:"2025-07-01",
    avatar:"images/7th.png"
},

{
    rank:"#8",
    playerName:"<nobody>",
    pl:0,
    race:"images/<nobody>.png",
    joinDate:"2025-08-01",
    avatar:"images/8th.png"
},

{
    rank:"#9",
    playerName:"<nobody>",
    pl:0,
    race:"images/<nobody>.png",
    joinDate:"2025-09-01",
    avatar:"images/9th.png"
},

{
    rank:"#10",
    playerName:"<nobody>",
    pl:0,
    race:"images/<nobody>.png",
    joinDate:"2025-10-01",
    avatar:"images/10th.png"
}

];



function getRankName(pl){

    for(let rank of rankNames){

        if(pl >= rank.minPL){

            return rank.name;

        }

    }

    return "Newbie 🙂";

}
