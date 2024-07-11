document.querySelector('#google').addEventListener('click', function() {
    var url = this.getAttribute('data-url');
    if (url) {
        window.open(url, '_blank');
    }
});

document.querySelector('#google2').addEventListener('click', function() {
    var url = this.getAttribute('data-url');
    if (url) {
        window.open(url, '_blank');
    }
});