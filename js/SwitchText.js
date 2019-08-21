/**
 * SwitchText组件
 * create by zxl on 2019-08-21
 * props:size-大小,activeColor-打开颜色,inactiveColor-关闭颜色,activeText-打开文字,inactiveText-关闭文字，value-绑定的值(v-model)
 */
const switchText={
    props:{
        size:{
            type:Number,
            default:24
        },
        activeColor:{
            type:String,
            default: '#0098E3'
        },
        inactiveColor:{
            type:String,
            default:'#FF3900'
        },
        activeText:{
            type:String,
            default: '是'
        },
        inactiveText:{
            type:String,
            default: '否'
        },
        value:{
            type:Boolean,
            default:false
        }
    },
    created(){
        this.data=this.value
    },
    watch:{
        data(value){
            this.$emit('input',value)
        }
    },
    computed:{
        style(){
            return{
                fontSize:(this.size/2+4)+'px',
                display:'inline-block',
                position:'relative',
                top:-this.size/4+'px',
                marginLeft:'2px',
                color:this.data?this.activeColor:this.inactiveColor
            }
        }
    },
    data(){
        return{
            data:true
        }
    },
    template:`
        <div class="switch-text">
            <van-switch v-model="data"
                        :active-color="activeColor"
                        :inactive-color="inactiveColor"
                        :size="size+'px'">
            </van-switch>
            <div class="text" :style="style">
                <span v-text="data?activeText:inactiveText"></span>
            </div>
        </div>
    `
}
