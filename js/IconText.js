/**
 * IconText组件
 * create by zxl on 2019-08-19
 */
const iconText={
    props:['icon','text'],
    template:`
        <div class="icon_text">
            <slot name="icon"><i :class="['iconfont',icon]"></i></slot>
            <slot name="text"><span v-text="text"></span></slot>
        </div>
    `
}