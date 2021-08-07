/**
 * Methods used from mithril/stream
 * Definitions copied here to prevent clashes between Mithril and React component definitions
 */

declare module "mithril/stream" {
  // tslint:disable:rulename strict-export-declare-modifiers
  /** Creates an empty stream. */
  function Stream<T>(): Stream<T>; // tslint:disable-line no-unnecessary-generics
  /** Creates a stream with an initial value. */
  function Stream<T>(value: T): Stream<T>; // tslint:disable-line unified-signatures

  interface Stream<T> {
    /** Returns the value of the stream. */
    (): T;
    /** Sets the value of the stream. */
    (value: T): this;
    /** Creates a dependent stream whose value is set to the result of the callback function. */
    map<U>(f: (current: T) => U | typeof Stream.SKIP): Stream<U>;
    /** This method is functionally identical to stream. It exists to conform to Fantasy Land's Applicative specification. */
    of(val: T): Stream<T>;
    /** Apply. */
    ap<U>(f: Stream<(value: T) => U>): Stream<U>;
    /** A co-dependent stream that unregisters dependent streams when set to true. */
    end: Stream<boolean>;
    /** When a stream is passed as the argument to JSON.stringify(), the value of the stream is serialized. */
    toJSON(): string;
    /** Returns the value of the stream. */
    valueOf(): T;
  }

  namespace Stream {
    /** Creates a computed stream that reactively updates if any of its upstreams are updated. */
    export function combine<T>(
      combiner: (...streams: unknown[]) => T,
      streams: Array<Stream<unknown>>
    ): Stream<T>;
    /** Combines the values of one or more streams into a single stream that is updated whenever one or more of the sources are updated */
    export function lift<S extends unknown[], T>(
      fn: (...values: S) => T,
      ...streams: { [I in keyof S]: Stream<S[I]> }
    ): Stream<T>;
    /** Creates a stream whose value is the array of values from an array of streams. */
    export function merge<S extends unknown[]>(
      streams: { [I in keyof S]: Stream<S[I]> }
    ): Stream<{ [I in keyof S]: S[I] }>;
    /** Creates a new stream with the results of calling the function on every incoming stream with and accumulator and the incoming value. */
    export function scan<T, U>(
      fn: (acc: U, value: T) => U,
      acc: U,
      stream: Stream<T>
    ): Stream<U>;
    /** Takes an array of pairs of streams and scan functions and merges all those streams using the given functions into a single stream. */
    export function scanMerge<T, U>(
      pairs: Array<[Stream<T>, (acc: U, value: T) => U]>,
      acc: U
    ): Stream<U>;
    /** Takes an array of pairs of streams and scan functions and merges all those streams using the given functions into a single stream. */
    export function scanMerge<U>(
      pairs: Array<[Stream<unknown>, (acc: U, value: unknown) => U]>,
      acc: U
    ): Stream<U>;
    /** A special value that can be returned to stream callbacks to skip execution of downstreams. */
    export const SKIP: unique symbol;
  }

  export = Stream;
}
