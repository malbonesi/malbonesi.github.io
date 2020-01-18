module.exports = function(config) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  config.addPassthroughCopy("src/img")
  
  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  //config.addPassthroughCopy("src/css/*.css")
  config.addPassthroughCopy("src/js/*")
    
  return {
    dir: {input: 'src', output: 'dist'},
    templateFormats: ["md","njk"]
  }
}
