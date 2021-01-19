import {ref, onMounted, onBeforeMount} from 'vue'

const useScroll = () => {
    const oldScrollTop=ref(false)
    const handler = () => {
        // 滚动条距文档顶部的距离
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
            document.body.scrollTop
        // 滚动条滚动的距离
        oldScrollTop.value = scrollTop > 0;
    }
    onBeforeMount(()=> {
        window.addEventListener("scroll",handler)
    })
    return oldScrollTop
}

export default useScroll
