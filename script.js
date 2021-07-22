let name=prompt("What is Maliks' fan name");
alert('Hello ' + name);


    let answer1 = prompt(name + " Is Malik's date of birth Sept 9th");



if(answer1.toLocaleUpperCase == "Yes"){
    alert("Is Correct");
} else if (answer1 !== "Yes"){
    alert("Wrong");
}

let answer2 = prompt(name + " Is Malik in CodeCrew")

if(answer2.toLowerCase =="Yes")
{
    alert("Correct")
}
else if (answer2 !== "Yes")
{
    alert("Wrong");
}
    
    let answer3 = prompt(name + " What was one of Malik's favorite jobs?")

    if(answer3 =="Lawn Service")
    {
    alert("WOWW!! Correct")
}
    else if (answer3 !== "Lawn Service")
    {
    alert("Wrong");
}


    let answer4 = prompt(name + " What is Malik's Favorite food")

if(answer4 ==="Honey Gold Wings")
{
    alert("Correct")
}
else if (answer4 !== "Honey Gold Wings")
{
    alert("Wrong");
}


  let answer5 = prompt(name + " What is Malik's Last Name")

if(answer5 ==="Washington")
{
    alert("Correct")
}
else if (answer5 !== "Washington")
{
    alert("Wrong");}


  let answer6 = prompt(name + " Pick a number between 1-6")

if(answer6 === 6)
{
    alert("Correct")
  
}
else if (answer6 < 6)
{
    alert("Too low");
}
for(let i = 0; i < answer6.length; i++)
{
    console.log(answe6[i])
}


// let answer7 = prompt(name + " What movies does Malik prefer the most?")


    let movies =["zombies","ghost","chucky"]
//    console.log(movies[0])
//    console.log(movies[1])
//    console.log(movies[2])
   for(let i = 0; i < movies.length; i++)
   {
    let answer7 = prompt(name + " What movies does Malik prefer the most?").toLowerCase(); 
    console.log(movies[i]);
    if(movies.indexOf(answer7) > -1){
        alert("Correct");
        break;
}
    else{
        alert("Wrong")
    }
}

   

// if(answer7 === "Zombies")
// {
//     alert("Correct")
// }
// else if (answer7 !== "Zombies")
// {
//     alert("NOOOOO");

// }

    
    

    
    

    

