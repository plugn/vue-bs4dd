export default {
  functional: true,
  render (h, { props, data, children, methods }) {
    let self = this
    return h(
      'a',
      {
        class: ['dropdown-item', {'dropdown-toggle': props.isToggle}],
        attrs: { role: 'menuitem' },
        nativeOn: {
          click: function(event) {
            console.log('submenu onClick() ', event);
          }
        }
      },
      children
    )
  },
  props: {
    isToggle: {
      type: Boolean,
      default: false
    }
  }
}
