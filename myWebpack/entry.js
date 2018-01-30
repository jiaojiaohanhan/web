let json = require("author.json");
document.querySelector("#json").innerHTML = `writer:${json.name},age:${json.age},school:${json.school}`;
