/**
 * minifyCSS
 * @param content => Type: String
 * Thanks to http://stackoverflow.com/questions/4402220/regex-to-minimize-css
 */

 function minifycss(content) {
     // Remove all comments, newlines and tabs
     return content.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
     // Join gaps together
     .replace(/\s+/g, ' ')
     // Close gaps between css property names, property values and rules
     .replace(/([,:;{}])\s/g, '$1')
     // close gaps between prop name and open braces
     .replace(/\s{/g, '{')
     // Transform `color: red !important` to `color: red!important `
     .replace(/\s!/g, '!')
     // Close gap between media and parenthesis
     .replace(/@media \(/g, '@media(')
     // Remove Last semi-colon (not needed)
     .replace(/;}/g, '}');
 }

export default minifycss;
