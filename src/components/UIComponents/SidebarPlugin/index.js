import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: '信息总览',
      icon: 'dashboard',
      path: '/admin/dashboard'
    },
    {
      name: '系统消息',
      icon: 'notifications',
      path: '/admin/notifications'
    },
    {
      name: '地图监控',
      icon: 'location_on',
      path: '/admin/maps'
    },
    {
      name: '人员信息',
      icon: 'content_paste',
      path: '/admin/table-list'
    },
    // {
    //   name: 'Typography',
    //   icon: 'library_books',
    //   path: '/admin/typography'
    // },
    // {
    //   name: 'Icons',
    //   icon: 'bubble_chart',
    //   path: '/admin/icons'
    // },
    {
      name: '用户资料',
      icon: 'person',
      path: '/admin/stats'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
