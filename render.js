var roaster = require("roaster")
    fs = require("fs"),
    glob = require("glob"),
    options = {
      isFile: true
    };

glob("*.md", {}, function (err, files) {
  files.forEach(function (file) {
    var outfile = file.replace(/\.md$/, '.html');
    roaster(file, options, function (err, contents) {
      fs.writeFileSync(outfile, contents, "utf8");
    });
    console.log(file, '->', outfile);
  });
});
