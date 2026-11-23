
import { useState } from "react";
import Badge from "./components/Badge";

type Pagina = "Inicio" | "Usuarios" | "Roles" | "Reportes";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  boton: string;
  tipo: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Laptop",
    descripcion: "Ryzen 7 - 32GB RAM",
    imagen:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    boton: "Comprar",
    tipo: "azul",
  },
  {
    id: 2,
    nombre: "Celular",
    descripcion: "256GB - Cámara 108 Mp",
    imagen:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    boton: "Ver más",
    tipo: "morado",
  },
  {
    id: 3,
    nombre: "Audífonos",
    descripcion: "Con reducción de ruido",
    imagen:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    boton: "Comprar",
    tipo: "rojo",
  },
];

function App() {
  const [pagina, setPagina] = useState<Pagina>("Inicio");
  const [mensaje, setMensaje] = useState("");

  const navegar = (destino: Pagina) => {
    setPagina(destino);
    setMensaje("");
  };

  const ejecutarAccion = (accion: string) => {
    setMensaje(`Acción seleccionada: ${accion}`);
  };

  const menus: Pagina[] = [
    "Inicio",
    "Usuarios",
    "Roles",
    "Reportes",
  ];

  return (
    <div className="app">
      {/* ENCABEZADO */}
      <header className="navbar">
        <h1>Panel Administrativo</h1>
      </header>

      <div className="layout">
        {/* MENU LATERAL */}
        <aside className="sidebar">
          <nav>
            {menus.map((menu) => (
              <button
                key={menu}
                className={
                  pagina === menu
                    ? "menu-link activo"
                    : "menu-link"
                }
                onClick={() => navegar(menu)}
              >
                {menu}
              </button>
            ))}
          </nav>
        </aside>

        {/* CONTENIDO */}
        <main className="contenido">
          {pagina === "Inicio" ? (
            <>
              <h2>Dashboard</h2>

              <div className="bienvenida">
                <span>Bienvenido al sistema.</span>

                <div className="badges">
                  <Badge variant="beginner">
                    Beginner
                  </Badge>

                  <Badge variant="intermediate">
                    Intermediate
                  </Badge>

                  <Badge variant="advanced">
                    Advanced
                  </Badge>
                </div>
              </div>

              {/* TARJETAS */}
              <div className="productos-grid">
                {productos.map((producto) => (
                  <article
                    key={producto.id}
                    className={`producto-card ${producto.tipo}`}
                  >
                    <div className="imagen-contenedor">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                      />
                    </div>

                    <p className="descripcion">
                      {producto.descripcion}
                    </p>

                    <button
                      className={`btn btn-${producto.tipo}`}
                      onClick={() =>
                        ejecutarAccion(
                          `${producto.boton} - ${producto.nombre}`
                        )
                      }
                    >
                      {producto.boton}
                    </button>
                  </article>
                ))}
              </div>

              {/* BOTONES */}
              <div className="acciones-grid">
                <button
                  className="btn-accion guardar"
                  onClick={() => ejecutarAccion("Guardar")}
                >
                  Guardar
                </button>

                <button
                  className="btn-accion cancelar"
                  onClick={() => ejecutarAccion("Cancelar")}
                >
                  Cancelar
                </button>

                <button
                  className="btn-accion eliminar"
                  onClick={() => ejecutarAccion("Eliminar")}
                >
                  Eliminar
                </button>

                <button
                  className="btn-accion deshabilitado"
                  disabled
                >
                  Deshabilitado
                </button>

                <button
                  className="btn-accion guardar"
                  onClick={() => ejecutarAccion("Aceptar")}
                >
                  Aceptar
                </button>

                <button
                  className="btn-accion cancelar"
                  onClick={() => ejecutarAccion("Volver")}
                >
                  Volver
                </button>

                <button
                  className="btn-accion guardar"
                  onClick={() => ejecutarAccion("Actualizar")}
                >
                  Actualizar
                </button>

                <button
                  className="btn-accion eliminar"
                  onClick={() => ejecutarAccion("Borrar")}
                >
                  Borrar
                </button>
              </div>

              {mensaje && (
                <div className="mensaje" role="status">
                  {mensaje}
                </div>
              )}
            </>
          ) : (
            <section className="pagina-secundaria">
              <h2>{pagina}</h2>
              <p>
                Bienvenido a la sección de {pagina.toLowerCase()}.
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
