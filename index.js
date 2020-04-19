var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./reportform.html', 'utf8');
var options = { format: 'Letter' };
html=html.replace("#JOBID"," ABC");
html=html.replace("#JOBADDR"," 123 Edmond St,<br/> Toronto 123 MNY");
html=html.replace("#TENANTDETAIL"," James Cook");

pdf.create(html, options).toFile('./invoice/businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});