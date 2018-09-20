document.querySelector('button[type=submit].btn').addEventListener('click', function () {
    M.toast({
        html: 'ေဆာင္ရြက္ေနသည္...',
        completeCallback: () => location.replace('/#id=' + (new Date()).getTime())
    })

})