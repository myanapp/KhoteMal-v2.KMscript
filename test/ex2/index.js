var overlay = (x) => {
    switch (x) {
        case 'on':
            $('#overlay').setAttribute('class', 'show');
            break;
        case 'off':
            $('#overlay').setAttribute('class', 'hide');
            break;
    }
};

const km = {
    init: function () {
        var g = {
            live: () => this.live('live'),
            reload: () => this.init(),
            start: (x) => this.build.start(x)
        }

        // This is For LIVE DATA [AutoUpdater]
        var live = sessionStorage.getItem('odota_live');
        if (!live) {
            /* not existed */
            return g.live();
        } else {
            live = live.split(']| ');
            var time = (new Date()).getTime() / 1000;
            time = ((time - live[0]) / 60).toFixed(0);
            console.log(time)
            if (time > 500) {
                /* was expired */
                return g.live();
            } else {
                /* cached are OK */
                var data = sessionStorage.getItem('odota_live');
                if (data) {
                    data = data.split(']| ');
                    data = JSON.parse(data[1]);
                    g.start(data);
                }

                setTimeout(function () {
                    g.live();
                }, 30000)
            }
        }

        // This is For HTML "KM" Tags
        var fn = $('[km-function]');
        for (var i = 0; i < fn.length; i++) {
            var a = fn[i],
                attr = this.ga(a, ['km-function', 'from', 'as', 'for']);
        }
    },
    live: function (n) {
        setTimeout(function () {
            M.toast({
                html: 'updating live matches...'
            })
        }, 800)

        var init = () => this.init();

        x = new XMLHttpRequest();
        x.onreadystatechange = function () {
            var d = (new Date()).getTime() / 1000,
                r = d.toFixed(0) + ']| ' + this.responseText,
                s = this.status;

            if (this.readyState == 4) {
                switch (this.status) {
                    case 200:
                        sessionStorage.setItem('odota_' + n, r);
                        return init();
                    default:
                        console.debug(s);
                        return init();
                }
            }
        }
        x.open('get', 'https://api.opendota.com/api/' + n, true);
        x.send();

        overlay('on');

    },

    build: {
        start: function (x) {
            overlay('off');
            var $data = x,
                $_for = {
                    '1': x[0],
                    '2': x[1],
                    '3': x[2],
                    '4': x[3],
                    '5': x[4]
                }
            test();

            function test() {
                var x = $_for['1'];
                var a = x['players'];
                console.log(x)

                for (var i = 0; i < a.length; i++) {
                    var ƒƒ = a[i];
                    var acc_id = ƒƒ.account_id,
                        hero = KM.search.heroes(ƒƒ.hero_id);

                    $('#hero_avatar')[i].src = '/assets/heroes/125px-' + (hero.localized_name.split(' ')).join('_') + '_Large.png';;

                    $('#player_name')[i].setAttribute('km-data', acc_id);
                    $('#player_name')[i].innerHTML = (ƒƒ.name || 'Unknown');
                    $('#hero_name')[i].innerHTML = hero.localized_name;

                }
                var d = new Date(x.last_update_time * 1000);
                var dd = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();
                $('#radiant_score').innerText = x.radiant_score;
                $('#dire_score').innerText = x.dire_score;
                $('#game-mode').innerText = KM.search.mode(x.game_mode).name;
                $('#lobby-type').innerText = KM.search.type(x.lobby_type).name;
                $('#timestamp').innerText = dd;
                $('#gametime').innerText = ((x.game_time) / 60).toFixed(0);

                if (x.team_name_radiant != null) {
                    $('#radiant-team').innerText = x.team_name_radiant;
                }
                if (x.team_name_dire != null) {
                    $('#dire-team').innerText = x.team_name_dire;
                }
            }

        }
    },

    ga: function (a, b) {
        for (var i = 0, p = []; i < b.length; i++) {
            var r = a.getAttribute(b[i]);
            if (r) {
                p.push(r)
            }
        };
        return p;
    }
}

km.init()