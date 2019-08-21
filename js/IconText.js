/**
 * IconText组件
 * create by zxl on 2019-08-19
 * props:icon-图标,text-文字,type-default/desc
 */
const iconText={
    props:{
        icon:{
            type:String,
            default:'iconic_project'
        },
        text:{
            type:String,
            default: ''
        },
        type:{
            type:String,
            default:''
        },
        customerColor:{
            type:String,
            default:''
        }
    },
    computed:{
        style(){
            let _style={
                display:'inline-block',

            }
            if(this.customerColor){
                _style.color=this.customerColor
            }else{
                if(this.type==='primary'){
                    _style.color='#0098E3'
                }else if(this.type==='desc'){
                    _style.color='#979799'
                }else if(this.type==='warn'){
                    _style.color='#FF3900'
                }
            }
            return _style
        }
    },
    template:`
        <div class="icon_text" :style="style">
            <slot name="icon"><i :class="['iconfont',icon]"></i></slot>
            <slot name="text"><span v-text="text"></span></slot>
        </div>
    `
}
