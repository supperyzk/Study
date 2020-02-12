<template>
   <div class="wBox">
      <span>{{ data }}</span>
      <br>
      <input type="text" v-model="msg">
      <br>
      <div v-for="arrs in arr" :key="arrs.id">
          <span>{{ arrs }}</span>
      </div>
      <br>
      <button v-on:click="add()">哈哈</button>
      <br>
      <div class="boxs" v-show="boxshow">

      </div>
      <br>
      <div class="container">
           <span>a:</span>
           <input type="text" v-model="myname">
           <span>b:</span>
           <input type="text" v-model="myage">
           <button @click="tj()">添加</button><button @click="qk()">重置</button>
           <ul v-for="(item,index) in myData" :key="index">
               <li @click="sc(index)">{{item.name}} {{ item.age }} </li>
           </ul>
      </div>
      <br>
      <div @click="mone()">
        <button @click.stop="mtwo()">冒泡</button>
      </div>
   </div>
</template>

<script>
export default {
  name:'Study',
  data(){
      return{
        data:'123',
        msg:'this is input',
        arr:['apple','banana','orige'],
        boxshow:true,
        myData:[],
        myname:'',
        myage:''
      }
  },
  methods:{
    add:function(){
        this.arr.push('xigua');
        this.boxshow = !this.boxshow;
    },
    tj:function(){
       this.myData.push({
           name:this.myname,
           age:this.myage
       })
    },
    qk:function(){
        this.myname ='';
        this.myage = '';
    },
    sc:function(item){
        this.myData.splice(item,1);
    },
    mone:function(){
        alert('1')
    },
    mtwo:function(){
        alert('2');
    }
  }
}
</script>

<style lang="scss" scoped>
input{
    border: 1px solid red;
}
.boxs{
    width: 100px;
    height: 100px;
    background: red;
}
</style>