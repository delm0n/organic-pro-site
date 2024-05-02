import { ref } from "vue";

export function useWindow(number) {
  const windowMatch = ref(matchMedia(`(max-width: ${number}px)`).matches);
  const match = matchMedia(`(max-width: ${number}px)`);

  match.addEventListener("change", function () {
    windowMatch.value = match.matches;
  });

  return {
    windowMatch,
  };
}
