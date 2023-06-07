const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//Filter Method to find user with at least 3 languages
// var userWithThreeLanguages = users.filter(user=>user.languages.length>=3);
//     console.log(userWithThreeLanguages);

var userWithThreeLanguages =users.filter(function(user){
    return user.languages.length >=3;
})
console.log("User with Minimum Three Languages:", userWithThreeLanguages);
//Map method to find userEmail
// var userEmail = users.map(user=>user.email);
// console.log(userEmail);

var userEmail = users.map(function(user){
    return user.email;
})
console.log("User Email:" , userEmail);

//Using Reduce method to find years of experience
var totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
},4);
console.log("Total Years: ", totalYears);

var average = totalYears/users.length;
console.log(average);

//Using Reduce method to find user longest email
var longestEmail=users.reduce((longest,user)=>{
    if(user.email.length> longest.length){
        return user.email;
    }else{
        return longest;
    }
},"");

console.log("Longest email:", longestEmail);

//Using reduce method to get user name

var userName = users.reduce((name, user,index)=>{
    if(index === 0){
        return user.name;
    }else{
        return name +" ," +user.name ;
    }
},"");
console.log("Your instructors are:", userName +".");

//Using reduce method to get languages (Bonus)

var uniqueLanguages = users.reduce((languages, user) => {
    user.languages.forEach(language => {
        if (!languages.includes(language)) {
            languages.push(language);
        }
    });
    return languages;
}, []);

console.log("Unique languages:", uniqueLanguages);
