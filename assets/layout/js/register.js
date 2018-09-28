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