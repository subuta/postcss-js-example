var postcssJs = require('postcss-js');

// create no-plugin processor
var postcss = postcssJs.sync([]);

var result = {};

// #1 good!(style def and at-rules)
// result = postcss({
//     fontSize: 20,
//     '@media (max-width: 460px)': {
//         fontSize: 16
//     }
// });

// #2 also good!(at-rules only)
// result = postcss({
//     '@media (max-width: 460px)': {
//         fontSize: 16
//     }
// });

// #3 problem(at-rules and style def) ...
result = postcss({
    '@media (max-width: 460px)': {
        fontSize: 16
    },
    fontSize: 20
});

console.log(result);