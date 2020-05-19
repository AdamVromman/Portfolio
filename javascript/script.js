let image = document.getElementById('img1');
let taalCard = document.getElementById("taal");
let titel = document.getElementById("titel");


en = 
{
    "language":"EN",
    "title":"WELCOME",
    "DeventerText":"In the second year of my studies we got the change to participate in an exchange program. By that point I was already sure that I wanted to complete my internship abroad, so I was eager to get some international experiences. After a stressful first-come-first-serve selection process, me and twenty-five other students of my year started preparing for a week long trip to Deventer, The Netherlands. At the same time, twenty-five students of the Saxion University would be coming to the HOGENT University to work on the same project with the students that stayed in Ghent. The project was centered around data warehousing and would consist of one and a half day of courses and a project in smaller groups for the remainder of the week. It was really interesting to learn about and work with software and people that we normally would not come into contact with. I met lots of great people, both from Deventer and Ghent, that were great to work with and great to talk to."
};
nl = 
{
    "language":"NL",
    "title":"WELKOM",
    "DeventerText":"In het tweede jaar van mijn opleiding kregen we de kans om mee te doen met een uitwisselingsproject. Aangezien ik op dat moment al besloten had om mijn stage in het buiteland te doen, zocht ik alle internationale ervaring die ik kon vinden. Na een stressvolle 'first-come-first-serve' selectie procedure, bereide ik, en vijfentwintig andere studenten zich klaar voor een week in Deventer, Nederland. Op hetzelfde moment komen vijfentwintig studenten van de Saxion universiteit naar de HOGENT universiteit om aan hetzelfde project te werken met de studenten die achterbleven in Gent. Het project ging voornamelijk over data warehousing en zou bestaan uit één en een halve dag lessen en een groepswerk voor de rest van de week. Het was interesant om te leren over en te werken met software en mensen waar we normaalgezien niet in contact mee zouden komen. Ik heb in die week veel mensen ontmoet, van Saxion en Gent, die leuk waren om mee te werken en leuk waren om mee te praten."
};

window.onload = init;
function init()
{
    veranderTaal(nl);
    var nederlands = true;
    image.addEventListener('mouseenter', d => 
        {
            image.src = "images/groengras2.jpg";
        });
    image.addEventListener('mouseout', d =>
    {
        image.src = "images/groengras1.jpg";
    })

    
    taal.addEventListener('click', t =>
    {
        if (nederlands)
        {
            veranderTaal(en);
            nederlands = false;
            titel.style.left = "89px";
        }
        else
        {
            veranderTaal(nl);
            nederlands = true;
            titel.style.left = "167px";
        }
        
    });


    function veranderTaal(taal)
    {
        
        titel.innerHTML = taal.title;
        taalCard.innerHTML = taal.language;
        document.getElementById("deventerText").innerHTML = taal.DeventerText;
    }



    
}