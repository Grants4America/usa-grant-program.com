// scripts.js
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#grant-info').scrollIntoView({
        behavior: 'smooth'
    });
});
