function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Buba Corelli",
            title: "Opasno",
            release_year: 2018,
            formats: {
                1: "CD",
                2: "MP3",
                3: "CDR"
            },
    }

}
}
return myMusic(001);
console.log(myFunction("002"));
module.exports = myFunction;
