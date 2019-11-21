<template>
    <!--<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        &lt;!&ndash; Generator: sketchtool 59 (101010) - https://sketch.com &ndash;&gt;
        <title>9325266F-F916-4686-95F8-69117363656A</title>
        <desc>Created with sketchtool.</desc>
        <g id="Project" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Waves-Docs-&#45;&#45;Inner-page-[iPhone-SE]" transform="translate(-24.000000, -16.000000)">
                <g id="Components/Mobile/Header-&#45;&#45;inner-pages">
                    <g id="Icons/Menu-24-Basic900" transform="translate(24.000000, 16.000000)">
                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                        <path d="M3,4 L21,4 C21.5522847,4 22,4.44771525 22,5 C22,5.55228475 21.5522847,6 21,6 L3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 Z M3,11 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 Z M3,18 L21,18 C21.5522847,18 22,18.4477153 22,19 C22,19.5522847 21.5522847,20 21,20 L3,20 C2.44771525,20 2,19.5522847 2,19 C2,18.4477153 2.44771525,18 3,18 Z" id="Shape" fill="#263241" fill-rule="nonzero"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>-->
    <div
        :class="[$style.burger, isOpen && $style.open]"
        @click="toggle"
    >
        <span :class="$style.burger__element"></span>
        <span :class="$style.burger__element"></span>
        <span :class="$style.burger__element"></span>
    </div>
</template>

<script>
export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isOpenAcquired: this.isOpen,
      }
    },
    watch: {
      isOpenAcquired(isOpen) {
        this.$emit('change', isOpen);
      }
    },
    methods: {
      toggle() {
        this.isOpenAcquired = !this.isOpenAcquired;
      },
    },
}
</script>

<style lang="stylus" module>
    .burger {
        width: 24px;
        height: 18px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
        &.open {
            .burger__element {
                background-color: var(--color11);
                &:nth-child(1) {
                    transform: rotate(45deg);
                    top: -3px;
                    left: 2px;
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(3) {
                    transform: rotate(-45deg);
                    top: 14px;
                    left: 2px;
                }
            }
        }
        &:hover {
            .burger__element {
                background-color: $color6;
            }
        }
    }
    .burger__element {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background-color: var(--color7)
        border-radius: 0;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
        &:nth-child(1) {
            top: 0;
            transform-origin: left center;
        }
        &:nth-child(2) {
            top: 6px;
            transform-origin: left center;
        }
        &:nth-child(3) {
            top: 12px;
            transform-origin: left center;
        }
    }
</style>
