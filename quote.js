const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://recite.onrender.com/api/v1/random/";
// const newquote = document.getElementById("newquote");
// newquote.addEventListener('click',getquote(api_url));
async function getquote(url) {
   try {
      const response = await fetch(url);
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
   
      quote.innerHTML = data.quote;
      author.innerHTML = data.author;
   } catch (error) {
      console.error("There was an error fetching the quote:", error);
   }
}

getquote(api_url);

function tweet(){
   window.open( href="https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by" 
      + author.innerHTML, "Tweet Window", "width=600, height=300");
}
