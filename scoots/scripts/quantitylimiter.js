document.getElementById('quantity').addEventListener('input', function() {
    // Remove non-numeric characters from the input value
    this.value = this.value.replace(/[^1-5]/g, '');
});