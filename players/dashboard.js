    var account_id = KM.$['COOKIE'].get('account-id'),
        object = (obj) => {
            var s = $('km'),
                o = obj;
            for (var i = 0; i < s.length; i++) {
                var thix = s[i],
                    elem = thix.getAttribute('data');

                try {
                    var _d = elem.split('.'),
                        str = o[_d[0]];
                    console.log(str, _d.length, 'id:' + i)
                    /*for (var i = 0; i < _d.length; i++) {
                        var data = eval('str' + elem.split),
                            load = thix.innerText;
                    }*/

                    switch (elem) {
                        case null:
                            break;
                        default:
                            run_build();
                    }

                    function run_build() {
                        KM.overlay(0);

                        if (data != undefined && load.length > 0) {
                            if (data) {
                                thix.innerHTML = eval(load);
                            } else {
                                thix.innerHTML = '<span class="km-tag null"></span>';
                            }
                        } else if (load.length < 1) {
                            thix.innerHTML = data;
                        }
                    };

                } catch (err) {
                    thix.innerHTML = err.message;
                }
            }
        };

    function check_DoOnEvents(x, z) {
        if (x == null) {
            return "";
        } else {
            var res = (x) => {
                switch (x) {
                    case 'matches':
                        return 'matches/' + z;
                        break;
                    default:
                        var output = 'players/' + account_id;
                        if (x != 'players') {
                            output = output + '/' + x;
                        }
                }
                return output;
            };
            var cache = (res(x).split('/')).join('_'),
                storage = () => localStorage.getItem(cache);
            if (!storage()) {
                KM.request('https://api.opendota.com/api/' + res(x), 'localStorage.setItem("' + cache + '", res); object(JSON.parse(res));');
            } else {
                object(JSON.parse(storage()));
            }
        }
    }

    function rank_tier(obj) {
        var o = obj,
            d = String(o.rank_tier);
        var a = [];
        switch (d[0]) {
            case '1':
                a.push('Herald');
                a.push('[' + d[1] + ']');
                break;
            case '2':
                a.push('Guardian');
                a.push('[' + d[1] + ']');
                break;
            case '3':
                a.push('Crusader');
                a.push('[' + d[1] + ']');
                break;
            case '4':
                a.push('Archon');
                a.push('[' + d[1] + ']');
                break;
            case '5':
                a.push('Legend');
                a.push('[' + d[1] + ']');
                break;
            case '6':
                a.push('Ancient');
                a.push('[' + d[1] + ']');
                break;
            case '7':
                a.push('Divine');
                a.push('[' + d[1] + ']');
                break;
            case '8':
                a.push('Immortal');
                a.push('[Ranking:');
                a.push(o.leaderboard_rank + ']');
                break;
        }
        return a.join(' ');
    }

    if (account_id) {
        var i, arr = [],
            _km = $('km'),
            seen = {};

        for (i = 0; i < _km.length; i++) {
            var r = _km[i].getAttribute('required');
            arr.push(r);
        }

        var request = arr.filter(function (item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });

        for (i = 0; i < request.length; i++) {
            switch (request) {
                case null:
                    break;
                default:
                    check_DoOnEvents(request[i]);
            }
        }
    }