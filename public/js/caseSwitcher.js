const quietbtn = document.getElementById('quiet-btn')
const loudbtn = document.getElementById('loud-btn')
const sarcbtn = document.getElementById('sarc-btn')

quietbtn.addEventListener('click', makequiet)
loudbtn.addEventListener('click', makeloud)
sarcbtn.addEventListener('click', makesarc)

function makequiet (e) {
    const p = document.getElementById("patrick")
    const text = p.innerText
    p.innerText = text.toLocaleLowerCase()
}

function makeloud (e) {
    const p = document.getElementById("patrick")
    const text = p.innerText
    p.innerText = text.toLocaleUpperCase()

}

function makesarc (e) {
    const p = document.getElementById("patrick")
    let txt = p.innerText
    let sarc = ''
  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
   
    let i = 0
    for (let c of txt) {
      if (alphabet.includes(c.toLowerCase())) {
        c = i % 2 ? c.toUpperCase() : c.toLowerCase()
        i++
      }
      sarc += c
    }
  
    p.innerText = sarc
  
}




    
