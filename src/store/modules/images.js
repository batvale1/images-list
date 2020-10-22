import {
  imageGet
} from "@/api/images";

// initial state
const state = () => ({
  newImage: {},
  images: []
});

// getters
const getters = {
  getNewImage: (state) => state.newImage,
  getImages: (state) => state.images
};

// mutations
const mutations = {
  setNewImage: (state, payload) => {
    state.newImage = payload.data;
  },
  addNewImage: (state) => {
    state.newImage.appUploadedAt = new Date();
    state.images.push(state.newImage);
  },
  removeImage: (state, payload) => {
    const elemIndex = state.images.findIndex(item => item.id === payload.id);
    if (elemIndex !== -1) {
      state.images.splice(elemIndex, 1);
    }
  }
};

// actions
const actions = {
  getNewImage: ({ commit }) => imageGet()
    .then((response) => {
      return commit('setNewImage', response.data);
    }),
  addNewImage: ( { commit }) => {
    //здесь нам бы ее сохранить в БД на беке, а пока просто эмуляция ответа
    return new Promise((resolve) => {
      commit('addNewImage');
      resolve();
    });
  },
  getImages: () => {
    //тут бы пойти и забрать картинки с бека, пока просто эмуляция
    return new Promise((resolve) => {
      //имитация задеркжи ответа сервера
      setTimeout(() => resolve(), 1000);
    });
  },
  removeImage: ( { commit }, payload) => {
    //тут бы пойти и удалить картинку с бека, пока просто эмуляция
    return new Promise((resolve) => {
      commit('removeImage', payload);
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};