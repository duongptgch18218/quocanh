document.querySelector('#btn').onclick = function () {
    if (document.querySelector('#date').value === '' || document.querySelector('#date').value === ' ') {
        alert("Must input Date");
        return false;
    }
    if (document.querySelector('#renter').value === '' || document.querySelector('#renter').value === ' ') {
        alert("Must input Renter");
        return false;
    }
    if (document.querySelector('#bookid').value === '' || document.querySelector('#bookid').value === ' ') {
        alert("Must input Book");
        return false;
    }
    if (document.querySelector('#amount').value === '' || document.querySelector('#amount').value === ' ') {
        alert("Must input Amount");
        return false;
    }
}