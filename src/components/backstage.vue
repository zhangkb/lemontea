<template lang="html">
    <div class="back-stage">
        <el-button v-show="!addArticle" type="primary" class="add-aticle" @click="addArticle = !addArticle">添加文章</el-button>
        <el-table v-show="!addArticle"
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              fixed
              prop="time"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="img"
              label="图片"
              width="150">
              <img slot-scope="scope" :src="scope.row.img" alt="">
            </el-table-column>
            <el-table-column
              prop="author"
              label="作者"
              >
            </el-table-column>
            <el-table-column
              prop="title"
              label="标题"
              >
            </el-table-column>
            <el-table-column
              prop="classify"
              label="分类"
             >
            </el-table-column>
            <el-table-column
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
        </el-table>
        <div v-show="addArticle" class="article-show">
            <ul>
                <li>
                    <span>标题</span>
                    <el-input v-model="article.title" placeholder="标题"></el-input>
                </li>
                <li>
                    <span>作者</span>
                    <el-input v-model="article.author" placeholder="作者"></el-input>
                </li>
                <li>
                    <span>分类</span>
                    <el-select v-model="article.classify" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                     </el-select>
                </li>
                <li>
                    <span>配图</span>
                    <div class="qualification">
                        <img src="500*500" title="预览" alt="">
                    </div>
                    <div class="qua-operate">
                        <el-upload class="upload-demo"
                         action="http://localhoost:3002/upload"
                         name="foo"
                         :multiple="false"
                         :show-file-list="false"
                         :limit="1"
                         :before-upload="beforeUpload"
                         :http-request="httpQuaUpload"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove">
                             <el-button size="small"  class="up-btn" type="primary">上传图片
                             </el-button>
                        </el-upload>
                    </div>
                </li>
                <li>
                    <span>内容</span>
                    <el-input cols="20" rows="10" v-model="article.title" placeholder="内容" type="textarea"></el-input>
                </li>
            </ul>
            <el-button v-show="addArticle" type="primary" class="add-aticle" @click="addArticle = !addArticle">取消</el-button>
            <el-button v-show="addArticle" type="primary" class="add-aticle" @click="addArticle = !addArticle">确认</el-button>

        </div>
        <div v-show="!addArticle" class="back-page">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        addArticle: false,
        article: {
            title: '',
            author: '',
            classify: '',
            img: ''
        },
        options: [
            {
                value: '科普基地',
                label: '科普基地'
            },{
                value: '政策法规',
                label: '政策法规'
            },{
                value: '科学生活',
                label: '科学生活'
            },{
                value: '农村科苑',
                label: '农村科苑'
            },{
                value: '科技万象',
                label: '科技万象'
            },{
                value: '中原风采',
                label: '中原风采'
            }
        ],
        tableData: [{
          time: '2016-05-03',
          author: '科普中国-乐享健康',
          title: '孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血',
          classify: '科普基地',
          img: require('../assets/images/media-01.jpg'),
        },{
          time: '2016-05-03',
          author: '科普中国-乐享健康',
          title: '孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血',
          classify: '科普基地',
          img: require('../assets/images/media-01.jpg'),
        },{
          time: '2016-05-03',
          author: '科普中国-乐享健康',
          title: '孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血',
          classify: '科普基地',
          img: require('../assets/images/media-01.jpg'),
        },{
          time: '2016-05-03',
          author: '科普中国-乐享健康',
          title: '孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血',
          classify: '科普基地',
          img: require('../assets/images/media-01.jpg'),
        },{
          time: '2016-05-03',
          author: '科普中国-乐享健康',
          title: '孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血',
          classify: '科普基地',
          img: require('../assets/images/media-01.jpg'),
        },]
      }
    },
    methods: {
        beforeUpload(file) {
            const isIMG = (file.type === 'image/jpeg' || 'image/png' || '');
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isIMG) {
              this.$message.error('只能上传jpg或png格式图片');
            }
            if (!isLt2M) {
              this.$message.error('图片大小不能超过2MB');
            }
            return isIMG && isLt2M;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        httpQuaUpload(param){
            let file = param.file;
            let self = this;
            let token = localStorage.getItem('token');
            let formData = new FormData();
            formData.append('foo', param.file);
            formData.append('token', token);
            let config = {
                'Content-Type': 'multipart/form-data'
            };
            axios.post('http://localhost:3002/upload',formData, config).then((response)=>{
                console.log(response);
                if (response.status === 200) {
                    self.cacheQua = response.data.data.name;
                }
            })
        },
    }
}
</script>

<style scoped lang="less">
.back-stage {
    // justify-content: flex-start;
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
    .article-show {
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
                    width: 50%;
                }
                .el-textarea {
                    width: 50%;
                }
                .el-select {
                    .el-input {
                        width: 100%;
                    }
                }
            }
            .qualification {
                width: 300px;
            }
            .qua-operate {
                width: 150px;
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 13px;
                line-height: 18px;
                color: #666;
            }
            .up-btn {
                width: 94px;
                padding: 0;
                margin-bottom: 7px;
                line-height: 30px;
                font-size: 13px;
                font-weight: normal;
            }
        }
    }
}
</style>
