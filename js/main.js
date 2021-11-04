
  // change color of link when clicked
$("a").click(function(){
$("a").css("color","");
$(this).css("color", "#17a2b8");
});
// // search icon toggle in and out onclick
//       $(document).ready(function(){
//         $(".fa-search").click(function(){
//           $(".searchicon").toggleClass("active");
//           $(".searchinput").toggleClass("active")
//         })
//     })

		// toggle for media query display
const menu = document.querySelector(".menu-icon span");
const search =document.querySelector(".search-icon ");
const cancel = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-list");
const form = document.querySelector("form");

menu.onclick =()=>{
	items.classList.add("active");
	menu.classList.add("hide");
	search.classList.add("hide");
	cancel.classList.add("show");
}

cancel.onclick = () =>{
	items.classList.remove("active");
	menu.classList.remove("hide");
	search.classList.remove("hide");
	cancel.classList.remove("show");
	form.classList.remove("active")
	cancel.style.color = "#fff";
}

search.onclick = () =>{
	search.classList.add("hide");
	cancel.classList.add("show");
	form.classList.add("active")
}

// popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 10000);
  });
}
 
 // Scroll to top

   window.addEventListener('scroll', function(){
      const scroll=document.querySelector('.scrollTop');
     scroll.classList.toggle("active", window.scrollY > 500)
 })
 function scrollToTop(){
    window.scrollTo({
         top:0,
         behavior:"smooth"
    })
  }

  // zoom product
  $(document).ready(function () {
        $("#zoom").imagezoomsl({
          zoomrange: [4, 4],
        });
      });

// productDetails color switch
$(".color_wrap ul li")
.each(function(item){
  const color = $(this).attr("data-color");
  $(this).css("backgroundColor", color);
})

$(".color_wrap ul li")
.each(function(item){
  $(this).click(function(){
    $(this).parents(".details")
    .find(".color_wrap ul li").removeClass("active");
    $(this).addClass("active");

    const imageSrc = $(this).attr("data-src");
    $(this).parents(".details")
    .find("img").attr("src", imageSrc)
  })
})