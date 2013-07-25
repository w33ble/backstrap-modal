class window.ModelView extends Backbone.View
  template: _.template $('#tpl-modal').html()
  className: "modal hide fade"
  attributes:
    'aria-hidden': "true"
  initialize: ->
    @render()

  render: ->
    @$el.html @template()
    @header  = @$el.find('.modal-header')
    @title   = @header.find('.title')
    @close   = @header.find('.close')
    @content = @$el.find('.modal-body')
    @footer  = @$el.find('.modal-footer')
    @$el.modal show: false
    # console.log 'render', @$el, modal, @$el is modal

  show: ->
    @$el.modal('show')

  hide: ->
    @$el.modal('hide')

  toggle: ->
    @$el.modal('toggle')

  setTitle: (html) ->
    @title.html html

  setContent: (html) ->
    console.log 'setContent', @content, html
    @content.html html

  setFooter: (html) ->
    @footer.html html

  addCloseButton: ->
    closeButton = $('<button type="button" class="close" data-dismiss="modal" '+
      'aria-hidden="true">×</button>')
    @close.html closeButton

  removeCloseButton: ->
    @close.find('button').remove()
