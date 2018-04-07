var openFile = function (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var node = document.getElementById('output');
        node.innerHTML = "<p>" + "<b>" + "TEXT FILE CONTENT" + "</b>" + "</p>";
        var text = reader.result;
        node.innerHTML += text;
        node.innerHTML += "<p>" + "<b>" + "DESCRIPTION LINKS:" + "</b>" + "</p>";
        var arrayOfStrings = text.split(/[^a-zA-Z0-9]+/);//split(/[.,-;'\s\n\0]+/);//split("\\P{Alpha}+");//split("\\W+");//;
        var i;
        for (i = 0; i < arrayOfStrings.length; i++) {
            var res = arrayOfStrings[i];
           
            var l = document.createElement('a');
            var linkText = document.createTextNode(res);
            l.appendChild(linkText);
            l.title = "WiKiPedia Link";
            l.href = "https://en.wikipedia.org/wiki/" + res;
            l.target = "iframe1";
            if (res)
                node.appendChild(l);

            var l1 = document.createElement('a');
            var linkText = document.createTextNode(res);
            l1.appendChild(linkText);
            l1.title = "Oxford Dictionary Link";
            l1.setAttribute("id", "oxf");
            l1.href = "https://dictionary.cambridge.org/dictionary/english/" + res;
            l1.target = "iframe1";
            if (res)
                node.appendChild(l1);
        }
    };
    reader.readAsText(input.files[0]);
};

var fun = function pro() {
    var lname = document.getElementById('lastname').value;
    var node = document.getElementById('result');
    node.innerHTML = "<p>" + "COPIED TEXT CONTENT:" + "</p>";
    node.innerHTML += lname;
    node.innerHTML += "<p>" + "<b>" + "DESCRIPTION LINKS:" + "</b>" + "</p>";
    var i;
    var arr = lname.split(/[^a-zA-Z0-9]+/);
    for (i = 0; i < arr.length; i++) {
        var res = arr[i];
        var l = document.createElement('a');
        var linkText = document.createTextNode(res);
        l.appendChild(linkText);
        l.title = "WiKi Link";
        l.href = "https://en.wikipedia.org/wiki/" + res;
        l.target = "iframe1";
        if(res)
        node.appendChild(l);

        var l1 = document.createElement('a');
        var linkText = document.createTextNode(res);
        l1.appendChild(linkText);
        l1.title = "Cambridge Dictionary Link";
        l1.setAttribute("id", "oxf");
        l1.href = "https://dictionary.cambridge.org/dictionary/english/" + res;
        l1.target = "iframe1";
        if (res)
            node.appendChild(l1);
    }
}