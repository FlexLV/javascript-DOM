document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('#toggle_button')
    const elements = document.querySelectorAll('.second_five > li')


    var toggleStatus = false
    button.addEventListener('click', function(e) {
        if (toggleStatus == false)
        {
            elements.forEach(function(element) {
                toggleStatus = true
                element.style.display = 'flex'

            })
        }
        else
        {
            elements.forEach(function (element) {
                toggleStatus = false
                element.style.display = 'none'
            })
        }
    })

})

document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('#toggle_button')
    const elements = document.querySelectorAll('.first_five > li')


    var toggleStatus = false
    button.addEventListener('click', function(e) {
        if (toggleStatus == false)
        {
            elements.forEach(function(element) {
                toggleStatus = true
                element.style.display = 'none'

            })
        }
        else
        {
            elements.forEach(function (element) {
                toggleStatus = false
                element.style.display = 'flex'
            })
        }
    })

})

