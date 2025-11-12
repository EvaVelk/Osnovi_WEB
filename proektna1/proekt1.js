document.getElementById('loginform').addEventListener('submit',function(e){
    e.preventDefault();
    
    const username=document.getElementById('uname').value;
    const password=document.getElementById('psw').value;
    const message=document.getElementById('loginmessage');
    if(username==="username" && password === "password"){
        message.style.color="blue";
        message.textContent="Succesful Login.";
        setTimeout(()=>{
            window.location.href="survey.html";
        },1500);
    } else{
        message.style.color="pink";
        message.textContent="Login failed. Check if your username or password is incorrect.";
    }
});
document.querySelectorAll('.slika').forEach(slika =>{
    const like=slika.querySelector('.like');
    const dislike=slika.querySelector('.dislike');
    like.addEventListener('click',()=>{
        let count = parseInt(like.querySelector('span').textContent);
        like.querySelector('span').textContent= count+1;
    });
    dislike.addEventListener('click',()=>{
        let count = parseInt(dislike.querySelector('span').textContent);
        dislike.querySelector('span').textContent= count+1;
    });
});
