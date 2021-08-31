<template lang="pug">
#app.drawer.drawer-mobile
  input#main-menu.drawer-toggle(type='checkbox' v-model="showMainMenu")

  .flex-grow.block.overflow-x-hidden.bg-base-100.text-base-content.drawer-content
    .sticky.inset-x-0.top-0.z-50.w-full.py-1.transition.duration-200.ease-in-out.border-b.border-base-200.bg-neutral.text-neutral-content
      .mx-auto.space-x-1.navbar.max-w-none
        .flex-none
          label.btn.btn-square.btn-ghost.drawer-button(for='main-menu' class='lg:hidden')
            // fa(:icon='faBars')
            | M
        .flex-1
        .navbar-end
          ThemeChange
    main.max-w-prose.mx-auto
      // TntUIBreadcrumbs
      RouterView

  .drawer-side
    label.drawer-overlay(for='main-menu')
    aside.flex.flex-col.justify-between.border-r.border-base-200.bg-base-100.text-base-content.w-80
      .sticky.inset-x-0.top-0.z-50.hidden.w-full.py-1.transition.duration-200.ease-in-out.border-b.border-base-200.bg-neutral.text-neutral-content(class='lg:block')
        header.mx-auto.space-x-1.navbar.max-w-none
          .navbar-start
            NuxtLink.btn.btn-ghost(to='/')
              span.text-lg.font-bold Title
      div.h-full
        ul.menu.flex.flex-col.p-4
          li.menu-title.mt-2
            span
              RouterLink(to='/') Home
          li
            RouterLink(to='/about') About
</template>

<script>
import ThemeChange from '@thombruce/tnt/src/components/ThemeChange.vue'

export default {
  components: {
    ThemeChange
  },
  metaInfo: {
    htmlAttrs: {
      'data-theme': 'cupcake'
    }
  },
  data () {
    return {
      showMainMenu: false
    }
  }
}
</script>
