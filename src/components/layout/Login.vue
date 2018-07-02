<template>
  <div class="login-form-container">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem>
        <h2 class="login-title">Login</h2>
      </FormItem>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button class="login-submit-btn" type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    },

  }
</script>
<style lang='scss'>
  .login-form-container{
    width: 350px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #999;
    padding: 50px 30px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);

    .login-title{
      text-align: center;
    }
    .login-submit-btn{
      width: 100%
    }
  }
</style>
