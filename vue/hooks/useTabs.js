export function useTabs(data) {
  
  const changeTabs = (index)=> {
    for (let i = 0; i < data.value.length; i++) {
      data.value[i].active = false;
      if (i === index) {
        data.value[i].active = true;
      }
    }
  };

  return {
    changeTabs,
  };
}
