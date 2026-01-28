document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const searchBox = document.querySelector('.search-box');

    searchInput.addEventListener('focus', () => {
        searchBox.style.background = '#fff';
        searchBox.style.border = '1px solid #9db694';
        searchBox.style.boxShadow = '0 0 5px rgba(0,0,0,0.1)';
    });

    searchInput.addEventListener('blur', () => {
        searchBox.style.background = '#ddeedd';
        searchBox.style.border = 'none';
        searchBox.style.boxShadow = 'none';
    });

});