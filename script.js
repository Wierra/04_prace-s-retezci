//Vlastnosti a metody
document.body.innerHTML = "<p><h3>Cvičení: Vlastnosti a metody</h3></p>"

const title = "Všechno nebo nic"

console.log(title.length)
console.log(title.toUpperCase())

console.log(title.slice(0, 5))
console.log(title.slice(11, 16))

document.body.innerHTML += `<p>Počet znaků: ${title.length}`
document.body.innerHTML += `<p>Název filmu velkými písmeny: ${title.toUpperCase()}</p>`
document.body.innerHTML += `<p>Prvních 5 znaků: ${title.slice(0, 5)}</p>`

const pozicePoslednihoZnaku = title.length -1
const pozicePatehoZnakuOdKonce = title.length -5

document.body.innerHTML += `<p>Posledních 5 znaků: ${title.slice(pozicePatehoZnakuOdKonce, pozicePoslednihoZnaku + 1)}</p>`



//E-maily
document.body.innerHTML += "<p><h3>Cvičení: E-maily</h3></p>"

const emailUser = prompt("Zadej svou e-mailovou adresu")

const atIndex = emailUser.indexOf("@")     //pozice @

const userName = emailUser.slice(0, atIndex)
const domain = emailUser.slice(atIndex, +1)

const parsedEmail = {
    userName,
    domain,
  }

document.body.innerHTML += `<p>Uživatelské jméno: ${parsedEmail.userName}</p>
                            <p>Doména: ${parsedEmail.domain}</p>`
                            
document.body.innerHTML += `<p>Uživatelské jméno: ${parsedEmail.userName}</p>
                            <p>Doména: ${parsedEmail.domain}</p>`