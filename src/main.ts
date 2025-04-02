import { bancos } from "./const";
import { Banco } from "./modal";

let IBANCorrecto: boolean = false;
let IBANOficina: string = "";
let IBANdigitoControl: string = "";
let IBANnumeroCuenta: string = "";
let IBANBanco: string = "";

const sacarInfo = (iban: string): boolean => {
  const patron =
    /^[A-Z]{2}\d{2}( |-)?(?<entidadBancaria>\d{4})( |-)?(?<oficina>\d{4})( |-)?(?<digitoControl>\d{2})( |-)?(?<numeroCuenta>\d{10})$/;

  const buenformato = patron.exec(iban);

  if (buenformato) {
    IBANCorrecto = true;
    if (buenformato.groups) {
      const { entidadBancaria, oficina, digitoControl, numeroCuenta } =
        buenformato.groups;
      IBANOficina = oficina;
      IBANdigitoControl = digitoControl;
      IBANnumeroCuenta = numeroCuenta;

      const sacarBanco = (bancos: Banco[]) => {
        bancos.filter((banco) => {
          if (entidadBancaria.includes(banco.id)) {
            IBANBanco = banco.entidad;
            imprimirInfo()
          } else {
            return;
          }
        });
      };
      sacarBanco(bancos);
      
      return true;
    }
  }else{
    console.log("Error")
  }

  return false;

};

const imprimirDatos = (encabezado: string, datos: string) => {
  let crearTexto = document.createElement("p");
  crearTexto.textContent = `${encabezado}: ${datos}`;
  return crearTexto;
};

const imprimirParrafo = (texto: string): HTMLParagraphElement => {
  const crearTexto = document.createElement("p");
  crearTexto.textContent = `${texto}`;
  return crearTexto;
}

const imprimirInfo = () => {
  const contenedor = document.getElementById("resultado");
  if (contenedor && contenedor instanceof HTMLDivElement) {
    if (IBANCorrecto) {
      const esCorrecto = imprimirParrafo("Este IBAN es correcto")
      contenedor.appendChild(esCorrecto);
    }else{
      const esIncorrecto = imprimirParrafo("Este IBAN es incorrecto")
      contenedor.appendChild(esIncorrecto);
    }

    const entidadBancaria = imprimirDatos("Banco", IBANBanco);
    contenedor.appendChild(entidadBancaria);

    const sucursal = imprimirDatos("Codigo Sucursal", IBANOficina);
    contenedor.appendChild(sucursal);

    const control = imprimirDatos("Dígito Control", IBANdigitoControl);
    contenedor.appendChild(control);

    const numeroCuenta = imprimirDatos("Número de cuenta", IBANnumeroCuenta);
    contenedor.appendChild(numeroCuenta);
  }
};

const formulario = () => {
  const textInput = document.getElementById("input");
  const boton = document.getElementById("boton");
  const contenedor = document.getElementById("resultado");

  if (
    textInput &&
    textInput instanceof HTMLInputElement &&
    boton &&
    boton instanceof HTMLButtonElement &&
    contenedor &&
    contenedor instanceof HTMLDivElement
  ) {
   boton.addEventListener("click", (event)=> {
    contenedor.innerHTML = ""
    event.preventDefault()
    const resultado = textInput.value
    sacarInfo(resultado)
   })
  }
};


formulario()
