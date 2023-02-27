<template>
  <div>
    <div>
      <PricingPlan />
    </div>
    <div>
      <SubscribeUpdate />
    </div>
  </div>
</template>

<script>
import PricingPlan from "../../landing-page/pricing-plan.vue";
import SubscribeUpdate from "../../landing-page/subscribe-update.vue";
export default {
  components: {
    PricingPlan,
    SubscribeUpdate,
  },
};
</script>
