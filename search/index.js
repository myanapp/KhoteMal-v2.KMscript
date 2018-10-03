var $_ACCOUNT = [];

document.querySelector('button[type=submit].btn').addEventListener('click', function () {
    acc_id = account.id.value;

    isNum = Boolean(0 < Number(acc_id));
    isLthOk = Boolean(10 >= String(acc_id).length && 8 <= String(acc_id).length);

    if (isNum == true && isLthOk == true) {
        console.log('working...')
        KM('ajax', 'https://api.opendota.com/api/players/' + acc_id, '$_ACCOUNT');

    } else {

        if (acc_id == '') {
            console.log(null, 'is not valid')
        } else {
            if (isNum == false) {
                console.log(isNum, 'is not a number.')
            } else
            if (isLthOk == false) {
                console.log('Must at least 8 to 10')
            }
        }

    }

    M.toast({
        html: 'ေဆာင္ရြက္ေနသည္...',
        completeCallback: () => location.replace('/#id=' + acc_id.value + '=' + (new Date()).getTime())
    })

})

window.onload = function () {
    var km_autoinit = $('[km-autoinit]'),
        stringName = (x, y) => {
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    _data = JSON.parse(this.responseText);
                    km_autoinit[y].innerText = _data.profile['personaname'];
                }
            }
            xmlhttp.open('GET', 'https://api.opendota.com/api/players/' + x, true);
            xmlhttp.send();

            $('.playerid')[y].setAttribute('href', '/matches/last.html?' + x);
        }

    for (var i = 0; i < km_autoinit.length; i++) {
        innerText = km_autoinit[i].innerText;
        stringName(innerText, i);
    }

}