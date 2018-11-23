<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand" href="#">Expand at md</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
            aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample04">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu" aria-labelledby="dropdown04">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>

        <li class="nav-item dropdown show">
          <a class="nav-link dropdown-toggle" href="#open" id="navbarDropdownMenuLink"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Dr0pdown</a>

          <div class="dropdown-menu show" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="#">Submenu</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Submenu action</a>
                <a class="dropdown-item" href="#">Another submenu action</a>

                <div class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="#">01 SubSubMenu</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">01 Subsubmenu action</a>
                    <a class="dropdown-item" href="#">01 Another subsubmenu action</a>
                  </div>
                </div>

                <div class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="#">02 SubSubMenu</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">02nd Sub action</a>
                    <a class="dropdown-item" href="#">02nd Sub another action</a>
                  </div>
                </div>

                <SubMenu text="MyDrop">
                  <MenuItem>ONE</MenuItem>
                  <MenuItem>TWO</MenuItem>
                </SubMenu>


              </div>
            </div>
          </div>
        </li>

      </ul>
      <form class="form-inline my-2 my-md-0">
        <input class="form-control" type="text" placeholder="Search">
      </form>
    </div>
  </nav>
</template>

<script>
import Menu from './DDMenu'
import SubMenu from './DDSubMenu'
import MenuItem from './DDMenuItem'

export default {
  name: "BsMenu",
  components: {
    SubMenu,
    MenuItem
  },
  data() {
    return {
      brandTitle: "HQ"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .dropdown-submenu {
    position: relative;
  }

  .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 6px;
    top: .8em;
  }

  .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-left: .1rem;
    margin-right: .1rem;
  }
</style>
