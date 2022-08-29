const input = document.getElementById('input')
const addingData = document.getElementById('adding-data')
const errorData = document.getElementById('error-data')
const clearBtn = document.getElementById('clear-btn')

function addFn(){
    if(!input.value){
        const p = document.createElement('p')
        p.classList.add('p')
        p.innerText = 'Please Enter Valid Value.'
        errorData.appendChild(p)
        setTimeout(() => {
            errorData.innerHTML = ''
        }, 3000)
        return
    }
    const p = document.createElement('p')
    const span = document.createElement('span')
    const span2 = document.createElement('span')
    const iThick = document.createElement('i')
    const iX = document.createElement('span')
    const iPen = document.createElement('i')

    p.classList.add('adding-data-p')
    span.classList.add('span')
    span2.classList.add('span2')
    iThick.classList.add('fa-solid', 'fa-circle-check')
    iX.classList.add('x-btn')
    iPen.classList.add('fa-solid', 'fa-pencil')

    span.innerText = input.value
    iX.innerText = 'X'

    span2.appendChild(iThick)
    span2.appendChild(iPen)
    span2.appendChild(iX)
    p.appendChild(span)
    p.appendChild(span2)
    addingData.appendChild(p)
    input.value = ''
}

const clearFn = () => {
    addingData.innerHTML = ''
}
clearBtn.addEventListener('click', clearFn)

addingData.addEventListener('click', (e) => {
    const target = e.target
    if(target.className === 'x-btn'){
        const deleteData = target.parentNode.parentNode
        const parent = target.parentNode.parentNode.parentNode
        parent.removeChild(deleteData)
    }
    if(target.className === 'fa-solid fa-pencil'){
        const deleteData = target.parentNode.parentNode
        const parent = target.parentNode.parentNode.parentNode
        const name = deleteData.firstChild.innerText
        input.value = name
        parent.removeChild(deleteData)
    }
    if(target.className === 'fa-solid fa-circle-check'){
        const data = target.parentNode.parentNode.firstChild
        if(data.style.textDecoration === 'line-through'){
            return data.style.textDecoration = 'none'
        }
        data.style.textDecoration = 'line-through'
    }
})