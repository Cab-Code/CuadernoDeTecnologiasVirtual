const nombreApp = Vue.createApp({
    data(){
        return{
            nombre: "Estuardo",
            apellido: "Cabrera",
            productos: "Bonos de descuento"
        }
        
    },
    methods(){
        //metodo saludar
    saludar:{
        console.log(`Hola ${ this.nombre } ${ this.apellido } listo para vender esos ${ this.productos }`)
    }
    }
}).mount('#IDcontainer');