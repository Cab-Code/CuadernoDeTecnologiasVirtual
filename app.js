const vueLink = document.getElementById("vuelink");
const vueSelc = document.getElementById("selectVUE");

vueSelc.addEventListener('click',()=>{
    if(vueSelc.value == 'VUE'){
        vueLink.href = 'VUE_notebook/vue.html'
    }
    if(vueSelc.value == 'vueCLI'){
        vueLink.href = 'VUE_notebook/vuecli.html'
    }
})