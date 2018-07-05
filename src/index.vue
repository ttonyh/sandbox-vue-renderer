<template>
    <div data-server-rendered="true">
        <h1>This is a single-file component!</h1>
        <ul>
            <li>{{ param1 }}</li>
            <li>{{ param2 }}</li>
            <li>{{ param3 }}</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis eros risus, eu scelerisque augue molestie quis. Aenean id lectus arcu. Aenean et tristique sem. Suspendisse in pellentesque ligula. Morbi venenatis ex eros, sit amet ultricies odio fringilla et. Suspendisse scelerisque mollis posuere. Aenean odio justo, dictum in ultrices non, dapibus dignissim dui. Aliquam porttitor vitae ligula sit amet venenatis. Nullam ex libero, placerat sed metus non, mollis vulputate felis. Maecenas massa orci, placerat in hendrerit a, sollicitudin in felis. Aliquam lobortis orci ut maximus sagittis. Nulla a arcu sodales, convallis ex at, venenatis dui. Morbi non nisi interdum, venenatis metus ut, lobortis eros. Mauris sed pretium nunc. Nunc ut tristique sem.</p>
        <p v-show="false">!!!! This is hidden !!!!</p>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                param1: 1,
                param2: 2,
                param3: 3
            };
        },
        mounted() {
            console.info( 'This has been mounted...' );
        }
    };
</script>

<style scoped>
    div {
        background-color: #ccc;
    }
    
    p {
        background-color: #eee;
    }
</style>