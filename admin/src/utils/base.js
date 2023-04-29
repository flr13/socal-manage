const base = {
    get() {
        return {
            // url : "http://localhost:8080/9829/",
            url : "http://localhost:8080/springbootz9829/",
            name: "springbootz9829",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "基于Springboot的学生社团管理的设计与实现"
        } 
    }
}
export default base
