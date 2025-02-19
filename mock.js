
var http = require('http')
// 使用 Mock
var Mock = require('mockjs')
var feeds = Mock.mock({
    'feeds|5-10': [{
        'id|+1': 1,
        'label': '@ctitle(1, 3)',
        'topic': {
            'id|+1': 1,
            'name': '@ctitle(5, 10)'
        },
        'content': '@cparagraph(5, 10)',
        'image|1-9': [
            '@image(200x200)'
        ],
        'type|1': ['text', 'image', 'video'],
        'userInfo': {
            'avatar': '@image(50x50)',
            'name': '@cname',
            'nameColor': '#000000',
            'achievements|1-3': [
                '@ctitle(3, 5)'
            ],
            'desc': '@ctitle(5, 10)',
            'badge': '@ctitle(2, 4)',
            'verified|1': [1, 0],
            'sex|1': [1, 0],
            'online|1': [1, 0],
            'followed|1': [1, 0]
        },
        'date': '@date("yyyy-MM-dd")',
        'replyCount|1-10': 1,
        'commentCount|1-20': 1,
        'likeCount|1-50': 1,
        'firstComment': {
            'content': '@cparagraph(1, 2)',
            'user': {
                'avatar': '@image(50x50)',
                'nickname': '@cname'
            },
            'date': '@datetime("yyyy-MM-dd HH:mm:ss")'
        }
    }],
    'comments|5-10': [{
        'userInfo': {
            'avatar': '@image(50x50)',
            'name': '@cname',
            'nameColor': '#000000',
            'achievements|1-3': [
                '@ctitle(3, 5)'
            ],
            'desc': '@ctitle(5, 10)',
            'badge': '@ctitle(2, 4)',
            'verified|1': [1, 0],
            'sex|1': [1, 0],
            'online|1': [1, 0],
            'followed|1': [1, 0]
        },
        'content': '@cparagraph(1, 3)',
        'replies|1-5': [
            {
                'user': {
                    'avatar': '@image(50x50)',
                    'nickname': '@cname'
                },
                'content': '@cparagraph(1, 2)',
                'image|0-1': '@image(100x100)',
            }
        ],
        'date': '@datetime("yyyy-MM-dd HH:mm:ss")',
        'location': '@city(true)',
        'likeCount|1-20': 1,
        'replyCount|1-10': 1
    }]
});

// 输出结果
// console.log(JSON.stringify(data, null, 4))


http.createServer(function (req, res) {
    const { url, method } = req;
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (url === '/feeds' && method === 'GET') {
        // 动态列表
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
        res.end(JSON.stringify(feeds, null, 4))
    } else if (url === '/feedDetail' && method === 'GET') {
        // 动态详情
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
        res.end(JSON.stringify(feeds, null, 4))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(3000)


// 动态生成数据
// 