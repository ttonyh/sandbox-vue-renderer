<template>
    <div>
        <h1>Funnels Devices</h1>        
        <p v-show="showHidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis eros risus, eu scelerisque augue molestie quis. Aenean id lectus arcu. Aenean et tristique sem. Suspendisse in pellentesque ligula. Morbi venenatis ex eros, sit amet ultricies odio fringilla et. Suspendisse scelerisque mollis posuere. Aenean odio justo, dictum in ultrices non, dapibus dignissim dui. Aliquam porttitor vitae ligula sit amet venenatis. Nullam ex libero, placerat sed metus non, mollis vulputate felis. Maecenas massa orci, placerat in hendrerit a, sollicitudin in felis. Aliquam lobortis orci ut maximus sagittis. Nulla a arcu sodales, convallis ex at, venenatis dui. Morbi non nisi interdum, venenatis metus ut, lobortis eros. Mauris sed pretium nunc. Nunc ut tristique sem.</p>
        <button @click.prevent="toggleMsg">Show it!</button>
    </div>
</template>

<script>
    import _ from 'lodash';
 
    export default {
        meta: {
            title: 'Funnel: DEVICES',
            meta: {
                description: { name: 'description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis eros risus, eu scelerisque augue molestie quis. Aenean id lectus arcu. Aenean et tristique sem. Suspendisse in pellentesque ligula. Morbi venenatis ex eros, sit amet ultricies odio fringilla et. Suspendisse scelerisque mollis posuere. Aenean odio justo, dictum in ultrices non, dapibus dignissim dui. Aliquam porttitor vitae ligula sit amet venenatis. Nullam ex libero, placerat sed metus non, mollis vulputate felis. Maecenas massa orci, placerat in hendrerit a, sollicitudin in felis. Aliquam lobortis orci ut maximus sagittis. Nulla a arcu sodales, convallis ex at, venenatis dui. Morbi non nisi interdum, venenatis metus ut, lobortis eros. Mauris sed pretium nunc. Nunc ut tristique sem.' },
                keywords: { name: 'keywords', content: 'funnel devices page' }
            }
        },
        data() {
            return {
                showHidden: false
            }
        },
        beforeCreate() {

        },

        created() {

        },
        computed: {


        },
        methods: {
            toggleMsg() {
                this.showHidden = !this.showHidden;
                return this.showHidden;
            }
        }
    };
</script>