# Get list of files and directories

## Running on node command line
Enter node command line using following command:

> node


Now run the following command to test the module, by passing in folder in current directory whose files have to be listed.

**asynchronously**

    require('./index.js').getFilesList('data/test_dir').then((data) => {console.dir(data);});

**synchronously**

    require('./index.js').getFilesListSync('data/test_dir');


## Running tests for directory crawler
Enter following command to run tests for directory crawler:

> npm test