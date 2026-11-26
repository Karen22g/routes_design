# Auto-rebuild · evaluación del diseño (26-nov-2026)

Revisión de todos los flujos de Auto-rebuild en la maqueta: barrido automático de los 86 casos del catálogo y pruebas manuales de Create route, My Loads, Refresh ▾, cambio de unidad, Sync, conflicto F9, idempotencia y quitar cargas. Cada hallazgo se revisó uno por uno y queda con su decisión.

**Para ver un caso:** botón «Casos Auto-rebuild» → «Ver todos los casos» → pestaña Matriz → código del caso.

**Lo que ya funciona bien:**
- en uso normal no hay NaN, fechas inválidas ni errores de consola;
- se cumple la regla de huecos en el modal;
- reconstruir dos veces no duplica, y el Undo funciona;
- funcionan el aviso de ciclo cambiado (F9), el Sync (H2), el Origin que sigue a las cargas marcadas, el par «not compatible» y el recap.

## A. Fallos e incoherencias

| # | Hallazgo | Caso | Decisión | Qué se ajusta |
|---|---|---|---|---|
| 1 | El modal dice «cycle up to date / Nothing to add», pero hay cargas canceladas, reasignadas o cambiadas en el TMS, y todas aparecen con check. | E11 | **Ajustar** | Canceladas y reasignadas vienen desmarcadas con «Will be removed». La cambiada viene marcada con «Will update». Encabezado «3 changes», botón «Update route (3)». El usuario puede revertir cualquiera. |
| 2 | El panel derecho del Plan siempre dice «ELD Offline · Assign unit» y «HOS not available», aunque la ruta tenga unidad, driver y HOS. | F6 (cualquiera) | **Ajustar** | El panel lee la misma fuente que el modal. Con unidad y ELD muestra el estado (Online / última señal) y los relojes HOS. Sin unidad mantiene «Assign unit». |
| 3 | En Refresh ▾ → «Cycle loads», el «+ Add» individual permite dejar huecos en el ciclo (se salta la regla K1). | G6 / K1 | **Ajustar** | La sección solo avisa: «n cycle loads missing», con las filas como lectura y un único botón Auto-rebuild que abre el modal con ellas preseleccionadas. |
| 4 | My Loads → elegir una unidad sin ruta crea la ruta vacía antes de confirmar. Si el usuario cancela, la ruta queda huérfana. | J1 / G8 (unidad 2069) | **Ajustar** | El modal abre con la unidad, pero la ruta se crea solo al confirmar. El botón dice «Create route (n) →». |
| 5 | Create route con cargas del ciclo agrega 2 lanes Unbooked, y el DH entre ellos va hacia atrás en el tiempo (Nov 21 12:00 → 08:00). | G1 | **Ajustar** | Se mantienen los Unbooked, pero se encadenan desde la entrega de la última carga real, y ningún lane puede terminar antes de empezar. |
| 6 | En Create route, la Departure date puede contradecir el ciclo: una salida el 11/25 aparece con lanes del 17 al 19, sin aviso. | G1 / D6 | **Ajustar** | Con cargas del ciclo marcadas, la Departure date se ajusta sola al Origin. Si el usuario elige una fecha fuera del ciclo actual, se lee el ciclo de esa fecha; si no tiene cargas, la lista queda vacía y la ruta arranca ese día. |
| 7 | Textos del modal que contradicen lo que muestra. | caso 10 / E11 | **Ajustar (a, c, d)** | a) El subtítulo, el pie y el botón se calculan de la situación real (por ejemplo «2 cycle loads in another route» en vez de «already holds the whole cycle»). c) El pie describe la acción: Adds / Removes / Updates n. d) Una sola fórmula de duración (HOS) para el modal y el Plan. **b) «Resulting cycle» se deja.** |

## B. Diseño y UX

| # | Hallazgo | Caso | Decisión | Qué se ajusta |
|---|---|---|---|---|
| 8 | La interfaz explica el razonamiento del motor (HOS reset, ancla, «first stop the ELD detects», #IDs, «Same engine as Auto-rebuild»). | G1 / F6 / G3 | **Ajustar** | Create route: «Cycle · Nov 16 – Nov 21 · 3 loads» + «Origin: ciudad · fecha». Banner del Plan: «Cycle rebuilt · n loads added · n Unbooked replaced» + Undo. Plan vacío: solo la invitación a Auto-rebuild. Sin tooltip con la explicación. |
| 9 | Controles decorativos en el modal. | todos | **Ajustar (parcial)** | Se quitan el buscador, las pestañas de estado (incluida Offer) y el paginador. **Se dejan** «Full cycle computed →» y las columnas Driver/Truck. |
| 10 | Deadheads dentro de la misma ciudad (Dallas → Dallas 64 mi, Houston → Houston 47 mi) entre cada par de cargas encadenadas. Inflan el DH%, el costo y el profit. | F6 / G1 | **Ajustar** | Hay DH si la dirección de entrega ≠ la dirección del siguiente pickup, con las millas reales entre ambas. Misma dirección → sin DH. Resuelve la duda 2 de `autorebuild_cobertura.md`. |
| 11 | Que falten cargas del ciclo solo se nota por un punto diminuto en la flecha ▾ de Refresh. | G6 | **Ajustar** | Banner en el Plan: «n loads of this truck's cycle are missing · Auto-rebuild», que se puede cerrar. |
| 12 | El toggle «Auto-add from My Loads» en Refresh ▾ se pisa con Auto-rebuild. | G6 | **Dejar** | Sin cambios. |
| 13 | Cambio de unidad: a) la ruta nueva nace vacía y el usuario abre Auto-rebuild a mano; b) el Trailer es obligatorio aquí y opcional en Create route. | I2 | **Dejar** | Sin cambios (a y b). |
| 14 | F9: el ciclo cambia durante la revisión y nada indica qué cambió. | F9 | **Ajustar** | El aviso rojo enumera los cambios (por ejemplo «1 new load: #413000»). Las filas no se marcan. |
| 15 | Create route con una unidad cuyo ciclo ya está en otra ruta: «0 OF 0 SELECTED», un aviso gris sin enlace y Continue habilitado (permite una ruta doble). | G1 (dos veces) | **Ajustar** | Aviso claro: «Unit 5017 already has a route for this cycle · <ruta> · Open route →». Continue solo para un periodo distinto (otra fecha), no para el mismo. |
| 16 | Detalles menores: a) la fecha del nombre de la ruta no cambia tras el rebuild; b) el Sync pide dos pasos; c) «move here» usa `confirm()` nativo; d) las métricas de la cabecera son valores fijos. | varios | **Dejar** | Sin preferencia; se pueden retomar. |

## Baja prioridad

| # | Hallazgo | Caso | Decisión | Qué se ajusta |
|---|---|---|---|---|
| 18a | El chip «Dropoff until» no refleja la continuación al siguiente ciclo. | J8 | **Ajustar** | El chip muestra el fin real cuando el ciclo continúa. |
| 18b | La línea «Now — N done · M upcoming» cuenta las dos cargas de un par «Not compatible». | J4 | **Ajustar** | El par cuenta como 1. |
| 19 | «1 days»; los DH usan Completed/Upcoming junto a los estados del TMS. | varios | **Ajustar** | Singular/plural correcto. Vocabulario de los DH unificado con su contexto (detalle a cerrar al implementar). |
| 20 | Error de consola si se fuerza construir un ciclo vacío (botón deshabilitado). | C11 | **Dejar** | No es visible para el usuario. |

## C. Decisiones de negocio

| # | Pregunta | Decisión |
|---|---|---|
| C1 | ¿Se pueden mover o quitar cargas ya ejecutadas (Delivered / Invoiced / Paid)? (duda 3) | **Mover sí, quitar no.** Se pueden mover entre rutas vecinas (en bloque, con confirmación), pero nunca quitar del plan. En E5/E6 hay que deshabilitar «remove» para las ejecutadas. |
| C2 | Una carga reasignada en el TMS a otra unidad, ¿a dónde va? (duda 16) | **Sigue a su nueva unidad.** Sale de esta ruta. Si la nueva unidad tiene una ruta que cubre ese periodo, aparece en su Auto-rebuild como faltante; si no, queda en My Loads con esa unidad. No queda «libre». |
| C3 | Al cambiar de unidad, ¿qué pasa con las Booked futuras de la ruta anterior? (duda 11) | **El usuario elige en el diálogo.** El diálogo de cambio de unidad lista las Booked futuras con el check «Move to the new route», marcado por defecto. Las desmarcadas se quedan en la ruta vieja. |

## D. Huecos frente a Notion

| # | Hallazgo | Decisión |
|---|---|---|
| D1 | El CA-01 de «Otras rutas» (cargas de My Loads bloqueadas cuando están en otra ruta) no está en la maqueta. | **Agregar.** En My Loads, las cargas en ruta muestran un candado y «In route <ruta>», y no se pueden agregar a otra. |
| D2 | Los mapas del Plan, On Road y Report no dibujan el ciclo ni el Origin. | **Dejar fuera.** Es un límite conocido de la maqueta. |

## Resumen

**Estado:** los ajustes de la maqueta están implementados (26-nov) y verificados con el barrido de los 86 casos (sin errores nuevos; solo el de C11, que se deja).

- **Ajustar en la maqueta (16):** 1, 2, 3, 4, 5, 6, 7 (a, c, d), 8, 9 (parcial), 10, 11, 14, 15, 18a, 18b, 19, más C1, C2, C3 y D1.
- **Dejar (6):** 12, 13, 16, 20, D2 y 7b.
- **Probable impacto en Notion** (actualizar solo cuando se pida):
  - **Modal:** 1, 7, 9 y 14.
  - **Crear ruta:** 5, 6, 8 y 15.
  - **Otras rutas:** C1 y D1.
  - **TMS / Sync:** 1 y C2.
  - **Cambio de unidad:** C3.
  - **Backend:** 10 (regla de DH por dirección), C1 y C2.
