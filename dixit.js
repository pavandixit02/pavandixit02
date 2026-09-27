const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
menuToggle?.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("open")));
const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
