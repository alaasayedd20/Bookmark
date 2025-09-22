var pageSiteName = document.getElementById("siteName");
var pageSiteURL = document.getElementById("siteURL");

var links = [];

if(localStorage.getItem("linksContainer") !== null){
    links = JSON.parse(localStorage.getItem("linksContainer"));
    displayLinks()

}
function addLink(){
    if(validationName() && validationURL()){
        var link = {
            name: pageSiteName.value,
            url: pageSiteURL.value,
        }
        links.push(link);
        localStorage.setItem("linksContainer",JSON.stringify(links));
        displayLinks()
    }
    else{
        document.getElementById("exampleModal").classList.remove("fade");
        document.getElementById("exampleModal").classList.add("show","d-block");
    }
}

function removeModal(){
    document.getElementById("exampleModal").classList.add("fade");
    document.getElementById("exampleModal").classList.remove("show","d-block");
}

function displayLinks(){
    var cartona = "";
    for(var i = 0; i < links.length; i++){
        cartona += `<tr>
            <td>${i+1}</td>
            <td>${links[i].name}</td>
            <td><a href="${links[i].url}" target="_blank"><button id="visitBtn" class="btn btn-success border-0"><span><i class="fa-solid fa-eye"></i></span>Visit</button></a></td>
            <td><button onclick="deleteLink(${i})" id="deleteBtn" class="btn btn-danger border-0"><span><i class="fa-solid fa-trash-can"></i></span>Delete</button></td>
            </tr>`
    }
    document.getElementById("bookmarks").innerHTML = cartona;
}

function deleteLink(index){
    links.splice(index, 1);
    localStorage.setItem("linksContainer", JSON.stringify(links))
    displayLinks();
}

function validationName(){
    var text = pageSiteName.value;
    var regex = /^[0-9a-zA-Z]{3}/
    if(regex.test(text)){
        pageSiteName.classList.remove("is-invalid");
        pageSiteName.classList.add("is-valid");
        return true;
    }
    else{
        pageSiteName.classList.remove("is-valid");
        pageSiteName.classList.add("is-invalid");
        return false
    }
}

function validationURL(){
    var text = pageSiteURL.value;
    var regex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
    if(regex.test(text)){
        pageSiteURL.classList.remove("is-invalid");
        pageSiteURL.classList.add("is-valid");
        return true;
    }
    else{
        pageSiteURL.classList.remove("is-valid");
        pageSiteURL.classList.add("is-invalid");
        return false;
    }
}
