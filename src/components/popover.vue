<template>
  <span>
    <transition :name="transition" @after-leave="doDestroy">
      <div
              class="vm-popover"
              :class="[popperClass]"
              ref="popper"
              v-show="!disabled && showPopper"
              :style="{width: width + 'px'}">
        <div class="vm-popover__title" v-if="title || $slots.title"><slot name="title">{{title}}</slot></div>
        <slot>{{content}}</slot>
      </div>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>
<script>
  import Popper from './popper'

  function on (element, event, handler) {
    if (element && event && handler) {
      document.addEventListener
        ? element.addEventListener(event, handler, false)
        : element.attachEvent('on' + event, handler)
    }
  }

  function off (element, event, handler) {
    if (element && event) {
      document.removeEventListener
        ? element.removeEventListener(event, handler, false)
        : element.detachEvent('on' + event, handler)
    }
  }

  let nextZIndex = 2000

  const stop = e => e.stopPropagation()

  export default {
    name: 'VmPopover',

    componentName: 'VmPopover',

    props: {
      transition: {
        type: String,
        default: 'vm-popover-fade-in-linear'
      },
      disabled: Boolean,
      title: String,
      content: String,
      reference: {},
      popper: {},
      width: {},
      popperClass: String,
      popperOptions: {
        type: Object,
        default () {
          return {
            gpuAcceleration: false
          }
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator: value => ['click', 'hover', 'focus'].indexOf(value) > -1
      },
      openDelay: {
        type: Number,
        default: 0
      },
      placement: {
        type: String,
        default: 'bottom'
      },
      visibleArrow: {
        type: Boolean,
        default: true
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      offset: {
        default: 0
      },
      value: Boolean,
      zIndex: Number
    },

    data () {
      return {
        showPopper: false,
        popperJS: null,
        referenceElm: null,
        popperElm: null,
        currentPlacement: this.placement
      }
    },

    watch: {
      value: {
        immediate: true,
        handler (val) {
          this.showPopper = val
          this.$emit('input', val)
        }
      },
      showPopper (newVal, oldVal) {
        newVal ? this.updatePopper() : this.destroyPopper()
        this.$emit('input', newVal)
        newVal ? this.$emit('show') : this.$emit('hide')
      }
    },

    created () {
      nextZIndex = this.zIndex || 2000
    },

    mounted () {
      let reference = this.referenceElm = this.reference || this.$refs.reference
      const popper = this.popperElm = this.popper || this.$refs.popper

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm
      }
      if (this.trigger === 'click') {
        on(reference, 'click', this.doToggle)
        on(document, 'click', this.handleDocumentClick)
      } else if (this.trigger === 'hover') {
        on(reference, 'mouseenter', this.handleMouseEnter)
        on(popper, 'mouseenter', this.handleMouseEnter)
        on(reference, 'mouseleave', this.handleMouseLeave)
        on(popper, 'mouseleave', this.handleMouseLeave)
      } else if (this.trigger === 'focus') {

        if (reference.nodeName === 'INPUT' ||
          reference.nodeName === 'TEXTAREA') {
          on(reference, 'focus', this.doShow)
          on(reference, 'blur', this.doClose)
        } else {
          on(reference, 'mousedown', this.doShow)
          on(reference, 'mouseup', this.doClose)
        }
      }
    },

    methods: {
      appendArrow (element) {
        if (this.appended) return
        this.appended = true

        const arrow = document.createElement('div')
        arrow.setAttribute('x-arrow', '')
        arrow.className = 'popper__arrow'
        element.appendChild(arrow)
      },

      createPopper () {
        if (!/^(top|bottom|left|right)(-start|-end)?$/.test(this.currentPlacement)) return

        const options = this.popperOptions
        const popper = this.popperElm
        const reference = this.referenceElm

        if (!popper || !reference) return
        if (this.visibleArrow) this.appendArrow(popper)
        if (this.appendToBody) document.body.appendChild(popper)
        if (this.popperJS && this.popperJS.destroy) {
          this.popperJS.destroy()
        }

        options.placement = this.currentPlacement
        options.offset = this.offset
        this.popperJS = new Popper(reference, popper, options)
        this.popperJS.onCreate(_ => {
          this.$emit('created', this)
          this.resetTransformOrigin()
          this.$nextTick(this.updatePopper)
        })
        if (typeof options.onUpdate === 'function') {
          this.popperJS.onUpdate(options.onUpdate)
        }
        this.popperJS._popper.style.zIndex = nextZIndex++
        this.popperElm.addEventListener('click', stop)
      },

      updatePopper () {
        this.popperJS ? this.popperJS.update() : this.createPopper()
      },

      doDestroy () {
        if (this.showPopper || !this.popperJS) return
        this.popperJS.destroy()
        this.popperJS = null
      },

      destroyPopper () {
        if (this.popperJS) {
          this.resetTransformOrigin()
        }
      },

      resetTransformOrigin () {
        let placementMap = {
          'top': 'bottom',
          'bottom': 'top',
          'left': 'right',
          'right': 'left'
        }
        let placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0]
        let origin = placementMap[placement]
        this.popperJS._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? `center ${origin}` : `${origin} center`
      },

      doToggle () {
        this.showPopper = !this.showPopper
      },

      doShow () {
        this.showPopper = true
      },

      doClose () {
        this.showPopper = false
      },

      handleDocumentClick (e) {
        if (!this.$el ||
          !this.referenceElm ||
          this.$el.contains(e.target) ||
          this.referenceElm.contains(e.target) ||
          !this.popperElm ||
          this.popperElm.contains(e.target)) return
        this.showPopper = false
      },

      handleMouseEnter () {
        clearTimeout(this._timer)
        if (this.openDelay) {
          this._timer = setTimeout(() => {
            this.showPopper = true
          }, this.openDelay)
        } else {
          this.showPopper = true
        }
      },

      handleMouseLeave () {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.showPopper = false
        }, 200)
      }
    },

    beforeDestroy () {
      this.doDestroy()
      if (this.popperElm && this.popperElm.parentNode === document.body) {
        this.popperElm.removeEventListener('click', stop);
        document.body.removeChild(this.popperElm);
      }
    },

    destroyed () {
      const reference = this.referenceElm

      off(reference, 'click', this.doToggle)
      off(document, 'click', this.handleDocumentClick)
      off(reference, 'mouseenter', this.handleMouseEnter)
      off(reference, 'mouseleave', this.handleMouseLeave)
      off(reference, 'focus', this.doShow)
      off(reference, 'blur', this.doClose)
      off(reference, 'mousedown', this.doShow)
      off(reference, 'mouseup', this.doClose)
    }
  }
</script>
