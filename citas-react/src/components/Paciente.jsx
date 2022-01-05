const Paciente = () => {
    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl '>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>Hook</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>Leonardo</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>correo@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alata: {''}
                <span className='font-normal normal-case'>10 de diciembre 2002</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, maiores pariatur dolore doloribus quae non omnis iusto nam a modi sit earum quo perspiciatis in magnam, aperiam doloremque laboriosam incidunt.</span>
            </p>
        </div>
    )
}
export default Paciente
