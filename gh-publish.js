const ghpages = require('gh-pages');
const fs = require('fs-extra');
const path = require('path');

const sourceFolder = 'public';
const destinationFolder = 'public-gh';

try {
    // Delete the destination folder if it exists (synchronously)
    fs.removeSync(destinationFolder);
    console.log(`Deleted destination folder "${destinationFolder}" successfully.`);
  
    // Copy the source folder to the destination folder (synchronously)
    fs.copySync(sourceFolder, destinationFolder);
    console.log(`Folder "${sourceFolder}" copied to "${destinationFolder}" successfully.`);
  } catch (err) {
    console.error('Error:', err);
  }


  
const headerIndex = fs.readFileSync(__dirname + "/public/header_index.html", "utf8");
const bodyIndex = fs.readFileSync(__dirname + "/public/index_no_header.html", "utf8");
 
fs.writeFileSync( path.join(destinationFolder, 'index.html') , headerIndex + bodyIndex);

const headerTricktionary = fs.readFileSync(__dirname + "/public/header_tricktionary.html", "utf8");
 
 
fs.writeFileSync( path.join(destinationFolder, 'tricktionary.html') , headerIndex + bodyIndex);

//ghpages.publish('public-gh', function(err) {});