// CRUD
// Create: tạo mới 
// Read: lấy dữ liệu 
// Update: chỉnh sửa
// Delete: xóa 

var coursesApi = 'http://localhost:3000/courses';

// Read
function start() {
    getCourses(renderCourses)
    handleCreateForm()
}

start()

// function
function getCourses(callback){
    fetch(coursesApi)
        .then(function(reponse){
            return reponse.json();
        })   
        .then(callback)
}

function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return`
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.desc}</p>
            <button onclick = "handleDeleteCourse(${course.id})">Xóa</button>
            <button onclick = "handleEditCourse(${course.id})">Edit</button>
            <div class = "hidden">
                <div>
                    <label for="">Name</label>
                    <input type="text" name="nameEdit">
                </div>
                <div>
                    <label for="">Desc</label>
                    <input type="text" name="descEdit">
                </div>
                <button onclick = "updateCourse(${course.id})" >Save</button>
            </div>
        </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

// create 
function handleCreateForm(){
    var createBtn  = document.querySelector('#create');
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value
        var desc = document.querySelector('input[name="desc"]').value
        
        var formData = { 
            name: name,
            desc: desc
        }

        createCourse(formData,function(){
            getCourses(renderCourses)
        })
    }
}   

function createCourse(data, callback){ 
    var options ={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        .then(function(reponse){
            reponse.json()
        })
        .then(callback)
}

//delete 
function handleDeleteCourse(id){
    var options ={
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }
    fetch(coursesApi + '/' + id, options)
        .then(function(reponse){
            reponse.json()
        })
        .then(function(){
            var courseItem = document.querySelector(".course-item-"+id)
            if (courseItem){
                courseItem.remove();
            }
        })
}

// edit
function handleEditCourse(id) {
    var courseItem = document.querySelector(".course-item-" + id)
    var hiddenElement = courseItem.querySelector(".hidden")

    hiddenElement.classList.toggle("open")
}  
function updateCourse(id){
    var nameEdit = document.querySelector(".course-item-" + id + ' input[name="nameEdit"]').value
    var descEdit = document.querySelector(".course-item-" + id + ' input[name="descEdit"]').value
    var data = {
        name: nameEdit,
        desc: descEdit
    }
    var options ={
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi + '/' + id, options)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            // var courseItem = document.querySelector(".course-item-" + id)
            var newName = document.querySelector(".course-item-" + id + " h4") 
            var newDesc = document.querySelector(".course-item-" + id + " p") 
            newName.textContent = data.name
            newDesc.textContent = data.desc
            
            var hiddenElement = document.querySelector(".course-item-" + id + " .hidden")
            hiddenElement.classList.toggle("open")     
        })
        .then(function(){
            getCourses(renderCourses)
        })
}
