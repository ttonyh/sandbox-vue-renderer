<template>
    <div>
        <router-link to="/offer/21">Home</router-link>
        <router-link to="/offer/21/plans">Plans</router-link>
        <router-link to="/offer/21/devices">Devices</router-link>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        meta: {
            title: 'Funnel: HOME',
            meta: {
                description: { name: 'description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis eros risus, eu scelerisque augue molestie quis. Aenean id lectus arcu. Aenean et tristique sem. Suspendisse in pellentesque ligula. Morbi venenatis ex eros, sit amet ultricies odio fringilla et. Suspendisse scelerisque mollis posuere. Aenean odio justo, dictum in ultrices non, dapibus dignissim dui. Aliquam porttitor vitae ligula sit amet venenatis. Nullam ex libero, placerat sed metus non, mollis vulputate felis. Maecenas massa orci, placerat in hendrerit a, sollicitudin in felis. Aliquam lobortis orci ut maximus sagittis. Nulla a arcu sodales, convallis ex at, venenatis dui. Morbi non nisi interdum, venenatis metus ut, lobortis eros. Mauris sed pretium nunc. Nunc ut tristique sem.' },
                keywords: { name: 'keywords', content: 'funnel home page' }
            }
        },
        data() {
            return {

            }
        },
        beforeCreate() {

        },

        created() {

        },
        computed: {


        },
        methods: {

        }
    };
</script>