(function(){ //createApp은 1번만 선언할 수 있는데 ex8js2,ex8js3에서도 선언하므로 충돌문제가 발생한다.
    //이를 해결하기 위해 IIFE를 이용해 createApp을 익명함수로 감싸주고 즉시실행함수 ()를 붙여주면 충돌문제를 해결할 수 있다.
    const {createApp} = Vue;
    createApp({
        data(){
            return {
                key:'값1',
                key2:'값2',
                message:'안녕하세요',
                htmlString:'<p style="color:blue;">맑게 갠 파란 하늘</p>',
                su1:'0',
                su2:'0',
                daumlogo:'https://t1.daumcdn.net/daumtop_deco/images/pctop/2023/logo_daum.png',
            }
        },
        methods: {
            myFunc(){
                console.log(this.message);
            },
            myChange1(){
                this.message = "안녕";
            },
            myChange2(){
                this.message = "반가워";
            },
        },
    }).mount('#app');
})();


