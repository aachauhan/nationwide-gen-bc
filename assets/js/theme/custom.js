function hideSearch() {
    const x = document.querySelectorAll('.quickSearchResults');
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}
console.log(hideSearch());
