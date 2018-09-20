var navbar = (obj, oid, ocs) => {
    var x = obj,
        id = oid,
        cs = ocs;

    nav = document.querySelector('nav')

    nav.setAttribute("class", "light-blue darken-2")
    nav.setAttribute("role", "navigation")

    nav = document.querySelector('div.nav-wrapper.container')

    ul = document.createElement('ul')

    ul.setAttribute("class", cs);
    ul.setAttribute("id", id);

    nav.appendChild(ul);


    for (var i = 0, mnu = ''; i < x.length; i++) {
        var arr = x[i]
        var pg = arr.page
        var lk = arr.link
        mnu += "<li><a href='" + lk + "'>" + pg + "</a></li>"
    }

    document.getElementById('nav-menu').innerHTML = mnu;

}

navmenu = [{
    page: "မူလစာမ်က္ႏွာ",
    link: "/index.html"
}, {
    page: "ဟီးရိုးမ်ား",
    link: "/heroes.html"
}, {
    page: "ပြဲစဥ္မ်ား",
    link: "/matches.html"
}]

navbar(navmenu, "right hide-on-med-and-down", "nav-menu");
navbar(navmenu, "sidenav", "nav-mobile");