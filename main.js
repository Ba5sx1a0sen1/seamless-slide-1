let index = 0
init() //初始化
setInterval(()=>{
    makeLeave(getImage(index))
        .one('transitionend',(e)=>{
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(index+1))
    index++
},2000)

//工具函数
function getIndex(n){return n%5+1}
function getImage(n){return $(`.images>img:nth-child(${getIndex(n)})`)}
function init(){getImage(index).addClass('current').siblings().addClass('enter')}
function makeCurrent($node){return $node.removeClass('enter leave').addClass('current')}
function makeLeave($node){return $node.removeClass('enter current').addClass('leave')}
function makeEnter($node){return $node.removeClass('current leave').addClass('enter')}