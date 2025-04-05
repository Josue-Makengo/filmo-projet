
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('trailer-modal').style.display = "none";
    document.getElementById('trailer-iframe').src = ""; 
});

window.addEventListener('click', event => {
    const modal = document.getElementById('trailer-modal');
    if (event.target === modal) {
        modal.style.display = "none";
        document.getElementById('trailer-iframe').src = "";
    }
});