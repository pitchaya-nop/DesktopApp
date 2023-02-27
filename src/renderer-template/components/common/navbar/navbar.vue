<template>
  <!--Nav start -->
  <div class="header-right-margin">
    <client-only>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <button type="button" class="btn btn-primary">
            <nuxt-link to="/messenger/messenger">Messenger</nuxt-link>
          </button>
          <b-dropdown id="dropdown-1" text="Blog">
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/blogs/blog_right-sidebar"
                >Blog Right sidebar</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/blogs/blog_left-sidebar"
                >Blog Left sidebar</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/blogs/blog_details"
                >Blog Details</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/blogs/blog_no-sidebar"
                >Blog No sidebar</nuxt-link
              ></b-dropdown-item
            >
          </b-dropdown>
          <b-dropdown id="dropdown-3" text="Authentication">
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/authentication/login"
                >Signin</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/authentication/login-2"
                >Signin Classic</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/authentication/signup"
                >Signup</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/authentication/signup-2"
                >Signup Classic</nuxt-link
              ></b-dropdown-item
            >
          </b-dropdown>
          <b-dropdown id="dropdown-4" text="Bouns page">
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/about">About</nuxt-link></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/faq">FAQ</nuxt-link></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/elements"
                >Elements</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/price">Price</nuxt-link></b-dropdown-item
            >
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </client-only>
  </div>
  <!--Nav end -->
</template>
