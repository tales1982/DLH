console.log("Let's go ");

function salutation(nom: string):string
{
    return `Bonjour aux ${nom} eleves`;
}

let nbStudents: number;
nbStudents = 10; 

const headingHTML = document.querySelector('h1');

if(headingHTML)
{
    headingHTML.innerHTML = salutation(nbStudents.toString())
}
else
    console.log("Je ne pas trouver de title h1")