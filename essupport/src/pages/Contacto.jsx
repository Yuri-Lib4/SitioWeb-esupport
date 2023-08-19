import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'; // Importamos el componente Skeleton
import './Contacto.css';

export function Contacto() {
  const [loading, setLoading] = useState(true);
  const [perifericos, setPerifericos] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/perifericos/')
      .then(response => {
        setPerifericos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []);

  const handleOptionClick = (periferico) => {
    setSelectedOption(periferico);
  };

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="header-esupport">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Agrega el icono solo en modo móvil */}
            <button className="navbar-toggler" type="button" onClick={toggleMobileMenu}>
              <span className="navbar-toggler-icon">
                {/* Agrega el icono SVG aquí */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                  <path d="M 0 9 L 0 11 L 30 11 L 30 9 Z M 0 15 L 0 17 L 30 17 L 30 15 Z M 0 21 L 0 23 L 30 23 L 30 21 Z" />
                  <path fill="#00D8FF" d="..."></path>
                </svg>
              </span>
            </button>

            <ul className={`menu-links ${isMobileMenuOpen ? 'open' : ''}`}>
              {/* Agrega los enlaces aquí */}
              <li className="nav-item">
                <Link to="/home" className="nav-link ">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categorias" className="nav-link">
                  Categorías
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas" className="nav-link">
                  Ofertas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/desktops" className="nav-link">
                  Desktops
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/servicios" className="nav-link">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/proveedores" className="nav-link">
                  Proveedores
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/soporte" className="nav-link">
                  Soporte
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link home-link-header">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="contacto-container">
        <div className="header-contacto-container">
          <Link className="preguntas-contacto" to="/contacto">
            <p className="header-contacto-container-links">PREGUNTAS FRECUENTES</p>
          </Link>

          <Link to="/drivers">
            <p className="header-contacto-container-links">DRIVERS</p>
          </Link>

          <Link to="/garantia-contacto">
            <p className="header-contacto-container-links">GARANTIA Y CONTACTO</p>
          </Link>

          <Link to="/tutoriales-consejos">
            <p className="header-contacto-container-links">TUTORIALES Y CONSEJOS</p>
          </Link>
        </div>
        <div className="contacto-separator"></div> {/* Barra vertical separadora */}


        <div className="spinner-container">
          <p> .Categorias</p>
          {loading ? (
            <div className="spinner">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} height={30} style={{ marginBottom: '10px' }} />
              ))}
            </div>
          ) : (
            <div className="perifericos-wrapper">
              {selectedOption ? (
                <p className="periferico" onClick={handleShowMoreClick}>
                  {selectedOption.nombre} {showMore ? '▲' : '▼'}
                </p>
              ) : (
                loading ? (
                  <p>Cargando...</p>
                ) : (
                  perifericos.length > 0 && (
                    <p className="periferico" onClick={handleShowMoreClick}>
                      {perifericos[0].nombre} {showMore ? '▲' : '▼'}
                    </p>
                  )
                )
              )}

              {showMore && (
                <div className="perifericos-list">
                  {perifericos.map(periferico => (
                    <p
                      key={periferico.id}
                      className={`periferico ${selectedOption && selectedOption.id === periferico.id ? 'selected' : ''}`}
                      onClick={() => handleOptionClick(periferico)}
                    >
                      {periferico.nombre}
                    </p>
                  ))}
                </div>
              )}
            </div>

          )}
        </div>
        <div className="contacto-separator"></div> {/* Barra vertical separadora */}
        <div className="preguntas-container">

          <div >
            <div className="contacto-preguntas-container">
              <h2>PREGUNTAS Y RESPUESTAS</h2>

            </div>
            <div className="contacto-separator"></div>

            <div className="preguntas-contenido">
              <h3 className="preguntas-h3" onClick={toggleExpand}>
                <span>¿CÓMO PUEDO HACER PARA ACTIVAR EL SISTEMA DE VIBRACIÓN DE MIS AURICULARES?</span>
                <span className="icon-container">
                  {expanded ? <RiSubtractFill className="icon-despliegue" /> : <RiAddFill className="icon-despliegue" />}
                </span>
              </h3>


              {expanded && (
                <div className="preguntas-parrafos">

                  <p>
                    Nuestros modelos de auriculares con vibración utilizan los controladores
                    de vibración como un complemento de bajos en la reproducción de música, películas y juegos.
                    Si no puedes sentir la vibración, te recomendamos realizar la prueba siguiente.
                    <br />
                    <br />
                    El sistema de vibración funciona en conjunto con el volumen; por lo tanto,
                    cuanto mayor sea el volumen, mayor será la intensidad de la vibración. Prueba aumentar ambos controladores (de volumen y de vibración) en el auricular, configura en tu sistema operativo el volumen en máximo y escucha alguna canción con bajos.
                    Si en esas condiciones no sientes la vibración, sigue la guía de abajo para intentar resolver el problema.
                  </p>

                  <p>Resolución</p>
                  <ul>
                    <li>
                      Comprueba que el USB del auricular esté correctamente conectado.
                    </li>
                    <li>
                      En los modelos Lagopasmutus y Siren P2, comprueba que la conexión USB de alimentación del sistema de vibración e iluminación esté conectada.
                    </li>
                    <li>
                      Conecta el auricular / conector de alimentación USB a otro puerto USB (preferentemente, USB 2.0).
                    </li>
                    <li>
                      En último caso, prueba el auricular en otro equipo y verifica si el problema persiste.
                    </li>
                  </ul>
                </div>




              )}

            </div>

            <div className="contacto-separator"></div>

            <div className="preguntas-contenido">
              <h3 className="preguntas-h3" onClick={toggleExpand}>
                <span>¿CÓMO ES EL SISTEMA DE AUDIO 7.1 DE LOS AURICULARES?</span>
                <span className="icon-container">
                  {expanded ? <RiSubtractFill className="icon-despliegue" /> : <RiAddFill className="icon-despliegue" />}
                </span>
              </h3>


              {expanded && (


                <div className="preguntas-parrafos">
                  <p>
                    Los modelos Talos y Siren 2.0 cuentan con emulación de audio 7.1 a través de hardware para crear una mejor ambientación en juegos y películas.
                    Aquí van algunas de las dudas más comunes en cuanto al Sistema.
                    <br />
                    <br />
                    ¿Sistema 7.1 emulado o real? Un sistema 7.1 real requiere de múltiples micro altavoces dentro de cada copa de los auriculares.
                    Esto no sólo incrementa exponencialmente los costos de producción y —por extensión— el precio final, sino que además resulta insatisfactorio desde el punto de vista de los resultados: la distancia de los altavoces es demasiado corta para crear un ambiente 7.1 auténtico.
                    Por esas razones, no ofrecemos sistemas de este tipo.
                    <br />
                    <br />
                    En el caso de la emulación virtual, en cambio, las tecnologías de audio se utilizan para emular una experiencia de sonido cercana a lo que sería en una sala con los altavoces de sonido envolvente. Tanto en el modelo Talos como en el modelo Siren 2.0,
                    la emulación del audio 7.1 se realiza directamente por la tarjeta de audio incorporada en el cable del auricular.
                    <br />
                    <br />
                    ¿Necesito drivers especiales para escuchar 7.1? Ni el Talos ni el Siren 2.0 necesitan instalar controladores para emular el modo 7.1. Lo que debe notarse es en cuanto al modo de audio elegido dentro de los juegos:
                    si el juego no tiene disponible el modo Surround 7.1, lo más conveniente es elegir el modo estéreo estándar.
                  </p>
                </div>

              )}

            </div>
            <div className="contacto-separator"></div>

            <div className="preguntas-contenido">
              <h3 className="preguntas-h3" onClick={toggleExpand}>
                <span>¿QUÉ PUEDO HACER SI TENGO INCONVENIENTES CON EL MICRÓFONO DE MIS AURICULARES?</span>
                <span className="icon-container">
                  {expanded ? <RiSubtractFill className="icon-despliegue" /> : <RiAddFill className="icon-despliegue" />}
                </span>
              </h3>

              {expanded && (

                <div className="preguntas-parrafos">
                  <p>
                    Si el micrófono no funciona correctamente, te sugerimos seguir las siguiente serie de pruebas.
                    <br />
                    <br />
                    La primera prueba es comprobar que el interruptor del micrófono está encendido.
                    Éste se puede encontrar, en las versiones USB de los auriculares, en el controlador in-line (en el cable).
                    <br />
                    <br />
                    Otra prueba es comprobar las conexiones físicas del auricular con el ordenador. En los modelos USB, asegúrate de que el auricular esté conectado a un puerto USB 2.0 para evitar algunos problemas conocidos de funcionamiento de dispositivos USB 2.0 en puertos 3.0. Otra sugerencia es utilizar las conexiones traseras del ordenador, ya que las conexiones frontales dependen de extensores y otros aspectos que también pueden entorpecer la calidad de la conexión. Si el auricular utiliza conexiones jack 3.5, realice la conexión normal:
                    micrófono en el enchufe rosado y el auricular en el enchufe verde (ambos en la parte posterior de la placa madre).
                    <br />
                    <br />
                    Si el error persiste tras haber realizado las acciones anteriores, prueba el auricular en otro ordenador para descartar la posibilidad de que algún controlador o alguna configuración esté causando alguna interferencia en el funcionamiento. Si al probarlo en otra máquina el auricular funciona,
                    te damos algunos consejos para solucionar el inconveniente en tu PC.
                    <br />
                    <br />
                    Comprueba si hay algún programa de control de audio (mezcladores de volumen, emuladores de función envolvente, mejoras de micrófono, etc.) y desinstálalo. Reinicia el equipo con el auricular desconectado y vuelve a conectarlo para que Windows
                    instale el controlador correcto para el dispositivo.

                  </p>
                  <p>
                    Para la configuración del micrófono:
                  </p>
                  <ul>
                    <li>
                      Accede a la configuración de audio y micrófono abriendo el menú “Ejecutar” de Windows (tecla Windows + R) y escribiendo “mmsys.cpl”.
                    </li>
                    <li>
                      En la pestaña “Grabación”, haz clic derecho en el área en blanco y selecciona la opción “Mostrar dispositivos deshabilitados”.
                    </li>
                    <li>
                      Haz clic derecho en una de las opciones del dispositivo de grabación y selecciona “Propiedades”.
                    </li>
                    <li>
                      En la barra de selección, desmarca la opción “Escuchar el dispositivo” y marca la opción “Continuar funcionando en modo de batería”.
                    </li>
                    <li>
                      Regula el volumen en un 100% y (si la hay) baja la opción “Mic Boost” (o similar) a 0 dB.
                    </li>
                    <li>
                      Finalmente, dale OK y reinicia el equipo.
                    </li>
                  </ul>
                </div>



              )}

            </div>

            <div className="contacto-separator"></div>

            <div className="preguntas-contenido">
              <h3 className="preguntas-h3" onClick={toggleExpand}>
                <span>¿QUÉ PUEDO HACER SI TENGO INCONVENIENTES CON EL AUDIO DE MIS AURICULARES?</span>
                <span className="icon-container">
                  {expanded ? <RiSubtractFill className="icon-despliegue" /> : <RiAddFill className="icon-despliegue" />}
                </span>
              </h3>


              {expanded && (

                <div className="preguntas-parrafos">

                  <p>
                    Si los auriculares no funcionan correctamente, te sugerimos seguir las siguiente serie de pruebas.
                    <br />
                    <br />
                    La primera prueba es comprobar los controladores de audio / vibración del auricular, que se encuentran, en las versiones USB de los auriculares, en el controlador in-line (en el cable) y, en las versiones con conexión jack 3.5,
                    normalmente en el casco izquierdo. Verificar que el volumen no esté al mínimo.
                    <br />
                    <br />
                    Otra prueba es comprobar las conexiones físicas de los auriculares con el ordenador. En los modelos USB, asegúrate de que el auricular esté conectado a un puerto USB 2.0 para evitar algunos problemas conocidos de funcionamiento de dispositivos USB 2.0 en puertos 3.0. Otra sugerencia es utilizar las conexiones traseras del ordenador, ya que las conexiones frontales dependen de extensores y otros aspectos que también pueden entorpecer la calidad de la conexión. Si el auricular utiliza conexiones jack 3.5, realiza la conexión normal:
                    micrófono en la entrada rosada y el auricular en la entrada verde (ambos, en la parte posterior de la placa madre).
                    <br />
                    <br />
                    Si el error persiste tras haber realizado las acciones anteriores, prueba los auriculares en otro ordenador para descartar la posibilidad de que algún controlador o alguna configuración esté causando alguna interferencia en el funcionamiento.
                    Si al probarlos en otra máquina los auriculares funcionan, te damos algunos consejos para solucionar el inconveniente en tu PC.
                  </p>

                </div>


              )}

            </div>
            <div className="contacto-separator"></div>

            <div className="preguntas-contenido">
              <h3 className="preguntas-h3" onClick={toggleExpand}>
                <span>¿QUÉ PUEDO HACER SI TENGO PROBLEMAS DE RUIDO EN EL MICRÓFONO O EN LOS ALTAVOCES DE MIS AURICULARES?</span>
                <span className="icon-container">
                  {expanded ? <RiSubtractFill className="icon-despliegue" /> : <RiAddFill className="icon-despliegue" />}
                </span>
              </h3>

              {expanded && (
                <div className="preguntas-parrafos">
                  <p>
                    “Me escuchan con ruido”. Hay algunas configuraciones para mejorar la captura del micrófono de tus auriculares Redragon.
                    Hemos reunido algunos consejos generales para optimizar su funcionalidad.
                    <br />
                    <br />

                  </p>
                  <ul>
                    <li>
                      Accede a la configuración de audio y micrófono abriendo el menú “Ejecutar” de Windows (tecla de Windows + R) y escribiendo “mmsys.cpl”.
                    </li>
                    <li>
                      Ve a la pestaña “Grabación”, haz clic derecho en la opción de dispositivo y selecciona “Propiedades”.
                    </li>
                    <li>
                      Sube el nivel de Volumen a 100% y (si la hay) baja la opción “Mic Boost” (o similar) a 0 dB.
                    </li>
                    <li>
                      Desactiva la opción AGC (Auto Gain Control) y/o la opción “Amplificación de Ganancia”.
                    </li>
                    <li>
                      Dependiendo de tu tarjeta de audio, puede ser que las configuraciones aparezcan de diferentes formas o no están disponibles.
                    </li>
                    <li>
                      Finalmente, dale OK y reinicia el equipo.
                    </li>
                  </ul>
                  <p>
                    “Escucho con ruido”. Si tus auriculares están presentando una cantidad inusual de ruido, realiza la siguiente prueba para determinar si el problema está relacionado con la energización de las piezas de tu ordenador.
                  </p>
                  <ul>
                    <li>
                      Abre el menú Inicio y busca “Grabadora” seleccionando la herramienta de grabación de audio de Windows.
                    </li>
                    <li>
                      Puedes utilizar también otras herramientas de grabación a tu elección (Audacity, por ejemplo).
                    </li>
                    <li>
                      Graba el audio de tu voz por unos instantes y guarda el archivo.
                    </li>
                    <li>
                      Graba un nuevo audio con la mano sobre el gabinete y guarde el archivo con otro nombre.
                    </li>
                    <li>
                      Verifica si hay sibilancias en las grabaciones: si en la primera grabación escuchas sibilancias o silbidos y en la segunda grabación no, el equipo está energizado.
                    </li>
                    <li>
                      Para la resolución del problema, será necesaria la conexión a tierra del tomacorriente donde el equipo está conectado. Esto es altamente recomendado porque la energización afecta y
                      daña otras partes del equipo con el tiempo.
                    </li>
                  </ul>
                </div>
              )}

            </div>
            <div className="contacto-separator"></div>

            <div className="preguntas-contenido">
              <h3 className="preguntas-h3" onClick={toggleExpand}>
                <span>¿DÓNDE PUEDO CONFIGURAR EL AUDIO DE LOS AURICULARES EN PS4?</span>
                <span className="icon-container">
                  {expanded ? <RiSubtractFill className="icon-despliegue" /> : <RiAddFill className="icon-despliegue" />}
                </span>
              </h3>

              {expanded && (
                <div className="preguntas-parrafos">
                  <p>
                    Si bien los auriculares están pensados para el uso en PC, la consola reconoce los auriculares USB. Para configurarlos, haz lo siguiente.
                    <br />
                    <br />

                  </p>

                  <ol>
                    <li>
                      Ve al menú principal (Home).
                    </li>
                    <li>
                      Lleva el mando hacia arriba.
                    </li>
                    <li>
                      Selecciona “Configuración” > “Dispositivos” > “Dispositivos” > “Dispositivo de Audio” > “Ajustar nivel de micrófono”.
                    </li>
                  </ol>
                </div>
              )}

            </div>
            <div className="contacto-separator"></div>

            <div className="preguntas-contenido">
              <h3 className="preguntas-h3" onClick={toggleExpand}>
                <span>¿CÓMO PUEDO CONFIGURAR EL MICRÓFONO DE MIS ARES EN CS:GO / STEAM?</span>
                <span className="icon-container">
                  {expanded ? <RiSubtractFill className="icon-despliegue" /> : <RiAddFill className="icon-despliegue" />}
                </span>
              </h3>

              {expanded && (
                <div className="preguntas-parrafos">
                  <p>
                    Si experimentas inconvenientes con el micrófono de tus Ares en CS:GO, te recomendamos seguir las siguientes indicaciones.
                    <br />
                    <br />

                  </p>
                  <ol>
                    <li>
                      Deshabilita todos los dispositivos de grabación que no estén en uso en el mezclador de volumen del sistema. Para hacerlo:
                      <ol>
                        <li>
                          Haz clic derecho en el ícono de volumen y selecciona “Abrir mezclador de volumen”.
                        </li>
                        <li>
                          Haz clic en el ícono de “Sonidos de sistema“.
                        </li>
                        <li>
                          Selecciona la pestaña “Grabación“.
                        </li>
                        <li>
                          Haz clic derecho sobre todos los dispositivos no estén en uso y selecciona “Deshabilitar“.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Reduce la ganancia de transmisión desde la configuración del juego.
                    </li>
                    <li>
                      Desactiva el “Mic Boost” en caso de estar activado.
                    </li>

                  </ol>
                  <p>Para configurar el micrófono en Steam (no todos los juegos poseen esta configuración):

                  </p>
                  <ol>
                    <li>
                      Dentro del juego, presiona Shift + Tab, menú Steam en partida.
                    </li>
                    <li>
                      Selecciona “Parámetros” en la parte inferior de la pantalla.
                    </li>
                    <li>
                      Ingresa en “Voz en la partida”.
                    </li>
                    <li>
                      Reduce la ganancia menor al 100%.
                    </li>
                  </ol>
                </div>


              )}

            </div>

            <div className="contacto-separator"></div>

          </div>

        </div>


      </div>
    </div>
  );
}

export default Contacto;