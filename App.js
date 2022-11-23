const search= document.querySelector(".search") /*class olduğu için nokta koyuyoruz -- ıd olsaydı # koyacaktık*/
const input= document.querySelector(".input")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
search.classList.toggle("active")/*seaarch ın claslistine toggle ata toggle yani hem ekleme hem çıkarma yapacak kapalıysa açacak açıksa kapatacak*/
input.focus() /*html form üyesini vurgulamak içinkullanılır buradfa btn da var inputta biz inputu vurgulamak için kullanıyoruz*/ 
})