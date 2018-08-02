<template>
    <section>
      <div class="itemClass">
        <ul>
          <li class="title">项目类别</li>
          <li class="title-disc">The project category</li>
          <li class="imgs">
            <ul class="img-item">
              <li>
                <i class="ecoPark"></i>
                <span>生态园区</span>
              </li>
              <li>
                <i class="wisPark"></i>
                <span class="charac">智慧园区 （特色小镇）</span>
              </li>
              <li>
                <i class="officeBuild"></i>
                <span>办公楼(群)</span>
              </li>
              <li>
                <i class="plants"></i>
                <span>厂房</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="module oneMou">
        <div class="img oneImg">
          <span class="digit"></span>
        </div>
        <ul class="text">
          <li class="sign"></li>
          <li class="title">广东省东莞市松湖智谷智慧园区</li>
          <li class="title-disc">构建包含办公、社区生活、商业、工厂的园区复合生态</li>
          <li class="intro">
            松湖智谷处于粤港澳大湾区核心区域和东莞几何中心位置，位于松山湖大道与石大路交会处。项目 总投资200
            亿，占地面积1500亩，建筑面积180万平方米。其中一期投资30亿，占地350亩。总面积约103万平方米。
          </li>
        </ul>
      </div>
      <div class="blackArea"></div>
      <div class="module twoMou">
        <ul class="text">
          <li class="sign"></li>
          <li class="title">松山湖大学城</li>
          <li class="title-disc">广东省东莞市松山湖大学城</li>
          <li class="title-disc">松山湖大学城简介松山湖大学城简介松山湖大学城简介</li>
          <li class="intro">
            大学创新城占地面积397亩，总建筑面积53.3万平方米，总投资约27亿元。<br>
            大学创新城分为科研功能区、企业孵化功能区、高端配套功能区。<br>
            分四期建设，首期工程已于2013年9月16日动工。
          </li>
        </ul>
        <div class="img twoImg">
          <span class="digit"></span>
        </div>
      </div>
      <div class="module threeMou">
        <div class="img threeImg">
          <span class="digit"></span>
        </div>
        <ul class="text">
          <li class="sign"></li>
          <li class="title">金领谷智慧园区</li>
          <li class="title-disc">上海市金领谷智慧园区</li>
          <li class="intro">
            以金领谷中兴智汇上海科技产业园为载体<br>
            以三大产业主题为核心<br>
            助力上海南部科技走廊和吴泾镇科技时尚特色小镇的建设发展
          </li>
        </ul>
      </div>
      <div class="module fourMou">
        <ul class="text">
          <li class="sign"></li>
          <li class="title">湖北省武汉光谷创星汇科技园</li>
          <li class="title-disc">为创业者提供办公、居住、学习、交流、娱乐等全方位服务</li>
          <li class="intro">
            关于湖北省武汉市光谷创星汇科技园的项目简洁关于湖北省武汉市光谷创星汇科技园的项目简洁   关于湖北省武
            汉市光谷创星汇科技园的项目简洁 关于湖北省武汉市光谷创星汇科技园的项目简洁
          </li>
        </ul>
        <div class="img fourImg">
          <span class="digit"></span>
        </div>
      </div>
      <div class="blackArea"></div>
      <div class="module fiveMou">
        <div class="img fiveImg">
          <span class="digit"></span>
        </div>
        <ul class="text">
          <li class="sign"></li>
          <li class="title">广东省深圳市宝能科技园</li>
          <li class="title-disc">打造园区一卡通与全场景运营平台</li>
          <li class="intro">
            关于广东省深圳市宝能科技园的项目简介关于广东省深圳市宝能科技园的项目简介<br>
            关于广东省深圳市宝能科技园的项目简介<br>
            关于广东省深圳市宝能科技园的项目简介
          </li>
        </ul>
      </div>

    </section>
</template>

<script>
    export default {
        name: "case"
    }
</script>

<style lang="scss" scoped>
  *{box-sizing: border-box;}
  .itemClass{
    text-align: center;
    height: 16.67rem;
    background: url(../../assets/case-bg.jpg) no-repeat center center;
    background-size: 100% 16.67rem;
    color: #fff;
    ul{
      padding-top: 2.07rem;
      li{
        font-family: PingFangSC-Light;
        font-size: 0.89rem;//48px;
        letter-spacing: 0;
        &.title-disc{
          font-size: 0.44rem;//24px;
        }
        &.imgs{
          .img-item{
            li{
              display: inline-block;
              width: 5rem;
              height: 7.04rem;
              margin: 0 0.26rem;
              background: #fff;
              i{
                display: inline-block;
                width: 100%;
                height: 5rem;
                background: url(../../assets/case-ecologicalPark.png) no-repeat center center;
                background-size: 5rem 5rem;
                &.wisPark{background-image: url(../../assets/case-wisdomPark.png);}
                &.officeBuild{background-image: url(../../assets/case-offfice-build.png);}
                &.plants{background-image: url(../../assets/case-plant.png);}
              }
              span{
                display: inline-block;
                font-family: PingFangSC-Light;
                font-size: 0.41rem;//22px;
                color: #333333;
                letter-spacing: 0;
              }
            }
          }
        }
      };
    }
  }
  .text{
    display: inline-block;
    width: 8rem;
    li{
      display: block;
      margin-bottom: 0.185rem;
      text-align: justify;
      color: #333333;
      letter-spacing: 0;
      &.sign{
        margin-bottom: 0.56rem;
        width: 0.93rem;
        height: 0.11rem;
        background: #333;
      }
      &.title{
        font-family: PingFangSC-Semibold;
        font-size: 0.44rem;//24px;
      }
      &.title-disc{
        font-family: PingFangSC-Regular;
        font-size: 0.37rem;//20px;
      }
      &.intro{
        margin-top: 0.56rem;
        font-family: PingFangSC-Regular;
        font-size: 0.33rem;//18px;
        color: #757575;
      }
    };
  }
  .module{
    .img{
      display: inline-block;
      width: 51%;//18.14rem;
      height: 8.33rem;
      background: url(../../assets/case-shzg.jpg) no-repeat center center;
      background-size: 100% 8.33rem;//18.14rem 8.33rem;
      .digit{
        display: inline-block;
        width: 2rem;
        height: 2.67rem;
        background: url(../../assets/icon-t1.png) no-repeat center center;
        background-size: 100%;
        margin-top: -1.5rem;
      }
    }
    &.oneMou{
      height: 12.89rem;
      padding-top: 6.35rem;
      .img{
        margin-right: 1.3rem;
        vertical-align: top;
        .digit{
          float: right;
          margin-right: 1.09rem;
        }
    }
    }
    &.twoMou{
      height: 9.96rem;
      text-align: right;
      .img{
        vertical-align: text-bottom;
        margin: -1.13rem 0 0 1.3rem;
        background-image: url(../../assets/case-ss-collegetown.jpg);
        .digit{
          float: left;
          margin-left: 0.7rem;
          background-image: url(../../assets/icon-t2.png);
        }
      }
    }
    &.threeMou{
      height: 12.6rem;
      padding-top: 2.15rem;
      background-image: linear-gradient(-180deg, #F2F2F2 0%, #E3E3E3 100%);
      .img{
        margin-right: 1.3rem;
        vertical-align: top;
        background-image: url(../../assets/case-jlgz.jpg);
        .digit{
          float: right;
          margin-right: 1.09rem;
          background-image: url(../../assets/icon-t3.png);
        }
      }
    }
    &.fourMou{
      height: 8.52rem;
      padding-top: 2.4rem;
      text-align: right;
      .img{
        vertical-align: top;
        margin-left: 1.3rem;
        background-image: url(../../assets/case-cxh.jpg);
        .digit{
          float: left;
          margin-left: 0.7rem;
          background-image: url(../../assets/icon-t4.png);
        }
      }
    }
    &.fiveMou{
      .img{
        vertical-align: text-bottom;
        margin-top: -1.96rem;
        margin-right: 1.3rem;
        background-image: url(../../assets/case-bn.jpg);
        .digit{
          float: right;
          margin-right: 1.09rem;
          background-image: url(../../assets/icon-t5.png);
        }
      }
    }
  }
  .blackArea{
    background: #272727;
    height: 8.15rem;
  }
</style>
