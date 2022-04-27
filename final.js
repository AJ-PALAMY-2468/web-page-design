// import fetch from 'node-fetch';

fetch ('https://60cfa5e34a030f0017f67e29.mockapi.io/employees')
    .then(res => res.json())
    .then(data => console.log(data))

async function getemployees(){
    const res = await fetch('https://60cfa5e34a030f0017f67e29.mockapi.io/employees');

    if(!res.ok){
        throw new Error('Error! '+res.status);
    }

    var data = await res.json();

    show(data);
} 

function show(data){
    data.forEach(employees => {

        var str=`
            <div class="row">
                
                <div class="col-md-2"><br>
                <img src="${employees.image}" width="100%"/>
                </div>

                <div class="col-md-5 textcolor"><br>
                    <h4>Email : ${employees.email}</h4>
                    <h4>Name : ${employees.name}</h4>
                    <h4> ID : ${employees.id}</h4>
                </div>

                <div class="col-md-3"><br>
                <button class="btn btn-danger"><i class="fa fa-trash "></i> Trash</button> |
                <button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button> |
                <button class="btn btn-warning"><i class="fa fa-folder "></i> ADD</button>
                </div>
            </div>
        `;
        var div = document.createElement("div");
        div.innerHTML = str; 
        document.getElementById("show").append(div);

    });
}     
getemployees();

const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu")){
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }else {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")
    })
})

