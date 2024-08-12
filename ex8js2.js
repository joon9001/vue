(function(){
    const {createApp} = Vue;
    /* 
    createApp은 1번만 선언할 수 있는데 ex8js1,ex8js3에서도 선언하므로 충돌문제가 발생한다.
    (SyntaxError: Identifier 'createApp' has already been declared (at ex8js3.js:1:1))
    위 문제의 해결방법은 IIFE로 Vue 인스턴스를 감싸주면 식별자 충돌문제를 해결할 수 있다.
    */
    createApp({
        data(){
            return {
                ypay:0,
                busers:[
                    {bunho:'10', irum: '총무부', junhwa:'111-1111'},
                    {bunho:'20', irum: '영업부', junhwa:'111-2222'},
                    {bunho:'30', irum: '전산부', junhwa:'111-3333'},
                    {bunho:'40', irum: '관리부', junhwa:'111-4444'},
                ],
                cssStyleTest:{
                    color: 'red', fontSize:'20px'
                }
            }
        },
    
    }).mount('#app2');
})();
