#!/usr/bin/env bash
npm run demo:prepublish
cd gh-pages
git init
git add -A
git commit -m 'update gh-pages'
git push -f https://github.com/vue-element-multiple/popover.git master:gh-pages