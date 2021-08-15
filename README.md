# mithril-stream-standalone

Standalone package of [mithril/stream](https://github.com/MithrilJS/mithril.js) for libraries and applications that use Mithril Stream without the rest of Mithril.

## Rationale

When `mithril/stream` is used in a React application, Mithril's types will conflict with React's. This package eliminates the need for Mithril's types to be installed, avoiding those conflicts.

The code in this package also does not assume `window` to be present, making it suitable for SSR applications (for example created with SvelteKit).

## Usage

### Installation

```bash
npm install mithril-stream-standalone
```

### Import

Change the regular import when using Mithril:

```js
import Stream from 'mithril/stream';
```

to: 

```js
import Stream from "mithril-stream-standalone";
```

## Source

This repo contains copies of Mithril code.

* [stream](https://github.com/MithrilJS/mithril.js/tree/next/stream)
* [index.d.ts](https://github.com/MithrilJS/mithril.d.ts/blob/master/stream/index.d.ts)
* [Test files](https://github.com/MithrilJS/mithril.js/tree/next/stream/tests)


## License

[Mithril license](https://github.com/MithrilJS/mithril.js/blob/next/LICENSE)

