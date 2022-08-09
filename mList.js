

document.getElementById('aSubmit').addEventListener('click',() => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = document.getElementById('anAlbum').value;
    row.insertCell(1).innerHTML = document.getElementById('anArtist').value;
    row.insertCell(2).innerHTML = document.getElementById('aStatus').value;
    document.getElementById('anAlbum').value = '';
    document.getElementById('anArtist').value = '';
    document.getElementById('aStatus').value = '';
})