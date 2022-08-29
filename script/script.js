const input = document.getElementById('input')
const addingData = document.getElementById('adding-data')
const errorData = document.getElementById('error-data')

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
    p.innerText = input.value
    addingData.appendChild(p)
}