<template>
  <span class="d-flex justify-content-between align-items-center flex-column w-100">
<transition-group name="list" >
    <p key="nom" class="d-flex justify-content-between">
      <label for="name">Nom</label>
      <input
        :name="name"
        :type="type"
        :placeholder="placeholder"
        @focus="cleanErrors"
        @blur="checkName"
        @input="$emit('input', $event.target.value)"
      >
    </p>
<transition-group name="list" >
  </transition-group>
    <div key="errnom" class="theDiv">
      <span v-if="errors.length">
        <span v-for="error in errors" :key="error">{{ error }}</span>
      </span>
    </div>
  </transition-group>
  </span>
</template>
<script src="../scripts/InputNom.js"></script> 
<style>
@import url(../styles/css/Formulari.css);
</style>