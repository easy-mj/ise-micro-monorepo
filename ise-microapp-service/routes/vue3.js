const router = require('koa-router')()

router.prefix('/vue3')

router.get('/swapper', function (ctx, next) {
  ctx.body = [
    'https://g.autoimg.cn/@img/www2/chejiahaodfs/g32/M05/6B/ED/1280x496_autohomecar__Chtk2WfjotOAanctAA4Wf6FjXmM889.png',
    'https://g.autoimg.cn/@img/www2/chejiahaodfs/g32/M09/69/52/1280x496_autohomecar__Chtk2Wfir4OAW8yJAA71uFEsdaU380.png',
    'https://g.autoimg.cn/@img/www2/chejiahaodfs/g31/M02/50/02/1280x496_autohomecar__ChxoHmfirbuAWOR0AA32gDFm6tE857.png'
  ]
})

router.get('/text', function (ctx, next) {
  ctx.body = [
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗'
  ]
})

module.exports = router
