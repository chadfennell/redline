// Generated by CoffeeScript 1.6.1
(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Annotator.Plugin.Vote = (function(_super) {

    __extends(Vote, _super);

    function Vote() {
      var _this = this;
      this.setAnnotationNay = function(field, annotation) {
        return Vote.prototype.setAnnotationNay.apply(_this, arguments);
      };
      this.setAnnotationYea = function(field, annotation) {
        return Vote.prototype.setAnnotationYea.apply(_this, arguments);
      };
      this.updateNay = function(field, annotation) {
        return Vote.prototype.updateNay.apply(_this, arguments);
      };
      this.updateYea = function(field, annotation) {
        return Vote.prototype.updateYea.apply(_this, arguments);
      };
      return Vote.__super__.constructor.apply(this, arguments);
    }

    Vote.prototype.options = {};

    Vote.prototype.yeaField = null;

    Vote.prototype.nayField = null;

    Vote.prototype.input = null;

    Vote.prototype.pluginInit = function() {
      if (!Annotator.supported()) {
        return;
      }
      this.yeaField = this.annotator.editor.addField({
        label: Annotator._t('Yea'),
        type: 'checkbox',
        load: this.updateYea,
        submit: this.setAnnotationYea
      });
      this.nayField = this.annotator.editor.addField({
        label: Annotator._t('Nay'),
        type: 'checkbox',
        load: this.updateNay,
        submit: this.setAnnotationNay
      });
      this.annotator.viewer.addField({
        load: this.updateViewer
      });
      if (this.annotator.plugins.Filter) {
        return this.annotator.plugins.Filter.addFilter({
          label: Annotator._t('Vote'),
          property: 'vote',
          isFiltered: Annotator.Plugin.Tags.filterCallback
        });
      }
    };

    Vote.prototype.updateYea = function(field, annotation) {
      return $(field).find('input').prop('checked', annotation.vote === 'Yea');
    };

    Vote.prototype.updateNay = function(field, annotation) {
      return $(field).find('input').prop('checked', annotation.vote === 'Nay');
    };

    Vote.prototype.setAnnotationYea = function(field, annotation) {
      var checkbox, checked;
      checkbox = $(field).find('input');
      checked = $(checkbox).prop('checked');
      if (checked) {
        return annotation.vote = 'Yea';
      }
    };

    Vote.prototype.setAnnotationNay = function(field, annotation) {
      var checkbox, checked;
      checkbox = $(field).find('input');
      checked = $(checkbox).prop('checked');
      if (checked) {
        return annotation.vote = 'Nay';
      }
    };

    Vote.prototype.updateViewer = function(field, annotation) {
      field = $(field);
      if (annotation.vote) {
        return field.html(annotation.vote);
      } else {
        return field.remove();
      }
    };

    return Vote;

  })(Annotator.Plugin);

  Annotator.Plugin.Vote.filterCallback = function(input, tags) {
    var keyword, keywords, matches, tag, _i, _j, _len, _len1;
    if (tags == null) {
      tags = [];
    }
    matches = 0;
    keywords = [];
    if (input) {
      keywords = input.split(/\s+/g);
      for (_i = 0, _len = keywords.length; _i < _len; _i++) {
        keyword = keywords[_i];
        if (tags.length) {
          for (_j = 0, _len1 = tags.length; _j < _len1; _j++) {
            tag = tags[_j];
            if (tag.indexOf(keyword) !== -1) {
              matches += 1;
            }
          }
        }
      }
    }
    return matches === keywords.length;
  };

}).call(this);
