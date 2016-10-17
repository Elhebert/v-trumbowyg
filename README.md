v-Trumbowyg
============

VueJS directive for [Trumbowyg](http://alex-d.github.io/Trumbowyg/) editor.

# Requirements

- VueJS 1.0 (2.0 not tested yet)
- jQuery
- Trumbowyg

# Getting starting

## Clone the repository

- `cd v-trumbowyg` to go into the project's root directory
- Happy coding

# Usage

##Add module to your angular app

```javascript
require('/path/to/v-trumbowyg.js');
```

##Use directive

```html
<div v-trumbowyg="editorModel"></div>
```

##Setup model

```javascript
data() {
	return {
		editorModel: '',
	};
}
```

For more on Trumbowyg see [http://alex-d.github.io/Trumbowyg/documentation.html](http://alex-d.github.io/Trumbowyg/documentation.html)



# License

This project is under MIT license. See [LICENSE](LICENSE) file for details.