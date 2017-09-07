export const sourcecodeA = `<div class="box">
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
</div>`

export const sourcecodeB = `<vm-popover ref="popover1" title="上边" trigger="hover" placement="top" content="Top Center 提示文字"></vm-popover>
<vm-popover ref="popover2" title="上边" trigger="click" placement="top" content="Top Center 提示文字"></vm-popover>

<vm-button v-popover:popover1>hover 激活</vm-button>
<vm-button v-popover:popover2>click 激活</vm-button>

<vm-popover title="上边" trigger="focus" placement="top" content="Top Center 提示文字">
  <template slot="reference">
    <vm-button>focus 激活</vm-button>
  </template>
</vm-popover>`

export const sourcecodeC = `<vm-popover
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
</vm-popover>`

export const sourcecodeD = `<div class="vd-demo__block vd-demo__block-1">
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

<style>
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
</style>`

