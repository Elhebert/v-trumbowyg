v-Trumbowyg
============

VueJS component for the [Trumbowyg](http://alex-d.github.io/Trumbowyg/) editor.

# Requirements

- VueJS 2.0 (for VueJS 1, use [this version](https://github.com/Elhebert/v-trumbowyg/tree/vuejs-1))
- jQuery
- Trumbowyg
- expose-loader
- sass-loader
- node-sass

# Getting starting

## Clone the repository

- `cd v-trumbowyg` to go into the project's root directory
- Happy coding

# Usage

> This has been tested only with the vue-template/webpack.

First install the different packages: `npm i -S node-sass sass-loader expose-loader jquery trumbowyg`.

In the main js file, you need to expose **jQuery** using the expose-loader, otherwise, **trumbowyg** won't be able to use jQuery.
To do so, simply add `import 'expose?$!expose?jQuery!jquery'` on top your js entry file.

Then simply copy the *Trumbowyg.vue* file into your VueJS application.

PS: A better (simpler) installation process should be possible. But for the moment, this is the best I can do.

```
<template>
  <div id="app">
    <trumbowyg :content="html" svgPath="/static/trumbowyg-icons.svg" @tbwchange="update"></trumbowyg>
  </div>
</template>

<script>
import Trumbowyg from './components/Trumbowyg'

export default {
  name: 'app',

  components: {
    Trumbowyg
  },

  data() {
    return {
      html: '<p>This is a test</p>',
    };
  },

  methods: {
    update(content) {
      this.html = content;
    }
  }
}
</script>
```

# Options

- `content`: The content of the editor
 - default: '' (empty String)
- `language`: The locale to use for the editor
 - default: en
 - Possible values can be found in the Trumbowyg documentation (see link below)
- `svgPath`: The path to the svg icons
 - default: /ui/icons.svg
 - For `vue-template/webpack` users, it's recommanded to copy the *icons.svg* file into the `/static` directory. And thus, set the svgPath to `/static/icons.svg`. Otherwise, webpack won't be able to load it.


For more on Trumbowyg see [http://alex-d.github.io/Trumbowyg/documentation.html](http://alex-d.github.io/Trumbowyg/documentation.html)



# License

This project is under MIT license. See [LICENSE](LICENSE) file for details.
