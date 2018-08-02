<template>
    <section>
      <div class="info">
        <ul class="info-top">
          <li>
            <span class="first"></span>
            <span class="second"></span>
            <span class="third"></span>
          </li>
        </ul>
        <ul class="info-bot">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="backMg">
        <span class="title"></span>
        <span class="img"></span>
      </div>
      <div class="appInfo">
        <div class="info-top"></div>
        <div class="info-img">
          <span class="title"></span>
          <span class="img"></span>
        </div>
      </div>
      <div class="case">
        <span class="title"></span>
        <div class="swiper-item">
          <div class="button prev" @click="prevSlideClick"></div>
          <Swiper ref="swiper" v-if="list.length>0">
            <!--<Swiper ref="swiper" @transtionend="getNum" v-if="list.length>0">-->
            <Slide v-for="(item,index) in list" :key=index>
              <img :src="item.img" />
              <div class="disc">
                <span class="item-title">{{item.title}}</span>
                <span class="content">{{item.content}}</span>
                <span class="icon"></span>
              </div>
            </Slide>
          </Swiper>
          <div class="button next" @click="nextSlideClick"></div>
        </div>

      </div>
    </section>
</template>

<script>
  // import { Swiper, Slide } from 'vue-swiper-component'
  import { Swiper, Slide } from '../../components/index'
    export default {
      components: {
        Swiper,
        Slide
      },
        data(){
          return {
            list: [
              {
                title:'松山湖大学城',
                content:'松山湖大学城简介松山湖大学城简介松山湖大学城简介',
                img: 'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360'
              },
              {
                title:'大学城',
                content:'松山湖大学城简介松山湖大学城简介松山湖大学城简介',
                img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360'
              },
              {
                title:'松山湖大学',
                content:'松山湖大学城简介松山湖大学城简介松山湖大学城简介',
                img: 'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360'
              }
            ]
          }
        },
        methods:{
          getNum(i) {
            this.$toast(`==当前滑到了第${i}个`, 400);
          },
          prevSlideClick() {
            this.$refs.swiper.prevSlide()
          },
          nextSlideClick() {
            this.$refs.swiper.nextSlide()
          },
          slideToClick() {
            this.$refs.swiper.slideTo(2)
          }
        },
        mounted(){}
    }
</script>

<style lang="scss" scoped>
  .info{
    .info-top{
      display: inline-block;
      width: 100%;
      height: 15.85rem;//856px;
      background: url(../../assets/icon-bg.jpg) no-repeat center top;
      background-size:100% 15.85rem;//cover;
      li{
        display: inline-block;
        height: 100%;
        width: 100%;
        line-height: 15.85rem;//856px;
        text-align: center;
        span{
          display: inline-block;
          width: 4.87rem;//263px;//25%;
          margin: 0 1.17rem;
          height: 2.19rem;//118px;
          background: url(../../assets/01.png) no-repeat center center;
          background-size: 4.87rem 2.19rem;//263px 118px;
          vertical-align: middle;
          &.second{
            background-image: url(../../assets/02.png);
          }
          &.third{
            background-image: url(../../assets/03.png);
          }
        }
      }
    }
    .info-bot{
      height: 9.98rem;
      background-image: linear-gradient(-180deg, #F2F2F2 0%, #E3E3E3 100%);
      text-align: center;
      li{
        display: inline-block;
        width: 5.37rem;
        height: 5.37rem;
        background: url(../../assets/icon-efficiencyMg.jpg) no-repeat center center;
        background-size: 100%;
        margin: 2.3rem 0.74rem;
        &:nth-child(2){
          background-image: url(../../assets/icon-ser-perception.jpg);
        }
        &:last-child{
          background-image: url(../../assets/icon-operating.jpg);
        }
      }
    }
  }
  .backMg{
    height: 20.39rem;
    background: url(../../assets/icon-bg2.jpg) no-repeat center top;
    background-size: 100% 13.89rem;
    text-align: center;
    span{
      display: inline-block;
      width: 100%;
      &.title{
        height: 2.26rem;
        background: url(../../assets/icon-admin-words.png) no-repeat center center;
        background-size: 7.31rem 2.26rem;
        margin: 1.42rem 0 1.26rem;
      }
      &.img{
        height: 11.37rem;
        background: url(../../assets/icon-adminMg.png) no-repeat center center;
        background-size: 24.89rem 11.37rem;
      }
    }
  }
  .appInfo{
    height: 21.8rem;
    text-align: center;
    position: relative;
    .info-top{
      background-image: linear-gradient(-180deg, #F2F2F2 0%, #E3E3E3 100%);
      height: 13.89rem;
    }
    .info-img{
      width: 100%;
      position: absolute;
      top: 1.31rem;
      span{
        display: inline-block;
        width: 100%;
        &.title{
          height: 2.17rem;
          background: url(../../assets/icon-app-words.png) no-repeat center center;
          background-size: 7.28rem 2.17rem;
          margin: 0 0 1.95rem;
        }
        &.img{
          height: 12.13rem;
          background: url(../../assets/icon-phones.png) no-repeat center center;
          background-size: 17.65rem 12.13rem;
        }
      }
    }
  }
  .case{
    height: 14.8rem;
    background: url(../../assets/icon-bg2.jpg) no-repeat center top;
    background-size: 100% 14.8rem;
    display: inline-block;
    width: 100%;
    span{
      display: inline-block;
      width: 100%;
      &.title{
        height: 0.83rem;
        background: url(../../assets/icon-case.png) no-repeat center center;
        background-size: 1.65rem 0.83rem;
        margin: 0.8rem 0 0.93rem;
      }
    }
    .swiper-item{
      position: relative;
      height: 10.09rem;
      margin: 0 auto;
      text-align: center;
      .button{
        display: inline-block;
        width: 1.04rem;
        height: 8.78rem;
        background: url(../../assets/but-left-nor.png) no-repeat center center;
        background-size: 100% 1.04rem;
        &.prev{margin-right: 5.56%;}
        &:hover,&.active{
          background-image: url(../../assets/but-left-sel.png);
        }
        &.next{
          margin-left: 5.56%;//1.98rem;
          background-image: url(../../assets/but-right-nor.png);
          &:hover,&.active{
            background-image: url(../../assets/but-right-sel.png);
          }
        }
      }
      .wh_content{
        position: static;
        display: inline-block;
        width: 22.23rem;
        .wh_swiper{
          .wh_slide{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            img{
              display: inline-block;
              width: 67%;//14.81rem;
              height: 8.78rem;
              vertical-align: top;
              margin-right: -1%;
            }
            .disc{
              display: inline-block;
              width: 33%;
              text-align: justify;
              height: 8.78rem;
              background: #fff;
              padding: 0 0.926rem;
              box-sizing: border-box;
              position: relative;
              .item-title{
                font-family: PingFangSC-Light;
                font-size: 30px;
                color: #333333;
                letter-spacing: 0;
                margin: 0.926rem 0 0.29rem 0;
              }
              .content{
                font-family: PingFangSC-Light;
                font-size: 18px;
                color: #333333;
                letter-spacing: 0;
              }
              .icon{
                display: inline-block;
                width: 0.48rem;
                height: 0.48rem;
                position: absolute;
                right: 0.37rem;
                bottom: 0.37rem;
                background: url(../../assets/icon-triangle.png) no-repeat center center;
                background-size: 100%;
              }
            }
          }
        }
        .wh_indicator{
          bottom: 0;
          width: 62.5%;//22.23rem;
          .wh_indicator_item{
            background: #757575;
            width: 0.56rem;
            height: 2px;
            &.wh_show_bgcolor{
              background: #fff;
            }
          }
        }
      }
    }
  }

  /*img {*/
    /*width: 100%;*/
  /*}*/
  /*.button {*/
    /*margin-top: 30px;*/
    /*position: relative;*/
    /*display: block;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*padding-left: 14px;*/
    /*padding-right: 14px;*/
    /*box-sizing: border-box;*/
    /*font-size: 18px;*/
    /*text-align: center;*/
    /*text-decoration: none;*/
    /*color: #ffffff;*/
    /*line-height: 2.33333333;*/
    /*border-radius: 5px;*/
    /*-webkit-tap-highlight-color: rgba(0, 0, 0, 0);*/
    /*overflow: hidden;*/
    /*border-width: 0;*/
    /*width: 50%;*/
    /*padding: 0 30px 0 30px;*/
    /*outline: 0;*/
    /*-webkit-appearance: none;*/
    /*background-color: #26a2ff;*/
  /*}*/
  /*.button:active {*/
    /*opacity: 0.5;*/
    /*color: #333;*/
  /*}*/
  /*.button2 {*/
    /*margin-top: 100px;*/
  /*}*/
</style>
