const path = require('path');
const sep = path.sep;
var locn = path.resolve(__dirname + sep + '..' + sep + '..');

/**
 * Represents a folder object.
 * @constructor
 * @param {Array} dirnames List of directories in a given folder.
 * @param {Array} filenames List of file names in a given folder.
 */
function Folder(dirnames, filenames) {
	this.dirnames  = dirnames;
	this.filenames = filenames;
}

/**
 * folder1 has nested folders and files with different types of names
 * @type {Array}
 */
var folder1Dirs = [
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'lib',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'lib' + sep + 'tools',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'reports',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'alternate',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'alternate' + sep + 'path',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'deep',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'deep' + sep + 'path',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'deep' + sep + 'path' + sep + 'to',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'deep' + sep + 'path' + sep + 'to' + sep + 'files',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'short',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'short' + sep + 'little',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'short' + sep + 'little' + sep + 'path',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'tools' ];

var folder1Files = [ 
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + '.gitignore',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + '.jshintrc',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'README.md',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'gulpfile.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'lib' + sep + 'Context.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'lib' + sep + 'fs-crawler.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'lib' + sep + 'tools' + sep + 'fs.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'lib' + sep + 'tools' + sep + 'options.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'lib' + sep + 'tools' + sep + 'path.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'package.json',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'reports' + sep + 'converage.json',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'reports' + sep + 'coverage.svg',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs-crawler.spec.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'brocken-link.log',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'level-0-0.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'alternate' + sep + 'path' + sep + 'level-3-0.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'alternate' + sep + 'path' + sep + 'working-link.log',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'deep' + sep + 'path' + sep + 'level-3-1.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'long' + sep + 'deep' + sep + 'path' + sep + 'to' + sep + 'files' + sep + 'level-5-0.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'short' + sep + 'level-1-1.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'short' + sep + 'little' + sep + 'path' + sep + 'level-3-2.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'fs' + sep + 'working-link.log',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'test-async-path.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'test-async-tree.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'test-sync.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'tools' + sep + 'context.spec.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder1' + sep + 'test' + sep + 'tools' + sep + 'fs.spec.js' ];
var folder1 = new Folder(folder1Dirs, folder1Files);

/**
 * folder2 doesnt contain any folder or file
 * @type {Array}
 */
var folder2Dirs = [];
var folder2Files =  [];
var folder2 = new Folder(folder2Dirs, folder2Files);

/**
 * folder3 contains only one file
 * @type {Array}
 */
var folder3Dirs = [];
var folder3Files =  [ locn + sep + 'data' + sep + 'folder' + sep + 'folder3' + sep + 'file1.txt' ];
var folder3 = new Folder(folder3Dirs, folder3Files);

/**
 * folder4 contains only one folder and file within that folder
 * @type {Array}
 */
var folder4Dirs =  [ locn + sep + 'data' + sep + 'folder' + sep + 'folder4' + sep + 'newfolder' ];
var folder4Files =  [ locn + sep + 'data' + sep + 'folder' + sep + 'folder4' + sep + 'newfolder' + sep + 'file1.txt' ];
var folder4 = new Folder(folder4Dirs, folder4Files);

/**
 * folder5 contains only folder and file with their names containing spaces and accented charecters
 * @type {Array}
 */
var folder5Dirs =  [ 
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'folder name with spaces',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'newfolder' ];

var folder5Files =  [ 
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'file name with spaces.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'folder name with spaces' + sep + 'file name with spaces.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'folder name with spaces' + sep + 'list-dir-files-test.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'folder name with spaces' + sep + 'noextension',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'folder name with spaces' + sep + 'testuções.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'list-dir-files-test.js',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'newfolder' + sep + 'file1.txt',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'noextension',
locn + sep + 'data' + sep + 'folder' + sep + 'folder5' + sep + 'testuções.txt'  ];

var folder5 = new Folder(folder5Dirs, folder5Files);

/**
 * folder6 contains only one folder and file within that folder
 * @type {Array}
 */
var folder6Dirs  =  [ locn + sep + 'data' + sep + 'folder' + sep + 'folder6' + sep + 'empty' ];
var folder6Files =  [ ];
var folder6 = new Folder(folder6Dirs, folder6Files);

/**
 * Folders object containing demo folders path
 */
var folders = {
	'folder1': folder1,
	'folder3': folder3,
	'folder4': folder4,
	'folder5': folder5,
	'folder6': folder6
};

module.exports = folders;