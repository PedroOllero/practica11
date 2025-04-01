const sacarInfo = (iban: string): boolean => {
  const patron = /^[A-Z]{2}\d{2}( |-)?\d{4}( |-)?\d{4}( |-)?\d{2}( |-)?\d{10}$/

  const buenformato: boolean = patron.exec(iban) !== null

  if (buenformato){
    return true
  }

  return false
}

let resultado = sacarInfo("ES21 1465 0100 72 2030876293")
console.log(resultado)