import Menu from './DDMenu'
import MenuItem from './DDMenuItem'

export default {
  functional: true,
  render (h, { props, data, children }) {
    // const
    return h(
      'div',
      {
        class: ['dropdown-submenu'],
        // attrs: {}
      },
      [
        h(
          MenuItem,
          {
            props: {
              isToggle: true
            }
          },
          props.text
        ),
        h(
          Menu,
          children
        )
      ]
    )
  },
  props: {
    text: {
      type: String,
      default: 'SubMenuText'
    }
  }
}

const tpl = `
  <div class="dropdown-submenu">
    <a class="dropdown-item dropdown-toggle" href="#">02 SubSubMenu</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">02nd Sub action</a>
      <a class="dropdown-item" href="#">02nd Sub another action</a>
    </div>
  </div>
`;
