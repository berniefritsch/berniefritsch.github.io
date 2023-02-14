var detailsBlock = [
    {infoHead: "Beschreibung", infoText: "3D- Modell von Schicht 201 aus dem Jahr 2011. An der nord-westlichen Exke des Kapitols gelegen. Enthält Keramikfunde."},
    {infoHead: "Autor", infoText: "Max Mustermann, Ostia Forum Project"},
    {infoHead: "Forschungsdaten", infoText: "Neu-Berechnung mit Meshroom 1.1., 2020; 31 Fotos, georeferenziert."},
    {infoHead: "Maße", infoText: "Maße: 2,35m x 1,4m, Höhe: 89,00 N. N."},
    {infoHead: "Datierung", infoText: "hadrianisch"},
    {infoHead: "EntityID", infoText: "123456"},
    {infoHead: "Publikationsjahr", infoText: "2011"},
    {infoHead: "DOI", infoText: "10.12345/6789"},
    {infoHead: "Version", infoText: "1"},
    {infoHead: "Lizenz", infoText: "Creative Commons SA-BY-NC 4.0"},
    {infoHead: "Lokalisierung", infoText: "Irgendwo im Nirgendwo."},
    {infoHead: "Technik", infoText: "Bildhauerei"},
    {infoHead: "Material", infoText: "Marmor"},
    {infoHead: "Erhaltung", infoText: "vollständig"},
    
];
var relatedBlock = [
    { name: "Literatur", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Brunn", title: "Denkmäler griechischer und römischer Skulputur"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"},
        {autor: "H.-J. Schalles", title: "Untersuchungen zur Kulturpolitik der pergamenischen Herrscher"},
        {autor: "A. Schober", title: "Die Kunst von Pergamon"}
    ]},
    { name: "Buchseiten", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Brunn", title: "Denkmäler griechischer und römischer Skulputur"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"}
    ]},
    { name: "Reproduktion", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"}
    ]},
    { name: "Sammlungen", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"}
    ]},
    { name: "Rezeption", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Brunn", title: "Denkmäler griechischer und römischer Skulputur"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"}
    ]},
    { name: "Typen", works:[
        {autor: "W. Helbig", title: "Führer durch die öffentliche SAmmlung klassischer Alttümer"},
        {autor: "H. Brunn", title: "Denkmäler griechischer und römischer Skulputur"},
        {autor: "H. Stuart Jones", title: "The Scuptures of the Museo Capitolino"},
        {autor: "A. Schober", title: "Die Kunst von Pergamon"}
    ]}
];
function loadDetails(){
    var obinfo = document.createElement("H2");
    obinfo.innerHTML = "Objektinformationen";
    var detailsContent = document.getElementById("details-content");
    detailsContent.appendChild(obinfo);

    for (let i = 0; i < detailsBlock.length; i++) {
        var heading = document.createElement("H3");
        heading.innerHTML = detailsBlock[i].infoHead;
        var infoText = document.createElement("P");
        infoText.innerHTML = detailsBlock[i].infoText;
        detailsContent.appendChild(heading);
        detailsContent.appendChild(infoText);
    }
    var placeHolder = document.createElement("DIV");
    placeHolder.style.width = "100%";
    placeHolder.style.height = "100px";
    detailsContent.appendChild(placeHolder);
}
function loadRelated(){
    var relatedContent = document.getElementById("related-content");
    for (let i = 0; i < relatedBlock.length; i++) {
        var works = relatedBlock[i].works;

        var relatedTopicButton = document.createElement("BUTTON");
        relatedTopicButton.innerHTML = relatedBlock[i].name;
        relatedTopicButton.classList.add("contentbutton");
        
        var relatedTopicButtonNumber = document.createElement("SPAN");
        relatedTopicButtonNumber.innerHTML = works.length;
        
        var relatedTopicContent = document.createElement("DIV");
        relatedTopicContent.style.display ="none";
        relatedTopicContent.style.width = "100%";

        relatedTopicButton.appendChild(relatedTopicButtonNumber);
        relatedContent.appendChild(relatedTopicButton);
        relatedContent.appendChild(relatedTopicContent);
        //<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
        for (let j = 0; j < works.length; j++){
            var divforContent = document.createElement("DIV");
            divforContent.classList.add("divContent");
            var content = document.createElement("a");
            content.innerHTML = works[j].autor + ', ' + works[j].title;
            content.style.width = "100%";
            divforContent.appendChild(content);
            relatedTopicContent.appendChild(divforContent);
        }
    
        relatedTopicButton.addEventListener("click", function(event){
            event.target.classList.toggle("active");
            if (event.target.nextElementSibling.style.display === "inline") 
                event.target.nextElementSibling.style.display = "none";
            else 
                event.target.nextElementSibling.style.display = "inline";
        });
        
    }
}
function displayDetails(event){
    var relatedContent = document.getElementById("related-content");
    var relatedbutton = document.getElementById("relatedbutton");
    relatedbutton.classList.remove("active");
    relatedContent.style.display = "none";
    var detailsContent = document.getElementById("details-content");
    event.target.classList.add("active");
    detailsContent.style.display = "inline";
}
function displayRelated(event){
    var detailsContent = document.getElementById("details-content");
    var detailsbutton = document.getElementById("detailsbutton");
    detailsbutton.classList.remove("active");
    detailsContent.style.display = "none";
    var relatedContent = document.getElementById("related-content");
    event.target.classList.add("active");
    relatedContent.style.display = "inline";
}
function OnInit() {
    loadDetails();
    loadRelated();
    document.getElementById("detailsbutton").classList.add("active");
    var detailsContent = document.getElementById("details-content");
    detailsContent.style.display = "inline";
}
