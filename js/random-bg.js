// --- 随机背景图片 ---

// 1. 在这里写下你所有背景图片的路径
const backgroundImages = [
  "/images/background.jpg",
  "/images/background1.jpg",
  "/images/background2.jpg",
  "/images/background3.jpg",
  "/images/background4.jpg",
  // 在这里继续添加更多图片，一行一个，用逗号隔开
];

// 2. 获取一个随机的图片路径
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
}

// 3. 等待网页加载完毕后，更换背景
document.addEventListener("DOMContentLoaded", function () {
  // 找到需要更换背景的那个HTML元素
  // 对于 particleX 主题，这个元素是 <div id="background">
  const backgroundElement = document.getElementById("background");

  if (backgroundElement) {
    const randomImageUrl = getRandomImage();
    // 将这个元素的背景图片样式，设置为我们随机选中的图片
    backgroundElement.style.backgroundImage = `url(${randomImageUrl})`;
  }
});
