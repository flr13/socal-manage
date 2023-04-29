import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import data from '@/views/data.vue'
    import shetuanhuodong from '@/views/modules/shetuanhuodong/list'
    import feiyongshenqing from '@/views/modules/feiyongshenqing/list'
    import xueshengxinxi from '@/views/modules/xueshengxinxi/list'
    import zhidaolaoshi from '@/views/modules/zhidaolaoshi/list'
    import shetuanxinxi from '@/views/modules/shetuanxinxi/list'
    import users from '@/views/modules/users/list'
    import huodongleixing from '@/views/modules/huodongleixing/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/shetuanhuodong',
        name: '社团活动',
        component: shetuanhuodong
      }
      ,{
	path: '/feiyongshenqing',
        name: '费用申请',
        component: feiyongshenqing
      }
      ,{
	path: '/xueshengxinxi',
        name: '学生信息',
        component: xueshengxinxi
      }
        ,{
            path: '/data',
            name: '数据统计',
            component: data
        }

      ,{
	path: '/zhidaolaoshi',
        name: '指导老师',
        component: zhidaolaoshi
      }
      ,{
	path: '/shetuanxinxi',
        name: '社团信息',
        component: shetuanxinxi
      }
      ,{
	path: '/users',
        name: '管理员',
        component: users
      }
      ,{
	path: '/huodongleixing',
        name: '活动类型',
        component: huodongleixing
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
