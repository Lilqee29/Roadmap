# NumberDescriber

Simple utilities to describe numbers: whether a number is positive, negative, zero, even, or odd.

## Files

- `index.Js` — Core helpers and the `describeNumber(number)` function.

## Usage

Open the file `index.Js` and call `describeNumber(number)` with a number. Example result:

```
describeNumber(5)
// => { positive: true, negative: false, zero: false, even: false, odd: true }
```

## Notes

- The implementation exposes small predicate helpers used by `describeNumber`.
- To test quickly, copy the function into a Node REPL and call it with different values.
