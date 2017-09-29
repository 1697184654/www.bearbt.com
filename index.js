var downloads = require('./downloads');

var argvs = process.argv;
if ( argvs.length && argvs.length == 3)
{
    keywords = argvs[2];
    for ( var i=1; i<= 10; i++) {
        downloads.downloads(keywords,i);
    }
}else{
    console.log('请输入一个搜索关键字！');
}




