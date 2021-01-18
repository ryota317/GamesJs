// let hello = 'Hello World!';

// console.log(hello);

// //定数
// const koko = "定数です";

// console.log(koko);


// let arr = ['1', '2', '3','hello'];


// console.log(arr[0]);

// //ループ
// let index = 0;
// while(index < arr.length){
  
//   console.log(arr[index]);
//   index++;
// }


// //if else
// // if(arr.length > 5){
// //   console.log('kokokokokok');
// // }else{
// //   console.log('lloloo');
// // }



// //関数
// const test = (arg) =>{
//   if(arr.length > arg){
//     console.log('kokokokokok');
//   }else{
//     console.log('lloloo');
//   } 
// }

// //オブジェクト

// const unk = {
//   color:'pink',
//   size: 22,
//   pur: 'mint',
//   go:()=>{
//     console.log('tore');
//   }
// }

// console.log(window.alert('stop'));

// console.log(document.getElementsByTagName('button')[0]);


// document.getElementsByTagName('button')[0].addEventListener('click', () =>{
// window.alert('testtest');
// });


const quiz =[
  {
    question:'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers:[  'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'],
    correct : 'ニンテンドーDS'
  },{
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
    correct: 'セシル'
  }
];



const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;








//htmlオブジェクトをとってくる場合、暗黙の了解で変数の前に$を付ける
const $button  = document.getElementsByTagName('button');
let buttonLength = $button.length;
//クイズの問題文、選択肢の定義
const setupQuiz= () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
 
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;  
  }
}

setupQuiz();



const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  }else{
    window.alert('不正解!');
  }
  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了!!あなたの正解数は' + score + '/' + quizLength + 'です');

// id属性で要素を取得
var textbox_element = document.getElementById('end');

// 新しいHTML要素を作成
var new_element = document.createElement('button');
var new_element2 = document.createElement('form');
new_element.textContent = 'もう一度!!';
new_element.classList.add('btn','btn-primary','mt-5');

// 指定した要素の中の末尾に挿入
textbox_element.appendChild(new_element2);
new_element2.appendChild(new_element);
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e)=>{
    clickHandler(e);
  });
  
  handlerIndex++;
}


