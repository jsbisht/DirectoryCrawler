const fs   = require('fs');
const path = require('path');
const sep  = path.sep;
const locn = path.resolve(__dirname + sep + '..');

/**
 * Represents a folder crawler object.
 */
function CrawlerSync() {
    // Array of files and directories
    this.alldirs   = [];
    this.allfiles  = [];
}

/**
 * PRIVATE FUNCTION
 * Traverse the given directory to build list of subfolder and files.
 * @param {String} directory Name of the directory
 */
CrawlerSync.prototype._crawl = function (directory) {
    var self = this;
    var files = fs.readdirSync(directory).sort();
    files.forEach(function (file) {
        self._sort(directory, file);
    });
};

/**
 * PRIVATE FUNCTION
 * Sort the files and folders.
 * Build the list of files and folders recursively.
 * @param {String} directory Name of the directory
 * @param {String} file Name of file in the directory
 */
CrawlerSync.prototype._sort = function (directory, file) {
    var self = this;
	var dirname  = directory + sep + file;
    var filename = locn + sep + directory + sep + file;
    var stat = fs.statSync(filename);
    if(stat.isDirectory()) {
        self.alldirs.push(filename);
        return self._crawl(dirname);
    }
    else {
        self.allfiles.push(filename);
    }
};

/**
 * Get the list of files and folders 
 * including subfolder and files of the given directory.
 * @param {String} directory Name of the directory being crawled
 * @return {Array} list List of files and folders
 */
CrawlerSync.prototype.getData = function (dirname) {
    var self = this;
    self._crawl(dirname);

    // Save the list of directories and files array
    var list = {
        'dirnames': self.alldirs.sort(),
        'filenames': self.allfiles.sort()
    };
    
    return list;
};

module.exports = CrawlerSync;