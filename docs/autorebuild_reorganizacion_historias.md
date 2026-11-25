# Reorganización de las historias de Auto-rebuild (PL-1)

**Estado:** aplicada en Notion el 25-nov-2026, después de la revisión con el CTO.
**Resultado:** de 23 historias se pasa a 16. Cada historia tiene una sola capa (backend o front) y se conserva el orden de prioridad. Ningún criterio, defecto ni caso de prueba quedó sin dueño (secciones 3 a 6).
**Responsables:** backend → Nicolás O'Brien · front → Elkin Carreño · ELD Integrator → por definir.

---

## 1. Las 16 historias, en orden de prioridad (propiedad Orden)

| Orden | Historia | Junta (orden anterior) | Capa | Criterios |
|---|---|---|---|---|
| 01 | Motor del ciclo sin HOS: cargas con hora real, bordes, ancla y el ciclo frente a la ruta | 01, 02, 03, 06, 07, 16, 17 (back) | Backend | 20 |
| 02 | ELD Integrator: función estándar de logs de HOS históricos (primero Samsara) | 04 | Técnica, repo `eld-integrator` | 3 CT |
| 03 | Motor del ciclo con HOS (documentada; implementación pendiente) | 05, 21 (back) | Backend | 6 |
| 04 | HOS en pantalla | 05, 21 (front) | Front | 3 |
| 05 | Construcción de la ruta: asíncrona e idempotente, reglas, Origin y deshacer | 08, 09, Origin (back) | Backend | 10 |
| 06 | Auto-rebuild en pantalla: puntos de entrada y modal | 11, 13 + front de 02, 16, 17 y 08 | Front | 17 |
| 07 | Crear ruta: bloque «Loads in this truck cycle» | 12 + front de Origin | Front | 4 |
| 08 | Plan de la ruta después de Auto-rebuild | 14 | Front | 5 |
| 09 | Pruebas del motor (tabla de casos) | 15 | Técnica | 3 CT |
| 10 | Cargas en otras rutas | 18, 19 (back) | Backend | 5 |
| 11 | Cargas en otras rutas en pantalla | 18, 19 (front) | Front | 2 |
| 12 | Cambios del TMS y Sync | 20 (back) | Backend | 2 |
| 13 | Cambios del TMS y Sync en pantalla | 20 (front) | Front | 1 |
| 14 | Cambio de unidad | 22 (back) | Backend | 1 |
| 15 | Cambio de unidad en pantalla | 22 (front) | Front | 1 |
| 16 | Unidades duplicadas en el selector (bug de datos) | 23 | Backend / datos | 3 |

Historias canceladas con la nota «Fusionada en …»: las anteriores 02, 03, 06, 07, 16, 17, 09, Origin y el botón (T4a).

---

## 2. Razonamiento, desde el punto de vista del desarrollador

### Qué se fusionó y por qué

- **Motor del ciclo sin HOS (01).** Hora real (01), TONU y manuales (02), bordes (03), ancla (06), faltantes (07), no compatibles (16) y siguiente ciclo (17) tocan el mismo endpoint (`GET /truck-cycle/loads`), el mismo servicio y la misma respuesta. Separadas obligaban a varios PRs sobre las mismas funciones (`findCandidates`, `resolveCycle`, `toDatedLoad`) y a acordar el contrato de respuesta varias veces. Juntas, se diseña una sola vez la entrada (cargas con hora resuelta), el corte (bordes y ancla) y la salida (clasificación frente a la ruta).
- **Motor del ciclo con HOS (03).** Bordes con HOS y HOS no disponible dependen de las mismas dos fuentes (`hours-of-service` y los logs del ELD Integrator), así que se diseñan y se prueban juntas. Queda documentada y su implementación espera al integrador; el motor sin HOS no la espera.
- **Construcción de la ruta (05).** Construcción asíncrona e idempotente (D9), reglas de construcción y Origin viven en el mismo POST: el job ejecuta las reglas y escribe Origin y fecha de inicio. Separadas, el timeout, la idempotencia y las reglas se probaban por separado sobre el mismo código.
- **Auto-rebuild en pantalla (06).** El botón solo abre el modal, y la entrada desde My Loads abre el mismo modal: es una sola pieza de front.
- **Cargas en otras rutas (10).** La validación de doble ruta (D8) y el movimiento entre rutas vecinas son la misma regla vista desde dos lados: una carga pertenece a una sola ruta, y moverla es la única forma legal de cambiarla de ruta.

### Qué se dejó separado y por qué

- **Backend y front nunca comparten historia.** Cada historia tiene un solo responsable: Nicolás en backend y Elkin en front. Los criterios de pantalla del motor y de la construcción pasaron a las historias de la pantalla que cambian (06 y 07). Las historias de backend que tenían pantalla y van después en el orden (HOS, otras rutas, TMS, cambio de unidad) tienen su propia historia de front justo después, para no adelantar trabajo de menor prioridad.
- **ELD Integrator (02).** Es otro repo y su responsable está por definir. En ese repo todas las funciones de datos de ELD se estandarizan para varios proveedores; esta se implementa primero para Samsara y los demás proveedores se agregan después. El motor nunca consulta a Samsara directamente.
- **Pruebas (09).** Su tabla cubre todas las historias de backend; cerrarla es la condición para dar por terminado el motor.
- **TMS y Sync, cambio de unidad y unidades duplicadas.** Son de menor prioridad y no comparten código con el núcleo. Unidades duplicadas es un bug de datos de la lista de unidades, no del motor.

### Dependencias y secuencia

1. **01 Motor sin HOS** y **02 ELD Integrator**, en paralelo (repos distintos).
2. **05 Construcción**: necesita la respuesta de 01.
3. **06, 07 y 08 Pantallas**: necesitan el contrato de 01 y 05; pueden empezar con datos de la maqueta.
4. **09 Pruebas**: se llenan a medida que cierran 01 y 05.
5. **03 y 04 HOS**: cuando 02 esté desplegado.
6. **10 a 16**, en ese orden.

---

## 3. Dónde quedó cada criterio

Los criterios no se copiaron: se movieron (se cambió su historia principal) y se renumeraron. No se fusionó ningún criterio; ninguno se canceló en esta reorganización.

### 01 · Motor del ciclo sin HOS (backend)

| Nuevo | Criterio | Venía de |
|---|---|---|
| CA-01 | Cada carga toma su pickup y su dropoff del real stop y, si falta, de la ventana planeada o de una estimación | Motor hora real CA-01 |
| CA-02 | Las candidatas se filtran por la hora real de la carga y no por la fecha planeada | Motor hora real CA-02 |
| CA-03 | Las cargas que ya están en una ruta cuentan para calcular el ciclo, aunque no se ofrezcan | Motor hora real CA-03 |
| CA-04 | La respuesta devuelve pickup y dropoff en UTC y en hora local, con su fuente | Motor hora real CA-04 |
| CA-05 | Con los mismos datos de My Loads, devuelve siempre las mismas candidatas (D11) | Motor hora real CA-05 |
| CA-06 | Una TONU entra como parada en el pickup, con su fee y su tiempo en sitio | TONU/manuales CA-01 |
| CA-07 | Las cargas manuales de efRouting y las parciales entran con su fuente | TONU/manuales CA-02 |
| CA-08 | El ciclo empieza después del último descanso de 34 h o más | Bordes sin HOS CA-01 |
| CA-09 | El ciclo termina en el siguiente descanso de 34 h o más | Bordes sin HOS CA-02 |
| CA-10 | Sin descanso de 34 h en 10 días, el ciclo son esos 10 días | Bordes sin HOS CA-03 |
| CA-11 | La respuesta indica dónde empieza y dónde termina el ciclo y por qué | Bordes sin HOS CA-04 |
| CA-12 | Con ruta, el ancla es la carga en movimiento, la más antigua o la salida | Ancla CA-01 |
| CA-13 | Sin ruta, el ancla es «ahora» o la fecha elegida | Ancla CA-02 |
| CA-14 | Ancla en un descanso → ciclo siguiente, o anterior si no hay | Ancla CA-03 |
| CA-15 | Sin unidad o sin cargas en la ventana, la respuesta lo dice | Ancla CA-04 |
| CA-16 | Cada carga clasificada frente a la ruta: en la ruta, falta o llena un hueco | Faltantes CA-01 |
| CA-17 | Cada carga dice si ya se ejecutó | Faltantes CA-02 |
| CA-18 | Las que faltan salen preseleccionadas y las de la ruta nunca se duplican | Faltantes CA-03 |
| CA-19 | Dos cargas cuyas horas se solapan salen como par «not compatible» con una sugerida | No compatibles CA-01 |
| CA-20 | Las cargas del ciclo siguiente salen aparte, con valor por defecto para continuar | Siguiente ciclo CA-01 |

### 02 · ELD Integrator

CT-01 a CT-03 reescritos para el repo `eld-integrator`: función estándar para varios proveedores, implementación Samsara, y respuesta `501 provider_not_supported` para los proveedores que aún no la tienen. El detalle de la API de Samsara quedó en las notas.

### 03 · Motor del ciclo con HOS (backend) y 04 · HOS en pantalla (front)

| Historia | Nuevo | Criterio | Venía de |
|---|---|---|---|
| 03 | CA-01 | Reset de 34 h solo si el mismo driver hizo las cargas de los dos lados | Bordes con HOS CA-01 |
| 03 | CA-02 | Reset durante una carga → la carga queda en el ciclo de su pickup | Bordes con HOS CA-02 |
| 03 | CA-03 | Mismo driver con HOS y parada de 34 h sin reset → no se corta | Bordes con HOS CA-03 |
| 03 | CA-04 | Cada carga lee las HOS del driver que la hizo | Bordes con HOS CA-04 |
| 03 | CA-05 | Fin = próximo reset del driver actual, corrido por las recap hours | Bordes con HOS CA-05 |
| 03 | CA-06 | Si el ELD no responde en 5 s, el ciclo se calcula sin HOS | HOS no disponible CA-01 |
| 04 | CA-01 | El modal muestra el motivo de cada borde, los avisos y el interruptor de recap | Bordes con HOS CA-06 |
| 04 | CA-02 | «Checking ELD…», «calculated without HOS» y «Update cycle» | HOS no disponible CA-02 |
| 04 | CA-03 | Ruta construida sin HOS: aviso en el Plan, nunca se corrige sola | HOS no disponible CA-03 |

### 05 · Construcción de la ruta (backend)

| Nuevo | Criterio | Venía de |
|---|---|---|
| CA-01 | Responde antes del timeout y termina en segundo plano | Construcción asíncrona CA-01 |
| CA-02 | Un reintento con la misma clave no crea una segunda ruta | Construcción asíncrona CA-02 |
| CA-03 | Se rechaza una ruta que se salta una carga en medio | Construcción asíncrona CA-04 |
| CA-04 | Lanes en orden de pickup; deadhead solo entre cargas no contiguas | Reglas de construcción CA-01 |
| CA-05 | Unbooked cubiertas se borran y las posteriores se re-encadenan | Reglas de construcción CA-02 |
| CA-06 | Ejecutado de solo lectura; In Progress solo si algo empezó | Reglas de construcción CA-03 |
| CA-07 | Si la ruta o una vecina cambió, no se construye | Reglas de construcción CA-04 |
| CA-08 | La construcción se puede deshacer | Reglas de construcción CA-05 |
| CA-09 | Origen desde la primera parada del ciclo cuando el último real dropoff es anterior al inicio | Origin CA-01 |
| CA-10 | Sin las primeras cargas del ciclo, Origin y fecha = dropoff de la última que quedó fuera | **Nuevo**: parte de backend de la regla de Origin |

### 06 · Auto-rebuild en pantalla (front)

| Nuevo | Criterio | Venía de |
|---|---|---|
| CA-01 | Botón Auto-rebuild en la toolbar del detalle de ruta | Botón CA-06 |
| CA-02 | Habilitado cuando la ruta tiene unidad | Botón CA-02 |
| CA-03 | Deshabilitado + aviso cuando no hay unidad | Botón CA-03 |
| CA-04 | Se rehabilita en vivo al asignar unidad | Botón CA-04 |
| CA-05 | Desde el detalle abre el modal sin crear ruta | Botón CA-07 |
| CA-06 | My Loads: «Auto-rebuild cycle» elige la unidad y abre su ciclo | Botón CA-08 |
| CA-07 | Anatomía del modal | Modal CA-01 |
| CA-08 | Preselección y estados visuales | Modal CA-02 |
| CA-09 | Toggle de cargas ya en otra ruta | Modal CA-03 |
| CA-10 | Acción Rebuild y salida sin construir | Modal CA-04 |
| CA-11 | Carga del ciclo siguiente: aviso y «Remove from current plan» | Modal CA-05 |
| CA-12 | Extremos ajustables; una carga omitida en medio bloquea y se ofrece cómo arreglarlo | Modal CA-06 |
| CA-13 | TONU, carga manual y parcial se distinguen | TONU/manuales CA-03 |
| CA-14 | Par «not compatible» agrupado; se elige una | No compatibles CA-02 |
| CA-15 | Interruptor «Next cycle in this route» | Siguiente ciclo CA-02 |
| CA-16 | «Building route…», error y Retry | Construcción asíncrona CA-03 |
| CA-17 | Cada fila del modal muestra horas en hora local, con huso y fuente | **Nuevo**: lleva D2 al modal |

### 07 · Crear ruta (front)

| Nuevo | Criterio | Venía de |
|---|---|---|
| CA-01 | Hora local de la parada, huso y fuente (D2) | Bloque Crear ruta CA-01 |
| CA-02 | Orden por pickup, de la más antigua a la más reciente (D3) | Bloque Crear ruta CA-02 |
| CA-03 | Una carga desmarcada en medio bloquea Continue y ofrece arreglos | Bloque Crear ruta CA-03 |
| CA-04 | Origin y Departure date siguen a las cargas marcadas; fecha con el huso de la parada (D5, D10) | Origin CA-02 |

### 08 · Plan después de Auto-rebuild (front)

Sin cambios: CA-01 a CA-05.

### 10 · Cargas en otras rutas (backend) y 11 · su pantalla (front)

| Historia | Nuevo | Criterio | Venía de |
|---|---|---|---|
| 10 | CA-01 | Agregar una carga que ya está en otra ruta se rechaza con el nombre de esa ruta | Una sola ruta CA-01 |
| 10 | CA-02 | My Loads devuelve la ruta y la lane de cada carga asignada | Una sola ruta CA-02 |
| 10 | CA-03 | Quitar la carga o borrar la ruta la deja libre | Una sola ruta CA-04 |
| 10 | CA-04 | Las cargas del ciclo en otra ruta salen con su ruta y si se pueden mover | Rutas vecinas CA-01 |
| 10 | CA-05 | Mover entre rutas vecinas mueve el bloque contiguo y recalcula ambas | Rutas vecinas CA-02 |
| 11 | CA-01 | My Loads muestra bloqueada la carga que ya está en una ruta | Una sola ruta CA-03 |
| 11 | CA-02 | El modal ofrece «move here» / «move to next/previous route» | Rutas vecinas CA-03 |

### 12 a 16

- **12 TMS y Sync (backend):** CA-01 y CA-02 sin cambios.
- **13 TMS y Sync en pantalla:** CA-01, que venía de TMS CA-03.
- **14 Cambio de unidad (backend):** CA-01 sin cambios.
- **15 Cambio de unidad en pantalla:** CA-01, que venía de Cambio de unidad CA-02.
- **16 Unidades duplicadas:** CA-01 a CA-03 sin cambios.

---

## 4. Defectos de producción (sección 5 del ticket de referencia)

| Defecto | Queda cubierto en |
|---|---|
| D1 · Unidades repetidas en el selector | 16 (CA-01 a CA-03) |
| D2 · Pickup en la hora del navegador | 07 CA-01 y 06 CA-17 |
| D3 · Tarjetas en orden inverso | 07 CA-02 |
| D4 · La respuesta no trae dropoff ni real stops | 01 CA-01 y CA-04 |
| D5 · Desmarcar no recalcula Origin | 07 CA-04 y 05 CA-10 |
| D6 · Duración de ruta distinta a la especificada | **Fuera del proyecto** (decisión del 25-nov) |
| D7 · Historia en Done sin la lógica del ciclo | Resuelto: la CA-02 vieja se canceló y la lógica vive en 01 |
| D8 · Una carga en dos rutas | 10 CA-01 a CA-03 y 11 CA-01 |
| D9 · Timeout que crea la ruta igual | 05 CA-01 y CA-02; 06 CA-16 |
| D10 · Fecha de salida con un día de diferencia | 07 CA-04 |
| D11 · El mismo request genera rutas distintas | 01 CA-05 |

---

## 5. Criterios del ticket de referencia (sección 3)

| Criterio original | Queda en |
|---|---|
| Unidad sin driver: ciclo por hueco de 34 h, con horas originales si no hay real stops | 01 CA-01 y CA-08 |
| Unidad con driver y HOS: último reset y tiempos de las cargas | 03 CA-01 a CA-05 |
| Carga registrada a mano en efRouting aparece en el ciclo | 01 CA-07 |
| Ruta con cargas: se agregan solo las anteriores y ninguna se duplica | 01 CA-16 y CA-18 |
| Ruta con hueco: se inserta la carga que lo cierra en orden de pickup | 01 CA-16 y 05 CA-04 |
| Carga después del fin: separada y sin preseleccionar; se conserva salvo que se quite | 01 CA-20 y 06 CA-11 |
| Carga del ciclo en otra ruta: oculta y, al mostrarla, bloqueada con su ruta | 06 CA-09 y 10 CA-04 |
| Lane Unbooked: se conserva y no cuenta para el ciclo | 05 CA-05 |
| Ruta sin unidad: botón desactivado con el motivo | 06 CA-03 y 01 CA-15 |
| Cambiar el driver no cambia las cargas del ciclo | 01 CA-01 (el driver no filtra) y 03 CA-04 |
| Pickup y dropoff con su fuente en el modal | 01 CA-04 y 06 CA-17 |
| Pickup real sin dropoff real: pickup real y dropoff planeado, con su fuente | 01 CA-01 |
| Respuesta antes del timeout y reintento sin segunda ruta | 05 CA-01 y CA-02 |

Filas de la sección 1 del ticket de referencia:
- «Dropoff antes del inicio del ciclo» → 05 CA-09 y CA-10.
- «Cruza el borde» → 03 CA-02.
- «Sin compromiso: Unbooked o cancelada» → 05 CA-05 y 12 CA-01.

---

## 6. Tabla de pruebas (historia 09)

Los 94 casos se conservan. Las secciones siguen ahora el número de orden de cada historia de backend:

| Sección | Casos | Venían de |
|---|---|---|
| 1 · Motor del ciclo sin HOS | 1.1–1.40 | Hora real (8), TONU (4), bordes (8), ancla (8), faltantes (5), no compatibles (4), siguiente ciclo (3) |
| 2 · ELD Integrator | 2.1–2.3 | ELD Integrator (3) |
| 3 · Motor del ciclo con HOS | 3.1–3.11 | Bordes con HOS (8), HOS no disponible (3) |
| 5 · Construcción de la ruta | 5.1–5.17 | Asíncrona (5), reglas (6), Origin (6) |
| 10 · Cargas en otras rutas | 10.1–10.12 | Una sola ruta (7), rutas vecinas (5) |
| 12 · Cambios del TMS y Sync | 12.1–12.5 | TMS (5) |
| 14 · Cambio de unidad | 14.1–14.3 | Cambio de unidad (3) |
| 16 · Unidades duplicadas | 16.1–16.3 | Unidades duplicadas (3) |

Las historias de front (04, 06, 07, 08, 11, 13 y 15) quedan fuera de la tabla: QA las certifica con sus escenarios.

---

## 7. Pendientes

- **Responsable del ELD Integrator:** por definir.
- **D6 (duración de ruta):** queda fuera de PL-1.
- **Cambio de unidad:** falta decidir qué pasa con las cargas Booked futuras de la ruta anterior (hoy se quedan donde están).
- **Sync en tiempo real:** hay que validarlo con Joaquín Meza.
