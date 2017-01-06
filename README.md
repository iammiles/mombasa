## Synopsis

Mombasa is a tiny HTML generator.  Feed it some HTML templates and it'll do the rest for you.  This is a how my simple site,
[https://milesmcdaniel.com](https://milesmcdaniel.com) is made.  While support for markdown is planned, this was never meant
to compete with bigger site generators like jekyll or hugo. 

## Installation

Just clone the repo and run `yarn install`.

$$ Usage

In `index.js` you'll see a few arrays defined.  These are individual pages and their template files.  Below that is a 
const array of objects called `pages`.  Each object has a filename (String) and a files (Array).  You can tweek these to create
your own site.

## TODO / Roadmap
* Make a generic templates
* Add Markdown support for blogging
* Make tests
* Submit to NPM


## License

MIT