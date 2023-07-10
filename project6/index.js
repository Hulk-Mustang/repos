const text = document.getElementById('text')
const pen = document.getElementById('pen')
const n2 = document.getElementsByTagName('h2')
const allIt = document.getElementById('allIt')

pen.addEventListener('click', function(){
    allIt.innerHTML = ""
})

    text.addEventListener('keydown', function(event){
        if(event.key == 'Enter'){
            add()
        }
    })

function add() {
    let h2 = document.createElement('h2')
    h2.innerHTML = '- ' + text.value
    document.body.append(h2)
    text.value = ""

    h2.addEventListener('click', function() {
        h2.style.textDecoration = 'line-through'
    })
    allIt.insertAdjacentElement('beforeend', h2)
}

