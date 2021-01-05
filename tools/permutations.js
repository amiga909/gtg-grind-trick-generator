var http = require('http');
import { run } from '../src/js/permutations'; 
run();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  let results =  run();
  console.log(results)
  res.end(results);
}).listen(1338, "127.0.0.1");
//console.log('Server running at http://127.0.0.1:1338/');


 