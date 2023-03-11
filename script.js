console.log("script running...");
document.querySelector('.userDetails').style.display ='none';
document.querySelector('.btn').addEventListener("click",()=>
{
    document.querySelector('.userDetails').classList.toggle('usergo');
    if(document.querySelector('.userDetails').classList.contains('usergo')){
        document.querySelector('.btn').style.display=''
        document.querySelector('.userDetails').style.display='none'
    }
    else{
        document.querySelector('.btn').style.display=''
        setTimeout(() => {
        document.querySelector('.userDetails').style.display=''
        },300);
    }
})      