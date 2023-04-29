<template>
<div class="content" :style='{"padding":"30px"}'>
	<div class="text" :style='{"margin":"50px auto","fontSize":"34px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>

	<el-dialog
			title="系统提示"
			:visible.sync="dialogVisible"
			:close-on-click-modal="false"
			width="45%">
		<el-table
				:data="dataList"
				style="width: 100%">
			<el-table-column
					prop="huodongmingcheng"
					label="活动名称">
			</el-table-column>
			<el-table-column
					prop="addtime"
					label="创建时间">
			</el-table-column>
			<el-table-column
					prop="huodongleixing"
					label="活动类型">
			</el-table-column>
			<el-table-column
					prop="huodongfeiyong"
					label="活动费用">
			</el-table-column>
			<el-table-column
					prop="sfsh"
					label="状态">
			</el-table-column>
		</el-table>
	</el-dialog>
</div>

</template>
<script>
//0
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
			dialogVisible:false,
			dataList:[]
		};
	},
	created() {
		let role=this.$storage.get('role')
		let adminName=this.$storage.get('adminName')
		if (role=='指导老师'){
			this.getDataList(adminName);
		}

	},
	mounted(){
    this.init();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
		getDataList(adminName){
			let params = {
				teacherId: adminName,
			}
			this.$http({
				url: "shetuanhuodong/queryByTeacherId",
				method: "get",
				params: params
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.dataList = data.data;
					if (this.dataList.length>0){
						this.dialogVisible=true
					}
				}
			});

		}
  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
