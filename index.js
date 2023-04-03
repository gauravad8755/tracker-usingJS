// function saveLead(){
//     console.log("Button Clicked!!!")
// }
// let myLeads = ["www.amazon.co.in"]
// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)

// let myLeads = '[www.amazon.co.in]'
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.google.co.in")
// console.log(myLeads)
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")         // const can't be reassigned while let can

const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    //console.log(tabs[0].url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log(myLeads)
    })
})

function render(leads){
    let listItems = ""
    for(i=0; i<leads.length;i++){
        listItems += `<li>                                      
        <a target = '_blank' href='${leads[i]}'> 
        ${leads[i]}
        </a>
        </li>
        `

    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    // console.log("Double clicked!!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



inputBtn.addEventListener("click", function(){                 //new way to add events without having to type it in html 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
    console.log(localStorage.getItem("myLeads"))

    
})








