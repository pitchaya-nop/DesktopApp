<template>
  <div>
    RRRRR

    <div v-for="(item, i) in cars" :key="i">{{ item }}</div>
  </div>
</template>

<script>
const Realm = require("realm");

export default {
  name: "Realm",
  data() {
    return {
      totalCar: 0,
      cars: [],
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      const _this = this;
      const CarSchema = {
        name: "Car",
        properties: {
          make: "string",
          model: "string",
          miles: { type: "int", default: 0 },
        },
      };
      const PersonSchema = {
        name: "Person",
        properties: {
          name: "string",
          birthday: "date",
          cars: "Car[]",
          picture: "data?", // optional property
        },
      };

      // const dbpath = path.join(
      //   app.getPath("home"),
      //   "data.realm"
      // );
      //
      //  const config = {
      //
      //  }
      // Realm.clearTestState();
      Realm.open({ schema: [CarSchema, PersonSchema] })
        .then((realm) => {
          // Create Realm objects and write to local storage
          realm.write(() => {
            const myCar = realm.create("Car", {
              make: "Honda",
              model: "Civic",
              miles: 1000,
            });
            myCar.miles += 20; // Update a property value
          });

          // Query Realm for all cars with a high mileage
          const cars = realm.objects("Car").filtered("miles > 1000");

          // Will return a Results object with our 1 car
          // cars.length // => 1
          _this.totalCar = cars.length;
          _this.cars = cars;
          console.log(cars.length);
          // Add another car
          realm.write(() => {
            const myCar = realm.create("Car", {
              make: "Ford",
              model: "Focus",
              miles: 2000,
            });
            console.log(myCar);
          });

          // Query results are updated in realtime
          // cars.length // => 2
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
