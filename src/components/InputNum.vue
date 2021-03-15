<template>
  <span class="d-flex justify-content-between align-items-center flex-column w-100">
    <transition-group name="list">
      <p key="inpNum" class="d-flex justify-content-between">
        <label for="name">Mòbil</label>
        <input
          :name="mvl"
          :type="type"
          :placeholder="placeholder"
          @focus="cleanErrors"
          @blur="checkNum"
          @input="$emit('input', $event.target.value)"
        />
      </p>
      <transition-group name="list"> </transition-group>
      <div key="errNum" class="theDiv">
        <span v-if="errors.length">
          <span v-for="error in errors" :key="error">{{ error }}</span>
        </span>
      </div>
    </transition-group>
  </span>
</template>
<script src="../scripts/InputNum.js"></script>
<style>
@import url(../styles/css/Formulari.css);
</style>
