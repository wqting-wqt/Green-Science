//头部
document.addEventListener('DOMContentLoaded', function () {
    const menuEls = document.querySelectorAll('.dropdown')
    const parts = this.documentElement.querySelectorAll(".part")
    // 添加点击事件
    for (let index = 0; index < menuEls.length; index++) {
        menuEls[index].addEventListener("click", e => {
            // 判断所有元素是否隐藏，没有的添加上，然后把index的去掉隐藏
            for (let i = 0; i < menuEls.length; i++) {
                if (!parts[i].classList.contains('hidden')) {
                    parts[i].classList.add('hidden')
                }
                parts[index].classList.remove("hidden")
            }
        })
    }
});

// 底部
document.addEventListener('DOMContentLoaded', function () {
    const box1Els = document.querySelectorAll('.footer .box1')
    const parts = this.documentElement.querySelectorAll(".part")
    // 添加点击事件
    for (let index = 0; index < box1Els.length; index++) {
        box1Els[index].addEventListener("click", e => {
            // 判断所有元素是否隐藏，没有的添加上，然后把index的去掉隐藏
            for (let i = 0; i < box1Els.length; i++) {
                if (!parts[i].classList.contains('hidden')) {
                    parts[i].classList.add('hidden')
                }
                parts[index].classList.remove("hidden")
            }
        })
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const box2Els = document.querySelectorAll('.product .box2')
    const bigBoxs = document.querySelectorAll('.product .show')
    // 添加点击事件
    for (let index = 0; index < bigBoxs.length; index++) {
        bigBoxs[index].addEventListener("mouseenter", e => {
            // 判断所有元素是否隐藏，没有的添加上，然后把index的去掉隐藏
            for (let i = 0; i < bigBoxs.length; i++) {
                if (box2Els[i].classList.contains('green')) {
                    box2Els[i].classList.remove('green')
                }
            }
            box2Els[index].classList.add('green')
        })
    }
});


