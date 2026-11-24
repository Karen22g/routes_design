# Auto-rebuild · maqueta completa de Rutas — inventario, cobertura y dudas

Entrega sobre `autorebuild_entregable_maqueta.md` (23-nov-2026). La maqueta es la app de este repo (`npm run dev` → http://localhost:5173). Todo Auto-rebuild vive en `src/engine.js`.

**Cómo recorrerla:** el botón flotante **«Casos Auto-rebuild»** (abajo a la derecha) abre el selector. La pestaña «Casos de uso» los ordena por prioridad (§0) y «Matriz de cobertura» lista todo el catálogo (§3 + casos 1–10 del prototipo + propuestas). «Ir →» abre la pantalla con los datos del escenario. Las rutas de prueba están en la pestaña **«Auto-rebuild cases»** de Routes. Cada una muestra en el Plan una ficha con situación, prueba y resultado esperado. **Reiniciar datos** recarga la maqueta (los cambios no se guardan).

«Ahora» de la maqueta: **jue 19-nov-2026 10:00 CST**. Los textos, IDs y montos son ilustrativos.

## 0. Casos de uso por prioridad — empezar por P1

Los casos se ordenan por **frecuencia × importancia**. Primero van los comunes y al final los rebuscados. En la maqueta, el selector «Casos Auto-rebuild» abre en la pestaña **Casos de uso**, con este mismo orden. La pestaña «Auto-rebuild cases» de Rutas también ordena por prioridad, y la ficha del Plan muestra el caso con su prioridad, escenario, prueba y resultado esperado.

| Prioridad | Criterio |
|---|---|
| **P1 · Común** | Pasa todos los días y define el resultado del ciclo: con o sin HOS, cargas que se solapan, una carga partida entre dos ciclos, continuar el siguiente ciclo en la misma ruta, y recap contra dejar para el siguiente ciclo. |
| **P2 · Frecuente** | Flujos diarios de armado: ruta vacía, huecos, Crear ruta, Easy routes, rutas vecinas, TONU, My Loads. |
| **P3 · Ocasional** | Pasa de vez en cuando: cambios del TMS, ELD lento, cambio de conductor, discrepancias de HOS, fechas pasadas, ancla en un descanso, datos incompletos. |
| **P4 · Raro** | Casos de borde: 10 días sin reset, ventana vacía, cambio de cabina, concurrencia y errores, sin unidad. |

| # | Prioridad | Caso de uso | Grupo backend | Datos | Cubre |
|---|---|---|---|---|---|
| UC01 | P1 · Común | Sin HOS: el ciclo se corta por descansos de 34 h o más | BE-2 | R-AR02 | C1, C2, H4, D5, E2, E8, B2, caso 7 |
| UC02 | P1 · Común | Con HOS: reset del driver al inicio y próximo reset al final | BE-2 | R-AR01 | C3, C9, D4, E5, E12, F11, B1, B3, B5, H3, J2 |
| UC03 | P1 · Común | Cargas con fechas que se solapan → «Not compatible», se elige una | BE-8 | R-AR23 | J4 |
| UC04 | P1 · Común | Carga partida entre dos ciclos (reset durante la carga) | BE-2 | R-AR17 | C6, J9 |
| UC05 | P1 · Común | Continuar el siguiente ciclo en la misma ruta | BE-6 | R-AR25 | J8, E4 |
| UC06 | P1 · Común | Recap hours: agregar con recap o dejar para el siguiente ciclo | BE-2 | R-AR24 | J5 |
| UC07 | P2 · Frecuente | Ruta vacía → ciclo completo (caso 6) | BE-10 | R-AR03 | caso 6, D1, E1, F1, F2, F4, F5, G3, F10 |
| UC08 | P2 · Frecuente | Huecos en el ciclo → «fills gap» (caso 8) | BE-5 | R-AR07 | caso 8, E3, E9, F3, G6 |
| UC09 | P2 · Frecuente | Crear ruta con una unidad que ya tiene ciclo (caso 2) | BE-4 | Crear ruta · unidad 5017 | caso 2, G1, D6 |
| UC10 | P2 · Frecuente | Unidad sin cargas de ciclo → Easy routes (casos 1 y 5) | BE-4 | Crear ruta · unidad 2201 | caso 1, caso 5, G4 |
| UC11 | P2 · Frecuente | Cargas en el borde de la ruta anterior → «move here» (caso 10) | BE-7 | R-AR09P, R-AR09 | caso 10, E6, J7 |
| UC12 | P2 · Frecuente | Carga del próximo ciclo con una ruta siguiente → moverla o quitarla (caso 9) | BE-7 | R-AR08, R-AR08N | caso 9, E4, E13, J6 |
| UC13 | P2 · Frecuente | TONU dentro del ciclo | BE-1 | R-AR22 | A3, J3b |
| UC14 | P2 · Frecuente | Desde My Loads (con y sin unidad filtrada) | BE-4 | My Loads | J1, G7, G8 |
| UC15 | P3 · Ocasional | Cambios del TMS y Sync | BE-9 | R-AR11 | E10, E11, H2, J3 |
| UC16 | P3 · Ocasional | ELD lento o caído | BE-3 | R-AR12, R-AR13 | C10, H1 |
| UC17 | P3 · Ocasional | Cambio de conductor dentro del ciclo | BE-2 | R-AR15 | C4, C7, I1, A5 |
| UC18 | P3 · Ocasional | Descanso de 34 h o más sin reset en HOS (on duty) | BE-2 | R-AR16 | C5 |
| UC19 | P3 · Ocasional | Fecha de salida pasada | BE-4 | R-AR04 | D2, F6 |
| UC20 | P3 · Ocasional | Ancla dentro de un descanso | BE-4 | R-AR05, R-AR06 | D3, F7 |
| UC21 | P3 · Ocasional | Ruta vecina finalizada o carga en una ruta no vecina | BE-7 | R-AR10X, R-AR10P, R-AR10 | E7 |
| UC22 | P3 · Ocasional | Cabinas agrupadas, carga manual y datos incompletos | BE-1 | R-AR20 | A1, A2, A4, B4, B6 |
| UC23 | P4 · Raro | Sin descanso ni reset en 10 días | BE-2 | R-AR18 | C8 |
| UC24 | P4 · Raro | Ventana sin cargas | BE-4 | R-AR19 | C11 |
| UC25 | P4 · Raro | Cambio de cabina → ruta nueva consecutiva | BE-11 | R-AR21 | I2 |
| UC26 | P4 · Raro | Concurrencia y error al construir | BE-10 | R-AR14 | F8, F9 |
| UC27 | P4 · Raro | Ruta o Crear ruta sin unidad | BE-4 | Crear ruta · Any unit | A6, G2, G5, caso 4 |

#### P1 · Común

**UC01 · Sin HOS: el ciclo se corta por descansos de 34 h o más** — BE-2 · R-AR02 (S02) · cubre C1, C2, H4, D5, E2, E8, B2, caso 7

- **Escenario:** Unidad 2046 sin driver (sin HOS). TMS: Houston→Dallas (vie 13) · descanso de exactamente 34 h · Dallas→OKC (dom 15) · pausa de 33 h · OKC→Tulsa→KC→St. Louis (en la ruta) · descanso de 35 h · St. Louis→Chicago (en la ruta).
- **Prueba:** Abre Auto-rebuild. Luego toca el chip «Pickup ≥» para ampliar 3 días.
- **Esperado:** Bordes «Cycle start · 34 h rest» y «Cycle end · 35 h rest»; la pausa de 33 h no corta y no se muestra. Dallas→OKC sale preseleccionada como faltante. St. Louis→Chicago queda después del fin como «next cycle · in this route» (la ruta ya sigue en ese ciclo; se puede quitar). Sin HOS no hay chip ni métrica de HOS. Al ampliar, Houston→Dallas aparece como «outside the cycle», sin marcar.

**UC02 · Con HOS: reset del driver al inicio y próximo reset al final** — BE-2 · R-AR01 (S01) · cubre C3, C9, D4, E5, E12, F11, B1, B3, B5, H3, J2

- **Escenario:** Unidad 2045 con TJ Brooks (HOS ok, 31 h disponibles). Dallas→Houston (lun 16) · reset de 34 h en Houston · Houston→San Antonio (mié 18) · San Antonio→El Paso en tránsito (llega vie 02:00 MST).
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** Bordes «Cycle start · HOS reset» y «Cycle end · next HOS reset Sat Nov 21 · 06:00 MST». Dallas→Houston queda arriba como «previous cycle · remove». Línea «Now — 1 done · 1 upcoming» antes de la carga en tránsito. Horas locales con huso (CST/MST) y punto de fuente (real/planned). Chip «HOS left 31 h» y métrica «plan needs ~h». CTA «Nothing to add».

**UC03 · Cargas con fechas que se solapan → «Not compatible», se elige una** — BE-8 · R-AR23 (S23) · cubre J4

- **Escenario:** Unidad 2072. Vie 20: dos cargas libres salen de San Antonio con una hora de diferencia (doble reserva). Sáb 21: Laredo→Houston (en la ruta) entrega a las 11:00 y Dallas→Memphis (libre) recoge a las 14:00, a ~5 h de manejo.
- **Prueba:** Abre Auto-rebuild. En cada par elige la otra carga y vuelve a la sugerida.
- **Esperado:** Cada par sale bajo «Not compatible · choose one» con el motivo en una línea, y se elige con un radio. Sugerida: la de la ruta, o la de más ingreso (San Antonio→Dallas). Si eliges Dallas→Memphis, Laredo→Houston pasa a «leaves the route» y sale al construir. «Missing loads» cuenta cada par una sola vez.

**UC04 · Carga partida entre dos ciclos (reset durante la carga)** — BE-2 · R-AR17 (S17) · cubre C6, J9

- **Escenario:** Sam Ellis (HOS ok) toma el reset de 34 h en Kansas City mientras hace Dallas→Chicago (pickup lun 16, entrega mié 18). Después: Chicago→Indianapolis (en tránsito, en la ruta) e Indianapolis→Columbus (libre).
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** Dallas→Chicago se queda en el ciclo de su pickup: sale arriba como «previous cycle · split by a reset» (el tooltip explica la regla) y se puede quitar. El ciclo actual empieza en «Cycle start · HOS reset during #416002». Indianapolis→Columbus falta y va preseleccionada.

**UC05 · Continuar el siguiente ciclo en la misma ruta** — BE-6 · R-AR25 (S25) · cubre J8, E4

- **Escenario:** Unidad 2074 sin HOS. Ciclo actual: Memphis→Nashville y Nashville→Atlanta (en tránsito). Descanso de 44 h. El siguiente ciclo ya empezó en esta ruta (Atlanta→Charlotte, sáb 21) y el TMS tiene dos cargas más de ese ciclo. La unidad no tiene otra ruta después.
- **Prueba:** Abre Auto-rebuild. Apaga y prende «Next cycle in this route» en la línea «Cycle end». Construye.
- **Esperado:** Como la ruta ya tiene cargas del siguiente ciclo y no hay otra ruta, el interruptor viene encendido: Atlanta→Charlotte dice «next cycle · in this route», y Charlotte→Pittsburgh y Pittsburgh→Philadelphia salen preseleccionadas como «next cycle». El resumen dice «· 2 from the next cycle». Apagado: las dos libres desaparecen y Atlanta→Charlotte queda como «next cycle · remove». Al construir, las 5 lanes quedan en orden de pickup en la misma ruta.

**UC06 · Recap hours: agregar con recap o dejar para el siguiente ciclo** — BE-2 · R-AR24 (S24) · cubre J5

- **Escenario:** Carla Vega (HOS ok, 12 h disponibles) se queda sin horas el vie 20 a las 20:00 (próximo reset). A medianoche recupera 9 h (recap). Columbus→Indianapolis (en la ruta, ~5 h) e Indianapolis→Louisville (libre, ~4 h) caben en esas 9 h; Louisville→Nashville ya no.
- **Prueba:** Abre Auto-rebuild. Pasa el mouse por el chip «Recap» y apágalo; vuelve a prenderlo.
- **Esperado:** Con recap: Columbus→Indianapolis «in this route · recap · 5 of 9 h» e Indianapolis→Louisville preseleccionada «recap · 9 of 9 h». Louisville→Nashville no aparece. El tooltip del chip «Recap +9 h · 9 h used» muestra el cálculo; «HOS left» dice «12 h + 9 h recap»; el fin pasa a «after the recap loads». Apagado: ambas pasan a «next cycle · fits with recap» y el fin vuelve a «next HOS reset Fri Nov 20 · 20:00 EST».


#### P2 · Frecuente

**UC07 · Ruta vacía → ciclo completo (caso 6)** — BE-10 · R-AR03 (S03) · cubre caso 6, D1, E1, F1, F2, F4, F5, G3, F10

- **Escenario:** Ruta Planned de la unidad 2047 (Maria Lopez, HOS ok) sin cargas reales: 3 lanes Unbooked, salida jue 19 08:00 CST. El TMS tiene el ciclo en curso Memphis→Nashville→Louisville→Indianapolis→Columbus; el ciclo anterior terminó en Memphis.
- **Prueba:** Usa «Auto-rebuild» del estado vacío del Plan. Construye. Vuelve a abrir Auto-rebuild.
- **Esperado:** Ancla = fecha de salida; las 4 cargas salen preseleccionadas y el pie avisa que 2 lanes Unbooked se reemplazan. Tras construir: lanes por pickup, la Unbooked posterior re-encadenada desde Columbus, Origin = Memphis, ruta In progress y «Complete with Easy routes» al final. Al reabrir: «Nothing to add» (no duplica).

**UC08 · Huecos en el ciclo → «fills gap» (caso 8)** — BE-5 · R-AR07 (S07) · cubre caso 8, E3, E9, F3, G6

- **Escenario:** Ruta con Houston→Dallas, OKC→KC (en tránsito), St. Louis→Indianapolis y Columbus→Pittsburgh. El TMS tiene Dallas→OKC y KC→St. Louis; entre Indianapolis y Columbus no hay carga.
- **Prueba:** Abre Auto-rebuild; desmarca Dallas→OKC y vuelve a marcarla. Construye. Antes de construir, prueba también Refresh ▾ → Cycle loads.
- **Esperado:** Dos filas «fills gap» preseleccionadas (borde ámbar). Al desmarcar una: aviso de una línea «leaves a gap in the cycle» (no bloquea). Tras construir: lanes encadenadas y un DH Indianapolis→Columbus. Refresh ▾ lista las mismas 2 cargas y permite agregarlas sueltas.

**UC09 · Crear ruta con una unidad que ya tiene ciclo (caso 2)** — BE-4 · Crear ruta · unidad 5017 · cubre caso 2, G1, D6

- **Escenario:** Crear ruta → Assign unit → unidad 5017 (Jeremy Davis, HOS ok). Ciclo en el TMS: TONU en Houston (mar 17), Houston→Dallas, Dallas→Memphis (en tránsito).
- **Prueba:** Elige la unidad. Revisa el bloque «Loads in this truck cycle». Cambia la fecha de salida. Abre «View full cycle».
- **Esperado:** Bloque con el resumen del ciclo y las tarjetas preseleccionadas (la TONU sin tachado: «Not delivered to New Orleans»). Origin = San Antonio, el inicio del ciclo. Cambiar la fecha recalcula sin pisar lo que editaste. «View full cycle» abre el mismo modal en modo Crear ruta.

**UC10 · Unidad sin cargas de ciclo → Easy routes (casos 1 y 5)** — BE-4 · Crear ruta · unidad 2201 · cubre caso 1, caso 5, G4

- **Escenario:** Crear ruta con la unidad 2201, que no tiene cargas en el TMS alrededor de hoy.
- **Prueba:** Continúa a Easy routes. Usa la barra Auto-rebuild y cancela.
- **Esperado:** El bloque de ciclo dice que no hay cargas. En Easy routes la barra Auto-rebuild está activa; el modal muestra «No loads in this cycle» y cancelar vuelve al Plan vacío.

**UC11 · Cargas en el borde de la ruta anterior → «move here» (caso 10)** — BE-7 · R-AR09P, R-AR09 (S09) · cubre caso 10, E6, J7

- **Escenario:** La ruta anterior de la unidad 2053 (R-AR09P) termina con Jacksonville→Tampa y Tampa→Atlanta, que son del ciclo en curso de esta ruta.
- **Prueba:** Abre Auto-rebuild → «move here» en Jacksonville→Tampa → confirma. Construye y abre R-AR09P.
- **Esperado:** Las 2 cargas salen como «in previous route · move here» y no cuentan como faltantes ni en el ciclo resultante hasta moverlas (el resumen las nombra aparte). Mover Jacksonville→Tampa arrastra el bloque hasta el borde (la confirmación nombra la ruta). R-AR09P muestra el aviso «moved…».

**UC12 · Carga del próximo ciclo con una ruta siguiente → moverla o quitarla (caso 9)** — BE-7 · R-AR08, R-AR08N (S08) · cubre caso 9, E4, E13, J6

- **Escenario:** Denver→Salt Lake City (sáb 21) está en la ruta después de un descanso de 43.5 h. La unidad ya tiene la ruta siguiente R-AR08N, que empieza el dom 22 en Salt Lake City.
- **Prueba:** Abre Auto-rebuild → «move to next route» → Update route. Abre R-AR08N. (Alternativa: «remove» y luego Refresh ▾ en R-AR08N.)
- **Esperado:** Como hay ruta siguiente, «Next cycle in this route» viene apagado: la carga sale como «next cycle · move to next route · remove», fuera de métricas. Al moverla: «→ moves to next route · undo» y CTA «Update route». R-AR08N la recibe en orden de pickup, con aviso. Si se quita, queda libre en My Loads y aparece en Cycle loads de R-AR08N.

**UC13 · TONU dentro del ciclo** — BE-1 · R-AR22 (S22) · cubre A3, J3b

- **Escenario:** Antes de la ruta el camión hizo DH St. Louis→Oklahoma City para una carga cancelada en el pickup (TONU, Invoiced, $300).
- **Prueba:** Abre Auto-rebuild y construye. Revisa la lane en el Plan.
- **Esperado:** La TONU sale preseleccionada sin tachado: destino = pickup con «not delivered» (destino original en el tooltip), «DH 541 mi», $300 «TONU fee» y la etiqueta TONU. En el Plan: lane «Not delivered · TONU» con su DH.

**UC14 · Desde My Loads (con y sin unidad filtrada)** — BE-4 · My Loads · cubre J1, G7, G8

- **Escenario:** My Loads sin filtro de unidad. Unidad 2069 (Lena Fox) con cargas libres y sin ruta.
- **Prueba:** Toca «Auto-rebuild cycle» → busca «lena» → elige 2069. Prueba también desde un Plan: «Add» → «Add load».
- **Esperado:** Sin unidad, primero se abre el selector (unidad, driver, «on the road», número de cargas). La unidad queda como filtro y se conservan los demás. Con 2069 se crea una ruta vacía y se abre el mismo modal con «Trucks» fijo. Desde el Plan, «Add load» abre My Loads filtrado por la unidad, con «← Back to route».


#### P3 · Ocasional

**UC15 · Cambios del TMS y Sync** — BE-9 · R-AR11 (S11) · cubre E10, E11, H2, J3

- **Escenario:** El TMS movió la cita de dropoff de Indianapolis→Columbus, reasignó Columbus→Pittsburgh a la unidad 2071 y canceló Pittsburgh→Philadelphia. Última sincronización: hace 23 min, con una carga nueva.
- **Prueba:** Abre Auto-rebuild → «update» → «remove» → toca «Synced 23 min ago» → «Update cycle».
- **Esperado:** «changed in TMS · update» (detalle en el tooltip); «reassigned to 2071 · remove» y «cancelled in TMS · remove» con borde rojo, sin tachar. Al quitar, la fila dice «will be removed · undo». El Sync encuentra cambios y aparece Columbus→Philadelphia para agregar.

**UC16 · ELD lento o caído** — BE-3 · R-AR12, R-AR13 (S12, S13) · cubre C10, H1

- **Escenario:** S12: el ELD de 2056 tarda; con HOS, el próximo reset de Ana es vie 04:00 y Phoenix→Las Vegas pasa al ciclo siguiente. S13: el ELD de 2057 no responde.
- **Prueba:** Abre Auto-rebuild y espera. A: «Update cycle» cuando lleguen las HOS. B: construye antes.
- **Esperado:** «Checking ELD…» → chip HOS «Retrying…» → aviso «HOS data available — the cycle may change · Update cycle». Si confirmas sin HOS, el Plan avisa «HOS data arrived and… differs» con «Reopen Auto-rebuild»; la ruta nunca se corrige sola. S13: chip «HOS · Unavailable» y bordes por descansos.

**UC17 · Cambio de conductor dentro del ciclo** — BE-2 · R-AR15 (S15) · cubre C4, C7, I1, A5

- **Escenario:** Dan Wu hizo Little Rock→Memphis y tomó un reset en Memphis; el camión siguió con Luis Ortega. Dan volvió a manejar Nashville→Louisville. Driver actual: Luis.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** «Cycle start · 41 h rest» (no el reset de Dan) y un aviso de una línea de cambio de conductor. Nashville→Louisville «fills gap». La ruta sigue siendo la misma.

**UC18 · Descanso de 34 h o más sin reset en HOS (on duty)** — BE-2 · R-AR16 (S16) · cubre C5

- **Escenario:** El camión estuvo parado 38 h en Denver, pero las HOS de Nina muestran on duty.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** Manda HOS: el descanso no corta y Kansas City→Denver entra como faltante. Aviso de una línea «Truck stopped ≥ 34 h but the driver’s HOS show no reset».

**UC19 · Fecha de salida pasada** — BE-4 · R-AR04 (S04) · cubre D2, F6

- **Escenario:** Ruta vacía de la unidad 2048 con salida lun 9-nov. En ese ciclo hubo 3 cargas ejecutadas, una Offer y una Cancelled.
- **Prueba:** Abre Auto-rebuild y construye.
- **Esperado:** Se reconstruye el ciclo pasado (Paid, Invoiced, Delivered); Offer y Cancelled no aparecen. En el Plan, las lanes ejecutadas llevan candado.

**UC20 · Ancla dentro de un descanso** — BE-4 · R-AR05, R-AR06 (S05, S06) · cubre D3, F7

- **Escenario:** S05: salida mié 18, en medio de un descanso de 91 h; el ciclo siguiente empieza el vie 20. S06: salida sáb 21 y no hay cargas después.
- **Prueba:** Abre Auto-rebuild y construye (S05). Abre R-AR06.
- **Esperado:** S05: se propone el ciclo siguiente (Dallas→OKC, OKC→KC) y, como todo es futuro, la ruta sigue Planned. S06: se propone el ciclo anterior.

**UC21 · Ruta vecina finalizada o carga en una ruta no vecina** — BE-7 · R-AR10X, R-AR10P, R-AR10 (S10) · cubre E7

- **Escenario:** Houston→San Antonio es del ciclo pero está en R-AR10P (Finished). Houston→Dallas también, pero en R-AR10X, que no es vecina.
- **Prueba:** Abre Auto-rebuild → «Show loads in other routes».
- **Esperado:** Houston→San Antonio: «in previous route · open» con casilla bloqueada (tooltip «route is finished»). Houston→Dallas oculta; al mostrarla, bloqueada con «open».

**UC22 · Cabinas agrupadas, carga manual y datos incompletos** — BE-1 · R-AR20 (S20) · cubre A1, A2, A4, B4, B6

- **Escenario:** Unidad 2065 con dos cabinas (2065-A con ELD, 2065-B). Una carga manual de efRouting, una en tránsito sin hora de dropoff y una parcial.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** Cargas de ambas cabinas juntas; la de 2065-B con su etiqueta. La manual con ícono «ef». Dropoff sin hora → punto «estimated» y «est.». La parcial con millas «est.».


#### P4 · Raro

**UC23 · Sin descanso ni reset en 10 días** — BE-2 · R-AR18 (S18) · cubre C8

- **Escenario:** La unidad 2062 hizo una carga diaria desde el 6-nov sin descansos de 34 h.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** «Cycle start · no reset in 10 days» y un aviso de una línea; se ofrecen solo las cargas de la ventana de 10 días.

**UC24 · Ventana sin cargas** — BE-4 · R-AR19 (S19) · cubre C11

- **Escenario:** La unidad 2063 no tiene cargas en el TMS alrededor de la salida.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** «No loads in this cycle» y CTA «Nothing to add» deshabilitado.

**UC25 · Cambio de cabina → ruta nueva consecutiva** — BE-11 · R-AR21 (S21) · cubre I2

- **Escenario:** Omar empezó con la cabina 2066 y en Memphis pasa a la 2067, que ya tiene una carga Booked.
- **Prueba:** «Change driver / unit…» en la ficha → unidad 2067 → «Create new route». En la nueva usa Auto-rebuild.
- **Esperado:** Aviso «Changing the cabin creates a new route». Se crea una ruta consecutiva para 2067, con avisos en ambas; la anterior conserva lo hecho.

**UC26 · Concurrencia y error al construir** — BE-10 · R-AR14 (S14) · cubre F8, F9

- **Escenario:** Mientras revisas, el TMS agrega una carga anterior del ciclo. Después, la construcción da timeout una vez.
- **Prueba:** Rebuild → revisa → Rebuild → Retry.
- **Esperado:** 1.º: no construye, «The cycle changed while you were reviewing it» y el modal recargado con la carga nueva. 2.º: «Building route…» → «Couldn’t build the route» con Retry. Retry → Plan + toast con Undo.

**UC27 · Ruta o Crear ruta sin unidad** — BE-4 · Crear ruta · Any unit · cubre A6, G2, G5, caso 4

- **Escenario:** Crear ruta en modo Any unit (sin unidad). En Rutas, R-2602 no tiene unidad.
- **Prueba:** Continúa a Easy routes y toca Auto-rebuild. Elige un recurso ocupado en «Assign driver & equipment».
- **Esperado:** Sin bloque de ciclo. Auto-rebuild deshabilitado con candado y el motivo; al tocarlo se abre «Assign driver & equipment». Un recurso ocupado en otra ruta que se solapa bloquea Save.


## 0b. Grupos de manejo en backend — una historia por grupo

Agrupa los casos de uso que el backend resuelve **con el mismo manejo**: la misma función, la misma regla y el mismo endpoint. Cada grupo se convierte en una historia y sus casos de uso son los escenarios de esa historia. La prioridad de un grupo es la de su caso de uso más común. En la maqueta: «Casos Auto-rebuild» › pestaña **Grupos backend**. Cada caso de uso muestra también su grupo en la lista y en la ficha del Plan.

| Grupo | Prioridad | Casos de uso | Requisitos del catálogo |
|---|---|---|---|
| BE-1 · Entrada del motor: cargas de la unidad y hora de cada parada | P2 | UC13 (P2), UC22 (P3) | A1, A2, A3, A4, A5, B1, B2, B3, B4, B5, B6, J3b |
| BE-2 · Bordes del ciclo, con y sin HOS (incluye recap) | P1 | UC01 (P1), UC02 (P1), UC04 (P1), UC06 (P1), UC17 (P3), UC18 (P3), UC23 (P4) | C1, C2, C3, C4, C5, C6, C7, C8, C9, H4, I1, J5, J9 |
| BE-3 · HOS no disponible (ELD lento o caído) | P3 | UC16 (P3) | C10, H1 |
| BE-4 · Ancla y puntos de entrada (mismo endpoint) | P2 | UC09 (P2), UC10 (P2), UC14 (P2), UC19 (P3), UC20 (P3), UC24 (P4), UC27 (P4) | D1, D2, D3, D4, D5, D6, G1, G2, G3, G4, G5, G7, G8, A6, C11, E8, J1, caso 1, caso 2, caso 4, caso 5 |
| BE-5 · Faltantes del ciclo frente a la ruta | P2 | UC08 (P2) | E1, E2, E3, E9, E12, G6, H3, J2, caso 7, caso 8 |
| BE-6 · Siguiente ciclo en la misma ruta | P1 | UC05 (P1) | J8 |
| BE-7 · Cargas fuera del ciclo y entre rutas vecinas | P2 | UC11 (P2), UC12 (P2), UC21 (P3) | E4, E5, E6, E7, E13, J6, J7, caso 9, caso 10 |
| BE-8 · Cargas no compatibles | P1 | UC03 (P1) | J4 |
| BE-9 · Cambios del TMS y Sync | P3 | UC15 (P3) | E10, E11, H2, J3 |
| BE-10 · Construcción de la ruta (build) | P2 | UC07 (P2), UC26 (P4) | F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, caso 6 |
| BE-11 · Cambio de cabina | P4 | UC25 (P4) | I2 |

**BE-1 · Entrada del motor: cargas de la unidad y hora de cada parada** (P2)

- **Mismo manejo:** Una sola consulta arma el pool de cargas de la unidad: todas sus cabinas (la llave es el número), cualquier driver, solo los estados elegibles (TONU incluida con su fee) y también las cargas manuales de efRouting y las parciales. Cada parada se lleva a UTC con su huso horario, y su fuente es real, planned o estimated, en ese orden.
- **Casos de uso:** UC13 TONU dentro del ciclo · UC22 Cabinas agrupadas, carga manual y datos incompletos

**BE-2 · Bordes del ciclo, con y sin HOS (incluye recap)** (P1)

- **Mismo manejo:** Una sola función recorre las cargas en orden y decide dónde se corta el ciclo. Con HOS manda el reset de 34 h del mismo driver; si el reset cae durante una carga, esa carga queda en el ciclo de su pickup. Sin HOS corta un descanso de 34 h o más, y la ventana máxima es de 10 días. Hacia adelante, el ciclo corta en el próximo reset del driver actual, que las recap hours pueden correr.
- **Casos de uso:** UC01 Sin HOS: el ciclo se corta por descansos de 34 h o más · UC02 Con HOS: reset del driver al inicio y próximo reset al final · UC04 Carga partida entre dos ciclos (reset durante la carga) · UC06 Recap hours: agregar con recap o dejar para el siguiente ciclo · UC17 Cambio de conductor dentro del ciclo · UC18 Descanso de 34 h o más sin reset en HOS (on duty) · UC23 Sin descanso ni reset en 10 días

**BE-3 · HOS no disponible (ELD lento o caído)** (P3)

- **Mismo manejo:** Si el ELD no responde a tiempo, el ciclo se calcula con la regla sin HOS de BE-2 y el resultado queda marcado como calculado sin HOS. Cuando llegan las HOS, se avisa para recalcular; la ruta nunca se corrige sola.
- **Casos de uso:** UC16 ELD lento o caído

**BE-4 · Ancla y puntos de entrada (mismo endpoint)** (P2)

- **Mismo manejo:** Todas las entradas llaman al mismo endpoint con la unidad, la ruta (opcional) y el ancla; lo único que cambia es el ancla. El ancla es, en este orden: la carga en movimiento, la carga más antigua, la salida de la ruta, o ahora / la fecha elegida. Si el ancla cae en un descanso se toma el ciclo siguiente, o el anterior si no hay siguiente. Sin unidad no se calcula.
- **Casos de uso:** UC09 Crear ruta con una unidad que ya tiene ciclo (caso 2) · UC10 Unidad sin cargas de ciclo → Easy routes (casos 1 y 5) · UC14 Desde My Loads (con y sin unidad filtrada) · UC19 Fecha de salida pasada · UC20 Ancla dentro de un descanso · UC24 Ventana sin cargas · UC27 Ruta o Crear ruta sin unidad

**BE-5 · Faltantes del ciclo frente a la ruta** (P2)

- **Mismo manejo:** Compara el ciclo con la ruta. Lo que está en los dos queda como «in this route». Lo que falta se propone preseleccionado, y lo que cae entre cargas de la ruta se marca como «fills gap». Cada carga dice si ya se ejecutó. El resultado es el mismo para el modal y para Cycle loads (Refresh).
- **Casos de uso:** UC08 Huecos en el ciclo → «fills gap» (caso 8)

**BE-6 · Siguiente ciclo en la misma ruta** (P1)

- **Mismo manejo:** Las cargas del ciclo siguiente se devuelven aparte. Si la ruta ya tiene cargas de ese ciclo y la unidad no tiene una ruta posterior, se marcan para continuar en la misma ruta; el usuario lo puede apagar.
- **Casos de uso:** UC05 Continuar el siguiente ciclo en la misma ruta

**BE-7 · Cargas fuera del ciclo y entre rutas vecinas** (P2)

- **Mismo manejo:** Una carga pertenece a una sola ruta y no se cuenta dos veces. Una carga del ciclo que está en una ruta vecina se puede traer. Una carga de esta ruta que pertenece al ciclo vecino se puede mover a esa ruta o quitar. Los movimientos van siempre en bloque contiguo hasta el borde, para respetar el orden de ejecución. Si la ruta está finalizada o no es vecina, la carga queda bloqueada.
- **Casos de uso:** UC11 Cargas en el borde de la ruta anterior → «move here» (caso 10) · UC12 Carga del próximo ciclo con una ruta siguiente → moverla o quitarla (caso 9) · UC21 Ruta vecina finalizada o carga en una ruta no vecina

**BE-8 · Cargas no compatibles** (P1)

- **Mismo manejo:** Entre cargas consecutivas del ciclo se valida que el camión llegue a tiempo. Si se solapan o no da el tiempo de manejo, el par se devuelve como «not compatible», con el motivo y una carga sugerida.
- **Casos de uso:** UC03 Cargas con fechas que se solapan → «Not compatible», se elige una

**BE-9 · Cambios del TMS y Sync** (P3)

- **Mismo manejo:** Al leer el ciclo, las cargas de la ruta se comparan con el TMS. Si una carga cambió, se ofrece actualizarla; si se canceló o se reasignó a otra unidad, se ofrece quitarla. El Sync vuelve a leer el TMS y avisa si encontró cambios.
- **Casos de uso:** UC15 Cambios del TMS y Sync

**BE-10 · Construcción de la ruta (build)** (P2)

- **Mismo manejo:** Un solo POST idempotente aplica los cambios: • ordena las cargas por pickup; • pone Origin en el inicio del ciclo; • crea DH solo entre cargas no contiguas; • borra las Unbooked cubiertas y re-encadena las posteriores; • deja lo ejecutado en solo lectura; • pasa la ruta a In Progress solo si algo ya empezó. Si el ciclo cambió mientras se revisaba, rechaza el cambio, y siempre se puede deshacer.
- **Casos de uso:** UC07 Ruta vacía → ciclo completo (caso 6) · UC26 Concurrencia y error al construir

**BE-11 · Cambio de cabina** (P4)

- **Mismo manejo:** Cambiar la cabina de una ruta que ya empezó crea una ruta nueva consecutiva, y su ciclo se calcula con la nueva unidad. Cambiar solo el driver mantiene la ruta.
- **Casos de uso:** UC25 Cambio de cabina → ruta nueva consecutiva

### Orden sugerido para las historias

1. **Núcleo demoable (P1–P2, en orden de dependencia):** BE-1 Entrada → BE-2 Bordes → BE-4 Ancla y entradas → BE-5 Faltantes → BE-10 Construcción. Con esto funcionan UC01, UC02, UC04, UC06, UC07, UC08 y UC09.
2. **Resto de los casos comunes:** BE-8 Not compatible (UC03) y BE-6 Siguiente ciclo en la misma ruta (UC05).
3. **Frecuentes:** BE-7 Cargas entre rutas vecinas (UC11, UC12, UC21).
4. **Ocasionales y de borde:** BE-9 Cambios del TMS y Sync, BE-3 HOS no disponible y BE-11 Cambio de cabina.

Cómo se repartieron los casos que tocan dos grupos:
- **UC01 y UC02** viven en BE-2, aunque su fin de ciclo también aparezca en el modal.
- **UC07** vive en BE-10, porque lo que prueba es la construcción. Para el backend, una ruta vacía es una ruta sin cargas, así que la diferencia con el ciclo (BE-5) sale sola.
- **UC12** vive en BE-7. Mover una carga a la ruta siguiente y traerla de la ruta anterior son la misma operación (mover un bloque contiguo entre rutas vecinas).

### Impacto en las tareas existentes (borrador — Notion no se tocó)

Qué cambiaría en cada tarea cuando se pase a Notion, en el orden P1 → P4:

| Tarea | Grupos backend | Cambio propuesto |
|---|---|---|
| Ticket del motor / T5b (motor) | BE-1, BE-2, BE-3, BE-4, BE-5, BE-6, BE-7, BE-8, BE-9 | Se parte en una historia por grupo, en el orden sugerido arriba. Lo nuevo respecto del ticket actual: BE-6 (siguiente ciclo en la misma ruta), BE-8 (not compatible), el recap en BE-2 y el movimiento a la ruta vecina del ciclo en BE-7. |
| T5a (modal) | Todos los grupos con señal en el modal | Una señal mínima por grupo: línea «Now» (BE-5), «Not compatible · choose one» (BE-8), «split by a reset» y chip «Recap» (BE-2), interruptor «Next cycle in this route» (BE-6), «move to next/previous route» (BE-7). Sin tachado y sin filas de pausa. |
| Construcción (build) | BE-10 | Un solo POST idempotente con orden por pickup, Origin, DH, Unbooked, solo lectura, In Progress, concurrencia y deshacer. |
| T4a (botón) | BE-4 | My Loads: el botón siempre está activo; sin unidad, primero abre el selector. |
| T4b (asignar desde Easy routes) | BE-4 | Sin cambios de alcance. |
| T4c (conflicto de recursos) | BE-4, BE-11 | Sin cambios. |
| CR · Crear ruta con cargas pasadas | BE-4, BE-10 | Origin = inicio del ciclo; tarjetas TONU sin tachado. |
| Origin y fecha según la ubicación real | BE-10 | Sin cambios (decisión del 23-nov ya aplicada). |
| PL-1 (alcance) | Todos | Entregar por grupo, en el orden sugerido. |

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

| Caso | Qué cubre | Grupo backend | Pantalla / componente | Estado | Cómo recorrerlo |
|---|---|---|---|---|---|
| caso 1 | Crear ruta · Assign unit · unidad sin cargas de ciclo → Easy routes | BE-4 | Crear ruta (bloque vacío) → Easy routes | Ofrecido | Crear ruta · unidad 2201 |
| caso 2 | Crear ruta · Assign unit · unidad con cargas de ciclo | BE-4 | Crear ruta · bloque de ciclo | Ofrecido | Crear ruta · unidad 5017 |
| caso 4 | Any unit → Easy routes con Auto-rebuild deshabilitado | BE-4 | Easy routes (barra Auto-rebuild) | Ofrecido | Crear ruta · Any unit → Continue |
| caso 5 | Assigned equipment → Easy routes → Auto-rebuild | BE-4 | Easy routes (barra Auto-rebuild) | Ofrecido | Crear ruta · unidad 2201 → Continue |
| caso 6 | Plan de ruta vacía → Auto-rebuild | BE-10 | Plan · estado vacío + modal | Ofrecido | S03 · R-AR03 |
| caso 7 | Ruta con cargas → completar hacia atrás | BE-5 | Modal | Ofrecido | S02 · R-AR02 (modal) |
| caso 8 | Cargas con huecos → fills gap | BE-5 | Modal | Ofrecido | S07 · R-AR07 (modal) |
| caso 9 | Carga del próximo ciclo | BE-7 | Modal | Ofrecido | S08 · R-AR08 (modal) |
| caso 10 | Carga en otra ruta (vecina / bloqueada) | BE-7 | Modal | Ofrecido | S09 · R-AR09 (modal) |
| A1 | Varias cabinas con el mismo número | BE-1 | Modal · contexto + etiqueta de cabina | Ofrecido | S20 · R-AR20 (modal) |
| A2 | Carga de otra cabina del grupo (horas planeadas) | BE-1 | Modal · fila | Ofrecido | S20 · R-AR20 (modal) |
| A3 | Solo los 7 estados elegibles | BE-1 | Modal · aviso de excluidas | Parcial | S04 · R-AR04 (modal) — TONU sigue entrando (pedido del chat) — ver dudas. |
| A4 | Carga manual de efRouting (ícono ef) | BE-1 | Modal · fila | Ofrecido | S20 · R-AR20 (modal) |
| A5 | El driver no filtra (chip informativo) | BE-1 | Modal · contexto/filtros | Ofrecido | S15 · R-AR15 (modal) |
| A6 | Ruta sin unidad: deshabilitado + asignar | BE-4 | Plan · botón bloqueado → Assign | Ofrecido | R-2602 |
| B1 | Pickup y dropoff reales | BE-1 | Modal + Plan · «real» | Ofrecido | S01 · R-AR01 (modal) |
| B2 | Sin real stops → «planned» | BE-1 | Modal + Plan | Ofrecido | S02 · R-AR02 (modal) |
| B3 | Pickup real, dropoff planeado | BE-1 | Modal · fila en tránsito | Ofrecido | S01 · R-AR01 (modal) |
| B4 | Sin hora planeada de dropoff → «estimated» | BE-1 | Modal + Plan | Ofrecido | S20 · R-AR20 (modal) |
| B5 | Paradas en husos distintos (CST/MST/EST) | BE-1 | Modal + Plan | Ofrecido | S01 · R-AR01 (modal) |
| B6 | Carga parcial (millas y fechas estimadas) | BE-1 | Modal · etiqueta partial | Ofrecido | S20 · R-AR20 (modal) |
| C1 | Sin HOS → marcadores «hueco de X h» | BE-2 | Modal · marcadores | Ofrecido | S02 · R-AR02 (modal) |
| C2 | Hueco de exactamente 34 h corta (vs 33 h / 35 h) | BE-2 | Modal · marcadores + pausa | Ofrecido | S02 · R-AR02 (modal) |
| C3 | Con HOS y mismo driver → «HOS reset» | BE-2 | Modal · marcador | Ofrecido | S01 · R-AR01 (modal) |
| C4 | Reset de HOS pero siguió otro driver | BE-2 | Modal · marcador + aviso | Ofrecido | S15 · R-AR15 (modal) |
| C5 | Hueco ≥ 34 h sin reset (on duty) | BE-2 | Modal · aviso de discrepancia | Ofrecido | S16 · R-AR16 (modal) |
| C6 | Reset en medio de una carga | BE-2 | Modal · marcador | Ofrecido | S17 · R-AR17 (modal) |
| C7 | Cambio de conductor en la ventana | BE-2 | Modal · aviso | Ofrecido | S15 · R-AR15 (modal) |
| C8 | Sin hueco ni reset en 10 días | BE-2 | Modal · marcador + aviso | Ofrecido | S18 · R-AR18 (modal) |
| C9 | Fin hacia adelante: próximo reset | BE-2 | Modal · marcador de fin | Ofrecido | S01 · R-AR01 (modal) |
| C10 | ELD lento o caído | BE-3 | Modal (estados) + Plan (aviso) | Ofrecido | S12 · R-AR12 (modal) |
| C11 | Ventana sin cargas | BE-4 | Modal + bloque de Crear ruta | Ofrecido | S19 · R-AR19 (modal) |
| D1 | Ruta vacía → fecha de salida | BE-4 | Modal · contexto «Anchor» | Ofrecido | S03 · R-AR03 (modal) |
| D2 | Fecha de salida pasada | BE-4 | Modal | Ofrecido | S04 · R-AR04 (modal) |
| D3 | Ancla dentro de un descanso | BE-4 | Modal · aviso | Ofrecido | S05 · R-AR05 (modal) |
| D4 | Ruta con carga en movimiento | BE-4 | Modal | Ofrecido | S01 · R-AR01 (modal) |
| D5 | Ruta sin carga en movimiento → la más antigua | BE-4 | Modal | Ofrecido | S02 · R-AR02 (modal) |
| D6 | Crear ruta: ancla «ahora»; cambiar la fecha recalcula sin pisar lo editado | BE-4 | Crear ruta · bloque | Ofrecido | Crear ruta · unidad 5017 |
| E1 | Ruta vacía: ciclo completo preseleccionado | BE-5 | Modal | Ofrecido | S03 · R-AR03 (modal) |
| E2 | Faltantes anteriores preseleccionadas; las de la ruta solo lectura | BE-5 | Modal | Ofrecido | S02 · R-AR02 (modal) |
| E3 | Intermedias «fills gap» | BE-5 | Modal | Ofrecido | S07 · R-AR07 (modal) |
| E4 | Próximo ciclo: quitar con deshacer | BE-7 | Modal | Ofrecido | S08 · R-AR08 (modal) |
| E5 | Ciclo anterior (espejo de E4) | BE-7 | Modal | Ofrecido | S01 · R-AR01 (modal) |
| E6 | Mover desde el borde de la vecina (bloque; deshabilitado si Finished) | BE-7 | Modal + aviso en la vecina | Ofrecido | S09 · R-AR09 (modal) |
| E7 | Carga en medio / ruta no vecina: oculta, bloqueada con enlace | BE-7 | Modal | Ofrecido | S10 · R-AR10 (modal) |
| E8 | Filtros ampliados → «Outside the detected cycle» | BE-4 | Modal | Ofrecido | S02 · R-AR02 (modal) |
| E9 | Desmarcar una intermedia → aviso de hueco | BE-5 | Modal | Ofrecido | S07 · R-AR07 (modal) |
| E10 | Cambió en el TMS → «Update from TMS» | BE-9 | Modal | Ofrecido | S11 · R-AR11 (modal) |
| E11 | Cancelada o reasignada → «no longer on this unit» | BE-9 | Modal | Ofrecido | S11 · R-AR11 (modal) |
| E12 | Ciclo ya completo → «Nothing to add» | BE-5 | Modal | Ofrecido | S01 · R-AR01 (modal) |
| E13 | Carga quitada → Cycle loads de la vecina | BE-7 | Modal → Refresh de R-AR08N | Ofrecido | S08 · R-AR08 (modal) |
| F1 | Lanes ordenadas por pickup | BE-10 | Plan | Ofrecido | S03 · R-AR03 |
| F2 | Origin = ubicación al inicio del ciclo | BE-10 | Modal + Plan (primer DH) | Ofrecido | S03 · R-AR03 (modal) |
| F3 | DH solo entre cargas no contiguas | BE-10 | Plan | Ofrecido | S07 · R-AR07 (modal) |
| F4 | Unbooked cubiertas se borran; posteriores se re-encadenan | BE-10 | Modal (aviso) + Plan | Ofrecido | S03 · R-AR03 (modal) |
| F5 | «Complete with Easy routes» al final del Plan | BE-10 | Plan | Ofrecido | S03 · R-AR03 (modal) |
| F6 | Tramos ejecutados de solo lectura | BE-10 | Plan · candado | Ofrecido | S04 · R-AR04 (modal) |
| F7 | In Progress solo si alguna carga empezó | BE-10 | Plan / lista de rutas | Ofrecido | S05 · R-AR05 (modal) |
| F8 | «Building route…» y error con Retry | BE-10 | Overlay | Ofrecido | S14 · R-AR14 (modal) |
| F9 | Concurrencia: «the cycle changed», modal recargado | BE-10 | Modal | Ofrecido | S14 · R-AR14 (modal) |
| F10 | Rebuild repetido no duplica | BE-10 | Modal | Ofrecido | S07 · R-AR07 (modal) — Construye y vuelve a abrir Auto-rebuild. |
| F11 | Línea «Cycle continues from here» sobre la carga en movimiento | BE-10 | Modal + Plan | Ofrecido | S01 · R-AR01 (modal) |
| G1 | Crear ruta · Assign unit: bloque resumen + «View full cycle»; Origin = inicio del ciclo de la ruta | BE-4 | Crear ruta | Ofrecido | Crear ruta · unidad 5017 — Cambia la fecha (D6) para ver cómo Origin sigue al ciclo. |
| G2 | Crear ruta · Any unit: sin bloque | BE-4 | Crear ruta | Ofrecido | Crear ruta · Any unit |
| G3 | Plan: toolbar + estado vacío; solo con unidad | BE-4 | Plan | Ofrecido | S03 · R-AR03 |
| G4 | Easy routes con unidad: modal; cancelar → Plan vacío | BE-4 | Easy routes | Ofrecido | Crear ruta · unidad 2201 → Continue |
| G5 | Easy routes sin unidad: deshabilitado + asignar (solape bloquea Save) | BE-4 | Easy routes + Assign | Ofrecido | Crear ruta · Any unit → Continue |
| G6 | Cycle loads (Refresh) con el mismo motor | BE-5 | Plan · Refresh ▾ | Ofrecido | S07 · R-AR07 — Abre Refresh ▾ en la toolbar del Plan. |
| G7 | «Add» en el Plan → My Loads filtrado por la unidad | BE-4 | Plan → My Loads | Ofrecido | S01 · R-AR01 — Usa «Add» al final de las lanes → «Add load». |
| G8 | My Loads filtrado por una unidad → «Auto-rebuild cycle» | BE-4 | My Loads | Ofrecido | My Loads · unidad 2069 — Con 2069 crea una ruta vacía; prueba también con 2045 (abre su ruta). |
| H1 | Cargando: «Checking ELD…» | BE-3 | Modal | Ofrecido | S12 · R-AR12 (modal) |
| H2 | Frescura + Sync con cambios | BE-9 | Modal · barra superior | Ofrecido | S11 · R-AR11 (modal) |
| H3 | Métricas «se agrega» + «ciclo resultante» + HOS | BE-5 | Modal · pie | Ofrecido | S12 · R-AR12 (modal) |
| H4 | Sin HOS: sin bloque de factibilidad | BE-2 | Modal · pie | Ofrecido | S02 · R-AR02 (modal) |
| I1 | Cambio de conductor: misma ruta + aviso | BE-2 | Modal / Assign | Ofrecido | S15 · R-AR15 (modal) |
| I2 | Cambio de cabina: ruta nueva consecutiva | BE-11 | Assign → ruta nueva | Ofrecido | S21 · R-AR21 |
| J1 | My Loads sin unidad → selector de unidad → mismo modal | BE-4 | My Loads → selector → modal | Propuesta | My Loads · sin filtro de unidad — Los filtros del ciclo (unidad y fechas) quedan fijos en el modal. |
| J2 | Ciclo: lo ejecutado y lo que viene (línea «Now») | BE-5 | Modal | Propuesta | S01 · R-AR01 (modal) |
| J3 | Cargas con problema sin tachado: cancelada / reasignada con el motivo | BE-9 | Modal | Propuesta | S11 · R-AR11 (modal) |
| J3b | TONU sin tachado: destino = pickup + «not delivered» | BE-1 | Modal + Crear ruta | Propuesta | S22 · R-AR22 (modal) |
| J4 | Not compatible: el par agrupado, con el motivo, y se escoge una | BE-8 | Modal | Propuesta | S23 · R-AR23 (modal) |
| J5 | Recap hours: indicador + cálculo; al apagarlo pasan al ciclo siguiente | BE-2 | Modal · chip Recap | Propuesta | S24 · R-AR24 (modal) |
| J6 | Carga del próximo ciclo → mover a la ruta que le corresponde (en orden) | BE-7 | Modal → R-AR08N | Propuesta | S08 · R-AR08 (modal) |
| J7 | Cargas en otra ruta: no se cuentan dos veces; mover respeta el orden | BE-7 | Modal | Propuesta | S09 · R-AR09 (modal) |
| J8 | Continuar el siguiente ciclo en la misma ruta (interruptor en «Cycle end») | BE-6 | Modal | Propuesta | S25 · R-AR25 (modal) |
| J9 | Carga partida por un reset: etiqueta «split by a reset» | BE-2 | Modal | Propuesta | S17 · R-AR17 (modal) |

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
| S25 · Continuar el siguiente ciclo en la misma ruta | R-AR25 | Ver UC05. | J8, E4 |

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
26. **Siguiente ciclo en la misma ruta (UC05): valor por defecto.** La maqueta lo enciende solo si la ruta ya tiene cargas del siguiente ciclo y la unidad no tiene una ruta posterior. ¿Es la regla correcta, o debería venir siempre apagado?

## 4. Límites conocidos de la maqueta
- Los mapas (Plan, On Road, Report) no reflejan los marcadores del ciclo ni el Origin.
- On Road conserva su propia lógica de deadheads (uno por carga).
- Las rutas semilla antiguas (julio 2026) no tienen datos de TMS por unidad: el motor les inventa un historial plausible la primera vez y lo conserva, para que el rebuild sea idempotente.
