// me - 373924056 || app - 326044547 || pai - 349652911 || aba - 896811688

const $_ACCOUNT = [],
    last_Match = (x) => {
        xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                _data = JSON.parse(this.responseText);
                $_ACCOUNT.push(_data);

                analyze_response();

            }
        }
        xmlhttp.open('GET', x, true)
        xmlhttp.send()
    },
    player_recents = (playerid) => {
        xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                _data = JSON.parse(this.responseText)
                _data = _data[0].match_id;
                last_Match('https://api.opendota.com/api/matches/' + _data);
            }
        }
        xmlhttp.open('GET', 'https://api.opendota.com/api/players/' + playerid + '/recentMatches', true)
        xmlhttp.send()
    }

player_recents((location.search).slice(1));

analyze_response = () => {

    let a = $_ACCOUNT[0].players,
        b = a.length;
    var i;

    for (i = 0; i < b; i++) {
        var ƒƒ = a[i];
        var acc_id = ƒƒ.account_id,
            hero = search.heroes(ƒƒ.hero_id),
            avatar_ico = '/assets/heroes/125px-' + (hero.localized_name.split(' ')).join('_') + '_Large.png',
            kda = ƒƒ.kills + '/ ' + ƒƒ.deaths + '/ ' + ƒƒ.assists,
            net = (ƒƒ.total_gold / 1000).toFixed(2) + ' k';

        $.all('#km-data')[i].setAttribute('km-data', acc_id);
        $.all('#hero_avatar')[i].src = avatar_ico;

        $.all('#player_name')[i].innerHTML = (ƒƒ.personaname||'<font style="cursor:not-allowed;font-weight:300;" size="2px" color="#a0a0a0">Unknown</font>');
        $.all('#hero_name')[i].innerHTML = hero.localized_name;
        $.all('#player_data')[i].innerHTML = 'KDA: ' + kda;
        $.all('#player_data')[i].innerHTML = 'Networth: ' + net;
    }

}