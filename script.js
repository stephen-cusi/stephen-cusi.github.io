// 使用网络音频链接
// 这次使用本地文件，再也不用垃圾网易云
const audio = new Audio('assets/x-files.mp3');

// 设置autoplay
audio.autoplay = true; 

// 监听canplay事件尝试播放
audio.addEventListener('canplay', () => {
  audio.play();
});

// 监听ended事件重新播放  
audio.addEventListener('ended', () => {
  audio.play();
});

document.addEventListener('DOMContentLoaded', () => {

  // 添加点击事件重新播放
  document.body.addEventListener('click', () => {
    audio.play();
  });

});

// 添加底部按钮点击处理
//...省略

// 添加底部按钮点击处理
