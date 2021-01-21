<template>
  <span :class="classes">{{ status }}</span>
</template>

<script>
import { computed } from "vue";
import { statusName } from "@utils/helpers";

export default {
  props: {
    type: {
      type: String,
      default: "pending",
      validator(value) {
        return (
          ["active", "done", "cancelled", "overdue", "pending"].indexOf(
            value
          ) !== -1
        );
      },
    },
  },
  setup(props) {
    const status = computed(() => statusName(props.type));

    return {
      classes: computed(() => `badge badge--${props.type}`),
      status,
    };
  },
};
</script>
