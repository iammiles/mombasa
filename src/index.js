const fs = require('fs');

const TEMPLATE_DIR = './templates/';
const BUILD_DIR = './dist/';

const homepage = [
  'header.html',
  'navigation.html',
  'body_about.html',
  'footer.html'
];

const recomendations = [
  'header.html',
  'navigation.html',
  'body_recommendations.html',
  'footer.html'
];

const projects = [
  'header.html',
  'navigation.html',
  'body_projects.html',
  'footer.html'
];

const resume = ['header.html', 'resume.html', 'footer.html'];

const resumeDetails = ['header.html', 'resumelong.html', 'footer.html'];

const pages = [
  {
    filename: 'index.html',
    files: homepage
  },
  {
    filename: 'projects.html',
    files: projects
  },
  {
    filename: 'recommendations.html',
    files: recomendations
  },
  {
    filename: 'resume.html',
    files: resume
  },
  {
    filename: 'resumelong.html',
    files: resumeDetails
  }
];

/**
 * Recursively iterates over a list of template files that make up a page.
 * Returns true if it couldn't find a specified file
 * @param {Array} filesToCheck
 * @param {Array} erroredFiles
 * @returns {Boolean} error
 */
const templateValidation = (filesToCheck, error = false) => {
  if (filesToCheck.length === 0) {
    return error;
  }
  const [first, ...rest] = filesToCheck;
  if (!fs.existsSync(TEMPLATE_DIR + first)) {
    console.warn(`Could not find file: ${first} in ${TEMPLATE_DIR}!`);
    // since this param is not being passed in, we'll ignore the no-param-reassign rule
    /* eslint no-param-reassign: 0 */
    error = true;
  }
  return templateValidation(rest, error);
};

/**
 * Given an Array of filenames, synchronously read them through them by mapping over
 * the array, and then reduce it to a single concatenated string.
 * @param {Array} files
 * @returns {String}
 */
const createHTML = files =>
  files
    .map(file => fs.readFileSync(TEMPLATE_DIR + file, 'utf-8'))
    .reduce((a, b) => a + b);

/**
 * Iterate over all the pages to create and if there are no errors
 * write them to the specified build directory (BUILD_DIR)
 * @param {Array} <Objects> pagesToCreate
 * @returns HTML file
 */
const createSite = pagesToCreate => {
  pagesToCreate.forEach(page => {
    const errors = templateValidation(page.files);
    if (!errors) {
      fs.writeFile(BUILD_DIR + page.filename, createHTML(page.files), err => {
        if (err) throw err;
        console.log(`Succesfully created ${page.filename} in ${BUILD_DIR}.`);
      });
    } else {
      console.error(`Failed to build ${page.filename}!`);
    }
  });
};

createSite(pages);
