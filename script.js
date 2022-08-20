// ============================================= making the constructor
function Digimon(Name, level, image) {

    this.Name = Name;
    this.level = level;
    this.image = image;
}

// ====================================================== Fetching the APIs data

fetch("https://digimon-api.herokuapp.com/api/digimon").then((result) => {

    console.log(result);
    let myData = result.json();
    return myData;

}).then((next) => {
    next.length = 20;
    return next;

}).then((finalArray) => {

    console.log(finalArray);
    loopingArray(finalArray);
}
)

// ================================== Puting every JSON object inside an array

function loopingArray(arr) {

    arr.map(newArr => {
        console.log(newArr.name);
        console.log(newArr.level);
        console.log(newArr.img);


        console.log(newArr);

        cardMaker(newArr);

    })

// ================================================== Fucntion to make the card to the HTML page

    function cardMaker(digimons) {

        let mainDiv = document.getElementById("test");

        let imagesDiv = document.createElement("div");
        mainDiv.appendChild(imagesDiv);
        imagesDiv.style.border = "thin solid #FF0000";
        imagesDiv.style.margin = "5px";
        imagesDiv.style.backgroundColor = "#FF0000";
        imagesDiv.style.display = "inline-block";

        let image = document.createElement("img");
        image.setAttribute("src", digimons.img);
        // image.style.width = "500";
        imagesDiv.appendChild(image);

        let p1 = document.createElement("p");
        p1.textContent = digimons.name;
        imagesDiv.appendChild(p1);


        let p2 = document.createElement("p");
        p2.textContent = digimons.level;
        imagesDiv.appendChild(p2);
    }
}


// ===================== The end =============================







