<template>
  <div class="row bg-secondary flex justify-center items-center content-center fullscreen">
    <div class="bg-primary col-6 flex column justify-center items-center content-center">
      <img src="img/icon_login.png" alt="" style="width:150px;">
      <h3>Login</h3>
      <q-input class="" v-model="email" filled type="email" hint="Email" />
      <q-input class="" v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  name:"Login",
  data(){
    return{
      password: '',
      isPwd: true,
      email: '',
    }
  }
}
</script>

<style>

</style>
