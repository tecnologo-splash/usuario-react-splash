export const isEmptyInputs=(datos)=>{
    for (var key in datos) {
      if (datos[key] === ""){
          return true;
      }
    }
    return false;
  }
