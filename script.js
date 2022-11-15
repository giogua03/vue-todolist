new Vue({
    el:'#applicazione',
    data:{
        todo:[
            {
                text:'fare compiti',
                done:'false',

            },
            {
                text:'fare sport',
                done:'true',

            },
            {
                text:'fare lezione',
                done:'false',

            },
            {
                text:'fare spesa',
                done:'false',

            },


        ],
        nuovoTo :'',
    },
    methods: {
        piuTodo(){
            this.todo.push(this.nuovoTo);
            this.nuovoTo = '';
        },
        cancellaTodo(index){
            this.todo.splice(index,1);
        },
    }
});