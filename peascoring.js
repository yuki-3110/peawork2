$(document).ready(function () {// DOMの読み込みが終わったらfunction()の中の処理を実行します。
  function score_indicate() {// 「国語、英語、数学」の点数（入力値）を取得して合計点と平均点を出すロジック
    let subject_points = [Number($('#national_language').val()),// 変数「subject_points」に「国語、英語、数学、理科、社会」の点数の配列を代入します。
    Number($('#english').val()),
    Number($('#mathematics').val()),
    ];

let sum = subject_points[0];  // 変数「sum」に「国語、英語、数学」の点数を足します。
sum = sum + subject_points[1];
sum = sum + subject_points[2];

$("#sum_indicate").text(sum);// 「合計点：」(id="sum_indicate")に変数「sum」(合計点)を出力させます。
};

 function get_pass_or_failure() {// 各教科の点数を取得し、取得した点数から「合格、不合格」の判断を下すロジックを作ります。
  let subject_points = [Number($('#national_language').val()),
  Number($('#english').val()),
  Number($('#mathematics').val()),
  ];
  let number = subject_points.length;// 変数「number」に入力した教科の数を代入します。
  let judge = "合格";// 変数「judge」に"合格"を代入しておきます。
  for(let i=0; i<number; i++){
    if (subject_points[i]<60){
      judge="不合格";  // 入力したそれぞれの教科のうち、1つでも60点よりも低い点数があった場合、変数「judge」に"不合格"を再代入する処理を記述する。
      break;
    }
  }
  return judge;
};

function judgement() {  // 最終的なジャッジのロジックを作ります。
  let pass_or_failure = get_pass_or_failure();  // 変数「achievement」に「get_achievement()の戻り値」を代入します。

$('#national_language, #english, #mathematics').change(function () {  // [国語の点数,英語の点数,数学の点数のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  score_indicate();
});

$('#btn-judge').click(function () {// 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
  $("#judge").text(get_pass_or_failure());
});
