const products = document.querySelectorAll('.hidden')
const hideButton =document.querySelector('.btn-hide')

const viewAll = document.querySelector('.btn-view-all')


viewAll.addEventListener('click', (e) => {
    e.preventDefault()

    toggle()

   



})

const toggle = () => {
    products.forEach(product => {
        product.classList.toggle('d-none')

    })


}

function hideContent() {
    hideButton.addEventListener('click', (e)=>{
        e.preventDefault()
        products.forEach(product => {
            product.classList.toggle('d-none')
    
        })
     
       
        
    })
}


hideContent()