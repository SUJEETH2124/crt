let aish=document.createElement("p");
aish.textContent="I'm Chitti";
aish.style.color="blue";
aish.style.fontsize="20px";
document.getElementById("vasi").appendChild(aish);
document.body.style.backgroundColor = "pink";
setTimeout(() => {
    let re = document.getElementsByClassName("list")[4];
    if (re) {
        re.remove();
    }
}, 2000);
let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by JavaScript";
newHeading.style.color="purple";
newHeading.style.fontSize="20px";
 