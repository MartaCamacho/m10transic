<template>
  <div>
    <!-- EXERCICI 2:
      <button @click="getMovies">movies</button>
    <ul v-for="(item, index) of movies" :key="index">
      <li>{{ item.title }}</li>
    </ul> -->
    <!-- EXERCICI 3 -->
    <h1>Buscador 🔎 de Vuex</h1>
    <div class="d-flex flex-column justify-content-center align-items-center w-100 mt-3 mb-3">
      <input class="w-50" type="text" value="search" placeholder="introduce tu búsqueda" v-model="searchInput"/>
      <div class="mt-3 mb-3">
        <input class="ml-2" type="radio" id="all" value="all" @click="sortedMovies('all')" v-model="available"/>
        <label class="ml-2">Todas</label>
        <input class="ml-2" type="radio" id="true" value="true" @click="sortedMovies(true)" v-model="available"/>
        <label class="ml-2">Disponible</label>
        <input class="ml-2" type="radio" id="false" value="false" @click="sortedMovies(false)" v-model="available"/>
        <label class="ml-2">No Disponible</label>
      </div>
    </div>

    <div  v-if="filteredMovies === []">
      <transition-group class="d-flex row" name="list" >
      <div class="col-12 col-md-6 d-flex flex-column" v-for="(item, index) of filteredData" :key="index" >
        <b-card-group class="d-flex flex-column" key="!filteredMovies">
        <b-card-header>{{ item.title }}</b-card-header>
        <b-card >
          <b-card-body>
            <b-card-text>
              {{ item.available }}
            </b-card-text>
          </b-card-body>
        </b-card>
        </b-card-group>
      </div>
      </transition-group>
    </div>
    
    <div  v-else>
      <transition-group class="d-flex row" name="pop" >
      <div class="col-12 col-md-6 d-flex flex-column" v-for="(item, index) of filteredData " :key="index" >
        <b-card-group class="d-flex flex-column" key="index">
        <b-card-header>{{ item.title }}</b-card-header>
        <b-card >
          <b-card-body>
            <b-card-text>
              {{ item.available }}
            </b-card-text>
          </b-card-body>
        </b-card>
        </b-card-group>
      </div>
      </transition-group>
    </div>
     <transition-group name="pop" >
    <div v-if="filteredData.length === 0" key="alert">
      <b-alert variant="danger" show>No hay películas disponibles</b-alert>
    </div>
    </transition-group>

  </div>
</template>

<script src="../scripts/SearchFilm.js"></script>

<style scoped>
@import url("../styles/css/SearchFilm.css");
</style>
