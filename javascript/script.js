let image = document.getElementById('img1');
let taal = document.getElementById("taal");
let titel = document.getElementById("titel");


window.onload = init;
function init()
{
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
            taal.innerHTML = "EN";
            
            nederlands = false;
        }
        else
        {
            taal.innerHTML = "NL";
            nederlands = true;
        }
        veranderTaal();
    });


    function veranderTaal()
    {
        if(nederlands)
        {
            titel.innerHTML = "WELKOM";
            titel.style.left = "167px";
        }
        else
        {
            titel.innerHTML = "WELCOME";
            titel.style.left = "89px";
        }
    }



    
}