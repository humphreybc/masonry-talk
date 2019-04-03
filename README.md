# masonry-talk

A talk for SydCSS about the state of masonry layouts in 2019.

## Constraints

1. Items must be in a ‘brick’ layout, like Pinterest.
1. The order must go horizontal, from left to right, not top to bottom.
1. The width and height of each item is dynamic, not fixed.
1. The number of columns adjusts based on the container width.

## Other techniques

- Using table and setting colspan (similar to grid).
- Using position absolute and setting width / height appropriately.

## Houdini Pros

- Gives you the freedom to create your own visual effects / layout.
- Doesn’t rely on adding extra elements or pseudo-elements to the DOM.
- Executes as part of your browsers rendering pipeline for greater efficiency.
- More efficient and less buggy than polyfills.
- Provides an alternative to using complex / hacky CSS to achieve certain results.
- Solves future browser support issues by allowing developers to use new features before browsers implement them.
- All five major browser vendors intend to support Houdini.

## Houdini Cons

- Large pieces of Houdini are still in development.
- Houdini itself requires good browser support before it can start alleviating future browser support issues.
- Current dev tools do not support setting breakpoints or using the debugger statement in a paint worklet (although you can still use console.log()).

## Resources

- [Creating a Responsive Pure CSS Masonry Layout](https://w3bits.com/css-masonry)
- [Left-to-right Masonry Layout using CSS Grid](https://w3bits.com/css-grid-masonry)
- [Pure CSS Masonry in 2018?](https://regisphilibert.com/blog/2017/12/pure-css-masonry-layout-with-flexbox-grid-columns-in-2018/)
- [Easy CSS Masonry Layout w/ Left-To-Right Content Flow](https://hackernoon.com/masonry-layout-technique-react-demo-of-100-css-control-of-the-view-e4190fa4296)
- [@heydovetail/react-masonry-responsive](https://github.com/heydovetail/react-masonry-responsive)
- [Say Hello to Houdini and the CSS Paint API](https://codersblock.com/blog/say-hello-to-houdini-and-the-css-paint-api/)
- [CSS Houdini Experiments](https://css-houdini.rocks/)
- [Houdini sample masonry layout](https://googlechromelabs.github.io/houdini-samples/layout-worklet/masonry/)
- [Is Houdini ready yet?](https://ishoudinireadyyet.com/)
- [Houdini Spellbook](http://houdini.glitch.me/)

## Talk notes

- CSS Houdini aims to give developers direct access to the browser’s CSS engine.
- You can define custom CSS features that run efficiently within the browser’s native rendering pipeline.
- Definitions are in JS files called ‘worklets’.
- Worklets have limited scope and functionality and can’t access the DOM.
- There are multiple parts to Houdini – the Layout API, Paint API, Parser API, etc.

### Component checklist

- [x] Flex example
- [x] Grid example
- [x] Columns example
- [x] Custom columns
- [x] CSS Houdini example
- [x] Title slide components
- [x] Checklist components
- [x] Intro and summary slides
- [x] Screenshot of Pinterest
- [x] Outro slide with name, website, @hidovetail

### Misc prep

- [x] Import houdini masonry worklet locally
- [ ] Comment out all CSS and JS enhancements
- [ ] Default columns count to 4 for Columns and Houdini
- [ ] Use Firefox / Safari for non-Houdini support
- [ ] Show screenshot of Pinterest
- [ ] Hide file tree in VSCode
- [ ] Zoom in in VSCode
