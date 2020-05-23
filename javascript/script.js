window.onload = init;

function init()
{
    console.log("test");

    document.getElementById('design').addEventListener(('click'), () => 
    {
        console.log("design");
        document.getElementById('bg').style.left = '-500px';
    });
}