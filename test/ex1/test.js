// me - 373924056 || app - 326044547 || pai - 349652911 || aba - 896811688
var $_ACCOUNT = [];

try {
    var error_session = (e) => {
        M.toast({
            html: e.message,
            completeCallback: function () {
                M.toast({
                    html: 'Trying to restart all the cached data. Please reload this page.',
                    completeCallback: function () {
                        var errorOnSession = sessionStorage.error_on_process;
                        if (!errorOnSession) {
                            sessionStorage.setItem('error_on_process', e.message + ', ' + 1);
                        } else {
                            var err = errorOnSession.split(',');
                            err = Number(err[1]);
                            console.error(e)
                            if (err <= 5) {
                                err = err + 1;
                                sessionStorage.setItem('error_on_process', e.message + ', ' + err);
                                localStorage.clear();
                                location.reload();
                            } else {
                                M.toast({
                                    html: 'Maximum stacks is reached. Could not reloaded!'
                                });
                            }
                        }
                    }
                });
            }
        })
    }

    var _data = JSON.parse(localStorage.getItem('recents_' + account_id));

    _data = _data['response'];
    _data = _data[0].match_id;

    if (localStorage.getItem('match_' + _data)) {

        build_matchStatus(localStorage.getItem('match_' + _data))

    } else {

        var xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.response;
                res = '{' + '"timestamp"' + ':' + (new Date()).getTime() + ',' + '"response"' + ': ' + res + '}';
                localStorage.setItem('match_' + _data, res);
                build_matchStatus(res);
            }
        }
        xmlhttp.open('GET', 'https://api.opendota.com/api/matches/' + _data, true)
        xmlhttp.send()
    }

    function build_matchStatus(value) {
        var a = JSON.parse(value);
        a = a['response'];
        try {

            for (var i = 0; i < a['players'].length; i++) {
                var ƒƒ = a.players[i];
                var acc_id = ƒƒ.account_id,
                    hero = search.heroes(ƒƒ.hero_id),
                    avatar_ico = '/assets/heroes/125px-' + (hero.localized_name.split(' ')).join('_') + '_Large.png',
                    kda = ƒƒ.kills + '/ ' + ƒƒ.deaths + '/ ' + ƒƒ.assists,
                    net = (ƒƒ.total_gold / 1000).toFixed(2) + ' k';

                $.all('#hero_avatar')[i].src = avatar_ico;

                $.all('#player_name')[i].setAttribute('km-data', acc_id);
                $.all('#player_name')[i].innerHTML = (ƒƒ.personaname || 'Unknown');
                $.all('#hero_name')[i].innerHTML = hero.localized_name;
                $.all('#kda')[i].innerHTML = kda;
                $.all('#networth')[i].innerHTML = net;

            }
    
            $.id('radiant_score').innerHTML = a.radiant_score;
            $.id('dire_score').innerText = a.dire_score;
            $.id('game-mode').innerText = search.mode(a.game_mode).name;
            $.id('lobby-type').innerText = search.type(a.lobby_type).name;
            $.id('timestamp').innerText = Date(a.start_time);
        
        } catch (e) {
        
            $test.error('@test.js: ' + e.message)
        
        }

    }

} catch (e) {
    error_session(e)
}