const path = require('path');

/**
 * Represents a filepath processor object.
 */
function FilePath() {

}

/**
 * Replace path seperator as per current platform
 * @param {String} filepath path of the file/directory
 */
FilePath.prototype.normalisePath = function(filepath) {
    var sep = path.sep === '/' ? '\\\\' : '\/';
    var pathSplit = filepath.split(sep);
    var normalisedPath = pathSplit.join(path.sep);
    return normalisedPath;
};

var filepath = new FilePath();

module.exports = filepath;