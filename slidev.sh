#!/bin/bash

case "$1" in
build)
  for i in $(find presentations -name '*.md' -exec basename {} .md \;); do
    slidev build "./presentations/$i.md" -d --base "/presentations/$i/" --out "../dist/$i/"
  done
  ;;
dev)
  slidev --open "./presentations/$2.md"
  ;;
export)
  mkdir -p pdf
  for i in $(find presentations -name '*.md' -exec basename {} .md \;); do
    slidev export "./presentations/$i.md" --output "./pdf/$i.pdf" --timeout 1000000
  done
  ;;
*) ;;
esac
