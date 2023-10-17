const menuResponsive = document.querySelector("#menuResponsive");
let open;
const openMenu = (value) => {
    if(value == 1){
        menuResponsive.style.top = 0;
    } else{
        menuResponsive.style.top = "-1000px";
    } 
}