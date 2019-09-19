var south = ["SOUTH1","SOUTH2","SOUTH3","SOUTH4"];
var north = ["NORTH1","NORTH2","NORTH3"];
//var fashion = ["Fashion H","Fashion H (1)","Fashion H (2)","Fashion H (3)","Fashion H (4)","Fashion R (1)","Fashion R (2)","Fashion R (3)","Fashion P-2","Fashion P-3","Fashion P-4","Fashion P-5","Fashion P-6","Fashion P-7","Fashion P-8"];

var childDiv = "<div class='col-md-6 col-lg-4 item zoom-on-hover'>";
var a = "<a class='lightbox' href='img/dock.jpg'>";
var img = "<img class='img-fluid image' src='img/dock.jpg'>";
var span = "<span class='description'>";
var spanChild1 = "<span class='description-heading'>Spread Love";
var spanChild2 = "<span class='description-body'>";
var spanClose = "</span>";
var imgClose = "</img>";
var aClose = "</a>";
var divClose = "</div>";

$(document).ready(function(){
    console.log('ready');
    var southDiv = $("#south");
    var northDiv = $("#north");
    var fashionDiv = $("#fashion");
    for(var i=0;i<south.length;i++)
    {
        southDiv.append(childDiv+atag(south[i])+imgtag(south[i])+span+spanChild1+spanClose+spanChild2+spanClose+spanClose+aClose+divClose);
    }
    for(var i=0;i<north.length;i++)
    {
        northDiv.append(childDiv+atag(north[i])+imgtag(north[i])+span+spanChild1+spanClose+spanChild2+spanClose+spanClose+aClose+divClose);
    }
    for(var i=0;i<fashion.length;i++)
    {
        fashionDiv.append(childDiv+atag(fashion[i])+imgtag(fashion[i])+span+spanChild1+spanClose+spanChild2+spanClose+spanClose+aClose+divClose);
    }

});

function atag(imageName)
{
    return "<a class='lightbox' href='"+"img/"+imageName+".jpg'>";
}

function imgtag(imageName)
{
    return "<img class='img-fluid image' src='img/"+imageName+".jpg'>";
}
