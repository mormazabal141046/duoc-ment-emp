<template>
  <div class="row flex justify-center items-center content-center fullscreen">
    <div class="bg-primary col-6 flex column justify-center items-center content-center q-pa-xl rounded-borders">
      <img src="img/logo.png" alt="" style="width:150px;">
      <div class="text-white text-h4 q-my-md">LOGIN</div>
      <q-input class="flex q-mb-lg inp-login" style="min-width: 350px;" label-color="white" v-model="email" filled type="email" label="Usuario" color="white" stack-label input-style="color:white;" />
      <q-input class="flex q-mb-lg inp-login" style="min-width: 350px;" label-color="white" v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Contraseña" stack-label color="white" input-style="color:white;">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn unelevated rounded color="dark" label="Ingresar" size="md" class="q-py-sm q-px-lg" />

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
/* .inp-login{
  color: white;
} */

</style>
