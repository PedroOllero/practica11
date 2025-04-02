import { bancos } from "./const";
import { Banco } from "./modal";

const sacarInfo = (iban: string): boolean => {
  const patron = /^[A-Z]{2}\d{2}( |-)?(?<entidadBancaria>\d{4})( |-)?(?<oficina>\d{4})( |-)?(?<digitoControl>\d{2})( |-)?(?<numeroCuenta>\d{10})$/

  const buenformato = patron.exec(iban)

  if (buenformato){
    if (buenformato.groups) {
      const { entidadBancaria, oficina, digitoControl, numeroCuenta } = buenformato.groups;
      console.log("la Entidad:", entidadBancaria)
      console.log("la Oficina:", oficina)
      console.log("la Digito de Control:", digitoControl)
      console.log("Este es el Número de Cuenta:", numeroCuenta)

      const sacarBanco = (bancos: Banco[]) => {
        bancos.filter((banco) => {if(entidadBancaria.includes(banco.id)){
          console.log("Pertenece a este banco:", banco.entidad)
          return banco.entidad
        }else{
          return
        }
        })
      }
      sacarBanco(bancos)
      return true
    }
  }

  return false
}

// let resultado = sacarInfo("ES1720852066623456789011")
