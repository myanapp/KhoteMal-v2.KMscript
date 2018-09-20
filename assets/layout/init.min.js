let KM = () => {
    _read = JSON.parse(document.querySelector('pre[km-prefix]').innerHTML), document.querySelector('pre[km-prefix]').remove();
    let KM = {
        build: (data) => {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status != 404) {
                    document.body.innerHTML += this.responseText;
                }
            }
            xhttp.open('GET', '/assets/' + data, true);
            xhttp.send();
        },
        layout: {
            default: ['layout/nav.html', 'wp-contents' + location.pathname, 'layout/footer.html']
        }
    }
    ƒ = KM.layout[_read.layout];
    for (var π = 0; π < ƒ.length; π++) {
        KM.build(ƒ[π])
    }

    M.AutoInit();

}
KM();
// document.querySelector('pre[km-prefix]').remove();