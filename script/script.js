let sidebarText = document.querySelectorAll(".sidebar-text")
let opensidebarButton = document.getElementById("sidebar-button1")
let closesidebarButton = document.getElementById("sidebar-button2")
let reduce = document.querySelector(".reduce-width")
let feedsWraper = document.querySelector(".feeds-wrapper")

opensidebarButton.addEventListener('click', function(){
    reduce.style.width = "230px"
    feedsWraper.style.width = `calc(100% - 230px)`
    feedsWraper.style.marginLeft = "230px"
    sidebarText.forEach(function(item){
        closesidebarButton.classList.remove('sidebar-hidden');
        opensidebarButton.classList.remove('sidebar-show');
        opensidebarButton.classList.add('sidebar-hidden')
        item.classList.remove('sidebar-hidden');
        item.classList.add('sidebar-show')
    })
})

closesidebarButton.addEventListener('click', function() {
    reduce.style.width = "130px"
    feedsWraper.style.width = "calc(100% - 130px)"
    feedsWraper.style.marginLeft = "130px"
    
    sidebarText.forEach(function(item){
        opensidebarButton.classList.remove('sidebar-hidden');
        closesidebarButton.classList.add('sidebar-hidden')
        item.classList.remove('sidebar-show');
        item.classList.add('sidebar-hidden')
    })
})

