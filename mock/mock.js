import Mock from 'mockjs'

let song = Mock.mock('http://song.cn', {
    'status': '0',
    'result|3-6': [{
        'id|+1': 0,
        'songName': '@cname'
    }]
})
let hot = Mock.mock('/hotSearch', {
    'status': '0',
    // 'result|10': [{
    //     'id|+1': 0,
    //     'songName': '@cname'
    // }]
    'result': [
        {url: '', name: '你不要担心'},
        {url: '', name: '路过人间'},
        {url: '', name: '绿色'},
        {url: '', name: '花季少女101'},
        {url: '', name: '三妻四妾'},
        {url: '', name: '非自然死亡'},
        {url: '', name: '山茶花'},
        {url: '', name: 'lemon'}
    ]
})
let swipes = Mock.mock('http://swipe.cn', {
    'status': '0',
    'swipeData': [
        {title: '轮播1', url: '/ts1', img: require('images/swipe/swipe_1.jpg')},
        {title: '轮播2', url: '/ts2', img: require('images/swipe/swipe_2.jpg')},
        {title: '轮播3', url: '/ts3', img: require('images/swipe/swipe_3.jpg')},
        {title: '轮播4', url: '/ts4', img: require('images/swipe/swipe_4.jpg')}
    ]
})
let sheel = Mock.mock('http://sheel.cn', {
    'status': '0',
    'sheelData': [
        {title: 'sheel1', img: require('images/sheel/1.jpg')},
        {title: 'sheel2', img: require('images/sheel/1.jpg')},
        {title: 'sheel3', img: require('images/sheel/1.jpg')},
        {title: 'sheel4', img: require('images/sheel/1.jpg')},
        {title: 'sheel1', img: require('images/sheel/1.jpg')},
        {title: 'sheel2', img: require('images/sheel/1.jpg')},
        {title: 'sheel3', img: require('images/sheel/1.jpg')},
        {title: 'sheel4', img: require('images/sheel/1.jpg')},
        {title: 'sheel1', img: require('images/sheel/1.jpg')},
        {title: 'sheel2', img: require('images/sheel/1.jpg')},
        {title: 'sheel3', img: require('images/sheel/1.jpg')},
        {title: 'sheel4', img: require('images/sheel/1.jpg')},
        {title: 'sheel1', img: require('images/sheel/1.jpg')},
        {title: 'sheel2', img: require('images/sheel/1.jpg')},
        {title: 'sheel3', img: require('images/sheel/1.jpg')},
        {title: 'sheel4', img: require('images/sheel/1.jpg')}

    ]
})

let sheel2 = Mock.mock('http://sheel2.cn',function (options) {
    let result = {
        'status': '1',
        'sheelData': [
            {title: 'sheel1', img: require('images/sheel/1.jpg')},
            {title: 'sheel2', img: require('images/sheel/1.jpg')},
            {title: 'sheel3', img: require('images/sheel/1.jpg')},
            {title: 'sheel4', img: require('images/sheel/1.jpg')},

            {title: 'sheel3', img: require('images/sheel/1.jpg')},
            {title: 'sheel4', img: require('images/sheel/1.jpg')}
        ]
    }
    let result2 = {
        'status': '2',
        'sheelData': [
            {title: 'sheel1', img: require('images/sheel/1.jpg')},
            {title: 'sheel2', img: require('images/sheel/1.jpg')},
            {title: 'sheel3', img: require('images/sheel/1.jpg')},
            {title: 'sheel4', img: require('images/sheel/1.jpg')},
            {title: 'sheel1', img: require('images/sheel/1.jpg')},
            {title: 'sheel2', img: require('images/sheel/1.jpg')},
            {title: 'sheel3', img: require('images/sheel/1.jpg')},
            {title: 'sheel4', img: require('images/sheel/1.jpg')},
            {title: 'sheel1', img: require('images/sheel/1.jpg')},
            {title: 'sheel2', img: require('images/sheel/1.jpg')},
            {title: 'sheel3', img: require('images/sheel/1.jpg')},
            {title: 'sheel4', img: require('images/sheel/1.jpg')},
            {title: 'sheel1', img: require('images/sheel/1.jpg')},
            {title: 'sheel2', img: require('images/sheel/1.jpg')},
            {title: 'sheel3', img: require('images/sheel/1.jpg')},
            {title: 'sheel4', img: require('images/sheel/1.jpg')},
            {title: 'sheel4', img: require('images/sheel/1.jpg')},
            {title: 'sheel1', img: require('images/sheel/1.jpg')},
            {title: 'sheel2', img: require('images/sheel/1.jpg')},
            {title: 'sheel3', img: require('images/sheel/1.jpg')},
            {title: 'sheel4', img: require('images/sheel/1.jpg')}
        ]
    }
    if (JSON.parse(options.body).id === 1 && JSON.parse(options.body).index === 2) {
        return result2
    } else {
        return result
    }
})

let musicList = Mock.mock('/player/list', {
    'status': '0',
    'musicListData': [
        {url: 'yzhaj', songName: '一直很安静', singerName: '阿桑', src: require('~/music/yzhaj.mp3'), time: 251},
        {url: 'by', songName: '冰雨', singerName: '刘德华', src: require('~/music/bingyu.mp3'), time: 350},
        {url: 'lemon', songName: 'Lemon', singerName: '米津玄師', src: require('~/music/米津玄師 - Lemon.mp3'), time: 305},
        {url: 'xyt', songName: '逍遥叹', singerName: '奇然', src: require('~/music/奇然 - 逍遥叹.mp3'), time: 305},
        {url: 'yh', songName: '瑠璃色の地球', singerName: '広瀬すず', src: require('~/music/広瀬すず - 瑠璃色の地球.mp3'), time: 305},
        {url: 'happysunshine', songName: ' Happy Sunshine', singerName: '伊藤かな恵', src: require('~/music/伊藤かな恵 - Happy Sunshine.mp3'), time: 305}
    ]
})

let musicListSheel = Mock.mock('http://musicListSheel.cn', {
    'status': '0',
    'data': [
        {title: '我喜欢的音乐', amount: '800首', background: require('images/listSheel/1.jpg')},
        {title: '英文歌曲', amount: '200首', background: require('images/listSheel/2.jpg')},
        {title: '日文歌曲', amount: '100首', background: require('images/listSheel/3.jpg')},
        {title: '韩歌曲', amount: '100首', background: require('images/listSheel/4.jpg')}
    ]
})

export default { song, hot, swipes, sheel, sheel2, musicList, musicListSheel }
