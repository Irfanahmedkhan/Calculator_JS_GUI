
function button(num) {

    document.form.result.value = document.form.result.value + num;
}

function equalbtn() {

    var eql = document.form.result.value;

    if (eql) {
        document.form.result.value = eval(eql);
    }
}

function remove() {
    document.form.result.value = '';
}

function backbtn() {
    var back = document.form.result.value;
    document.form.result.value = back.substring(0, back.length - 1);
}
