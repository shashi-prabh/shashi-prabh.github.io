var this_js_script = $('script[src*=replacetext]'); // or better regexp to get the file name..
var fname = this_js_script.attr('data-fname');   
if (typeof fname === "undefined" ) {
   var fname = 'NULL';
}
alert(fname); // to view the variable value
fetch(fname)
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_me");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
