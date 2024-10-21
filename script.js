const words = [
    "First quote", 
    "Second quote", 
    "Third quote", 
    "Fourth quote", 
    "Fifth quote", 
    "Sixth quote", 
    "Seventh quote", 
    "Eighth quote", 
    "Ninth quote", 
    "Final quote"
];

const images = {
    "Albert Einstein": "images/einstein.jpg",
    "T.S. Elliot": "images/tselliot.jpg",
    "Emil Cioran": "images/emil.jpg",
    "Cormac McCarthy": "images/cormac.jpg",
    "Henry Hazlitt": "images/hazlitt.jpg",
    "Winston Churchill": "images/winston.jpg",
    "Unknown": "images/unknown.jpg",
    "J. R. R. Tolkien": "images/tolkien.jpg",
    "Erica Jong": "images/erica.jpg",
    "Nelson Mandela": "images/mandela.jpg"
};

const favFoods = {
    "Albert Einstein": "German roast pork",
    "T.S. Elliot": "Duck à l'orange",
    "Emil Cioran": "Unknown",
    "Cormac McCarthy": "Unknown",
    "Henry Hazlitt": "Unknown",
    "Winston Churchill": "Roast beef and Yorkshire pudding",
    "Unknown": "Unknown",
    "J. R. R. Tolkien": "Fresh mushrooms",
    "Erica Jong": "Unknown",
    "Nelson Mandela": "Samp and beans, oxtail stew, umphokoqo"
};

const authors = {
    "Albert Einstein": "https://en.wikipedia.org/wiki/Albert_Einstein",
    "T.S. Elliot": "https://en.wikipedia.org/wiki/T._S._Eliot",
    "Emil Cioran": "https://en.wikipedia.org/wiki/Emil_Cioran",
    "Cormac McCarthy": "https://en.wikipedia.org/wiki/Cormac_McCarthy",
    "Henry Hazlitt": "https://en.wikipedia.org/wiki/Henry_Hazlitt",
    "Winston Churchill": "https://en.wikipedia.org/wiki/Winston_Churchill",
    "Unknown": "https://en.wikipedia.org/wiki/Human%E2%80%93canine_bond",
    "J. R. R. Tolkien": "https://en.wikipedia.org/wiki/J._R._R._Tolkien",
    "Erica Jong": "https://en.wikipedia.org/wiki/Erica_Jong",
    "Nelson Mandela": "https://en.wikipedia.org/wiki/Nelson_Mandela"
};
function clock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(clock, 1000);
  }
 
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
let usedIndices = []; 
let currentIndex = 0; 
let quoteImage;
document.getElementById("loadData").addEventListener("click", function() {
    document.getElementById("authorLink").style.display = "block";    
    document.getElementById("quote").style.display = "block";    
    document.getElementById("data").style.display = "block";  
    document.getElementById("author").style.display = "block";
    document.querySelector("h2").style.display = "block";
    let table = document.querySelector("table");
    table.style.visibility = "visible";
    
    const button = this;
    button.disabled = true;

    setTimeout(() => { 
        let rnd;
        do {
            rnd = Math.floor(Math.random() * 10); 
        } while (usedIndices.includes(rnd)); 

        usedIndices.push(rnd);
        document.getElementById("data").innerHTML = words[currentIndex]; 
        let quote;
        let author;

        switch (rnd) {
            case 0:
                quote = "'In the middle of difficulty lies opportunity.'";
                author = "Albert Einstein";
                break;
            case 1:
                quote = "'Every moment is a fresh beginning.'";
                author = "T.S. Elliot";
                break;
            case 2:
                quote = "'What would be left of our tragedies if an insect were to present us his?'";
                author = "Emil Cioran";
                break;
            case 3:
                quote = "'You'll never know what worse luck your bad luck has saved you from.'";
                author = "Cormac McCarthy";
                break;
            case 4:
                quote = "'A problem properly stated is a problem partly solved.'";
                author = "Henry Hazlitt";
                break;
            case 5:
                quote = "'If you're going through hell, keep going.'";
                author = "Winston Churchill";
                break;
            case 6:
                quote = "'Be the person your dog thinks you are.'";
                author = "Unknown";
                break;
            case 7:
                quote = "'Not all those who wander are lost.'";
                author = "J. R. R. Tolkien";
                break;
            case 8:
                quote = "'And the trouble is, if you don’t risk anything, you risk more.'";
                author = "Erica Jong";
                break;
            case 9:
                quote = "'Resentment is like drinking poison and then hoping it to kill your enemies'";
                author = "Nelson Mandela";
                break;
        }

        
        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = "— " + author;

       
        const quoteImage = document.getElementById("quoteImage");
        quoteImage.src = images[author]; 
        quoteImage.style.display = "block";

        
        const authorLink = document.getElementById("authorLink");
        authorLink.innerHTML = "More about " + author;
        authorLink.href = authors[author];

        
        let tableBody = document.querySelector("table tbody");
        let newRow = tableBody.insertRow();  // Create a new row

        
        let authorCell = newRow.insertCell(0);
        let quoteCell = newRow.insertCell(1);
        let foodCell = newRow.insertCell(2);

        
        authorCell.innerHTML = author;
        quoteCell.innerHTML = quote;
        foodCell.innerHTML = favFoods[author];  
        
        setTimeout(() => {
            currentIndex++;
            if (usedIndices.length >= words.length) {
                button.disabled = true;
                alert("You have gone through all the main quotes! Look below for more...");
                   createBtn();
                   
                               
            } else {
                button.disabled = false; 
            }
        }, 1000);
        
    });
});

function createBtn() {
    const xtraBtn = document.createElement("button"); 
    xtraBtn.id = "xtraBtn";
    xtraBtn.innerHTML = "Click for random quotes!";
    
    xtraBtn.addEventListener("click", function() {
        document.getElementById("xtraQuote").style.display = "block"; 
        fetch("https://quotes-api-self.vercel.app/quote")
        .then(response => response.json())
        .then(data => {
            
            const quote = data.quote; 
            const author = data.author; 
            
            const extraQuoteDiv = document.getElementById("xtraQuote");
            extraQuoteDiv.innerHTML = `"${quote}" - ${author}`;
        })
        .catch(error => {
            alert("Error fetching quote! Try again later."+ error);
        });
    });

    document.body.appendChild(xtraBtn);
}