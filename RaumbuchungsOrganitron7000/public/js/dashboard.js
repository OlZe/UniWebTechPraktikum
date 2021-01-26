function createDivTileWithLink() 
{
    let tileURL = prompt("Bitte geben Sie die URL ein!");
    let title = prompt("Bitte geben Sie Ihren Titel ein!");

    if(title === "" || tileURL === "")
    {
        return;
    }
    let div = document.createElement("div");
    let li = document.createElement("a");
    li.href = tileURL;
    li.title = title;
    li.innerHTML = title;
    div.appendChild(li);
    let nav = document.getElementsByTagName("nav")[0];
    nav.appendChild(div);
}

function createNewTile()
{
    let nav = document.getElementsByTagName("nav")[0];
    let div = document.createElement("div");
    div.id = "add";
    div.textContent = "+";
    div.addEventListener("click", createDivTileWithLink);
    div.addEventListener("click", removetile)
    nav.appendChild(div);
}

function removetile()
{
    let div = document.getElementById("add");
    div.remove();
    createNewTile();
}

createNewTile();