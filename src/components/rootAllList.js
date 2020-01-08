export default [
    {
      name:'首页',
      icon:'home',
      path:'/admin/home',
      id:'0'
    },
    {
      name:'设置',
      icon:'setting',
      path:'/admin/setting',
      id:'1'
    },
    {
      name:'人员管理',
      icon:"user",
      path:'',
      id:'2',
      children:[
        {
          name:'违规列表',
          path:'/admin/people/list',
          id:'2-0'
        },
        {
          name:'违规人员添加',
          path:'/admin/people/add',
          id:'2-1'
        }
      ]
    },
    {
      name:'图书管理',
      icon:"book",
      path:'',
      id:'3',
      children:[
        {
          name:'图书列表',
          icon:"book",
          path:'/admin/books/list',
          id:'3-0'
        },
        {
          name:'图书添加',
          icon:"book",
          path:'/admin/books/add',
          id:'3-1'
        },
        {
          name:'图书查找',
          icon:"book",
          path:'/admin/books/seek',
          id:'3-2'
        }
      ]
    },
    {
      name:'菜单管理',
      icon:"menu",
      path:'',
      id:'4',
      children:[
        {
          name:'菜单列表',
          icon:"menu",
          path:'/admin/menus/list',
          id:'4-0'
        },
        {
          name:'菜系添加',
          icon:"menu",
          path:'/admin/menus/add',
          id:'4-1'
        }
      ]
    },
  ]