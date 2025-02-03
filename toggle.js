document.getElementById('cs-btn').addEventListener('click', function() {
    // Hide all sections
    document.getElementById('creative-services').classList.toggle('hidden');
    // Hide the 'Personal Projects' section if it's showing
    if (!document.getElementById('personal-projects').classList.contains('hidden')) {
        document.getElementById('personal-projects').classList.add('hidden');
    }
});

document.getElementById('ps-btn').addEventListener('click', function() {
    // Hide all sections
    document.getElementById('personal-projects').classList.toggle('hidden');
    // Hide the 'Creative Services' section if it's showing
    if (!document.getElementById('creative-services').classList.contains('hidden')) {
        document.getElementById('creative-services').classList.add('hidden');
    }
});
