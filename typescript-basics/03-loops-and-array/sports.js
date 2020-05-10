var sportsOne = ["Golf", "Swimming", "Soccer", "Badminton"];
// for(let i=0; i<sportsOne.length; i++)
// {
//     console.log(sportsOne[i]);
// } 
// Used the simplified for loops
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Golf") {
        console.log(tempSport + " << my favorite");
    }
    else {
        console.log(tempSport);
    }
}
