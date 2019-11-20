import SearchBox from '@theme/components/SearchBox/'
import Suggestions from '@theme/components/SearchBox/Suggestions'
import SearchFrameContent from '@theme/components/SearchBox/SearchFrameContent'
export default {
    components: {
        SearchBox,
        SearchFrameContent,
        Suggestions,
    },
    computed: {
        isShowSearchResultWindow() {
            return this.$store.state.interface.isShowSearchResultWindow;
        },
        query() {
            return this.$store.state.search.query;
        },
        focusIndex() {
            return this.$store.state.search.focusIndex;
        },
    },
    watch: {
        async isShowSearchResultWindow(isShow) {
            if(isShow === false) {
                this.$nextTick();
                const searchBoxComponentExemplar = this.$refs.searchBox;
                if(searchBoxComponentExemplar) {
                    searchBoxComponentExemplar.focus();
                }
            } else {
                this.isHoldHiddenSuggestions = true;
            }
        },
        query() {
            if(!this.isShowSearchResultWindow) {
                this.isHoldHiddenSuggestions = false;
            }
        },
    },
    mounted() {
        this.suggestionsRef = this.$refs.suggestions;
    },
    methods: {
        async search() {
            if(this.focusIndex > -1) {
                if(!this.suggestionsRef) {
                    return
                }
                this.suggestionsRef.go();
                await this.$nextTick();
                this.$store.commit('setSearchQuery', '');
            } else {
                this.$store.commit('setDisplaySearchResultWindow', true)
            }
        },
        suggestionsDown() {
            if(!this.suggestionsRef) {
                return
            }
            this.suggestionsRef.suggestionDown();
        },

        suggestionsUp() {
            if(!this.suggestionsRef) {
                return
            }
            this.suggestionsRef.suggestionUp();
        },
    },
};
