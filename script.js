let saat = document.getElementsByClassName('saat')
let adi = document.querySelector('span')
let hesap = document.querySelector('#hesap')


let ad = prompt("Adınızı Giriniz:")
if( ad===""){
    alert("Ad alanı boş bırakılmaz")
} else {
    adi.innerHTML = ad; 
}


setInterval(()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let full =new Date().toDateString()
    
// 24 saatte 10 küçük sayıların önüne 0 eklemek için,
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    saat[0].innerHTML = `Bugün ${full} ve şuan da saat ${h}:${m}:${s}`
})


hesap.addEventListener('click',()=>{
    let yas = parseInt(prompt("Doğum Yılınızı Girin:"))
    const h2= document.createElement('h2')
    let date= new Date().getFullYear()
    const toplam = date - yas
    let div = document.querySelector('div')
    div.appendChild(h2)
    h2.innerText=`Sizin yaşınız ${toplam}`
})

