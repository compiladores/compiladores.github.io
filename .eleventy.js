const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const tocExtract = require("toc-extract/plugins/eleventy.js")

module.exports = (config) => {
  config.addPassthroughCopy({ 'public': './' })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(require('markdown-it-header-sections'))
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#",
      level: [1,2,3,4],
    }),
    slugify: config.getFilter("slug")
  })
  .use(require('markdown-it-scrolltable'))
  ;
  config.addPlugin(tocExtract, {listElement: "ol", minLevel: 1, tags:["section"]})
  config.setLibrary("md", markdownLibrary);
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  }
}
