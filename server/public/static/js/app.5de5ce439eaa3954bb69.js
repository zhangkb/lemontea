webpackJsonp([1],{"/F+r":function(t,e,a){t.exports=a.p+"static/img/info-01.5090afd.jpg"},"1MVj":function(t,e,a){t.exports=a.p+"static/img/info-07.4a12ab2.jpg"},"20lA":function(t,e){},"372Q":function(t,e,a){t.exports=a.p+"static/img/info-02.669b10f.jpg"},"4NrR":function(t,e){},"5v/k":function(t,e,a){t.exports=a.p+"static/img/media-01.1def649.jpg"},CHM8:function(t,e){},FsjL:function(t,e,a){t.exports=a.p+"static/img/05.b05d90b.jpg"},HIn5:function(t,e){},IJWM:function(t,e,a){t.exports=a.p+"static/img/02.05c1c09.jpg"},L2nV:function(t,e,a){t.exports=a.p+"static/img/info-06.49ce135.jpg"},LnrS:function(t,e){},MwPN:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("zL8q"),n=a.n(i),l=(a("tvR6"),a("mtWM")),o=a.n(l),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")({name:"App"},r,!1,function(t){a("4NrR")},null,null).exports,u=a("/ocq"),p={name:"HelloWorld",data:()=>({msg:"Welcome to Your Vue.js App",carousel:[{url:a("Tskc")},{url:a("IJWM")},{url:a("pL8+")},{url:a("tezo")},{url:a("FsjL")}],groom:[{url:a("1MVj")},{url:a("/F+r")},{url:a("372Q")},{url:a("mTU8")},{url:a("XbQM")},{url:a("L2nV")},{url:a("QoU1")}],notice:[{title:"《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布",time:"2018-03-01 10:10"},{title:"《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布",time:"2018-03-01 10:10"},{title:"《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布",time:"2018-03-01 10:10"},{title:"《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布",time:"2018-03-01 10:10"},{title:"《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布",time:"2018-03-01 10:10"},{title:"《关于深化审评审批制度改革鼓励药品医疗器械创新的意见》发布",time:"2018-03-01 10:10"}]})},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("el-carousel",{attrs:{"indicator-position":"outside"}},t._l(t.carousel,function(t){return a("el-carousel-item",{key:t.url},[a("img",{attrs:{src:t.url,alt:""}})])})),t._v(" "),a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"info-com info-tongzhi"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix info-notice-title",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("通知公告")])]),t._v(" "),t._l(t.notice,function(e){return a("div",{staticClass:"text item info-notice"},[a("span",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),a("span",[t._v(" "+t._s(e.time)+" ")])])})],2)],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"info-com info-tongzhi"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix info-notice-title",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("通知公告")])]),t._v(" "),t._l(t.notice,function(e){return a("div",{staticClass:"text item info-notice"},[a("span",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),a("span",[t._v(" "+t._s(e.time)+" ")])])})],2)],1)])],1),t._v(" "),a("h2",{staticClass:"groom"},[t._v("科普推荐")]),t._v(" "),a("el-row",{staticClass:"info-groom",attrs:{type:"flex",gutter:20}},t._l(t.groom,function(t){return a("el-col",{key:t.url,attrs:{span:8}},[a("div",{staticClass:"info-groom-item"},[a("img",{attrs:{src:t.url,alt:""}})])])}))],1)},staticRenderFns:[]};var d=a("VU/8")(p,m,!1,function(t){a("aKKx")},null,null).exports,v=a("mw3O"),h=a.n(v),_={name:"App",data:function(){return{msg:"header",dialogVisible:!1,register:!1,islogin:!1,user:{name:"",password:"",email:"",sex:"",id:""},navgatText:[{name:"首页",path:"/home"},{name:"科普基地",path:"/base"},{name:"政策法规",path:"/policy"},{name:"科学生活",path:"/science"},{name:"农村科苑",path:"/countryside"},{name:"科技万象",path:"/technology"},{name:"中原风采",path:"/central"},{name:"资源查询",path:"/serach"}],activeName:"首页"}},created(){this.getUser()},methods:{selected:function(t){this.activeName=t.name,console.log(t.name)},fetchData:function(){console.log("路由变化"),this.activeName=this.$route.path},handleClose:function(t){this.$confirm("确认关闭？").then(e=>{t()}).catch(t=>{})},login:function(){var t=this;o.a.post("http://120.79.214.223:3001/login",h.a.stringify({email:this.user.email,password:this.user.password})).then(function(e){console.log(e),200===e.status&&1==e.data.msg.status&&(localStorage.setItem("token",e.data.data.token),localStorage.setItem("id",e.data.data.id),t.user.name=e.data.data.name,t.dialogVisible=!1,t.islogin=!0)}).catch(function(t){console.log(t)})},registerFun:function(){console.log(123);o.a.post("http://120.79.214.223:3001/register",h.a.stringify({email:this.user.email,password:this.user.password,name:this.user.name,sex:this.user.sex,roles:"member"})).then(function(t){console.log(t),200===t.status&&1==t.data.msg.status&&(console.log(t),this.register=!1)}).catch(function(t){console.log(t)})},logout:function(){this.$confirm("您真的要离开了吗0.0","退出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{localStorage.removeItem("token"),localStorage.removeItem("id"),this.islogin=!1,this.$router.push({path:"/home"})})},getUser:function(){console.log(localStorage.getItem("token")),o.a.get("http://120.79.214.223:3001/getuser",{params:{token:localStorage.getItem("token"),id:localStorage.getItem("id")}}).then(t=>{200===t.status&&1==t.data.msg.status&&(Object.assign(this.user,t.data.data[0]),console.log(this.user.name),this.islogin=!0)})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"top"},[a("div",{staticClass:"container"},[a("span",{directives:[{name:"show",rawName:"v-show",value:0==t.islogin,expression:"islogin == false"}],on:{click:function(e){t.dialogVisible=!0}}},[t._v("登录")]),t._v(" "),a("router-link",{staticStyle:{color:"#fff"},attrs:{to:{path:"/acount"}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.islogin,expression:"islogin == true"}]},[t._v(t._s(t.user.name))])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.islogin,expression:"islogin == true"}],on:{click:t.logout}},[t._v("退出")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==t.islogin,expression:"islogin == false"}],on:{click:function(e){t.register=!0}}},[t._v("注册")])],1)]),t._v(" "),a("div",{staticClass:"header"},[a("span",{staticClass:"header-name"},[t._v("\n          科普推广系统\n      ")]),t._v(" "),a("div",{staticClass:"menu"},t._l(t.navgatText,function(e){return a("router-link",{attrs:{to:{path:e.path}}},[a("span",{class:{active:t.activeName==e.name},on:{click:function(a){t.selected(e)}}},[t._v(t._s(e.name))])])}))]),t._v(" "),a("div",{staticClass:"sitting"}),t._v(" "),a("div",{staticClass:"router-view"},[a("router-view")],1),t._v(" "),t._m(0),t._v(" "),a("el-dialog",{attrs:{title:"登录",visible:t.dialogVisible,width:"40%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-input",{attrs:{placeholder:"账号"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},[a("template",{slot:"prepend"},[t._v("账号")])],2),t._v(" "),a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}},[a("template",{slot:"prepend"},[t._v("密码")])],2),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"注册",visible:t.register,width:"40%","before-close":t.handleClose},on:{"update:visible":function(e){t.register=e}}},[a("el-input",{attrs:{placeholder:"账号"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}},[a("template",{slot:"prepend"},[t._v("账号")])],2),t._v(" "),a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}},[a("template",{slot:"prepend"},[t._v("密码")])],2),t._v(" "),a("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:t.user.password2,callback:function(e){t.$set(t.user,"password2",e)},expression:"user.password2"}},[a("template",{slot:"prepend"},[t._v("确认密码")])],2),t._v(" "),a("el-input",{attrs:{placeholder:"Email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},[a("template",{slot:"prepend"},[t._v("Email")])],2),t._v(" "),a("el-input",{attrs:{placeholder:"联系方式"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}},[a("template",{slot:"prepend"},[t._v("联系方式")])],2),t._v(" "),a("el-input",{attrs:{placeholder:"性别"},model:{value:t.user.sex,callback:function(e){t.$set(t.user,"sex",e)},expression:"user.sex"}},[a("template",{slot:"prepend"},[t._v("性别")])],2),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.register=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.registerFun}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("h2",[t._v("友情链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{target:"_blank",href:"http://www.kepuchina.cn/"}},[t._v("科普中国")])]),t._v(" "),a("li",[a("a",{attrs:{target:"_blank",href:"http://www.qxkp.net/"}},[t._v("中国气象科普网")])]),t._v(" "),a("li",[a("a",{attrs:{target:"_blank",href:"http://science.china.com.cn/"}},[t._v("中国科学中国")])]),t._v(" "),a("li",[a("a",{attrs:{target:"_blank",href:"http://tech.chinadaily.com.cn/"}},[t._v("中国日报网")])]),t._v(" "),a("li",[a("a",{attrs:{target:"_blank",href:"http://www.dili360.com/"}},[t._v("中国国家地理网")])])])])}]};var f=a("VU/8")(_,g,!1,function(t){a("T0kT")},null,null).exports,x={name:"",data:function(){return{media:[{url:a("5v/k"),title:"孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("dwW2"),title:"补充维生素不是想补就能补 补充过量会中毒",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("UDxU"),title:"老人黄昏突然变得糊涂？可能患上了“日落综合征”",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("QgdS"),title:"头皮瘙痒怎么办？注意清洁、正确护理很重要",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("QC80"),title:"警惕“病从口入” 预防食源性疾病有方法",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("5v/k"),title:"孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血",time:"2018-04-20",auth:"科普中国-乐享健康"}]}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-box"},[a("div",{staticClass:"base"},[a("ul",{staticClass:"media-list"},[t._l(t.media,function(e){return a("li",[a("router-link",{staticClass:"media-box",attrs:{to:"/item/123"}},[a("div",{staticClass:"media-img"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("div",{staticClass:"media-content"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.auth)+" "+t._s(e.time))])])])],1)}),t._v(" "),t._m(0),t._v(" "),t._m(1)],2),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("热点推荐")])]),t._v(" "),t._l(t.media,function(e){return a("div",{staticClass:"text item hot-list",staticStyle:{margin:"20px 0"}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("span",{staticClass:"textdia"},[t._v(t._s(e.title))])])})],2)],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"media-box"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:a("5v/k"),alt:""}})]),this._v(" "),e("div",{staticClass:"media-content"},[e("h2",[this._v("孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血")]),this._v(" "),e("span",[this._v("科普中国-乐享健康 2018-04-20")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"media-box"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:a("5v/k"),alt:""}})]),this._v(" "),e("div",{staticClass:"media-content"},[e("h2",[this._v("孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血")]),this._v(" "),e("span",[this._v("科普中国-乐享健康 2018-04-20")])])])}]};var w=a("VU/8")(x,C,!1,function(t){a("MwPN")},null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item-box"},[s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-cheader"},[s("div",{staticClass:"item-chimg"},[s("img",{attrs:{src:a("5v/k"),alt:""}})]),t._v(" "),s("div",{staticClass:"item-chtitle"},[s("h2",[t._v("\n                    孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血\n                ")]),t._v(" "),s("span",[t._v("科普中国-乐享健康 2018-04-20")])])]),t._v(" "),s("div",{staticClass:"item-cbody"},[s("p",[t._v("\n                怀孕期间，“补”这个字成了孕妈们的重要一课。如果营养跟不上，孕妇很容易出\n            现贫血现象。那么，孕妇应该如何补血？孕期补血有哪些误区呢？\n            ")]),t._v(" "),s("p",[t._v("\n                除了对孕妇自身的影响，孕期缺铁性贫血也会对腹中胎儿造成危害。据中国新闻网报道，孕妇在孕期缺铁性贫血很可能会影响胎儿及出生后婴幼儿的以下几个方面的神经行为，包括：对信息加工、处理的速度，个人情商以及学习和记忆能力。具体表现为精神萎靡，对周围环境反应差，多动易哭闹，记忆力不佳，食欲不振、严重者有异食癖，免疫功能低下，易患各种感染等。这其中又以学习和记忆能力受到的影响特别突出。\n            ")]),t._v(" "),s("p",[t._v("\n                由此可见，孕妇孕期补血十分重要。那么，孕妇孕期应该如何补血呢？据《科技日报》报道，食补是个不错的选择，补血食物的首选是红色的肉类、内脏等动物性食品，动物内脏比如猪肝的铁含量可达30mg/100g。对比植物性食材，比如红枣，铁含量一般为2~3mg/100g，在铁含量方面，动物性食品是有明显优势的。另一方面，动物性食品中铁的存在形式主要是血红素铁，血红素铁可以被消化道直接吸收，而且吸收过程中几乎不受其他食物因素的干扰，吸收效率比较高。研究数据表明，在含有肉类的混合膳食中，铁元素的吸收率为10%，而粮食豆类中的铁吸收率仅有1%~3%。\n            ")]),t._v(" "),s("p",[t._v("\n                此外，阿胶也是孕妇补血的一个不错选择。据人民网健康频道报道，山东中医药大学的郭瑞华教授说，从阿胶的功效上来讲，针对女性生育期阴血亏虚的状态，它可以止血又能够很好地补血。阿胶是血肉有情之品，入肝可以养血，入肾可以养精。阿胶还含有丰富的钙质，妊娠期女性食用后可以防止孕妇的缺钙和贫血；在产后吃阿胶乳汁里面也会含有丰富的钙质，对新生儿也好。\n            ")]),t._v(" "),s("p",[t._v("\n                需要注意的是，据中国日报网消息，孕期补血往往存在以下两点误区：\n            ")]),t._v(" "),s("p",[t._v("\n                1. 服用补血保健品来补血。市场销售的补血保健品琳琅满目，虽然这些保健品含有一定量的各种形式的铁，对缺铁性贫血有辅助疗效，但因为铁含量低，并不能完全解决孕妇在孕期因缺少铁元素而引起的贫血症。\n            ")]),t._v(" "),s("p",[t._v("\n                2. 水果蔬菜不能补血。许多孕妇们认为蔬菜与水果对补铁补血没有什么关系，其实，蔬菜水果中富含维生素C、柠檬酸及苹果酸，这类有机酸可与铁相互融合，从而增加铁在肠道内的溶解度，有利于铁的吸收。因此，孕妇朋友们多吃富含维生素C和柠檬酸的食物，可间接帮助补血。（李元）\n            ")]),t._v(" "),s("p",[t._v("\n                本文由中国人民解放军总医院第一附属(304)医院八一大楼门诊部主任彭国球进行科学性把关。\n            ")]),t._v(" "),s("p",[t._v("\n            　　专家领域：健康养生类、临床医学类、心理医学类。\n            ")])])])])}]};var k=a("VU/8")({},b,!1,function(t){a("CHM8")},null,null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"register"},[e("h2",[this._v("科普推广系统")]),this._v(" "),e("span",[this._v("注册页面")]),this._v(" "),e("div",{staticClass:"reg-box"})])}]};var S=a("VU/8")({},y,!1,function(t){a("ULpL")},null,null).exports,j=a("Wxq9"),U={name:"acount",data:function(){return{city:j.regionData,selectedCity:[],textShow:!0,modShow:!1,cacheLogo:"",user:{name:"",address:"",phone:"",email:"",avatar:""}}},created(){this.getUser()},filters:{CodeToTextFilter:function(t){if(!t)return"";return t=t.split(","),j.CodeToText[t[0]]+" "+j.CodeToText[t[1]]+" "+j.CodeToText[t[2]]}},methods:{handleRemove(t,e){console.log(t,e)},handlePreview(t){console.log(t)},beforeUpload(t){const e="image/jpeg"===t.type||"image/png",a=t.size/1024/1024<2;return e||this.$message.error("只能上传jpg或png格式图片"),a||this.$message.error("图片大小不能超过2MB"),e&&a},httpLogoUpload(t){let e=t.file,a=this;console.log(e);let s=localStorage.getItem("token"),i=new FormData;i.append("foo",t.file),i.append("token",s);o.a.post("http://120.79.214.223:3001/upload",i,{"Content-Type":"multipart/form-data"}).then(t=>{console.log(t),200===t.status&&1==t.data.status?a.cacheLogo=t.data.data.name:a.$message.error("上传失败，请重试")})},getUser(){o.a.get("http://120.79.214.223:3001/getUser",{params:{id:localStorage.getItem("id"),token:localStorage.getItem("token")}}).then(t=>{200===t.status&&(Object.assign(this.user,t.data.data[0]),this.cacheLogo=t.data.data[0].avatar,console.log(this.cacheLogo))})},modUser:function(){this.selectedCity=this.user.address.split(","),this.textShow=!this.textShow,this.modShow=!this.modShow,this.cacheLogo=this.user.avatar},updateUser:function(){var t=this;console.log(t.user),console.log(t.selectedCity),console.log(j.CodeToText[t.selectedCity[0]]),t.user.address=t.selectedCity.join(","),t.user.avatar=t.cacheLogo,t.user.qualification=this.cacheQua,o.a.post("http://120.79.214.223:3001/userupdate",h.a.stringify({id:localStorage.getItem("id"),token:localStorage.getItem("token"),user:JSON.stringify(t.user)})).then(e=>{console.log(e),this.$message({message:"修改成功",type:"success"}),Object.assign(this.user,e.data.data[0]),t.modUser()})}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"acount"},[a("h2",[t._v("基本信息")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.textShow,expression:"textShow"}],staticClass:"usermod el-icon-edit-outline",on:{click:t.modUser}}),t._v(" "),a("div",{staticClass:"acount-box"},[a("ul",{staticClass:"acount-list"},[a("li",[a("span",[t._v("用户名")]),t._v(" "),t.textShow?a("p",[t._v(t._s(t.user.name))]):t._e(),t._v(" "),t.modShow?a("el-input",{attrs:{placeholder:"账户名"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}):t._e()],1),t._v(" "),a("li",[a("span",[t._v("地址")]),t._v(" "),t.textShow?a("p",[t._v(t._s(t._f("CodeToTextFilter")(t.user.address)))]):t._e(),t._v(" "),t.modShow?a("div",{staticClass:"city-select"},[a("el-cascader",{attrs:{options:t.city},model:{value:t.selectedCity,callback:function(e){t.selectedCity=e},expression:"selectedCity"}})],1):t._e()]),t._v(" "),a("li",[a("span",[t._v("手机号码")]),t._v(" "),t.textShow?a("p",[t._v(t._s(t.user.phone))]):t._e(),t._v(" "),t.modShow?a("el-input",{attrs:{placeholder:"手机号码"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}}):t._e()],1),t._v(" "),a("li",[a("span",[t._v("电子邮箱")]),t._v(" "),t.textShow?a("p",[t._v(t._s(t.user.email))]):t._e(),t._v(" "),t.modShow?a("el-input",{attrs:{placeholder:"邮箱"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}):t._e()],1),t._v(" "),a("li",[a("span",[t._v("用户头像")]),t._v(" "),a("div",{staticClass:"acount-user-logo"},[a("img",{attrs:{src:"http://120.79.214.223:3001/"+t.cacheLogo,alt:""},model:{value:t.cacheLogo,callback:function(e){t.cacheLogo=e},expression:"cacheLogo"}})]),t._v(" "),t.modShow?a("div",{staticClass:"acount-logo-operate"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"http://120.79.214.223:3001/upload",name:"foo",multiple:!1,"show-file-list":!1,limit:1,"before-upload":t.beforeUpload,"http-request":t.httpLogoUpload,"on-preview":t.handlePreview,"on-remove":t.handleRemove}},[a("el-button",{staticClass:"up-btn",attrs:{type:"primary"}},[t._v("上传图片\n                         ")]),t._v(" "),a("span",[t._v("\n                            jpg/png/bmp,小于1M 建议：200*200像素\n                        ")])],1)],1):t._e()])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.modShow,expression:"modShow"}],staticClass:"submit-box"},[a("el-button",{staticClass:"sub-btn",on:{click:t.modUser}},[t._v("取消")]),t._v(" "),a("el-button",{staticClass:"sub-btn",attrs:{type:"primary"},on:{click:t.updateUser}},[t._v("确定")])],1)])])},staticRenderFns:[]};var W=a("VU/8")(U,$,!1,function(t){a("lQpS")},null,null).exports,T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-box"},[a("div",{staticClass:"base"},[a("ul",{staticClass:"media-list"},t._l(t.media,function(e){return a("li",[a("router-link",{staticClass:"media-box",attrs:{to:"/item/123"}},[a("div",{staticClass:"media-img"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("div",{staticClass:"media-content"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.auth)+" "+t._s(e.time))])])])],1)})),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("热点推荐")])]),t._v(" "),t._l(t.media,function(e){return a("div",{staticClass:"text item hot-list",staticStyle:{margin:"20px 0"}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("span",{staticClass:"textdia"},[t._v(t._s(e.title))])])})],2)],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)},staticRenderFns:[]};var L=a("VU/8")({name:"",data:function(){return{media:[{url:"http://www.kepuchina.cn/tech/cxgc/201804/W020180428515824477671.jpg",title:"甘肃武威医用重离子加速器系统全面完成检测报告",time:"2018-04-20",auth:"新华网"},{url:"http://www.kepuchina.cn/tech/cxgc/201804/W020180428509139869970.jpg",title:"中国女性在发明中贡献远超全球平均水平",time:"2018-04-28",auth:"新华网"},{url:"http://www.kepuchina.cn/kpcs/lcb/lcb3/201707/W020170720566959928100.jpg",title:"自动驾驶“跳级”没那么简单",time:"2017-07-20",auth:"科学网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402545094279325.png",title:"创业路上遇难事 政策帮你破难题",time:"2018-04-20",auth:"中国政府网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402548846883852.jpg",title:"创客们！来看专属创业优惠政策",time:"2018-04-20",auth:"中国政府网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402566793185321.jpg",title:"“双创”要升级 来看最新版本",time:"2018-04-20",auth:"中国政府网"}]}}},T,!1,function(t){a("RDSn")},null,null).exports,E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-box"},[a("div",{staticClass:"base"},[a("ul",{staticClass:"media-list"},t._l(t.media,function(e){return a("li",[a("router-link",{staticClass:"media-box",attrs:{to:"/item/123"}},[a("div",{staticClass:"media-img"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("div",{staticClass:"media-content"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.auth)+" "+t._s(e.time))])])])],1)})),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("热点推荐")])]),t._v(" "),t._l(t.media,function(e){return a("div",{staticClass:"text item hot-list",staticStyle:{margin:"20px 0"}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("span",{staticClass:"textdia"},[t._v(t._s(e.title))])])})],2)],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)},staticRenderFns:[]};var V=a("VU/8")({name:"",data:function(){return{media:[{url:"http://www.kepuchina.cn/tech/cxgc/201804/W020180428515824477671.jpg",title:"甘肃武威医用重离子加速器系统全面完成检测报告",time:"2018-04-20",auth:"新华网"},{url:"http://www.kepuchina.cn/tech/cxgc/201804/W020180428509139869970.jpg",title:"中国女性在发明中贡献远超全球平均水平",time:"2018-04-28",auth:"新华网"},{url:"http://www.kepuchina.cn/kpcs/lcb/lcb3/201707/W020170720566959928100.jpg",title:"自动驾驶“跳级”没那么简单",time:"2017-07-20",auth:"科学网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402545094279325.png",title:"创业路上遇难事 政策帮你破难题",time:"2018-04-20",auth:"中国政府网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402548846883852.jpg",title:"创客们！来看专属创业优惠政策",time:"2018-04-20",auth:"中国政府网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402566793185321.jpg",title:"“双创”要升级 来看最新版本",time:"2018-04-20",auth:"中国政府网"}]}}},E,!1,function(t){a("20lA")},null,null).exports,F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-box"},[a("div",{staticClass:"base"},[a("ul",{staticClass:"media-list"},t._l(t.media,function(e){return a("li",[a("router-link",{staticClass:"media-box",attrs:{to:"/item/123"}},[a("div",{staticClass:"media-img"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("div",{staticClass:"media-content"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.auth)+" "+t._s(e.time))])])])],1)})),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("热点推荐")])]),t._v(" "),t._l(t.media,function(e){return a("div",{staticClass:"text item hot-list",staticStyle:{margin:"20px 0"}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("span",{staticClass:"textdia"},[t._v(t._s(e.title))])])})],2)],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)},staticRenderFns:[]};var R=a("VU/8")({name:"",data:function(){return{media:[{url:"http://www.kepuchina.cn/tech/cxgc/201804/W020180428515824477671.jpg",title:"甘肃武威医用重离子加速器系统全面完成检测报告",time:"2018-04-20",auth:"新华网"},{url:"http://www.kepuchina.cn/tech/cxgc/201804/W020180428509139869970.jpg",title:"中国女性在发明中贡献远超全球平均水平",time:"2018-04-28",auth:"新华网"},{url:"http://www.kepuchina.cn/kpcs/lcb/lcb3/201707/W020170720566959928100.jpg",title:"自动驾驶“跳级”没那么简单",time:"2017-07-20",auth:"科学网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402545094279325.png",title:"创业路上遇难事 政策帮你破难题",time:"2018-04-20",auth:"中国政府网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402548846883852.jpg",title:"创客们！来看专属创业优惠政策",time:"2018-04-20",auth:"中国政府网"},{url:"http://www.kepuchina.cn/zt/2018/innovation/05/201804/W020180402566793185321.jpg",title:"“双创”要升级 来看最新版本",time:"2018-04-20",auth:"中国政府网"}]}}},F,!1,function(t){a("LnrS")},null,null).exports,N={name:"",data:function(){return{media:[{url:a("5v/k"),title:"孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("dwW2"),title:"补充维生素不是想补就能补 补充过量会中毒",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("UDxU"),title:"老人黄昏突然变得糊涂？可能患上了“日落综合征”",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("QgdS"),title:"头皮瘙痒怎么办？注意清洁、正确护理很重要",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("QC80"),title:"警惕“病从口入” 预防食源性疾病有方法",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("5v/k"),title:"孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血",time:"2018-04-20",auth:"科普中国-乐享健康"}]}}},Q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-box"},[a("div",{staticClass:"base"},[a("ul",{staticClass:"media-list"},[t._l(t.media,function(e){return a("li",[a("router-link",{staticClass:"media-box",attrs:{to:"/item/123"}},[a("div",{staticClass:"media-img"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("div",{staticClass:"media-content"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.auth)+" "+t._s(e.time))])])])],1)}),t._v(" "),t._m(0),t._v(" "),t._m(1)],2),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("热点推荐")])]),t._v(" "),t._l(t.media,function(e){return a("div",{staticClass:"text item hot-list",staticStyle:{margin:"20px 0"}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("span",{staticClass:"textdia"},[t._v(t._s(e.title))])])})],2)],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"media-box"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:a("5v/k"),alt:""}})]),this._v(" "),e("div",{staticClass:"media-content"},[e("h2",[this._v("孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血")]),this._v(" "),e("span",[this._v("科普中国-乐享健康 2018-04-20")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"media-box"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:a("5v/k"),alt:""}})]),this._v(" "),e("div",{staticClass:"media-content"},[e("h2",[this._v("孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血")]),this._v(" "),e("span",[this._v("科普中国-乐享健康 2018-04-20")])])])}]};var I=a("VU/8")(N,Q,!1,function(t){a("HIn5")},null,null).exports,z={name:"",data:function(){return{media:[{url:a("5v/k"),title:"孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("dwW2"),title:"补充维生素不是想补就能补 补充过量会中毒",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("UDxU"),title:"老人黄昏突然变得糊涂？可能患上了“日落综合征”",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("QgdS"),title:"头皮瘙痒怎么办？注意清洁、正确护理很重要",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("QC80"),title:"警惕“病从口入” 预防食源性疾病有方法",time:"2018-04-20",auth:"科普中国-乐享健康"},{url:a("5v/k"),title:"孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血",time:"2018-04-20",auth:"科普中国-乐享健康"}]}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-box"},[a("div",{staticClass:"base"},[a("ul",{staticClass:"media-list"},[t._l(t.media,function(e){return a("li",[a("router-link",{staticClass:"media-box",attrs:{to:"/item/123"}},[a("div",{staticClass:"media-img"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("div",{staticClass:"media-content"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.auth)+" "+t._s(e.time))])])])],1)}),t._v(" "),t._m(0),t._v(" "),t._m(1)],2),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("热点推荐")])]),t._v(" "),t._l(t.media,function(e){return a("div",{staticClass:"text item hot-list",staticStyle:{margin:"20px 0"}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:e.url,alt:""}})]),t._v(" "),a("span",{staticClass:"textdia"},[t._v(t._s(e.title))])])})],2)],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"media-box"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:a("5v/k"),alt:""}})]),this._v(" "),e("div",{staticClass:"media-content"},[e("h2",[this._v("孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血")]),this._v(" "),e("span",[this._v("科普中国-乐享健康 2018-04-20")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"media-box"},[e("div",{staticClass:"media-img"},[e("img",{attrs:{src:a("5v/k"),alt:""}})]),this._v(" "),e("div",{staticClass:"media-content"},[e("h2",[this._v("孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血")]),this._v(" "),e("span",[this._v("科普中国-乐享健康 2018-04-20")])])])}]};var D=a("VU/8")(z,M,!1,function(t){a("Nd0d")},null,null).exports;s.default.use(u.a);var H=new u.a({routes:[{path:"/",name:"common",component:f,children:[{path:"home",name:"HelloWorld",component:d},{path:"/base",name:"Base",component:w},{path:"/policy",name:"Policy",component:L},{path:"/central",name:"Central",component:V},{path:"/countryside",name:"Countryside",component:R},{path:"/science",name:"Science",component:I},{path:"/technology",name:"Technology",component:D},{path:"/item/:id",name:"item",component:k},{path:"acount",name:"acount",component:W}]},{path:"/register",name:"register",component:S}]});s.default.prototype.$axios=o.a,s.default.config.productionTip=!1,s.default.use(n.a),new s.default({el:"#app",router:H,components:{App:c},template:"<App/>"})},Nd0d:function(t,e){},QC80:function(t,e,a){t.exports=a.p+"static/img/media-05.35cff79.jpg"},QgdS:function(t,e,a){t.exports=a.p+"static/img/media-04.67dfe92.jpg"},QoU1:function(t,e,a){t.exports=a.p+"static/img/info-05.8b0dc1b.jpg"},RDSn:function(t,e){},T0kT:function(t,e){},Tskc:function(t,e,a){t.exports=a.p+"static/img/01.b524835.jpg"},UDxU:function(t,e,a){t.exports=a.p+"static/img/media-03.28a417f.jpg"},ULpL:function(t,e){},XbQM:function(t,e,a){t.exports=a.p+"static/img/info-04.f4dbb0f.jpg"},aKKx:function(t,e){},dwW2:function(t,e,a){t.exports=a.p+"static/img/media-02.99d0194.jpg"},lQpS:function(t,e){},mTU8:function(t,e,a){t.exports=a.p+"static/img/info-03.9ce709e.jpg"},"pL8+":function(t,e,a){t.exports=a.p+"static/img/03.b098954.jpg"},tezo:function(t,e,a){t.exports=a.p+"static/img/04.5022390.jpg"},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5de5ce439eaa3954bb69.js.map