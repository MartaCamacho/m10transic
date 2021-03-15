<template>
  <div >
    <form
      method="post"
      novalidate="true"
      class="d-flex flex-column align-items-center form w-100 h-100"
      key="form"
    >
      <transition-group name="list" >
      <InputNom key="nom" :name="name" type="text" v-model="name" placeholder="Nom"/>
      </transition-group>
      <transition-group name="list" >
      <InputNum key="mvl" :mvl="mvl" type="text" v-model="mvl" placeholder="Nº de teléfono"/>
      </transition-group>
      <transition-group name="list" >
      <InputCp key="cp" :cp="cp" type="text" v-model="cp" placeholder="C.P." />
      </transition-group>
      <transition-group name="list" >
      <InputMail key="mail" :email="email" type="email" v-model="email" placeholder="E-mail" />
      </transition-group>
      <transition-group name="list" >
      <InputPass key="pass" :password="password" type="password" v-model="password" placeholder="Contraseña"/>
      </transition-group>
      <transition-group name="list" >
      <InputRepeatPass key="repeat" :password="password" :repeatPass="repeatPass" type="password" v-model="repeatPass" placeholder="Repite tu contraseña"/>
      </transition-group>
      <p>
        <input
        type="submit"
        value="Submit"
        class="text-white submit-button"
        :disabled="checkInputs()"
        >
      </p> 
    </form>
  </div>
</template>

<script src="../scripts/Formulari.js"></script>

<style>
@import url(../styles/css/Formulari.css);
</style>
