//* TESTING *
const $test = {
    delay: [],
    error: function (x) {
        document.getElementById('error').innerHTML +=
            '<li style="animation: error 800ms ease 200ms both;">' + x +
            '</li>';
    }
}