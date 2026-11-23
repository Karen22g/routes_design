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

| # | Prioridad | Caso de uso | Datos | Cubre |
|---|---|---|---|---|
| UC01 | P1 · Común | Sin HOS: el ciclo se corta por descansos de 34 h o más | R-AR02 | C1, C2, H4, D5, E2, E8, B2, caso 7 |
| UC02 | P1 · Común | Con HOS: reset del driver al inicio y próximo reset al final | R-AR01 | C3, C9, D4, E5, E12, F11, B1, B3, B5, H3, J2 |
| UC03 | P1 · Común | Cargas con fechas que se solapan → «Not compatible», se elige una | R-AR23 | J4 |
| UC04 | P1 · Común | Carga partida entre dos ciclos (reset durante la carga) | R-AR17 | C6, J9 |
| UC05 | P1 · Común | Continuar el siguiente ciclo en la misma ruta | R-AR25 | J8, E4 |
| UC06 | P1 · Común | Recap hours: agregar con recap o dejar para el siguiente ciclo | R-AR24 | J5 |
| UC07 | P2 · Frecuente | Ruta vacía → ciclo completo (caso 6) | R-AR03 | caso 6, D1, E1, F1, F2, F4, F5, G3, F10 |
| UC08 | P2 · Frecuente | Huecos en el ciclo → «fills gap» (caso 8) | R-AR07 | caso 8, E3, E9, F3, G6 |
| UC09 | P2 · Frecuente | Crear ruta con una unidad que ya tiene ciclo (caso 2) | Crear ruta · unidad 5017 | caso 2, G1, D6 |
| UC10 | P2 · Frecuente | Unidad sin cargas de ciclo → Easy routes (casos 1 y 5) | Crear ruta · unidad 2201 | caso 1, caso 5, G4 |
| UC11 | P2 · Frecuente | Cargas en el borde de la ruta anterior → «move here» (caso 10) | R-AR09P, R-AR09 | caso 10, E6, J7 |
| UC12 | P2 · Frecuente | Carga del próximo ciclo con una ruta siguiente → moverla o quitarla (caso 9) | R-AR08, R-AR08N | caso 9, E4, E13, J6 |
| UC13 | P2 · Frecuente | TONU dentro del ciclo | R-AR22 | A3, J3b |
| UC14 | P2 · Frecuente | Desde My Loads (con y sin unidad filtrada) | My Loads | J1, G7, G8 |
| UC15 | P3 · Ocasional | Cambios del TMS y Sync | R-AR11 | E10, E11, H2, J3 |
| UC16 | P3 · Ocasional | ELD lento o caído | R-AR12, R-AR13 | C10, H1 |
| UC17 | P3 · Ocasional | Cambio de conductor dentro del ciclo | R-AR15 | C4, C7, I1, A5 |
| UC18 | P3 · Ocasional | Descanso de 34 h o más sin reset en HOS (on duty) | R-AR16 | C5 |
| UC19 | P3 · Ocasional | Fecha de salida pasada | R-AR04 | D2, F6 |
| UC20 | P3 · Ocasional | Ancla dentro de un descanso | R-AR05, R-AR06 | D3, F7 |
| UC21 | P3 · Ocasional | Ruta vecina finalizada o carga en una ruta no vecina | R-AR10X, R-AR10P, R-AR10 | E7 |
| UC22 | P3 · Ocasional | Cabinas agrupadas, carga manual y datos incompletos | R-AR20 | A1, A2, A4, B4, B6 |
| UC23 | P4 · Raro | Sin descanso ni reset en 10 días | R-AR18 | C8 |
| UC24 | P4 · Raro | Ventana sin cargas | R-AR19 | C11 |
| UC25 | P4 · Raro | Cambio de cabina → ruta nueva consecutiva | R-AR21 | I2 |
| UC26 | P4 · Raro | Concurrencia y error al construir | R-AR14 | F8, F9 |
| UC27 | P4 · Raro | Ruta o Crear ruta sin unidad | Crear ruta · Any unit | A6, G2, G5, caso 4 |

#### P1 · Común

**UC01 · Sin HOS: el ciclo se corta por descansos de 34 h o más** — R-AR02 (S02) · cubre C1, C2, H4, D5, E2, E8, B2, caso 7

- **Escenario:** Unidad 2046 sin driver (sin HOS). TMS: Houston→Dallas (vie 13) · descanso de exactamente 34 h · Dallas→OKC (dom 15) · pausa de 33 h · OKC→Tulsa→KC→St. Louis (en la ruta) · descanso de 35 h · St. Louis→Chicago (en la ruta).
- **Prueba:** Abre Auto-rebuild. Luego toca el chip «Pickup ≥» para ampliar 3 días.
- **Esperado:** Bordes «Cycle start · 34 h rest» y «Cycle end · 35 h rest»; la pausa de 33 h no corta y no se muestra. Dallas→OKC sale preseleccionada como faltante. St. Louis→Chicago queda después del fin como «next cycle · in this route» (la ruta ya sigue en ese ciclo; se puede quitar). Sin HOS no hay chip ni métrica de HOS. Al ampliar, Houston→Dallas aparece como «outside the cycle», sin marcar.

**UC02 · Con HOS: reset del driver al inicio y próximo reset al final** — R-AR01 (S01) · cubre C3, C9, D4, E5, E12, F11, B1, B3, B5, H3, J2

- **Escenario:** Unidad 2045 con TJ Brooks (HOS ok, 31 h disponibles). Dallas→Houston (lun 16) · reset de 34 h en Houston · Houston→San Antonio (mié 18) · San Antonio→El Paso en tránsito (llega vie 02:00 MST).
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** Bordes «Cycle start · HOS reset» y «Cycle end · next HOS reset Sat Nov 21 · 06:00 MST». Dallas→Houston queda arriba como «previous cycle · remove». Línea «Now — 1 done · 1 upcoming» antes de la carga en tránsito. Horas locales con huso (CST/MST) y punto de fuente (real/planned). Chip «HOS left 31 h» y métrica «plan needs ~h». CTA «Nothing to add».

**UC03 · Cargas con fechas que se solapan → «Not compatible», se elige una** — R-AR23 (S23) · cubre J4

- **Escenario:** Unidad 2072. Vie 20: dos cargas libres salen de San Antonio con una hora de diferencia (doble reserva). Sáb 21: Laredo→Houston (en la ruta) entrega a las 11:00 y Dallas→Memphis (libre) recoge a las 14:00, a ~5 h de manejo.
- **Prueba:** Abre Auto-rebuild. En cada par elige la otra carga y vuelve a la sugerida.
- **Esperado:** Cada par sale bajo «Not compatible · choose one» con el motivo en una línea, y se elige con un radio. Sugerida: la de la ruta, o la de más ingreso (San Antonio→Dallas). Si eliges Dallas→Memphis, Laredo→Houston pasa a «leaves the route» y sale al construir. «Missing loads» cuenta cada par una sola vez.

**UC04 · Carga partida entre dos ciclos (reset durante la carga)** — R-AR17 (S17) · cubre C6, J9

- **Escenario:** Sam Ellis (HOS ok) toma el reset de 34 h en Kansas City mientras hace Dallas→Chicago (pickup lun 16, entrega mié 18). Después: Chicago→Indianapolis (en tránsito, en la ruta) e Indianapolis→Columbus (libre).
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** Dallas→Chicago se queda en el ciclo de su pickup: sale arriba como «previous cycle · split by a reset» (el tooltip explica la regla) y se puede quitar. El ciclo actual empieza en «Cycle start · HOS reset during #416002». Indianapolis→Columbus falta y va preseleccionada.

**UC05 · Continuar el siguiente ciclo en la misma ruta** — R-AR25 (S25) · cubre J8, E4

- **Escenario:** Unidad 2074 sin HOS. Ciclo actual: Memphis→Nashville y Nashville→Atlanta (en tránsito). Descanso de 44 h. El siguiente ciclo ya empezó en esta ruta (Atlanta→Charlotte, sáb 21) y el TMS tiene dos cargas más de ese ciclo. La unidad no tiene otra ruta después.
- **Prueba:** Abre Auto-rebuild. Apaga y prende «Next cycle in this route» en la línea «Cycle end». Construye.
- **Esperado:** Como la ruta ya tiene cargas del siguiente ciclo y no hay otra ruta, el interruptor viene encendido: Atlanta→Charlotte dice «next cycle · in this route», y Charlotte→Pittsburgh y Pittsburgh→Philadelphia salen preseleccionadas como «next cycle». El resumen dice «· 2 from the next cycle». Apagado: las dos libres desaparecen y Atlanta→Charlotte queda como «next cycle · remove». Al construir, las 5 lanes quedan en orden de pickup en la misma ruta.

**UC06 · Recap hours: agregar con recap o dejar para el siguiente ciclo** — R-AR24 (S24) · cubre J5

- **Escenario:** Carla Vega (HOS ok, 12 h disponibles) se queda sin horas el vie 20 a las 20:00 (próximo reset). A medianoche recupera 9 h (recap). Columbus→Indianapolis (en la ruta, ~5 h) e Indianapolis→Louisville (libre, ~4 h) caben en esas 9 h; Louisville→Nashville ya no.
- **Prueba:** Abre Auto-rebuild. Pasa el mouse por el chip «Recap» y apágalo; vuelve a prenderlo.
- **Esperado:** Con recap: Columbus→Indianapolis «in this route · recap · 5 of 9 h» e Indianapolis→Louisville preseleccionada «recap · 9 of 9 h». Louisville→Nashville no aparece. El tooltip del chip «Recap +9 h · 9 h used» muestra el cálculo; «HOS left» dice «12 h + 9 h recap»; el fin pasa a «after the recap loads». Apagado: ambas pasan a «next cycle · fits with recap» y el fin vuelve a «next HOS reset Fri Nov 20 · 20:00 EST».


#### P2 · Frecuente

**UC07 · Ruta vacía → ciclo completo (caso 6)** — R-AR03 (S03) · cubre caso 6, D1, E1, F1, F2, F4, F5, G3, F10

- **Escenario:** Ruta Planned de la unidad 2047 (Maria Lopez, HOS ok) sin cargas reales: 3 lanes Unbooked, salida jue 19 08:00 CST. El TMS tiene el ciclo en curso Memphis→Nashville→Louisville→Indianapolis→Columbus; el ciclo anterior terminó en Memphis.
- **Prueba:** Usa «Auto-rebuild» del estado vacío del Plan. Construye. Vuelve a abrir Auto-rebuild.
- **Esperado:** Ancla = fecha de salida; las 4 cargas salen preseleccionadas y el pie avisa que 2 lanes Unbooked se reemplazan. Tras construir: lanes por pickup, la Unbooked posterior re-encadenada desde Columbus, Origin = Memphis, ruta In progress y «Complete with Easy routes» al final. Al reabrir: «Nothing to add» (no duplica).

**UC08 · Huecos en el ciclo → «fills gap» (caso 8)** — R-AR07 (S07) · cubre caso 8, E3, E9, F3, G6

- **Escenario:** Ruta con Houston→Dallas, OKC→KC (en tránsito), St. Louis→Indianapolis y Columbus→Pittsburgh. El TMS tiene Dallas→OKC y KC→St. Louis; entre Indianapolis y Columbus no hay carga.
- **Prueba:** Abre Auto-rebuild; desmarca Dallas→OKC y vuelve a marcarla. Construye. Antes de construir, prueba también Refresh ▾ → Cycle loads.
- **Esperado:** Dos filas «fills gap» preseleccionadas (borde ámbar). Al desmarcar una: aviso de una línea «leaves a gap in the cycle» (no bloquea). Tras construir: lanes encadenadas y un DH Indianapolis→Columbus. Refresh ▾ lista las mismas 2 cargas y permite agregarlas sueltas.

**UC09 · Crear ruta con una unidad que ya tiene ciclo (caso 2)** — Crear ruta · unidad 5017 · cubre caso 2, G1, D6

- **Escenario:** Crear ruta → Assign unit → unidad 5017 (Jeremy Davis, HOS ok). Ciclo en el TMS: TONU en Houston (mar 17), Houston→Dallas, Dallas→Memphis (en tránsito).
- **Prueba:** Elige la unidad. Revisa el bloque «Loads in this truck cycle». Cambia la fecha de salida. Abre «View full cycle».
- **Esperado:** Bloque con el resumen del ciclo y las tarjetas preseleccionadas (la TONU sin tachado: «Not delivered to New Orleans»). Origin = San Antonio, el inicio del ciclo. Cambiar la fecha recalcula sin pisar lo que editaste. «View full cycle» abre el mismo modal en modo Crear ruta.

**UC10 · Unidad sin cargas de ciclo → Easy routes (casos 1 y 5)** — Crear ruta · unidad 2201 · cubre caso 1, caso 5, G4

- **Escenario:** Crear ruta con la unidad 2201, que no tiene cargas en el TMS alrededor de hoy.
- **Prueba:** Continúa a Easy routes. Usa la barra Auto-rebuild y cancela.
- **Esperado:** El bloque de ciclo dice que no hay cargas. En Easy routes la barra Auto-rebuild está activa; el modal muestra «No loads in this cycle» y cancelar vuelve al Plan vacío.

**UC11 · Cargas en el borde de la ruta anterior → «move here» (caso 10)** — R-AR09P, R-AR09 (S09) · cubre caso 10, E6, J7

- **Escenario:** La ruta anterior de la unidad 2053 (R-AR09P) termina con Jacksonville→Tampa y Tampa→Atlanta, que son del ciclo en curso de esta ruta.
- **Prueba:** Abre Auto-rebuild → «move here» en Jacksonville→Tampa → confirma. Construye y abre R-AR09P.
- **Esperado:** Las 2 cargas salen como «in previous route · move here» y no cuentan como faltantes ni en el ciclo resultante hasta moverlas (el resumen las nombra aparte). Mover Jacksonville→Tampa arrastra el bloque hasta el borde (la confirmación nombra la ruta). R-AR09P muestra el aviso «moved…».

**UC12 · Carga del próximo ciclo con una ruta siguiente → moverla o quitarla (caso 9)** — R-AR08, R-AR08N (S08) · cubre caso 9, E4, E13, J6

- **Escenario:** Denver→Salt Lake City (sáb 21) está en la ruta después de un descanso de 43.5 h. La unidad ya tiene la ruta siguiente R-AR08N, que empieza el dom 22 en Salt Lake City.
- **Prueba:** Abre Auto-rebuild → «move to next route» → Update route. Abre R-AR08N. (Alternativa: «remove» y luego Refresh ▾ en R-AR08N.)
- **Esperado:** Como hay ruta siguiente, «Next cycle in this route» viene apagado: la carga sale como «next cycle · move to next route · remove», fuera de métricas. Al moverla: «→ moves to next route · undo» y CTA «Update route». R-AR08N la recibe en orden de pickup, con aviso. Si se quita, queda libre en My Loads y aparece en Cycle loads de R-AR08N.

**UC13 · TONU dentro del ciclo** — R-AR22 (S22) · cubre A3, J3b

- **Escenario:** Antes de la ruta el camión hizo DH St. Louis→Oklahoma City para una carga cancelada en el pickup (TONU, Invoiced, $300).
- **Prueba:** Abre Auto-rebuild y construye. Revisa la lane en el Plan.
- **Esperado:** La TONU sale preseleccionada sin tachado: destino = pickup con «not delivered» (destino original en el tooltip), «DH 541 mi», $300 «TONU fee» y la etiqueta TONU. En el Plan: lane «Not delivered · TONU» con su DH.

**UC14 · Desde My Loads (con y sin unidad filtrada)** — My Loads · cubre J1, G7, G8

- **Escenario:** My Loads sin filtro de unidad. Unidad 2069 (Lena Fox) con cargas libres y sin ruta.
- **Prueba:** Toca «Auto-rebuild cycle» → busca «lena» → elige 2069. Prueba también desde un Plan: «Add» → «Add load».
- **Esperado:** Sin unidad, primero se abre el selector (unidad, driver, «on the road», número de cargas). La unidad queda como filtro y se conservan los demás. Con 2069 se crea una ruta vacía y se abre el mismo modal con «Trucks» fijo. Desde el Plan, «Add load» abre My Loads filtrado por la unidad, con «← Back to route».


#### P3 · Ocasional

**UC15 · Cambios del TMS y Sync** — R-AR11 (S11) · cubre E10, E11, H2, J3

- **Escenario:** El TMS movió la cita de dropoff de Indianapolis→Columbus, reasignó Columbus→Pittsburgh a la unidad 2071 y canceló Pittsburgh→Philadelphia. Última sincronización: hace 23 min, con una carga nueva.
- **Prueba:** Abre Auto-rebuild → «update» → «remove» → toca «Synced 23 min ago» → «Update cycle».
- **Esperado:** «changed in TMS · update» (detalle en el tooltip); «reassigned to 2071 · remove» y «cancelled in TMS · remove» con borde rojo, sin tachar. Al quitar, la fila dice «will be removed · undo». El Sync encuentra cambios y aparece Columbus→Philadelphia para agregar.

**UC16 · ELD lento o caído** — R-AR12, R-AR13 (S12, S13) · cubre C10, H1

- **Escenario:** S12: el ELD de 2056 tarda; con HOS, el próximo reset de Ana es vie 04:00 y Phoenix→Las Vegas pasa al ciclo siguiente. S13: el ELD de 2057 no responde.
- **Prueba:** Abre Auto-rebuild y espera. A: «Update cycle» cuando lleguen las HOS. B: construye antes.
- **Esperado:** «Checking ELD…» → chip HOS «Retrying…» → aviso «HOS data available — the cycle may change · Update cycle». Si confirmas sin HOS, el Plan avisa «HOS data arrived and… differs» con «Reopen Auto-rebuild»; la ruta nunca se corrige sola. S13: chip «HOS · Unavailable» y bordes por descansos.

**UC17 · Cambio de conductor dentro del ciclo** — R-AR15 (S15) · cubre C4, C7, I1, A5

- **Escenario:** Dan Wu hizo Little Rock→Memphis y tomó un reset en Memphis; el camión siguió con Luis Ortega. Dan volvió a manejar Nashville→Louisville. Driver actual: Luis.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** «Cycle start · 41 h rest» (no el reset de Dan) y un aviso de una línea de cambio de conductor. Nashville→Louisville «fills gap». La ruta sigue siendo la misma.

**UC18 · Descanso de 34 h o más sin reset en HOS (on duty)** — R-AR16 (S16) · cubre C5

- **Escenario:** El camión estuvo parado 38 h en Denver, pero las HOS de Nina muestran on duty.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** Manda HOS: el descanso no corta y Kansas City→Denver entra como faltante. Aviso de una línea «Truck stopped ≥ 34 h but the driver’s HOS show no reset».

**UC19 · Fecha de salida pasada** — R-AR04 (S04) · cubre D2, F6

- **Escenario:** Ruta vacía de la unidad 2048 con salida lun 9-nov. En ese ciclo hubo 3 cargas ejecutadas, una Offer y una Cancelled.
- **Prueba:** Abre Auto-rebuild y construye.
- **Esperado:** Se reconstruye el ciclo pasado (Paid, Invoiced, Delivered); Offer y Cancelled no aparecen. En el Plan, las lanes ejecutadas llevan candado.

**UC20 · Ancla dentro de un descanso** — R-AR05, R-AR06 (S05, S06) · cubre D3, F7

- **Escenario:** S05: salida mié 18, en medio de un descanso de 91 h; el ciclo siguiente empieza el vie 20. S06: salida sáb 21 y no hay cargas después.
- **Prueba:** Abre Auto-rebuild y construye (S05). Abre R-AR06.
- **Esperado:** S05: se propone el ciclo siguiente (Dallas→OKC, OKC→KC) y, como todo es futuro, la ruta sigue Planned. S06: se propone el ciclo anterior.

**UC21 · Ruta vecina finalizada o carga en una ruta no vecina** — R-AR10X, R-AR10P, R-AR10 (S10) · cubre E7

- **Escenario:** Houston→San Antonio es del ciclo pero está en R-AR10P (Finished). Houston→Dallas también, pero en R-AR10X, que no es vecina.
- **Prueba:** Abre Auto-rebuild → «Show loads in other routes».
- **Esperado:** Houston→San Antonio: «in previous route · open» con casilla bloqueada (tooltip «route is finished»). Houston→Dallas oculta; al mostrarla, bloqueada con «open».

**UC22 · Cabinas agrupadas, carga manual y datos incompletos** — R-AR20 (S20) · cubre A1, A2, A4, B4, B6

- **Escenario:** Unidad 2065 con dos cabinas (2065-A con ELD, 2065-B). Una carga manual de efRouting, una en tránsito sin hora de dropoff y una parcial.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** Cargas de ambas cabinas juntas; la de 2065-B con su etiqueta. La manual con ícono «ef». Dropoff sin hora → punto «estimated» y «est.». La parcial con millas «est.».


#### P4 · Raro

**UC23 · Sin descanso ni reset en 10 días** — R-AR18 (S18) · cubre C8

- **Escenario:** La unidad 2062 hizo una carga diaria desde el 6-nov sin descansos de 34 h.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** «Cycle start · no reset in 10 days» y un aviso de una línea; se ofrecen solo las cargas de la ventana de 10 días.

**UC24 · Ventana sin cargas** — R-AR19 (S19) · cubre C11

- **Escenario:** La unidad 2063 no tiene cargas en el TMS alrededor de la salida.
- **Prueba:** Abre Auto-rebuild.
- **Esperado:** «No loads in this cycle» y CTA «Nothing to add» deshabilitado.

**UC25 · Cambio de cabina → ruta nueva consecutiva** — R-AR21 (S21) · cubre I2

- **Escenario:** Omar empezó con la cabina 2066 y en Memphis pasa a la 2067, que ya tiene una carga Booked.
- **Prueba:** «Change driver / unit…» en la ficha → unidad 2067 → «Create new route». En la nueva usa Auto-rebuild.
- **Esperado:** Aviso «Changing the cabin creates a new route». Se crea una ruta consecutiva para 2067, con avisos en ambas; la anterior conserva lo hecho.

**UC26 · Concurrencia y error al construir** — R-AR14 (S14) · cubre F8, F9

- **Escenario:** Mientras revisas, el TMS agrega una carga anterior del ciclo. Después, la construcción da timeout una vez.
- **Prueba:** Rebuild → revisa → Rebuild → Retry.
- **Esperado:** 1.º: no construye, «The cycle changed while you were reviewing it» y el modal recargado con la carga nueva. 2.º: «Building route…» → «Couldn’t build the route» con Retry. Retry → Plan + toast con Undo.

**UC27 · Ruta o Crear ruta sin unidad** — Crear ruta · Any unit · cubre A6, G2, G5, caso 4

- **Escenario:** Crear ruta en modo Any unit (sin unidad). En Rutas, R-2602 no tiene unidad.
- **Prueba:** Continúa a Easy routes y toca Auto-rebuild. Elige un recurso ocupado en «Assign driver & equipment».
- **Esperado:** Sin bloque de ciclo. Auto-rebuild deshabilitado con candado y el motivo; al tocarlo se abre «Assign driver & equipment». Un recurso ocupado en otra ruta que se solapa bloquea Save.


### Impacto en las tareas existentes (borrador — Notion no se tocó)

Qué cambiaría en cada tarea cuando se pase a Notion, en el orden P1 → P4:

| Tarea | Casos de uso | Cambio propuesto |
|---|---|---|
| Ticket del motor / T5b (motor) | UC01–UC06 primero; luego UC07, UC08, UC11, UC12, UC17–UC20, UC23 | Los criterios se ordenan por prioridad. Se agregan: pares «not compatible» (solape o tiempo de manejo), carga partida por un reset (queda en el ciclo de su pickup), siguiente ciclo en la misma ruta (`continueNext`, encendido por defecto si la ruta ya tiene cargas de ese ciclo y no hay ruta siguiente), recap hours (horas recuperadas antes de cada carga; al apagarlo, pasan al siguiente ciclo) y mover a la ruta vecina del ciclo (bloque contiguo). |
| T5a (modal) | UC01–UC06, UC11–UC13, UC15, UC16 | Señales mínimas: línea «Now», grupo «Not compatible · choose one», etiqueta «split by a reset», interruptor «Next cycle in this route» en «Cycle end», chip «Recap» con el cálculo, sin tachado, sin filas de pausa. |
| T4a (botón) | UC14, UC27 | My Loads: botón siempre activo; sin unidad abre primero el selector. |
| T4b (asignar desde Easy routes) | UC10, UC27 | Sin cambios de alcance; pasa a P2/P4. |
| T4c (conflicto de recursos) | UC27 | Sin cambios; P4. |
| CR · Crear ruta con cargas pasadas | UC09, UC10 | Origin = inicio del ciclo; tarjetas TONU sin tachado. |
| Origin y fecha según la ubicación real | UC07, UC09 | Sin cambios (decisión del 23-nov ya aplicada). |
| PL-1 (alcance) | Todos | Entregar por prioridad: P1 → P2 → P3 → P4. |

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
| J8 | Continuar el siguiente ciclo en la misma ruta (interruptor en «Cycle end») | Modal | Propuesta | S25 · R-AR25 (modal) |
| J9 | Carga partida por un reset: etiqueta «split by a reset» | Modal | Propuesta | S17 · R-AR17 (modal) |

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
