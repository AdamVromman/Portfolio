let image = document.getElementById('img1');
let taalCard = document.getElementById("language");
let titel = document.getElementById("title");


en = 
{
    "language":"EN",
    "title":"WELCOME",
    "generalInformation":"General information",
    "name":"name: Adam Inhar Vromman",
    "dateOfBirth":"date of birth: 29/08/1998",
    "placeOfBirth":"place of birth: Doornik, Belgium",
    "currentPlace":"current address: Ghent, Belgium",
    "hogentTextp1":"After one year of Graphical design at LUCA, school of arts, I decided it was not for me, and stopped early. ",
    "hogentTextp2":"I took a full year to figure out what it was that I wanted. During that year, I worked in a vegetarian burger place. Doing such monotonous work every day of the week reassured me that I wanted to study and get a job in field that really interests me.",
    "hogentTextp3":"I was sure I did not wanted to go back to graphical design, so the task at hand seemed pretty simple. Figure out what it was that I wanted to study. I was looking for something opposite of graphical design. I wanted something clearly defined, with math, logic and a clear set of rules. Applied computer science not only met all those requierments, it was also accessible with possibilities to get a masters degree in promising fields.",
    "hogentTextp4":"I am now in my second to last year and I could not have made a better decision. The courses are exactly what I hoped for. I have found what I am good at and what interests me. I am eager to start my career and excited to see what it has in store for me.",
    "deventer":"Deventer exchange",
    "deventerTextp1":"In the second year of my studies we got the change to participate in an exchange program. By that point I was already sure that I wanted to complete my internship abroad, so I was eager to get some international experiences. After a stressful first-come-first-serve selection process, me and twenty-five other students of my year started preparing for a week long trip to Deventer, The Netherlands.",
    "deventerTextp2":"At the same time, twenty-five students of the Saxion University would be coming to the HOGENT University to work on the same project with the students that stayed in Ghent. The project was centered around data warehousing and would consist of one and a half day of courses and a project in smaller groups for the remainder of the week. It was really interesting to learn about and work with software and people that we normally would not come into contact with. I met lots of great people, both from Deventer and Ghent, that were great to work with and great to talk to.",
    "deventerTextp3":"This project really helped me understand what it is like to work in team from different cultures. I was also introduced to data warehousing and powerBI, which will definitly be an asset after I have graduated.",
    "internship":"internship",
    "internshipTextp1":"The last part of my studies is an internship of three months. As we get the option to do this abroad, I decided to try to get as far away as possible. I am currently looking for opportunities in Japan, but Iceland and Norway are also on my radar. I must confess that this internship is the most exciting thing happening to me in the forseeable future.",
    "internshipTextp2":"The only requierment from HOGENT university is that the internship must be 'IT-related', so that gives me a lot of possibilities. There are currently two things I would like to do: The first one is software development in java or c#. I am good at problem solving and object oriented programming, so it would be fantastic to be able to do an internship involving that. This is also the main theme of my studies.",
    "internshipTextp3":"My second option is to look for an internship in webdevelopment/web design. Although I have had web development courses since the first year, web design is not a course in my studies. I rely on what I learned in graphical design and my interests. The ideal solution would be to find an internship with mostly web development and some web design."
};
nl = 
{
    "language":"NL",
    "title":"WELKOM",
    "generalInformation":"Algemene informatie",
    "name":"naam: Adam Inhar Vromman",
    "dateOfBirth":"geboortedatum: 29/08/1998",
    "placeOfBirth":"geboorteplaats: Doornik, Belgie",
    "currentPlace":"huidige woonplaats: Gent, Belgie",
    "hogentTextp1":"Na één jaar grafisch ontwerp aan LUCA, school of arts, besloot ik dat het niet was wat ik wou doen, en stopte vroegtijdig.",
    "hogentTextp2":"Ik koos ervoor om een volledig jaar vrijaf te nemen om uit te zoeken wat ik wilde. Tijdens dat jaar werkte ik voor een vegetarisch restaurant. Elke dag van de week zo een monotoon werk doen verzekerde mij er van dat ik wilde studeren en een job wilde hebben in een branche die mij interesseert.",
    "hogentTextp3":"Ik was zeker dat ik niet terug naar grafisch ontwerp wou, dus ik had één simpele taak. Uitzoeken wat ik wel wilde doen. Ik was op zoek naar het omgekeerde van grafische ontwerp. Ik wou iets gedefinieerd met wiskunde, logica en duidelijke regels. Toegepaste informatica voldeed niet alleen aan die voorwaarden, het was ook toegangkelijk en met mogelijkheden om verder te studeren in veelbelovende richtingen.",
    "hogentTextp4":"Ik zit op dit moment in mijn voorlaatste jaar en ik kon geen betere beslissing gemaakt hebben. The vakken zijn exact wat ik gehoopt had. Ik heb gevonden waar ik goed in ben en wat mij interesseert. Ik kan niet wachten om mijn carrière te starten en te zien wat het in petto heeft voor mij.",
    "deventer":"Deventer uitwisseling",
    "deventerTextp1":"In het tweede jaar van mijn opleiding kregen we de kans om mee te doen met een uitwisselingsproject. Aangezien ik op dat moment al besloten had om mijn stage in het buiteland te doen, zocht ik alle internationale ervaring die ik kon vinden. Na een stressvolle 'first-come-first-serve' selectie procedure, bereide ik, en vijfentwintig andere studenten zich klaar voor een week in Deventer, Nederland.",
    "deventerTextp2":"Op hetzelfde moment komen vijfentwintig studenten van de Saxion universiteit naar de HOGENT universiteit om aan hetzelfde project te werken met de studenten die achterbleven in Gent. Het project ging voornamelijk over data warehousing en zou bestaan uit één en een halve dag lessen en een groepswerk voor de rest van de week. Het was interesant om te leren over en te werken met software en mensen waar we normaalgezien niet in contact mee zouden komen. Ik heb in die week veel mensen ontmoet, van Saxion en Gent, die leuk waren om mee te werken en leuk waren om mee te praten.",
    "deventerTextp3":"Dit project heeft mij bijgeleerd hoe het is om te werken met een team dat bestaat uit verschillende culturen. Ik heb ook kennis gemaakt met data warehousing and PowerBI, iets dat na mijn opleiding zeker van pas zal komen.",
    "internship":"stage",
    "internshipTextp1":"Het laatste gedeelte van mijn opleiding is een stage van drie maanden. Aangezien we de optie krijgen om dit in het buiteland te doen, heb ik besloten om te proberen zo ver mogelijk te geraken. Momenteel ben ik voor stages in Japan aan het zoeken, maar ook IJsland en Noorwegen staan op mijn radar. Ik moet zeggen dat deze stage het spannenste en leukste is dat mij in de voorzienbare toekomst te wachten staat.",
    "internshipTextp2":"De enige voorwaarde van de HOGENT is dat de stage 'IT-gerelateerd' is, wat mij dus veel mogelijkheden geeft. Op dit moment zijn er twee dingen die ik zeer graag zou doen: Het eerste is software development in java of c#. Ik ben goed in probleemoplossend denken en object georienteerd programmeren, dus zou het fantastisch zijn om daarin mijn stage te kunnen doen. Dit is ook de focus van mijn opleiding.",
    "internshipTextp3":"Mijn tweede optie is om te zoeken naar een stage in web development/web design. Alhoewel ik sinds het eerst jaar al web development krijg is web design geen onderwerp van mijn richting. Ik steun in dit geval enkel op wat ik nog onthouden heb van grafisch ontwerp en interesse. Het beste zou zijn om een stage te vinden met een web development opdracht waar een beetje web design bij komt kijken."
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

    
    taalCard.addEventListener('click', t =>
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
        
        for(var text in taal)
        {
            document.getElementById(text).innerHTML = taal[text];
        }
    }



    
}