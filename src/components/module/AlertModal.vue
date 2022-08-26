<template>
    <div class="modal">
        <div class="modal-box relative">
            <label for="my-modal-2" class="btn btn-sm absolute btn-ghost right-2 top-2">✕</label>
            <div class="text-center">
                <p class="text-lg font-bold py-4">ooo님이</p>
                <p>미션으로 책읽고 글쓰기를</p>
                <p>하고 있습니다</p>
            </div>
            
            <div class="modal-action flex flex-wrap justify-evenly">
                <label for="my-modal-2" class="btn btn-outline w-1/3">Yay!</label>
                <a href="#" class="btn btn-success w-1/3">btn2</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'AlertModal',
    props: {
       
    }
}
</script>
<style lang="">
    
</style>