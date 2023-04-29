<template>
    <div style="padding: 30px;height: 600px">
        <div style="padding: 30px;background-color: white;border-radius:25px; height: 600px">
            <div style="width: 100%;height: 300px">
            <el-row :gutter="20">
                <el-col :span="12"><div class="grid-content bg-purple"><canvas id="myChart2"  width="400" height="250"></canvas></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple"><canvas id="myChart3"  width="400" height="250"></canvas></div></el-col>
            </el-row>
            </div>
         </div>
    </div>
</template>

<script>
import Chart from 'chart.js';


export default {
    data() {
        return {
            dataList2:[],
        }
    },
    created() {
        this.getDataList1();
        this.getDataList2();
    },
    methods:{
        getDataList1() {
            let params = {
                "adminName": this.$storage.get('adminName'),
                "role": this.$storage.get('role'),
            }
            this.$http({
                url: "shetuanhuodong/queryCount/",
                method: "get",
                params: params,
            }).then(({ data }) => {
                if (data && data.code === 0) {
                    this.dataList2 = data.data;
                    let labels2=new Array()
                    let data2=new Array()
                    this.dataList2.forEach(function(val,index){
                        data2[index]=val.num;
                        if (val.huodongleixing==''){
                            labels2[index]='其他';
                        }else {
                            labels2[index]=val.huodongleixing;
                        }
                    })
                    var ctx3 = document.getElementById("myChart3");

                    var myChart3 = new Chart(ctx3, {
                        type: 'pie',
                        data: {
                            labels:labels2,
                            datasets: [
                                {
                                    label: '数据1',
                                    data: data2,
                                    backgroundColor: ["#f44236", "#faa64b", "#fcc525", "#15c377", "#007bff"],
                                }
                            ]
                        },
                        options: {}
                    });


                }
            });
        },

        getDataList2() {
            let params = {
                "adminName": this.$storage.get('adminName'),
                "role": this.$storage.get('role'),
            }
            this.$http({
                url: "shetuanhuodong/querySum",
                method: "get",
                params: params,
            }).then(({ data }) => {
                if (data && data.code === 0) {
                    this.dataList2 = data.data;
                    let labels2=new Array()
                    let data2=new Array()
                    this.dataList2.forEach(function(val,index){
                        data2[index]=val.num;
                        if (val.huodongleixing==''){
                            labels2[index]='其他';
                        }else {
                            labels2[index]=val.huodongleixing;
                        }
                    })
                    var ctx2 = document.getElementById("myChart2");
                    var myChart2 = new Chart(ctx2, {
                        type: 'line',
                        data: {
                            labels: labels2,
                            datasets: [
                                {
                                    label: '各类活动总费用',
                                    data: data2,
                                    borderColor: "#f96868",
                                    backgroundColor: "rgba(249, 104, 104, 0.5)",
                                    pointStyle: 'circle',
                                    pointRadius: 10,
                                    pointHoverRadius: 15
                                }
                            ]
                        },
                        options: {

                        }
                    });


                }
            });
        },

    }
}
</script>
<style scoped>

</style>
