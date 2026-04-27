# PGM VII Homeric Oracle

A small static web page for the Homeric oracle table in PGM VII.1-148.

The page generates three random numbers from 1 to 6, then looks up the matching oracle line in the order rolled. For example, `4, 2, 4` looks up `4-2-4`.

## Notes

- Source table: `PGM VII.1-148 荷马神谕占卜（补）`.
- The source table used here has 215 available entries.
- The `5-1-1` entry is missing in the source table, and the app shows a clear missing-entry message if it is rolled.

## Local Use

Open `index.html` directly in a browser. No build step is required.
