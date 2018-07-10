<template>
    <div data-server-rendered="true">
        <h1>This is a single-file component!</h1>
        <ul>
            <li>{{ param1 }}</li>
            <li>{{ param2 }}</li>
            <li>{{ param3 }}</li>
        </ul>
        
        <h2>Qual Should be here:</h2>
        <fp-qual :identity="$store.state.identity"></fp-qual>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis eros risus, eu scelerisque augue molestie quis. Aenean id lectus arcu. Aenean et tristique sem. Suspendisse in pellentesque ligula. Morbi venenatis ex eros, sit amet ultricies odio fringilla et. Suspendisse scelerisque mollis posuere. Aenean odio justo, dictum in ultrices non, dapibus dignissim dui. Aliquam porttitor vitae ligula sit amet venenatis. Nullam ex libero, placerat sed metus non, mollis vulputate felis. Maecenas massa orci, placerat in hendrerit a, sollicitudin in felis. Aliquam lobortis orci ut maximus sagittis. Nulla a arcu sodales, convallis ex at, venenatis dui. Morbi non nisi interdum, venenatis metus ut, lobortis eros. Mauris sed pretium nunc. Nunc ut tristique sem.</p>
        <p v-show="showHidden">!!!! This is hidden !!!!</p>
        
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <button @click.prevent="toggleMsg">Show it!</button>
    </div>
</template>

<script>
    export default {
        name: 'DynamicFunnel',
        data() {
            return {
                param1: 1,
                param2: 2,
                param3: 3,
                showHidden: false
            };
        },
        
        
        meta: {
            title: 'THIS SHOULD BE COMING FROM THE FUNNEL....',
            meta: {
                description: { name: 'description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis eros risus, eu scelerisque augue molestie quis. Aenean id lectus arcu. Aenean et tristique sem. Suspendisse in pellentesque ligula. Morbi venenatis ex eros, sit amet ultricies odio fringilla et. Suspendisse scelerisque mollis posuere. Aenean odio justo, dictum in ultrices non, dapibus dignissim dui. Aliquam porttitor vitae ligula sit amet venenatis. Nullam ex libero, placerat sed metus non, mollis vulputate felis. Maecenas massa orci, placerat in hendrerit a, sollicitudin in felis. Aliquam lobortis orci ut maximus sagittis. Nulla a arcu sodales, convallis ex at, venenatis dui. Morbi non nisi interdum, venenatis metus ut, lobortis eros. Mauris sed pretium nunc. Nunc ut tristique sem.' },
                keywords: { name: 'keywords', content: 'foo bar blah blah blah' }
            }
        },
        
        
        mounted() {
            console.info( 'This has been mounted...' );
        },
        methods: {
            toggleMsg() {
                this.showHidden = !this.showHidden;
                return this.showHidden;
            }
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