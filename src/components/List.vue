<template>
    <div>
    </div>

</template>
<script>
    export default {
        name: 'List',
        data() {
            return {

            }
        },
        computed: {
            videos() {
                return this.$store.getters.showtitle;

            },
            tubeVids() {
                return this.$store.getters.showVideos;
            }

            //videos() {
            //return this.$store.getters.showVideos;
            //}
        }
    }
</script>
<style scoped>
    li {
        list-style-type: none;
    }
</style>