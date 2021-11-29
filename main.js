// let acc = document.getElementsByClassName("questions");
// let i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function() {
//         this.classList.toggle("active");
//         let panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     };
// }

let acc = document.getElementsByClassName("questions");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        hideAll();

        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

function hideAll() {
    for (i = 0; i < acc.length; i++) {
        acc[i].classList.toggle("active", false);
        acc[i].nextElementSibling.classList.toggle("show", false);
    }
}