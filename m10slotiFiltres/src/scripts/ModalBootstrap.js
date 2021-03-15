export default {
  name: "ModalBootstrap",
  props: {
    number: "",
    msg: "",
  },
  data() {
    return {
      euros: "",
      dollar: "",
      showModal: false,
    };
  },
  methods: {
    changeInput(number) {
      this.dollar = number * 1.23;
    }
  }
};
