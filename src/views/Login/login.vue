<template>
  <main class="form-signin mt-5">
    <form class="border-secondary border-3">
      <div class="text-center">
        <img class="mb-4"   src="dataimg/logo.png" alt="" width="52" height="52" >
      </div>
      <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
      <div class="container mb-5">
        <validate-form @form-submit="onFormSubmit">
          <div >
            <label class="form-label">邮箱地址</label>
            <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址" type="text"
                            ref="inputRef"></validate-input>
          </div>
          <div >
            <label class="form-label" type="password">密码</label>
            <validate-input :rules="passwdRules" v-model="passwdVal" placeholder="请输入密码" type="password"></validate-input>
          </div>
          <template #submit>
            <span class="btn btn-primary float-end w-100">登录</span>
<!--            <span class="btn btn-danger float-end">注册</span>-->
          </template>
        </validate-form>
      </div>
    </form>
  </main>
</template>
<script lang="ts">
import {reactive, defineComponent, ref} from 'vue'
import { useRouter } from 'vue-router'
import ValidateInput,{RulesProp} from "@/components/Datafrom/ValidateInput.vue"
import ValidateForm from "@/components/Datafrom/ValidateForm.vue";
export default defineComponent({
  name: 'Login',
  components: {ValidateInput, ValidateForm},
  setup() {
    // const inputRef = ref<any>()
    const inputRef = ref()
    const router = useRouter()
    const emailVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwdVal = ref('')
    const passwdRules: RulesProp =[
      {type:'required', message:'密码不能为空'}
    ]
    const onFormSubmit = (result: boolean)=>{
      if(result){
        // router.push({name: 'column',params: {id:1}})
        router.push('/')
        // store.commit('login')
      }
    }
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    return {
      emailRef,
      emailRules,
      emailVal,
      passwdRules,
      passwdVal,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

<style scoped>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
