var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

exports.downloads = function(keywords,page){
    var url = 'http://bearbt.com/search/'+keywords+'/'+page;
    console.log('----------当前下载:'+ keywords + '---------第'+page+'页------------');
    console.log(url);
    request({
        uri : url,
        headers : {
            'Referer': 'http://www.baidu.com'
        }
    },function (err,res,body) {
        if ( !err && res.statusCode == 200 )
        {
            var $ = cheerio.load(body);
            var li = $('#container').find('.main').find('.mlist').find('li');
            for ( var i=0; i< li.length; i++ ) {
                var title = li.eq(i).find('.T1').find('a').text();
                var span = li.eq(i).find('.BotInfo').find('dt').find('span');
                var size = span.eq(0).text();
                var count = span.eq(1).text();
                var time = span.eq(2).text();
                var link = li.eq(i).find('.dInfo').find('a').attr('href');
                var content = '';
                content += '--------------------------------------\n';
                content += '\n';
                content += title + '\n';
                content +=  '文件大小:'+size+'\n';
                content += '文件数量:'+ count + '个\n';
                content += '发布时间:' + time.trim() + '\n';
                content += link + '\n';
                content += '\n';
                console.log(content);
                fs.writeFile(keywords + '.txt',content,{mode:'777',flag:'a+'});

            }
        }else
        {
            console.log(err);
        }
    });
};
