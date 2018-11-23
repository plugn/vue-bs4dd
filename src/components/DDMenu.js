export default {
  functional: true,
  render (h, { props, data, children }) {
    return h(
      'div',
      {
        staticClass: 'dropdown-menu',
        // attrs: {}
      },
      children
    )
  }
}
