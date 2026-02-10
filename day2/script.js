const fs = require('fs');

//....................writeFile.........................
/*
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('done');
    }
});
*/
//....................appendFile.........................
/*fs.appendFile('output.txt', ' Appended text.', function(err) {
    if (err) 
        console.error(err);
     else 
        console.log('done');
});
*/

//....................rename.........................

fs.rename('output.txt', 'newOutput.txt', function(err){
    if (err)
        console.error(err);
        else
        console.log('done');
})