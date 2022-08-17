let $ = e => document.querySelector(e);

window.addEventListener('load', (e)=>{
    $('.loader').classList.add('hide')
    setTimeout(e => {
        $('.loader').style.display = 'none'
    }, 300)
})