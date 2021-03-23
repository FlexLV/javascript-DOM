document.addEventListener('DOMContentLoaded', function () {
    
    
    const nameBar = document.querySelector('#full_name')
    var htmlName = document.querySelector('#greeting')
    

    nameBar.addEventListener('keyup', function (e) {
        htmlName.textContent = "Hello there, " + e.target.value + "!"
    })

})