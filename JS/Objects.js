const InstaProfile = {
    userName : "ShradhaKhapra",
    isfollowing : true,
    posts : 195,
    followers:560000,
    following: 4,
    bio:"Entreprenuer, Ex-Microsoft, DRDO,",
};
console.log(InstaProfile);
console.log(InstaProfile["followers"]);
console.log(typeof InstaProfile["followers"]);
InstaProfile["followers"] = 780000;
console.log(InstaProfile["followers"]);
InstaProfile.following = 190;
console.log(InstaProfile.following);
console.log(typeof InstaProfile["following"]);

