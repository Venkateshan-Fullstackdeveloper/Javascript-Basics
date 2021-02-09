const courses = [
    {
        name : "Complete ReactJS course",
        price : 2.1
    },
    {
        name : "Complete Angular course",
        price : 2.9
    },
    {
        name : "Complete MERN course",
        price : 2.4
    },
    {
        name : "Complete C++ course",
        price : 2.7
    },
    {
        name : "Complete ReactNative course",
        price : "5.0"
    }
];



function generateList(){
    const ul =document.querySelector(".list-group");
     ul.innerHTML = " ";//reset the list or dont want  repeatation of list
    courses.forEach(course => {
        //create list
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);
        //create span
        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

    });
}

// generateList();

window.addEventListener("load", generateList);

const sort2 = document.querySelector(".sort-btn");
 sort2.addEventListener("click", () => {
     courses.sort( (a,b) => a.price - b.price);
     generateList();
 });
const sort1 = document.querySelector(".sort1-btn");
 sort1.addEventListener("click", () => {
    //  courses.sort1( (a,b) => a.price - b.price);
     courses.reverse();
     generateList();
 });