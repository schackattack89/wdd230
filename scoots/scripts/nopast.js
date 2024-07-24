var today = new Date().toISOString().split('T')[0];
    
    // Set the minimum date to today (inclusive)
    document.getElementById('date').setAttribute('min', today);