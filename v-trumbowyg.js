'use strict';

import Vue from 'vue';

Vue.directive('trumbowyg-vue', {
  twoWay: true,
  params: ['trumboVueId'],
  bind: function () {
    let _this = this;

    $(this.el).trumbowyg();

    $(this.el).trumbowyg()
      .on('tbwchange', () => {
        _this.set($(_this.el).trumbowyg('html'));
      });
  },

  update: function (value) {
    $(this.el).trumbowyg('html', value);
    $(this.el).trigger('tbwchange');
  },
});