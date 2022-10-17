document.querySelector('button').addEventListener('click', getFetch)
document.querySelector("#title").innerText = localStorage.getItem("Books") 




// 9780140328721 9781408855652

function getFetch(){
  const isbn = document.querySelector("input").value
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data.title)

        if (!localStorage.getItem("Books")) {
          localStorage.setItem("Books", data.title)
        } else {
          let books = localStorage.getItem("Books") + "; " + data.title
          localStorage.setItem("Books", books)
        }
        
        document.querySelector("#title").innerText = localStorage.getItem("Books")       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

