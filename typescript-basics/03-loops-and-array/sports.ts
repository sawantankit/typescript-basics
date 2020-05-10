let sportsOne: string[] = ["Golf", "Swimming", "Soccer", "Badminton"];

// for(let i=0; i<sportsOne.length; i++)
// {

//     console.log(sportsOne[i]);
// } 


// Used the simplified for loops
for (let tempSport of sportsOne) {
    if(tempSport == "Golf"){
        console.log(tempSport + " << my favorite");
    }
    else {
        console.log(tempSport);
    }

}