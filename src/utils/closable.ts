let handleOutsideClick: any;

export default {
  mounted(el: any, binding: any) {
    handleOutsideClick = (e: any) => {
      e.stopPropagation();
      const { handler, exclude } = binding.value;
      let clickedOnExcludedEl = false;
      exclude.forEach((excludedEl: any) => {
        if (!clickedOnExcludedEl) {
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        handler();
      }
    };
    document.addEventListener("click", handleOutsideClick);
  },

  unmounted() {
    document.removeEventListener("click", handleOutsideClick);
  },
};
