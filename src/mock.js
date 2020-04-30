import Mock from 'mockjs'

let domain = 'http://test.com/api/'

// 登录
Mock.mock(domain + 'login', {
    code: 200,
    msg: 'OK',
    data: {
        nickname: '兔子先生',
        accessToken: 'fqh0i-LyINZ-RvK5d-Akj3a-uBYRl',
    }
})

// 提交数据
Mock.mock(/getData/, 'get', {
    code: 200,
    msg: '数据提交成功',
    data: {}
})