//Vlastnosti a metody
const title = "Všechno nebo nic"

console.log(title.length)
console.log(title.toUpperCase())

console.log(title.slice(0, 5))
console.log(title.slice(11, 16))


//E-maily

const emailUser = Number(prompt("Zadej svou e-mailovou adresu"))

const atIndex = console.log(emailUser.indexOf("@"))     //pozice @

console.log(emailUser.slice("jmeno"))
console.log(domena.slice("domena.cz"))


const parsedEmail = {
    userName: 'slavomir.ponuchalek',
    domain: 'yahoo.com',
  }

document.body.innerHTML += "<p>" + parsedEmail(userName) + "@" + parsedEmail(doman) + "</p>"