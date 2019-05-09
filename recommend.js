var rec=document.getElementById("rec");
var grade=rec.getElementsByClassName("grade");
var urls=[
    "https://sksksketch.net/original/20181225.html",
    "https://sksksketch.net/funart/20190506.html",
    "https://sksksketch.net/funart/20170728.html",
    "https://sksksketch.net/1d-1sketch/20160716.html",
    "https://sksksketch.net/1d-1sketch/20160915.html"
];
var imgs=[
    "https://sksksketch.net/images/recommends/1st.jpg",
    "https://sksksketch.net/images/recommends/2nd.jpg",
    "https://sksksketch.net/images/recommends/3rd.png",
    "https://sksksketch.net/images/recommends/4th.png",
    "https://sksksketch.net/images/recommends/5th.jpg"
];

for(var i=0;i<grade.length;i++){
    grade[i].children[0].href=urls[i];
    grade[i].children[0].children[0].src=imgs[i];
};

console.log("∠( ﾟдﾟ)／")
