<template>
  <main>
    <div class="title">
      <img :src="vueJsLogoImg" alt="VueJS Logo">
      <h1>{{ title }}</h1>
    </div>

    <section class="clothingRegister">

      <div class="subtitle">
        <ClothingForm class="formBtn" />

        <p>Total in Stock: {{ totalInStock }}</p>
      </div>

      <v-simple-table dark class="table">
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Brand
            </th>
            <th class="text-left">
              Price
            </th>
            <th class="text-left">
              Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="clothes in clothing" :key="clothes.id">
            <td>
              {{ clothes.name }}
              <span v-if="clothes.quantityInStock === 0">
                - Out of Stock
              </span>
            </td>
            <td>{{ clothes.brand }}</td>
            <td>R$ {{ clothes.price }}</td>
            <td>
              <button :disabled="clothes.quantityInStock <= 0" @click="clothes.quantityInStock--">
                -
              </button>
              <input type="number" v-model.number="clothes.quantityInStock" />
              <button @click="clothes.quantityInStock++">
                +
              </button>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </section>
  </main>
</template>

<script>
import vueJsLogoImg from "../assets/logo.png";
import ClothingForm from "./ClothingForm.vue";

export default {
  name: 'ClothingStore',
  components: {
    ClothingForm
  },
  props: {
    title: String,
  },
  data() {
    return {
      vueJsLogoImg: vueJsLogoImg,
      clothing: [
        { id: 1, name: "T-shirt Oversized", price: "79.90", quantityInStock: 45, brand: "Bless" },
        { id: 2, name: "Jeans Wide Leg", price: "159.90", quantityInStock: 30, brand: "Levi's" },
        { id: 3, name: "Hoodie Preto", price: "199.90", quantityInStock: 20, brand: "Adidas" },
        { id: 4, name: "Jaqueta Jeans", price: "249.90", quantityInStock: 15, brand: "Colcci" },
        { id: 5, name: "Vestido Midi", price: "139.90", quantityInStock: 18, brand: "Zara" },
        { id: 6, name: "Camisa Social Slim", price: "119.90", quantityInStock: 22, brand: "Calvin Klein" },
        { id: 7, name: "Tênis Casual Branco", price: "229.90", quantityInStock: 25, brand: "Nike" },
        { id: 8, name: "Shorts Cargo", price: "99.90", quantityInStock: 28, brand: "Hering" },
        { id: 9, name: "Moletom Cinza", price: "189.90", quantityInStock: 12, brand: "Puma" },
        { id: 10, name: "Saia Plissada", price: "109.90", quantityInStock: 16, brand: "Forever 21" }
      ]
    }
  },
  computed: {
    totalInStock() {
      return this.clothing.reduce((sum, clothes) => {
        return sum + Number(clothes.quantityInStock)
      }, 0)
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 100vh;
}

.title {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  gap: 1rem;

  img {
    width: 5rem;
  }
}

.clothingRegister {
  display: flex;
  flex-flow: column nowrap;
  width: 60%;

  .subtitle {
    display: flex;
    margin: 0 2rem 1rem 2rem;

    p {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }

  span {
    color: #722F37;
    font-weight: 700;
  }

  button {
    background: #010101;
    border-radius: 100%;
    padding: .2rem;
    margin: .2rem .6rem;
    height: 1.8rem;
    width: 1.8rem;
  }

  button:disabled {
    background: #131313;
  }

  input {
    width: 3rem;
    color: #f2f2f2;
    text-align: center;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>