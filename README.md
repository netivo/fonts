# Fonts Module
Module for including fonts to web projects.

## Attached fonts:
#### Icons
- fontawesome
- google - materialdesign
#### Google fonts
- Cabin Sketch
- Cormorant Garamond
- Exo
- Fira Mono
- Fira Sans
- Gentium Basic
- Lato
- Montserrat
- Noto Serif
- Open Sans
- Open Sans Condensed
- Open Sans Hebrew
- Open Sans Hebrew Condensed
- Oswald
- Playfair Display
- Raleway
- Roboto
- Roboto Condensed
- Roboto Mono
- Roboto Slab
- Signika
- Slabo13px
- Source Sans Pro
- Source Serif Pro
- Syncopate
- Titilliumweb
- Ubuntu
- Ubuntu Condensed
- Ubuntu Mono
#### Other
- Chelsea Market
- Dejavu
- Federa Serif Pro
- Futura
- Helevetica
- Multicolore
- Specialelite
- Tillana
- Uni Sans
- Waiting For The Sunshine

## How to use it

The package is prepared for gulp, and works with it only.
To compile fonts you must specify in your package.json a fonts you want to use in format:

`"fonts": "google/roboto, google/opensans",` 

all fonts must specify path from sources folder and be separated by comma ","

Then in your gulpfile you must do something like this:

```javascript
import * as fts from "@netivo/fonts";

export const fonts = fts.fonts;
``` 

__ATENTION__

You must run the gulp by node run command.

To run it by node command, you must in your package.json put something like this:
```json
{
  "scripts": {
    "fonts": "gulp fonts"
  }
}
```

And run it by command `npm run fonts`.