var url = "https://ciprand.p3p.repl.co/api?len=20&count=10";


$.getJSON(url, function (data) {
 var output = data.Strings;

 display.innerHTML = `
${output[0]} <br><br>
${output[1]} <br><br>
${output[2]} <br><br>
${output[3]} <br><br>
${output[4]} <br><br>
${output[5]} <br><br>
${output[6]} <br><br>
${output[7]} <br><br>
${output[8]} <br><br>
${output[9]} <br>`;  

});