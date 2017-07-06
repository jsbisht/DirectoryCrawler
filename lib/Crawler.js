const fs   = require('fs');
const path = require('path');
const sep  = path.sep;
const locn = path.resolve(__dirname + sep + '..');

/**
 * Represents a folder crawler object.
 */
function Crawler() {
    // Array of files and directories
    this.alldirs   = [];
    this.allfiles  = [];

    this.crawlingCompleted = null;
    this.filesCount = 1;
}

/**
 * Traverse the given directory to build list of subfolder and files.
 * @param {String} directory Name of the directory
 */
Crawler.prototype.crawl = function (directory, isParentDir) {
    var self = this;
    var deferred = Promise.defer();
    if(isParentDir) {
        self.crawlingCompleted = deferred.resolve;
    }
    
    (function(deferred, directory, isParentDir) {
        fs.readdir(directory, function (err, files) {
            if(err) {
                console.error(err);
            }
            else {
                var files = files.sort();
                var size  = files.length - 1;
                var isEmptyDir = isParentDir && files.length === 0;
                files.forEach(function (file, index) {
                    self._sort(directory, file, size, index);
                });
                
                self.filesCount += files.length;
                self.filesCount--;
                if((self.filesCount === 0) || isEmptyDir) {
                    self.crawlingCompleted();
                }
                else if(!isParentDir) {
                    deferred.resolve();
                }
            }
        });
    })(deferred, directory, isParentDir);

    return deferred.promise;
};

/**
 * PRIVATE FUNCTION
 * Sort the files and folders.
 * Build the list of files and folders recursively.
 * @param {String} directory Name of the directory
 * @param {String} file Name of file in the directory
 */
Crawler.prototype._sort = function (directory, file, size, index) {
    var self = this;
	var dirname  = directory + sep + file;
    var filename = locn + sep + directory + sep + file;
    (function(dirname, filename) {
        fs.stat(dirname, function(err, stat) {
            if(err) {
                console.error(err);
            }
            else {
                if(stat.isDirectory()) {
                    self.alldirs.push(filename);
                    return self.crawl(dirname);
                }
                else {
                    if(index === size) {
                        self.allfiles.push(filename);
                    }
                    else {
                        self.allfiles.push(filename);
                    }
                    self.filesCount--;
                    if(self.filesCount === 0) {
                        self.crawlingCompleted();
                    }
                }
            }
        });
    })(dirname, filename);
};

/**
 * Prepare the data before returning to the calling function
 * @return {Promise} Returns a promise which would return the data
 */
Crawler.prototype.getData = function (resolve) {
    var self = this;

    // Save the list of directories and files array
    var list = {
        'dirnames': self.alldirs.sort(),
        'filenames': self.allfiles.sort()
    };
    
    resolve(list);
};

module.exports = Crawler;