function Game(demo){
    this.node = document.querySelector(demo);
    this.level = ['简单','普通','困难','噩梦'];
    this.init();
}
Game.prototype = {
    init:function(){
        //游戏标题
        this.title = document.createElement('h2');
        this.title.innerText = '飞机大战';
        this.node.appendChild(this.title);


        //游戏关卡
        this.levelNode = document.createElement('ul');
        this.node.appendChild(this.levelNode);
        for (var i=0;i<this.level.length;i++){
            var li = document.createElement('li');
            this.levelNode.appendChild(li);
            li.innerText = this.level[i];
        }
        this.levelNode.addEventListener('click',this.clickInit.bind(this),false)
        this.changeBg(1);
    },
    //获取鼠标点击的li索引
    clickInit:function(e){
        e = e||window.event;
        if (e.target.nodeName==='UL')return;
        this.index = [].indexOf.call(this.levelNode.children,e.target);
        this.changeBg(this.index+1);
        this.start();
    },
    //修改背景图片
    changeBg:function(index){
        this.node.style.backgroundImage = 'url(images/bg_'+index+'.jpg)'
    },
    //开始游戏
    start:function(){
        this.node.innerText = '';
    }

};
var game = new Game('#box');