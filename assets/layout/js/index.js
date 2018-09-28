const KM = (obj, dt_1, rtn) => {
    _KM = {
        ajax: (dt_1) => {
            xmlhttp = new XMLHttpRequest()
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    $_ACCOUNT.push(JSON.parse(this.responseText))
                }
            }
            xmlhttp.open('GET', dt_1, true)
            xmlhttp.send()
        }
    }

    _KM[obj](dt_1)
    return "";
}