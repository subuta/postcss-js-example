# postcss-js-example

# issue
If i call postcss-js with this object(cssInJS definition), 
postcss-js raise error.
 
please see `example.js` for detailed information.

```
[object]
{
    '@media (max-width: 460px)': {
        fontSize: 16
    },
    fontSize: 20
}

[Stack Trace]

TypeError: Cannot read property 'type' of undefined
    at AtRule.normalize (/Users/foo/repo/postcss-js-example/node_modules/postcss/lib/container.js:405:22)
    at AtRule.append (/Users/foo/repo/postcss-js-example/node_modules/postcss/lib/container.js:178:30)
    at AtRule.append (/Users/foo/repo/postcss-js-example/node_modules/postcss/lib/at-rule.js:44:75)
    at /Users/foo/repo/postcss-js-example/node_modules/postcss-js/objectifier.js:12:42
    at Root.each (/Users/foo/repo/postcss-js-example/node_modules/postcss/lib/container.js:60:22)
    at /Users/foo/repo/postcss-js-example/node_modules/postcss-js/objectifier.js:9:14
    at Root.each (/Users/foo/repo/postcss-js-example/node_modules/postcss/lib/container.js:60:22)
    at process (/Users/foo/repo/postcss-js-example/node_modules/postcss-js/objectifier.js:6:10)
    at module.exports (/Users/foo/repo/postcss-js-example/node_modules/postcss-js/process-result.js:10:12)
    at /Users/foo/repo/postcss-js-example/node_modules/postcss-js/sync.js:10:16
```

### how to reproduce

```bash
npm install
npm run example
```