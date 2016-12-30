<template>
  <div id="trumbowyg-editor"></div>
</template>

<style lang="scss">
  @import '~trumbowyg/dist/ui/sass/trumbowyg.scss';
</style>

<script>
  import 'trumbowyg';

  export default {
    mounted() {
      $.trumbowyg.svgPath = this.svgPath;
      $('#trumbowyg-editor')
        .trumbowyg({ lang: this.language, })
        .on('tbwchange', this.onChange);
      $('#trumbowyg-editor').trumbowyg('html', this.content);
    },

    props: {
      content: {
        type: String,
        default: '',
      },
      language: {
        type: String,
        default: 'en',
      },
      svgPath: {
        type: String,
        default: '/ui/icons.svg',
      },
    },

    methods: {
      onChange() {
        const content = $('#trumbowyg-editor').trumbowyg('html');
        this.$emit('tbwchange', content);
      },
    },
  };
</script>
