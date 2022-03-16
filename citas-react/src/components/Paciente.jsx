const Paciente = ({paciente}) => {

  const {nombre, propietario, email, fecha, sintomas} = paciente

  return(
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700">Nombre: {''}
        <span className="font-normal">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">Propietario: {''}
        <span className="font-normal">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">Email: {''}
        <span className="font-normal">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">Fecha Alta: {''}
        <span className="font-normal">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">Sintomas: {''}
        <span className="font-normal">{sintomas}</span>
      </p>
    </div>
  )
}

export default Paciente