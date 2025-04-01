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

interface Banco {
  id: string,
  entidad: string,
}

const bancos: Banco[] = [
  { id: "2080", entidad: "Abanca Corporación Bancaria" },
  { id: "0061", entidad: "Banca March" },
  { id: "0188", entidad: "Banco Alcalá" },
  { id: "0182", entidad: "Banco Bilbao Vizcaya Argentaria" },
  { id: "0130", entidad: "Banco Caixa Geral" },
  { id: "0234", entidad: "Banco Caminos" },
  { id: "2105", entidad: "Banco Castilla-La Mancha" },
  { id: "0240", entidad: "Banco de Crédito Social Cooperativo" },
  { id: "0081", entidad: "Banco de Sabadell" },
  { id: "0487", entidad: "Banco Mare Nostrum" },
  { id: "0186", entidad: "Banco Mediolanum" },
  { id: "0238", entidad: "Banco Pastor" },
  { id: "0075", entidad: "Banco Popular Español" },
  { id: "0049", entidad: "Banco Santander" },
  { id: "3873", entidad: "Banco Santander Totta" },
  { id: "2038", entidad: "Bankia" },
  { id: "0128", entidad: "Bankinter" },
  { id: "0138", entidad: "Bankoa" },
  { id: "0152", entidad: "Barclays Bank PLC" },
  { id: "3842", entidad: "BNP Paribas Paris" },
  { id: "3025", entidad: "Caixa de Credit del Enginyers" },
  { id: "2100", entidad: "Caixabank" },
  { id: "2045", entidad: "Caja de Ahorros y Monte de Piedad de Ontinyent" },
  { id: "3035", entidad: "Caja Laboral Popular CC" },
  { id: "3081", entidad: "Caja Rural Castilla-La Mancha" },
  { id: "3058", entidad: "Cajamar Caja Rural" },
  { id: "2000", entidad: "Cecabank" },
  { id: "1474", entidad: "Citibank Europe PLC" },
  { id: "3821", entidad: "Commerzbank AG" },
  { id: "3877", entidad: "Danske Bank A/S" },
  { id: "0019", entidad: "Deutsche Bank SAE" },
  { id: "0239", entidad: "EVO Banco" },
  { id: "2085", entidad: "Ibercaja Banco" },
  { id: "1465", entidad: "ING Bank NV" },
  { id: "2095", entidad: "Kutxabank" },
  { id: "2048", entidad: "Liberbank" },
  { id: "0131", entidad: "Novo Banco" },
  { id: "0073", entidad: "Open Bank" },
  { id: "0108", entidad: "Société Générale" },
  { id: "2103", entidad: "Unicaja Banco" }
];

let resultado = sacarInfo("ES1720852066623456789011")
