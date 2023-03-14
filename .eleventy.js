const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const tocExtract = require("toc-extract/plugins/eleventy.js")
const markdownItScrollTable = require('markdown-it-scrolltable');

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
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#",
      level: [1,2,3,4],
    }),
    slugify: config.getFilter("slug")
  }).use(markdownItScrollTable);
  config.addPlugin(tocExtract, {listElement: "ol", minLevel: 1})
  config.setLibrary("md", markdownLibrary);
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  }
}
