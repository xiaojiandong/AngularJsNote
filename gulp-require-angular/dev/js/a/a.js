

$(function(){
    console.log('2.1 这里是: ./dev/js/a/a.js');
    function main(){
        var a = 10;
        var b = 11;
        var c = 12;
        console.log('a+b+c : ' + a+b+c);
        console.log('2.2 将入口文件index.html放入到了 ./dev/html里面');
    };
    main();

  function alertFn(){
      alert('2. main.js里面的点击事件方 alertFn()');
  };
// main.js里面的ondivclick方法
  $('.div2').on('click',function(){
      alertFn.apply(this);
  });
});


