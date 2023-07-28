// 使用网络音频链接 
const audio = new Audio('https://m701.music.126.net/20230728111816/fddb07312ae64260d072b4422a908085/jdyyaac/5153/050f/5158/f9185c39882efd4ac54cf2c1824f6a2a.m4a');

document.addEventListener('DOMContentLoaded', () => {

  audio.play();

});

// 添加底部按钮点击处理
const btn = document.getElementById('grave-btn');

btn.addEventListener('click', () => {

  if(confirm('是否去看他的墓?')){
    window.location.href = 'https://b23.tv/3Oks25P';
  }

});