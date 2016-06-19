/**
 * Created by Administrator on 2016/6/17.
 */

function bFn(){
    console.log('3.1 bFn()这里是: ./lib/b/b.js');
    console.log('3.2 b.js发出的疑问：为什么b.js跑到最前面执行了？');
};

bFn.apply();