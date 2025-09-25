<template>
  <div>
    <v-btn color="#41B883" dark @click="openDialog" class="formBtn">
      Add New Clothing
    </v-btn>

    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title class="text-h5">
          Add New Clothing Item
        </v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="newClothing.name" label="Name" :rules="nameRules" required></v-text-field>

            <v-text-field v-model="newClothing.brand" label="Brand" :rules="brandRules" required></v-text-field>

            <v-text-field v-model="newClothing.price" label="Price" type="number" step="0.01" :rules="priceRules"
              required></v-text-field>

            <v-text-field v-model.number="newClothing.quantityInStock" label="Quantity in Stock" type="number"
              :rules="quantityRules" required></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="cancelDialog">
            Cancel
          </v-btn>
          <v-btn color="primary" text @click="saveClothing" :disabled="!valid">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ClothingForm',
  data() {
    return {
      dialog: false,
      valid: false,
      newClothing: {
        name: '',
        brand: '',
        price: '0.00',
        quantityInStock: 0
      },
      nameRules: [
        v => !!v || 'Name is required'
      ],
      brandRules: [
        v => !!v || 'Brand is required'
      ],
      priceRules: [
        v => !!v || 'Price is required',
        v => v > 0 || 'Price must be greater than 0'
      ],
      quantityRules: [
        v => v >= 0 || 'Quantity must be 0 or greater'
      ]
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
      this.resetForm()
    },
    cancelDialog() {
      this.closeDialog()
    },
    saveClothing() {
      if (this.$refs.form.validate()) {
        const newId = Date.now()

        const clothingItem = {
          id: newId,
          name: this.newClothing.name,
          brand: this.newClothing.brand,
          price: parseFloat(this.newClothing.price).toFixed(2),
          quantityInStock: this.newClothing.quantityInStock
        }

        this.$emit('add-clothing', clothingItem)

        this.closeDialog()
      }
    },
    resetForm() {
      this.newClothing = {
        name: '',
        brand: '',
        price: '',
        quantityInStock: 0
      }
      if (this.$refs.form) {
        this.$refs.form.resetValidation()
      }
    }
  }
}
</script>

<style scoped>
.formBtn {
  margin-right: auto;
}
</style>