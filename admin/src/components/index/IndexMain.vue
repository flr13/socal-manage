<template >
	
	<div style="height: 100%;" ref="vantaREF">
		<index-aside v-if="'vertical' == 'vertical'" :style='{"boxShadow":"1px 0 4px  #ccc","overflow":"hidden","top":"0","left":"0","bottom":"0","width":"210px","fontSize":"0px","position":"fixed","height":"100%","zIndex":"1001"}'></index-aside>
			<!-- <el-main :style='"vertical" == "vertical" ? {"minHeight":"100%","padding":"0","margin":"0 0 0 210px","position":"relative","background":"url(https://img2.wallspic.com/previews/3/4/1/3/7/173143/173143-bing_chuan-bing_chuan_dong_xue-xia_wan-bing_chuan_hu-shui_zi_yuan-x750.jpg) center bottom","display":"block"} : {"minHeight":"100%","margin":"0","position":"relative"}'> -->

			<el-main :style='"vertical" == "vertical" ? {"minHeight":"100%","padding":"0","margin":"0 0 0 210px","position":"relative",
			//"background":"url(https://img2.wallspic.com/previews/3/4/1/3/7/173143/173143-bing_chuan-bing_chuan_dong_xue-xia_wan-bing_chuan_hu-shui_zi_yuan-x750.jpg) center bottom",
			"display":"block"} : {"minHeight":"100%","margin":"0","position":"relative"}' >
					<index-header v-if="this.$storage.get('role')=='管理员'" :style='{"boxShadow":"0 1px 6px rgba(64, 158, 255, .2)","padding":"8px 20px","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221012/bb3a52a0d2344671bb8a693c11ed3d9d.png) #0252c4","display":"flex","width":"100%","position":"relative","justifyContent":"center","zIndex":"1"}'></index-header>
					<index-header v-if="this.$storage.get('role')!='管理员'" :style='{"boxShadow":"0 1px 6px rgba(64, 158, 255, .2)","padding":"8px 20px","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221012/b		b3a52a0d2344671bb8a693c11ed3d9d.png) #f56c6c","display":"flex","width":"100%","position":"relative","justifyContent":"center","zIndex":"1"}'></index-header>
	
				<index-aside v-if="'vertical' == 'horizontal'" :style='{"width":"100%","borderColor":"#efefef","borderStyle":"solid","background":"#304156","borderWidth":"0 0 1px 0","height":"auto"}'></index-aside>
				<bread-crumbs :title="title" :style='{"padding":"15px 30px","margin":"0","borderColor":"#eee","borderWidth":"0 0 1px 0","background-color":"rgba(248, 245, 254,0.65)","width":"calc(100% - 0px)","borderStyle":"solid"}' class="bread-crumbs"></bread-crumbs>
				<router-view 
				></router-view>
			</el-main>
	</div>
	
	
	</template>
	
<script>
	import IndexAside from '@/components/index/IndexAsideStatic'
	import IndexHeader from '@/components/index/IndexHeader'
	import menu from "@/utils/menu"
	//vanta.js的引入
	import * as THREE from 'three'
	import Net1 from 'vanta/src/vanta.net'
	import Net2 from 'vanta/src/vanta.net'

	
	export default{
		components: {
			IndexAside,
			IndexHeader
		},
		data() {
			return {
				menuList: [],
				role: "",
				currentIndex: -2,
				itemMenu: [],
				title: ''
			};
		},
		comments:{
			loginRole(){
				return this.$storage.get("role")
			}
		},
		mounted() {
			let menus = menu.list();
			this.menuList = menus;
			this.role = this.loginRole;

		},
		
		created() {
			this.init();
			console.log(document.getElementsByClassName('el-table')[0])
			console.log(console.log(this.$route.path))
		},
		methods: {
			init(){
				this.$nextTick(()=>{

				})
			},
			menuHandler(menu) {
				this.$router.push({
					name: menu.tableName
				});
				this.title = menu.menu;
			},
			titleChange(index, menus) {
				this.currentIndex = index
				this.itemMenu = menus;
				console.log(menus);
			},
			homeChange(index) {
				this.itemMenu = [];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
			},
			centerChange(index) {
				this.itemMenu = [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "修改密码",
					"tableName": "updatePassword"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "个人信息",
					"tableName": "center"
				}];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});

			}
		},

		//vantaRef的定义
		mounted() {
			this.vantaEffect = Net1({
			el: this.$refs.vantaRef,
			THREE: THREE
			})
			VANTA.NET({
				el: this.$refs.vantaRef,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.00,
				minWidth: 200.00,
				scale: 1.00,
				scaleMobile: 1.00,
				color: 0x4af753,
				backgroundColor: 0xd8e1ff,
				points: 7.00,
				spacing: 18.00
				})
		},

		// vantaREF的定义
		mounted() {
			this.vantaEffect = Net2({
			el: this.$refs.vantaREF,
			THREE: THREE
			})
			VANTA.NET({
				el: this.$refs.vantaREF,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.00,
				minWidth: 200.00,
				scale: 1.00,
				scaleMobile: 1.00,
				color: 0x818181,
			  	backgroundColor: 0xffd8d8,
				points: 7.00,
				spacing: 18.00
				})
		},

		//都要加
		beforeDestroy() {
			if (this.vantaEffect) {
			this.vantaEffect.destroy()
			}
		}

	};
</script>
<style lang="scss" scoped>

	a {
		text-decoration: none;
		color: #555;
	}

	a:hover {
		background: #00c292;
	}

	.el-main {
		padding: 0;
		display: block;
	}

	.nav-list {
		width: 100%;
		margin: 0 auto;
		text-align: left;
		margin-top: 20px;

		.nav-title {
			display: inline-block;
			font-size: 15px;
			color: #333;
			padding: 15px 25px;
			border: none;
		}

		.nav-title.active {
			color: #555;
			cursor: default;
			background-color: #fff;
		}
	}

	.nav-item {
		margin-top: 20px;
		background: #FFFFFF;
		padding: 15px 0;

		.menu {
			padding: 15px 25px;
		}
	}

	.detail-form-content {
	    background: transparent;
	}




</style>
