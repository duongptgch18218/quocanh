
document.getElementById('btn').onclick = function () {
    for (let i of document.getElementsByTagName('input')) {
        i.style.display = 'inline';
    }
    document.getElementById('det').style.display = 'none';
    document.getElementById('upd').style.display = 'block';

    for (let i of document.getElementsByTagName('span')) {
        i.style.display = 'none';
    }
}
document.querySelector('#btn3').onclick = function () {
    if (document.querySelector('#bookid').value === '' || document.querySelector('#bookid').value === ' ') {
        alert("Must input Book ID");
        return false;
    }
    if (document.querySelector('#name').value === '' || document.querySelector('#name').value === ' ') {
        alert("Must input Book Name");
        return false;
    }
    if (document.querySelector('#genre').value === '' || document.querySelector('#genre').value === ' ') {
        alert("Must input Genre");
        return false;
    }
    if (document.querySelector('#author').value === '' || document.querySelector('#author').value === ' ') {
        alert("Must input Author");
        return false;
    }
    if (document.querySelector('#amount').value === '' || document.querySelector('#amount').value === ' ') {
        alert("Must input Amount");
        return false;
    }
}
