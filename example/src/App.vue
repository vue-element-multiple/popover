<template>
  <div id="app">
    <demonstration
            tag="h2"
            title="Popover 弹出框"
            :show-content="false">
    </demonstration>
    <demonstration
            title="基础用法"
            anchor="ji-chu-yong-fa"
            :highlight="sourcecodeA">
      <template slot="description">
        在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
      </template>
      <template slot="source">
        <div class="box">
          <div class="top">
            <vm-popover title="上左" trigger="hover" placement="top-start" content="Top Left 提示文字">
              <template slot="reference">
                <vm-button>上左</vm-button>
              </template>
            </vm-popover>
            <vm-popover title="上边" trigger="hover" placement="top" content="Top Center 提示文字">
              <template slot="reference">
                <vm-button>上边</vm-button>
              </template>
            </vm-popover>
            <vm-popover title="上右" trigger="hover" placement="top-end" content="Top Right 提示文字">
              <template slot="reference">
                <vm-button>上右</vm-button>
              </template>
            </vm-popover>
          </div>
          <div class="left">
            <vm-popover title="左上" trigger="hover" placement="left-start" content="Left Top 提示文字">
              <template slot="reference">
                <vm-button>左上</vm-button>
              </template>
            </vm-popover>
            <vm-popover title="左边" trigger="hover" placement="left" content="Left Center 提示文字">
              <template slot="reference">
                <vm-button>左边</vm-button>
              </template>
            </vm-popover>
            <vm-popover title="左下" trigger="hover" placement="left-end" content="Left Bottom 提示文字">
              <template slot="reference">
                <vm-button>左下</vm-button>
              </template>
            </vm-popover>
          </div>
          <div class="right">
            <vm-popover title="右上" trigger="hover" placement="right-start" content="Right Top 提示文字">
              <template slot="reference">
                <vm-button>右上</vm-button>
              </template>
            </vm-popover>
            <vm-popover title="右边" trigger="hover" placement="right" content="Right Center 提示文字">
              <template slot="reference">
                <vm-button>右边</vm-button>
              </template>
            </vm-popover>
            <vm-popover title="右下" trigger="hover" placement="right-end" content="Right Bottom 提示文字">
              <template slot="reference">
                <vm-button>右下</vm-button>
              </template>
            </vm-popover>
          </div>
          <div class="bottom">
            <vm-popover title="下左" trigger="hover" placement="bottom-start" content="Bottom Left 提示文字">
              <template slot="reference">
                <vm-button>下左</vm-button>
              </template>
            </vm-popover>
            <vm-popover title="下边" trigger="hover" placement="bottom" content="Bottom Center 提示文字">
              <template slot="reference">
                <vm-button>下边</vm-button>
              </template>
            </vm-popover>
            <vm-popover title="下右" trigger="hover" placement="bottom-end" content="Bottom Right 提示文字">
              <template slot="reference">
                <vm-button>下右</vm-button>
              </template>
            </vm-popover>
          </div>
        </div>
      </template>
      <template slot="explanation">
        使用 <code>content</code> 属性来决定 <code>hover</code> 时的提示信息。由 <code>placement</code> 属性决定展示效果：<code>placement</code>
        属性值为：方向-对齐位置；四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>；三种对齐位置：<code>start</code>, <code>end</code>，默认为空。如 <code>placement="left-end"</code>，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
      </template>
    </demonstration>
    <demonstration
            title="触发方式"
            anchor="chu-fa-fang-shi"
            :highlight="sourcecodeB">
      <template slot="source">
        <vm-popover ref="popover1" title="上边" trigger="hover" placement="top" content="Top Center 提示文字">
        </vm-popover>
        <vm-popover ref="popover2" title="上边" trigger="click" placement="top" content="Top Center 提示文字">
        </vm-popover>
        <vm-button v-popover:popover1>hover 激活</vm-button>
        <vm-button v-popover:popover2>click 激活</vm-button>
        <vm-popover title="上边" trigger="focus" placement="top" content="Top Center 提示文字">
          <template slot="reference">
            <vm-button>focus 激活</vm-button>
          </template>
        </vm-popover>
      </template>
      <template slot="description">通过指定事件 <code>hover</code>、<code>click</code>、<code>focus</code> 来激活弹出框</template>
      <template slot="explanation">
        设置索引 <code>ref</code>，在按钮中，我们注册了自定义指令 <code>v-popover</code>，指向索引 <code>ID</code>。<code>trigger</code>
        属性用于设置何时触发 <code>Popover</code> ，提供三种触发方式：<code>hover</code>, <code>click</code>
        和 <code>focus</code>。第二种用法通过 <code>slot</code> 指定 <code>reference</code>。
      </template>
    </demonstration>
    <demonstration
            title="嵌套操作"
            anchor="qian-tao-cao-zuo"
            :highlight="sourcecodeC">
      <template slot="description">当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</template>
      <template slot="source">
        <vm-popover
                placement="top"
                width="160"
                v-model="visible">
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <vm-button size="mini" type="text" @click="visible = false">取消</vm-button>
            <vm-button type="primary" size="mini" @click="visible = false">确定</vm-button>
          </div>
          <template slot="reference">
            <vm-button>删除</vm-button>
          </template>
        </vm-popover>
      </template>
    </demonstration>
    <demonstration
            anchor="geng-duo-shuo-ming"
            :highlight="sourcecodeD"
            :multiple="true">
      <template slot="title">更多说明<i class="vd-demo__new">（新增实例）</i></template>
      <template slot="description">对一些属性通过实例做一些简要说明</template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">vm-popover-fade-in-linear</span>
          <br>
          <vm-popover title="上边" trigger="hover" placement="top" content="Top Center 提示文字"
                      transition="vm-popover-fade-in-linear">
            <template slot="reference">
              <vm-button>transition</vm-button>
            </template>
          </vm-popover>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">自定义：slide-fade</span>
          <br>
          <vm-popover title="上边" trigger="hover" placement="top" content="Top Center 提示文字" transition="slide-fade">
            <template slot="reference">
              <vm-button>transition</vm-button>
            </template>
          </vm-popover>
        </div>
        <div class="vd-demo__block vd-demo__block-2">
          <span class="vd-demo__demonstration">延时效果，等待 2s</span>
          <br>
          <vm-popover title="上边" trigger="hover" placement="top" content="Top Center 提示文字" :open-delay="2000">
            <template slot="reference">
              <vm-button>延时</vm-button>
            </template>
          </vm-popover>
        </div>
        <div class="vd-demo__block vd-demo__block-2">
          <span class="vd-demo__demonstration">禁用，任何操作无效</span>
          <br>
          <vm-popover title="上边" trigger="hover" placement="top" content="Top Center 提示文字" disabled>
            <template slot="reference">
              <vm-button>禁用</vm-button>
            </template>
          </vm-popover>
        </div>
        <div class="vd-demo__block vd-demo__block-2">
          <span class="vd-demo__demonstration">slot="title"</span>
          <br>
          <vm-popover trigger="hover" placement="top" content="Top Center 提示文字">
            <template slot="title">
              <div class="vd-demo__desc"><a href="#">一个超链接</a></div>
            </template>
            <template slot="reference">
              <vm-button>标题 Slot</vm-button>
            </template>
          </vm-popover>
        </div>
      </template>
    </demonstration>
    <demonstration
            title="Attributes"
            anchor="attributes"
            :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>z-index <i class="vd-demo__new">（新增）</i></td>
            <td>弹出层层级</td>
            <td>Number</td>
            <td>—</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td>触发方式</td>
            <td>String</td>
            <td>click/focus/hover</td>
            <td>click</td>
          </tr>
          <tr>
            <td>title</td>
            <td>标题，也可以通过 <code>slot='title'</code> 传入 DOM</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>content</td>
            <td>显示的内容，也可以通过 <code>slot</code> 传入 DOM</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>String, Number</td>
            <td>—</td>
            <td>最小宽度 150px</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>出现位置</td>
            <td>String</td>
            <td>
              top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
            </td>
            <td>bottom</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Popover 是否可用</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>value(v-model)</td>
            <td>状态是否可见</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>offset</td>
            <td>出现位置的偏移量</td>
            <td>Number</td>
            <td>—</td>
            <td>0</td>
          </tr>
          <tr>
            <td>transition</td>
            <td>定义渐变动画</td>
            <td>String</td>
            <td>vm-popover-fade-in/—</td>
            <td>vm-popover-fade-in-linear</td>
          </tr>
          <tr>
            <td>visible-arrow</td>
            <td>是否显示箭头</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>popper-options</td>
            <td class="vd-demo__desc"><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td>
            <td>Object</td>
            <td class="vd-demo__desc">参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td>
            <td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
          </tr>
          <tr>
            <td>popper-class</td>
            <td>为 popper 添加类名</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>open-delay</td>
            <td>触发方式为 hover 时的显示延迟，单位为毫秒</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
            title="Slot"
            anchor="slot"
            :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>—</td>
            <td>Popover 内嵌 HTML 文本</td>
          </tr>
          <tr>
            <td>title <i class="vd-demo__new">（新增）</i></td>
            <td>Popover 内嵌 HTML 标题</td>
          </tr>
          <tr>
            <td>reference</td>
            <td>触发 Popover 显示的 HTML 元素</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
            title="events"
            anchor="events"
            :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>show</td>
            <td>显示时触发</td>
            <td>—</td>
          </tr>
          <tr>
            <td>hide</td>
            <td>隐藏时触发</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
      :show-content="false">
      <p>示例使用详情请参考：（<a href="https://github.com/savoygu/vue-demonstration">https://github.com/savoygu/vue-demonstration</a>）</p>
    </demonstration>
  </div>
</template>

<script type="es6">
  import { sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD } from './template'

  export default {
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        visible: false
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
    .box {
      width: 400px;
      .top {
        text-align: center;
      }
      .left {
        float: left;
        width: 60px;
      }
      .right {
        float: right;
        width: 60px;
      }
      .bottom {
        clear: both;
        text-align: center;
      }
      .left > span,
      .right > span {
        display: inline-block;
        margin: 4px;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
