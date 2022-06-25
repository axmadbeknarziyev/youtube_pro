let massiv = []

$(".Add").on("click",() => {
    let URL = $("#URL").val()
    let name = $("#name").val()

    massiv.push({
        video: URL,
        name: name
    })
    
    $("#URL").val("")
    $("#name").val("")

    render(massiv)
})


function render(data){
    $(".row1").html("")
    let sanoq = 0
    data.map(item => {
        let col = `
           <div class="col-3 my-3">
                <div class="card my-3 h-100 ">
                    <iframe src="${item.video}" frameborder="0"></iframe>
                    <h4 class="text-center my-3 text-danger"> <span class="text-info"> nomi:</span> ${item.name}</h4>
                   
                    <div class="d-flex justify-content-around">
                        
                        <i onclick="deleteFun(${sanoq})" class="delete  fa-solid  fa-xl fa-trash py-1 text-primary"></i>
                        <i onclick="editFun(${sanoq})" data-bs-toggle="modal" data-bs-target="#exampleModal" class=" fa-solid fa-xl fa-pen-to-square py-1 text-primary"></i>
                       
                    </div>
                </div>
           </div>
        `
        $(".row1").append(col)
        sanoq++
    })
}

$("#search").on("input", () =>{
    // console.log(val.target.value);
    let value = $("#search").val()
    let searchresult = massiv.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })
    render(searchresult)
})



function deleteFun(sanoq){
    massiv.splice(sanoq, 1)

    render(massiv)
}




let currentEditedItem = " "
function editFun(index){
    currentEditedItem = index
    $(".URL").val(massiv[index].video)
    $(".nomi").val(massiv[index].name)
}

$(".editBtn").on("click", () =>{
   massiv[currentEditedItem].video = $(".URL").val()
   massiv[currentEditedItem].name = $(".nomi").val()

   $(".URL").val("")
   $(".nomi").val("")

   render(massiv)
})