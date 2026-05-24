function updateClock() {
    const now = new Date();
    
    // Get time components
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    hours = String(hours).padStart(2, '0');
    
    // Display Time
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Display Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Run clock immediately, then update every 1 second
updateClock();
setInterval(updateClock, 1000);
