function loadTaskbar() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        const taskbarContainer = document.getElementById('navBar');
        taskbarContainer.innerHTML = this.responseText;
        }
    };

    xhttp.open('GET', '../common_components/navBar.html', true);
    xhttp.send();
}
window.onload = loadTaskbar;