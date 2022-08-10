let inputVar = document.getElementById("myInput");
console.log(inputVar);

const getBtn = document.getElementById("myBtn").addEventListener("click", myFunction);

console.log(localStorage);

function myFunction() {
    document.getElementById("myBtn");
    inputVar = document.getElementById("myInput").value;
    // const myInputArray = Array.from(inputVar);

    const newItem = document.createElement('li');
    newItem.innerHTML = inputVar;

    document.getElementById("myUL").appendChild(newItem);

    // let i;
    // for (i = 0; i < inputs.length; i++) {
    //     let value = inputs[i].value; 
        // localStorage.setItem(`value${i}`, JSON.stringify(value));

    // let keys = Object.keys(localStorage);
    // for(let key of keys) {
    //     console.log(`${key}: ${localStorage.getItem(key)}`)
    // }


    // for(let i=0; i<localStorage.length; i++) {
    //     let key = localStorage.key(i);
    //     // alert(`${key}: ${localStorage.getItem(key)}`);
    //   }

        localStorage.setItem("name", JSON.stringify(inputVar));
    

    const parseData = JSON.parse(localStorage.getItem('name'));
    console.log(parseData);
}



[
    {
        id:1,
        taskName: "test"
    },

    {
        id:2,
        taskName: "test"
    }
]




// WORKING FUNCTION START
// const getBtn = document.getElementById("myBtn")

// getBtn.addEventListener("click", myFunction);
// WORKING FUNCTION END

// WORKING FUNCTION START
// function myFunction() {
//     document.getElementById("myBtn");
//     inputVar = document.getElementById("myInput").value;

//     const newItem = document.createElement('li');
//     newItem.innerHTML = inputVar;

//     document.getElementById("myUL").appendChild(newItem);
//     localStorage.setItem("name", JSON.stringify(inputVar));

//     const parseData = JSON.parse(localStorage.getItem('name'));
//     console.log(parseData);
// }
// WORKING FUNCTION END





// JSON.parse(localStorage.getItem('task'))




// console.log(newItem);




// const myNodelist = document.getElementsByTagName("li");

// let i;
// for (i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("span");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }



// const close = document.getElementsByClassName("close");

// let i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     const div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'li') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);


// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }