export default {
    beforeCreate() {
        if(!this.$isServer) {
            window.vm = this;
        }
    },
};
