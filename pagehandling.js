document.addEventListener('DOMContentLoaded', () => {
    const daterangelocal = document.querySelector('input.date');
    const button = document.querySelector('button.login');
    const usertext = document.querySelector('p.usertext');
    
    button.addEventListener('click', async () => { 

            button.disabled = true;    
            const username = document.querySelector('input.pass');
    
            fetch(`https://e621.net/users/${username.value}.json`, {
                headers: {
                    'User-Agent': "Update-Master/1.0 (by Powerguido on e621)" 
                }
            }).then(response => {
                if (response.status == 404){
                    console.log('PICA');
                    usertext.innerHTML = 'Username not found';
                }
                else if(!response.ok){
                    usertext.innerHTML = 'Something went wrong :('
                }
                else{
                    usertext.innerHTML = '';
                    sessionStorage.setItem('daterange', daterangelocal.value);
                    sessionStorage.setItem('username',  username.value);
                    window.location.replace(`./Main.html`)
                }
            
            });
    
            setTimeout(() => {button.disabled = false}, 500)
        });    
});