// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ModelView = (function(_super) {
    __extends(ModelView, _super);

    function ModelView() {
      _ref = ModelView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ModelView.prototype.template = _.template($('#tpl-modal').html());

    ModelView.prototype.className = "modal hide fade";

    ModelView.prototype.attributes = {
      'aria-hidden': "true"
    };

    ModelView.prototype.initialize = function() {
      return this.render();
    };

    ModelView.prototype.render = function() {
      this.$el.html(this.template());
      this.header = this.$el.find('.modal-header');
      this.title = this.header.find('.title');
      this.close = this.header.find('.close');
      this.content = this.$el.find('.modal-body');
      this.footer = this.$el.find('.modal-footer');
      return this.$el.modal({
        show: false
      });
    };

    ModelView.prototype.show = function() {
      return this.$el.modal('show');
    };

    ModelView.prototype.hide = function() {
      return this.$el.modal('hide');
    };

    ModelView.prototype.toggle = function() {
      return this.$el.modal('toggle');
    };

    ModelView.prototype.setTitle = function(html) {
      return this.title.html(html);
    };

    ModelView.prototype.setContent = function(html) {
      console.log('setContent', this.content, html);
      return this.content.html(html);
    };

    ModelView.prototype.setFooter = function(html) {
      return this.footer.html(html);
    };

    ModelView.prototype.addCloseButton = function() {
      var closeButton;
      closeButton = $('<button type="button" class="close" data-dismiss="modal" ' + 'aria-hidden="true">×</button>');
      return this.close.html(closeButton);
    };

    ModelView.prototype.removeCloseButton = function() {
      return this.close.find('button').remove();
    };

    return ModelView;

  })(Backbone.View);

}).call(this);
