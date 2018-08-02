<template>
    <section>
      <div class="banner"></div>
      <div class="vp">
        <ul class="text">
          <li class="title">关于微品</li>
          <li>about  weipin</li>
        </ul>
        <div class="detail">
          <div class="img"></div>
          <ul class="intro">
            <li class="title">
              <b>客户运营时代先行者</b>
              <b>产业互联时代领航者</b>
            </li>
            <li>
              <b>核心业务</b>
              <span>
                包含智慧城市、智慧旅游、智慧园区、产业互联、AI精准营销等，以移动互联网、物联网、云计算、大数据
                等现代信息技术为关键，通过挖掘和运用平台大数据，促进城市及产业的转型升级。
              </span>
            </li>
            <li>
              <b>企业团队</b>
              <span>
                公司总部位于高科技公司云集的深圳南山科技园，目前有员工530人，其中研发团队有300多人，在深圳南山科
                技园和武汉光谷、西安软件新城均设有研发中心，在18个省份设有当地市场及运营服务中心。
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="brain">
        <ul class="text">
          <li class="title">园区大脑</li>
          <li>yuanqudanao</li>
        </ul>
        <div class="detail">
          <span>
              团队核心成员由中兴、华为、腾讯、捷顺等业内知名企业人员组成，参与过智慧城市、智慧园区建设
              项目，在智慧园区建设方面有丰富的经验。
          </span>
          <div class="img">
            <span class="zhx"></span>
            <span class="hw"></span>
            <span class="tencent"></span>
            <span class="jsh"></span>
          </div>
        </div>
      </div>
      <div class="mission">
        <ul class="text">
          <li class="title">团队使命</li>
          <li>Team mission</li>
        </ul>
        <span class="title-disc">团队使命：降本增效 开源节流 助力园区转型</span>
        <ul class="trans">
          <li>
            <i class="local"></i>
            <b>定位转型</b>
            <span>
              从一家物业公司，向一家大数据和人工智能公司转型，从 成本中心 向 盈利中心 转型
            </span>
          </li>
          <li>
            <i class="service"></i>
            <b>服务转型</b>
            <span>
             从无感知的单向被动式服务，转变为有感知的双向互动服务，降低整体能耗，提升品牌 价值 和 影响力
            </span>
          </li>
          <li>
            <i class="business"></i>
            <b>业务转型</b>
            <span>
             从封闭式内部资产管理，到 开放集成 的 资源运营，从单一营收模式到多元运营收入，从信息孤岛到平台化
            </span>
          </li>
        </ul>
      </div>
      <div class="honor">
        <ul class="text">
          <li class="title">团队荣誉</li>
          <li>Team hornor</li>
        </ul>
        <div class="detail">
          <ul class="tips">
            <li><i></i><span>成立于2014年9月</span></li>
            <li><i></i><span>中兴通讯孵化的互联网企业，央企、国资战略股东</span></li>
            <li><i></i><span>国内顶尖专业系统解决方案提供商</span></li>
            <li><i></i><span>整体技术开发服务与运营支撑服务</span></li>
            <li><i></i><span>为政府和大型企业集团提供产业升级服务</span></li>
            <li><i></i><span>大数据</span></li>
            <li><i></i><span>智能计算</span></li>
          </ul>
          <ul class="stars">
            <li><i></i><span>2016年深圳前海国税局纳税之星</span></li>
            <li><i></i><span>2016年深圳中小企业最佳雇主</span></li>
            <li><i></i><span>2017年中国十佳电子商务服务企业</span></li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "aboutUs"
    }
</script>

<style lang="scss" scoped>
  *{box-sizing: border-box;}
  .text{
    li{
      display: inline-block;
      width: 100%;
      font-family: PingFangSC-Light;
      font-size: 0.44rem;//24px;
      color: #333333;
      letter-spacing: 0;
      &.title{
        font-size: 0.89rem;//48px;
      }
    }
  }
  .banner{
    height: 16.67rem;
    background: url(../../assets/us-banner.jpg) no-repeat center center;
    background-size: 100% 16.67rem;
  }
  .vp{
    height: 15.74rem;
    background-image: linear-gradient(-180deg, #F2F2F2 0%, #E3E3E3 100%);
    text-align: center;
    padding-top: 1.1rem;
    .detail{
      margin-top: 1.48rem;
      .img{
        display: inline-block;
        width: 7.72rem;
        height: 7.59rem;
        background: url(../../assets/weipinlogo.png) no-repeat center center;
        background-size: 7.72rem 7.59rem;
        vertical-align: middle;
        margin-right: 1.11rem;
      }
      .intro{
        display: inline-block;
        width: 12.18rem;
        vertical-align: middle;
        li{
          margin-bottom: 0.59rem;
          color: #333333;
          letter-spacing: 0;
          b{
            display: inline-block;
            width: 100%;
            font-family: PingFangSC-Semibold;
            font-size: 0.44rem;//24px;
            text-align: left;
            margin-bottom: 0.15rem;
          }
          span{
            display: inline-block;
            width: 100%;
            text-align: justify;
            font-family: PingFangSC-Regular;
            font-size: 0.33rem;//18px;
          }
          &.title{
            margin-bottom: 1.2rem;
            b{
              display: inline;
              margin-right: 1.8rem;
              font-size: 0.56rem;
              &:last-child{margin-right: 0;}
            }
          }
        }
      }
    }
  }
  .brain{
    height: 15.18rem;
    text-align: center;
    padding-top: 3rem;
    .detail{
      margin-top: 1.27rem;
      span{
        display: inline-block;
        width: 14.54rem;
        margin-bottom: 2.04rem;
        text-align: justify;
        font-family: PingFangSC-Regular;
        font-size: 0.33rem;//18px;
        color: #333333;
        letter-spacing: 0;
      }
      .img{
        span{
          display: inline-block;
          margin-right: 2.04rem;
          margin-bottom: 0;
          vertical-align: middle;
          width: 2.3rem;
          height: 1rem;
          background: url(../../assets/icon-zhongxing.png) no-repeat center center;
          background-size: 2.3rem 1rem;
          &.hw{
            width: 1.3rem;
            height: 1.3rem;
            background-image: url(../../assets/icon-huawei.png);
            background-size: 1.3rem 1.3rem;
          }
          &.tencent{
            width: 3.72rem;
            height: 0.5rem;
            background-image: url(../../assets/icon-tencent.png);
            background-size: 3.72rem 0.5rem;
          }
          &.jsh{
            width: 1.8rem;
            height: 1.78rem;
            background-image: url(../../assets/icon-jieshun.png);
            background-size: 1.8rem 1.78rem;
          }
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
  }
  .mission{
    height: 17.5rem;
    text-align: center;
    padding-top: 1.96rem;
    background-image: linear-gradient(-180deg, #F2F2F2 0%, #E3E3E3 100%);
    .title-disc{
      display: inline-block;
      font-family: PingFangSC-Semibold;
      font-size: 0.56rem;//30px;
      color: #333333;
      letter-spacing: 0;
      margin: 0.8rem 0 1.87rem;
    }
    .trans{
      li{
        display: inline-block;
        width: 4.67rem;
        margin-right: 2.96rem;
        font-family: PingFangSC-Regular;
        letter-spacing: 0;
        vertical-align: text-top;
        i{
          display: inline-block;
          width: 100%;
          height: 3.67rem;
          background: url(../../assets/icon-us-localtrans.png) no-repeat center center;
          background-size: 3.67rem 3.67rem;
          &.service{background-image: url(../../assets/icon-us-servicetrans.png);}
          &.business{background-image: url(../../assets/icon-us-businesstrans.png);}
        }
        b{
          display: inline-block;
          width: 100%;
          margin: 1.13rem 0 0.37rem;
          font-size: 0.44rem;//24px;
          color: #333333;
        }
        span{
          display: inline-block;
          text-align: justify;
          font-size: 0.33rem;//18px;
          color: #757575;
        }
        &:last-child{margin-right: 0;}
      }
    }
  }
  .honor{
    height: 14.07rem;
    padding-top: 2.15rem;
    text-align: center;
    margin-bottom: -211px;
    background: #272727;
    .text{
      margin-bottom: 1.93rem;
      li{color: #fff;}
    }
    .detail{
      ul{
        display: inline-block;
        width: 28.63%;//10.18rem;
        margin-right: 2.96rem;
        text-align: left;
        vertical-align: top;
        li{
          font-family: PingFangSC-Regular;
          font-size: 0.44rem;//24px;
          color: #FFFFFF;
          letter-spacing: 0;
          line-height: 40px;
          i{
            display: inline-block;
            width: 1.87%;//0.19rem;
            height: 0.19rem;
            background: url(../../assets/p-tip.png) no-repeat center center;
            background-size: 0.19rem 0.19rem;
            margin-right: 0.2rem;
          }
          span{
            display: inline-block;
            vertical-align: text-top;
            width: 94.13%;//9.75rem;
          }
        }
        &.stars{
          margin-right: 0;
          li{
            i{
              width: 3.634%;//0.37rem;
              height: 0.35rem;
              background-image: url(../../assets/p-star.png);
              background-size: 0.37rem 0.35rem;
            }
            span{
              width: 92.6%;//9.6rem;
            }
          }
        }
      }
    }
  }
</style>
