<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20220805/856c0e3e17c248f2990b5d9e2b1da6a4.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"30px 20px 30px","boxShadow":"0 0px 0px rgba(64, 158, 255, .8)","margin":"0","borderRadius":"20px  120px","background":"rgba(248, 245, 254,0.85)","width":"800px","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"margin":"0 0 20px 0","color":"#4d90ef","textAlign":"center","width":"100%","letterSpacing":"5px","lineHeight":"44px","fontSize":"32px","textShadow":"0px 0px 0px #4d90ef"}' class="title">基于Springboot的学生社团管理的设计与实现注册</div>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">学号</div>
					<el-input  v-model="ruleForm.xuehao"  autocomplete="off" placeholder="学号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">学生姓名</div>
					<el-input  v-model="ruleForm.xueshengxingming"  autocomplete="off" placeholder="学生姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">照片</div>
                    <file-upload
                        tip="点击上传照片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
                        @change="xueshengxinxizhaopianUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in xueshengxinxixingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">年龄</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">院系</div>
					<el-input  v-model="ruleForm.yuanxi"  autocomplete="off" placeholder="院系"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">班级</div>
					<el-input  v-model="ruleForm.banji"  autocomplete="off" placeholder="班级"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">联系方式</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='xueshengxinxi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">社团/部门</div>
					<el-input  v-model="ruleForm.suoshushetuan"  autocomplete="off" placeholder="社团/部门"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">老师工号</div>
					<el-input  v-model="ruleForm.laoshigonghao"  autocomplete="off" placeholder="老师工号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">老师姓名</div>
					<el-input  v-model="ruleForm.laoshixingming"  autocomplete="off" placeholder="老师姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">照片</div>
                    <file-upload
                        tip="点击上传照片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
                        @change="zhidaolaoshizhaopianUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in zhidaolaoshixingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">手机</div>
					<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">邮箱</div>
					<el-input  v-model="ruleForm.youxiang"  autocomplete="off" placeholder="邮箱"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='zhidaolaoshi'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">管理社团</div>
					<el-input  v-model="ruleForm.guanlishetuan"  autocomplete="off" placeholder="管理社团"  type="text"  />
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 6px #74b0e2","margin":"20px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"4px 20px","background":"-webkit-linear-gradient(top,#038afb,#116dba)","width":"120px","fontSize":"14px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 20%","color":"#5497f2","display":"inline-block","lineHeight":"1","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
                xingbie: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            xueshengxinxixingbieOptions: [],
            zhidaolaoshixingbieOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.xueshengxinxixingbieOptions = "男,女".split(',')
        this.zhidaolaoshixingbieOptions = "男,女".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        xueshengxinxizhaopianUploadChange(fileUrls) {
            this.ruleForm.zhaopian = fileUrls;
        },
        zhidaolaoshizhaopianUploadChange(fileUrls) {
            this.ruleForm.zhaopian = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.xuehao) && `xueshengxinxi` == this.tableName){
						this.$message.error(`学号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.xueshengxingming) && `xueshengxinxi` == this.tableName){
						this.$message.error(`学生姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `xueshengxinxi` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `xueshengxinxi` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
            if(this.ruleForm.zhaopian!=null) {
                this.ruleForm.zhaopian = this.ruleForm.zhaopian.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`xueshengxinxi` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`xueshengxinxi` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
				
					if((!this.ruleForm.laoshigonghao) && `zhidaolaoshi` == this.tableName){
						this.$message.error(`老师工号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `zhidaolaoshi` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `zhidaolaoshi` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.laoshixingming) && `zhidaolaoshi` == this.tableName){
						this.$message.error(`老师姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.zhaopian!=null) {
                this.ruleForm.zhaopian = this.ruleForm.zhaopian.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`zhidaolaoshi` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					if(`zhidaolaoshi` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20220805/856c0e3e17c248f2990b5d9e2b1da6a4.png);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 80px  40px;
						padding: 0 24px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						margin: 0px 0px 0px  85px;
						color: #bbb;
						width: 85%;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 80px  40px;
						padding: 0 24px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						margin: 0px 0px 0px  85px;
						color: #bbb;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 80px  40px;
						padding: 0 10px 0 24px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						margin: 0px 0px 0px  85px;
						color: #bbb;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 80px  40px;
						padding: 0 10px 0 24px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						margin: 0px 0px 0px  85px;
						color: #bbb;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed #ffffff;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 0px 0px 0px  85px;
		  		  color: #ffffff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #ffffff;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 0px 0px 0px  85px;
		  		  color: #ffffff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #ffffff;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 0px 0px 0px  85px;
		  		  color: #ffffff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
	}
</style>
