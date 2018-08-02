<template>
  <div>
    <el-row class="container" :class="isopacity?'isopa':''">
      <el-col :span="12" class="logo">
        <!--<img class="logoImg" src="../assets/yuanqu-logo.png">-->
        <div class="logoImg"></div>
      </el-col>
      <el-col :span="12" class="nav">
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router>
            <template v-for="(item,index) in $router.options.routes">
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
            </template>
          </el-menu>
        </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="content-wrapper">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
    <el-row class="footer">
      <div class="build">
        <ul class="builders">
          <li class="title">园区大脑 — 智慧园区全生态建设者</li>
          <li class="building">
            <img src="../assets/yuanqu-logo.png">
            <img src="../assets/weipin.png">
          </li>
          <li>深圳微品致远信息科技有限公司</li>
          <li>广东省深圳市南山区科技园金融基地1栋4楼    0755-12345678</li>
        </ul>
        <div class="qrCode">
          <span class="qr"></span>
          <span>～ 扫码关注我 ～</span>
        </div>
      </div>
      <div class="ownerShip">
        <span>Copyright © 2018 Apple Inc. 保留所有权利。</span>
        <span>京公安网安备 11010502008968 京ICP备10214630</span>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isopacity:false,
      }
    },
    methods: {
      handleopen() {
        //console.log('handleopen');
      },
      handleclose() {
        //console.log('handleclose');
      },
      handleselect: function (a, b) {
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>150){
          this.isopacity=true;
        }else{
          this.isopacity=false;
        }
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

</script>

<style scoped lang="scss">
  .container{
    position: fixed;
    width: 100%;
    top: 0;
    height: 45px;
    line-height: 45px;
    background: #fff;
    z-index: 1000;
    /*opacity: 0.9;*/
    .el-col{
      display: inline-block;
      width: 48%;
    }
    .logo{
      text-align: center;
      img{
        vertical-align: middle;
        width: 85px;
      }
      .logoImg{
        display: inline-block;
        width: 85px;
        height: 20px;
        background: url(../assets/yuanqu-logo.png) no-repeat center center;
        background-size: 100%;
        vertical-align: middle;
      }
    }
    .nav{
      .el-menu-item{
        display: inline-block;
        padding: 0 20px;
        cursor: pointer;
        margin-right: 70px;//0.7rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #4a4a4a;
        outline: none;
        &.is-active{
          color: #000;
        }
      }
    }
    &.isopa{opacity:0.1;}
    &:hover{
      opacity: 1;
    }
  }
  .content-wrapper{margin-top: 45px;}
  .footer{
    margin-top: 211px;
    .build{
      height: 340px;//6.29rem;//340px;
      background: #eee;
      text-align: center;
      padding-top: 1.33rem;
      box-sizing: border-box;
      .builders{
        display: inline-block;
        box-sizing: border-box;
        text-align: left;
        width: 9.28rem;
        margin-right: 5rem;
        li{
          font-family: PingFangSC-Light;
          font-size: 18px;//0.33rem;//
          color: #757575;
          letter-spacing: 0;
          margin-bottom: 10px;//0.18rem;
          &.title{
            font-size: 30px;//0.56rem;
            margin-bottom: 30px;//0.56rem;
          }
          &.building{
            margin-bottom:38px;// 0.7rem;
            img{
              display: inline-block;
              width: 143px;//2.65rem;
              margin-right: 58px;//1.07rem;
              vertical-align: middle;
            }
          }
        }
      }
      .qrCode{
        display: inline-block;
        width: 2.78rem;//37%;
        text-align: center;
        span{
          display: inline-block;
          width: 100%;
          margin-bottom: 15px;//0.27rem;
          font-family: PingFangSC-Light;
          font-size: 18px;//0.33rem;
          color: #757575;
          letter-spacing: 0;
          &.qr{
            width: 150px;//2.78rem;
            height: 150px;//2.78rem;
            background: url(../assets/icon-qr.png) no-repeat center center;
            background-size: 150px;//2.78rem;
          }
        }
      }
    }
    .ownerShip{
      background: #4A4A4A;
      height: 60px;
      line-height: 60px;
      text-align: center;
      span{
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin: 0 20px;
      }
    }
  }
</style>
