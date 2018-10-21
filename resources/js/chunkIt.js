module.exports =function() {
    var raw_text = document.trans.txt.value;
    document.trans.txt.value = "";

    if (raw_text == "") return;

    raw_text = raw_text.replace(/\n/g, " ");

    var texts = raw_text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

    var html = "";

    for (var i = 0; i < texts.length; i++) {
        texts[i] = texts[i].replace(/\"/g, "");

        html += "<textarea class=\"main_text\">" + texts[i] + "<\/textarea><br>"
        html += texts[i] + "<br><br>\n";
    }


    M.toast({ html: '分割しました' })

    var res = document.getElementById("result");
    res.innerHTML = html;

    autosize(document.querySelectorAll('.main_text'));

}