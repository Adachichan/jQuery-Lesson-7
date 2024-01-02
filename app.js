// class属性の切り替え → addClass( )とremoveClass( )
// addClass( )：対象のHTML要素にclass属性を追加する。
// removeClass( )：要素に設定されているclass属性を解除する。

$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass('box1-ext');
  });

  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});