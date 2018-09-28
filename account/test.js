const $_ACCOUNT = [];
request('/heroes.json');



// me - 373924056 || app - 326044547 || pai - 349652911 || aba - 896811688
getMatchesFor = (playerid) => {
    xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            _data = JSON.parse(this.responseText)
            _data = _data[0].match_id;
            request('https://api.opendota.com/api/matches/' + _data);

            init();

        }
    }
    xmlhttp.open('GET', 'https://api.opendota.com/api/players/' + playerid + '/recentMatches', true)
    xmlhttp.send()
}

getMatchesFor((location.search).slice(1));



w = (x, n, t) => document.querySelectorAll(x)[n].innerText += t;

init = () => {
    var retry = setTimeout(init, 120);

    try {
        a = $_ACCOUNT[1];
        a = a.players;
        b = a.length;

        var i;
        for (i = 0; i < b; i++) {
            ƒƒ = a[i];
            k = [ƒƒ.account_id,
                search.heroes(ƒƒ.hero_id),
                (ƒƒ.kills + '/' + ƒƒ.deaths + '/' + ƒƒ.assists),
                (ƒƒ.total_gold / 1000).toFixed(2) + ' k'
            ]

            console.log(k)

            document.querySelectorAll('li#km-data')[i].setAttribute('km-data', k[0]);

            w('span#hero_name', i, k[1].localized_name);
            w('span#player_data', i, 'KDA: ' + k[2] + '\n');
            w('span#player_data', i, 'Networth: '+ k[3] + '\n');
        }
        
        clearTimeout(retry);

    } catch (e) {
        retry;
        console.debug((new Date()).getTime(),e.message)
        return ""
    }
}



/*
    x.innerText += JSON.stringify(a.start_time) + '\n';
    x.innerText += JSON.stringify(a.match_id) + '\n';
    x.innerText += JSON.stringify(a.radiant_score) + '\n';
    x.innerText += JSON.stringify(a.dire_score) + '\n';
    x.innerText += JSON.stringify(a.duration) + '\n';
    x.innerText += JSON.stringify(a.game_mode) + '\n';
    x.innerText += JSON.stringify(a.region) + '\n';
    x.innerText += JSON.stringify(a.skill) + '\n';

    x.innerText += JSON.stringify(a.players) + '\n';

    x.innerText += JSON.stringify(a.objectives) + '\n';
    x.innerText += JSON.stringify(a.teamfights) + '\n';

    x.innerText += JSON.stringify(a.version) + '\n';
*/