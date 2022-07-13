
///////////////////////////////
// Forma uno de montado de APP
///////////////////////////////


const nombreApp = Vue.createApp({
    data(){
        return{
            propiedad: "valor",
            propiedad2: "valor",
            propiedad3: "valor"
        }
        
    }
}).mount('#IDcontainer');


///////////////////////////////
// otra forma de montaje de APP
///////////////////////////////


const nombreApp2 = {
    data(){
        return{
            prop: 'val',
            prop: 'val',
            prop: 'val'
        }
    }
}
let nomVariable = Vue.createApp(nombreApp2).mount('#IDcontainer')
