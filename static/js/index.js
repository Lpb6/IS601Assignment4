// const clearfile = document.getElementById('clearFile');

function clearFile(){
    const file_input = document.getElementById('file');
    file_input.value = '';
    window.location.href = ''
}

document.querySelector('.cart-btn').addEventListener('click',function(){
    if (document.getElementById("revString")) {
        const revString = document.getElementById("revString").textContent;
        localStorage.setItem("revString", revString);
        window.location.href = 'cart/'
    }else{
        window.location.href = 'cart/'
        console.log('no string');
    }
})
