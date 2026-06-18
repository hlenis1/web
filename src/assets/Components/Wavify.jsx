import Wave from 'react-wavify'

export default function wavify() {
  return (
    <header className="relative bg-blue-600 text-white">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Desarrollo de Sotfware</h1>
        {/* <ul className="flex gap-6">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Contactos</li>
          <li>Comprar Ahora</li>
        </ul> */}
      </nav>

      {/* Ola animada */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <Wave
          fill="#ffffff"
          paused={false}
          options={{
            height: 20,      // altura de la ola
            amplitude: 30,   // intensidad del movimiento
            speed: 0.15,     // velocidad de animación
            points: 3        // cantidad de curvas
          }}
        />
      </div>
    </header>
  )
}
