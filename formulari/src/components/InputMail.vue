<template>
  <span
    class="d-flex justify-content-between align-items-center flex-column w-100"
  >
    <transition-group name="list">
      <p key="inpMail" class="d-flex justify-content-between">
        <label for="email">Email</label>
        <input
          :name="email"
          :type="type"
          :placeholder="placeholder"
          @focus="cleanErrors"
          @blur="checkMail"
          @input="$emit('input', $event.target.value)"
        />
      </p>
    </transition-group>
    <transition-group name="list">
      <div key="errMail" class="theDiv">
        <span v-if="errors.length">
          <span v-for="error in errors" :key="error">{{ error }}</span>
        </span>
      </div>
    </transition-group>
  </span>
</template>
<script src="../scripts/InputMail.js"></script>
<style>
@import url(../styles/css/Formulari.css);
</style>
