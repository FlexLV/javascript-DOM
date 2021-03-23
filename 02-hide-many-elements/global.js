const hideMeElements = document.querySelectorAll(".hide_me")
const button = document.querySelector("#button")


button.addEventListener('click', function(e) {
    hideMeElements.forEach(function(element) {
        element.style.display = "none";
    })
})