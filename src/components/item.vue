<template lang="html">
    <div class="item-box">
        <div class="item-content">
            <div class="item-cheader">
                <div class="item-chimg">
                    <img src="../assets/images/media-01.jpg" alt="">
                </div>
                <div class="item-chtitle">
                    <h2>
                        孕妇缺铁危害大 饮食补铁可防治孕妇缺铁性贫血
                    </h2>
                    <span>科普中国-乐享健康 2018-04-20</span>
                </div>
            </div>
            <div class="item-cbody">
                <p>
                    怀孕期间，“补”这个字成了孕妈们的重要一课。如果营养跟不上，孕妇很容易出
                现贫血现象。那么，孕妇应该如何补血？孕期补血有哪些误区呢？
                </p>
                <p>
                    除了对孕妇自身的影响，孕期缺铁性贫血也会对腹中胎儿造成危害。据中国新闻网报道，孕妇在孕期缺铁性贫血很可能会影响胎儿及出生后婴幼儿的以下几个方面的神经行为，包括：对信息加工、处理的速度，个人情商以及学习和记忆能力。具体表现为精神萎靡，对周围环境反应差，多动易哭闹，记忆力不佳，食欲不振、严重者有异食癖，免疫功能低下，易患各种感染等。这其中又以学习和记忆能力受到的影响特别突出。
                </p>
                <p>
                    由此可见，孕妇孕期补血十分重要。那么，孕妇孕期应该如何补血呢？据《科技日报》报道，食补是个不错的选择，补血食物的首选是红色的肉类、内脏等动物性食品，动物内脏比如猪肝的铁含量可达30mg/100g。对比植物性食材，比如红枣，铁含量一般为2~3mg/100g，在铁含量方面，动物性食品是有明显优势的。另一方面，动物性食品中铁的存在形式主要是血红素铁，血红素铁可以被消化道直接吸收，而且吸收过程中几乎不受其他食物因素的干扰，吸收效率比较高。研究数据表明，在含有肉类的混合膳食中，铁元素的吸收率为10%，而粮食豆类中的铁吸收率仅有1%~3%。
                </p>
                <p>
                    此外，阿胶也是孕妇补血的一个不错选择。据人民网健康频道报道，山东中医药大学的郭瑞华教授说，从阿胶的功效上来讲，针对女性生育期阴血亏虚的状态，它可以止血又能够很好地补血。阿胶是血肉有情之品，入肝可以养血，入肾可以养精。阿胶还含有丰富的钙质，妊娠期女性食用后可以防止孕妇的缺钙和贫血；在产后吃阿胶乳汁里面也会含有丰富的钙质，对新生儿也好。
                </p>
                <p>
                    需要注意的是，据中国日报网消息，孕期补血往往存在以下两点误区：
                </p>
                <p>
                    1. 服用补血保健品来补血。市场销售的补血保健品琳琅满目，虽然这些保健品含有一定量的各种形式的铁，对缺铁性贫血有辅助疗效，但因为铁含量低，并不能完全解决孕妇在孕期因缺少铁元素而引起的贫血症。
                </p>
                <p>
                    2. 水果蔬菜不能补血。许多孕妇们认为蔬菜与水果对补铁补血没有什么关系，其实，蔬菜水果中富含维生素C、柠檬酸及苹果酸，这类有机酸可与铁相互融合，从而增加铁在肠道内的溶解度，有利于铁的吸收。因此，孕妇朋友们多吃富含维生素C和柠檬酸的食物，可间接帮助补血。（李元）
                </p>
                <p>
                    本文由中国人民解放军总医院第一附属(304)医院八一大楼门诊部主任彭国球进行科学性把关。
                </p>
                <p>
                　　专家领域：健康养生类、临床医学类、心理医学类。
                </p>

            </div>
        </div>
        <!-- <div class="item-aside">

        </div> -->
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
    .item-box {
        width: 1200px;
        // background-color: #eee;
        display: flex;
        justify-content: center;
        .item-content {
            width: 900px;
            // height: 400px;
            padding: 0 30px;
            padding-bottom: 50px;
            box-shadow: 0px 0px 11px 4px #eee;
            .item-cheader {
                width: 100%;
                padding: 30px 0 20px 0;
                display: flex;
                justify-content: flex-start;
                border-bottom: 2px solid #eee;
                .item-chimg {
                    width: 150px;
                    height: 100px;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
                .item-chtitle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    padding-left: 20px;
                    text-align: left;
                }
            }
            .item-cbody {
                p {
                    padding: 20px 0;
                    text-indent: 32px;
                    text-align: left;
                    font-size: 16px;
                    line-height: 32px;
                    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
                }
            }
        }
        .item-aside {
            width: 350px;
            height: 400px;
            box-shadow: 5px 0px 11px 4px #eee;
        }
    }
</style>
