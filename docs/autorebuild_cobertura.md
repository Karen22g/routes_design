# Auto-rebuild · maqueta completa de Rutas — inventario, cobertura y dudas

Entrega sobre `autorebuild_entregable_maqueta.md` (23-nov-2026). La maqueta es la app de este repo (`npm run dev` → http://localhost:5173). Todo Auto-rebuild vive en `src/engine.js`.

**Cómo recorrerla:** el botón flotante **«Casos Auto-rebuild»** (abajo a la derecha) abre el selector con todos los casos (§3 + casos 1–10 del prototipo); «Ir →» abre la pantalla con los datos del escenario. Las rutas de prueba están en la pestaña **«Auto-rebuild cases»** de Routes. Cada una muestra en el Plan una ficha con situación, prueba y resultado esperado. **Reiniciar datos** recarga la maqueta (los cambios no se guardan).

«Ahora» de la maqueta: **jue 19-nov-2026 10:00 CST**. Los textos, IDs y montos son ilustrativos.

## 1. Inventario

### Prototipo `2026-11-23_autorebuild_prototipo.html`
| Caso | Pantalla |
|---|---|
| 1 | Crear ruta · Assign unit · unidad sin cargas de ciclo → Easy routes |
| 2 | Crear ruta · Assign unit · unidad con cargas de ciclo → ruta con cargas |
| 3 | (eliminado el 23-nov: Any unit) |
| 4 | Easy routes con Any unit → Auto-rebuild deshabilitado |
| 5 | Easy routes con equipo asignado → opción Auto-rebuild |
| 6 | Plan de ruta vacía → botón Auto-rebuild |
| 7 | Ruta con cargas → completar hacia atrás |
| 8 | Cargas con huecos → rellenar el ciclo |
| 9 | Carga del próximo ciclo |
| 10 | Carga en otra ruta (dedup) |

### Maqueta de Rutas (después de esta entrega)
| Pantalla / componente | Qué hace con Auto-rebuild |
|---|---|
| **Motor único** `_arEngine` (truck-cycle/) | Llave = número de unidad normalizado (agrupa cabinas). Horas en UTC y cada parada en su hora local con huso y fuente (real / planned / estimated). Bordes por hueco ≥ 34 h o reset de HOS (mismo driver), discrepancia, reset dentro de una carga y ventana de 10 días. Ancla por contexto, clasificación, vecinas, cambios del TMS, Origin y Unbooked cubiertas. |
| **Crear ruta** (Any unit / Assign unit) | Bloque «Loads in this truck cycle»: resumen del ciclo (bordes, ancla, HOS), tarjetas con horas, huso y fuente, **View full cycle** (mismo modal, la selección vuelve al bloque), Origin = inicio del ciclo de la ruta (sigue al ciclo, no a la selección), cambiar la fecha recalcula el ciclo sin pisar lo editado, y aviso de hueco. |
| **Easy routes** (lane map post-create) | Barra de Auto-rebuild: con unidad abre el modal sobre el Plan vacío (cancelar deja el Plan); sin unidad, bloqueada con «Assign unit». |
| **Plan** | Pill en la toolbar y estado vacío. Lanes con hora local, huso y fuente, candado en tramos ejecutados, DH con millas reales entre ciudades, línea «Cycle continues from here» sobre la carga en movimiento, banner de resultado, aviso «HOS differ» con «Reopen Auto-rebuild», aviso en la ruta vecina, «Complete with Easy routes» y «Add» → My Loads filtrado. |
| **Refresh ▾ → Cycle loads** | Misma respuesta del motor: lista las cargas del ciclo que faltan y «+ Add» inserta una sola sin reorganizar. |
| **Modal Auto-rebuild** (único) | Estados ELD (Checking / sin HOS / HOS disponible), frescura + Sync, contexto (unidad/cabinas, driver informativo, ancla, ventana, Origin, HOS), avisos, filtros ampliables, marcadores de inicio y fin, pausas, secciones ciclo anterior / próximo / fuera del ciclo / otras rutas / ya no es de la unidad, acciones por fila (quitar, mover, actualizar desde TMS), métricas «Will be added» + «Resulting cycle» + HOS, y CTA según el estado. |
| **Building route…** | Asíncrono, error con Retry (idempotente) y concurrencia («the cycle changed», sin construir, modal recargado). Toast con Undo. |
| **Assign driver & equipment** | Unidad obligatoria, conflicto por solape que bloquea Save, cambio de driver en la misma ruta y cambio de cabina que crea una ruta nueva consecutiva. |
| **My Loads** | Barra «Auto-rebuild cycle» (solo con filtro de una unidad), banner «Back to route» cuando viene de «Add load». |
| **On Road / Report** | Renderizan las rutas reconstruidas (sin cambios funcionales de Auto-rebuild). |

## 2. Matriz de cobertura final

| Caso | Qué cubre | Pantalla / componente | Estado | Cómo recorrerlo |
|---|---|---|---|---|
| caso 1 | Crear ruta · Assign unit · unidad sin cargas de ciclo → Easy routes | Crear ruta (bloque vacío) → Easy routes | Ofrecido | Crear ruta · unidad 2201 |
| caso 2 | Crear ruta · Assign unit · unidad con cargas de ciclo | Crear ruta · bloque de ciclo | Ofrecido | Crear ruta · unidad 5017 |
| caso 4 | Any unit → Easy routes con Auto-rebuild deshabilitado | Easy routes (barra Auto-rebuild) | Ofrecido | Crear ruta · Any unit → Continue |
| caso 5 | Assigned equipment → Easy routes → Auto-rebuild | Easy routes (barra Auto-rebuild) | Ofrecido | Crear ruta · unidad 2201 → Continue |
| caso 6 | Plan de ruta vacía → Auto-rebuild | Plan · estado vacío + modal | Ofrecido | S03 · R-AR03 |
| caso 7 | Ruta con cargas → completar hacia atrás | Modal | Ofrecido | S02 · R-AR02 (modal) |
| caso 8 | Cargas con huecos → fills gap | Modal | Ofrecido | S07 · R-AR07 (modal) |
| caso 9 | Carga del próximo ciclo | Modal | Ofrecido | S08 · R-AR08 (modal) |
| caso 10 | Carga en otra ruta (vecina / bloqueada) | Modal | Ofrecido | S09 · R-AR09 (modal) |
| A1 | Varias cabinas con el mismo número | Modal · contexto + etiqueta de cabina | Ofrecido | S20 · R-AR20 (modal) |
| A2 | Carga de otra cabina del grupo (horas planeadas) | Modal · fila | Ofrecido | S20 · R-AR20 (modal) |
| A3 | Solo los 7 estados elegibles | Modal · aviso de excluidas | Parcial | S04 · R-AR04 (modal) — TONU sigue entrando (pedido del chat) — ver dudas. |
| A4 | Carga manual de efRouting (ícono ef) | Modal · fila | Ofrecido | S20 · R-AR20 (modal) |
| A5 | El driver no filtra (chip informativo) | Modal · contexto/filtros | Ofrecido | S15 · R-AR15 (modal) |
| A6 | Ruta sin unidad: deshabilitado + asignar | Plan · botón bloqueado → Assign | Ofrecido | R-2602 |
| B1 | Pickup y dropoff reales | Modal + Plan · «real» | Ofrecido | S01 · R-AR01 (modal) |
| B2 | Sin real stops → «planned» | Modal + Plan | Ofrecido | S02 · R-AR02 (modal) |
| B3 | Pickup real, dropoff planeado | Modal · fila en tránsito | Ofrecido | S01 · R-AR01 (modal) |
| B4 | Sin hora planeada de dropoff → «estimated» | Modal + Plan | Ofrecido | S20 · R-AR20 (modal) |
| B5 | Paradas en husos distintos (CST/MST/EST) | Modal + Plan | Ofrecido | S01 · R-AR01 (modal) |
| B6 | Carga parcial (millas y fechas estimadas) | Modal · etiqueta partial | Ofrecido | S20 · R-AR20 (modal) |
| C1 | Sin HOS → marcadores «hueco de X h» | Modal · marcadores | Ofrecido | S02 · R-AR02 (modal) |
| C2 | Hueco de exactamente 34 h corta (vs 33 h / 35 h) | Modal · marcadores + pausa | Ofrecido | S02 · R-AR02 (modal) |
| C3 | Con HOS y mismo driver → «HOS reset» | Modal · marcador | Ofrecido | S01 · R-AR01 (modal) |
| C4 | Reset de HOS pero siguió otro driver | Modal · marcador + aviso | Ofrecido | S15 · R-AR15 (modal) |
| C5 | Hueco ≥ 34 h sin reset (on duty) | Modal · aviso de discrepancia | Ofrecido | S16 · R-AR16 (modal) |
| C6 | Reset en medio de una carga | Modal · marcador | Ofrecido | S17 · R-AR17 (modal) |
| C7 | Cambio de conductor en la ventana | Modal · aviso | Ofrecido | S15 · R-AR15 (modal) |
| C8 | Sin hueco ni reset en 10 días | Modal · marcador + aviso | Ofrecido | S18 · R-AR18 (modal) |
| C9 | Fin hacia adelante: próximo reset | Modal · marcador de fin | Ofrecido | S01 · R-AR01 (modal) |
| C10 | ELD lento o caído | Modal (estados) + Plan (aviso) | Ofrecido | S12 · R-AR12 (modal) |
| C11 | Ventana sin cargas | Modal + bloque de Crear ruta | Ofrecido | S19 · R-AR19 (modal) |
| D1 | Ruta vacía → fecha de salida | Modal · contexto «Anchor» | Ofrecido | S03 · R-AR03 (modal) |
| D2 | Fecha de salida pasada | Modal | Ofrecido | S04 · R-AR04 (modal) |
| D3 | Ancla dentro de un descanso | Modal · aviso | Ofrecido | S05 · R-AR05 (modal) |
| D4 | Ruta con carga en movimiento | Modal | Ofrecido | S01 · R-AR01 (modal) |
| D5 | Ruta sin carga en movimiento → la más antigua | Modal | Ofrecido | S02 · R-AR02 (modal) |
| D6 | Crear ruta: ancla «ahora»; cambiar la fecha recalcula sin pisar lo editado | Crear ruta · bloque | Ofrecido | Crear ruta · unidad 5017 |
| E1 | Ruta vacía: ciclo completo preseleccionado | Modal | Ofrecido | S03 · R-AR03 (modal) |
| E2 | Faltantes anteriores preseleccionadas; las de la ruta solo lectura | Modal | Ofrecido | S02 · R-AR02 (modal) |
| E3 | Intermedias «fills gap» | Modal | Ofrecido | S07 · R-AR07 (modal) |
| E4 | Próximo ciclo: quitar con deshacer | Modal | Ofrecido | S08 · R-AR08 (modal) |
| E5 | Ciclo anterior (espejo de E4) | Modal | Ofrecido | S01 · R-AR01 (modal) |
| E6 | Mover desde el borde de la vecina (bloque; deshabilitado si Finished) | Modal + aviso en la vecina | Ofrecido | S09 · R-AR09 (modal) |
| E7 | Carga en medio / ruta no vecina: oculta, bloqueada con enlace | Modal | Ofrecido | S10 · R-AR10 (modal) |
| E8 | Filtros ampliados → «Outside the detected cycle» | Modal | Ofrecido | S02 · R-AR02 (modal) |
| E9 | Desmarcar una intermedia → aviso de hueco | Modal | Ofrecido | S07 · R-AR07 (modal) |
| E10 | Cambió en el TMS → «Update from TMS» | Modal | Ofrecido | S11 · R-AR11 (modal) |
| E11 | Cancelada o reasignada → «no longer on this unit» | Modal | Ofrecido | S11 · R-AR11 (modal) |
| E12 | Ciclo ya completo → «Nothing to add» | Modal | Ofrecido | S01 · R-AR01 (modal) |
| E13 | Carga quitada → Cycle loads de la vecina | Modal → Refresh de R-AR08N | Ofrecido | S08 · R-AR08 (modal) |
| F1 | Lanes ordenadas por pickup | Plan | Ofrecido | S03 · R-AR03 |
| F2 | Origin = ubicación al inicio del ciclo | Modal + Plan (primer DH) | Ofrecido | S03 · R-AR03 (modal) |
| F3 | DH solo entre cargas no contiguas | Plan | Ofrecido | S07 · R-AR07 (modal) |
| F4 | Unbooked cubiertas se borran; posteriores se re-encadenan | Modal (aviso) + Plan | Ofrecido | S03 · R-AR03 (modal) |
| F5 | «Complete with Easy routes» al final del Plan | Plan | Ofrecido | S03 · R-AR03 (modal) |
| F6 | Tramos ejecutados de solo lectura | Plan · candado | Ofrecido | S04 · R-AR04 (modal) |
| F7 | In Progress solo si alguna carga empezó | Plan / lista de rutas | Ofrecido | S05 · R-AR05 (modal) |
| F8 | «Building route…» y error con Retry | Overlay | Ofrecido | S14 · R-AR14 (modal) |
| F9 | Concurrencia: «the cycle changed», modal recargado | Modal | Ofrecido | S14 · R-AR14 (modal) |
| F10 | Rebuild repetido no duplica | Modal | Ofrecido | S07 · R-AR07 (modal) — Construye y vuelve a abrir Auto-rebuild. |
| F11 | Línea «Cycle continues from here» sobre la carga en movimiento | Modal + Plan | Ofrecido | S01 · R-AR01 (modal) |
| G1 | Crear ruta · Assign unit: bloque resumen + «View full cycle»; Origin = inicio del ciclo de la ruta | Crear ruta | Ofrecido | Crear ruta · unidad 5017 — Cambia la fecha (D6) para ver cómo Origin sigue al ciclo. |
| G2 | Crear ruta · Any unit: sin bloque | Crear ruta | Ofrecido | Crear ruta · Any unit |
| G3 | Plan: toolbar + estado vacío; solo con unidad | Plan | Ofrecido | S03 · R-AR03 |
| G4 | Easy routes con unidad: modal; cancelar → Plan vacío | Easy routes | Ofrecido | Crear ruta · unidad 2201 → Continue |
| G5 | Easy routes sin unidad: deshabilitado + asignar (solape bloquea Save) | Easy routes + Assign | Ofrecido | Crear ruta · Any unit → Continue |
| G6 | Cycle loads (Refresh) con el mismo motor | Plan · Refresh ▾ | Ofrecido | S07 · R-AR07 — Abre Refresh ▾ en la toolbar del Plan. |
| G7 | «Add» en el Plan → My Loads filtrado por la unidad | Plan → My Loads | Ofrecido | S01 · R-AR01 — Usa «Add» al final de las lanes → «Add load». |
| G8 | My Loads filtrado por una unidad → «Auto-rebuild cycle» | My Loads | Ofrecido | My Loads · unidad 2069 — Con 2069 crea una ruta vacía; prueba también con 2045 (abre su ruta). |
| H1 | Cargando: «Checking ELD…» | Modal | Ofrecido | S12 · R-AR12 (modal) |
| H2 | Frescura + Sync con cambios | Modal · barra superior | Ofrecido | S11 · R-AR11 (modal) |
| H3 | Métricas «se agrega» + «ciclo resultante» + HOS | Modal · pie | Ofrecido | S12 · R-AR12 (modal) |
| H4 | Sin HOS: sin bloque de factibilidad | Modal · pie | Ofrecido | S02 · R-AR02 (modal) |
| I1 | Cambio de conductor: misma ruta + aviso | Modal / Assign | Ofrecido | S15 · R-AR15 (modal) |
| I2 | Cambio de cabina: ruta nueva consecutiva | Assign → ruta nueva | Ofrecido | S21 · R-AR21 |
| J1 | My Loads sin unidad → selector de unidad → mismo modal | My Loads → selector → modal | Propuesta | My Loads · sin filtro de unidad — Los filtros del ciclo (unidad y fechas) quedan fijos en el modal. |
| J2 | Ciclo: lo ejecutado y lo que viene (línea «Now») | Modal | Propuesta | S01 · R-AR01 (modal) |
| J3 | Cargas con problema sin tachado: cancelada / reasignada con el motivo | Modal | Propuesta | S11 · R-AR11 (modal) |
| J3b | TONU sin tachado: destino = pickup + «not delivered» | Modal + Crear ruta | Propuesta | S22 · R-AR22 (modal) |
| J4 | Not compatible: el par agrupado, con el motivo, y se escoge una | Modal | Propuesta | S23 · R-AR23 (modal) |
| J5 | Recap hours: indicador + cálculo; al apagarlo pasan al ciclo siguiente | Modal · chip Recap | Propuesta | S24 · R-AR24 (modal) |
| J6 | Carga del próximo ciclo → mover a la ruta que le corresponde (en orden) | Modal → R-AR08N | Propuesta | S08 · R-AR08 (modal) |
| J7 | Cargas en otra ruta: no se cuentan dos veces; mover respeta el orden | Modal | Propuesta | S09 · R-AR09 (modal) |

### Propuestas de la reunión del 23-nov (grupo J, estado «Propuesta»)

Son propuestas, no decisiones cerradas. Están en la maqueta para poder probarlas y decidir. Ninguna agrega texto explicativo: cada una se muestra con la señal más pequeña posible.

| # | Punto discutido | Cómo queda en la maqueta | Probar |
|---|---|---|---|
| 1 | Acceso desde My Loads con el mismo modal | «Auto-rebuild cycle» está siempre activo. Si My Loads no está filtrado por una sola unidad, primero se abre un selector (búsqueda por unidad o driver, con «on the road» y número de cargas). La unidad elegida queda como filtro Unit y se conservan los demás filtros. En el modal, el chip «Trucks» queda fijo: solo entran cargas de esa unidad y de su ciclo. | J1 |
| 2 | Lo ejecutado y lo que viene; marcar sin tachar | Una línea «▼ Now — cycle continues from here · N done · M upcoming» separa siempre lo ejecutado de lo que viene, aunque no haya carga en movimiento (resuelve la duda 7). El tachado se quitó. TONU: el destino es el pickup, con «not delivered» debajo y el destino original en el tooltip. Cancelada o reasignada: borde rojo y el motivo concreto («cancelled in TMS», «reassigned to 2071»). Al quitar una carga, la fila no se atenúa: queda sin marcar y dice «will be removed · undo». | J2, J3, J3b |
| 3 | Cargas incompatibles o solapadas | El motor detecta pares que el camión no puede hacer seguidos: se solapan en el tiempo, o no da el tiempo de manejo entre ambas (~50 mph). Cada par sale agrupado con una línea «Not compatible · choose one» y el motivo, y se elige con un radio. Se sugiere la carga que ya está en la ruta; si ninguna está, la de más ingreso. Si eliges la carga nueva sobre una de la ruta, esa queda «leaves the route» y sale al construir. El par cuenta una sola vez en «missing loads». | J4 (S23) |
| 4 | Límite del ciclo y recap hours | Con HOS, las cargas que quedan después del próximo reset y caben en las horas que el driver recupera (recap) siguen en el ciclo. Llevan la etiqueta «recap · 5 of 9 h» (horas acumuladas sobre las recuperadas) y el detalle en el tooltip. El chip «Recap +9 h · 9 h used» muestra el cálculo completo al pasar el mouse y funciona como interruptor: apagado, esas cargas pasan al ciclo siguiente («next cycle · fits with recap»). «HOS left» suma el recap y el fin del ciclo pasa a «after the recap loads». | J5 (S24) |
| 5 | Cargas en otra ruta: sin doble conteo y moverlas al ciclo que corresponde | Las cargas de otras rutas no cuentan como faltantes ni entran al «Resulting cycle», salvo que se muevan. El resumen las nombra aparte («· K in other routes»). Una carga de esta ruta que es del ciclo siguiente o anterior ofrece «move to next/previous route» cuando la ruta vecina existe, no está finalizada y su ciclo es el mismo (< 34 h). El movimiento va en bloque contiguo para respetar el orden de ejecución, con confirmación. La ruta que la recibe reordena sus lanes por pickup y muestra un aviso. Las métricas nunca cuentan lo que sale (quitada, movida o descartada en un par). | J6, J7 |

### Escenarios sembrados

| Escenario | Ruta(s) | Situación | Casos |
|---|---|---|---|
| S01 · Dos ciclos en la ruta (ejemplo §5) | R-AR01 | Unidad 2045, driver TJ: A (Dallas→Houston, lun 16) · descanso 39 h con reset de HOS · B (Houston→San Antonio, mié 18) · C (San Antonio→El Paso, en tránsito, llega vie 02:00 MST planeado). | B1, B3, B5, C3, C9, D4, E5, E12, F11, H3 |
| S02 · Sin HOS: huecos de 34 h, 33 h y 35 h | R-AR02 | Unidad 2046 sin driver (sin HOS). La ruta no tiene carga en movimiento. TMS: Houston→Dallas (vie 13) · hueco de exactamente 34 h · Dallas→OKC (dom 15) · pausa de 33 h · OKC→Tulsa · Tulsa→KC · KC→St. Louis · hueco de 35 h · St. Louis→Chicago. | C1, C2, H4, D5, E2, E4, E8, B2, caso 7 |
| S03 · Ruta vacía (caso 6) | R-AR03 | Ruta Planned con unidad 2047 y driver, sin cargas reales: 3 lanes Unbooked. Salida jue 19 08:00 CST. El TMS tiene un ciclo en curso (Memphis→Nashville→Louisville→Indianapolis→Columbus) y un ciclo anterior que terminó en Memphis. | D1, E1, F1, F2, F4, F5, G3, B5, caso 6 |
| S04 · Fecha de salida pasada | R-AR04 | Ruta vacía de la unidad 2048 con salida lun 9-nov (pasada). En ese ciclo hubo 3 cargas ejecutadas, una Offer y una Cancelled. | D2, A3, F6 |
| S05 · Ancla dentro de un descanso → ciclo siguiente | R-AR05 | Ruta vacía con salida mié 18 06:00, en medio de un descanso de 91 h entre Houston→Dallas (lun 16) y el siguiente ciclo (vie 20, Booked/Assigned). | D3, F7 |
| S06 · Ancla en un descanso sin ciclo siguiente → anterior | R-AR06 | Ruta vacía con salida sáb 21; el último ciclo de la unidad 2050 terminó el mar 17 y no hay cargas después. | D3 |
| S07 · Huecos en el ciclo (caso 8) | R-AR07 | La ruta tiene Houston→Dallas, OKC→KC (en tránsito), St. Louis→Indianapolis y Columbus→Pittsburgh. El TMS tiene Dallas→OKC y KC→St. Louis, que llenan los huecos; entre Indianapolis y Columbus no hay carga. | E3, E9, F3, G6, caso 8 |
| S08 · Carga del próximo ciclo (caso 9) y carga quitada del plan | R-AR08, R-AR08N | Denver→Salt Lake City (sáb 21) está en la ruta, pero después de un descanso de 43.5 h. La siguiente ruta de la unidad (R-AR08N) empieza el dom 22 en Salt Lake City. | E4, E13, caso 9 |
| S09 · Carga en el borde de la ruta vecina (caso 10) | R-AR09P, R-AR09 | La ruta anterior de la unidad 2053 (R-AR09P) termina con Jacksonville→Tampa y Tampa→Atlanta, que ya pertenecen al ciclo en curso de esta ruta. | E6, caso 10 |
| S10 · Vecina finalizada y carga en una ruta no vecina | R-AR10X, R-AR10P, R-AR10 | Houston→San Antonio (mié 18) es del ciclo en curso pero está en R-AR10P, que está Finished. Houston→Dallas (vie 20) también es del ciclo, pero está en R-AR10X, una ruta que no es vecina (se solapa en el tiempo). | E6, E7, caso 10 |
| S11 · Cambios del TMS y Sync | R-AR11 | El TMS movió la cita de dropoff de Indianapolis→Columbus, reasignó Columbus→Pittsburgh a la unidad 2071 y canceló Pittsburgh→Philadelphia. La última sincronización fue hace 23 min y hay una carga nueva. | E10, E11, H2 |
| S12 · ELD lento (C12) | R-AR12 | El ELD de la cabina 2056 tarda en responder. Sin HOS el ciclo llega hasta Phoenix→Las Vegas (vie 20); con HOS, el próximo reset de Ana es vie 04:00, así que esa carga es del ciclo siguiente. | C10, H1 |
| S13 · ELD caído | R-AR13 | El ELD de la unidad 2057 no responde. | C10, H1, H4 |
| S14 · Construcción: concurrencia y error | R-AR14 | Mientras revisas, el TMS agrega una carga anterior del ciclo (Laredo→San Antonio). Después el POST da timeout una vez. | F8, F9 |
| S15 · Cambio de conductor dentro del ciclo | R-AR15 | Dan Wu hizo Little Rock→Memphis y tomó un reset en Memphis; el camión siguió con Luis Ortega. Dan volvió a manejar Nashville→Louisville (equipo). Driver actual: Luis. | C4, C7, I1, A5 |
| S16 · Hueco ≥ 34 h sin reset (on duty) | R-AR16 | El camión estuvo parado 38 h en Denver, pero las HOS de Nina muestran on duty (sin reset). Mismo driver en todo. | C5 |
| S17 · Reset en medio de una carga | R-AR17 | Sam tomó el reset de 34 h en Kansas City durante Dallas→Chicago (pickup lun 16, entrega mié 18). | C6 |
| S18 · Sin hueco ni reset en 10 días | R-AR18 | La unidad 2062 hizo una carga diaria desde el 6-nov sin descansos de 34 h. | C8 |
| S19 · Ventana sin cargas | R-AR19 | La unidad 2063 no tiene cargas en el TMS alrededor de la salida. | C11 |
| S20 · Cabinas agrupadas, carga manual, dropoff estimado y carga parcial | R-AR20 | La unidad 2065 tiene dos cabinas (2065-A, elegida, con ELD; 2065-B). Hay una carga manual de efRouting, una carga en tránsito sin hora planeada de dropoff y una carga parcial sin ELD ni transacciones. | A1, A2, A4, B4, B6 |
| S21 · Cambio de cabina dentro del ciclo | R-AR21 | Omar empezó con la cabina 2066 y en Memphis pasa a la cabina 2067 (que ya tiene una carga Booked). | I2 |
| S22 · TONU en el historial (decisión abierta) | R-AR22 | Antes de la ruta el camión hizo DH St. Louis→Oklahoma City para una carga cancelada en el pickup (TONU, Invoiced, $300). El entregable dice que TONU queda fuera; en el chat del 23-nov se pidió incluirla. | A3 |
| S23 · Cargas no compatibles (propuesta) | R-AR23 | El TMS tiene dos cargas del viernes 20 que salen de San Antonio con una hora de diferencia (doble reserva). Además, Dallas→Memphis (sáb 14:00) no se alcanza a hacer después de Laredo→Houston, que termina a las 11:00 y está en la ruta. | J4 |
| S24 · Límite del ciclo y recap hours (propuesta) | R-AR24 | A Carla se le acaban las horas el vie 20 a las 20:00 (próximo reset). A la medianoche recupera 9 h (recap). Columbus→Indianapolis (en la ruta) e Indianapolis→Louisville (libre) caben en esas 9 h; Louisville→Nashville ya no. | J5 |

## 3. Dudas y contradicciones para resolver antes de Notion

1. **TONU (A3).** El entregable deja TONU fuera del ciclo. En el chat del 23-nov se pidió incluirlas como lanes de DH con fee e horas en sitio. Hoy la maqueta **las incluye** (escenario S22 y unidad 5017). ¿Cuál queda?
2. **Deadheads (F3) contra producción.** La decisión dice «DH solo si el destino no coincide con el siguiente origen». Pero la ruta de producción que se tomó como referencia muestra «Macon, GA → Macon, GA · 62 mi». La maqueta compara por ciudad: entre ciudades distintas usa millas reales y en la misma ciudad muestra un DH local estimado, como producción. ¿La comparación es por dirección (stop) o por ciudad?
3. **Quitar cargas ejecutadas.** E5 dice que la carga del ciclo anterior (Delivered) «se puede quitar», y F6 dice que los tramos ejecutados son de solo lectura. La maqueta permite quitarla desde el modal. ¿Se puede quitar del plan una carga ya ejecutada?
4. **«Carga de la mitad de otra ruta» (E7).** Si se puede mover un bloque contiguo hasta el borde, toda carga de la vecina que esté en el ciclo termina siendo movible en bloque. «La mitad» solo queda bloqueada si la vecina se solapa en el tiempo o no es vecina. La maqueta bloquea cargas de rutas no vecinas y las de vecinas finalizadas (S10). ¿Es esa la intención?
5. ~~**Origin en Crear ruta.**~~ **Resuelto (23-nov):** Origin = punto de inicio del ciclo de la ruta que se crea (último dropoff del ciclo anterior → primera parada ELD → pickup de la primera carga). Sigue al ciclo (cambia con la unidad o la fecha), no a las tarjetas marcadas.
6. **Estado de las cargas en Crear ruta.** Producción las convierte en Booked; la maqueta conserva el estado del TMS (Delivered, In Transit…), igual que Auto-rebuild. Confirmar.
7. ~~**Línea «Cycle continues from here» (F11) sin carga en movimiento.**~~ **Propuesta J2:** la línea «Now» va siempre encima de la primera carga no ejecutada.
8. **«Alguna carga ya empezó» (F7).** La maqueta cuenta Dispatched como iniciada. ¿Correcto?
9. **Tiempos del ELD.** El documento pide esperar ~5 s. La maqueta usa 1,4 s de «Checking ELD…» y las HOS «llegan» a los 4 s, para poder recorrerla. Solo afecta a la demo.
10. **Horas que necesita el plan (H3).** No está definido cómo se calculan (¿solo manejo?, ¿on-duty?). La maqueta usa millas futuras / 50 + 30 % del DH.
11. **Cambio de cabina (I2).** No está claro dónde se dispara en el producto (¿Edit route?, ¿Assign?). La maqueta usa «Assign driver & equipment» (botón en la ficha de S21). Además falta decidir qué pasa con las cargas Booked futuras de la ruta anterior: hoy se quedan donde están.
12. **Cycle loads (Refresh) y Unbooked.** Al agregar una carga suelta «sin reorganizar», puede quedar solapada con un Unbooked. ¿Se borra el placeholder que cubre o se deja?
13. **Ancla desde Easy routes.** La decisión dice «la fecha del filtro», pero la pantalla de Easy routes de la maqueta no tiene filtro de fecha. Usa la fecha de salida de la ruta (que en Crear ruta es «ahora» o la fecha que eligió el usuario).
14. **G8 con varias rutas.** Si el ciclo toca varias rutas de la unidad, ¿cuál se abre? La maqueta abre la de la primera carga del ciclo que esté en una ruta.
15. **Unbooked «cubiertas» (F4).** Falta definirlas. La maqueta trata como cubiertas las que tienen pickup hasta el fin del ciclo; las posteriores se re-encadenan desde la última carga.
16. **Cancelada o reasignada (E11).** Al quitarla de la ruta, la maqueta la deja libre en My Loads. Para una reasignada a otra unidad, ¿debería desaparecer del todo?
17. **Cargas excluidas por estado.** El documento no dice si se muestran. La maqueta muestra un aviso con el conteo (Offer, Canceled) sin listarlas.
18. **Llave de unidad en la ruta.** La maqueta guarda la cabina en la ruta («2065-A») y calcula la llave con el número. ¿La ruta guarda la cabina o el número normalizado?
19. **Concurrencia (F9).** ¿Qué cuenta como «cambió»: un Sync del TMS, una edición de otro usuario, ambas? La maqueta simula «el TMS agregó una carga del ciclo».
20. **Sync en tiempo real (H2).** Sigue pendiente de validar con Joaquín Meza (revierte el recorte del 14-jun), como dice §7.
21. **Recap hours (J5): fuente y regla.** ¿De dónde salen las horas de recap: el ELD las entrega, o el backend las calcula con la regla 70 h / 8 días? ¿Se cuentan las horas on-duty o solo las de manejo? La maqueta usa ~50 mph + 1 h de muelle por carga, y en TONU el DH más las horas en sitio. ¿Recap viene encendido por defecto?
22. **Not compatible (J4): umbral.** ¿Cuándo dos cargas son incompatibles: solo si se solapan, o también si no da el tiempo de manejo? Hay que definir la velocidad, el tiempo de muelle y las ventanas de cita contra la hora exacta. ¿Qué se sugiere por defecto: la de la ruta, la de más ingreso o ninguna (que el usuario elija sí o sí)?
23. **Not compatible con dos cargas ya ejecutadas.** Si las dos ya pasaron, el dato del TMS está mal. La maqueta no las marca. ¿Se debería avisar?
24. **Mover a la ruta vecina (J6).** ¿Se mueve solo si la vecina está en el mismo ciclo (< 34 h), o también si es la ruta siguiente aunque haya un descanso de por medio? ¿Hace falta confirmación, o basta con deshacer?
25. **My Loads sin unidad (J1).** ¿El selector muestra todas las unidades o solo las que tienen cargas en la vista filtrada? La maqueta muestra todas las que tienen cargas (no Unbooked) y pone primero las que están en la carretera («on the road»).

## 4. Límites conocidos de la maqueta
- Los mapas (Plan, On Road, Report) no reflejan los marcadores del ciclo ni el Origin.
- On Road conserva su propia lógica de deadheads (uno por carga).
- Las rutas semilla antiguas (julio 2026) no tienen datos de TMS por unidad: el motor les inventa un historial plausible la primera vez y lo conserva, para que el rebuild sea idempotente.
