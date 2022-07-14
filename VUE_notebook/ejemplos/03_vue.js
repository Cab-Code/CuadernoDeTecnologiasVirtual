const nombreApp = Vue.createApp({
    data(){
        return{
            propiedad: "valor",
            propiedad2: "valor",
            propiedad3: "valor"
        }
        
    },//<-- siempre son importantes la comas
    beforeCreated(){
        //codigo a ejecutar antes de que se cree la app
    },
    created(){
        //codigo a ejecutar cuando ya se creo la app
    },
    beforeMount(){
        //codigo antes de que se monte la app
    },
    mounted(){
        //codigo cuando ya se monto la app
    }
    //...
}).mount('#IDcontainer');