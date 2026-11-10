# Home budget app

A phone web app for recording household spending and income. Entries are kept on the phone and in a Google Sheet in your own Google account.

## Files
- index.html: the app
- sw.js: lets the app open with no internet
- manifest.webmanifest and the icon files: let the app install on a phone
- .nojekyll: stops GitHub from changing the files
- README.md: this file

## Publish (GitHub Pages)
Upload all the files to the top level of a public repository, then in Settings, Pages, choose Deploy from a branch, main, and / (root).

## Install on a phone
iPhone: open the address in Safari, Share, Add to Home Screen.
Android: open the address in Chrome, then Install app.

## Before every release
Change the version in index.html. Change the cache name in sw.js. Check sw.js is not empty.
