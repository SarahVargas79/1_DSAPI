function lerDados() {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            divDados = document.getElementById("divDados");
            divDados.innerHTML = this.responseText.split("\n").join("<br>");
        } else if (this.readyState == 4) {
            alert(this.status + " - " + this.statusText);
        }
    };
    req.open("GET", "infos.txt", true);
    req.send()
}

function lerNumber() {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            divNumber = document.getElementById("divNumber");
            divNumber.innerHTML = this.responseText;
        } else if (this.readyState == 4) {
            alert(this.status + " - " + this.statusText);
        }
    };

    var number = document.getElementById("txtValor").value;

    req.open("GET", "servidor.php?valor=" + number, true);
    req.send()
}
