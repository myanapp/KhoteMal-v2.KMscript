const request = {
        check: function (imp) {
            var item, now, gap, refresh = true;
            try {
                item = JSON.parse(localStorage.getItem(imp.getAttribute('as') + '_' + account_id));
                now = (new Date()).getTime();
                gap = now - item.timestamp;
                refresh = Boolean(15e5 < gap);
                console.warn('last sync on ' + ((((new Date()).getTime() - item.timestamp) / 1000) / 60).toFixed(0) + ' minutes');
            } catch (e) {
                $test.error('@index.js: ' + e.message)
            } finally {
                if (refresh == true) {
                    this.crossOrigin('https://api.opendota.com/api/' + imp.getAttribute('from') + '/' + account_id + '/' + (imp.getAttribute('in') || ''), 'localStorage.setItem("' + imp.getAttribute('as') + '_' + account_id + '", with_timestamp)');
                }
            }
        },
        crossOrigin: function (x, y) {
            var callback_function = y;
            var ajax_url = x;
            var http = new XMLHttpRequest();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var response_only = this.responseText;
                    var with_timestamp = '{' + '"timestamp"' + ':' + (new Date()).getTime() + ',' + '"response"' + ': ' + response_only + '}'
                    eval(callback_function);
                } else if (this.readyState == 4) {
                    console.error('Failed to request an account data for' + account_id + '!');
                }
            }
            http.open('GET', ajax_url, true)
            http.send()
        }
    },
    router = {
        onload: (imp) => {
            switch (imp.getAttribute('km-function')) {
                case "import":
                    request.check(imp);
                    break;
                case "script":
                    request.crossOrigin(imp.getAttribute('from'), 'eval(response_only)');
                    break;
            }
        }
    }

window.addEventListener('load', () => {
    var i, km_import = document.querySelectorAll('[km-function]');

    for (i = 0; i < km_import.length; i++) {
        router.onload(km_import[i]);
        if (i == km_import.length - 1) {
            setTimeout("M.AutoInit()", 80);
        }

    }
})