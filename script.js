// change navbar style on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('navbar').classList.
    toggle('window-scroll', window.scrollY > 0)
})

// show/hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

//show/hide nav menu
const menu =document.querySelector(".nav_menu");
const menu_btn =document.querySelector("#open-menu-button");
const close_btn =document.querySelector("#close-menu-button");

menu_btn.addEventListener('click', () =>{
    menu.style.display = "flex";

    close_btn.style.display = "inline-block";
    menu_btn.style.display = "none";
})

//close nav menu
const closeNav = () =>{
    menu.style.display = "none";
    close_btn.style.display = "none";
    menu_btn.style.display = "inline-block";
}

close_btn.addEventListener('click', closeNav)