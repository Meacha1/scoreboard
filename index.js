let H_sc = 0;
function H_sc1() {
    H_sc++;
    document.getElementById("home-sc").innerText = H_sc;
}
function H_sc2() {
    H_sc +=2;
    document.getElementById("home-sc").innerText = H_sc;
}
function H_sc3() {
    H_sc +=3;
    document.getElementById("home-sc").innerText = H_sc;
}

let G_sc = 0;

function G_sc1() {
    G_sc++;
    document.getElementById("gust-sc").innerText = G_sc;
}
function G_sc2() {
    G_sc +=2;
    document.getElementById("gust-sc").innerText = G_sc;
}
function G_sc3() {
    G_sc +=3;
    document.getElementById("gust-sc").innerText = G_sc;
}