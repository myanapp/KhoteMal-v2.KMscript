var q = (location.hash).slice(1);
var r = q.split('=');

let user = 'Hever Goreat We Or Em'

if (q != null) {
    M.toast({
        html: '<span>မဂၤလာပါ ' + user + '</span><button class="btn-flat toast-action"onclick="  M.Toast.dismissAll()">ပယ္ဖ်က္</button>',
        inDuration: 800,
        activationPercent: 1
    })
}