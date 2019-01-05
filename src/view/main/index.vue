<template>
  <div id="layout">
    <div class="nav">
      <input type="text" class="ipt" value="hello word">
      <div class="icon">
        <el-tooltip class="item" effect="dark" content="点击跳转作者简书" placement="bottom">
          <a href="https://www.jianshu.com/u/798b6b7c244d" target="view_window" class="jian">
            <img
              src="../../assets/icon/jian.png"
              alt
              @mouseenter="jian_en"
              @mouseleave="jian_le"
              id="jian"
            >
          </a>
        </el-tooltip>
        <el-popover placement="bottom" width="200" trigger="hover">
          <img
            src="../../assets/icon/QQ.png"
            alt
            slot="reference"
            @mouseenter="QQ_en"
            @mouseleave="QQ_le"
            id="QQ"
          >
          <div>
            <img src="../../assets/QQ-QR.png" width="200" alt>
          </div>
        </el-popover>
        <el-popover placement="bottom" width="200" trigger="hover">
          <img
            src="../../assets/icon/weixin.png"
            alt
            slot="reference"
            @mouseenter="weixin_en"
            @mouseleave="weixin_le"
            id="weixin"
          >
          <div>
            <img src="../../assets/WX-QR.png" width="200" alt>
          </div>
        </el-popover>
        <el-tooltip class="item" effect="dark" content="点击跳转作者github" placement="bottom">
          <a href="https://github.com/wazilm852" target="view_window">
            <img
              src="../../assets/icon/github.png"
              alt
              @mouseenter="github_en"
              @mouseleave="github_le"
              id="github"
            >
          </a>
        </el-tooltip>
      </div>
      <img src="../../assets/banner03.jpeg" alt class="banner-pic">
    </div>
    <div class="backgouund">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <div class="contenr">
        <div class="title">
          <img src="../../assets/icon/music.png" class="icn" alt>
          <span>START:MUSIC!!</span>
        </div>
        <div class="music">
          <!-- 华晨宇====================== -->
          <div class="hua">
            <img src="../../assets/huachenyu.jpeg" width="300" alt class="people">
            <p class="e-name">Chenyu Hua</p>
            <div class="rhombus"></div>
            <img src="../../assets/icon/kugou.png" width="20px" alt class="kugou">
            <a
              href="https://music.163.com/#/my/m/music/playlist?id=2167480431"
              target="view_window"
            >
              <img src="../../assets/icon/wangyi.png" width="20px" alt class="wangyi">
            </a>
            <a
              href="https://y.qq.com/portal/profile.html#stat=y_new.top.user_pic"
              target="view_window"
            >
              <img src="../../assets/icon/QQmusic.png" width="20px" alt class="QQmusic">
            </a>
            <img src="../../assets/icon/xiami.png" width="20px" alt class="kuwo">
          </div>
          <!-- 邓紫棋======================= -->
          <div class="deng">
            <img src="../../assets/dzq.jpg" width="300" height="205.7" alt class="people">
            <p class="e-name">G.E.M.</p>
            <div class="rhombus"></div>
            <img src="../../assets/icon/kugou.png" width="20px" alt class="kugou">
            <a
              href="https://music.163.com/#/my/m/music/playlist?id=2167480431"
              target="view_window"
            >
              <img src="../../assets/icon/wangyi.png" width="20px" alt class="wangyi">
            </a>
            <a
              href="https://y.qq.com/portal/profile.html#stat=y_new.top.user_pic"
              target="view_window"
            >
              <img src="../../assets/icon/QQmusic.png" width="20px" alt class="QQmusic">
            </a>
            <img src="../../assets/icon/xiami.png" width="20px" alt class="kuwo">
          </div>
          <!-- J.Fla====================== -->
          <div class="jfla">
            <img src="../../assets/jfla.jpeg" width="300" height="205.7" alt class="people">
            <p class="e-name">J.Fla</p>
            <div class="rhombus"></div>
            <img src="../../assets/icon/kugou.png" width="20px" alt class="kugou">
            <a
              href="https://music.163.com/#/my/m/music/playlist?id=2167480431"
              target="view_window"
            >
              <img src="../../assets/icon/wangyi.png" width="20px" alt class="wangyi">
            </a>
            <a
              href="https://y.qq.com/portal/profile.html#stat=y_new.top.user_pic"
              target="view_window"
            >
              <img src="../../assets/icon/QQmusic.png" width="20px" alt class="QQmusic">
            </a>
            <img src="../../assets/icon/xiami.png" width="20px" alt class="kuwo">
          </div>
        </div>
        <div class="box" v-for="(item,index) in list" :key="index">
          <div class="pic">
            <img :src="item.src" alt>
          </div>
          <div class="text">
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-link :to="{name:'lianxi'}">lianxi</router-link> -->
  </div>
</template>
<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      visible: false,
      list: [
        {
          src: require("../../assets/beautiful1.jpeg"),
          text: "我要成为幸福光景的一部分，成为圣诞节里其中一张幸福的笑脸。"
        },
        {
          src: require("../../assets/beautiful2.jpg"),
          text:
            "喜欢和讨厌是自己无法选择的，所以一旦喜欢上了，不管你是什么样子，我都喜欢你。"
        },
        {
          src: require("../../assets/beautiful3.jpg"),
          text: "世界还是世界，只有风在履行。"
        },
        {
          src: require("../../assets/beautiful4.jpeg"),
          text: "人这一生，一切关系的疏远和割裂都是为了和过去的自己分手。"
        },
        {
          src: require("../../assets/beautiful5.jpeg"),
          text:
            "人生当中躲不过的所有坏消息，我们只有看到他，面对它，甚至愿意谈论它的时候，我们才有可能去对抗它。"
        }
      ]
    };
  },
  created() {
    var audio_test = new Audio("test.mp3");
    var audio_test = document.getElementById("audio_test");
  },
  mounter() {
    const clipboard = new Clipboard(".btn");
  },
  methods: {
    // 简书===============
    jian_en() {
      jian.src = require("../../assets/icon/jian_color.png");
    },
    jian_le() {
      jian.src = require("../../assets/icon/jian.png");
    },
    // QQ=================
    QQ_en() {
      QQ.src = require("../../assets/icon/QQ_color.png");
    },
    QQ_le() {
      QQ.src = require("../../assets/icon/QQ.png");
    },
    // 微信=======================
    weixin_en() {
      weixin.src = require("../../assets/icon/weixin_color.png");
    },
    weixin_le() {
      weixin.src = require("../../assets/icon/weixin.png");
    },
    // github=====================
    github_en() {
      github.src = require("../../assets/icon/github_color.png");
    },
    github_le() {
      github.src = require("../../assets/icon/github.png");
    }
  }
};
</script>
<style lang="less" scoped>
#layout {
  cursor: url("../../assets/icon/mouse.png"), auto; 
  .nav {
    width: 100%;
    height: 100%;
    position: relative;
    .icon {
      width: 100%;
      text-align: center;
      position: absolute;
      left: 0;
      top: 180px;
      img {
        margin: auto 60px;
        cursor: pointer;
      }
    }
    .banner-pic {
      width: 100%;
    }
    .ipt {
      width: 700px;
      height: 50px;
      border-radius: 20px;
      position: absolute;
      top: 100px;
      left: 50%;
      margin-left: -350px;
      background-color: rgba(255, 255, 255, 0);
      outline-style: none;
      font-size: 24px;
      text-indent: 2em;
      color: white;
    }
  }
  .backgouund{
    li {
      position: absolute;
      // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
      bottom: -160px;
      // 默认的气泡大小；
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.15);
      list-style: none;
      // 使用自定义动画使气泡渐现、上升和翻滚；
      animation: square 15s infinite;
      transition-timing-function: linear;
      // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
      &:nth-child(1) {
        left: 10%;
      }
      &:nth-child(2) {
        left: 20%;
        width: 90px;
        height: 90px;
        animation-delay: 2s;
        animation-duration: 7s;
      }
      &:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 8s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 15s;
      }
      &:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 12s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(10) {
        left: 85%;
        width: 160px;
        height: 160px;
        animation-delay: 5s;
      }
    }
    // 自定义 square 动画；
    @keyframes square {
      0% {
        opacity: 0.5;
        transform: translateY(0px) rotate(45deg);
      }
      25% {
        opacity: 0.75;
        transform: translateY(-400px) rotate(90deg)
      }
      50% {
        opacity: 1;
        transform: translateY(-600px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1000px) rotate(180deg);
      }
    }
    .contenr {
      width: 1000px;
      margin: 0 auto;
      margin-top: 50px;
      .title {
        width: 100%;
        text-align: left;
        font-size: 24px;
        margin-bottom: 50px;
        border-bottom: 1px dashed #dedede;
        line-height: 50px;
        color: #2c2c2c;
        .icn {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
      .music {
        height: 205.7px;
        margin-bottom: 50px;
        // 华晨宇========================
        .hua {
          width: 300px;
          height: 205.7px;
          float: left;
          position: relative;
          margin-right: 50px;
          overflow: hidden;
          border-radius: 20px;
          .people {
            border-radius: 20px;
            transition: all 0.5s;
            box-shadow: 0 1px 20px -6px #dedede;
          }
          .e-name {
            position: absolute;
            top: 64px;
            left: 100px;
            color: #fff;
            font-size: 22px;
            opacity: 0;
            transform: rotate(180deg);
            transition: all 0.5s;
          }
          .rhombus {
            width: 0px;
            height: 0px;
            border: 1px solid #fff;
            position: absolute;
            top: 40px;
            left: 97px;
            transform: rotate(-90deg);
            transition: all 0.5s;
            opacity: 0;
          }
          .kugou {
            position: absolute;
            top: 20px;
            left: 40px;
            opacity: 0;
            transition: all 0.5s;
          }
          .wangyi {
            position: absolute;
            top: 20px;
            left: 250px;
            opacity: 0;
            transition: all 0.5s;
          }
          .kuwo {
            position: absolute;
            top: 170px;
            left: 40px;
            opacity: 0;
            transition: all 0.5s;
          }
          .QQmusic {
            position: absolute;
            top: 170px;
            left: 250px;
            opacity: 0;
            transition: all 0.5s;
          }
        }
        .hua:hover {
          box-shadow: 0 5px 10px 5px #999999;
        }
        .hua:hover .people {
          box-shadow: 0 5px 10px 5px #999999;
          transform: scale(1.2, 1.2);
        }
        .hua:hover .rhombus {
          width: 120px;
          height: 120px;
          transform: rotate(45deg);
          opacity: 1;
        }
        .hua:hover .kugou {
          top: 68px;
          left: 130px;
          opacity: 1;
        }
        .hua:hover .wangyi {
          top: 68px;
          left: 170px;
          opacity: 1;
        }
        .hua:hover .QQmusic {
          top: 120px;
          left: 170px;
          opacity: 1;
        }
        .hua:hover .kuwo {
          top: 120px;
          left: 130px;
          opacity: 1;
        }
        .hua:hover .e-name{
          opacity: 1;
          transform: rotate(0deg);
        }
        // 邓紫棋=========================
        .deng {
          width: 300px;
          height: 205.7px;
          float: left;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          .people {
            border-radius: 20px;
            transition: all 0.5s;
            box-shadow: 0 1px 20px -6px #dedede;
          }
          .e-name {
            position: absolute;
            top: 64px;
            left: 128px;
            color: #fff;
            font-size: 22px;
            opacity: 0;
            transform: rotate(180deg);
            transition: all 0.5s;
          }
          .rhombus {
            width: 0px;
            height: 0px;
            border: 1px solid #fff;
            position: absolute;
            top: 40px;
            left: 97px;
            transform: rotate(-90deg);
            transition: all 0.5s;
            opacity: 0;
          }
          .kugou {
            position: absolute;
            top: 20px;
            left: 40px;
            opacity: 0;
            transition: all 0.5s;
          }
          .wangyi {
            position: absolute;
            top: 20px;
            left: 250px;
            opacity: 0;
            transition: all 0.5s;
          }
          .kuwo {
            position: absolute;
            top: 170px;
            left: 40px;
            opacity: 0;
            transition: all 0.5s;
          }
          .QQmusic {
            position: absolute;
            top: 170px;
            left: 250px;
            opacity: 0;
            transition: all 0.5s;
          }
        }
        .deng:hover {
          box-shadow: 0 5px 10px 5px #999999;
        }
        .deng:hover .people {
          box-shadow: 0 5px 10px 5px #999999;
          transform: scale(1.2, 1.2);
        }
        .deng:hover .rhombus {
          width: 120px;
          height: 120px;
          transform: rotate(45deg);
          opacity: 1;
        }
        .deng:hover .kugou {
          top: 68px;
          left: 130px;
          opacity: 1;
        }
        .deng:hover .wangyi {
          top: 68px;
          left: 170px;
          opacity: 1;
        }
        .deng:hover .QQmusic {
          top: 120px;
          left: 170px;
          opacity: 1;
        }
        .deng:hover .kuwo {
          top: 120px;
          left: 130px;
          opacity: 1;
        }
        .deng:hover .e-name{
          opacity: 1;
          transform: rotate(0deg);
        }
        // jfla=============================
        .jfla {
          width: 300px;
          height: 205.7px;
          float: left;
          position: relative;
          margin-left: 50px;
          overflow: hidden;
          border-radius: 20px;
          .people {
            border-radius: 20px;
            transition: all 0.5s;
            box-shadow: 0 1px 20px -6px #dedede;
          }
          .e-name {
            position: absolute;
            top: 64px;
            left: 135px;
            color: #fff;
            font-size: 22px;
            opacity: 0;
            transform: rotate(180deg);
            transition: all 0.5s;
          }
          .rhombus {
            width: 0px;
            height: 0px;
            border: 1px solid #fff;
            position: absolute;
            top: 40px;
            left: 97px;
            transform: rotate(-90deg);
            transition: all 0.5s;
            opacity: 0;
          }
          .kugou {
            position: absolute;
            top: 20px;
            left: 40px;
            opacity: 0;
            transition: all 0.5s;
          }
          .wangyi {
            position: absolute;
            top: 20px;
            left: 250px;
            opacity: 0;
            transition: all 0.5s;
          }
          .kuwo {
            position: absolute;
            top: 170px;
            left: 40px;
            opacity: 0;
            transition: all 0.5s;
          }
          .QQmusic {
            position: absolute;
            top: 170px;
            left: 250px;
            opacity: 0;
            transition: all 0.5s;
          }
        }
        .jfla:hover {
          box-shadow: 0 5px 10px 5px #999999;
        }
        .jfla:hover .people {
          box-shadow: 0 5px 10px 5px #999999;
          transform: scale(1.2, 1.2);
        }
        .jfla:hover .rhombus {
          width: 120px;
          height: 120px;
          transform: rotate(45deg);
          opacity: 1;
        }
        .jfla:hover .kugou {
          top: 68px;
          left: 130px;
          opacity: 1;
        }
        .jfla:hover .wangyi {
          top: 68px;
          left: 170px;
          opacity: 1;
        }
        .jfla:hover .QQmusic {
          top: 120px;
          left: 170px;
          opacity: 1;
        }
        .jfla:hover .kuwo {
          top: 120px;
          left: 130px;
          opacity: 1;
        }
        .jfla:hover .e-name{
          opacity: 1;
          transform: rotate(0deg);
        }
      }
      .box {
        width: 1000px;
        border-radius: 20px;
        margin-bottom: 100px;
        height: 275.55px;
        overflow: hidden;
        box-shadow: 0 1px 20px -6px #dedede;
        transition: all 0.5s;
        .pic {
          float: left;
          width: 500px;
          height: 100%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;
          }
        }
        .text {
          float: left;
          padding: 24px;
          width: 499px;
          height: 100%;
          box-sizing: border-box;
        }
      }
      .box:hover {
        box-shadow: 0 5px 10px 5px #999999;
      }
      .box:hover .pic img {
        transform: scale(1.5, 1.5);
      }
    }
  }
}
</style>
<style lang="less">
.el-popover {
  padding: 0;
}
</style>


