<template lang="html">
    <div class="back-stage">
        <el-button v-show="!addAdmin" type="primary" class="add-aticle" @click="addAdmin = !addAdmin">添加用户</el-button>
        <el-table v-show="!addAdmin"
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="province"
              label="权限">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编">
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
        </el-table>
        <div v-show="addAdmin" class="add-admin">
            <ul>
                <li>
                    <span>用户名</span>
                    <el-input></el-input>
                </li>
                <li>
                    <span>密码</span>
                    <el-input></el-input>
                </li>
                <li>
                    <span>权限</span>
                    <el-input></el-input>
                </li>
                <li>
                    <span>电话</span>
                    <el-input></el-input>
                </li>
            </ul>
            <el-button v-show="addAdmin" type="primary" class="add-aticle" @click="addAdmin = !addAdmin">取消</el-button>
            <el-button v-show="addAdmin" type="primary" class="add-aticle" @click="addAdmin = !addAdmin">确认</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
          addAdmin: false,
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
      }
    }
}
</script>

<style scoped lang="less">
.back-stage {
    .add-aticle {
        margin: 30px 0;
    }
    .back-page {
        width: 100%;
        display: flex;
        margin: 50px;
        justify-content: center;
        align-items: center;
    }
    .add-admin {
        margin: 30px 0;
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            li {
                display: flex;
                margin-bottom: 30px;
                span {
                    width: 120px;
                    line-height: 30px;
                    font-size: 18px;
                }
                .el-input {
                    width: 20%;
                }
            }

        }
    }
}
</style>
