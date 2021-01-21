let handleOutsideClick;

export default {
  mounted(el, binding) {
    handleOutsideClick = (e) => {
      e.stopPropagation();
      const { handler, exclude } = binding.value;
      let clickedOnExcludedEl = false;
      exclude.forEach((excludedEl) => {
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
