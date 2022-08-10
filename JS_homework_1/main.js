// let element = document.getElementById("demo");

// console.log(element);


const listItem = document.querySelector(".lastchild");
console.log(listItem);
listItem.style.fontWeight = "700";
//listItem.classList.add('klase');
//listItem.classList.remove('klase');
//listItem.classList.toggle('klase');

const btn = document.querySelector('button');
//btn.addEventListener('click', funkcija);
btn.addEventListener('click', function funkcija () {
    btn.classList.toggle('klase');
});

//function funkcija() {}


const newItem = document.createElement('li');
newItem.innerHTML = '<a href="/products">contacts</a>';
console.log(newItem);

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const element = document.createElement('div');
        document.body.append(element);
    }
    
}

// listItem.parentNode.removeChild(listItem);


const listAll = document.querySelectorAll("li");
console.log(listAll);



