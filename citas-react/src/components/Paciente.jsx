const Paciente = () => {
  return(
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700">Nombre: {''}
        <span className="font-normal">Franky</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">Propietario: {''}
        <span className="font-normal">Tomi</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">Email: {''}
        <span className="font-normal">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">Fecha Alta: {''}
        <span className="font-normal">10 de Diciembre de 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">Sintomas: {''}
        <span className="font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, tempora aperiam reiciendis magni at, nostrum repudiandae porro ab aliquid, quam explicabo blanditiis praesentium voluptates odio. Voluptates eos enim ipsum similique.</span>
      </p>
    </div>
  )
}

export default Paciente