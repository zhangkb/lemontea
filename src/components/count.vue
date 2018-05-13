<template lang="html">
    <div class="account">
        <div id="count">

        </div>
    </div>
</template>

<script>
export default {
    name: 'account',
    data () {
        return {

        }
    },
    created () {

    },
    mounted () {
        this.drawLine()
    },
    methods: {
        drawLine: function(){
            let self = this;
            let consum = self.$echarts.init(document.getElementById('count'));
            consum.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['在线设备','在线人数','总联网人数','总认证人数','新增人数']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['郑州','洛阳','信阳','许昌','驻马店','安阳','新乡']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'在线设备',
                        type:'line',
                        stack: '总量',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'在线人数',
                        type:'line',
                        stack: '总量',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'总联网人数',
                        type:'line',
                        stack: '总量',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'总认证人数',
                        type:'line',
                        stack: '总量',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'新增人数',
                        type:'line',
                        stack: '总量',
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            })

        }
    }
}
</script>

<style lang="css">
#count {
    width: 100%;
    height: 600px;
    margin: 20px 0;
}
</style>
