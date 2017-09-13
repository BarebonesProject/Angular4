var templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*)/gm;
var stylesRegex = /styleUrls\s*:(\s*\[[^\]]*?\])/g;
var stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;

var through = require('through2');
var path = require('path');

module.exports = function(file)
{
    var entierFile = [];
    return through(function(part, enc, next) {
        entierFile.push(part);
        next();
    }, function(done) {
        this.push(go({
            source: entierFile.join(''),
            address: file
        }));
        done();
    })
}

function go(load)
{
    if(load.source.indexOf('moduleId') != -1)
        return load.source;
    
    load.address = path.dirname(load.address.substr(path.join(__dirname, '..', 'frontend').length).replace(/\\/img, '/')).toString();
    return load.source.replace(templateUrlRegex, function(match, quote, url){
        var resolvedUrl = '/';

        if(url.startsWith('.'))
            resolvedUrl = load.address + url.substr(1);

        return 'templateUrl: "' + resolvedUrl + '"';
    })
    .replace(stylesRegex, function(match, relativeUrls) {
        var urls = [];

        while((match = stringRegex.exec(relativeUrls)) !== null)
        {
            if(match[2].startsWith('.'))
                urls.push('"' + load.address + match[2].substr(1) + '"');
            else
                urls.push('"' + match[2] + '"');
        }

        return "styleUrls: [" + urls.join(', ') + "]";
    });
}