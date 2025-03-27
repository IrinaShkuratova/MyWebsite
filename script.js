function toggleSection(id) {
    let section = document.getElementById(id);
    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
        section.style.display = 'block';
    }
}