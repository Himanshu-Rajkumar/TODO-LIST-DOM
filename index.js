let myForm=document.getElementById("myForm")
let task=document.getElementById("task")
let priority=document.getElementById("priority")
let tbody=document.querySelector("#tbody")
let AllData=[]

myForm.addEventListener("submit",function(e){
    e.preventDefault()
    let Data={}
    Data.tast=task.value
    Data.priority=priority.value
    
    AllData.push(Data)

    tbody.innerHTML=""

    AllData.map(ele=>
        {
         let row=document.createElement("tr")
         let td1=document.createElement("td")
         let td2=document.createElement("td")
         td1.innerText=ele.tast
         td2.innerText=ele.priority
         row.append(td1,td2)
         
         tbody.append(row)
        })
    
    
})

