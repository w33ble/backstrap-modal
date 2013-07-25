modal = new ModelView()

# example use of the ModalView
$('#showModal').on 'click', (e) ->
  modal.setTitle 'Modal Example'
  modal.addCloseButton()
  modal.setContent '<p>Hello World</p>'
  modal.setFooter 'Home you enjoyed this stupid example'
  modal.show()