# mithril-stream-standalone

Standalone package of [mithril/stream](https://github.com/MithrilJS/mithril.js).

## Rationale

When mithril/stream is used in a React application, Mithril's types conflict with React's. This package eliminates the need for Mithril's types to be installed.

## Usage

### Installation

```bash
npm install mithril-stream-standalone
```

### Import

Replace regular import

```js
import Stream from 'mithril/stream';
```

with: 

```js
import Stream from "mithril-stream-standalone";
```

## Source

This repo contains copies of Mithril code.

* [stream](https://github.com/MithrilJS/mithril.js/tree/next/stream)
* [index.d.ts](https://github.com/MithrilJS/mithril.d.ts/blob/master/stream/index.d.ts)


## License

[Mithril license](https://github.com/MithrilJS/mithril.js/blob/next/LICENSE)

