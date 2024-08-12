const {createApp} = Vue;

createApp({
    data() {
        return{
            list : ['아이스 커피', '오렌지 쥬스', '밀크 티', '바닐라라떼'],
            objArr : [
                {site:'양양', taketime:'3시간'},
                {site:'청산도', taketime:'6시간'},
                {site:'인천', taketime:'1.5시간'},
            ],
            myArr : ['일','이','삼','사','오'],
            numArr : [1, 2, 3, 4, 5]
        }
    },
    methods: {
        addList(){
            this.myArr.push('추가');
        },
        addListIndex(arg){
            this.myArr.splice(arg, 0, '삽입'); 
        }, //arg는 기준점, 0은 삭제할게 없다는 의미, '삽입'은 새로 추가될 단어 
        changeList(arg){
            this.myArr.splice(arg, 1, '수정');
        },//arg는 기준점, 1은 기준점부터 1개 삭제, '수정'은 삭제 후 들어갈 단어
        deleteList(arg){
            this.myArr.splice(arg, 1);
          //arg는 기준점, 1은 기준점으로부터 1개 삭제
        },
    },
}).mount('#app');