export function initApp() {
  "use strict";

  window.__EFR_DEV = true;

  // ---------------------------------------------------------------------
  // Data
  // ---------------------------------------------------------------------
  const ROUTES = [
    { id: 'R-2601', name: 'Houston_Chicago_2026-07-29', dateStart: 'Jul 29 / 2026', dateEnd: 'Jul 31 / 2026', status: 'In progress', driver: 'Marcus Bell', trailer: 'TRK-118', equipmentType: 'Van', unit: 'UNT-118', dispatcher: 'karen', routeDeviation: 87, fuelExcess: 173, planAdherence: 84 },
    { id: 'R-2602', name: 'Dallas_Atlanta_2026-07-29', dateStart: 'Jul 29 / 2026', dateEnd: 'Jul 31 / 2026', status: 'Planned', driver: 'Unassigned', trailer: 'TRK-205', equipmentType: 'Van', unit: 'Unassigned', dispatcher: 'karen', routeDeviation: 45, fuelExcess: 95, planAdherence: 91 },
    { id: 'R-2603', name: 'Laredo_Memphis_2026-07-18', dateStart: 'Jul 18 / 2026', dateEnd: 'Jul 31 / 2026', status: 'In progress', driver: 'Dana Ortiz', trailer: 'TRK-884', equipmentType: 'Reefer', unit: 'UNT-204', dispatcher: 'karen', routeDeviation: 122, fuelExcess: 214, planAdherence: 78 },
    { id: 'R-2604', name: 'Phoenix_Newark_2026-07-01', dateStart: 'Jul 01 / 2026', dateEnd: 'Aug 12 / 2026', status: 'In progress', driver: 'Eli Novak', trailer: 'TRK-077', equipmentType: 'Reefer', unit: 'UNT-077', dispatcher: 'angie', routeDeviation: 195, fuelExcess: 340, planAdherence: 71 },
    { id: 'R-2605', name: 'Fresno_Denver_2026-07-01', dateStart: 'Jul 01 / 2026', dateEnd: 'Jul 07 / 2026', status: 'Planned', driver: 'Unassigned', trailer: 'TRK-310', equipmentType: 'Reefer', unit: 'Unassigned', dispatcher: 'angie', routeDeviation: 210, fuelExcess: 390, planAdherence: 68 },
    { id: 'R-2606', name: 'Savannah_Tampa_2026-06-22', dateStart: 'Jun 22 / 2026', dateEnd: 'Jun 28 / 2026', status: 'Completed', driver: 'Rosa Kim', trailer: 'TRK-311', equipmentType: 'Van', unit: 'UNT-311', dispatcher: 'karen', routeDeviation: 35, fuelExcess: 65, planAdherence: 96 }
  ];

  const LOADS = [
    { id: 'ef-4a7dc58', route: 'R-2601', origin: 'Houston, TX', dest: 'Memphis, TN', miles: 588, income: 1111, status: 'In Transit', pickup: '07/29/2026', pickupTime: '08:00 - 12:00', delivery: '07/30/2026', deliveryTime: '06:00 - 10:00', customer: 'Averitt', eta: '09:42', onTime: 'On time', stops: 2, truck: 'ext_tr_123', equipment: 'TRK-118', equipmentType: 'Van' },
    { id: 'ef-9b21fe0', route: 'R-2601', origin: 'Memphis, TN', dest: 'Chicago, IL', miles: 530, income: 1180, status: 'Booked', pickup: '07/30/2026', pickupTime: '14:00 - 18:00', delivery: '07/31/2026', deliveryTime: '08:00 - 12:00', customer: 'CH Robinson', eta: '--', onTime: '--', stops: 1, truck: 'ext_tr_123', equipment: 'TRK-118', equipmentType: 'Van' },
    { id: 'ef-77c04aa', route: 'R-2601', origin: 'Chicago, IL', dest: 'Houston, TX', miles: 355, income: 523, status: 'Offer', pickup: '07/31/2026', pickupTime: '10:00 - 14:00', delivery: '08/01/2026', deliveryTime: '09:00 - 13:00', customer: 'TQL', eta: '--', onTime: '--', stops: 1, truck: 'ext_tr_123', equipment: 'TRK-118', equipmentType: 'Van' },
    { id: 'ef-1d55b3c', route: 'R-2602', origin: 'Dallas, TX', dest: 'Shreveport, LA', miles: 190, income: 420, status: 'Booked', pickup: '07/29/2026', pickupTime: '07:00 - 11:00', delivery: '07/29/2026', deliveryTime: '15:00 - 19:00', customer: 'Werner', eta: '--', onTime: '--', stops: 1, truck: '--', equipment: 'TRK-205', equipmentType: 'Van' },
    { id: 'ef-6e0aa41', route: 'R-2602', origin: 'Shreveport, LA', dest: 'Atlanta, GA', miles: 990, income: 2180, status: 'Unbooked', pickup: '07/30/2026', pickupTime: '06:00 - 10:00', delivery: '07/31/2026', deliveryTime: '12:00 - 16:00', customer: '--', eta: '--', onTime: '--', stops: 2, truck: '--', equipment: 'TRK-205', equipmentType: 'Van' },
    { id: 'ef-2f8c110', route: 'R-2603', origin: 'Laredo, TX', dest: 'San Antonio, TX', miles: 157, income: 480, status: 'Delivered', pickup: '07/18/2026', pickupTime: '05:00 - 09:00', delivery: '07/18/2026', deliveryTime: '13:00 - 17:00', customer: 'Sysco', eta: '13:10', onTime: 'On time', stops: 1, truck: 'ext_tr_884', equipment: 'TRK-884', equipmentType: 'Reefer' },
    { id: 'ef-30bb907', route: 'R-2603', origin: 'San Antonio, TX', dest: 'Little Rock, AR', miles: 620, income: 1620, status: 'In Transit', pickup: '07/25/2026', pickupTime: '08:00 - 12:00', delivery: '07/26/2026', deliveryTime: '07:00 - 11:00', customer: 'Kroger', eta: '10:05', onTime: 'Late 40m', stops: 2, truck: 'ext_tr_884', equipment: 'TRK-884', equipmentType: 'Reefer' },
    { id: 'ef-58d4e22', route: 'R-2603', origin: 'Little Rock, AR', dest: 'Memphis, TN', miles: 840, income: 900, status: 'Booked', pickup: '07/30/2026', pickupTime: '09:00 - 13:00', delivery: '07/31/2026', deliveryTime: '10:00 - 14:00', customer: 'Nestlé', eta: '--', onTime: '--', stops: 1, truck: 'ext_tr_884', equipment: 'TRK-884', equipmentType: 'Reefer' },
    { id: 'ef-c1290fb', route: 'R-2604', origin: 'Phoenix, AZ', dest: 'Albuquerque, NM', miles: 420, income: 1050, status: 'Delivered', pickup: '07/01/2026', pickupTime: '06:00 - 10:00', delivery: '07/02/2026', deliveryTime: '08:00 - 12:00', customer: 'PepsiCo', eta: '11:20', onTime: 'On time', stops: 1, truck: 'ext_tr_077', equipment: 'TRK-077', equipmentType: 'Reefer' },
    { id: 'ef-b7743d5', route: 'R-2604', origin: 'Albuquerque, NM', dest: 'Kansas City, MO', miles: 790, income: 2100, status: 'In Transit', pickup: '07/22/2026', pickupTime: '07:00 - 11:00', delivery: '07/23/2026', deliveryTime: '09:00 - 13:00', customer: 'Tyson', eta: '12:48', onTime: 'On time', stops: 3, truck: 'ext_tr_077', equipment: 'TRK-077', equipmentType: 'Reefer' },
    { id: 'ef-a0f6612', route: 'R-2604', origin: 'Kansas City, MO', dest: 'Columbus, OH', miles: 640, income: 1690, status: 'Dispatched', pickup: '08/02/2026', pickupTime: '05:00 - 09:00', delivery: '08/03/2026', deliveryTime: '10:00 - 14:00', customer: 'Cardinal', eta: '--', onTime: '--', stops: 2, truck: 'ext_tr_077', equipment: 'TRK-077', equipmentType: 'Reefer' },
    { id: 'ef-e3d1908', route: 'R-2604', origin: 'Columbus, OH', dest: 'Newark, NJ', miles: 552, income: 1580, status: 'Unbooked', pickup: '08/08/2026', pickupTime: '08:00 - 12:00', delivery: '08/09/2026', deliveryTime: '06:00 - 10:00', customer: '--', eta: '--', onTime: '--', stops: 1, truck: 'ext_tr_077', equipment: 'TRK-077', equipmentType: 'Reefer' },
    { id: 'ef-cc80f47', route: 'R-2605', origin: 'Fresno, CA', dest: 'Las Vegas, NV', miles: 410, income: 1240, status: 'Unbooked', pickup: '07/01/2026', pickupTime: '04:00 - 08:00', delivery: '07/02/2026', deliveryTime: '07:00 - 11:00', customer: '--', eta: '--', onTime: '--', stops: 1, truck: '--', equipment: 'TRK-310', equipmentType: 'Reefer' },
    { id: 'ef-38a5c6e', route: 'R-2605', origin: 'Las Vegas, NV', dest: 'Salt Lake City, UT', miles: 1180, income: 2980, status: 'Unbooked', pickup: '07/04/2026', pickupTime: '06:00 - 10:00', delivery: '07/05/2026', deliveryTime: '12:00 - 16:00', customer: '--', eta: '--', onTime: '--', stops: 2, truck: '--', equipment: 'TRK-310', equipmentType: 'Reefer' },
    { id: 'ef-70e2d13', route: 'R-2605', origin: 'Salt Lake City, UT', dest: 'Denver, CO', miles: 1680, income: 2577, status: 'Unbooked', pickup: '07/06/2026', pickupTime: '09:00 - 13:00', delivery: '07/07/2026', deliveryTime: '08:00 - 12:00', customer: '--', eta: '--', onTime: '--', stops: 1, truck: '--', equipment: 'TRK-310', equipmentType: 'Reefer' },
    { id: 'ef-91ffb08', route: '', origin: 'Savannah, GA', dest: 'Jacksonville, FL', miles: 140, income: 610, status: 'Paid', pickup: '06/22/2026', pickupTime: '07:00 - 11:00', delivery: '06/22/2026', deliveryTime: '14:00 - 18:00', customer: 'Publix', eta: '15:02', onTime: 'On time', stops: 1, truck: 'ext_tr_311', equipment: 'TRK-311', equipmentType: 'Van' },
    { id: 'ef-4b6a2c9', route: 'R-2606', origin: 'Jacksonville, FL', dest: 'Tampa, FL', miles: 200, income: 720, status: 'Invoiced', pickup: '06/24/2026', pickupTime: '08:00 - 12:00', delivery: '06/24/2026', deliveryTime: '16:00 - 20:00', customer: 'Publix', eta: '17:30', onTime: 'On time', stops: 1, truck: 'ext_tr_311', equipment: 'TRK-311', equipmentType: 'Van' },
    { id: 'ef-05fa8b1', route: 'R-2606', origin: 'Tampa, FL', dest: 'Savannah, GA', miles: 1142, income: 1980, status: 'Canceled', pickup: '06/26/2026', pickupTime: '06:00 - 10:00', delivery: '06/28/2026', deliveryTime: '09:00 - 13:00', customer: 'Publix', eta: '--', onTime: '--', stops: 2, truck: 'ext_tr_311', equipment: 'TRK-311', equipmentType: 'Van' }
  ];

  const LOAD_TABS = ['All Loads', 'On The Road', 'Offer', 'Booked', 'Assigned', 'Dispatched', 'In Transit', 'Delivered', 'Invoiced', 'Paid', 'Canceled'];
  const ROUTE_TABS = ['All', 'In progress', 'Planned', 'Completed'];

  // Column catalog: key, label, width(px). Order here is only the DEFAULT order —
  // actual render order/visibility is driven by state.columnOrder / state.hiddenCols.
  const LOAD_COLS_DEFS = [
    { key: 'id', label: 'Load ID', width: 105 },
    { key: 'status', label: 'Status', width: 100 },
    { key: 'route', label: 'Related route', width: 170 },
    { key: 'origin', label: 'Origin', width: 115 },
    { key: 'dest', label: 'Destination', width: 115 },
    { key: 'miles', label: 'Distance', width: 85 },
    { key: 'pickup', label: 'Pickup date', width: 110 },
    { key: 'delivery', label: 'Delivery date', width: 110 },
    { key: 'onTime', label: 'On Time', width: 80 },
    { key: 'income', label: 'Income', width: 110 },
    { key: 'driver', label: 'Driver', width: 110 },
    { key: 'truck', label: 'Unit', width: 105 },
    { key: 'equipment', label: 'Trailer', width: 100 },
    { key: 'equipmentType', label: 'Equipment type', width: 100 },
    { key: 'stops', label: 'Stops count', width: 70 },
    { key: 'customer', label: 'Customer', width: 120 }
  ];
  const LOAD_COLS_BY_KEY = {};
  LOAD_COLS_DEFS.forEach(c => { LOAD_COLS_BY_KEY[c.key] = c; });

  // Route card columns: 'route' (identity: name + dates) stays first by default.
  const ROUTE_COLS_DEFS = [
    { key: 'driver', label: 'Driver', width: 150 },
    { key: 'unit', label: 'Unit', width: 90 },
    { key: 'route', label: 'Route name', width: 130 },
    { key: 'route_span', label: 'Route plan', width: 190 },
    { key: 'status', label: 'Status', width: 110 },
    { key: 'health', label: 'Health', width: 120 },
    { key: 'lanes', label: 'Lanes', width: 'minmax(160px, 1fr)' },
    { key: 'equipmentType', label: 'Equipment type', width: 110 },
    { key: 'income', label: 'Income', width: 130 },
    { key: 'miles', label: 'Total miles', width: 90 },
    { key: 'trailer', label: 'Trailer', width: 90 },
    { key: 'dispatcher', label: 'Dispatcher', width: 140 }
  ];
  const ROUTE_COLS_BY_KEY = {};
  ROUTE_COLS_DEFS.forEach(c => { ROUTE_COLS_BY_KEY[c.key] = c; });
  const ROUTE_SORT_KEY = { route: 'name', route_span: 'name', status: 'status', health: 'healthScore', lanes: 'laneCount', income: 'income', miles: 'miles', driver: 'driver', trailer: 'trailer', unit: 'unit', dispatcher: 'dispatcher', equipmentType: 'equipmentType' };

  // ---------------------------------------------------------------------
  // Generic "Filter" fields (field picker -> operator + value -> Apply)
  // ---------------------------------------------------------------------
  const LOAD_STATUS_OPTIONS = ['Offer', 'Booked', 'Assigned', 'Dispatched', 'In Transit', 'Delivered', 'Invoiced', 'Paid', 'Canceled', 'Unbooked'];
  const ON_TIME_OPTIONS = ['On time', 'Late'];
  const ROUTE_STATUS_OPTIONS = ['In progress', 'Planned', 'Completed'];

  const LOAD_EQUIPMENT_OPTIONS = ['Reefer', 'Van', 'Flatbed'];
  const LOAD_FIELDS = [
    { key: 'id', label: 'Load ID', type: 'text' },
    { key: 'status', label: 'Status', type: 'enum', options: LOAD_STATUS_OPTIONS },
    { key: 'route', label: 'Related route', type: 'text' },
    { key: 'origin', label: 'Origin', type: 'text' },
    { key: 'dest', label: 'Destination', type: 'text' },
    { key: 'miles', label: 'Distance (mi)', type: 'number' },
    { key: 'pickup', label: 'Pickup date', type: 'date' },
    { key: 'delivery', label: 'Delivery date', type: 'date' },
    { key: 'onTime', label: 'On Time', type: 'enum', options: ON_TIME_OPTIONS },
    { key: 'income', label: 'Income', type: 'number' },
    { key: 'driver', label: 'Driver', type: 'text_identity' },
    { key: 'truck', label: 'Unit', type: 'text_identity' },
    { key: 'equipment', label: 'Trailer', type: 'text_identity' },
    { key: 'equipmentType', label: 'Equipment type', type: 'enum', options: LOAD_EQUIPMENT_OPTIONS },
    { key: 'stops', label: 'Stops count', type: 'number' },
    { key: 'customer', label: 'Customer', type: 'text' }
  ];
  const LOAD_FIELDS_BY_KEY = {};
  LOAD_FIELDS.forEach(f => { LOAD_FIELDS_BY_KEY[f.key] = f; });

  const ROUTE_HEALTH_OPTIONS = ['Critical', 'Attention', 'Healthy'];
  const ROUTE_EQUIPMENT_OPTIONS = ['Reefer', 'Van', 'Flatbed'];
  const ROUTE_FIELDS = [
    { key: 'name', label: 'Route name', type: 'text' },
    { key: 'health', label: 'Health', type: 'enum', options: ROUTE_HEALTH_OPTIONS },
    { key: 'dateStart', label: 'Start date', type: 'date' },
    { key: 'dateEnd', label: 'End date', type: 'date' },
    { key: 'origin', label: 'Origin', type: 'text' },
    { key: 'destination', label: 'Destination', type: 'text' },
    { key: 'driver', label: 'Driver', type: 'text_identity' },
    { key: 'trailer', label: 'Trailer', type: 'text_identity' },
    { key: 'unit', label: 'Unit', type: 'text_identity' },
    { key: 'dispatcher', label: 'Dispatcher', type: 'text_identity' },
    { key: 'equipmentType', label: 'Equipment type', type: 'enum', options: ROUTE_EQUIPMENT_OPTIONS },
    { key: 'miles', label: 'Total miles', type: 'number' },
    { key: 'income', label: 'Income', type: 'number' }
  ];
  const ROUTE_FIELDS_BY_KEY = {};
  ROUTE_FIELDS.forEach(f => { ROUTE_FIELDS_BY_KEY[f.key] = f; });

  const OPERATORS = {
    text: [{ v: 'contains', label: 'contains' }, { v: 'is', label: 'is' }, { v: 'is_not', label: 'is not' }],
    text_identity: [{ v: 'is_in', label: 'is in' }, { v: 'not_in', label: 'is not' }],
    number: [{ v: 'eq', label: 'is' }, { v: 'neq', label: 'is not' }, { v: 'gt', label: 'greater than' }, { v: 'lt', label: 'less than' }, { v: 'between', label: 'between' }],
    date: [{ v: 'between', label: 'between' }, { v: 'before', label: 'before' }, { v: 'after', label: 'after' }, { v: 'today', label: 'today' }],
    enum: [{ v: 'is', label: 'is' }, { v: 'is_not', label: 'is not' }, { v: 'in', label: 'in' }, { v: 'not_in', label: 'not in' }]
  };
  function defaultOperator(type) { return (OPERATORS[type] || OPERATORS.text)[0].v; }

  const LOAD_FIELD_GETTERS = {
    id: l => l.id, status: l => l.status, route: l => routeOf(l.route).name,
    origin: l => l.origin, dest: l => l.dest, miles: l => l.miles,
    pickup: l => dayKey(l.pickup), delivery: l => dayKey(l.delivery),
    onTime: l => l.onTime, income: l => l.income, driver: l => routeOf(l.route).driver,
    truck: l => l.truck, equipment: l => l.equipment,
    equipmentType: l => l.equipmentType || '',
    stops: l => l.stops, customer: l => l.customer
  };
  function keyFromPretty(s) {
    const m = s.match(/^(\w{3}) (\d{2}) \/ (\d{4})$/);
    if (!m) return '';
    const mi = MON.indexOf(m[1]) + 1;
    return String(m[3]) + String(mi).padStart(2, '0') + m[2];
  }
  const ROUTE_FIELD_GETTERS = {
    name: r => r.name, status: r => r.status,
    health: r => { const h = routeStats(r).healthScore; return h === 0 ? 'Critical' : h === 1 ? 'Attention' : 'Healthy'; },
    dateStart: r => keyFromPretty(r.dateStart), dateEnd: r => keyFromPretty(r.dateEnd),
    origin: r => { const ls = loadsOf(r.id); return ls.length ? ls[0].origin : ''; },
    destination: r => { const ls = loadsOf(r.id); return ls.length ? ls[ls.length - 1].dest : ''; },
    driver: r => r.driver, trailer: r => r.trailer, unit: r => r.unit, dispatcher: r => r.dispatcher,
    equipmentType: r => r.equipmentType || '',
    miles: r => routeStats(r).miles, income: r => routeStats(r).income
  };

  function matchesFilter(type, value, filter) {
    const op = filter.operator;
    if (type === 'text') {
      const needle = String(filter.value || '').toLowerCase();
      if (!needle) return true;
      const v = String(value || '').toLowerCase();
      if (op === 'contains') return v.includes(needle);
      if (op === 'is') return v === needle;
      if (op === 'is_not') return v !== needle;
      return true;
    }
    if (type === 'text_identity') {
      const raw = String(filter.value || '');
      if (!raw.trim()) return true;
      const v = String(value || '').toLowerCase();
      const list = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
      if (list.length === 0) return true;
      if (op === 'is' || op === 'in' || op === 'is_in') return list.includes(v);
      if (op === 'is_not') return !list.includes(v);
      return true;
    }
    if (type === 'number') {
      const v = Number(value);
      if (op === 'between') {
        if (filter.value === '' && filter.value2 === '') return true;
        const lo = filter.value === '' || filter.value === undefined ? -Infinity : Number(filter.value);
        const hi = filter.value2 === '' || filter.value2 === undefined ? Infinity : Number(filter.value2);
        return v >= lo && v <= hi;
      }
      if (filter.value === '' || filter.value === undefined) return true;
      const n = Number(filter.value);
      if (op === 'eq') return v === n;
      if (op === 'neq') return v !== n;
      if (op === 'gt') return v > n;
      if (op === 'lt') return v < n;
      return true;
    }
    if (type === 'date') {
      if (op === 'between') {
        if (!filter.value && !filter.value2) return true;
        const lo = filter.value ? isoToKey(filter.value) : '';
        const hi = filter.value2 ? isoToKey(filter.value2) : '99999999';
        return (!lo || value >= lo) && value <= hi;
      }
      if (!filter.value) return true;
      const k = isoToKey(filter.value);
      if (op === 'on') return value === k;
      if (op === 'before') return value < k;
      if (op === 'after') return value > k;
      if (op === 'today') { const t = new Date(); const tk = String(t.getFullYear()) + String(t.getMonth()+1).padStart(2,'0') + String(t.getDate()).padStart(2,'0'); return value === tk; }
      return true;
    }
    if (type === 'enum') {
      if (!filter.value) return true;
      if (op === 'in' || op === 'not_in') {
        const list = String(filter.value).split(',').map(s => s.trim()).filter(Boolean);
        if (!list.length) return true;
        const isLate = list.includes('Late');
        const matched = list.some(item => item === 'Late' ? String(value).startsWith('Late') : value === item);
        return op === 'in' ? matched : !matched;
      }
      const isLate = filter.value === 'Late';
      const match = isLate ? String(value).startsWith('Late') : value === filter.value;
      if (op === 'is') return match;
      if (op === 'is_not') return !match;
      return true;
    }
    return true;
  }
  function operatorLabel(type, op) {
    const found = (OPERATORS[type] || []).find(o => o.v === op);
    return found ? found.label : op;
  }
  function statusDisplayLabel(v) { return v === 'In Transit' ? 'On The Road' : v; }
  function filterChipLabel(field, filter) {
    const opLabel = operatorLabel(field.type, filter.operator);
    if (filter.operator === 'today') return field.label + ' is today';
    if (filter.operator === 'between') return field.label + ' ' + opLabel + ' ' + (filter.value || '…') + ' - ' + (filter.value2 || '…');
    if (field.type === 'text' || field.type === 'text_identity') return field.label + ' ' + opLabel + ' "' + filter.value + '"';
    if (field.type === 'enum') {
      const displayVal = filter.key === 'status' ? filter.value.split(',').map(statusDisplayLabel).join(',') : filter.value;
      if (filter.operator === 'in' || filter.operator === 'not_in') return field.label + ' ' + opLabel + ' ' + displayVal;
      return field.label + (filter.operator === 'is_not' ? ' ≠ ' : ': ') + displayVal;
    }
    return field.label + ' ' + opLabel + ' ' + filter.value;
  }

  const STATUS = {
    'Offer': ['rgba(251,179,3,.14)', '#FBB303'],
    'Booked': ['rgba(39,167,103,.14)', '#3FC281'],
    'Assigned': ['rgba(43,67,83,.7)', '#C9CED2'],
    'Dispatched': ['rgba(43,67,83,.7)', '#C9CED2'],
    'In Transit': ['rgba(123,203,203,.16)', '#7BCBCB'],
    'Delivered': ['rgba(39,167,103,.2)', '#6BD59E'],
    'Invoiced': ['rgba(213,241,226,.12)', '#D5F1E2'],
    'Paid': ['rgba(39,167,103,.28)', '#D5F1E2'],
    'Canceled': ['rgba(235,67,67,.14)', '#EB4343'],
    'Unbooked': ['rgba(255,255,255,.06)', '#8B939B'],
    'In progress': ['rgba(123,203,203,.16)', '#7BCBCB'],
    'Planned': ['rgba(251,179,3,.14)', '#FBB303'],
    'Completed': ['rgba(39,167,103,.2)', '#6BD59E']
  };

  const ACTIVE = '#27A767', MUTED = '#8B939B';
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // ---------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------
  const state = {
    view: 'routes',
    loadTab: 'All Loads',
    routeTab: 'All',
    loadQuery: '',
    routeQuery: '',
    loadSort: { key: 'pickup', dir: 'asc' },
    routeSort: { key: 'dateStart', dir: 'asc' },
    expanded: null,
    page: 1,
    rows: 10,
    routePage: 1,
    routeRows: 10,
    routeFilterIds: null,
    openLoad: null,
    openRoute: null,
    drawerTab: 'Load',
    columnOrder: LOAD_COLS_DEFS.map(c => c.key),
    hiddenCols: new Set(),
    routeColumnOrder: ROUTE_COLS_DEFS.map(c => c.key),
    routeHiddenCols: new Set(),
    openPopover: null, // null | 'loadColumns' | 'routeColumns' | 'filter'
    openDatePicker: null, // null | 'pickup' | 'delivery'
    filterPanel: null, // null | {step:'fields'} | {step:'edit', key, operator, value, value2}
    loadFilters: [],
    routeFilters: [],
    showCreateRoute: false,
    detailPnlUnit: 'total',
    detailOpsUnit: 'total',
    detailLanesExpanded: false,
    detailMapHidden: false,
    laneMapOrigin: null,
    detailTab: 'plan',        // 'plan' | 'control' | 'report'
    controlMode: 'route',     // 'route' | 'lane'
    controlLane: null,        // selected load index within the route (lane mode)
    controlNearbyStops: true
  };
  let CR_ROUTE_COUNTER = 2700;

  function setState(patch) { Object.assign(state, patch); render(); }

  // ---------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------
  function money(n) { return '$' + n.toLocaleString('en-US'); }
  function initials(name) {
    if (!name || name === 'Unassigned') return 'UU';
    const p = name.trim().split(/\s+/);
    return (p.length > 1 ? p[0][0] + p[1][0] : p[0].slice(0, 2)).toUpperCase();
  }
  function avatarColor(name) {
    const pool = ['#7BCBCB', '#3FC281', '#FBB303', '#B48CE0', '#EB8A6B', '#6BD59E'];
    if (!name || name === 'Unassigned') return '#B48CE0';
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 997;
    return pool[h % pool.length];
  }
  function dayKey(d) { const [m, dd, y] = d.split('/'); return y + m + dd; }
  function isoToKey(iso) { return iso ? iso.replace(/-/g, '') : ''; }
  function routeOf(id) { return ROUTES.find(r => r.id === id) || { id: '', name: 'No route', driver: 'Unassigned', trailer: '--', unit: '--', dispatcher: '--', status: '--', dateStart: '--', dateEnd: '--', equipment: '--' }; }
  function loadsOf(id) { return LOADS.filter(l => l.route === id); }
  function routeDhMiles(r) {
    const ls = loadsOf(r.id);
    return ls.reduce((a, _, i) => a + 30 + ((i * 17) % 45), 0);
  }
  function routeStats(r) {
    const ls = loadsOf(r.id);
    const miles = ls.reduce((a, l) => a + l.miles, 0);
    const income = ls.reduce((a, l) => a + l.income, 0);
    const dh = routeDhMiles(r);
    const totalMiles = miles + dh;
    const effectiveRpm = totalMiles ? income / totalMiles : 0;
    const loadedRpm = miles ? income / miles : 0;
    const missedSavings = (r.routeDeviation || 0) + (r.fuelExcess || 0);
    const dhPct = totalMiles ? dh / totalMiles * 100 : 0;
    let healthScore;
    if (effectiveRpm < 1.5 || dhPct > 25 || ls.some(l => l.status === 'Unbooked' || l.status === 'Canceled')) healthScore = 0;
    else if (effectiveRpm < 2.0 || dhPct > 15 || ls.some(l => l.status === 'Offer')) healthScore = 1;
    else healthScore = 2;
    const estimatedCost = totalMiles * 2.4;
    const profitPerMile = totalMiles ? (income - estimatedCost) / totalMiles : 0;
    return { loads: ls, miles, income, rpm: loadedRpm, dhMiles: dh, totalMiles, effectiveRpm, loadedRpm, profitPerMile, missedSavings, routeDeviation: r.routeDeviation || 0, fuelExcess: r.fuelExcess || 0, planAdherence: r.planAdherence || 100, healthScore, dhPct };
  }
  function cmp(a, b, dir) {
    let r;
    if (typeof a === 'number' && typeof b === 'number') r = a - b;
    else r = String(a).localeCompare(String(b));
    return dir === 'asc' ? r : -r;
  }
  function sortBy(which, key) {
    if (!key) return;
    const cur = state[which];
    const dir = cur.key === key && cur.dir === 'asc' ? 'desc' : 'asc';
    setState({ [which]: { key, dir }, page: 1 });
  }
  function prettyDate(d) { const [m, dd, y] = d.split('/'); return MON[Number(m) - 1] + ' ' + dd + ' / ' + y; }
  function drive(mi) {
    const min = Math.round(mi / 55 * 60);
    return min < 60 ? min + 'min' : Math.floor(min / 60) + 'h ' + (min % 60) + 'min';
  }

  function visibleLoads() {
    const s = state, q = s.loadQuery.trim().toLowerCase();
    let out = LOADS.slice();
    if (s.routeFilterIds) out = out.filter(l => s.routeFilterIds.includes(l.route));
    if (s.loadTab === 'On The Road') out = out.filter(l => l.status === 'In Transit' || l.status === 'Dispatched');
    else if (s.loadTab !== 'All Loads') out = out.filter(l => l.status === s.loadTab);
    if (q) out = out.filter(l => [l.id, l.origin, l.dest, l.customer, l.route, routeOf(l.route).name].join(' ').toLowerCase().includes(q));
    s.loadFilters.forEach(f => {
      const field = LOAD_FIELDS_BY_KEY[f.key], get = LOAD_FIELD_GETTERS[f.key];
      out = out.filter(l => matchesFilter(field.type, get(l), f));
    });
    const { key, dir } = s.loadSort;
    out.sort((a, b) => {
      if (key === 'pickup' || key === 'delivery') return cmp(dayKey(a[key]), dayKey(b[key]), dir);
      if (key === 'driver') return cmp(routeOf(a.route).driver, routeOf(b.route).driver, dir);
      if (key === 'route') return cmp(routeOf(a.route).name, routeOf(b.route).name, dir);
      return cmp(a[key], b[key], dir);
    });
    return out;
  }

  function visibleRoutes() {
    const s = state, q = s.routeQuery.trim().toLowerCase();
    let out = ROUTES.slice();
    if (s.routeTab !== 'All') out = out.filter(r => r.status === s.routeTab);
    if (q) out = out.filter(r => (r.name + ' ' + r.driver + ' ' + r.dispatcher + ' ' + loadsOf(r.id).map(l => l.origin + l.dest).join(' ')).toLowerCase().includes(q));
    s.routeFilters.forEach(f => {
      const field = ROUTE_FIELDS_BY_KEY[f.key], get = ROUTE_FIELD_GETTERS[f.key];
      out = out.filter(r => matchesFilter(field.type, get(r), f));
    });
    const { key, dir } = s.routeSort;
    out.sort((a, b) => {
      const sa = routeStats(a), sb = routeStats(b);
      if (key === 'income') return cmp(sa.income, sb.income, dir);
      if (key === 'miles') return cmp(sa.miles, sb.miles, dir);
      if (key === 'laneCount') return cmp(sa.loads.length, sb.loads.length, dir);
      if (key === 'healthScore') return cmp(sa.healthScore, sb.healthScore, dir);
      if (key === 'dateStart') return cmp(new Date(a.dateStart.replace(/ \/ /g, ' ')).getTime(), new Date(b.dateStart.replace(/ \/ /g, ' ')).getTime(), dir);
      return cmp(a[key], b[key], dir);
    });
    return out;
  }

  function visibleLoadCols() {
    return state.columnOrder.filter(k => !state.hiddenCols.has(k)).map(k => LOAD_COLS_BY_KEY[k]);
  }
  function visibleRouteCols() {
    return state.routeColumnOrder.filter(k => !state.routeHiddenCols.has(k)).map(k => ROUTE_COLS_BY_KEY[k]);
  }

  // ---------------------------------------------------------------------
  // Tiny DOM builder
  // ---------------------------------------------------------------------
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    attrs = attrs || {};
    for (const k in attrs) {
      const v = attrs[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
      else if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'value' && tag === 'input') node.value = v;
      else if (k === 'value' && tag === 'select') node._deferValue = v;
      else if (k === 'checked') node.checked = !!v;
      else if (k === 'draggable') node.setAttribute('draggable', v ? 'true' : 'false');
      else node.setAttribute(k, v);
    }
    (children || []).forEach(c => {
      if (c === null || c === undefined || c === false) return;
      node.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(c) : c);
    });
    if (node._deferValue !== undefined) { node.value = node._deferValue; delete node._deferValue; }
    return node;
  }
  function svg(inner, attrs) {
    const wrap = el('div', { style: { display: 'inline-flex', lineHeight: 0 }, html: inner });
    if (attrs) Object.assign(wrap.style, attrs);
    return wrap.firstChild;
  }
  const ICON = {
    truck: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h3"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>',
    route: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>',
    search: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6B7373" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
    clock: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
    calendar: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path></svg>',
    sortArrows: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2" stroke-linecap="round"><path d="M7 4v16l-3-3M17 20V4l3 3"></path></svg>',
    arrow: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h14m-5-6 6 6-6 6"></path></svg>',
    ship: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2Z"></path><path d="M9 4v14M15 6v14"></path></svg>',
    star: '<svg width="12" height="12" viewBox="0 0 24 24" fill="#FBB303"><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9Z"></path></svg>',
    back: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m6-6-6 6 6 6"></path></svg>',
    plan: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h6l6 12h6"></path><path d="M3 18h6"></path></svg>',
    onroad: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h3"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>',
    report: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6v18h12V7Z"></path><path d="M14 3v4h4"></path><path d="M9 13h6M9 17h4"></path></svg>',
    warn: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FBB303" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg>',
    warnMute: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg>',
    edit: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>',
    columns: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M9 4v16M15 4v16"></path></svg>',
    grip: '<svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor"><circle cx="2.5" cy="2.5" r="1.4"></circle><circle cx="7.5" cy="2.5" r="1.4"></circle><circle cx="2.5" cy="7" r="1.4"></circle><circle cx="7.5" cy="7" r="1.4"></circle><circle cx="2.5" cy="11.5" r="1.4"></circle><circle cx="7.5" cy="11.5" r="1.4"></circle></svg>',
    chevDown: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>',
    chevLeft: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg>',
    funnel: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 9v6l-4 2v-8Z"></path></svg>',
    fieldList: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="4" cy="6" r="1"></circle><circle cx="4" cy="12" r="1"></circle><circle cx="4" cy="18" r="1"></circle><path d="M9 6h11M9 12h11M9 18h11"></path></svg>',
    eye: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    download: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
    save: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>',
    refresh: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>'
  };
  const FIELD_TYPE_ICON = { text: null, text_identity: 'fieldList', date: 'calendar', number: 'fieldList', enum: 'fieldList' };
  function fieldTypeIcon(type) {
    if (type === 'text') return el('span', { style: { display: 'inline-block', width: '13px', textAlign: 'center', fontWeight: '800', fontStyle: 'italic', fontSize: '12px', color: '#8B939B' } }, ['T']);
    return iconEl(FIELD_TYPE_ICON[type] || 'fieldList', { color: '#8B939B' });
  }
  function iconEl(key, style) { return svg(ICON[key], style); }

  function pill(text, bg, fg) {
    return el('span', { style: { display: 'inline-block', padding: '3px 9px', borderRadius: '999px', fontSize: '10.5px', fontWeight: '800', background: bg, color: fg } }, [text]);
  }
  function avatar(name, size) {
    size = size || 22;
    return el('span', {
      style: { display: 'grid', placeItems: 'center', width: size + 'px', height: size + 'px', borderRadius: '999px', fontSize: (size * 0.43) + 'px', fontWeight: '800', color: '#0B131B', background: avatarColor(name), flex: 'none' }
    }, [initials(name)]);
  }

  // ---------------------------------------------------------------------
  // Global popover close-on-outside-click
  // ---------------------------------------------------------------------
  document.addEventListener('click', function (e) {
    if (state.openPopover) {
      const openContainer = document.querySelector('[data-popover="' + state.openPopover + '"]');
      if (openContainer && !openContainer.contains(e.target)) setState({ openPopover: null, filterPanel: null });
    }
    if (state.openDatePicker) {
      const dpContainer = document.querySelector('[data-datepicker="' + state.openDatePicker + '"]');
      if (dpContainer && !dpContainer.contains(e.target)) setState({ openDatePicker: null });
    }
  }, true);

  let dragColKey = null;

  // ---------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------
  const root = document.getElementById('app');

  function render() {
    const _lb = document.getElementById('_ef-lb'); if (_lb) _lb.style.display = 'none';
    document.querySelectorAll('[data-ef-htip]').forEach(function(t){t.remove();});
    root.innerHTML = '';
    const s = state;
    if (s.openRoute) {
      root.appendChild(renderDetail(s.openRoute));
    } else {
      root.appendChild(renderList());
      if (s.openLoad) root.appendChild(renderDrawer(s.openLoad));
    }
    if (s.showCreateRoute) {
      root.appendChild(renderCreateRouteModal());
      window.crInitModal();
    }
    // Lane map modal is managed imperatively via _doRenderLaneMap() — survives re-renders
  }

  window.crCloseModal = function () { var t = document.getElementById('cr-global-tip'); if (t) t.remove(); setState({ showCreateRoute: false }); };

  window.crContinueModal = function () {
    // Read mode
    const modeBtn = document.querySelector('.cr-assign-btn.cr-active');
    const mode = modeBtn ? modeBtn.dataset.mode : 'free';

    // Form values
    const originVal = (document.getElementById('cr-origin-input') || {}).value || '';
    const finalDestVal = (document.getElementById('cr-dest-input') || {}).value || '';
    const routeNameVal = (document.getElementById('cr-route-name') || {}).value || '';

    let trailerType = 'Van';
    if (mode === 'assign' && window.CR_PICKER && window.CR_PICKER.trailer) {
      const trlItem = (window.CR_TRAILER_LIST || []).find(function (t) { return t.id === window.CR_PICKER.trailer; });
      if (trlItem) trailerType = trlItem.type;
    } else {
      const trailerEl = document.getElementById('cr-trailer-select');
      trailerType = (trailerEl && trailerEl.value) ? trailerEl.value : 'Van';
    }

    let driver = 'Unassigned', unit = 'Unassigned';
    if (mode === 'assign' && window.CR_PICKER) {
      if (window.CR_PICKER.cabin) {
        unit = window.CR_PICKER.cabin;
        const cabinItem = (window.CR_CABIN_LIST || []).find(function (c) { return c.id === window.CR_PICKER.cabin; });
        if (cabinItem && cabinItem.driverName) driver = cabinItem.driverName;
      } else if (window.CR_PICKER.driver) {
        const driverItem = (window.CR_DRIVER_LIST || []).find(function (d) { return d.id === window.CR_PICKER.driver; });
        if (driverItem) { driver = driverItem.name; if (driverItem.cabinId) unit = driverItem.cabinId; }
      }
    }

    // Read selected TMS loads
    const tmsLoads = [];
    document.querySelectorAll('.cr-load-card.cr-on').forEach(function (card) {
      const routeTextEl = card.querySelector('.cr-load-route');
      const priceEl = card.querySelector('.cr-load-price');
      const metaEl = card.querySelector('.cr-load-meta');
      if (!routeTextEl || !priceEl) return;
      const txt = routeTextEl.textContent;
      const arrow = txt.indexOf('→');
      const lOrig = arrow >= 0 ? txt.substring(0, arrow).trim() : (originVal || 'Houston, TX');
      const lDest = arrow >= 0 ? txt.substring(arrow + 1).trim() : 'Dallas, TX';
      const income = parseInt(priceEl.textContent.replace(/[$,]/g, '')) || 0;
      const meta = metaEl ? metaEl.textContent : '';
      const miM = meta.match(/(\d+)\s*mi/);
      const miles = miM ? parseInt(miM[1]) : 280;
      tmsLoads.push({ origin: lOrig, dest: lDest, income, miles });
    });

    CR_ROUTE_COUNTER++;
    const newId = 'R-' + CR_ROUTE_COUNTER;
    const CITIES = ['Nashville, TN', 'Birmingham, AL', 'Jackson, MS', 'Baton Rouge, LA',
      'Tulsa, OK', 'Oklahoma City, OK', 'Louisville, KY', 'St. Louis, MO'];
    const newLoads = [];
    let curCity = originVal.trim() || 'Houston, TX';

    // Booked lanes from TMS
    tmsLoads.forEach(function (tl, i) {
      newLoads.push({
        id: 'ef-' + newId + '-' + i,
        route: newId, origin: tl.origin || curCity, dest: tl.dest,
        miles: tl.miles, income: tl.income, status: 'Booked',
        pickup: '07/30/2026', pickupTime: '08:00 - 12:00',
        delivery: '07/31/2026', deliveryTime: '12:00 - 16:00',
        customer: '--', eta: '--', onTime: '--', stops: 1,
        truck: unit !== 'Unassigned' ? unit : '--', equipment: trailerType
      });
      curCity = tl.dest;
    });

    // Fill remaining with Unbooked (always at least 2 unbooked after booked, max 4 total)
    var totalLanes = Math.max(4, tmsLoads.length + 2);
    var unbookedN = totalLanes - tmsLoads.length;
    for (var i = 0; i < unbookedN; i++) {
      var isLast = i === unbookedN - 1;
      var dest = (isLast && finalDestVal.trim()) ? finalDestVal.trim() : CITIES[(tmsLoads.length + i) % CITIES.length];
      newLoads.push({
        id: 'ef-' + newId + '-' + (tmsLoads.length + i),
        route: newId, origin: curCity, dest: dest,
        miles: 300 + ((tmsLoads.length + i) * 87) % 400, income: 0, status: 'Unbooked',
        pickup: '08/0' + (1 + i) + '/2026', pickupTime: '08:00 - 12:00',
        delivery: '08/0' + (2 + i) + '/2026', deliveryTime: '12:00 - 16:00',
        customer: '--', eta: '--', onTime: '--', stops: 1,
        truck: unit !== 'Unassigned' ? unit : '--', equipment: trailerType
      });
      curCity = dest;
    }

    const endCity = curCity.split(',')[0].replace(/\s/g, '_');
    const startCity = (originVal.split(',')[0] || 'New').replace(/\s/g, '_');
    const newRoute = {
      id: newId,
      name: routeNameVal || (startCity + '_' + endCity + '_2026-07-30'),
      dateStart: 'Jul 30 / 2026', dateEnd: 'Aug 03 / 2026',
      status: 'Planned', driver: driver, unit: unit, trailer: trailerType,
      dispatcher: 'karen', routeDeviation: 0, fuelExcess: 0, planAdherence: 100
    };

    // Capture ignored (unchecked) TMS loads for rebuild cycle button
    var _ignoredForRebuild = [];
    document.querySelectorAll('.cr-load-card:not(.cr-on)').forEach(function(card) {
      var routeTextEl = card.querySelector('.cr-load-route');
      var priceEl = card.querySelector('.cr-load-price');
      var metaEl = card.querySelector('.cr-load-meta');
      if (!routeTextEl || !priceEl) return;
      var txt = routeTextEl.textContent;
      var arrow = txt.indexOf('→');
      var lOrig = arrow >= 0 ? txt.substring(0, arrow).trim() : (originVal || 'Houston, TX');
      var lDest = arrow >= 0 ? txt.substring(arrow + 1).trim() : 'Dallas, TX';
      var inc = parseInt(priceEl.textContent.replace(/[$,]/g, '')) || 0;
      var meta = metaEl ? metaEl.textContent : '';
      var miM = meta.match(/(\d+)\s*mi/); var miles = miM ? parseInt(miM[1]) : 280;
      var pkM = meta.match(/Pickup\s+([\d\/]+)/); var pickup = pkM ? pkM[1] : '07/31/2026';
      var cuM = meta.match(/·\s*([A-Za-z][A-Za-z\s]+?)\s*·/g);
      var customer = cuM && cuM[1] ? cuM[1].replace(/·/g,'').trim() : '--';
      _ignoredForRebuild.push({ origin: lOrig, dest: lDest, miles, income: inc, pickup, customer, equipment: trailerType });
    });
    if (_ignoredForRebuild.length > 0) _rebuildLoads[newId] = _ignoredForRebuild;

    ROUTES.unshift(newRoute);
    newLoads.forEach(function (l) { LOADS.push(l); });
    if (finalDestVal.trim()) _pinnedFinalDest[newId] = finalDestVal.trim();

    // Close form modal and show loading overlay while route "initializes"
    setState({ showCreateRoute: false });
    _showCreatingRoute(tmsLoads.length > 0, function () {
      setState({ openRoute: newId, view: 'routes', detailLanesExpanded: false, detailTab: 'plan', controlMode: 'route', controlLane: null });
      if (tmsLoads.length === 0 && newLoads.length > 0) {
        setTimeout(function() { _lmSt.origin = newLoads[0].origin; _doRenderLaneMap(); }, 80);
      }
    });
  };

  window.CR_UNITS = {
    'TRK-1042': { city: 'Houston, TX', driver: 'James Whitmore', hasLoads: true, trailerId: 'T454', trailerType: 'Reefer' },
    'TRK-2078': { city: 'Dallas, TX', driver: 'Carlos Medina', hasLoads: false, trailerId: 'T112', trailerType: 'Van' },
    'TRK-3390': { city: 'Laredo, TX', driver: 'Ava Brooks', hasLoads: false, trailerId: 'T289', trailerType: 'Van' }
  };

  window.CR_DRIVER_LIST = [
    { id: 'D001', name: 'Jeremy Davis',   avatar: 'J', color: '#27A767', cabinId: '5017', cabinType: 'diesel', trailerId: 'TR-11047', trailerType: 'reefer'  },
    { id: 'D003', name: 'Ricardo Lopez',  avatar: 'R', color: '#8B5CF6', cabinId: '2201',  cabinType: 'diesel', trailerId: 'TR-44821', trailerType: 'van' },
    { id: 'D002', name: 'Michael Murray', avatar: 'M', color: '#F97316', cabinId: null,        cabinType: null,     trailerId: null,     trailerType: null      },
    { id: 'D004', name: 'Sarah Chen',     avatar: 'S', color: '#3B82F6', cabinId: null,        cabinType: null,     trailerId: null,     trailerType: null      }
  ];
  window.CR_CABIN_LIST = [
    { id: '5017', type: 'diesel', driverId: 'D001', driverName: 'Jeremy Davis',  driverAvatar: 'J', trailerId: 'TR-11047', trailerType: 'reefer',  city: 'Memphis, TN', hasLoads: true  },
    { id: '2201',  type: 'diesel', driverId: 'D003', driverName: 'Ricardo Lopez', driverAvatar: 'R', trailerId: 'TR-44821', trailerType: 'van', city: 'Houston, TX', hasLoads: false },
    { id: '2058',      type: 'diesel', driverId: null,   driverName: null,             driverAvatar: null,trailerId: null,     trailerType: null,      city: 'Dallas, TX',  hasLoads: false },
    { id: '5016',      type: 'diesel', driverId: null,   driverName: null,             driverAvatar: null,trailerId: null,     trailerType: null,      city: 'Laredo, TX',  hasLoads: false }
  ];
  window.CR_TRAILER_LIST = [
    { id: 'TR-11047', type: 'reefer',  driverId: 'D001', driverName: 'Jeremy Davis',  driverAvatar: 'J', cabinId: '5017', cabinType: 'diesel' },
    { id: 'TR-44821', type: 'van', driverId: 'D003', driverName: 'Ricardo Lopez', driverAvatar: 'R', cabinId: '2201',  cabinType: 'diesel' },
    { id: 'TR-11026', type: 'reefer',  driverId: null,   driverName: null,            driverAvatar: null,cabinId: null,        cabinType: null     },
    { id: 'TR-11031', type: 'reefer',  driverId: null,   driverName: null,            driverAvatar: null,cabinId: null,        cabinType: null     }
  ];

  window.CR_PICKER = { open: null, driver: null, cabin: null, trailer: null };

  const _crChainIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
  const _crPersonIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';
  const _crBrokenIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><line x1="4" y1="4" x2="20" y2="20" stroke-width="2"/></svg>';
  const _crChevronIcon = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4l4 4 4-4"/></svg>';

  window.crOpenPicker = function (type) {
    if (window.CR_PICKER.open === type) { window.crClosePicker(); return; }
    window.crClosePicker();
    const btn = document.getElementById('cr-' + type + '-btn');
    const root = document.getElementById('cr-root');
    if (!btn || !root) return;
    const panel = document.createElement('div');
    panel.id = 'cr-picker-panel';
    panel.className = 'cr-picker-panel';
    const bRect = btn.getBoundingClientRect();
    const rRect = root.getBoundingClientRect();
    const panelW = Math.min(Math.max(300, bRect.width), rRect.width - 16);
    const panelL = Math.min(Math.max(0, bRect.left - rRect.left), rRect.width - panelW - 8);
    panel.style.top   = (bRect.bottom - rRect.top + 4) + 'px';
    panel.style.left  = panelL + 'px';
    panel.style.width = panelW + 'px';
    root.appendChild(panel);
    window.CR_PICKER.open = type;
    btn.classList.add('cr-open');
    window.crRenderPickerPanel(type, '');
    var inp = panel.querySelector('.cr-picker-search-input');
    if (inp) inp.focus();
    var modalBody = root.querySelector('.cr-modal-body');
    if (modalBody) {
      window.CR_PICKER._scrollEl = modalBody;
      window.CR_PICKER._scrollHandler = function () {
        var p = document.getElementById('cr-picker-panel');
        var b = document.getElementById('cr-' + type + '-btn');
        var r = document.getElementById('cr-root');
        if (!p || !b || !r) { window.crClosePicker(); return; }
        var bR = b.getBoundingClientRect();
        var rR = r.getBoundingClientRect();
        if (bR.bottom < rR.top || bR.top > rR.bottom) { window.crClosePicker(); return; }
        p.style.top = (bR.bottom - rR.top + 4) + 'px';
      };
      modalBody.addEventListener('scroll', window.CR_PICKER._scrollHandler, { passive: true });
    }
  };

  window.crClosePicker = function () {
    var panel = document.getElementById('cr-picker-panel');
    if (panel) panel.remove();
    if (window.CR_PICKER.open) {
      var btn = document.getElementById('cr-' + window.CR_PICKER.open + '-btn');
      if (btn) btn.classList.remove('cr-open');
      if (window.CR_PICKER._scrollHandler && window.CR_PICKER._scrollEl) {
        window.CR_PICKER._scrollEl.removeEventListener('scroll', window.CR_PICKER._scrollHandler);
        window.CR_PICKER._scrollHandler = null;
        window.CR_PICKER._scrollEl = null;
      }
    }
    window.CR_PICKER.open = null;
  };

  window.crResetPickers = function () {
    window.CR_PICKER.driver = null;
    window.CR_PICKER.cabin  = null;
    window.CR_PICKER.trailer = null;
    ['driver','cabin','trailer'].forEach(function (t) {
      var btn = document.getElementById('cr-' + t + '-btn');
      if (!btn) return;
      var tx = btn.querySelector('.cr-picker-btn-text');
      if (!tx) return;
      tx.textContent = t === 'driver' ? 'Select a driver' : t === 'cabin' ? 'Select unit...' : 'Select a trailer';
      tx.classList.remove('cr-has-value');
    });
  };

  window.crRenderPickerPanel = function (type, query) {
    var panel = document.getElementById('cr-picker-panel');
    if (!panel) return;
    var q = (query || '').toLowerCase().trim();

    var list = [];
    if (type === 'driver') {
      list = window.CR_DRIVER_LIST.filter(function (d) { return !q || d.name.toLowerCase().includes(q); });
    } else if (type === 'cabin') {
      list = window.CR_CABIN_LIST.filter(function (c) { return !q || c.id.toLowerCase().includes(q) || (c.driverName||'').toLowerCase().includes(q); });
    } else {
      list = window.CR_TRAILER_LIST.filter(function (t) { return !q || t.id.toLowerCase().includes(q) || (t.driverName||'').toLowerCase().includes(q); });
    }

    function cap(s) { return s ? s[0].toUpperCase() + s.slice(1) : ''; }

    var _iUnit = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>';
    var _iTrl  = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="20" height="13" rx="1"/><line x1="8" y1="5" x2="8" y2="18"/><line x1="15" y1="5" x2="15" y2="18"/><circle cx="6" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>';
    var _iDrv  = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';
    var _iLink = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
    var _iAvTrl= '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="20" height="13" rx="1"/><line x1="8" y1="5" x2="8" y2="18"/><line x1="15" y1="5" x2="15" y2="18"/><circle cx="6" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>';

    function row(item) {
      var isLinked, displayName, tagsHtml, avContent, avExtra = '';

      if (type === 'driver') {
        isLinked = !!item.cabinId;
        displayName = item.name;
        avContent = item.avatar || '?';
        avExtra = ' style="background:' + (item.color || '#3d4f5c') + ';color:#0B131B;"';
        tagsHtml = isLinked
          ? '<span class="cr-ptag">' + _iUnit + ' ' + item.cabinId + '</span>' +
            '<span class="cr-ptag">' + _iTrl  + ' ' + item.trailerId + '</span>'
          : '';
      } else if (type === 'cabin') {
        isLinked = !!item.driverId;
        displayName = item.id + ' &middot; ' + cap(item.type);
        avContent = _iUnit;
        avExtra = ' style="background:rgba(255,255,255,.07);color:var(--cr-text-dim);"';
        tagsHtml = isLinked
          ? '<span class="cr-ptag">' + _iDrv  + ' ' + item.driverName + '</span>' +
            '<span class="cr-ptag">' + _iTrl  + ' ' + item.trailerId + '</span>'
          : '';
      } else {
        isLinked = !!item.driverId;
        displayName = item.id + ' &middot; ' + cap(item.type);
        avContent = _iAvTrl;
        avExtra = ' style="background:rgba(255,255,255,.07);color:var(--cr-text-dim);"';
        tagsHtml = isLinked
          ? '<span class="cr-ptag">' + _iDrv  + ' ' + item.driverName + '</span>' +
            '<span class="cr-ptag">' + _iUnit + ' ' + item.cabinId + '</span>'
          : '';
      }

      var avOpen = '<div class="cr-picker-avatar"' + avExtra + '>';

      return '<div class="cr-picker-row" onclick="crPickerSelect(\'' + type + '\',\'' + item.id + '\')">' +
        avOpen + avContent + '</div>' +
        '<div class="cr-picker-row-body">' +
          '<div class="cr-picker-row-name">' + displayName + '</div>' +
          (isLinked
            ? '<div class="cr-picker-row-tags">' + tagsHtml + '</div>'
            : '<div class="cr-picker-row-nolink">No linked equipment</div>'
          ) +
        '</div>' +
        (isLinked ? '<span class="cr-picker-link-badge">' + _iLink + '</span>' : '') +
      '</div>';
    }

    var placeholder = type === 'driver' ? 'drivers' : type === 'cabin' ? 'units' : 'trailers';
    var html = '<div class="cr-picker-search">' +
      '<svg class="cr-picker-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
      '<input class="cr-picker-search-input" placeholder="Search ' + placeholder + '..." oninput="crRenderPickerPanel(\'' + type + '\',this.value)" value="' + q.split('"').join('&quot;') + '">' +
    '</div>';

    html += list.length ? list.map(row).join('') : '<div class="cr-picker-no-results">No results</div>';

    panel.innerHTML = html;
    var inp = panel.querySelector('.cr-picker-search-input');
    if (inp) { inp.focus(); var l = inp.value.length; inp.setSelectionRange(l, l); }
  };

  window.crPickerSetValue = function (type, id, list) {
    if (!id) return;
    var item = list.find(function (x) { return x.id === id; });
    if (!item) return;
    window.CR_PICKER[type] = id;
    var btn = document.getElementById('cr-' + type + '-btn');
    if (!btn) return;
    var tx = btn.querySelector('.cr-picker-btn-text');
    if (!tx) return;
    tx.textContent = type === 'driver' ? item.name : item.id + (item.type ? ' · ' + item.type[0].toUpperCase() + item.type.slice(1) : '');
    tx.classList.add('cr-has-value');
  };

  window.crPickerSelect = function (type, id) {
    var item = null;
    if (type === 'driver')  item = window.CR_DRIVER_LIST.find(function (d) { return d.id === id; });
    if (type === 'cabin')   item = window.CR_CABIN_LIST.find(function (c) { return c.id === id; });
    if (type === 'trailer') item = window.CR_TRAILER_LIST.find(function (t) { return t.id === id; });
    if (!item) return;

    window.crPickerSetValue(type, id, type === 'driver' ? window.CR_DRIVER_LIST : type === 'cabin' ? window.CR_CABIN_LIST : window.CR_TRAILER_LIST);

    /* Auto-fill linked fields */
    if (type === 'driver' && item.cabinId) {
      window.crPickerSetValue('cabin',   item.cabinId,   window.CR_CABIN_LIST);
      window.crPickerSetValue('trailer', item.trailerId, window.CR_TRAILER_LIST);
    }
    if (type === 'cabin' && item.driverId) {
      window.crPickerSetValue('driver',  item.driverId,  window.CR_DRIVER_LIST);
      window.crPickerSetValue('trailer', item.trailerId, window.CR_TRAILER_LIST);
    }
    if (type === 'trailer' && item.driverId) {
      window.crPickerSetValue('driver',  item.driverId,  window.CR_DRIVER_LIST);
      window.crPickerSetValue('cabin',   item.cabinId,   window.CR_CABIN_LIST);
    }

    /* Cabin-specific side effects (origin, TMS, route name) */
    var cabinItem = type === 'cabin' ? item : (type === 'driver' && item.cabinId ? window.CR_CABIN_LIST.find(function(c){return c.id===item.cabinId;}) : null);
    if (cabinItem) {
      var originInput  = document.getElementById('cr-origin-input');
      var originSource = document.getElementById('cr-origin-source');
      var tmsBlock     = document.getElementById('cr-tms-block');
      var routeName    = document.getElementById('cr-route-name');
      var driverItem   = window.CR_DRIVER_LIST.find(function(d){return d.id===cabinItem.driverId;});
      var driverLast   = driverItem ? driverItem.name.split(' ')[1] : 'Unassigned';
      if (routeName) routeName.value = cabinItem.id + '_' + driverLast + '_2026-07-30';
      if (cabinItem.hasLoads) {
        if (tmsBlock) {
          tmsBlock.classList.add('cr-visible');
          tmsBlock.querySelectorAll('.cr-load-card').forEach(function(card) {
            card.classList.add('cr-on');
            var cb = card.querySelector('input[type="checkbox"]'); if (cb) cb.checked = true;
          });
          var cards = tmsBlock.querySelectorAll('.cr-load-card');
          var lastCard = cards[cards.length - 1];
          var lastDest = '';
          if (lastCard) { var routeEl = lastCard.querySelector('.cr-load-route'); if (routeEl) { var txt = routeEl.textContent; var arrow = txt.indexOf('→'); lastDest = arrow >= 0 ? txt.substring(arrow+1).trim() : ''; } }
          if (originInput) { originInput.value = lastDest || cabinItem.city; originInput.classList.add('cr-filled'); }
          if (originSource) originSource.style.display = 'none';
        }
      } else {
        if (tmsBlock) tmsBlock.classList.remove('cr-visible');
        if (originInput) { originInput.value = cabinItem.city; originInput.classList.add('cr-filled'); }
        if (originSource) originSource.style.display = 'flex';
      }
      window.crUpdateForecastVisibility();
    }

    window.crClosePicker();
  };

  /* Close picker on outside click */
  document.addEventListener('click', function (e) {
    if (!window.CR_PICKER || !window.CR_PICKER.open) return;
    var panel = document.getElementById('cr-picker-panel');
    var btn   = document.getElementById('cr-' + window.CR_PICKER.open + '-btn');
    if (panel && panel.contains(e.target)) return;
    if (btn   && btn.contains(e.target))   return;
    window.crClosePicker();
  }, true);

  window.crUpdateForecastVisibility = function () {
    const originInput = document.getElementById('cr-origin-input');
    const forecast = document.getElementById('cr-forecast');
    if (!originInput || !forecast) return;
    forecast.style.display = originInput.value.trim() ? '' : 'none';
  };

  window.crShowTip = function (el) {
    var tip = document.getElementById('cr-global-tip');
    if (!tip) return;
    var text = el.getAttribute('data-tip') || '';
    tip.textContent = text;
    tip.style.display = 'block';
    var r = el.getBoundingClientRect();
    var w = 230;
    var x = r.left;
    x = Math.max(8, Math.min(x, window.innerWidth - w - 8));
    var y = r.bottom + 6;
    y = Math.max(8, Math.min(y, window.innerHeight - 120));
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
    tip.style.width = w + 'px';
  };
  window.crHideTip = function () {
    var tip = document.getElementById('cr-global-tip');
    if (tip) tip.style.display = 'none';
  };

  window.crSetMode = function (mode, btn) {
    document.querySelectorAll('.cr-assign-btn').forEach(b => b.classList.remove('cr-active'));
    btn.classList.add('cr-active');

    const cabinRow = document.getElementById('cr-cabin-row');
    const tmsBlock = document.getElementById('cr-tms-block');
    const originInput = document.getElementById('cr-origin-input');
    const originSource = document.getElementById('cr-origin-source');
    const routeName = document.getElementById('cr-route-name');

    var trailerSelect = document.getElementById('cr-trailer-select');
    var trailerBtn    = document.getElementById('cr-trailer-btn');

    if (mode === 'free') {
      cabinRow.style.display = 'none';
      if (trailerSelect) trailerSelect.style.display = '';
      if (trailerBtn)    trailerBtn.style.display    = 'none';
    } else {
      cabinRow.style.display = '';
      cabinRow.classList.add('cr-fade-up');
      if (trailerSelect) trailerSelect.style.display = 'none';
      if (trailerBtn)    trailerBtn.style.display    = '';
    }
    tmsBlock.classList.remove('cr-visible');
    originInput.value = '';
    originInput.classList.remove('cr-filled');
    if (originSource) originSource.style.display = 'none';
    routeName.value = 'Unassigned_Unassigned_2026-07-30';
    window.crResetPickers();
    window.crClosePicker();
    window.crUpdateForecastVisibility();
  };

  /* Logic now lives in crPickerSelect */
  window.crOnCabinChange = function () {};

  window.crToggleLoad = function (card) {
    card.classList.toggle('cr-on');
    const cb = card.querySelector('input[type="checkbox"]');
    cb.checked = card.classList.contains('cr-on');
  };

  // ---- Blocked regions/cities/states tag pickers ----
  const CR_TAG_OPTIONS = {
    region: ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'],
    city: ['Houston, TX', 'Memphis, TN', 'Chicago, IL', 'Dallas, TX', 'Shreveport, LA', 'Atlanta, GA', 'Laredo, TX', 'San Antonio, TX', 'Little Rock, AR', 'Phoenix, AZ', 'Albuquerque, NM', 'Kansas City, MO', 'Columbus, OH', 'Newark, NJ', 'Fresno, CA', 'Las Vegas, NV', 'Salt Lake City, UT', 'Denver, CO', 'Savannah, GA', 'Jacksonville, FL', 'Tampa, FL'],
    state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  };

  // Panels are created on demand and appended directly to #cr-root (not nested inside the
  // collapsible/overflow:hidden Search preferences block) so they float above the form instead
  // of getting clipped/hidden inside it.
  window.crToggleTagPicker = function (kind) {
    const already = window.CR_OPEN_PICKER === kind;
    window.crCloseTagPicker();
    if (!already) window.crOpenTagPicker(kind);
  };

  window.crOpenTagPicker = function (kind) {
    const btn = document.getElementById('cr-blocked-' + kind + '-btn');
    const root = document.getElementById('cr-root');
    if (!btn || !root) return;
    const btnRect = btn.getBoundingClientRect();
    const rootRect = root.getBoundingClientRect();
    const panel = document.createElement('div');
    panel.className = 'cr-tagpicker-panel ef-scroll';
    panel.id = 'cr-blocked-' + kind + '-panel';
    panel.style.top = (btnRect.bottom - rootRect.top + 4) + 'px';
    panel.style.left = (btnRect.left - rootRect.left) + 'px';
    panel.style.width = Math.max(180, btnRect.width) + 'px';
    root.appendChild(panel);
    window.CR_OPEN_PICKER = kind;
    window.crRenderTagPanel(kind);
  };

  window.crCloseTagPicker = function () {
    if (!window.CR_OPEN_PICKER) return;
    const panel = document.getElementById('cr-blocked-' + window.CR_OPEN_PICKER + '-panel');
    if (panel) panel.remove();
    window.CR_OPEN_PICKER = null;
  };

  window.crRenderTagPanel = function (kind) {
    const panel = document.getElementById('cr-blocked-' + kind + '-panel');
    if (!panel) return;
    const selected = window.CR_BLOCKED[kind];
    panel.innerHTML = CR_TAG_OPTIONS[kind].map(opt => (
      '<label class="cr-tag-option"><input type="checkbox" ' + (selected.includes(opt) ? 'checked' : '') +
      ' onchange="crToggleTagOption(\'' + kind + '\',\'' + opt.replace(/'/g, "\\'") + '\')"><span>' + opt + '</span></label>'
    )).join('');
  };

  window.crToggleTagOption = function (kind, value) {
    const list = window.CR_BLOCKED[kind];
    const i = list.indexOf(value);
    if (i === -1) list.push(value); else list.splice(i, 1);
    window.crRenderChips(kind);
  };

  window.crRemoveTag = function (kind, value) {
    const list = window.CR_BLOCKED[kind];
    const i = list.indexOf(value);
    if (i !== -1) list.splice(i, 1);
    window.crRenderChips(kind);
    if (window.CR_OPEN_PICKER === kind) window.crRenderTagPanel(kind);
  };

  window.crRenderChips = function (kind) {
    const chips = document.getElementById('cr-blocked-' + kind + '-chips');
    if (!chips) return;
    chips.innerHTML = window.CR_BLOCKED[kind].map(v => (
      '<span class="cr-tag-chip">' + v + '<span class="cr-tag-chip-x" onclick="event.stopPropagation();crRemoveTag(\'' + kind + '\',\'' + v.replace(/'/g, "\\'") + '\')">×</span></span>'
    )).join('');
    const total = (window.CR_BLOCKED.region.length) + (window.CR_BLOCKED.city.length) + (window.CR_BLOCKED.state.length);
    const badge = document.getElementById('cr-prefs-badge');
    if (badge) { badge.textContent = total; badge.style.display = total > 0 ? '' : 'none'; }
  };

  document.addEventListener('click', function (e) {
    if (!window.CR_OPEN_PICKER) return;
    const kind = window.CR_OPEN_PICKER;
    const wrap = document.getElementById('cr-blocked-' + kind + '-wrap');
    const panel = document.getElementById('cr-blocked-' + kind + '-panel');
    const inWrap = wrap && wrap.contains(e.target);
    const inPanel = panel && panel.contains(e.target);
    if (!inWrap && !inPanel) window.crCloseTagPicker();
  }, true);

  function crTagPickerFieldHtml(kind, label, singular) {
    return '<div class="cr-field" style="margin-bottom:0">' +
      '<div class="cr-field-label">' + label + '</div>' +
      '<div class="cr-tagpicker" id="cr-blocked-' + kind + '-wrap">' +
      '<div class="cr-tagpicker-chips" id="cr-blocked-' + kind + '-chips"></div>' +
      '<button type="button" class="cr-tagpicker-add" id="cr-blocked-' + kind + '-btn" onclick="crToggleTagPicker(\'' + kind + '\')">+ Add ' + singular + '...</button>' +
      '</div></div>';
  }

  window.crInitModal = function () {
    window.CR_BLOCKED = { region: [], city: [], state: [] };
    window.CR_OPEN_PICKER = null;
    ['region', 'city', 'state'].forEach(k => window.crRenderChips(k));
    window.CR_PICKER = { open: null, driver: null, cabin: null, trailer: null };
    window.crResetPickers();
    window.crUpdateForecastVisibility();
  };

  const CREATE_ROUTE_MODAL_HTML = `
<div id="cr-root">
  <div class="cr-modal">
    <div class="cr-modal-header">
      <h2>Create route</h2>
      <button class="cr-close-btn" onclick="crCloseModal()">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>
      </button>
    </div>

    <div class="cr-modal-toggle-wrap">
      <div class="cr-assign-toggle">
        <button class="cr-assign-btn cr-active" data-mode="free" onclick="crSetMode('free', this)">Any unit</button>
        <button class="cr-assign-btn" data-mode="assign" onclick="crSetMode('assign', this)">Assign unit</button>
      </div>
    </div>

    <div class="cr-modal-body">
      <div id="cr-cabin-row" class="cr-row cr-row-2" style="display:none">
        <div class="cr-field">
          <div class="cr-field-label">Unit <span style="color:#EB4343">*</span></div>
          <button type="button" class="cr-picker-btn" id="cr-cabin-btn" onclick="crOpenPicker('cabin')">
            <div class="cr-picker-btn-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg></div>
            <div class="cr-picker-btn-content">
              <span class="cr-picker-btn-text">Select unit...</span>
              <span class="cr-picker-btn-label">Unit</span>
            </div>
            <svg class="cr-picker-btn-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4l4 4 4-4"/></svg>
          </button>
        </div>
        <div class="cr-field">
          <div class="cr-field-label">Driver <span class="cr-opt">Optional</span></div>
          <button type="button" class="cr-picker-btn" id="cr-driver-btn" onclick="crOpenPicker('driver')">
            <div class="cr-picker-btn-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
            <div class="cr-picker-btn-content">
              <span class="cr-picker-btn-text">Select a driver</span>
              <span class="cr-picker-btn-label">Driver</span>
            </div>
            <svg class="cr-picker-btn-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4l4 4 4-4"/></svg>
          </button>
        </div>
      </div>

      <div class="cr-tms-block" id="cr-tms-block">
        <div class="cr-tms-title">
          <span class="cr-tms-title-group">
            <span>Loads in This Truck Cycle</span>
            <span class="cr-tms-tooltip-wrap" data-tip="Shows the loads associated with your truck’s current operating cycle. Use them to optimize the rest of the cycle." onmouseenter="crShowTip(this)" onmouseleave="crHideTip()">
              <svg class="cr-tms-tooltip-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </span>
          </span>
          <span class="cr-count">2 loads</span>
        </div>
        <div class="cr-load-card" onclick="crToggleLoad(this)">
          <input type="checkbox">
          <div class="cr-load-body">
            <div class="cr-load-route-row">
              <div class="cr-load-route">Houston, TX<span class="cr-arr">→</span>Dallas, TX</div>
              <span class="cr-status-pill" style="background:rgba(39,167,103,.2);color:#6BD59E">Delivered</span>
            </div>
            <div class="cr-load-meta">Pickup 07/31/2026 · 277 mi · TMS-4412 · FreightQuote · TRK-1042</div>
          </div>
          <div class="cr-load-price">$1,240</div>
        </div>
        <div class="cr-load-card" onclick="crToggleLoad(this)">
          <input type="checkbox">
          <div class="cr-load-body">
            <div class="cr-load-route-row">
              <div class="cr-load-route">Dallas, TX<span class="cr-arr">→</span>Memphis, TN</div>
              <span class="cr-status-pill" style="background:rgba(123,203,203,.16);color:#7BCBCB">In Transit</span>
            </div>
            <div class="cr-load-meta">Pickup 08/01/2026 · 277 mi · TMS-4398 · Echo Global · TRK-1042</div>
          </div>
          <div class="cr-load-price">$980</div>
        </div>
      </div>

      <div class="cr-row cr-row-2">
        <div class="cr-field">
          <div class="cr-field-label">Origin <span style="color:#EB4343">*</span></div>
          <input class="cr-input" id="cr-origin-input" placeholder="City or state..." oninput="crUpdateForecastVisibility()">
        </div>
        <div class="cr-field">
          <div class="cr-field-label">Departure date <span style="color:#EB4343">*</span></div>
          <input class="cr-input" id="cr-departure-date" type="date" value="2026-07-30">
        </div>
      </div>

      <div class="cr-row cr-row-2">
        <div class="cr-field" style="margin-bottom:0">
          <div class="cr-field-label">Trailer <span class="cr-opt">Optional</span></div>
          <select class="cr-select" id="cr-trailer-select">
            <option value="Van" selected>Van</option>
            <option value="Flatbed">Flatbed</option>
            <option value="Reefer">Reefer</option>
          </select>
          <button type="button" class="cr-picker-btn" id="cr-trailer-btn" onclick="crOpenPicker('trailer')" style="display:none">
            <div class="cr-picker-btn-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="20" height="13" rx="1"/><line x1="8" y1="5" x2="8" y2="18"/><line x1="15" y1="5" x2="15" y2="18"/><circle cx="6" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg></div>
            <div class="cr-picker-btn-content">
              <span class="cr-picker-btn-text">Select a trailer</span>
              <span class="cr-picker-btn-label">Trailer</span>
            </div>
            <svg class="cr-picker-btn-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4l4 4 4-4"/></svg>
          </button>
          <div class="cr-power-only">
            <label class="cr-power-check">
              <input type="checkbox">
              <span>Power Only</span>
            </label>
          </div>
        </div>
        <div class="cr-field">
          <div class="cr-field-label">Operative cost <span class="cr-opt">Optional</span></div>
          <select class="cr-select">
            <option selected>JM_test1 — $2.00/mi</option>
            <option>No operating cost</option>
          </select>
        </div>
      </div>

      <div class="cr-row cr-row-2">
        <div class="cr-field">
          <div class="cr-field-label">Final destination <span class="cr-opt">Optional</span></div>
          <input class="cr-input" id="cr-dest-input" placeholder="City or state...">
        </div>
        <div class="cr-field">
          <div class="cr-field-label">Route duration <span style="color:#EB4343">*</span></div>
          <select class="cr-select">
            <option selected>1–4 days</option>
            <option>5–8 days</option>
            <option>9–12 days</option>
          </select>
        </div>
      </div>

      <div class="cr-expandable" id="cr-prefs-expand">
        <button class="cr-expand-trigger" onclick="document.getElementById('cr-prefs-expand').classList.toggle('cr-open')">
          <svg class="cr-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2.5 4.5l3.5 3 3.5-3"/></svg>
          Search preferences
          <span id="cr-prefs-badge" style="display:none;margin-left:6px;padding:1px 7px;border-radius:999px;background:#27A767;color:#0B131B;font:800 9.5px Nunito,system-ui;line-height:1.6;letter-spacing:0">0</span>
        </button>
        <div class="cr-expand-body">
          <div class="cr-expand-inner">
            <div class="cr-row cr-row-3-even" style="margin-bottom:0">
              ${crTagPickerFieldHtml('region', 'Blocked regions', 'region')}
              ${crTagPickerFieldHtml('city', 'Blocked cities', 'city')}
              ${crTagPickerFieldHtml('state', 'Blocked states', 'state')}
            </div>
          </div>
        </div>
      </div>

      <div class="cr-field" style="margin-bottom:0">
        <div class="cr-field-label">Route name</div>
        <input class="cr-input cr-route-name" id="cr-route-name" value="Unassigned_Unassigned_2026-07-30">
      </div>
    </div>

    <div class="cr-forecast" id="cr-forecast" style="display:none">
      <div class="cr-forecast-section-lbl">Estimates for these search parameters</div>
      <div class="cr-forecast-grid">
        <div class="cr-forecast-item">
          <div class="cr-forecast-val" style="color:#27A767;display:flex;align-items:center;gap:5px">72%
            <span class="cr-match-info" data-tip="Probability of finding a route matching your parameters. Higher scores indicate more available routes under current market conditions." onmouseenter="crShowTip(this)" onmouseleave="crHideTip()" style="display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:999px;border:1px solid rgba(255,255,255,.25);color:#8B939B;font:700 9px Nunito,system-ui;cursor:default;flex-shrink:0;line-height:1">?</span>
          </div>
          <div class="cr-forecast-lbl">Match</div>
        </div>
        <div class="cr-forecast-item"><div class="cr-forecast-val">$1,200–$2,400</div><div class="cr-forecast-lbl">Income</div></div>
        <div class="cr-forecast-item"><div class="cr-forecast-val">$380–$1.9k</div><div class="cr-forecast-lbl">Profit</div></div>
        <div class="cr-forecast-item"><div class="cr-forecast-val">1–4 days</div><div class="cr-forecast-lbl">Duration</div></div>
      </div>
    </div>

    <div class="cr-modal-actions">
      <button class="cr-btn-continue" onclick="crContinueModal()">Continue</button>
    </div>
  </div>
</div>`;

  function renderCreateRouteModal() {
    var existingTip = document.getElementById('cr-global-tip');
    if (existingTip) existingTip.remove();
    var tipEl = document.createElement('div');
    tipEl.id = 'cr-global-tip';
    tipEl.style.cssText = 'display:none;position:fixed;z-index:99999;background:#17242E;border:1px solid rgba(255,255,255,.14);border-radius:9px;padding:10px 12px;font:400 11.5px Nunito,system-ui;color:#C9CED2;line-height:1.5;box-shadow:0 8px 28px rgba(0,0,0,.5);pointer-events:none;white-space:normal;word-wrap:break-word';
    document.body.appendChild(tipEl);

    const overlay = el('div', { style: { position: 'fixed', inset: '0', zIndex: '50', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' } });
    overlay.appendChild(el('div', { onclick: () => window.crCloseModal(), style: { position: 'absolute', inset: '0', background: 'rgba(6,12,17,.65)' } }));
    const modalHost = el('div', { style: { position: 'relative', width: '100%', maxWidth: '520px' }, html: CREATE_ROUTE_MODAL_HTML });
    overlay.appendChild(modalHost);
    return overlay;
  }

  function renderList() {
    const s = state;
    const isLoads = s.view === 'loads';
    const line = on => on ? 'inset 0 -2px 0 0 ' + ACTIVE : 'none';

    const container = el('div', { style: { display: 'flex', flexDirection: 'column', flex: '1', minHeight: '0' } });

    // ---- header row (static) ----
    const queryKey = isLoads ? 'loadQuery' : 'routeQuery';
    const searchBar = el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: '#131F27', border: '1px solid rgba(255,255,255,.1)', borderRadius: '8px', width: '320px', flexShrink: '1', minWidth: '120px' } }, [
      iconEl('search'),
      el('input', {
        type: 'text', value: s[queryKey], placeholder: isLoads ? 'Search by ID, route, city, customer...' : 'Search by name, driver, city...',
        oninput: e => setState({ [queryKey]: e.target.value, page: 1 }),
        style: { flex: '1', background: 'transparent', border: 'none', outline: 'none', color: '#FBFBFB', fontFamily: 'inherit', fontSize: '12.5px', minWidth: '0' }
      })
    ]);

    const refreshBtn = el('div', {
      class: 'hoverable',
      style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 13px', border: '1px solid rgba(255,255,255,.1)', borderRadius: '999px', cursor: 'pointer', whiteSpace: 'nowrap' }
    }, [
      iconEl('refresh'),
      el('div', { style: { display: 'flex', flexDirection: 'column', gap: '3px' } }, [
        el('div', { style: { fontSize: '12px', fontWeight: '800', color: '#FBFBFB', lineHeight: '1' } }, ['Refresh']),
        el('div', { style: { fontSize: '10px', color: '#6B7373', lineHeight: '1' } }, ['DataTruck · Updated 3 min ago'])
      ])
    ]);

    const header = el('div', { style: { flex: 'none', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px', background: '#101B23', borderBottom: '1px solid rgba(255,255,255,.07)' } }, [
      el('div', { style: { fontSize: '19px', fontWeight: '800', letterSpacing: '-0.02em', whiteSpace: 'nowrap' } }, [isLoads ? 'My Loads' : 'Routes']),
      el('div', { style: { flex: '1' } }),
      searchBar,
      el('div', { style: { flex: '1' } }),
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', border: '1px solid rgba(255,255,255,.1)', borderRadius: '999px', color: '#ABABAB', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' } }, [
        iconEl('clock'), 'Results: ' + (isLoads ? visibleLoads().length : visibleRoutes().length)
      ]),
      isLoads ? refreshBtn : null,
      el('div', {
        class: 'hoverable',
        onclick: isLoads ? null : () => setState({ showCreateRoute: true }),
        style: { padding: '8px 14px', borderRadius: '999px', background: '#27A767', color: '#0B131B', fontWeight: '800', fontSize: '12.5px', cursor: 'pointer', whiteSpace: 'nowrap' }
      }, [isLoads ? '+ New load' : '+ New route'])
    ]);
    container.appendChild(header);

    // ---- filter / tabs bar (static) ----
    const tabsSrc = isLoads ? LOAD_TABS : ROUTE_TABS;
    const curTab = isLoads ? s.loadTab : s.routeTab;

    const _pkgIcon = svg('<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>');
    const viewTabs = el('div', { style: { display: 'flex', alignItems: 'center', paddingRight: '14px', marginRight: '10px', borderRight: '1px solid rgba(255,255,255,.1)', padding: '8px 14px 8px 0' } }, [
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '3px', padding: '4px', background: '#131F27', border: '1px solid rgba(255,255,255,.1)', borderRadius: '8px' } }, [
        el('div', {
          onclick: () => setState({ view: 'routes', page: 1 }),
          style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: !isLoads ? '800' : '600', fontSize: '12.5px', color: !isLoads ? '#FBFBFB' : '#8B939B', background: !isLoads ? '#1E2E3A' : 'transparent' }
        }, [iconEl('truck'), 'Routes']),
        el('div', {
          onclick: () => setState({ view: 'loads', page: 1 }),
          style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: isLoads ? '800' : '600', fontSize: '12.5px', color: isLoads ? '#FBFBFB' : '#8B939B', background: isLoads ? '#1E2E3A' : 'transparent' }
        }, [_pkgIcon, 'My Loads'])
      ])
    ]);

    const statusTabsWrap = el('div', { class: 'ef-scroll', style: { flex: '1', display: 'flex', alignItems: 'center', gap: '2px', overflowX: 'auto' } });
    tabsSrc.forEach(label => {
      statusTabsWrap.appendChild(el('div', {
        onclick: () => {
          const isAll = label === 'All' || label === 'All Loads';
          if (isLoads) {
            const existing = (state.loadFilters || []).filter(f => f.key !== 'status');
            const newFilters = isAll ? existing : existing.concat([{ key: 'status', operator: 'is', value: label === 'On The Road' ? 'In Transit' : label }]);
            setState({ loadTab: label, page: 1, routeFilterIds: isAll ? null : s.routeFilterIds, loadFilters: newFilters });
          } else {
            setState({ routeTab: label, routePage: 1 });
          }
        },
        style: { padding: '12px 11px', cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '12.5px', fontWeight: '700', color: label === curTab ? ACTIVE : MUTED, boxShadow: line(label === curTab) }
      }, [label]));
    });

    if (isLoads) {
      const line1 = el('div', { style: { flex: 'none', display: 'flex', alignItems: 'stretch', gap: '4px', padding: '0 20px', background: '#0E1820', borderBottom: '1px solid rgba(255,255,255,.07)' } }, [
        viewTabs, statusTabsWrap
      ]);
      container.appendChild(line1);

      const dateBtn = (label, key) => {
        const filtersKey = 'loadFilters';
        const existing = s[filtersKey].find(x => x.key === key);
        const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const parseLocal = s2 => { const p = s2.split('-'); return new Date(+p[0], +p[1]-1, +p[2]); };
        const fmtShort = d => MONTHS[d.getMonth()] + ' ' + String(d.getDate()).padStart(2, '0');
        const hasRange = existing && existing.value && existing.value2;
        const btnLabel = hasRange ? fmtShort(parseLocal(existing.value)) + ' – ' + fmtShort(parseLocal(existing.value2)) : label;
        const wrapper = el('div', { 'data-datepicker': key, style: { position: 'relative' } });
        const btn = el('div', {
          class: 'hoverable',
          onclick: e => {
            e.stopPropagation();
            const cur = s.openDatePicker;
            setState({ openDatePicker: cur === key ? null : key, _datePickStart: existing ? existing.value : null, _datePickEnd: existing ? existing.value2 : null, _datePickMonth: null });
          },
          style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', border: hasRange ? '1px solid #27A767' : '1px solid rgba(255,255,255,.1)', borderRadius: '8px', color: hasRange ? '#3FC281' : '#E3E6E8', fontWeight: '700', fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap' }
        }, [iconEl('calendar'), btnLabel]);
        wrapper.appendChild(btn);

        if (s.openDatePicker === key) {
          const baseMonth = s._datePickMonth != null ? s._datePickMonth : new Date().getMonth();
          const baseYear = s._datePickYear != null ? s._datePickYear : new Date().getFullYear();
          const pickStart = s._datePickStart || null;
          const pickEnd = s._datePickEnd || null;
          const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];
          const presets = [
            { label: 'This Week', fn: () => { const n = new Date(); const d = n.getDay(); const s2 = new Date(n); s2.setDate(n.getDate()-d); const e2 = new Date(s2); e2.setDate(s2.getDate()+6); return [s2,e2]; }},
            { label: 'Last Week', fn: () => { const n = new Date(); const d = n.getDay(); const s2 = new Date(n); s2.setDate(n.getDate()-d-7); const e2 = new Date(s2); e2.setDate(s2.getDate()+6); return [s2,e2]; }},
            { label: 'Current Month', fn: () => { const n = new Date(); return [new Date(n.getFullYear(),n.getMonth(),1), new Date(n.getFullYear(),n.getMonth()+1,0)]; }},
            { label: 'Last Month', fn: () => { const n = new Date(); return [new Date(n.getFullYear(),n.getMonth()-1,1), new Date(n.getFullYear(),n.getMonth(),0)]; }},
            { label: 'This Year', fn: () => { const y = new Date().getFullYear(); return [new Date(y,0,1), new Date(y,11,31)]; }},
            { label: 'Last Year', fn: () => { const y = new Date().getFullYear()-1; return [new Date(y,0,1), new Date(y,11,31)]; }},
          ];
          const toISO = d => d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
          const applyRange = (d1, d2) => {
            const v1 = toISO(d1), v2 = toISO(d2);
            const list2 = s[filtersKey].filter(x => x.key !== key);
            list2.push({ key: key, operator: 'between', value: v1, value2: v2 });
            setState({ [filtersKey]: list2, openDatePicker: null, page: 1 });
          };

          const presetList = el('div', { style: { display: 'flex', flexDirection: 'column', gap: '2px', borderRight: '1px solid rgba(255,255,255,.07)', padding: '12px', minWidth: '120px' } });
          presets.forEach(p => {
            presetList.appendChild(el('div', {
              class: 'hoverable',
              onclick: e2 => { e2.stopPropagation(); const r = p.fn(); applyRange(r[0], r[1]); },
              style: { padding: '7px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#FBFBFB', cursor: 'pointer', whiteSpace: 'nowrap' }
            }, [p.label]));
          });
          presetList.appendChild(el('div', {
            class: 'hoverable',
            onclick: e2 => {
              e2.stopPropagation();
              const list2 = s[filtersKey].filter(x => x.key !== key);
              setState({ [filtersKey]: list2, openDatePicker: null, page: 1 });
            },
            style: { padding: '7px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#EB4343', cursor: 'pointer', marginTop: '6px' }
          }, ['Reset']));

          const cellStyle = 'width:32px;height:28px;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;';
          const makeCell = (dayNum, iso, dimmed) => {
            const isStart = pickStart === iso;
            const isEnd = pickEnd === iso;
            const inRange = pickStart && pickEnd && iso >= pickStart && iso <= pickEnd;
            let bg = 'transparent', col = dimmed ? '#3B4A4A' : '#C9CED2', radius = '4px', fw = '600';
            if (isStart || isEnd) { bg = 'rgba(39,167,103,.35)'; col = '#FBFBFB'; fw = '800'; radius = '6px'; }
            else if (inRange) { bg = 'rgba(39,167,103,.1)'; col = '#8BC8A8'; radius = '0'; }
            return el('div', {
              onclick: dimmed ? null : e2 => {
                e2.stopPropagation();
                if (!pickStart || (pickStart && pickEnd)) {
                  setState({ _datePickStart: iso, _datePickEnd: null, _datePickMonth: baseMonth, _datePickYear: baseYear });
                } else {
                  const st = iso < pickStart ? iso : pickStart;
                  const en = iso < pickStart ? pickStart : iso;
                  applyRange(parseLocal(st), parseLocal(en));
                }
              },
              style: Object.assign({ width: '32px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: fw, color: col, background: bg, borderRadius: radius, cursor: dimmed ? 'default' : 'pointer' })
            }, [String(dayNum)]);
          };
          const buildMonth = (yr, mo) => {
            const grid = el('div', { style: { display: 'flex', flexDirection: 'column', gap: '0' } });
            const dayRow = el('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(7, 32px)', justifyItems: 'center' } });
            DAYS.forEach(d => dayRow.appendChild(el('div', { style: { width: '32px', textAlign: 'center', fontSize: '10px', fontWeight: '700', color: '#6B7373', padding: '4px 0' } }, [d])));
            grid.appendChild(dayRow);
            const first = new Date(yr, mo, 1);
            const startDay = first.getDay();
            const daysInMonth = new Date(yr, mo + 1, 0).getDate();
            const prevMonthDays = new Date(yr, mo, 0).getDate();
            const cells = el('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(7, 32px)', justifyItems: 'center', rowGap: '2px' } });
            for (let i = startDay - 1; i >= 0; i--) {
              const d = prevMonthDays - i;
              const pmo = mo === 0 ? 11 : mo - 1;
              const pyr = mo === 0 ? yr - 1 : yr;
              cells.appendChild(makeCell(d, toISO(new Date(pyr, pmo, d)), true));
            }
            for (let d = 1; d <= daysInMonth; d++) {
              cells.appendChild(makeCell(d, toISO(new Date(yr, mo, d)), false));
            }
            const totalCells = startDay + daysInMonth;
            const trailing = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
            for (let d = 1; d <= trailing; d++) {
              const nmo = mo === 11 ? 0 : mo + 1;
              const nyr = mo === 11 ? yr + 1 : yr;
              cells.appendChild(makeCell(d, toISO(new Date(nyr, nmo, d)), true));
            }
            grid.appendChild(cells);
            return grid;
          };

          const mo2 = baseMonth === 11 ? 0 : baseMonth + 1;
          const yr2 = baseMonth === 11 ? baseYear + 1 : baseYear;
          const navRow = el('div', { style: { display: 'flex', alignItems: 'center', padding: '12px 16px 0 16px' } }, [
            el('div', { class: 'hoverable', onclick: e2 => { e2.stopPropagation(); setState({ _datePickMonth: baseMonth === 0 ? 11 : baseMonth - 1, _datePickYear: baseMonth === 0 ? baseYear - 1 : baseYear }); }, style: { cursor: 'pointer', color: '#8B939B', fontSize: '16px', padding: '4px 8px' } }, ['<']),
            el('div', { style: { flex: '1', textAlign: 'center', fontSize: '13px', fontWeight: '800', color: '#FBFBFB' } }, [MONTHS[baseMonth] + ' ' + baseYear]),
            el('div', { style: { width: '40px' } }),
            el('div', { style: { flex: '1', textAlign: 'center', fontSize: '13px', fontWeight: '800', color: '#FBFBFB' } }, [MONTHS[mo2] + ' ' + yr2]),
            el('div', { class: 'hoverable', onclick: e2 => { e2.stopPropagation(); setState({ _datePickMonth: mo2, _datePickYear: yr2 }); }, style: { cursor: 'pointer', color: '#8B939B', fontSize: '16px', padding: '4px 8px' } }, ['>']),
          ]);
          const calsWrap = el('div', { style: { display: 'flex', gap: '24px', padding: '8px 16px 16px 16px' } }, [
            buildMonth(baseYear, baseMonth), buildMonth(yr2, mo2)
          ]);
          const calPanel = el('div', { style: { display: 'flex', flexDirection: 'column' } }, [navRow, calsWrap]);

          const popover = el('div', {
            onclick: e2 => e2.stopPropagation(),
            style: { position: 'absolute', top: 'calc(100% + 6px)', left: '0', zIndex: '30', display: 'flex', background: '#101B23', border: '1px solid rgba(255,255,255,.12)', borderRadius: '12px', boxShadow: '0 12px 32px rgba(0,0,0,.6)' }
          }, [presetList, calPanel]);
          wrapper.appendChild(popover);
        }

        return wrapper;
      };

      const exportBtn = el('div', {
        class: 'hoverable',
        style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', border: '1px solid rgba(255,255,255,.12)', borderRadius: '8px', cursor: 'pointer', color: '#7BCBCB', fontWeight: '700', fontSize: '12px', whiteSpace: 'nowrap' }
      }, [iconEl('download'), 'Export']);
      const saveViewBtn = el('div', {
        class: 'hoverable',
        style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', border: '1px solid rgba(255,255,255,.12)', borderRadius: '8px', cursor: 'pointer', color: '#C9CED2', fontWeight: '700', fontSize: '12px', whiteSpace: 'nowrap' }
      }, [iconEl('save'), 'Save view']);

      const leftTools = el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        filterButton('loads'), dateBtn('Pickup Date', 'pickup'), dateBtn('Delivery Date', 'delivery')
      ]);
      const rightTools = el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        exportBtn, saveViewBtn, columnsButton('loadColumns', 'columnOrder', 'hiddenCols', LOAD_COLS_BY_KEY)
      ]);
      const line2 = el('div', { style: { flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 20px', background: '#0E1820', borderBottom: '1px solid rgba(255,255,255,.07)' } }, [
        leftTools, rightTools
      ]);
      container.appendChild(line2);
    } else {
      const rightTools = el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0 8px 12px' } });
      rightTools.appendChild(filterButton('routes'));
      rightTools.appendChild(columnsButton('routeColumns', 'routeColumnOrder', 'routeHiddenCols', ROUTE_COLS_BY_KEY));

      const filterBar = el('div', { style: { flex: 'none', display: 'flex', alignItems: 'stretch', gap: '4px', padding: '0 20px', background: '#0E1820', borderBottom: '1px solid rgba(255,255,255,.07)' } }, [
        viewTabs, statusTabsWrap, rightTools
      ]);
      container.appendChild(filterBar);
    }

    const chips = filterChipsRow(isLoads ? 'loads' : 'routes');
    if (chips) container.appendChild(chips);

    // ---- scrollable middle region ----
    const scrollRegion = el('div', { class: 'ef-scroll', style: { flex: '1', minHeight: '0', display: 'flex', flexDirection: 'column', overflowY: 'auto' } });


    if (isLoads) {
      scrollRegion.appendChild(renderLoadsTable());
    } else {
      const allRoutes = visibleRoutes();
      const rtotalPages = Math.max(1, Math.ceil(allRoutes.length / s.routeRows));
      const rpage = Math.min(s.routePage, rtotalPages);
      const rstart = (rpage - 1) * s.routeRows;
      const pageRoutes = allRoutes.slice(rstart, rstart + s.routeRows);
      if (allRoutes.length === 0) {
        scrollRegion.appendChild(el('div', { style: { padding: '60px 20px', textAlign: 'center', color: '#6B7373', fontSize: '13px' } }, [
          el('div', { style: { fontWeight: '700', marginBottom: '6px', fontSize: '14px' } }, ['No results found for the selected filters.']),
          el('div', { style: { fontWeight: '400', fontSize: '13px' } }, ['Try adjusting or clearing your filters to see more results.'])
        ]));
      } else {
        scrollRegion.appendChild(renderRouteCards(pageRoutes));
      }
    }
    container.appendChild(scrollRegion);

    // ---- static footer: pagination + KPIs ----
    if (isLoads) {
      container.appendChild(renderLoadsFooter());
    } else {
      container.appendChild(renderRoutesFooter());
    }
    container.appendChild(renderKpis(isLoads));

    return container;
  }

  // ---- columns show/hide + reorder popover button (shared by Loads + Routes) ----
  function columnsButton(popoverId, orderKey, hiddenKey, colsByKey) {
    const s = state;
    const open = s.openPopover === popoverId;
    const btn = el('div', {
      class: 'hoverable',
      onclick: e => { e.stopPropagation(); setState({ openPopover: open ? null : popoverId, filterPanel: null }); },
      style: { display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 12px', border: '1px solid rgba(255,255,255,.1)', borderRadius: '8px', color: '#E3E6E8', fontWeight: '700', fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap' }
    }, [iconEl('columns'), 'Columns', iconEl('chevDown')]);

    const wrap = el('div', { 'data-popover': popoverId, style: { position: 'relative' } }, [btn]);

    if (open) {
      const list = el('div', { style: { display: 'flex', flexDirection: 'column', gap: '2px', maxHeight: '360px', overflowY: 'auto' }, class: 'ef-scroll' });
      s[orderKey].forEach(key => {
        const col = colsByKey[key];
        const hidden = s[hiddenKey].has(key);
        const row = el('div', {
          draggable: true,
          ondragstart: e => { dragColKey = key; e.dataTransfer.effectAllowed = 'move'; },
          ondragover: e => e.preventDefault(),
          ondrop: e => {
            e.preventDefault();
            if (!dragColKey || dragColKey === key) return;
            const order = s[orderKey].slice();
            const from = order.indexOf(dragColKey);
            const to = order.indexOf(key);
            order.splice(from, 1);
            order.splice(to, 0, dragColKey);
            dragColKey = null;
            setState({ [orderKey]: order });
          },
          style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 8px', borderRadius: '6px', cursor: 'grab', opacity: hidden ? '.5' : '1' }
        }, [
          el('span', { style: { color: '#6B7373', flex: 'none', display: 'flex' }, html: ICON.grip }),
          el('input', {
            type: 'checkbox', checked: !hidden,
            onchange: () => {
              const hc = new Set(s[hiddenKey]);
              if (hc.has(key)) hc.delete(key); else hc.add(key);
              setState({ [hiddenKey]: hc });
            },
            style: { flex: 'none', cursor: 'pointer' }
          }),
          el('span', { style: { fontSize: '12.5px', fontWeight: '700' } }, [col.label])
        ]);
        list.appendChild(row);
      });

      const panel = el('div', {
        onclick: e => e.stopPropagation(),
        style: { position: 'absolute', top: '38px', right: '0', zIndex: '20', background: '#17242E', border: '1px solid rgba(255,255,255,.12)', borderRadius: '10px', padding: '10px', boxShadow: '0 8px 24px rgba(0,0,0,.35)', width: '210px' }
      }, [
        el('div', { style: { fontSize: '11px', color: '#6B7373', fontWeight: '700', padding: '2px 8px 8px' } }, ['Arrastra para reordenar · check para mostrar/ocultar']),
        list
      ]);
      wrap.appendChild(panel);
    }
    return wrap;
  }

  function uniqueFieldValues(view, fieldKey) {
    const getters = view === 'loads' ? LOAD_FIELD_GETTERS : ROUTE_FIELD_GETTERS;
    const data = view === 'loads' ? LOADS : ROUTES;
    const getter = getters[fieldKey];
    if (!getter) return [];
    const seen = new Set();
    data.forEach(item => {
      const v = String(getter(item) || '').trim();
      if (v && v !== '--' && v !== 'Unassigned') seen.add(v);
    });
    return Array.from(seen).sort();
  }

  // ---- generic "Filter" button: field list + edit panel side by side ----
  function filterButton(view) {
    const s = state;
    const open = s.openPopover === 'filter';
    const fields = view === 'loads' ? LOAD_FIELDS : ROUTE_FIELDS;
    const fieldsByKey = view === 'loads' ? LOAD_FIELDS_BY_KEY : ROUTE_FIELDS_BY_KEY;
    const filtersKey = view === 'loads' ? 'loadFilters' : 'routeFilters';

    const btn = el('div', {
      class: 'hoverable',
      onclick: e => { e.stopPropagation(); setState({ openPopover: open ? null : 'filter', filterPanel: open ? null : { editKey: null } }); },
      style: { display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 12px', border: (s[filtersKey].length ? '1px solid #27A767' : '1px solid rgba(255,255,255,.1)'), borderRadius: '8px', color: s[filtersKey].length ? '#3FC281' : '#E3E6E8', fontWeight: '700', fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap' }
    }, [iconEl('funnel'), 'Filter', iconEl('chevDown')]);

    const wrap = el('div', { 'data-popover': 'filter', style: { position: 'relative' } }, [btn]);
    if (!open || !s.filterPanel) return wrap;

    const fp = s.filterPanel;
    const list = el('div', { class: 'ef-scroll', style: { display: 'flex', flexDirection: 'column', gap: '1px', maxHeight: '380px', overflowY: 'auto' } });
    fields.forEach(f => {
      const existing = s[filtersKey].find(x => x.key === f.key);
      const selected = fp.editKey === f.key;
      list.appendChild(el('div', {
        class: 'hoverable',
        onclick: () => {
          const ex = s[filtersKey].find(x => x.key === f.key);
          setState({ filterPanel: { editKey: f.key, operator: ex ? ex.operator : defaultOperator(f.type), value: ex ? ex.value : '', value2: ex ? ex.value2 : '' } });
        },
        style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', borderRadius: '6px', cursor: 'pointer', color: existing ? '#3FC281' : '#FBFBFB', background: selected ? 'rgba(255,255,255,.06)' : 'transparent' }
      }, [fieldTypeIcon(f.type), el('span', { style: { fontSize: '12.5px', fontWeight: '700' } }, [f.label])]));
    });

    const fieldListPanel = el('div', {
      onclick: e => e.stopPropagation(),
      style: { background: '#17242E', border: '1px solid rgba(255,255,255,.12)', borderRadius: '10px', padding: '12px', width: '220px', flexShrink: '0' }
    }, [
      el('div', { style: { fontSize: '15px', fontWeight: '800', padding: '2px 6px 10px' } }, ['Filter']),
      list
    ]);

    const container = el('div', {
      onclick: e => e.stopPropagation(),
      style: Object.assign({ position: 'absolute', top: '38px', zIndex: '20', display: 'flex', alignItems: 'flex-start', gap: '6px', boxShadow: '0 8px 24px rgba(0,0,0,.4)' }, view === 'loads' ? { left: '0' } : { right: '0' })
    }, []);

    if (fp.editKey) {
      const f = fieldsByKey[fp.editKey];
      const draft = fp;
      const ops = OPERATORS[f.type] || OPERATORS.text;
      const isBetween = draft.operator === 'between';
      const isMulti = draft.operator === 'in' || draft.operator === 'not_in' || draft.operator === 'is_in';

      const opSelect = el('select', {
        value: draft.operator,
        onchange: e => setState({ filterPanel: Object.assign({}, draft, { operator: e.target.value, value: '' }) }),
        style: { width: '100%', padding: '7px 8px', background: '#0E1820', border: '1px solid rgba(255,255,255,.12)', borderRadius: '6px', color: '#FBFBFB', fontFamily: 'inherit', fontSize: '12.5px', marginBottom: '10px' }
      }, ops.map(o => el('option', { value: o.v, selected: o.v === draft.operator }, [o.label])));

      let valueInputs;
      if (f.type === 'enum' && isMulti) {
        const allOpts = f.options || [];
        const selected = (draft.value || '').split(',').map(s2 => s2.trim()).filter(Boolean);
        const isOpen = !!draft._comboOpen;
        const searchKey = draft._search || '';
        const comboWrap = el('div', { style: { position: 'relative' } });
        const inputBox = el('div', {
          onclick: e2 => { e2.stopPropagation(); if (!isOpen) setState({ filterPanel: Object.assign({}, draft, { _comboOpen: true, _search: '' }) }); },
          style: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px', padding: '5px 8px', background: '#0E1820', border: '1px solid rgba(255,255,255,.12)', borderRadius: '6px', cursor: 'text', minHeight: '32px' }
        });
        if (isOpen) {
          selected.forEach(v => {
            inputBox.appendChild(el('div', { style: { display: 'flex', alignItems: 'center', gap: '3px', padding: '2px 6px', background: '#1E2E3A', border: '1px solid rgba(39,167,103,.3)', borderRadius: '4px', fontSize: '11px', fontWeight: '700', color: '#3FC281', whiteSpace: 'nowrap' } }, [
              v,
              el('span', { onclick: ev => { ev.stopPropagation(); setState({ filterPanel: Object.assign({}, draft, { value: selected.filter(x => x !== v).join(','), _comboOpen: true, _search: '' }) }); }, style: { cursor: 'pointer', color: '#EB4343', fontWeight: '800', fontSize: '12px', marginLeft: '2px' } }, ['×'])
            ]));
          });
          const inlineInput = el('input', {
            type: 'text', value: searchKey, placeholder: selected.length ? '' : 'Search...',
            onclick: e2 => e2.stopPropagation(),
            oninput: e2 => setState({ filterPanel: Object.assign({}, draft, { _search: e2.target.value, _comboOpen: true }) }),
            onkeydown: e2 => { if (e2.key === 'Backspace' && !searchKey && selected.length) { e2.stopPropagation(); setState({ filterPanel: Object.assign({}, draft, { value: selected.slice(0, -1).join(','), _comboOpen: true, _search: '' }) }); } },
            style: { flex: '1', minWidth: '40px', background: 'transparent', border: 'none', outline: 'none', color: '#FBFBFB', fontFamily: 'inherit', fontSize: '12px', padding: '0' }
          });
          inputBox.appendChild(inlineInput);
          requestAnimationFrame(() => { inlineInput.focus(); inlineInput.setSelectionRange(inlineInput.value.length, inlineInput.value.length); });
        } else if (selected.length > 0) {
          inputBox.appendChild(el('div', { style: { display: 'flex', alignItems: 'center', gap: '3px', padding: '2px 6px', background: '#1E2E3A', border: '1px solid rgba(39,167,103,.3)', borderRadius: '4px', fontSize: '11px', fontWeight: '700', color: '#3FC281', whiteSpace: 'nowrap' } }, [
            selected[0],
            el('span', { onclick: ev => { ev.stopPropagation(); setState({ filterPanel: Object.assign({}, draft, { value: selected.slice(1).join(',') }) }); }, style: { cursor: 'pointer', color: '#EB4343', fontWeight: '800', fontSize: '12px', marginLeft: '2px' } }, ['×'])
          ]));
          if (selected.length > 1) inputBox.appendChild(el('div', { style: { fontSize: '11px', fontWeight: '700', color: '#8B939B' } }, ['+' + (selected.length - 1)]));
          inputBox.appendChild(el('div', { style: { flex: '1' } }));
        } else {
          inputBox.appendChild(el('span', { style: { fontSize: '12px', color: '#6B7373' } }, ['Search...']));
          inputBox.appendChild(el('div', { style: { flex: '1' } }));
        }
        inputBox.appendChild(el('div', { onclick: e2 => { e2.stopPropagation(); setState({ filterPanel: Object.assign({}, draft, { _comboOpen: !isOpen, _search: '' }) }); }, style: { fontSize: '10px', color: '#8B939B', marginLeft: '4px', cursor: 'pointer', flexShrink: '0' } }, [isOpen ? '▲' : '▼']));
        comboWrap.appendChild(inputBox);
        if (isOpen) {
          const dropdown = el('div', { onclick: e2 => e2.stopPropagation(), style: { position: 'absolute', top: 'calc(100% + 4px)', left: '0', right: '0', zIndex: '100', background: '#131F27', border: '1px solid rgba(255,255,255,.12)', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,.5)', padding: '6px', maxHeight: '200px', overflowY: 'auto' } });
          const filtered = allOpts.filter(o => !searchKey || o.toLowerCase().includes(searchKey.toLowerCase()));
          filtered.forEach(o => {
            const checked = selected.includes(o);
            dropdown.appendChild(el('label', { class: 'hoverable', style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 6px', borderRadius: '5px', cursor: 'pointer', fontSize: '12.5px', color: '#FBFBFB' } }, [
              el('input', { type: 'checkbox', checked: checked, onchange: e2 => { let sel = selected.slice(); if (e2.target.checked) { if (!sel.includes(o)) sel.push(o); } else { sel = sel.filter(x => x !== o); } setState({ filterPanel: Object.assign({}, draft, { value: sel.join(','), _comboOpen: true, _search: '' }) }); }, style: { accentColor: '#27A767' } }),
              o
            ]));
          });
          comboWrap.appendChild(dropdown);
        }
        valueInputs = [comboWrap];
      } else if (f.type === 'enum') {
        valueInputs = [el('select', {
          value: draft.value,
          onchange: e => setState({ filterPanel: Object.assign({}, draft, { value: e.target.value }) }),
          style: { width: '100%', padding: '7px 8px', background: '#0E1820', border: '1px solid rgba(255,255,255,.12)', borderRadius: '6px', color: '#FBFBFB', fontFamily: 'inherit', fontSize: '12.5px' }
        }, [el('option', { value: '' }, ['— select —'])].concat(f.options.map(o => el('option', { value: o, selected: o === draft.value }, [o]))))];
      } else if (f.type === 'text_identity') {
        const uniqueVals = uniqueFieldValues(view, f.key);
        const selected = (draft.value || '').split(',').map(s2 => s2.trim()).filter(Boolean);
        const isOpen = !!draft._comboOpen;
        const searchKey = draft._search || '';
        const comboWrap = el('div', { style: { position: 'relative' } });
        const inputBox = el('div', {
          onclick: e2 => { e2.stopPropagation(); if (!isOpen) setState({ filterPanel: Object.assign({}, draft, { _comboOpen: true, _search: '' }) }); },
          style: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px', padding: '5px 8px', background: '#0E1820', border: '1px solid rgba(255,255,255,.12)', borderRadius: '6px', cursor: 'text', minHeight: '32px' }
        });
        if (isOpen) {
          selected.forEach(v => {
            inputBox.appendChild(el('div', { style: { display: 'flex', alignItems: 'center', gap: '3px', padding: '2px 6px', background: '#1E2E3A', border: '1px solid rgba(39,167,103,.3)', borderRadius: '4px', fontSize: '11px', fontWeight: '700', color: '#3FC281', whiteSpace: 'nowrap' } }, [
              v,
              el('span', { onclick: ev => { ev.stopPropagation(); setState({ filterPanel: Object.assign({}, draft, { value: selected.filter(x => x !== v).join(','), _comboOpen: true, _search: '' }) }); }, style: { cursor: 'pointer', color: '#EB4343', fontWeight: '800', fontSize: '12px', marginLeft: '2px' } }, ['×'])
            ]));
          });
          const inlineInput = el('input', {
            type: 'text', value: searchKey, placeholder: selected.length ? '' : 'Search...',
            onclick: e2 => e2.stopPropagation(),
            oninput: e2 => setState({ filterPanel: Object.assign({}, draft, { _search: e2.target.value, _comboOpen: true }) }),
            onkeydown: e2 => { if (e2.key === 'Backspace' && !searchKey && selected.length) { e2.stopPropagation(); setState({ filterPanel: Object.assign({}, draft, { value: selected.slice(0, -1).join(','), _comboOpen: true, _search: '' }) }); } },
            style: { flex: '1', minWidth: '40px', background: 'transparent', border: 'none', outline: 'none', color: '#FBFBFB', fontFamily: 'inherit', fontSize: '12px', padding: '0' }
          });
          inputBox.appendChild(inlineInput);
          requestAnimationFrame(() => { inlineInput.focus(); inlineInput.setSelectionRange(inlineInput.value.length, inlineInput.value.length); });
        } else if (selected.length > 0) {
          inputBox.appendChild(el('div', { style: { display: 'flex', alignItems: 'center', gap: '3px', padding: '2px 6px', background: '#1E2E3A', border: '1px solid rgba(39,167,103,.3)', borderRadius: '4px', fontSize: '11px', fontWeight: '700', color: '#3FC281', whiteSpace: 'nowrap' } }, [
            selected[0],
            el('span', { onclick: ev => { ev.stopPropagation(); setState({ filterPanel: Object.assign({}, draft, { value: selected.slice(1).join(',') }) }); }, style: { cursor: 'pointer', color: '#EB4343', fontWeight: '800', fontSize: '12px', marginLeft: '2px' } }, ['×'])
          ]));
          if (selected.length > 1) inputBox.appendChild(el('div', { style: { fontSize: '11px', fontWeight: '700', color: '#8B939B' } }, ['+' + (selected.length - 1)]));
          inputBox.appendChild(el('div', { style: { flex: '1' } }));
        } else {
          inputBox.appendChild(el('span', { style: { fontSize: '12px', color: '#6B7373' } }, ['Search...']));
          inputBox.appendChild(el('div', { style: { flex: '1' } }));
        }
        inputBox.appendChild(el('div', { onclick: e2 => { e2.stopPropagation(); setState({ filterPanel: Object.assign({}, draft, { _comboOpen: !isOpen, _search: '' }) }); }, style: { fontSize: '10px', color: '#8B939B', marginLeft: '4px', cursor: 'pointer', flexShrink: '0' } }, [isOpen ? '▲' : '▼']));
        comboWrap.appendChild(inputBox);
        if (isOpen) {
          const dropdown = el('div', { onclick: e2 => e2.stopPropagation(), style: { position: 'absolute', top: 'calc(100% + 4px)', left: '0', right: '0', zIndex: '100', background: '#131F27', border: '1px solid rgba(255,255,255,.12)', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,.5)', padding: '6px' } });
          const listWrap = el('div', { class: 'ef-scroll', style: { maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2px' } });
          const filtered = uniqueVals.filter(v => !searchKey || v.toLowerCase().includes(searchKey.toLowerCase()));
          filtered.forEach(v => {
            const checked = selected.includes(v);
            listWrap.appendChild(el('label', { class: 'hoverable', style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 6px', borderRadius: '5px', cursor: 'pointer', fontSize: '12.5px', color: '#FBFBFB' } }, [
              el('input', { type: 'checkbox', checked: checked, onchange: e2 => { let sel = selected.slice(); if (e2.target.checked) { if (!sel.includes(v)) sel.push(v); } else { sel = sel.filter(x => x !== v); } setState({ filterPanel: Object.assign({}, draft, { value: sel.join(','), _comboOpen: true, _search: '' }) }); }, style: { accentColor: '#27A767' } }),
              v
            ]));
          });
          dropdown.appendChild(listWrap);
          comboWrap.appendChild(dropdown);
        }
        valueInputs = [comboWrap];
      } else {
        const inputType = f.type === 'date' ? 'date' : (f.type === 'number' ? 'number' : 'text');
        const mk = (val, key2, placeholder) => {
          const inp = el('input', {
            type: inputType, value: val, placeholder: placeholder || (isMulti ? 'comma-separated' : ''),
            oninput: e => setState({ filterPanel: Object.assign({}, draft, { [key2]: e.target.value }) }),
            style: { width: '100%', padding: '7px 8px', background: '#0E1820', border: '1px solid rgba(255,255,255,.12)', borderRadius: '6px', color: '#FBFBFB', fontFamily: 'inherit', fontSize: '12.5px' }
          });
          if (val) setTimeout(() => { if (inp.isConnected) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); } }, 0);
          return inp;
        };
        if (draft.operator === 'today') {
          valueInputs = [el('div', { style: { fontSize: '12px', color: '#6B7373', fontStyle: 'italic' } }, ['Matches today\'s date'])];
        } else {
          valueInputs = isBetween
            ? [mk(draft.value, 'value', 'from'), el('div', { style: { height: '8px' } }), mk(draft.value2, 'value2', 'to')]
            : [mk(draft.value, 'value')];
        }
      }

      const editPanel = el('div', {
        style: { background: '#17242E', border: '1px solid rgba(255,255,255,.12)', borderRadius: '10px', padding: '14px', width: '220px', flexShrink: '0' }
      }, [
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' } }, [
          el('div', { style: { flex: '1', fontSize: '13.5px', fontWeight: '800' } }, [f.label]),
          el('div', {
            onclick: () => {
              const list2 = s[filtersKey].filter(x => x.key !== f.key);
              if (draft.value !== '' || isBetween) list2.push({ key: f.key, operator: draft.operator, value: draft.value, value2: draft.value2 });
              const patch = { [filtersKey]: list2, openPopover: null, filterPanel: null, page: 1 };
              if (view === 'loads' && f.key === 'status') {
                const statusFilter = list2.find(x => x.key === 'status');
                if (!statusFilter) {
                  patch.loadTab = 'All Loads';
                } else {
                  const vals = statusFilter.value.split(',');
                  if (vals.length === 1) {
                    const v = vals[0];
                    const tabName = v === 'In Transit' || v === 'Dispatched' ? 'On The Road' : v;
                    const tabExists = LOAD_TABS.includes(tabName);
                    patch.loadTab = tabExists ? tabName : 'All Loads';
                  } else {
                    patch.loadTab = 'All Loads';
                  }
                }
              }
              setState(patch);
            },
            style: { fontSize: '12.5px', fontWeight: '800', color: '#3FC281', cursor: 'pointer' }
          }, ['Apply'])
        ]),
        opSelect,
        el('div', {}, valueInputs),
        s[filtersKey].some(x => x.key === f.key) ? el('div', {
          onclick: () => {
            const patch = { [filtersKey]: s[filtersKey].filter(x => x.key !== f.key), openPopover: null, filterPanel: null, page: 1 };
            if (view === 'loads' && f.key === 'status') patch.loadTab = 'All Loads';
            setState(patch);
          },
          style: { marginTop: '10px', fontSize: '11.5px', fontWeight: '800', color: '#EB4343', cursor: 'pointer', textAlign: 'center' }
        }, ['Remove filter']) : null
      ]);

      container.appendChild(editPanel);
    }

    container.insertBefore(fieldListPanel, container.firstChild);
    wrap.appendChild(container);
    return wrap;
  }

  // ---- filter chip portal (edit panel anchored to the chip, not the funnel button) ----
  var _chipFilterPortal = null;
  function _openChipFilter(chipEl, f, view) {
    var _isSame = _chipFilterPortal && _chipFilterPortal._chipKey === f.key;
    if (_chipFilterPortal) { _chipFilterPortal.remove(); _chipFilterPortal = null; }
    if (_isSame) return;
    var filtersKey = view === 'loads' ? 'loadFilters' : 'routeFilters';
    var fieldsByKey = view === 'loads' ? LOAD_FIELDS_BY_KEY : ROUTE_FIELDS_BY_KEY;
    var field = fieldsByKey[f.key];
    if (!field) return;
    var F = 'Nunito,system-ui';
    var portal = document.createElement('div');
    portal._chipKey = f.key;
    portal.style.cssText = 'position:fixed;z-index:1000;background:#17242E;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:14px;box-shadow:0 12px 32px rgba(0,0,0,.55);width:230px;font-family:'+F+';box-sizing:border-box';
    portal.addEventListener('click', function(e) { e.stopPropagation(); });
    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:10px';
    var lbl = document.createElement('div');
    lbl.style.cssText = 'flex:1;font:800 13.5px '+F+';color:#FBFBFB';
    lbl.textContent = field.label;
    var applyBtn = document.createElement('div');
    applyBtn.style.cssText = 'font:800 12.5px '+F+';color:#3FC281;cursor:pointer';
    applyBtn.textContent = 'Apply';
    hdr.appendChild(lbl); hdr.appendChild(applyBtn);
    portal.appendChild(hdr);
    // Operator
    var opSel = document.createElement('select');
    opSel.style.cssText = 'width:100%;padding:7px 8px;background:#0E1820;border:1px solid rgba(255,255,255,.12);border-radius:6px;color:#FBFBFB;font:400 12.5px '+F+';margin-bottom:10px;box-sizing:border-box';
    (OPERATORS[field.type] || OPERATORS.text).forEach(function(o) {
      var opt = document.createElement('option'); opt.value = o.v; opt.textContent = o.label;
      if (o.v === f.operator) opt.selected = true; opSel.appendChild(opt);
    });
    portal.appendChild(opSel);
    if (field.type === 'enum') {
      opSel.addEventListener('change', function() {
        var newOp = opSel.value;
        var curVal = '';
        if (valInput) curVal = typeof valInput.value === 'string' ? valInput.value : '';
        portal.remove(); _chipFilterPortal = null;
        _openChipFilter(chipEl, { key: f.key, operator: newOp, value: curVal, value2: f.value2 || '' }, view);
      });
    }
    // Value inputs
    var valInput, val2Input, val2Wrap, checkboxWrap;
    var inputCSS = 'width:100%;padding:7px 8px;background:#0E1820;border:1px solid rgba(255,255,255,.12);border-radius:6px;color:#FBFBFB;font:400 12.5px '+F+';box-sizing:border-box';
    var inputType = field.type === 'date' ? 'date' : (field.type === 'number' ? 'number' : 'text');
    var _isMultiOp = f.operator === 'in' || f.operator === 'not_in' || f.operator === 'is_in';
    if ((field.type === 'enum' && _isMultiOp) || field.type === 'text_identity') {
      var _allOpts = field.type === 'text_identity' ? uniqueFieldValues(view, f.key) : (field.options || []);
      var _selVals = (f.value || '').split(',').map(function(s){return s.trim();}).filter(Boolean);
      var _comboOpen = false;
      var _comboSearch = '';
      var _comboWrap = document.createElement('div');
      _comboWrap.style.cssText = 'position:relative';
      var _inputBox = document.createElement('div');
      _inputBox.style.cssText = 'display:flex;align-items:center;flex-wrap:wrap;gap:4px;padding:5px 8px;background:#0E1820;border:1px solid rgba(255,255,255,.12);border-radius:6px;cursor:text;min-height:32px';
      var _dropdown = document.createElement('div');
      _dropdown.style.cssText = 'display:none;position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:100;background:#131F27;border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.5);padding:6px';
      _dropdown.addEventListener('click', function(e3) { e3.stopPropagation(); });
      var _inlineInput = document.createElement('input');
      _inlineInput.type = 'text';
      _inlineInput.style.cssText = 'flex:1;min-width:40px;background:transparent;border:none;outline:none;color:#FBFBFB;font:400 12px '+F+';padding:0';
      _inlineInput.addEventListener('click', function(e3) { e3.stopPropagation(); if (!_comboOpen) { _comboOpen = true; _dropdown.style.display = 'block'; _renderComboBox(); _renderComboList(); } });
      _inlineInput.addEventListener('input', function() { _comboSearch = _inlineInput.value; if (!_comboOpen) { _comboOpen = true; _dropdown.style.display = 'block'; _renderComboBox(); } _renderComboList(); });
      _inlineInput.addEventListener('keydown', function(e3) { if (e3.key === 'Backspace' && !_comboSearch && _selVals.length) { e3.stopPropagation(); _selVals.pop(); valInput.value = _selVals.join(','); _renderComboBox(); _renderComboList(); } });
      var _listWrap = document.createElement('div');
      _listWrap.style.cssText = 'display:flex;flex-direction:column;gap:2px;max-height:180px;overflow-y:auto';
      _dropdown.appendChild(_listWrap);
      _comboWrap.appendChild(_inputBox);
      _comboWrap.appendChild(_dropdown);
      valInput = { value: f.value || '' };
      function _makeChip(v, removable) {
        var chip = document.createElement('div');
        chip.style.cssText = 'display:flex;align-items:center;gap:3px;padding:2px 6px;background:#1E2E3A;border:1px solid rgba(39,167,103,.3);border-radius:4px;font:700 11px '+F+';color:#3FC281;white-space:nowrap';
        chip.textContent = v;
        if (removable) {
          var x = document.createElement('span');
          x.textContent = '×'; x.style.cssText = 'cursor:pointer;color:#EB4343;font-weight:800;font-size:12px;margin-left:2px';
          x.addEventListener('click', function(e3) { e3.stopPropagation(); var idx = _selVals.indexOf(v); if (idx >= 0) _selVals.splice(idx, 1); valInput.value = _selVals.join(','); _renderComboBox(); _renderComboList(); _inlineInput.focus(); });
          chip.appendChild(x);
        }
        return chip;
      }
      function _renderComboBox() {
        _inputBox.innerHTML = '';
        if (_comboOpen) {
          _selVals.forEach(function(v) { _inputBox.appendChild(_makeChip(v, true)); });
          _inlineInput.value = _comboSearch;
          _inlineInput.placeholder = _selVals.length ? '' : 'Search...';
          _inputBox.appendChild(_inlineInput);
        } else if (_selVals.length > 0) {
          _inputBox.appendChild(_makeChip(_selVals[0], true));
          if (_selVals.length > 1) { var plus = document.createElement('div'); plus.style.cssText = 'font:700 11px '+F+';color:#8B939B'; plus.textContent = '+' + (_selVals.length - 1); _inputBox.appendChild(plus); }
          var spacer = document.createElement('div'); spacer.style.flex = '1'; _inputBox.appendChild(spacer);
        } else {
          var ph = document.createElement('span'); ph.style.cssText = 'font:400 12px '+F+';color:#6B7373'; ph.textContent = 'Search...'; _inputBox.appendChild(ph);
          var spacer = document.createElement('div'); spacer.style.flex = '1'; _inputBox.appendChild(spacer);
        }
        var chev = document.createElement('div'); chev.style.cssText = 'font-size:10px;color:#8B939B;margin-left:4px;flex-shrink:0;cursor:pointer'; chev.textContent = _comboOpen ? '▲' : '▼';
        chev.addEventListener('click', function(e3) { e3.stopPropagation(); _comboOpen = !_comboOpen; _dropdown.style.display = _comboOpen ? 'block' : 'none'; _comboSearch = ''; _renderComboBox(); if (_comboOpen) { _renderComboList(); _inlineInput.focus(); } });
        _inputBox.appendChild(chev);
      }
      function _renderComboList() {
        _listWrap.innerHTML = '';
        var filtered = _allOpts.filter(function(v) { return !_comboSearch || v.toLowerCase().indexOf(_comboSearch.toLowerCase()) >= 0; });
        filtered.forEach(function(v) {
          var lbl = document.createElement('label');
          lbl.className = 'hoverable';
          lbl.style.cssText = 'display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:5px;cursor:pointer;font:400 12.5px '+F+';color:#FBFBFB';
          var cb = document.createElement('input');
          cb.type = 'checkbox'; cb.checked = _selVals.indexOf(v) >= 0; cb.style.accentColor = '#27A767';
          cb.addEventListener('change', function() {
            var idx = _selVals.indexOf(v);
            if (cb.checked) { if (idx === -1) _selVals.push(v); } else { if (idx >= 0) _selVals.splice(idx, 1); }
            valInput.value = _selVals.join(',');
            _comboSearch = ''; _inlineInput.value = '';
            _renderComboBox();
            _renderComboList();
            _inlineInput.focus();
          });
          lbl.appendChild(cb); lbl.appendChild(document.createTextNode(v));
          _listWrap.appendChild(lbl);
        });
      }
      _inputBox.addEventListener('click', function(e3) {
        e3.stopPropagation();
        if (!_comboOpen) { _comboOpen = true; _dropdown.style.display = 'block'; _comboSearch = ''; _renderComboBox(); _renderComboList(); _inlineInput.focus(); }
      });
      _renderComboBox();
      _renderComboList();
      document.addEventListener('click', function _closeCombo(e3) {
        if (!_comboWrap.contains(e3.target)) { _comboOpen = false; _comboSearch = ''; _dropdown.style.display = 'none'; _renderComboBox(); document.removeEventListener('click', _closeCombo); }
      });
      portal.appendChild(_comboWrap);
    } else if (field.type === 'enum') {
      valInput = document.createElement('select');
      valInput.style.cssText = inputCSS;
      var emptyOpt = document.createElement('option'); emptyOpt.value = ''; emptyOpt.textContent = '— select —'; valInput.appendChild(emptyOpt);
      (field.options || []).forEach(function(o) { var opt = document.createElement('option'); opt.value = o; opt.textContent = o; if (o === f.value) opt.selected = true; valInput.appendChild(opt); });
      portal.appendChild(valInput);
    } else {
      valInput = document.createElement('input');
      valInput.type = inputType; valInput.value = f.value || '';
      valInput.style.cssText = inputCSS;
      var _todayHint = document.createElement('div');
      _todayHint.style.cssText = 'font:italic 400 12px '+F+';color:#6B7373;display:' + (f.operator === 'today' ? 'block' : 'none');
      _todayHint.textContent = "Matches today's date";
      valInput.style.display = f.operator === 'today' ? 'none' : '';
      portal.appendChild(valInput);
      portal.appendChild(_todayHint);
      val2Wrap = document.createElement('div');
      val2Wrap.style.display = f.operator === 'between' ? '' : 'none';
      val2Input = document.createElement('input');
      val2Input.type = inputType; val2Input.value = f.value2 || '';
      val2Input.style.cssText = inputCSS + ';margin-top:8px';
      val2Wrap.appendChild(val2Input);
      portal.appendChild(val2Wrap);
      opSel.addEventListener('change', function() {
        var isToday = opSel.value === 'today';
        valInput.style.display = isToday ? 'none' : '';
        _todayHint.style.display = isToday ? 'block' : 'none';
        if (val2Wrap) val2Wrap.style.display = opSel.value === 'between' ? '' : 'none';
      });
    }
    // Remove link
    var removeBtn = document.createElement('div');
    removeBtn.style.cssText = 'margin-top:10px;font:800 11.5px '+F+';color:#EB4343;cursor:pointer;text-align:center';
    removeBtn.textContent = 'Remove filter';
    removeBtn.addEventListener('click', function() {
      setState({ [filtersKey]: state[filtersKey].filter(function(x) { return x.key !== f.key; }), page: 1 });
      portal.remove(); _chipFilterPortal = null;
    });
    portal.appendChild(removeBtn);
    // Apply
    applyBtn.addEventListener('click', function() {
      var newVal;
      if (checkboxWrap) {
        var cbs = checkboxWrap.querySelectorAll('input[type=checkbox]');
        var sel = [];
        cbs.forEach(function(cb) { if (cb.checked) sel.push(cb.dataset.optVal); });
        newVal = sel.join(',');
      } else {
        newVal = valInput.value;
      }
      var newVal2 = val2Input ? val2Input.value : '';
      var list2 = state[filtersKey].filter(function(x) { return x.key !== f.key; });
      if (newVal !== '') list2.push({ key: f.key, operator: opSel.value, value: newVal, value2: newVal2 });
      var patch = { [filtersKey]: list2, page: 1 };
      if (view === 'loads' && f.key === 'status') {
        var statusF = list2.find(function(x) { return x.key === 'status'; });
        if (!statusF) {
          patch.loadTab = 'All Loads';
        } else {
          var vals = statusF.value.split(',');
          if (vals.length === 1) {
            var tabName = vals[0] === 'In Transit' || vals[0] === 'Dispatched' ? 'On The Road' : vals[0];
            patch.loadTab = LOAD_TABS.includes(tabName) ? tabName : 'All Loads';
          } else {
            patch.loadTab = 'All Loads';
          }
        }
      }
      setState(patch);
      portal.remove(); _chipFilterPortal = null;
    });
    document.body.appendChild(portal);
    _chipFilterPortal = portal;
    // Position below chip
    var cr = chipEl.getBoundingClientRect();
    var pw = portal.offsetWidth || 230;
    var left = cr.left;
    if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;
    portal.style.left = Math.max(8, left) + 'px';
    portal.style.top = (cr.bottom + 6) + 'px';
    // Outside click to close
    function _chipOutside(ev) {
      if (!portal.contains(ev.target) && !chipEl.contains(ev.target)) {
        portal.remove(); _chipFilterPortal = null;
        document.removeEventListener('click', _chipOutside, true);
      }
    }
    setTimeout(function() { document.addEventListener('click', _chipOutside, true); }, 0);
  }

  // ---- active filter chips row ----
  function filterChipsRow(view) {
    const s = state;
    const filtersKey = view === 'loads' ? 'loadFilters' : 'routeFilters';
    const fieldsByKey = view === 'loads' ? LOAD_FIELDS_BY_KEY : ROUTE_FIELDS_BY_KEY;
    const filters = s[filtersKey];
    if (!filters.length) return null;
    const row = el('div', { class: 'ef-scroll', style: { flex: 'none', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px', background: '#0E1820', borderBottom: '1px solid rgba(255,255,255,.07)', overflowX: 'auto' } });
    filters.forEach(f => {
      const field = fieldsByKey[f.key];
      const chipEl = el('div', {
        style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 6px 5px 12px', borderRadius: '999px', background: 'rgba(39,167,103,.12)', border: '1px solid rgba(39,167,103,.35)', color: '#3FC281', fontSize: '11.5px', fontWeight: '700', whiteSpace: 'nowrap' }
      }, [
        el('span', {
          onclick: (ev) => { ev.stopPropagation(); _openChipFilter(chipEl, f, view); },
          style: { cursor: 'pointer' }
        }, [filterChipLabel(field, f)]),
        el('span', {
          onclick: () => {
            const patch = { [filtersKey]: s[filtersKey].filter(x => x.key !== f.key), page: 1 };
            if (f.key === 'status') {
              if (view === 'loads') patch.loadTab = 'All Loads';
            }
            setState(patch);
          },
          style: { cursor: 'pointer', width: '16px', height: '16px', display: 'grid', placeItems: 'center', borderRadius: '999px', color: '#FBFBFB', background: 'rgba(255,255,255,.08)' }
        }, ['×'])
      ]);
      row.appendChild(chipEl);
    });
    return row;
  }

  function renderLoadsTable() {
    const s = state;
    const cols = visibleLoadCols();
    const gridTemplate = cols.map(c => c.width + 'px').join(' ');
    const innerMinWidth = cols.reduce((a, c) => a + c.width, 0) + 40;

    const scroll = el('div', { class: 'ef-scroll', style: { overflowX: 'auto' } });
    const inner = el('div', { style: { minWidth: innerMinWidth + 'px' } });

    const headRow = el('div', { style: { display: 'grid', gridTemplateColumns: gridTemplate, padding: '0 20px', background: '#131F27', borderBottom: '1px solid rgba(255,255,255,.07)', position: 'sticky', top: '0', zIndex: '3' } });
    cols.forEach(c => {
      const active = s.loadSort.key === c.key;
      const arrow = active ? (s.loadSort.dir === 'asc' ? '↑' : '↓') : '⇅';
      headRow.appendChild(el('div', {
        draggable: true,
        ondragstart: e => { dragColKey = c.key; e.dataTransfer.effectAllowed = 'move'; },
        ondragover: e => e.preventDefault(),
        ondrop: e => {
          e.preventDefault();
          if (!dragColKey || dragColKey === c.key) return;
          const order = state.columnOrder.slice();
          const from = order.indexOf(dragColKey);
          const to = order.indexOf(c.key);
          order.splice(from, 1);
          order.splice(to, 0, dragColKey);
          dragColKey = null;
          setState({ columnOrder: order });
        },
        onclick: () => sortBy('loadSort', c.key),
        title: 'Click para ordenar · arrastra para mover',
        style: { display: 'flex', alignItems: 'center', gap: '5px', padding: '11px 8px 11px 0', cursor: 'grab', fontSize: '11.5px', fontWeight: '800', letterSpacing: '0.02em', color: active ? ACTIVE : MUTED, userSelect: 'none' }
      }, [c.label, el('span', { style: { fontSize: '10px', opacity: '.8' } }, [arrow])]));
    });
    inner.appendChild(headRow);

    const loads = visibleLoads();
    const totalPages = Math.max(1, Math.ceil(loads.length / s.rows));
    const page = Math.min(s.page, totalPages);
    const start = (page - 1) * s.rows;
    const pageLoads = loads.slice(start, start + s.rows);

    if (pageLoads.length === 0) {
      inner.appendChild(el('div', { style: { padding: '60px 20px', textAlign: 'center', color: '#6B7373', fontSize: '13px' } }, [
          el('div', { style: { fontWeight: '700', marginBottom: '6px', fontSize: '14px' } }, ['No results found for the selected filters.']),
          el('div', { style: { fontWeight: '400', fontSize: '13px' } }, ['Try adjusting or clearing your filters to see more results.'])
        ]));
    }

    pageLoads.forEach(l => {
      const r = routeOf(l.route);
      const idx = loadsOf(l.route).indexOf(l) + 1;
      const st = STATUS[l.status] || STATUS['Unbooked'];
      const onTimeFg = l.onTime === 'On time' ? '#3FC281' : (l.onTime && l.onTime.startsWith('Late') ? '#EB4343' : '#6B7373');
      const driverShort = r.driver === 'Unassigned' ? 'Unassign…' : r.driver.split(' ')[0];
      const routeNameShort = r.name.replace(/_\d{4}-\d{2}-\d{2}$/, '');

      const cells = {
        id: el('div', { style: { padding: '13px 8px 13px 0', fontWeight: '800', fontSize: '12.5px' } }, [l.id]),
        status: el('div', { style: { padding: '13px 8px 13px 0' } }, [pill(l.status, st[0], st[1])]),
        route: r.id
          ? el('div', { style: { padding: '13px 8px 13px 0' } }, [
              el('div', {
                onclick: e => { e.stopPropagation(); setState({ view: 'routes', openRoute: r.id, openLoad: null, detailTab: 'plan', controlMode: 'route', controlLane: null }); },
                style: { display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#7BCBCB', fontWeight: '700', fontSize: '12px', cursor: 'pointer', borderBottom: '1px dashed rgba(123,203,203,.4)' }
              }, [iconEl('route'), routeNameShort]),
              el('div', { style: { color: '#6B7373', fontSize: '10.5px', marginTop: '2px' } }, ['Lane ' + idx + ' of ' + loadsOf(l.route).length])
            ])
          : el('div', { style: { padding: '13px 8px 13px 0', color: '#6B7373', fontWeight: '600', fontSize: '12px', fontStyle: 'italic' } }, ['No route']),
        origin: el('div', { style: { padding: '13px 8px 13px 0', color: '#7BCBCB', fontWeight: '600', fontSize: '12.5px' } }, [l.origin]),
        dest: el('div', { style: { padding: '13px 8px 13px 0', color: '#7BCBCB', fontWeight: '600', fontSize: '12.5px' } }, [l.dest]),
        miles: el('div', { style: { padding: '13px 8px 13px 0', fontWeight: '700', fontSize: '12.5px' } }, [l.miles.toLocaleString('en-US') + ' mi']),
        pickup: el('div', { style: { padding: '13px 8px 13px 0' } }, [
          el('div', { style: { fontWeight: '700', fontSize: '12px' } }, [l.pickup]),
          el('div', { style: { color: '#6B7373', fontSize: '10.5px', fontFamily: "'JetBrains Mono', monospace" } }, [l.pickupTime])
        ]),
        delivery: el('div', { style: { padding: '13px 8px 13px 0' } }, [
          el('div', { style: { fontWeight: '700', fontSize: '12px' } }, [l.delivery]),
          el('div', { style: { color: '#6B7373', fontSize: '10.5px', fontFamily: "'JetBrains Mono', monospace" } }, [l.deliveryTime])
        ]),
        eta: el('div', { style: { padding: '13px 8px 13px 0', color: '#ABABAB', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" } }, [l.eta]),
        onTime: el('div', { style: { padding: '13px 8px 13px 0' } }, [el('span', { style: { fontSize: '11px', fontWeight: '800', color: onTimeFg } }, [l.onTime])]),
        income: el('div', { style: { padding: '13px 8px 13px 0' } }, [
          el('div', { style: { fontWeight: '800', color: '#3FC281', fontSize: '12.5px' } }, [money(l.income)]),
          el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['$' + (l.income / l.miles).toFixed(2) + '/mi'])
        ]),
        driver: el('div', { style: { padding: '13px 8px 13px 0', display: 'flex', alignItems: 'center', gap: '6px' } }, [
          avatar(r.driver), el('span', { style: { color: '#C9CED2', fontSize: '11.5px' } }, [driverShort])
        ]),
        truck: el('div', { style: { padding: '13px 8px 13px 0', color: '#ABABAB', fontSize: '11.5px', fontFamily: "'JetBrains Mono', monospace" } }, [l.truck]),
        equipment: el('div', { style: { padding: '13px 8px 13px 0', color: '#ABABAB', fontSize: '11.5px' } }, [l.equipment]),
        equipmentType: el('div', { style: { padding: '13px 8px 13px 0', color: '#ABABAB', fontSize: '11.5px' } }, [l.equipmentType || '']),
        stops: el('div', { style: { padding: '13px 8px 13px 0', fontWeight: '700', fontSize: '12.5px' } }, [String(l.stops)]),
        customer: el('div', { style: { padding: '13px 8px 13px 0', color: '#C9CED2', fontSize: '12px' } }, [l.customer])
      };

      const row = el('div', {
        class: 'row-hoverable',
        onclick: () => setState({ openLoad: l.id, drawerTab: 'Load' }),
        style: { display: 'grid', gridTemplateColumns: gridTemplate, alignItems: 'center', padding: '0 20px', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,.05)', background: s.openLoad === l.id ? 'rgba(39,167,103,.07)' : 'transparent' }
      }, cols.map(c => cells[c.key]));
      inner.appendChild(row);
    });

    scroll.appendChild(inner);
    return scroll;
  }

  function renderLoadsFooter() {
    const s = state;
    const loads = visibleLoads();
    const totalPages = Math.max(1, Math.ceil(loads.length / s.rows));
    const page = Math.min(s.page, totalPages);
    const start = (page - 1) * s.rows;

    const label = 'Showing ' + (loads.length ? start + 1 : 0) + '-' + Math.min(start + s.rows, loads.length) + ' of ' + loads.length + (s.routeFilterIds ? ' · filtered to route ' + s.routeFilterIds.join(', ') : '');

    const pager = el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px' } }, [
      el('div', { class: 'hoverable', onclick: () => setState({ page: Math.max(1, page - 1) }), style: { display: 'grid', placeItems: 'center', width: '26px', height: '26px', borderRadius: '6px', cursor: 'pointer', color: '#8B939B' } }, ['‹'])
    ]);
    for (let i = 1; i <= totalPages; i++) {
      const n = i;
      pager.appendChild(el('div', {
        onclick: () => setState({ page: n }),
        style: { display: 'grid', placeItems: 'center', minWidth: '26px', height: '26px', padding: '0 6px', borderRadius: '6px', cursor: 'pointer', fontWeight: '800', background: page === n ? ACTIVE : 'transparent', color: page === n ? '#0B131B' : '#8B939B' }
      }, [String(n)]));
    }
    pager.appendChild(el('div', { class: 'hoverable', onclick: () => setState({ page: Math.min(totalPages, page + 1) }), style: { display: 'grid', placeItems: 'center', width: '26px', height: '26px', borderRadius: '6px', cursor: 'pointer', color: '#8B939B' } }, ['›']));

    const rowsSelect = el('select', {
      value: String(s.rows),
      onchange: e => setState({ rows: Number(e.target.value), page: 1 }),
      style: { padding: '4px 8px', background: '#17242E', color: '#FBFBFB', border: '1px solid rgba(255,255,255,.12)', borderRadius: '6px', fontFamily: 'inherit', fontSize: '12px' }
    }, [
      el('option', { value: '10' }, ['10']),
      el('option', { value: '25' }, ['25']),
      el('option', { value: '50' }, ['50'])
    ]);

    return el('div', { style: { flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', background: '#0E1820', borderBottom: '1px solid rgba(255,255,255,.07)', borderTop: '1px solid rgba(255,255,255,.07)', color: '#ABABAB', fontSize: '12px', fontWeight: '600' } }, [
      el('div', {}, [label]),
      pager,
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, ['Rows:', rowsSelect])
    ]);
  }

  function renderRoutesFooter() {
    const s = state;
    const routes = visibleRoutes();
    const totalPages = Math.max(1, Math.ceil(routes.length / s.routeRows));
    const page = Math.min(s.routePage, totalPages);
    const start = (page - 1) * s.routeRows;
    const label = 'Showing ' + (routes.length ? start + 1 : 0) + '-' + Math.min(start + s.routeRows, routes.length) + ' of ' + routes.length;
    const pager = el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px' } }, [
      el('div', { class: 'hoverable', onclick: () => setState({ routePage: Math.max(1, page - 1) }), style: { display: 'grid', placeItems: 'center', width: '26px', height: '26px', borderRadius: '6px', cursor: 'pointer', color: '#8B939B' } }, ['‹'])
    ]);
    for (let i = 1; i <= totalPages; i++) {
      const n = i;
      pager.appendChild(el('div', {
        onclick: () => setState({ routePage: n }),
        style: { display: 'grid', placeItems: 'center', minWidth: '26px', height: '26px', padding: '0 6px', borderRadius: '6px', cursor: 'pointer', fontWeight: '800', background: page === n ? ACTIVE : 'transparent', color: page === n ? '#0B131B' : '#8B939B' }
      }, [String(n)]));
    }
    pager.appendChild(el('div', { class: 'hoverable', onclick: () => setState({ routePage: Math.min(totalPages, page + 1) }), style: { display: 'grid', placeItems: 'center', width: '26px', height: '26px', borderRadius: '6px', cursor: 'pointer', color: '#8B939B' } }, ['›']));
    const rowsSelect = el('select', {
      value: String(s.routeRows),
      onchange: e => setState({ routeRows: Number(e.target.value), routePage: 1 }),
      style: { padding: '4px 8px', background: '#17242E', color: '#FBFBFB', border: '1px solid rgba(255,255,255,.12)', borderRadius: '6px', fontFamily: 'inherit', fontSize: '12px' }
    }, [el('option', { value: '10' }, ['10']), el('option', { value: '25' }, ['25']), el('option', { value: '50' }, ['50'])]);
    return el('div', { style: { flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', background: '#0E1820', borderBottom: '1px solid rgba(255,255,255,.07)', borderTop: '1px solid rgba(255,255,255,.07)', color: '#ABABAB', fontSize: '12px', fontWeight: '600' } }, [
      el('div', {}, [label]),
      pager,
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, ['Rows:', rowsSelect])
    ]);
  }

  function routeGridTemplate(cols) {
    return cols.map(c => (typeof c.width === 'number' ? c.width + 'px' : c.width)).join(' ') + ' 52px';
  }

  function renderRouteCardsHeader(cols) {
    const s = state;
    const gridTemplate = routeGridTemplate(cols);
    const head = el('div', { style: { display: 'grid', gridTemplateColumns: gridTemplate, alignItems: 'center', padding: '0 20px', background: '#131F27', borderBottom: '1px solid rgba(255,255,255,.07)', position: 'sticky', top: '0', zIndex: '3' } });
    cols.forEach(c => {
      const sortKey = ROUTE_SORT_KEY[c.key];
      const active = s.routeSort.key === sortKey;
      const arrow = active ? (s.routeSort.dir === 'asc' ? '↑' : '↓') : '⇅';
      head.appendChild(el('div', {
        draggable: true,
        ondragstart: e => { dragColKey = c.key; e.dataTransfer.effectAllowed = 'move'; },
        ondragover: e => e.preventDefault(),
        ondrop: e => {
          e.preventDefault();
          if (!dragColKey || dragColKey === c.key) return;
          const order = s.routeColumnOrder.slice();
          const from = order.indexOf(dragColKey);
          const to = order.indexOf(c.key);
          order.splice(from, 1);
          order.splice(to, 0, dragColKey);
          dragColKey = null;
          setState({ routeColumnOrder: order });
        },
        onclick: () => sortBy('routeSort', sortKey),
        title: 'Click para ordenar · arrastra para mover',
        style: { display: 'flex', alignItems: 'center', gap: '5px', padding: '10px 8px 10px 0', cursor: 'grab', fontSize: '11.5px', fontWeight: '800', letterSpacing: '.02em', color: active ? ACTIVE : MUTED, userSelect: 'none' }
      }, [c.label, el('span', { style: { fontSize: '10px', opacity: '.8' } }, [arrow])]));
    });
    head.appendChild(el('div', {}, []));
    return head;
  }

  function buildHealthCell(st, r) {
    const rpm = st.effectiveRpm, dhp = st.dhPct;
    // Use 1.7/mi as the operating cost benchmark for health display
    const ppm = st.totalMiles ? (st.income - st.totalMiles * 1.7) / st.totalMiles : 0;
    const isCompleted = r && r.status === 'Completed';
    const isPlanned = r && r.status === 'Planned';
    // In-progress: unbooked/canceled = critical. Planned: unbooked = attention. Completed: ignore.
    const unbookedCount = isCompleted ? 0 : st.loads.filter(l => l.status === 'Unbooked').length;
    const canceledCount = isCompleted ? 0 : st.loads.filter(l => l.status === 'Canceled').length;
    const offerCount = st.loads.filter(l => l.status === 'Offer').length;
    const fuelRatio = st.income ? st.fuelExcess / st.income : 0;
    const devRatio = st.income ? st.routeDeviation / st.income : 0;

    const isCritical = !isPlanned && (unbookedCount > 0 || canceledCount > 0) || rpm < 1.5 || dhp > 25 || ppm < 0;
    const isAttention = !isCritical && (rpm < 2.0 || dhp > 15 || (isPlanned && unbookedCount > 0) || offerCount > 0 || fuelRatio > 0.07 || devRatio > 0.05 || ppm < 0.3);

    let dot, label;
    if (isCritical) { dot = '#EB4343'; label = 'Critical'; }
    else if (isAttention) { dot = '#FBB303'; label = 'Attention'; }
    else { dot = '#27A767'; label = 'Healthy'; }

    const allUnbooked = unbookedCount + canceledCount;
    const metrics = [
      { label: 'Effective RPM', value: '$' + rpm.toFixed(2) + '/mi', flagged: rpm < 2.0, critical: rpm < 1.5 },
      { label: 'Profit per mile', value: (ppm >= 0 ? '+$' : '-$') + Math.abs(ppm).toFixed(2) + '/mi', flagged: ppm < 0.3, critical: ppm < 0 },
      { label: '% Deadhead', value: dhp.toFixed(1) + '%', flagged: dhp > 15, critical: dhp > 25 },
      { label: 'Unbooked loads', value: allUnbooked > 0 ? allUnbooked + ' lane' + (allUnbooked > 1 ? 's' : '') : offerCount > 0 ? offerCount + ' in offer' : 'None', flagged: allUnbooked > 0 || offerCount > 0, critical: !isPlanned && allUnbooked > 0 },
      { label: 'Fuel missed savings', value: '$' + st.fuelExcess.toLocaleString('en-US'), flagged: fuelRatio > 0.07, critical: false },
      { label: 'Excess miles cost', value: '$' + st.routeDeviation.toLocaleString('en-US'), flagged: devRatio > 0.05, critical: false }
    ];

    const cell = el('div', { style: { padding: '12px 8px 12px 0', display: 'flex', alignItems: 'center', cursor: 'default', position: 'relative' } }, [
      el('div', { style: { width: '10px', height: '10px', borderRadius: '50%', background: dot, boxShadow: '0 0 7px ' + dot, flexShrink: '0' } })
    ]);

    let tipEl = null;
    cell.addEventListener('mouseenter', () => {
      tipEl = document.createElement('div');
      tipEl.setAttribute('data-ef-htip', '1');
      Object.assign(tipEl.style, {
        position: 'fixed', zIndex: '9999', width: '230px',
        background: '#0E1820', border: '1px solid rgba(255,255,255,.12)',
        borderRadius: '10px', padding: '10px', boxShadow: '0 8px 28px rgba(0,0,0,.55)',
        fontFamily: 'Nunito, Manrope, system-ui, sans-serif', pointerEvents: 'none'
      });
      // Header
      const hdr = document.createElement('div');
      Object.assign(hdr.style, { display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,.08)' });
      const dotEl = document.createElement('div');
      Object.assign(dotEl.style, { width: '8px', height: '8px', borderRadius: '50%', background: dot, boxShadow: '0 0 6px ' + dot, flexShrink: '0' });
      const lblEl = document.createElement('span');
      Object.assign(lblEl.style, { fontSize: '11px', fontWeight: '800', color: dot });
      lblEl.textContent = label + ' · Route health';
      hdr.appendChild(dotEl); hdr.appendChild(lblEl);
      tipEl.appendChild(hdr);

      metrics.forEach(m => {
        const row = document.createElement('div');
        Object.assign(row.style, {
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '5px 7px', borderRadius: '6px', marginBottom: '2px',
          background: m.critical ? 'rgba(235,67,67,.1)' : m.flagged ? 'rgba(251,179,3,.07)' : 'transparent',
          borderLeft: m.critical ? '2px solid #EB4343' : m.flagged ? '2px solid #FBB303' : '2px solid transparent'
        });
        const lbl = document.createElement('span');
        Object.assign(lbl.style, { fontSize: '11px', color: m.critical ? '#EB4343' : m.flagged ? '#FBB303' : '#8B939B' });
        lbl.textContent = m.label;
        const val = document.createElement('span');
        Object.assign(val.style, { fontSize: '11px', fontWeight: '700', color: m.critical ? '#EB4343' : m.flagged ? '#FBB303' : '#FBFBFB', fontVariantNumeric: 'tabular-nums' });
        val.textContent = m.value;
        row.appendChild(lbl); row.appendChild(val);
        tipEl.appendChild(row);
      });

      document.body.appendChild(tipEl);
      const rect = cell.getBoundingClientRect();
      const tipW = 230, tipH = tipEl.offsetHeight;
      let left = rect.left;
      if (left + tipW > window.innerWidth - 8) left = window.innerWidth - tipW - 8;
      let top = rect.bottom + 6;
      if (top + tipH > window.innerHeight - 8) top = rect.top - tipH - 6;
      tipEl.style.left = left + 'px';
      tipEl.style.top = top + 'px';
    });
    cell.addEventListener('mouseleave', () => { if (tipEl) { tipEl.remove(); tipEl = null; } });
    return cell;
  }

  function renderRouteCards(routes) {
    const s = state;
    const cols = visibleRouteCols();
    const gridTemplate = routeGridTemplate(cols);
    const wrap = el('div', { style: { display: 'flex', flexDirection: 'column' } });
    wrap.appendChild(renderRouteCardsHeader(cols));

    routes.forEach(r => {
      const st = routeStats(r);
      const accent = r.status === 'Completed' ? '#27A767' : r.status === 'Planned' ? '#FBB303' : '#7BCBCB';
      const expanded = s.expanded === r.id;

      const cells = {
        route: el('div', { style: { padding: '12px 8px 12px 0', minWidth: '0' } }, [
          el('div', { style: { display: 'flex', alignItems: 'center', gap: '7px', minWidth: '0' } }, [
            el('div', { style: { fontWeight: '800', fontSize: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: '1', minWidth: '0' } }, [r.name]),
            ...(expanded ? [el('span', { style: { flexShrink: '0', fontSize: '9.5px', fontWeight: '700', letterSpacing: '.03em', padding: '2px 7px', borderRadius: '999px', background: 'rgba(39,167,103,.15)', color: '#3FC281', border: '1px solid rgba(39,167,103,.3)', whiteSpace: 'nowrap' } }, ['★ Last viewed'])] : [])
          ])
        ]),
        route_span: (() => {
          const _rLds = loadsOf(r.id);
          const _fc = _rLds.length ? _rLds[0].origin : '—';
          const _lc = _rLds.length ? _rLds[_rLds.length - 1].dest : '—';
          return el('div', { style: { padding: '10px 8px 10px 0', minWidth: '0' } }, [
            el('div', { style: { display: 'inline-flex', flexDirection: 'column', background: '#0D1820', border: '1px solid rgba(255,255,255,.1)', borderRadius: '8px', padding: '5px 10px', gap: '2px', maxWidth: '100%' } }, [
              el('div', { style: { display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '800', fontSize: '12px', color: '#DDE3E9', whiteSpace: 'nowrap' } }, [
                _fc, iconEl('arrow'), _lc
              ]),
              el('div', { style: { fontSize: '10.5px', color: '#6B7373', fontFamily: "'JetBrains Mono',monospace", whiteSpace: 'nowrap' } }, [r.dateStart + ' → ' + r.dateEnd])
            ])
          ]);
        })(),
        status: el('div', { style: { padding: '12px 8px 12px 0' } }, [pill(r.status, STATUS[r.status][0], STATUS[r.status][1])]),
        health: buildHealthCell(st, r),
        lanes: (() => {
          const laneTags = el('div', { style: { padding: '12px 8px 12px 0', display: 'flex', alignItems: 'center', minWidth: '0' } });
          st.loads.forEach((l, i) => {
            const c = STATUS[l.status] || STATUS['Unbooked'];
            laneTags.appendChild(el('div', {
              style: { marginLeft: i === 0 ? '0' : '-12px', padding: '4px 10px', borderRadius: '4px', fontSize: '10.5px', fontWeight: '800', whiteSpace: 'nowrap', transform: 'rotate(-11deg)', background: c[0], color: c[1] }
            }, [l.status]));
          });
          return laneTags;
        })(),
        income: (() => {
          const hasUnbooked = st.loads.some(l => l.status === 'Unbooked');
          const incUpper = Math.round(st.income * 1.45);
          const incDisplay = hasUnbooked ? (money(st.income) + '–' + money(incUpper)) : money(st.income);
          const incFontSize = hasUnbooked ? '11px' : '13px';
          const curProfit = Math.round(st.income * 0.22);
          const estPftLow = Math.round(st.income * 0.28);
          const estPftHigh = Math.round(incUpper * 0.38);
          const cell = el('div', { style: { padding: '12px 8px 12px 0', cursor: 'default' } }, [
            el('div', { style: { fontWeight: '800', color: '#3FC281', fontSize: incFontSize } }, [incDisplay]),
            el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['Income'])
          ]);
          let _incTip = null;
          cell.addEventListener('mouseenter', function() {
            _incTip = document.createElement('div');
            _incTip.setAttribute('data-ef-htip', '1');
            Object.assign(_incTip.style, { position: 'fixed', zIndex: '9030', background: '#131F27', border: '1px solid rgba(255,255,255,.15)', borderRadius: '10px', padding: '12px', minWidth: '220px', boxShadow: '0 8px 28px rgba(0,0,0,.6)', fontFamily: 'Nunito, Manrope, system-ui, sans-serif', pointerEvents: 'none' });
            function _tipRow(lbl, val, col) { var rr = document.createElement('div'); Object.assign(rr.style, { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '4px 0', fontSize: '12px' }); var ll = document.createElement('span'); Object.assign(ll.style, { color: '#8B939B', fontWeight: '500' }); ll.textContent = lbl; var vv = document.createElement('span'); Object.assign(vv.style, { color: col, fontWeight: '800', fontVariantNumeric: 'tabular-nums' }); vv.textContent = val; rr.appendChild(ll); rr.appendChild(vv); return rr; }
            _incTip.appendChild(_tipRow('Current income', money(st.income), '#3FC281'));
            _incTip.appendChild(_tipRow('Estimated income', money(st.income) + '–' + money(incUpper), '#3FC281'));
            _incTip.appendChild(_tipRow('Current profit', money(curProfit), '#7BCBCB'));
            _incTip.appendChild(_tipRow('Estimated profit', money(estPftLow) + '–' + money(estPftHigh), '#7BCBCB'));
            document.body.appendChild(_incTip);
            var rect = cell.getBoundingClientRect();
            var tw = _incTip.offsetWidth;
            var left = rect.left;
            if (left + tw > window.innerWidth - 8) left = window.innerWidth - tw - 8;
            _incTip.style.left = Math.max(8, left) + 'px';
            _incTip.style.top = (rect.bottom + 6) + 'px';
          });
          cell.addEventListener('mouseleave', function() { if (_incTip) { _incTip.remove(); _incTip = null; } });
          return cell;
        })(),
        miles: el('div', { style: { padding: '12px 8px 12px 0' } }, [
          el('div', { style: { fontWeight: '800', fontSize: '13px' } }, [st.miles.toLocaleString('en-US') + ' mi']),
          el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['Total miles'])
        ]),
        driver: el('div', { style: { padding: '12px 8px 12px 0', display: 'flex', alignItems: 'center', gap: '8px', minWidth: '0' } }, [
          avatar(r.driver, 26),
          el('div', { style: { minWidth: '0' } }, [
            el('div', { style: { fontWeight: '700', fontSize: '11.5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, [r.driver]),
            el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['Driver'])
          ])
        ]),
        trailer: el('div', { style: { padding: '12px 8px 12px 0' } }, [
          el('div', { style: { fontWeight: '700', fontSize: '11.5px' } }, [r.trailer]),
          el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['Trailer'])
        ]),
        unit: el('div', { style: { padding: '12px 8px 12px 0' } }, [
          el('div', { style: { fontWeight: '700', fontSize: '11.5px' } }, [r.unit]),
          el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['Unit'])
        ]),
        dispatcher: el('div', { style: { padding: '12px 8px 12px 0', display: 'flex', alignItems: 'center', gap: '8px' } }, [
          avatar(r.dispatcher, 26),
          el('div', {}, [
            el('div', { style: { fontWeight: '700', fontSize: '11.5px' } }, [r.dispatcher]),
            el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['Dispatcher'])
          ])
        ]),
        equipmentType: el('div', { style: { padding: '12px 8px 12px 0' } }, [
          el('div', { style: { fontWeight: '700', fontSize: '11.5px' } }, [r.equipmentType || '']),
          el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['Equipment'])
        ])
      };

      const moreBtn = el('div', {
        onclick: e => {
          e.stopPropagation();
          const existing = document.querySelector('[data-route-menu]');
          if (existing) { existing.remove(); return; }
          const canDelete = r.status === 'Planned';
          const menuItems = [
            el('div', { class: 'hoverable', onclick: e2 => { e2.stopPropagation(); menu.remove(); setState({ openRoute: r.id, detailLanesExpanded: false, detailTab: 'plan', controlMode: 'route', controlLane: null }); }, style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#FBFBFB' } }, [
              el('span', { html: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>' }, []),
              'Open in a new tab'
            ])
          ];
          if (canDelete) {
            menuItems.push(el('div', { class: 'hoverable', onclick: e2 => {
              e2.stopPropagation(); menu.remove();
              const overlay = el('div', { style: { position: 'fixed', inset: '0', zIndex: '9100', background: 'rgba(0,0,0,.55)', display: 'grid', placeItems: 'center' } });
              const modal = el('div', { style: { background: '#17242E', border: '1px solid rgba(255,255,255,.12)', borderRadius: '14px', padding: '24px', width: '380px', boxShadow: '0 16px 48px rgba(0,0,0,.6)', fontFamily: 'inherit' } }, [
                el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '16px', fontWeight: '800', color: '#FBFBFB' } }, [
                  el('span', { html: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FBFBFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>' }, []),
                  'Delete Route'
                ]),
                el('div', { style: { fontSize: '13px', fontWeight: '600', color: '#C9CED2', marginBottom: '8px' } }, ['Are you sure you want to delete this route?']),
                el('div', { style: { fontSize: '12px', color: '#6B7373', marginBottom: '24px' } }, ['This action is permanent and cannot be undone. Make sure you no longer need it.']),
                el('div', { style: { display: 'flex', justifyContent: 'center', gap: '12px' } }, [
                  el('div', { class: 'hoverable', onclick: () => overlay.remove(), style: { padding: '8px 24px', borderRadius: '999px', border: '1px solid rgba(255,255,255,.15)', color: '#FBFBFB', fontWeight: '700', fontSize: '13px', cursor: 'pointer' } }, ['Cancel']),
                  el('div', { class: 'hoverable', onclick: () => { overlay.remove(); setState({ routes: state.routes.filter(x => x.id !== r.id), expanded: null, openRoute: null }); }, style: { padding: '8px 24px', borderRadius: '999px', background: '#27A767', color: '#0B131B', fontWeight: '800', fontSize: '13px', cursor: 'pointer' } }, ['Yes, I am sure'])
                ])
              ]);
              overlay.appendChild(modal);
              overlay.addEventListener('click', e3 => { if (e3.target === overlay) overlay.remove(); });
              document.body.appendChild(overlay);
            }, style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#FBFBFB' } }, [
              el('span', { html: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>' }, []),
              'Delete route'
            ]));
          }
          const menu = el('div', { 'data-route-menu': r.id, style: { position: 'fixed', zIndex: '9050', background: '#131F27', border: '1px solid rgba(255,255,255,.12)', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,.5)', padding: '4px', minWidth: '170px', fontFamily: 'inherit' } }, menuItems);
          document.body.appendChild(menu);
          const rect = e.currentTarget.getBoundingClientRect();
          menu.style.top = (rect.bottom + 4) + 'px';
          menu.style.right = (window.innerWidth - rect.right) + 'px';
          const closeMenu = e3 => { if (!menu.contains(e3.target)) { menu.remove(); document.removeEventListener('click', closeMenu); } };
          setTimeout(() => document.addEventListener('click', closeMenu), 0);
        },
        style: { width: '22px', height: '22px', display: 'grid', placeItems: 'center', borderRadius: '6px', cursor: 'pointer' },
        html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>'
      }, []);

      const rowMain = el('div', {
        class: 'row-hoverable',
        onclick: () => setState({ openRoute: r.id, detailLanesExpanded: false, detailTab: 'plan', controlMode: 'route', controlLane: null }),
        style: { display: 'grid', gridTemplateColumns: gridTemplate, alignItems: 'center', padding: '0 20px', cursor: 'pointer', background: expanded ? 'rgba(39,167,103,.06)' : 'transparent' }
      }, cols.map(c => cells[c.key]).concat([
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } }, [
          moreBtn,
          el('div', {
            title: 'Peek lanes',
            onclick: e => { e.stopPropagation(); setState({ expanded: expanded ? null : r.id }); },
            style: { width: '22px', height: '22px', display: 'grid', placeItems: 'center', borderRadius: '6px', cursor: 'pointer', color: '#FBFBFB', transform: 'rotate(' + (expanded ? 180 : 0) + 'deg)', transition: 'transform 150ms ease' },
            html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBFBFB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>'
          }, [])
        ])
      ]));

      const block = el('div', { style: { borderBottom: '1px solid rgba(255,255,255,.05)' } }, [rowMain]);

      if (expanded) {
        const laneTableHead = el('div', { style: { display: 'grid', gridTemplateColumns: '40px 110px 1fr 90px 110px 120px 120px 110px', padding: '0 12px', background: '#17242E', borderBottom: '1px solid rgba(255,255,255,.07)', fontSize: '10.5px', fontWeight: '800', letterSpacing: '.04em', color: '#8B939B' } }, [
          el('div', { style: { padding: '9px 6px 9px 0' } }, ['#']),
          el('div', { style: { padding: '9px 6px 9px 0' } }, ['LOAD ID']),
          el('div', { style: { padding: '9px 6px 9px 0' } }, ['LANE']),
          el('div', { style: { padding: '9px 6px 9px 0' } }, ['MILES']),
          el('div', { style: { padding: '9px 6px 9px 0' } }, ['INCOME']),
          el('div', { style: { padding: '9px 6px 9px 0' } }, ['PICKUP']),
          el('div', { style: { padding: '9px 6px 9px 0' } }, ['DELIVERY']),
          el('div', { style: { padding: '9px 6px 9px 0' } }, ['STATUS'])
        ]);
        const laneTable = el('div', { style: { border: '1px solid rgba(255,255,255,.08)', borderRadius: '10px', overflow: 'hidden', background: '#131F27' } }, [laneTableHead]);
        st.loads.forEach((l, i) => {
          const c = STATUS[l.status] || STATUS['Unbooked'];
          laneTable.appendChild(el('div', {
            class: 'row-hoverable',
            style: { display: 'grid', gridTemplateColumns: '40px 110px 1fr 90px 110px 120px 120px 110px', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid rgba(255,255,255,.05)' }
          }, [
            el('div', { style: { padding: '10px 6px 10px 0', color: '#6B7373', fontWeight: '800' } }, [String(i + 1)]),
            el('div', { style: { padding: '10px 6px 10px 0', fontWeight: '800', fontSize: '12px', color: l.status === 'Unbooked' ? '#FBB303' : '#FBFBFB' } }, [l.status === 'Unbooked' ? 'To book' : l.id]),
            el('div', { style: { padding: '10px 6px 10px 0', color: '#7BCBCB', fontWeight: '600', fontSize: '12px' } }, [l.origin + ' → ' + l.dest]),
            el('div', { style: { padding: '10px 6px 10px 0', fontWeight: '700', fontSize: '12px' } }, [l.miles.toLocaleString('en-US') + ' mi']),
            el('div', { style: { padding: '10px 6px 10px 0' } }, [
              el('div', { style: { fontWeight: '800', color: '#3FC281', fontSize: '12px' } }, [money(l.income)]),
              el('div', { style: { color: '#6B7373', fontSize: '10px' } }, ['$' + (l.income / l.miles).toFixed(2) + '/mi'])
            ]),
            el('div', { style: { padding: '10px 6px 10px 0', fontSize: '11.5px', fontFamily: "'JetBrains Mono', monospace", color: '#C9CED2' } }, [l.pickup]),
            el('div', { style: { padding: '10px 6px 10px 0', fontSize: '11.5px', fontFamily: "'JetBrains Mono', monospace", color: '#C9CED2' } }, [l.delivery]),
            el('div', { style: { padding: '10px 6px 10px 0' } }, [pill(l.status, c[0], c[1])])
          ]));
        });

        const expandedPanel = el('div', { style: { padding: '4px 20px 18px 48px', background: '#0E1820' } }, [
          el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 2px 8px' } }, [
            el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11.5px', fontWeight: '800', letterSpacing: '.06em', color: '#27A767', textTransform: 'uppercase' } }, [
              'Lanes in this route',
              el('span', { style: { padding: '2px 8px', borderRadius: '999px', background: 'rgba(39,167,103,.14)', color: '#3FC281', letterSpacing: '0' } }, [String(st.loads.length)])
            ]),
            el('div', {
              onclick: e => { e.stopPropagation(); setState({ view: 'loads', routeFilterIds: [r.id], loadTab: 'All Loads', loadQuery: '', page: 1 }); },
              style: { fontSize: '11.5px', fontWeight: '800', color: '#7BCBCB', cursor: 'pointer' }
            }, ['Open these lanes in Loads view →'])
          ]),
          laneTable
        ]);
        block.appendChild(expandedPanel);
      }

      wrap.appendChild(block);
    });

    return wrap;
  }

  function renderKpis(isLoads) {
    let kpis, cols;
    if (isLoads) {
      const loads = visibleLoads();
      const loadedMiles = loads.reduce((a, l) => a + l.miles, 0);
      const inc = loads.reduce((a, l) => a + l.income, 0);
      const routeIds = [...new Set(loads.map(l => l.route))];
      const dhMiles = routeIds.reduce((a, id) => a + routeDhMiles(routeOf(id)), 0);
      const totalMiles = loadedMiles + dhMiles;
      const effectiveRpm = totalMiles ? inc / totalMiles : 0;
      const loadedRpm = loadedMiles ? inc / loadedMiles : 0;
      const dhPct = totalMiles ? dhMiles / totalMiles * 100 : 0;
      cols = 6;
      kpis = [
        { label: 'Total loads', value: String(loads.length), color: '#FBFBFB' },
        { label: 'Total income', value: money(inc), color: '#3FC281' },
        { label: 'Total miles', value: loadedMiles.toLocaleString('en-US') + ' mi', color: '#FBFBFB' },
        { label: 'DH miles', value: dhMiles.toLocaleString('en-US') + ' mi (' + dhPct.toFixed(1) + '%)', color: '#ABABAB' },
        { label: 'Effective RPM', value: '$' + effectiveRpm.toFixed(2), color: '#7BCBCB' },
        { label: 'Loaded RPM', value: '$' + loadedRpm.toFixed(2), color: '#7BCBCB' }
      ];
    } else {
      const routes = visibleRoutes();
      const stats = routes.map(r => routeStats(r));
      const loadedMiles = stats.reduce((a, x) => a + x.miles, 0);
      const dhMiles = stats.reduce((a, x) => a + x.dhMiles, 0);
      const totalMiles = loadedMiles + dhMiles;
      const inc = stats.reduce((a, x) => a + x.income, 0);
      const effectiveRpm = totalMiles ? inc / totalMiles : 0;
      const dhPct = totalMiles ? dhMiles / totalMiles * 100 : 0;
      const totalLoads = stats.reduce((a, x) => a + x.loads.length, 0);
      const loadedRpm = loadedMiles ? inc / loadedMiles : 0;
      cols = 6;
      kpis = [
        { label: 'Total routes', value: String(routes.length), color: '#FBFBFB' },
        { label: 'Total income', value: money(inc), color: '#3FC281' },
        { label: 'Total miles', value: totalMiles.toLocaleString('en-US') + ' mi', color: '#FBFBFB' },
        { label: 'DH miles', value: dhMiles.toLocaleString('en-US') + ' mi (' + dhPct.toFixed(1) + '%)', color: '#ABABAB' },
        { label: 'Effective RPM', value: '$' + effectiveRpm.toFixed(2), color: '#7BCBCB' },
        { label: 'Loaded RPM', value: '$' + loadedRpm.toFixed(2), color: '#7BCBCB' }
      ];
    }
    const wrap = el('div', { style: { flex: 'none', display: 'grid', gridTemplateColumns: 'repeat(' + cols + ', 1fr)', gap: '1px', padding: '14px 20px', background: '#060C11', borderTop: '1px solid rgba(255,255,255,.07)' } });
    kpis.forEach(k => {
      wrap.appendChild(el('div', { style: { textAlign: 'center' } }, [
        el('div', { style: { color: '#6B7373', fontSize: '10px', fontWeight: '600', letterSpacing: '.03em' } }, [k.label]),
        el('div', { style: { marginTop: '3px', fontSize: '15px', fontWeight: '800', letterSpacing: '-0.02em', color: k.color } }, [k.value])
      ]));
    });
    return wrap;
  }

  // ---- Load detail drawer ----
  function renderDrawer(loadId) {
    const l = LOADS.find(x => x.id === loadId);
    if (!l) return el('div', {}, []);
    const r = routeOf(l.route);
    const c = STATUS[l.status] || STATUS['Unbooked'];
    const s = state;

    const overlay = el('div', { onclick: () => setState({ openLoad: null }), style: { position: 'absolute', inset: '0', background: 'rgba(6,12,17,.55)', zIndex: '5' } });

    const tabsRow = el('div', { class: 'ef-scroll', style: { display: 'flex', gap: '4px', padding: '14px 18px 0', overflowX: 'auto' } });
    ['Load', 'Stops', 'Payment', 'Customer', 'Docs', 'Dispatch'].forEach(t => {
      const active = t === (s.drawerTab || 'Load');
      tabsRow.appendChild(el('div', {
        onclick: () => setState({ drawerTab: t }),
        style: { padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '12px', fontWeight: '800', background: active ? 'rgba(39,167,103,.14)' : 'transparent', color: active ? '#3FC281' : '#8B939B' }
      }, [t]));
    });

    function field(label, valueNode) {
      return el('div', { style: { display: 'grid', gridTemplateColumns: '130px 1fr', padding: '11px 14px', background: '#131F27' } }, [
        el('div', { style: { color: '#8B939B', fontSize: '11.5px', fontWeight: '700' } }, [label]),
        el('div', {}, [valueNode])
      ]);
    }

    const fields = el('div', { style: { display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.07)', borderRadius: '10px', overflow: 'hidden' } }, [
      field('Status', pill(l.status, c[0], c[1])),
      field('Route', el('div', { onclick: () => setState({ openLoad: null, view: 'routes', openRoute: r.id, detailTab: 'plan', controlMode: 'route', controlLane: null }), style: { fontSize: '12px', fontWeight: '700', color: '#7BCBCB', cursor: 'pointer' } }, [r.name + ' →'])),
      field('Trailer', el('div', { style: { fontSize: '12px', fontWeight: '700' } }, [r.trailer + ' · ' + l.equipment])),
      field('Driver / unit', el('div', { style: { fontSize: '12px', fontWeight: '700' } }, [r.driver + ' · ' + r.unit])),
      field('Truck', el('div', { style: { fontSize: '12px', fontWeight: '700', fontFamily: "'JetBrains Mono', monospace" } }, [l.truck])),
      field('Customer', el('div', { style: { fontSize: '12px', fontWeight: '700' } }, [l.customer])),
      field('Stops', el('div', { style: { fontSize: '12px', fontWeight: '700' } }, [String(l.stops)])),
      field('Pickup window', el('div', { style: { fontSize: '12px', fontWeight: '700', fontFamily: "'JetBrains Mono', monospace" } }, [l.pickupTime])),
      field('Delivery window', el('div', { style: { fontSize: '12px', fontWeight: '700', fontFamily: "'JetBrains Mono', monospace" } }, [l.deliveryTime])),
      field('ETA', el('div', { style: { fontSize: '12px', fontWeight: '700', fontFamily: "'JetBrains Mono', monospace" } }, [l.eta]))
    ]);

    const panel = el('div', { class: 'ef-scroll', style: { position: 'absolute', top: '0', right: '0', bottom: '0', width: '400px', zIndex: '6', background: '#101B23', borderLeft: '1px solid rgba(255,255,255,.1)', overflowY: 'auto' } }, [
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,.07)' } }, [
        iconEl('ship', { color: '#27A767' }),
        el('div', { style: { flex: '1', fontSize: '15px', fontWeight: '800' } }, ['Load details']),
        el('div', { style: { fontSize: '12px', fontWeight: '700', color: '#6B7373', fontFamily: "'JetBrains Mono', monospace" } }, [l.id]),
        el('div', { class: 'hoverable', onclick: () => setState({ openLoad: null }), style: { display: 'grid', placeItems: 'center', width: '26px', height: '26px', borderRadius: '6px', cursor: 'pointer', color: '#ABABAB' } }, ['✕'])
      ]),
      el('div', { style: { padding: '14px 18px 0' } }, [
        el('div', { style: { position: 'relative', height: '150px', borderRadius: '10px', overflow: 'hidden', background: '#17242E', border: '1px solid rgba(255,255,255,.08)' } }, [
          el('div', { style: { position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)', backgroundSize: '26px 26px' } }),
          el('div', { style: { position: 'absolute' }, html: '<svg width="100%" height="150" viewBox="0 0 364 150" preserveAspectRatio="none" style="position:absolute;inset:0;"><path d="M52 46 C 120 30, 180 70, 232 62 S 300 96, 322 104" fill="none" stroke="#7BCBCB" stroke-width="2.5" stroke-dasharray="7 6" stroke-linecap="round"></path></svg>' }),
          el('div', { style: { position: 'absolute', left: '28px', top: '22px', padding: '3px 8px', borderRadius: '5px', background: '#FBFBFB', color: '#0B131B', fontSize: '10px', fontWeight: '900' } }, ['PU1']),
          el('div', { style: { position: 'absolute', left: '300px', top: '92px', padding: '3px 8px', borderRadius: '5px', background: '#FBFBFB', color: '#0B131B', fontSize: '10px', fontWeight: '900' } }, ['DO1']),
          el('div', { style: { position: 'absolute', right: '8px', bottom: '6px', fontSize: '9px', color: '#6B7373' } }, ['Map placeholder'])
        ])
      ]),
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px' } }, [
        el('div', { style: { flex: '1' } }, [
          el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '800' } }, [l.origin, iconEl('arrow'), l.dest]),
          el('div', { style: { marginTop: '3px', color: '#8B939B', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace" } }, [prettyDate(l.pickup) + ' · ' + prettyDate(l.delivery)])
        ]),
        el('div', { class: 'hoverable', style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', border: '1px solid rgba(255,255,255,.12)', borderRadius: '999px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' } }, [iconEl('edit'), 'Edit load'])
      ]),
      el('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', margin: '0 18px', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.07)', borderRadius: '10px', overflow: 'hidden' } }, [
        el('div', { style: { padding: '12px 14px', background: '#131F27' } }, [
          el('div', { style: { color: '#6B7373', fontSize: '10.5px', fontWeight: '700' } }, ['Distance']),
          el('div', { style: { marginTop: '3px', fontSize: '17px', fontWeight: '900' } }, [l.miles.toLocaleString('en-US') + ' mi'])
        ]),
        el('div', { style: { padding: '12px 14px', background: '#131F27' } }, [
          el('div', { style: { color: '#6B7373', fontSize: '10.5px', fontWeight: '700' } }, ['Income']),
          el('div', { style: { marginTop: '3px', fontSize: '17px', fontWeight: '900', color: '#3FC281' } }, [money(l.income)]),
          el('div', { style: { color: '#7BCBCB', fontSize: '10.5px', fontWeight: '700' } }, ['RPM $' + (l.income / l.miles).toFixed(2) + '/mi'])
        ])
      ]),
      tabsRow,
      el('div', { style: { padding: '14px 18px 24px' } }, [fields])
    ]);

    const wrap = el('div', {}, [overlay, panel]);
    return wrap;
  }

  // ---- Route plan detail view ----
  function buildDetailRows(routeId) {
    const r = routeOf(routeId);
    const ls = loadsOf(routeId);
    const rows = [];
    function sm(v) { return (v < 0 ? '-$' : '$') + Math.abs(Math.round(v)).toLocaleString('en-US'); }
    let dhMiles = 0, dhCost = 0, totalMin = 0, totalFuel = 0, totalOp = 0;
    ls.forEach((l, i) => {
      const dh = 30 + ((i * 17) % 45);
      dhMiles += dh; dhCost += Math.round(dh * 2.4); totalMin += Math.round(dh / 55 * 60);
      const dhFuel = Math.round(dh * 0.52), dhOp = Math.round(dh * 1.88);
      totalFuel += dhFuel; totalOp += dhOp;
      var dhRowOpacity = l.status === 'Completed' ? 0.35 : 1;
      rows.push({
        num: 'DH', numBg: 'transparent', numFg: '#6B7373',
        numBorder: '1px solid rgba(255,255,255,.12)', numFontSize: '10px', rowOpacity: dhRowOpacity,
        origin: i === 0 ? l.origin : ls[i - 1].dest, originDate: 'Est. ' + prettyDate(i === 0 ? l.pickup : ls[i - 1].delivery),
        dest: l.origin, destDate: 'Est. ' + prettyDate(l.pickup),
        textFg: '#8B939B', weight: 500,
        status: 'Upcoming', statusBg: 'transparent', statusFg: '#8B939B', statusBorder: '1px solid rgba(255,255,255,.1)',
        mileage: dh.toLocaleString('en-US'), driving: drive(dh), income: '$0', incomeFg: '#6B7373',
        rpm: '--', cost: '-$' + Math.round(dh * 2.4).toLocaleString('en-US'),
        fuelCost: '-$' + dhFuel.toLocaleString('en-US'), tollCost: '$0', opCost: '-$' + dhOp.toLocaleString('en-US'),
        profitStr: '-$' + Math.round(dh * 2.4).toLocaleString('en-US'), profitFg: '#EB4343', isRange: false, loadIdx: null
      });
      const c = STATUS[l.status] || STATUS['Unbooked'];
      totalMin += Math.round(l.miles / 55 * 60);
      const isUnb = l.status === 'Unbooked';
      const lFuel = Math.round(l.miles * 0.52), lOp = Math.round(l.miles * 1.88), lTotal = Math.round(l.miles * 2.4);
      totalFuel += lFuel; totalOp += lOp;
      const incMin = Math.round(l.miles * 2.2), incMax = Math.round(l.miles * 3.4);
      const pftMin = incMin - lTotal, pftMax = incMax - lTotal, actualPft = l.income - lTotal;
      var _lNumBg, _lNumFg, _lNumBorder, _lRowOp;
      if (l.status === 'Completed') {
        _lNumBg = '#27A767'; _lNumFg = '#172737'; _lNumBorder = 'none'; _lRowOp = 0.4;
      } else if (l.status === 'Unbooked') {
        _lNumBg = 'rgba(251,179,3,.12)'; _lNumFg = '#FBB303'; _lNumBorder = '1.5px solid #FBB303'; _lRowOp = 1;
      } else {
        _lNumBg = '#2B4353'; _lNumFg = '#FBFBFB'; _lNumBorder = 'none'; _lRowOp = 1;
      }
      rows.push({
        num: String(i + 1), numBg: _lNumBg, numFg: _lNumFg,
        numBorder: _lNumBorder, numFontSize: '10.5px', rowOpacity: _lRowOp,
        origin: l.origin, originDate: 'Est. ' + prettyDate(l.pickup),
        dest: l.dest, destDate: 'Est. ' + prettyDate(l.delivery),
        textFg: '#FBFBFB', weight: 700,
        status: l.status, statusBg: c[0], statusFg: c[1], statusBorder: '1px solid transparent',
        mileage: l.miles.toLocaleString('en-US'), driving: drive(l.miles),
        income: isUnb ? (money(incMin) + ' – ' + money(incMax)) : money(l.income),
        incomeFg: isUnb ? '#8B939B' : '#3FC281',
        rpm: isUnb ? '$2.20 – $3.40' : '$' + (l.miles ? l.income / l.miles : 0).toFixed(2),
        cost: '-$' + lTotal.toLocaleString('en-US'),
        fuelCost: '-$' + lFuel.toLocaleString('en-US'), tollCost: '$0', opCost: '-$' + lOp.toLocaleString('en-US'),
        profitStr: isUnb ? (sm(pftMin) + ' – ' + sm(pftMax)) : sm(actualPft),
        profitFg: isUnb ? (pftMax > 0 && pftMin < 0 ? '#8B939B' : pftMin >= 0 ? '#3FC281' : '#EB4343') : (actualPft >= 0 ? '#3FC281' : '#EB4343'),
        isRange: isUnb, loadIdx: i
      });
    });
    const st = routeStats(r);
    const totalMi = st.miles + dhMiles;
    const totalCost = Math.round(st.miles * 2.4) + dhCost;
    return {
      r, st, rows,
      totalFuelCost: '-$' + totalFuel.toLocaleString('en-US'),
      totalOpCost: '-$' + totalOp.toLocaleString('en-US'),
      totalMiles: totalMi.toLocaleString('en-US') + ' mi',
      totalDriving: Math.floor(totalMin / 60) + 'h ' + (totalMin % 60) + 'min',
      totalDays: Math.max(1, Math.ceil(totalMin / 60 / 11)) + ' days based on HOS limits',
      totalIncome: money(st.income),
      totalRpm: '$' + st.rpm.toFixed(2) + '/mi',
      totalCost: '$' + totalCost.toLocaleString('en-US'),
      estIncome: money(st.income),
      profit: '$' + (st.income - totalCost).toLocaleString('en-US'),
      cpm: '$' + (totalMi ? (totalCost / totalMi) : 0).toFixed(2),
      effectiveRpm: '$' + (totalMi ? st.income / totalMi : 0).toFixed(2),
      dhMiles: dhMiles.toLocaleString('en-US') + ' mi',
      co2: Math.round(totalMi * 1.63).toLocaleString('en-US') + ' kg',
      cycle: Math.round(totalMin / 60) + 'h',
      onDuty: Math.round(totalMin / 60 * 1.35) + 'h',
      days: Math.max(1, Math.ceil(totalMin / 60 / 11)) + ' days',
      laneCount: ls.length,
      // raw numbers for the P&L / Operaciones unit-toggle cards
      incomeNum: st.income,
      totalCostNum: totalCost,
      totalMiNum: totalMi,
      dhMilesNum: dhMiles,
      co2Num: Math.round(totalMi * 1.63),
      daysNum: Math.max(1, Math.ceil(totalMin / 60 / 11))
    };
  }

  function renderPnlOpsCards(d) {
    const s = state;
    const pnlSelectStyle = { background: '#17242E', border: '1px solid rgba(255,255,255,.1)', borderRadius: '999px', color: '#DDE3E9', fontFamily: 'inherit', fontSize: '11px', fontWeight: '800', height: '24px', padding: '0 8px', cursor: 'pointer', outline: 'none' };

    const pnl = {
      total: { inc: d.incomeNum, cst: d.totalCostNum, pft: d.incomeNum - d.totalCostNum },
      day: { inc: d.incomeNum / d.daysNum, cst: d.totalCostNum / d.daysNum, pft: (d.incomeNum - d.totalCostNum) / d.daysNum },
      mile: { inc: d.totalMiNum ? d.incomeNum / d.totalMiNum : 0, cst: d.totalMiNum ? d.totalCostNum / d.totalMiNum : 0, pft: d.totalMiNum ? (d.incomeNum - d.totalCostNum) / d.totalMiNum : 0 }
    }[s.detailPnlUnit];
    const pnlFmt = s.detailPnlUnit === 'mile' ? v => '$' + v.toFixed(2) : v => '$' + Math.round(v).toLocaleString('en-US');
    const profitPctDisplay = d.incomeNum ? (((d.incomeNum - d.totalCostNum) / d.incomeNum) * 100).toFixed(1) : '0.0';

    const ops = {
      total: { miles: d.totalMiNum, dh: d.dhMilesNum, co2: d.co2Num },
      day: { miles: d.totalMiNum / d.daysNum, dh: d.dhMilesNum / d.daysNum, co2: d.co2Num / d.daysNum }
    }[s.detailOpsUnit];
    const dhPct = d.totalMiNum ? (d.dhMilesNum / d.totalMiNum * 100).toFixed(1) : '0.0';

    function row(label, valueNode) {
      return el('div', { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' } }, [
        el('span', { style: { fontSize: '12px', fontWeight: '400', color: '#8B939B' } }, [label]),
        valueNode
      ]);
    }
    function divider() { return el('div', { style: { height: '1px', background: 'rgba(255,255,255,.08)' } }); }

    const profitLabel = el('span', { style: { fontSize: '12px', fontWeight: '700', color: '#FBFBFB' } }, [
      'Profit ',
      el('span', { style: { color: '#6B7373', fontSize: '11px', fontWeight: '400' } }, ['(' + profitPctDisplay + '%)'])
    ]);
    const profitRow = el('div', { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' } }, [
      profitLabel,
      el('span', { style: { fontSize: '20px', fontWeight: '900', color: '#FBFBFB' } }, [pnlFmt(pnl.pft)])
    ]);

    const pnlCard = el('div', { style: { flex: '1.15', background: '#131F27', border: '1px solid rgba(255,255,255,.08)', borderRadius: '12px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '10px' } }, [
      el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' } }, [
        el('span', { style: { fontSize: '10.5px', fontWeight: '800', letterSpacing: '.04em', textTransform: 'uppercase', color: '#8B939B' } }, ['Financial']),
        el('select', {
          value: s.detailPnlUnit, style: pnlSelectStyle,
          onchange: e => setState({ detailPnlUnit: e.target.value })
        }, [
          el('option', { value: 'total' }, ['Total']),
          el('option', { value: 'day' }, ['Per day']),
          el('option', { value: 'mile' }, ['Per mile'])
        ])
      ]),
      row(el('span', { style: { fontSize: '12px', fontWeight: '400', color: '#27A767' } }, ['Income']), el('span', { style: { fontSize: '18px', fontWeight: '900' } }, [pnlFmt(pnl.inc)])),
      row(el('span', { style: { fontSize: '12px', fontWeight: '400', color: '#EB4343' } }, ['Cost']), el('span', { style: { fontSize: '18px', fontWeight: '900', color: '#8B939B' } }, [pnlFmt(pnl.cst)])),
      divider(),
      profitRow
    ]);

    const durationValue = el('span', { style: { fontSize: '14px', fontWeight: '900', whiteSpace: 'nowrap' } }, [
      d.totalDriving,
      el('span', { style: { fontSize: '11px', fontWeight: '700', color: '#6B7373' } }, [' / ' + d.daysNum + ' d'])
    ]);
    const deadheadValue = el('span', {}, [
      el('span', { style: { fontSize: '14px', fontWeight: '900', color: '#8B939B' } }, [Math.round(ops.dh).toLocaleString('en-US') + ' mi']),
      el('span', { style: { fontSize: '11px', fontWeight: '700', color: '#6B7373' } }, [' ' + dhPct + '%'])
    ]);

    const opsCard = el('div', { style: { flex: '1', background: '#131F27', border: '1px solid rgba(255,255,255,.08)', borderRadius: '12px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '10px' } }, [
      el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' } }, [
        el('span', { style: { fontSize: '10.5px', fontWeight: '800', letterSpacing: '.04em', textTransform: 'uppercase', color: '#8B939B' } }, ['Operations']),
        el('select', {
          value: s.detailOpsUnit, style: pnlSelectStyle,
          onchange: e => setState({ detailOpsUnit: e.target.value })
        }, [
          el('option', { value: 'total' }, ['Total']),
          el('option', { value: 'day' }, ['Per day'])
        ])
      ]),
      row('Miles', el('span', { style: { fontSize: '14px', fontWeight: '900' } }, [Math.round(ops.miles).toLocaleString('en-US') + ' mi'])),
      row('Deadhead', deadheadValue),
      row('Emissions', el('span', { style: { fontSize: '14px', fontWeight: '900' } }, [Math.round(ops.co2).toLocaleString('en-US') + ' kg CO₂']))
    ]);

    return el('div', { style: { display: 'flex', gap: '12px' } }, [pnlCard, opsCard]);
  }

  // ── Unbooked lane hover bar + map modal ────────────────────────────────
  let _lbTimer = null;
  const _lbSearch = {}, _lbCount = {}, _lbIgnored = new Set();
  var _simBeforeLanes = null, _simAfterLanes = null, _simReturnCtx = null;

  function _doStartSearch(key, originCity, anchorEl) {
    var active = _getActiveSearch();
    if (active && active.key !== key && active.state === 'searching') {
      _showOneSearchWarning(anchorEl, active.city, originCity, function() {
        delete _lbSearch[active.key];
        delete _lbCount[active.key];
        _doStartSearch(key, originCity, anchorEl);
      });
      return;
    }
    _lbSearch[key] = 'searching';
    setState({});
    setTimeout(function() {
      _lbSearch[key] = 'done'; _lbCount[key] = 2 + Math.floor(Math.random() * 4);
      setState({});
      _showLbNotif(key, originCity);
    }, 3000);
  }

  function _getActiveSearch() {
    for (var _ask in _lbSearch) {
      if (_lbSearch[_ask] === 'searching' || _lbSearch[_ask] === 'done') {
        var _asLast = _ask.lastIndexOf('_');
        var _asRid  = _ask.substring(0, _asLast);
        var _asIdx  = parseInt(_ask.substring(_asLast + 1));
        var _asLs   = loadsOf(_asRid);
        var _asLane = _asLs[_asIdx];
        if (!_asLane || _asLane.status !== 'Unbooked') {
          delete _lbSearch[_ask]; delete _lbCount[_ask];
          continue;
        }
        return { key: _ask, city: _asLane.origin || '—', state: _lbSearch[_ask] };
      }
    }
    return null;
  }

  function _showOneSearchWarning(anchorEl, activeCity, newCity, onProceed) {
    var ex = document.getElementById('_ef-onesearch'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var card = document.createElement('div'); card.id = '_ef-onesearch';
    card.style.cssText = 'position:fixed;z-index:9040;background:#131F27;border:1px solid rgba(255,255,255,.15);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.85);width:280px;padding:14px 14px 12px';
    card.innerHTML =
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px">' +
        '<div style="width:26px;height:26px;border-radius:7px;background:rgba(251,179,3,.1);border:1px solid rgba(251,179,3,.28);display:grid;place-items:center;flex-shrink:0">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FBB303" stroke-width="2.5" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>' +
        '</div>' +
        '<div style="font:800 13px '+F+';color:#FBFBFB">Active search running</div>' +
      '</div>' +
      '<div style="font:400 11px '+F+';color:#8B939B;line-height:1.55;margin-bottom:12px">' +
        'Search from <strong style="color:#FBFBFB">'+activeCity+'</strong> is active. Stop it and start from <strong style="color:#FBFBFB">'+newCity+'</strong>?' +
      '</div>' +
      '<div style="display:flex;gap:8px">' +
        '<button id="_ef-osw-cancel" style="flex:1;padding:7px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#8B939B;font:700 12px '+F+';cursor:pointer">Cancel</button>' +
        '<button id="_ef-osw-ok" style="flex:1;padding:7px;background:#E8A020;border:none;border-radius:8px;color:#0B131B;font:800 12px '+F+';cursor:pointer">Stop &amp; switch</button>' +
      '</div>';
    document.body.appendChild(card);
    // Position above anchorEl
    var rect = anchorEl ? anchorEl.getBoundingClientRect() : null;
    if (rect) {
      var cw = 280, ch = card.offsetHeight || 118;
      var top = rect.top - ch - 8;
      if (top < 8) top = rect.bottom + 8;
      var left = Math.max(8, Math.min(window.innerWidth - cw - 8, rect.left + rect.width/2 - cw/2));
      card.style.top = top + 'px'; card.style.left = left + 'px';
    } else {
      card.style.top = '50%'; card.style.left = '50%'; card.style.transform = 'translate(-50%,-50%)';
    }
    var _osClose = null;
    setTimeout(function() {
      _osClose = function(e) { if (!card.contains(e.target)) { card.remove(); document.removeEventListener('click', _osClose); } };
      document.addEventListener('click', _osClose);
    }, 0);
    card.querySelector('#_ef-osw-cancel').addEventListener('click', function(){ card.remove(); if (_osClose) document.removeEventListener('click', _osClose); });
    card.querySelector('#_ef-osw-ok').addEventListener('click', function(){
      card.remove(); if (_osClose) document.removeEventListener('click', _osClose);
      onProceed();
    });
  }
  const _rebuildLoads = {}; // rId → [{origin,dest,miles,income,pickup,customer,equipment}]
  const _pinnedFinalDest = {}; // rId → city string (final destination user set in create-route form)
  const _NEXT_DEST = {
    'Memphis, TN':        { dest: 'Nashville, TN',      miles: 212 },
    'Nashville, TN':      { dest: 'Louisville, KY',     miles: 175 },
    'Louisville, KY':     { dest: 'Columbus, OH',        miles: 185 },
    'Columbus, OH':       { dest: 'Pittsburgh, PA',      miles: 185 },
    'Pittsburgh, PA':     { dest: 'Newark, NJ',          miles: 370 },
    'St. Louis, MO':      { dest: 'Indianapolis, IN',    miles: 240 },
    'Indianapolis, IN':   { dest: 'Columbus, OH',        miles: 175 },
    'Kansas City, MO':    { dest: 'St. Louis, MO',       miles: 248 },
    'Fresno, CA':         { dest: 'Las Vegas, NV',        miles: 285 },
    'Las Vegas, NV':      { dest: 'Salt Lake City, UT',  miles: 420 },
    'Salt Lake City, UT': { dest: 'Denver, CO',           miles: 525 },
    'Denver, CO':         { dest: 'Kansas City, MO',      miles: 602 },
    'Phoenix, AZ':        { dest: 'Albuquerque, NM',      miles: 295 },
    'Albuquerque, NM':    { dest: 'Oklahoma City, OK',    miles: 540 },
    'Oklahoma City, OK':  { dest: 'Kansas City, MO',      miles: 340 },
    'Dallas, TX':         { dest: 'Oklahoma City, OK',    miles: 205 },
    'Houston, TX':        { dest: 'Dallas, TX',           miles: 239 },
    'Atlanta, GA':        { dest: 'Charlotte, NC',        miles: 245 },
    'Charlotte, NC':      { dest: 'Newark, NJ',           miles: 630 },
    'Chicago, IL':        { dest: 'Indianapolis, IN',     miles: 182 },
    'Newark, NJ':         { dest: 'Philadelphia, PA',     miles: 95  },
    'Philadelphia, PA':   { dest: 'Baltimore, MD',        miles: 100 },
    'Laredo, TX':         { dest: 'San Antonio, TX',      miles: 155 },
    'San Antonio, TX':    { dest: 'Houston, TX',          miles: 196 },
    'Savannah, GA':       { dest: 'Atlanta, GA',          miles: 252 },
  };
  // Dead-end → nearest hub within 300 mi that has outbound routes in _NEXT_DEST
  const _REALLO_DH = {
    'Baltimore, MD':     { hub: 'Philadelphia, PA', miles: 100 },
    'Newark, NJ':        { hub: 'Philadelphia, PA', miles:  95 },
    'Miami, FL':         null,  // >300 mi from any hub in our network
    'Jacksonville, FL':  { hub: 'Savannah, GA',     miles: 140 },
    'Orlando, FL':       null,
    'Tampa, FL':         null,
    'New Orleans, LA':   { hub: 'Houston, TX',      miles: 349 },  // borderline; flag as fail
    'Birmingham, AL':    { hub: 'Atlanta, GA',       miles: 147 },
    'Memphis, TN':       null,  // IS in _NEXT_DEST, won't be dead-end
    'Louisville, KY':    null,  // IS in _NEXT_DEST, won't be dead-end
    'Portland, OR':      null,
    'Seattle, WA':       null,
    'Los Angeles, CA':   null,
    'San Diego, CA':     null,
  };
  function _ralloHub(deadCity) {
    if (_REALLO_DH.hasOwnProperty(deadCity)) {
      var r = _REALLO_DH[deadCity];
      if (!r || r.miles > 300) return null;
      return r;
    }
    // Unknown city: no hub found
    return null;
  }
  const _syncingRoutes = new Set();
  const _syncDone = {}; // routeId → bool (button disabled after sync)
  const _autoAddFromLoads = {}; // routeId → bool (toggle state per route)
  var _lbConfHandler = null, _lbNotifHandler = null;
  let _lmSt = { tab: 'destinations', selDest: -1, selPath: 0, blockedPaths: new Set(), discSelIdx: -1, discExpanded: false, rcScale: 0, rcTx: 0, rcTy: 0, addLaneMode: false, addLaneRid: null, topDest: null };

  function _hideLbBar() {
    const b = document.getElementById('_ef-lb'); if (b) b.style.display = 'none';
    _hideLbMenu(); _hideLbConf(); _hideLbNotif();
  }
  function _hideLbMenu()  { var m = document.getElementById('_ef-lb-menu');  if (m) m.remove(); }
  function _hideLbConf()  { var m = document.getElementById('_ef-lb-conf');  if (m) m.remove(); if (_lbConfHandler) { document.removeEventListener('click', _lbConfHandler); _lbConfHandler = null; } }
  function _hideLbNotif() { var m = document.getElementById('_ef-lb-notif'); if (m) m.remove(); if (_lbNotifHandler) { document.removeEventListener('click', _lbNotifHandler); _lbNotifHandler = null; } }

  function _wifiSvg(anim) { return '<svg '+(anim?'style="animation:_ef-wpulse .7s ease-in-out infinite alternate"':'')+' width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>'; }
  function _applyWifiStyle(btn, state, key, originCity) {
    var color = state==='done'?'#27A767':state==='searching'?'#FBB303':'#8B939B';
    var bg    = state==='done'?'rgba(39,167,103,.12)':state==='searching'?'rgba(251,179,3,.08)':'#17242E';
    var bd    = state==='done'?'rgba(39,167,103,.4)':state==='searching'?'rgba(251,179,3,.3)':'rgba(255,255,255,.15)';
    btn.style.color = color; btn.style.background = bg; btn.style.borderColor = bd;
    btn.innerHTML = _wifiSvg(state === 'searching');
    if (state === 'done') {
      btn.onclick = function(e) { e.stopPropagation(); if (document.getElementById('_ef-lb-notif')) { _hideLbNotif(); } else { _showLbNotif(key, originCity); } };
    }
  }

  function _renderLbBar(rowEl, rId, lIdx, originCity, destCity) {
    // inject pulse keyframe once
    if (!document.getElementById('_ef-anim-style')) {
      var s = document.createElement('style'); s.id = '_ef-anim-style';
      s.textContent = '@keyframes _ef-wpulse{0%{opacity:.35}100%{opacity:1}}';
      document.head.appendChild(s);
    }
    var bar = document.getElementById('_ef-lb');
    if (!bar) {
      bar = document.createElement('div'); bar.id = '_ef-lb';
      bar.style.cssText = 'position:fixed;z-index:9001;display:none;align-items:center;gap:6px;padding:5px 8px;background:#131F27;border:1px solid rgba(255,255,255,.2);border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,.6)';
      document.body.appendChild(bar);
    }
    var key = rId + '_' + lIdx;
    var searchSt = _lbSearch[key]; // undefined | 'searching' | 'done'
    bar.innerHTML = '';

    // Add load button
    var addBtn = document.createElement('button');
    addBtn.id = '_ef-lb-add';
    addBtn.style.cssText = 'display:flex;align-items:center;gap:5px;padding:5px 11px;background:#17242E;border:1px solid rgba(255,255,255,.15);border-radius:8px;color:#FBFBFB;font:700 12px Nunito,system-ui;cursor:pointer;white-space:nowrap';
    addBtn.innerHTML = 'Add load <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"></path></svg>';
    addBtn.onclick = function(e) {
      e.stopPropagation();
      if (document.getElementById('_ef-lb-menu')) { _hideLbMenu(); }
      else { _showLbMenu(addBtn, rId, lIdx, originCity, destCity); }
    };
    if (!_lbIgnored.has(key)) {
      addBtn.style.position = 'relative';
      var _addDot = document.createElement('span');
      _addDot.style.cssText = 'position:absolute;top:-4px;right:-4px;width:8px;height:8px;border-radius:999px;background:#FBB303;border:2px solid #131F27;pointer-events:none';
      addBtn.appendChild(_addDot);
    }
    bar.appendChild(addBtn);

    bar.style.display = 'flex';
    var rect = rowEl.getBoundingClientRect();
    var _lastCell = rowEl.lastElementChild;
    var _lcRect = _lastCell ? _lastCell.getBoundingClientRect() : null;
    bar.style.right = (_lcRect && _lcRect.width > 0 ? (window.innerWidth - _lcRect.left + 8) : 72) + 'px';
    bar.style.left = 'auto';
    bar.style.top = (rect.top + (rect.height - 38) / 2) + 'px';
    bar.onmouseenter = function() { clearTimeout(_lbTimer); };
    bar.onmouseleave = function() {
      _lbTimer = setTimeout(function() {
        if (!document.getElementById('_ef-lb-conf') && !document.getElementById('_ef-lb-notif') && !document.getElementById('_ef-lb-menu')) {
          _hideLbBar();
        }
      }, 200);
    };
  }

  function _showLbMenu(anchor, rId, lIdx, originCity, destCity) {
    _hideLbMenu();
    const rect = anchor.getBoundingClientRect();
    const menu = document.createElement('div'); menu.id = '_ef-lb-menu';
    menu.style.cssText = 'position:fixed;z-index:9002;background:#101B23;border:1px solid rgba(255,255,255,.18);border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,.6);overflow:hidden;min-width:220px;left:' + rect.left + 'px;top:' + (rect.bottom + 4) + 'px';
    var _menuKey = rId + '_' + lIdx;
    var _hasSuggestion = !_lbIgnored.has(_menuKey);
    [
      { svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>', label: 'Search load', sub: 'Find a load from the loadboard', fn: null },
      { svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h3"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>', label: 'My Loads', sub: 'Add a load from My Loads', fn: function() { _hideLbMenu(); _hideLbBar(); _openLaneLoads(rId, lIdx, originCity, destCity); } },
      { svg: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M12 8v8M8 12h8"></path></svg>', label: 'Register load', sub: 'Add an external load', fn: null }
    ].forEach(function(item) {
      var isMyLoads = item.label === 'My Loads';
      var showDot = isMyLoads && _hasSuggestion;
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:' + (item.fn ? 'pointer' : 'default') + ';opacity:' + (item.fn ? '1' : '.42');
      const icon = document.createElement('div');
      icon.style.cssText = 'flex:none;width:30px;height:30px;display:grid;place-items:center;border-radius:8px;background:rgba(255,255,255,.07);color:#8B939B;position:relative';
      icon.innerHTML = item.svg;
      if (showDot) {
        var iconDot = document.createElement('span');
        iconDot.style.cssText = 'position:absolute;top:-3px;right:-3px;width:8px;height:8px;border-radius:999px;background:#FBB303;border:2px solid #101B23;pointer-events:none';
        icon.appendChild(iconDot);
      }
      const txt = document.createElement('div');
      txt.style.cssText = 'flex:1;min-width:0';
      txt.innerHTML = '<div style="font:700 13px Nunito,system-ui;color:#FBFBFB">' + item.label + '</div><div style="font:400 11px Nunito,system-ui;color:#8B939B;margin-top:2px">' + item.sub + '</div>';
      row.appendChild(icon); row.appendChild(txt);
      if (showDot) {
        var ignoreBtn = document.createElement('button');
        ignoreBtn.title = 'Ignore suggestion';
        ignoreBtn.style.cssText = 'flex:none;width:22px;height:22px;display:grid;place-items:center;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#4A6572;cursor:pointer;padding:0;font-size:15px;line-height:1';
        ignoreBtn.textContent = '×';
        ignoreBtn.addEventListener('mouseenter', function() { ignoreBtn.style.color = '#8B939B'; ignoreBtn.style.borderColor = 'rgba(255,255,255,.22)'; });
        ignoreBtn.addEventListener('mouseleave', function() { ignoreBtn.style.color = '#4A6572'; ignoreBtn.style.borderColor = 'rgba(255,255,255,.1)'; });
        ignoreBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          _lbIgnored.add(_menuKey);
          _hideLbMenu();
          var addBtnEl = document.getElementById('_ef-lb-add');
          if (addBtnEl) { var d = addBtnEl.querySelector('span[style*="FBB303"]'); if (d) d.remove(); }
        });
        row.appendChild(ignoreBtn);
      }
      if (item.fn) {
        row.addEventListener('mouseenter', function() { row.style.background = 'rgba(255,255,255,.04)'; });
        row.addEventListener('mouseleave', function() { row.style.background = ''; });
        row.addEventListener('click', function(e) { e.stopPropagation(); item.fn(); });
      }
      menu.appendChild(row);
    });
    document.body.appendChild(menu);
    setTimeout(function() {
      document.addEventListener('click', function handler(e) {
        var addBtn = document.getElementById('_ef-lb-add');
        if (addBtn && addBtn.contains(e.target)) return; // addBtn's onclick handles the toggle
        _hideLbMenu();
      }, { once: true });
    }, 0);
  }

  function _showLbConfirm(anchorEl, key, originCity) {
    _hideLbConf();
    // find any key that is currently active (searching or done), not this one
    var _activeKey = null, _activeCity = null;
    var _activeInfo = _getActiveSearch();
    if (_activeInfo && _activeInfo.key !== key && _activeInfo.state === 'searching') { _activeKey = _activeInfo.key; _activeCity = _activeInfo.city; }
    var bar = document.getElementById('_ef-lb');
    var refRect = (anchorEl && anchorEl.getBoundingClientRect) ? anchorEl.getBoundingClientRect() : (bar ? bar.getBoundingClientRect() : { right: window.innerWidth - 24, top: window.innerHeight / 2 });
    var conf = document.createElement('div'); conf.id = '_ef-lb-conf';
    conf.style.cssText = 'position:fixed;z-index:9003;background:#131F27;border:1px solid rgba(255,255,255,.15);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.7);width:300px;padding:16px;right:' + (window.innerWidth - refRect.right) + 'px;top:' + (refRect.top - 178) + 'px';
    if (_activeKey) {
      // Stop & switch variant
      conf.innerHTML =
        '<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:13px">' +
          '<div style="flex:none;width:28px;height:28px;display:grid;place-items:center;background:rgba(251,179,3,.1);border-radius:8px;color:#FBB303;margin-top:1px">' +
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>' +
          '</div>' +
          '<div style="flex:1">' +
            '<div style="font:800 13px Nunito,system-ui;color:#FBFBFB;margin-bottom:6px">Active search running</div>' +
            '<div style="font:400 11px Nunito,system-ui;color:#8B939B;line-height:1.55">Search from <strong style="color:#FBB303">' + (_activeCity || '—') + '</strong> is active. Stop it and start from <strong style="color:#FBFBFB">' + originCity + '</strong>?</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px">' +
          '<button id="_ef-lb-conf-cancel" style="flex:1;padding:7px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#8B939B;font:700 12px Nunito,system-ui;cursor:pointer">Cancel</button>' +
          '<button id="_ef-lb-conf-start" style="flex:1;padding:7px;background:#E8A020;border:none;border-radius:8px;color:#0B131B;font:800 12px Nunito,system-ui;cursor:pointer">Stop &amp; switch</button>' +
        '</div>';
      document.body.appendChild(conf);
      conf.addEventListener('mouseenter', function() { clearTimeout(_lbTimer); });
      conf.querySelector('#_ef-lb-conf-cancel').addEventListener('click', _hideLbConf);
      conf.querySelector('#_ef-lb-conf-start').addEventListener('click', function() {
        _hideLbConf();
        delete _lbSearch[_activeKey];
        delete _lbCount[_activeKey];
        _doStartSearch(key, originCity);
      });
    } else {
      // Normal start variant
      conf.innerHTML =
        '<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:13px">' +
          '<div style="flex:1">' +
            '<div style="font:800 13px Nunito,system-ui;color:#FBFBFB;margin-bottom:6px">Start Active Search?</div>' +
            '<div style="font:400 11px Nunito,system-ui;color:#8B939B;line-height:1.55">We\'ll monitor the loadboard for loads from <strong style="color:#FBFBFB">' + originCity + '</strong> and notify you of matches. Auto-stops after 15 minutes.</div>' +
          '</div>' +
          '<button id="_ef-lb-conf-map" title="Open destination map" style="flex:none;width:28px;height:28px;display:grid;place-items:center;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:8px;cursor:pointer;color:#8B939B;margin-left:6px;background:none">' +
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>' +
          '</button>' +
        '</div>' +
        '<div style="display:flex;gap:8px">' +
          '<button id="_ef-lb-conf-cancel" style="flex:1;padding:7px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#8B939B;font:700 12px Nunito,system-ui;cursor:pointer">Cancel</button>' +
          '<button id="_ef-lb-conf-start" style="flex:1;padding:7px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 12px Nunito,system-ui;cursor:pointer">Start search</button>' +
        '</div>';
      document.body.appendChild(conf);
      conf.addEventListener('mouseenter', function() { clearTimeout(_lbTimer); });
      conf.querySelector('#_ef-lb-conf-map').addEventListener('click', function() {
        _hideLbConf(); _lmSt.origin = originCity; _doRenderLaneMap();
      });
      conf.querySelector('#_ef-lb-conf-cancel').addEventListener('click', _hideLbConf);
      conf.querySelector('#_ef-lb-conf-start').addEventListener('click', function() {
        _hideLbConf();
        _doStartSearch(key, originCity);
      });
    }
    // persistent click-outside handler
    setTimeout(function() {
      _lbConfHandler = function(e) {
        var c = document.getElementById('_ef-lb-conf'), b = document.getElementById('_ef-lb');
        if (c && c.contains(e.target)) return;
        if (b && b.contains(e.target)) return;
        _hideLbConf();
      };
      document.addEventListener('click', _lbConfHandler);
    }, 50);
  }

  function _showLbNotif(key, originCity) {
    _hideLbNotif();
    var count = (_lbCount[key] || 2) * 134 + 1;
    var bar = document.getElementById('_ef-lb');
    var barRect = bar ? bar.getBoundingClientRect() : { right: window.innerWidth - 24, top: window.innerHeight / 2 };
    var notif = document.createElement('div'); notif.id = '_ef-lb-notif';
    notif.style.cssText = 'position:fixed;z-index:9003;background:#131F27;border:1px solid rgba(39,167,103,.25);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.7);width:320px;padding:14px;right:' + (window.innerWidth - barRect.right) + 'px;top:' + (barRect.top - 136) + 'px';
    notif.innerHTML =
      '<div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:10px">' +
        '<svg width="13" height="13" style="flex:none;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>' +
        '<div style="flex:1">' +
          '<div style="font:700 12px Nunito,system-ui;color:#FBFBFB;margin-bottom:3px"><span style="color:#27A767">' + count + ' loads found</span> · Expanding from <strong>' + originCity + '</strong></div>' +
          '<div style="font:400 10px Nunito,system-ui;color:#6B7373;margin-bottom:5px">Last check 6s ago · Auto-stops in 2m 12s</div>' +
          '<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:999px;background:rgba(251,179,3,.1);border:1px solid rgba(251,179,3,.3);font:700 10px Nunito,system-ui;color:#FBB303"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>Started by truck ETA</span>' +
        '</div>' +
        '<button id="_ef-lb-notif-map" title="Open destination map" style="flex:none;width:26px;height:26px;display:grid;place-items:center;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:7px;cursor:pointer;color:#8B939B;margin-left:4px;background:none">' +
          '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>' +
        '</button>' +
      '</div>' +
      '<div style="display:flex;gap:8px">' +
        '<button id="_ef-lb-notif-stop" style="flex:1;padding:6px;background:transparent;border:1px solid rgba(235,67,67,.3);border-radius:8px;color:#EB4343;font:700 11px Nunito,system-ui;cursor:pointer">Stop search</button>' +
        '<button id="_ef-lb-notif-view" style="flex:1;padding:6px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 11px Nunito,system-ui;cursor:pointer">View loads →</button>' +
      '</div>';
    document.body.appendChild(notif);
    notif.addEventListener('mouseenter', function() { clearTimeout(_lbTimer); });
    notif.querySelector('#_ef-lb-notif-map').addEventListener('click', function() { _lmSt.origin = originCity; _doRenderLaneMap(); });
    notif.querySelector('#_ef-lb-notif-stop').addEventListener('click', function() { _lbSearch[key] = 'idle'; delete _lbCount[key]; _hideLbNotif(); _hideLbBar(); setState({}); });
    notif.querySelector('#_ef-lb-notif-view').addEventListener('click', function() { _openSearchLoads(count, originCity, key); });
    // persistent click-outside
    setTimeout(function() {
      _lbNotifHandler = function(e) {
        var n = document.getElementById('_ef-lb-notif'), b = document.getElementById('_ef-lb');
        if (n && n.contains(e.target)) return;
        if (b && b.contains(e.target)) return;
        _hideLbNotif();
      };
      document.addEventListener('click', _lbNotifHandler);
    }, 50);
  }

  function _openSearchLoads(count, originCity, lbKey) {
    var ex = document.getElementById('_ef-sl'); if (ex) ex.remove();
    var originShort = (originCity || '').split(',')[0];
    var SAMPLE = [
      { age:'1 h',  rate:'Call broker', fit:90,  dist:996,  dho:0,   pickup:originShort+', '+((originCity||'').split(', ')[1]||''),  pickDate:'AUG 26', dhd:null, drop:'Elizabeth, NJ',  dropDate:'AUG 26', specs:'48 or 53 ft · 23,000 lbs', broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true,  powered:'' },
      { age:'1 h',  rate:'Call broker', fit:90,  dist:1115, dho:6,   pickup:originShort+', '+((originCity||'').split(', ')[1]||''),  pickDate:'AUG 26', dhd:null, drop:'Elizabeth, NJ',  dropDate:'AUG 26', specs:'48 ft · 23,000 lbs',    broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true,  powered:'' },
      { age:'22 m', rate:'Call broker', fit:90,  dist:1080, dho:97,  pickup:'Ocala, FL',      pickDate:'AUG 26', dhd:null, drop:'Stamford, CT',   dropDate:'CALL BROKER',specs:'48 ft · 27,000 lbs',    broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true,  powered:'' },
      { age:'2 m',  rate:'Call broker', fit:90,  dist:1159, dho:0,   pickup:originShort+', '+((originCity||'').split(', ')[1]||''),  pickDate:'AUG 26', dhd:null, drop:'Elizabeth, NJ',  dropDate:'CALL BROKER',specs:'23,000 lbs',            broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true,  powered:'' },
      { age:'32 m', rate:'Call broker', fit:90,  dist:1162, dho:0,   pickup:originShort+', '+((originCity||'').split(', ')[1]||''),  pickDate:'AUG 26', dhd:null, drop:'Newark, NJ',     dropDate:'CALL BROKER',specs:'53 ft · 24,500 lbs',    broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true,  powered:'' },
      { age:'2 m',  rate:'$1,250\n$5.02/mi', fit:90, dist:1125, dho:0, pickup:originShort+', '+((originCity||'').split(', ')[1]||''), pickDate:'AUG 26', dhd:0, drop:'Elizabeth, NJ', dropDate:'AUG 26 03:00', specs:'48 ft · 23,000 lbs', broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true, powered:'TRUCKSTOP' },
      { age:'22 m', rate:'Call broker', fit:90,  dist:1079, dho:85,  pickup:'Clearwater, FL', pickDate:'AUG 26', dhd:null, drop:'East Orange, NJ', dropDate:'AUG 26 03:00',specs:'48 ft · 28,000 lbs',    broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true,  powered:'TRUCKSTOP' },
      { age:'1 h',  rate:'Call broker', fit:89,  dist:1110, dho:5,   pickup:originShort+', '+((originCity||'').split(', ')[1]||''),  pickDate:'AUG 26', dhd:null, drop:'Elizabeth, NJ',  dropDate:'AUG 26', specs:'48 ft · 23,000 lbs',    broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true,  powered:'' },
      { age:'+9 h', rate:'Call broker', fit:67,  dist:1138, dho:56,  pickup:'Polk City, FL',  pickDate:'AUG 26', dhd:null, drop:'Bolingbrook, IL', dropDate:'AUG 28', specs:'11,000 lbs',            broker:'LANDSTAR RANGER INC...', phone:'(424) 367-0626', verified:true,  powered:'' },
      { age:'3 m',  rate:'Call broker', fit:51,  dist:205,  dho:51,  pickup:'Haines City, FL',pickDate:'AUG 27 22:00-23:59', dhd:null, drop:'Fort Lauderdale, FL', dropDate:'AUG 27 08:00-17:00', specs:'32,840 lbs', broker:'SPOT FREIGHT INC', phone:'(317) 635-6207', verified:false, powered:'' },
      { age:'15 m', rate:'$800\n$3.16/mi', fit:34, dist:253, dho:34, pickup:'Brooksville, FL', pickDate:'AUG 26', dhd:null, drop:'Deerfield Beach, FL', dropDate:'AUG 27', specs:'53 ft · 10,000 lbs', broker:'TOTAL QUALITY LOGIST...', phone:'(800) 580-3101', verified:true, powered:'' },
    ];
    // Parse lbKey → rId + lIdx
    var _slRid = null, _slLIdx = null;
    if (lbKey) {
      var _us = lbKey.lastIndexOf('_');
      _slRid = lbKey.substring(0, _us);
      _slLIdx = parseInt(lbKey.substring(_us + 1));
    }
    var ov = document.createElement('div'); ov.id = '_ef-sl';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9010;display:flex;flex-direction:column;background:#0B1520;font-family:Nunito,system-ui,sans-serif';

    // ── Tab bar ──
    var tabBar = document.createElement('div');
    tabBar.style.cssText = 'display:flex;align-items:center;gap:0;background:#0B1520;border-bottom:1px solid rgba(255,255,255,.07);flex:none;padding:0 12px;height:40px';
    tabBar.innerHTML =
      '<div style="display:flex;align-items:center;gap:7px;padding:0 12px;height:100%;border-bottom:2px solid #27A767;color:#FBFBFB;font:600 12px Nunito,system-ui;cursor:default">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
        '[Reefer] ' + originShort + ' → All' +
        '<span id="_ef-sl-x" style="display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:4px;cursor:pointer;color:#6B7373;font-size:11px;font-weight:800">✕</span>' +
      '</div>' +
      '<div style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.1);color:#8B939B;font-size:16px;cursor:pointer;margin-left:4px">+</div>';

    // ── Search bar ──
    var searchBar = document.createElement('div');
    searchBar.style.cssText = 'display:flex;align-items:center;gap:8px;padding:8px 16px;background:#0B1520;border-bottom:1px solid rgba(255,255,255,.07);flex:none;position:relative';
    // Left: Go back button
    var _goBackBtn = document.createElement('button');
    _goBackBtn.id = '_ef-sl-goback';
    _goBackBtn.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:0 14px;height:36px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#8B939B;font:700 12px Nunito,system-ui;cursor:pointer;white-space:nowrap;flex:none';
    _goBackBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>Go back';
    _goBackBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      ov.remove();
      setState({ openRoute: _slRid });
    });
    searchBar.appendChild(_goBackBtn);
    // Center group: equipment + origin + destination + search btn
    var _sbCenter = document.createElement('div');
    _sbCenter.style.cssText = 'position:absolute;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:6px';
    _sbCenter.innerHTML =
      '<div style="display:flex;align-items:center;gap:7px;padding:0 14px;height:36px;background:#131F27;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#FBFBFB;font:600 12px Nunito,system-ui;cursor:pointer;white-space:nowrap">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' +
        'Reefer' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:7px;padding:0 14px;height:36px;background:#131F27;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#FBFBFB;font:600 12px Nunito,system-ui;cursor:pointer;white-space:nowrap">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/></svg>' +
        originCity +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:7px;padding:0 14px;height:36px;background:#131F27;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#8B939B;font:600 12px Nunito,system-ui;cursor:pointer;white-space:nowrap">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
        'Destination' +
      '</div>' +
      '<button style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;background:#27A767;border:none;border-radius:8px;cursor:pointer;flex:none">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B131B" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
      '</button>';
    searchBar.appendChild(_sbCenter);
    // Right: spacer + results + refresh
    var _sbRight = document.createElement('div');
    _sbRight.style.cssText = 'display:flex;align-items:center;gap:8px;margin-left:auto';
    _sbRight.innerHTML =
      '<span style="font:600 12px Nunito,system-ui;color:#8B939B;white-space:nowrap">Results: <span style="color:#FBFBFB">' + count + '</span></span>' +
      '<div style="display:flex;align-items:center;gap:5px;padding:0 10px;height:36px;background:#131F27;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#8B939B;font:600 11px Nunito,system-ui;cursor:pointer">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>' +
        'Refresh' +
      '</div>';
    searchBar.appendChild(_sbRight);

    // ── Filters row ──
    var filtersRow = document.createElement('div');
    filtersRow.style.cssText = 'display:flex;align-items:center;gap:0;padding:0 16px;height:44px;border-bottom:1px solid rgba(255,255,255,.06);flex:none;overflow-x:auto';
    var _filters = [
      { label:'Integrations', badge:'1', link:true },
      { label:'26 ago - 27 ago' }, { label:'Ignore brokers' },
      { label:'DH:150mi / 150mi' }, { label:'All states' },
      { label:'All number of drivers' }, { label:'More' }
    ];
    _filters.forEach(function(f, fi) {
      if (fi > 0) {
        var sep = document.createElement('div');
        sep.style.cssText = 'width:1px;height:20px;background:rgba(255,255,255,.08);margin:0 4px;flex:none';
        filtersRow.appendChild(sep);
      }
      var chip = document.createElement('div');
      chip.style.cssText = 'display:flex;align-items:center;gap:5px;padding:5px 10px;border-radius:7px;border:1px solid rgba(255,255,255,.1);background:#131F27;color:#DDE3E9;font:600 11px Nunito,system-ui;cursor:pointer;white-space:nowrap;flex:none';
      var lbl = document.createElement('span');
      lbl.textContent = f.label;
      chip.appendChild(lbl);
      if (f.badge) {
        var bdg = document.createElement('span');
        bdg.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:999px;background:#EB4343;color:#fff;font:800 9px Nunito,system-ui';
        bdg.textContent = f.badge;
        chip.appendChild(bdg);
      }
      if (f.link) {
        var lnk = document.createElement('span');
        lnk.style.cssText = 'color:#7BCBCB;font-size:11px';
        lnk.innerHTML = '↔';
        chip.appendChild(lnk);
      }
      var arr = document.createElement('span');
      arr.style.cssText = 'color:#6B7373;font-size:10px';
      arr.textContent = '▾';
      chip.appendChild(arr);
      filtersRow.appendChild(chip);
    });
    // Sort button
    var sortBtn = document.createElement('div');
    sortBtn.style.cssText = 'display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.1);color:#8B939B;cursor:pointer;margin-left:8px;flex:none;font-size:13px';
    sortBtn.innerHTML = '↕';
    filtersRow.appendChild(sortBtn);

    // ── Table ──
    var tableWrap = document.createElement('div');
    tableWrap.style.cssText = 'flex:1;overflow-y:auto;overflow-x:hidden';
    var COL = '70px 130px 80px 100px 70px 1fr 60px 1fr 150px 200px 120px';
    var tHead = document.createElement('div');
    tHead.style.cssText = 'display:grid;grid-template-columns:'+COL+';padding:0 16px;border-bottom:1px solid rgba(255,255,255,.06);position:sticky;top:0;background:#0B1520;z-index:2';
    var COLS = ['Age','Rate','Fit Score ⓘ','Distance (mi)','DH-O','PickUp','DH-D','DropOff','Specifications','Broker','Powered By'];
    COLS.forEach(function(h) {
      var th = document.createElement('div');
      th.style.cssText = 'padding:9px 6px;font:700 10.5px Nunito,system-ui;color:#6B7373;letter-spacing:.03em;white-space:nowrap;display:flex;align-items:center;gap:4px';
      th.textContent = h;
      if (h !== 'Powered By') {
        var arr = document.createElement('span');
        arr.style.cssText = 'color:#3B4E5C;font-size:9px';
        arr.textContent = '↓';
        th.appendChild(arr);
      }
      tHead.appendChild(th);
    });
    tableWrap.appendChild(tHead);

    // Table rows
    SAMPLE.forEach(function(row, si) {
      var tr = document.createElement('div');
      tr.style.cssText = 'display:grid;grid-template-columns:'+COL+';padding:0 16px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer;transition:background 100ms';
      tr.addEventListener('mouseenter', function(){tr.style.background='rgba(255,255,255,.025)';});
      tr.addEventListener('mouseleave', function(){tr.style.background='';});
      function _cell(css, html) {
        var d = document.createElement('div');
        d.style.cssText = 'padding:11px 6px;display:flex;align-items:center;'+css;
        d.innerHTML = html;
        return d;
      }
      // Age
      tr.appendChild(_cell('font:400 11px Nunito,system-ui;color:#6B7373;white-space:nowrap', row.age));
      // Rate
      var rateLines = row.rate.split('\n');
      tr.appendChild(_cell('flex-direction:column;align-items:flex-start;gap:1px', rateLines.length>1
        ? '<span style="font:600 11px Nunito,system-ui;color:#FBFBFB">'+rateLines[0]+'</span><span style="font:400 10px Nunito,system-ui;color:#3FC281">'+rateLines[1]+'</span>'
        : '<span style="font:600 11px Nunito,system-ui;color:#8B939B">'+row.rate+'</span>'));
      // Fit Score
      var fitColor = row.fit >= 80 ? '#3FC281' : row.fit >= 50 ? '#FBB303' : '#EB4343';
      tr.appendChild(_cell('gap:6px',
        '<span style="font:700 11px Nunito,system-ui;color:'+fitColor+'">'+row.fit+'</span>' +
        (row.fit >= 80 ? '' : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7373" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>')));
      // Distance
      tr.appendChild(_cell('font:600 11px Nunito,system-ui;color:#DDE3E9;gap:5px',
        row.dist.toLocaleString('en-US') +
        (row.fit >= 80 && row.dho===0 ? '<span style="display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:rgba(123,203,203,.15);font-size:8px;color:#7BCBCB">?</span>' : '')));
      // DH-O
      tr.appendChild(_cell('font:600 11px Nunito,system-ui;color:#DDE3E9', row.dho!=null ? String(row.dho) : ''));
      // PickUp
      tr.appendChild(_cell('flex-direction:column;align-items:flex-start;gap:1px',
        '<span style="font:700 11px Nunito,system-ui;color:#DDE3E9;letter-spacing:.04em;text-transform:uppercase">'+row.pickup+'</span>' +
        '<span style="font:400 10px Nunito,system-ui;color:#6B7373">'+row.pickDate+'</span>'));
      // DH-D
      tr.appendChild(_cell('font:600 11px Nunito,system-ui;color:#DDE3E9', row.dhd!=null ? String(row.dhd) : ''));
      // DropOff
      var _dropDotColor = row.verified ? '#27A767' : null;
      tr.appendChild(_cell('flex-direction:column;align-items:flex-start;gap:1px',
        '<span style="display:flex;align-items:center;gap:5px;font:700 11px Nunito,system-ui;color:#DDE3E9;letter-spacing:.04em;text-transform:uppercase">'+row.drop+(_dropDotColor?'<span style="width:6px;height:6px;border-radius:50%;background:'+_dropDotColor+';flex-shrink:0"></span>':'')+'</span>' +
        '<span style="font:400 10px Nunito,system-ui;color:#6B7373">'+row.dropDate+'</span>'));
      // Specifications
      tr.appendChild(_cell('font:400 11px Nunito,system-ui;color:#8B939B', row.specs));
      // Broker
      tr.appendChild(_cell('flex-direction:column;align-items:flex-start;gap:2px',
        '<span style="font:600 11px Nunito,system-ui;color:#DDE3E9">'+row.broker+'</span>' +
        '<span style="display:flex;align-items:center;gap:4px;font:400 10px Nunito,system-ui;color:#6B7373">' + row.phone +
          '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B7373" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.18.92z"/></svg>' +
        '</span>' +
        (row.verified ? '<span style="display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:rgba(39,167,103,.15);border:1px solid rgba(39,167,103,.3)"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>' : '')));
      // Powered By
      tr.appendChild(_cell('font:700 10px Nunito,system-ui;color:#EB4343;letter-spacing:.04em', row.powered
        ? '<span style="border:1px solid rgba(235,67,67,.3);border-radius:4px;padding:2px 6px">★ '+row.powered+'</span>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>'));
      // "Add load" on click
      tr.setAttribute('data-si', String(si));
      tr.addEventListener('click', function() {
        var ld = SAMPLE[parseInt(tr.dataset.si)];
        var _destChanged = false, _cascadeResult = null;
        var _before, _after, _oldDest;
        if (_slRid !== null && _slLIdx !== null) {
          var tgt = loadsOf(_slRid)[_slLIdx];
          if (tgt) {
            _before = _snapStats(_slRid);
            _oldDest = tgt.dest;
            _simBeforeLanes = loadsOf(_slRid).filter(function(l){ return l.status !== 'Delivered' && l.status !== 'Paid' && l.status !== 'Invoiced'; }).map(function(l){ return { origin: l.origin, dest: l.dest, status: l.status }; });
            var _revParts = (ld.rate || '').replace(/[$,]/g,'').split(/[–\-]/);
            var _avgIncome = (_revParts[0] && !isNaN(parseFloat(_revParts[0])))
              ? Math.round((parseFloat(_revParts[0]) + parseFloat(_revParts[1] || _revParts[0])) / 2)
              : Math.round(ld.dist * 2.8);
            tgt.origin = originCity; tgt.dest = ld.drop; tgt.miles = ld.dist;
            tgt.income = _avgIncome; tgt.status = 'Booked';
            if (ld.drop !== _oldDest) { _cascadeResult = _cascadeLane(_slRid, _slLIdx, ld.drop); _destChanged = true; }
            _after = _snapStats(_slRid);
            _simAfterLanes = loadsOf(_slRid).filter(function(l){ return l.status !== 'Delivered' && l.status !== 'Paid' && l.status !== 'Invoiced'; }).map(function(l){ return { origin: l.origin, dest: l.dest, status: l.status }; });
          }
        }
        ov.remove();
        _hideLbBar(); _hideLbNotif();
        setState({});
        if (window.__EFR_DEV && typeof _before !== 'undefined') {
          _showAddingLoad(function() {
            _showScenarioPicker(_slRid, ld.drop, _before, function(caseNum, simCtx) {
              _showAdaptingPlan(function() { _runSimCase(caseNum, _slRid, _before, simCtx); });
            }, _oldDest);
          });
        } else {
          _showAddingLoad(function() {
            if (_destChanged && typeof _before !== 'undefined') {
              if (_cascadeResult && _cascadeResult.caseB) {
                _showAdaptingPlan(function() { _showCaseBModal(_slRid, _before, _after, _cascadeResult); });
              } else if (_cascadeResult && _cascadeResult.deadEnd) {
                _showAdaptingPlan(function() { _showCaseCModal(_slRid, _cascadeResult.deadCity); });
              } else {
                var _opts = { pinnedDest: _pinnedFinalDest[_slRid] || null, deadEnd: false, deadCity: null, fromDest: _oldDest, toDest: ld.drop };
                _showAdaptingPlan(function() { _showRebalanceModal(_before, _after, _opts); });
              }
            }
          });
        }
      });
      tableWrap.appendChild(tr);
    });

    ov.appendChild(tabBar);
    ov.appendChild(searchBar);
    ov.appendChild(filtersRow);
    ov.appendChild(tableWrap);
    document.body.appendChild(ov);
    ov.querySelector('#_ef-sl-x').addEventListener('click', function() { ov.remove(); });
  }

  // When a load is added to lane lIdx and its dest differs from the old dest,
  // cascade the new origin down every subsequent Unbooked lane so the plan re-routes.
  function _cascadeLane(rId, changedIdx, newDest) {
    var all = loadsOf(rId);
    var deadEnd = false, deadCity = null;
    var lastUnbookedIdx = -1;
    for (var k = changedIdx + 1; k < all.length; k++) {
      if (all[k].status === 'Unbooked') lastUnbookedIdx = k; else break;
    }
    for (var j = changedIdx + 1; j < all.length; j++) {
      if (all[j].status === 'Unbooked') {
        var prevDest = all[j - 1].dest;
        all[j].origin = prevDest;
        var pinnedDest = _pinnedFinalDest[rId];
        if (j === lastUnbookedIdx && pinnedDest) {
          all[j].dest = pinnedDest;
          all[j].miles = all[j].miles || 300;
        } else {
          var nd = _NEXT_DEST[prevDest];
          if (nd) { all[j].dest = nd.dest; all[j].miles = nd.miles; }
          else { deadEnd = true; deadCity = prevDest; break; }
        }
      } else {
        break;
      }
    }
    // Case B: pinned dest was forced but doesn't follow naturally from the last Unbooked lane's origin
    var caseB = false, caseBNaturalDest = null, caseBNaturalMiles = 0;
    if (!deadEnd && lastUnbookedIdx >= 0) {
      var _pinned = _pinnedFinalDest[rId];
      if (_pinned) {
        var lastOrigin = all[lastUnbookedIdx].origin;
        var naturalNext = _NEXT_DEST[lastOrigin];
        if (!naturalNext || naturalNext.dest !== _pinned) {
          caseB = true;
          caseBNaturalDest = naturalNext ? naturalNext.dest : null;
          caseBNaturalMiles = naturalNext ? naturalNext.miles : 0;
        }
      }
    }
    var caseBLastOrigin = (caseB && lastUnbookedIdx >= 0) ? all[lastUnbookedIdx].origin : null;
    return { deadEnd: deadEnd, deadCity: deadCity, caseB: caseB, caseBNaturalDest: caseBNaturalDest, caseBNaturalMiles: caseBNaturalMiles, caseBLastOrigin: caseBLastOrigin };
  }

  function _openRebuildModal(rId) {
    var ex = document.getElementById('_ef-rb'); if (ex) ex.remove();
    var loads = _rebuildLoads[rId] || [];
    if (!loads.length) return;
    var F = 'Nunito,system-ui';
    var ov = document.createElement('div'); ov.id = '_ef-rb';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9020;background:rgba(6,12,17,.6);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1px solid rgba(251,179,3,.25);border-radius:14px;width:520px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 64px rgba(0,0,0,.9)';
    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:flex-start;gap:12px;padding:18px 20px 14px;border-bottom:1px solid rgba(255,255,255,.07)';
    hdr.innerHTML =
      '<div style="width:36px;height:36px;border-radius:10px;background:rgba(251,179,3,.1);border:1px solid rgba(251,179,3,.3);display:grid;place-items:center;flex-shrink:0">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBB303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 .49-4.14"></path></svg>' +
      '</div>' +
      '<div style="flex:1">' +
        '<div style="font:800 14px '+F+';color:#FBFBFB">Rebuild cycle</div>' +
        '<div style="font:400 11px '+F+';color:#8B939B;margin-top:3px">Cargas ignoradas al crear la ruta — agrégalas al inicio del plan para planear desde atrás hacia adelante.</div>' +
      '</div>' +
      '<button id="_ef-rb-x" style="width:28px;height:28px;display:grid;place-items:center;border-radius:7px;cursor:pointer;color:#8B939B;border:1px solid rgba(255,255,255,.1);background:none;font-size:13px">✕</button>';
    modal.appendChild(hdr);
    // Load list
    var list = document.createElement('div');
    list.style.cssText = 'padding:12px 20px;display:flex;flex-direction:column;gap:8px;max-height:360px;overflow-y:auto';
    function _renderList() {
      list.innerHTML = '';
      var current = _rebuildLoads[rId] || [];
      if (!current.length) { ov.remove(); return; }
      current.forEach(function(ld, li) {
        var card = document.createElement('div');
        card.style.cssText = 'display:flex;align-items:center;gap:12px;padding:12px 14px;background:#131F27;border:1px solid rgba(255,255,255,.08);border-radius:10px';
        // Route info
        var info = document.createElement('div');
        info.style.cssText = 'flex:1;min-width:0';
        info.innerHTML =
          '<div style="display:flex;align-items:center;gap:6px;font:700 13px '+F+';color:#FBFBFB">' +
            ld.origin +
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7373" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>' +
            ld.dest +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:10px;margin-top:5px;font:400 11px '+F+';color:#8B939B">' +
            '<span>' + ld.miles + ' mi</span>' +
            '<span>·</span>' +
            '<span style="color:#3FC281;font-weight:700">$' + ld.income.toLocaleString('en-US') + '</span>' +
            '<span>·</span>' +
            '<span>Pickup ' + ld.pickup + '</span>' +
            (ld.customer !== '--' ? '<span>·</span><span>' + ld.customer + '</span>' : '') +
          '</div>';
        card.appendChild(info);
        // Add button
        var addBtn = document.createElement('button');
        addBtn.style.cssText = 'padding:6px 14px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 12px '+F+';cursor:pointer;white-space:nowrap;flex-shrink:0';
        addBtn.textContent = '+ Al plan';
        addBtn.addEventListener('click', function() {
          // Insert as lane 1: create a new load and unshift it into LOADS
          var routeLoads = loadsOf(rId);
          var firstLoad = routeLoads[0];
          var newLd = {
            id: 'ef-rb-' + rId + '-' + li,
            route: rId,
            origin: ld.origin, dest: ld.dest, miles: ld.miles,
            income: ld.income, status: 'Booked',
            pickup: ld.pickup, pickupTime: '08:00 - 12:00',
            delivery: ld.pickup, deliveryTime: '12:00 - 16:00',
            customer: ld.customer !== '--' ? ld.customer : (firstLoad ? firstLoad.customer : '--'),
            eta: '--', onTime: '--', stops: 1,
            truck: firstLoad ? firstLoad.truck : '--',
            equipment: ld.equipment || (firstLoad ? firstLoad.equipment : 'Van 53')
          };
          // Insert at beginning of LOADS for this route
          var insertIdx = LOADS.findIndex(function(l){ return l.route === rId; });
          if (insertIdx >= 0) LOADS.splice(insertIdx, 0, newLd); else LOADS.push(newLd);
          // Remove from rebuild list
          _rebuildLoads[rId].splice(li, 1);
          if (_rebuildLoads[rId].length === 0) delete _rebuildLoads[rId];
          _renderList();
          // Rebalance always if dest doesn't match the next lane's origin
          _showAddingLoad(function() {
            var _loadsNow = loadsOf(rId);
            var _newIdx = _loadsNow.findIndex(function(l){ return l.id === newLd.id; });
            _rebalancePlanChain(rId, _newIdx + 1);
          });
        });
        card.appendChild(addBtn);
        list.appendChild(card);
      });
    }
    _renderList();
    modal.appendChild(list);
    // ── Auto-rebalance toggle ──
    var togSection = document.createElement('div');
    togSection.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 20px;border-top:1px solid rgba(255,255,255,.07)';
    var togText = document.createElement('div');
    togText.style.cssText = 'flex:1;min-width:0';
    togText.innerHTML =
      '<div style="font:700 12px '+F+';color:#FBFBFB;margin-bottom:2px">Auto-add from My Loads</div>' +
      '<div style="font:400 10px '+F+';color:#6B7373;line-height:1.5">When refreshing, automatically add matching loads from My Loads into empty Unbooked lanes.</div>';
    var _arOn = !!_autoAddFromLoads[rId];
    var togTrack = document.createElement('div');
    togTrack.style.cssText = 'width:44px;height:24px;border-radius:999px;background:'+(_arOn?'#27A767':'rgba(255,255,255,.12)')+';position:relative;cursor:pointer;flex-shrink:0;transition:background .2s';
    var togKnob = document.createElement('div');
    togKnob.style.cssText = 'position:absolute;top:3px;left:'+(_arOn?'23px':'3px')+';width:18px;height:18px;border-radius:50%;background:#FBFBFB;transition:left .2s';
    togTrack.appendChild(togKnob);
    togTrack.addEventListener('click', function() {
      _arOn = !_arOn;
      _autoAddFromLoads[rId] = _arOn;
      togTrack.style.background = _arOn ? '#27A767' : 'rgba(255,255,255,.12)';
      togKnob.style.left = _arOn ? '23px' : '3px';
    });
    togSection.appendChild(togText);
    togSection.appendChild(togTrack);
    modal.appendChild(togSection);
    // Footer
    var ftr = document.createElement('div');
    ftr.style.cssText = 'display:flex;align-items:center;justify-content:flex-end;padding:12px 20px;border-top:1px solid rgba(255,255,255,.07);background:#0D141B';
    var closeBtn = document.createElement('button');
    closeBtn.style.cssText = 'padding:6px 16px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:transparent;color:#ABABAB;font:600 12px '+F+';cursor:pointer';
    closeBtn.textContent = 'Cerrar';
    closeBtn.addEventListener('click', function(){ ov.remove(); });
    ftr.appendChild(closeBtn);
    modal.appendChild(ftr);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e){ if(e.target===ov) ov.remove(); });
    modal.querySelector('#_ef-rb-x').addEventListener('click', function(){ ov.remove(); });
  }

  // ── Stats snapshot for rebalance modal ──────────────────────────────────
  function _snapStats(routeId) {
    var loads = loadsOf(routeId);
    var income = loads.reduce(function(s,l){ return s + (l.income||0); }, 0);
    var miles  = loads.reduce(function(s,l){ return s + (l.miles||0); }, 0);
    var driveMins = loads.reduce(function(s,l){ return s + (l.miles||0)/55*60; }, 0);
    var days = Math.max(1, Math.ceil(driveMins/60/11));
    var rpm  = miles > 0 ? income/miles : 0;
    var cost = miles * 2.4;
    var profit = income - cost;
    return { income:income, miles:miles, days:days, rpm:rpm, cost:cost, profit:profit };
  }

  // ── Rebalance chain: update downstream Unbooked origins ─────────────────
  function _rebalancePlanChain(routeId, fromIdx) {
    var loads = loadsOf(routeId);
    var before = _snapStats(routeId);
    // Capture from/to cities before the loop updates origins
    var _fromDest = (loads[fromIdx] && loads[fromIdx].origin) ? loads[fromIdx].origin : null;
    var _toDest   = (fromIdx > 0 && loads[fromIdx-1]) ? loads[fromIdx-1].dest : null;
    // Pin the last Unbooked lane's dest to the user's target destination if set
    var pinnedDest = _pinnedFinalDest[routeId];
    if (pinnedDest) {
      for (var p = loads.length - 1; p >= fromIdx; p--) {
        if (loads[p].status === 'Unbooked') { loads[p].dest = pinnedDest; break; }
      }
    }
    var prevDest = fromIdx > 0 ? loads[fromIdx-1].dest : null;
    for (var i = fromIdx; i < loads.length; i++) {
      if (loads[i].status === 'Unbooked') {
        if (prevDest) loads[i].origin = prevDest;
        loads[i].customer = '--';
        loads[i].income = 0;
      }
      prevDest = loads[i].dest;
    }
    var after = _snapStats(routeId);
    setState({});
    if (window.__EFR_DEV) {
      _showAddingLoad(function() {
        _showScenarioPicker(routeId, _toDest, before, function(caseNum, simCtx) {
          _showAdaptingPlan(function() { _runSimCase(caseNum, routeId, before, simCtx); });
        }, _fromDest);
      });
    } else {
      var _rOpts = { pinnedDest: _pinnedFinalDest[routeId] || null, deadEnd: false, deadCity: null, fromDest: _fromDest, toDest: _toDest };
      _showAdaptingPlan(function() { _showRebalanceModal(before, after, _rOpts); });
    }
  }

  // ── Case B: plan doesn't naturally reach pinned destination ─────────────
  function _showCaseBModal(rId, before, after, cascadeResult) {
    var ex = document.getElementById('_ef-caseb'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var MN = '\'JetBrains Mono\',monospace';
    var pinned = _pinnedFinalDest[rId] || '';
    var naturalDest   = cascadeResult.caseBNaturalDest;
    var naturalMiles  = cascadeResult.caseBNaturalMiles;
    var lastOriginCity = cascadeResult.caseBLastOrigin || '';

    var ov = document.createElement('div'); ov.id = '_ef-caseb';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9030;background:rgba(6,12,17,.72);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1px solid rgba(251,179,3,.3);border-radius:14px;width:480px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.9)';

    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:12px;padding:18px 20px 14px;border-bottom:1px solid rgba(255,255,255,.07)';
    hdr.innerHTML =
      '<div style="width:34px;height:34px;border-radius:10px;background:rgba(251,179,3,.1);border:1px solid rgba(251,179,3,.3);display:grid;place-items:center;flex-shrink:0">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FBB303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>' +
      '</div>' +
      '<div style="flex:1">' +
        '<div style="font:800 13px '+F+';color:#FBFBFB">Plan no longer reaches '+pinned+'</div>' +
        '<div style="font:400 11px '+F+';color:#8B939B;margin-top:2px">Adding this load shifted the route away from your target destination.</div>' +
      '</div>';
    modal.appendChild(hdr);

    // Natural end info
    var infoRow = document.createElement('div');
    infoRow.style.cssText = 'padding:12px 20px;display:flex;gap:10px;border-bottom:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02)';
    infoRow.innerHTML =
      '<div style="flex:1;padding:10px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px">' +
        '<div style="font:700 9px '+F+';letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:6px">Best plan found ends at</div>' +
        '<div style="font:800 13px '+F+';color:#FBFBFB">'+(naturalDest || 'Current city')+'</div>' +
        (naturalMiles ? '<div style="font:400 10.5px '+F+';color:#6B7373;margin-top:3px">'+naturalMiles+' mi from '+(lastOriginCity||'previous stop')+'</div>' : '') +
      '</div>' +
      '<div style="display:flex;align-items:center;color:#6B7373;font-size:16px">→</div>' +
      '<div style="flex:1;padding:10px 12px;background:rgba(251,179,3,.06);border:1px solid rgba(251,179,3,.2);border-radius:10px">' +
        '<div style="font:700 9px '+F+';letter-spacing:.08em;text-transform:uppercase;color:rgba(251,179,3,.6);margin-bottom:6px">Your target destination</div>' +
        '<div style="font:800 13px '+F+';color:#FBB303">'+pinned+'</div>' +
        '<div style="font:400 10.5px '+F+';color:rgba(251,179,3,.5);margin-top:3px">Connection requires extra routing</div>' +
      '</div>';
    modal.appendChild(infoRow);

    // Stats comparison — before vs after table
    var statsRow = document.createElement('div');
    statsRow.style.cssText = 'padding:14px 20px;border-bottom:1px solid rgba(255,255,255,.07)';
    var fmt$ = function(n){ return '$'+Math.round(n).toLocaleString('en-US'); };
    var fmtPct = function(a, b) {
      if (!b || b === 0) return { txt: '—', clr: '#6B7373' };
      var p = ((a - b) / Math.abs(b)) * 100;
      var s = (p >= 0 ? '+' : '') + p.toFixed(1) + '%';
      return { txt: s, clr: p > 0 ? '#3FC281' : p < 0 ? '#EB4343' : '#6B7373' };
    };
    // For cost/distance/duration: lower is better (invert color logic)
    var fmtPctInv = function(a, b) {
      var r = fmtPct(a, b);
      if (r.clr === '#3FC281') r.clr = '#EB4343';
      else if (r.clr === '#EB4343') r.clr = '#3FC281';
      return r;
    };
    var rows = [
      { label:'Income',        bVal: fmt$(before.income),                aVal: fmt$(after.income),                chg: fmtPct(after.income, before.income),     aClr: '#FBFBFB' },
      { label:'Cost',          bVal: fmt$(before.cost),                  aVal: fmt$(after.cost),                  chg: fmtPctInv(after.cost, before.cost),     aClr: '#FBFBFB' },
      { label:'Profit',        bVal: fmt$(before.profit),                aVal: fmt$(after.profit),                chg: fmtPct(after.profit, before.profit),    aClr: after.profit >= 0 ? '#3FC281' : '#EB4343' },
      { label:'Rate per mile', bVal: '$'+before.rpm.toFixed(2)+'/mi',    aVal: '$'+after.rpm.toFixed(2)+'/mi',    chg: fmtPct(after.rpm, before.rpm),          aClr: '#FBFBFB' },
      { label:'Distance',      bVal: before.miles.toLocaleString('en-US')+' mi', aVal: after.miles.toLocaleString('en-US')+' mi', chg: fmtPctInv(after.miles, before.miles), aClr: '#FBFBFB' },
      { label:'Duration',      bVal: before.days+' d',                   aVal: after.days+' d',                   chg: fmtPctInv(after.days, before.days),     aClr: '#FBFBFB' },
    ];
    var tblHtml =
      '<div style="font:700 9px '+F+';letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.2);margin-bottom:8px">Comparison if you change your final destination</div>' +
      '<table style="width:100%;border-collapse:collapse">' +
        '<thead><tr>' +
          '<td style="font:600 9.5px '+F+';color:#4B5563;text-transform:uppercase;letter-spacing:.06em;padding:0 0 6px">Metric</td>' +
          '<td style="font:600 9.5px '+F+';color:#4B5563;text-transform:uppercase;letter-spacing:.06em;padding:0 0 6px;text-align:right">Before</td>' +
          '<td style="font:600 9.5px '+F+';color:#4B5563;text-transform:uppercase;letter-spacing:.06em;padding:0 0 6px;text-align:right">Keep '+pinned.split(',')[0]+'</td>' +
          '<td style="font:600 9.5px '+F+';color:#4B5563;text-transform:uppercase;letter-spacing:.06em;padding:0 0 6px;text-align:right">Δ</td>' +
        '</tr></thead><tbody>';
    rows.forEach(function(r, i) {
      var bg = i % 2 === 0 ? '' : 'background:rgba(255,255,255,.025);';
      tblHtml +=
        '<tr style="'+bg+'">' +
          '<td style="font:600 12px '+F+';color:#9BA3AB;padding:6px 0">'+r.label+'</td>' +
          '<td style="font:400 11.5px '+MN+';color:#4B5563;text-align:right;padding:6px 0;text-decoration:line-through">'+r.bVal+'</td>' +
          '<td style="font:700 12px '+MN+';color:'+r.aClr+';text-align:right;padding:6px 0">'+r.aVal+'</td>' +
          '<td style="font:700 11.5px '+MN+';color:'+r.chg.clr+';text-align:right;padding:6px 0">'+r.chg.txt+'</td>' +
        '</tr>';
    });
    tblHtml += '</tbody></table>';
    statsRow.innerHTML = tblHtml;
    modal.appendChild(statsRow);

    // Footer — two choices
    var ftr = document.createElement('div');
    ftr.style.cssText = 'padding:14px 20px;border-top:1px solid rgba(255,255,255,.07);display:flex;gap:10px;justify-content:flex-end';

    var acceptBtn = document.createElement('button');
    acceptBtn.style.cssText = 'padding:9px 20px;background:transparent;border:1px solid rgba(255,255,255,.15);border-radius:10px;color:#8B939B;font:700 12px '+F+';cursor:pointer';
    acceptBtn.textContent = 'Change plan';
    acceptBtn.addEventListener('click', function() {
      // Accept: let the plan end at the natural destination, clear the pinned dest
      var loads = loadsOf(rId);
      for (var i = loads.length - 1; i >= 0; i--) {
        if (loads[i].status === 'Unbooked') {
          if (naturalDest) { loads[i].dest = naturalDest; loads[i].miles = naturalMiles || loads[i].miles; }
          break;
        }
      }
      delete _pinnedFinalDest[rId];
      setState({});
      ov.remove();
    });

    var keepBtn = document.createElement('button');
    keepBtn.style.cssText = 'padding:9px 20px;background:#FBB303;border:none;border-radius:10px;color:#0B131B;font:800 12px '+F+';cursor:pointer';
    keepBtn.textContent = 'Keep ' + pinned.split(',')[0];
    keepBtn.addEventListener('click', function() {
      // Keep: maintain the forced last lane to pinnedDest as-is
      ov.remove();
    });

    ftr.appendChild(acceptBtn);
    ftr.appendChild(keepBtn);
    modal.appendChild(ftr);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    // No backdrop click — user must choose
  }

  // ── Case C: dead-end — no outbound routes at all ─────────────────────────
  function _showCaseCModal(rId, deadCity) {
    var ex = document.getElementById('_ef-casec'); if (ex) ex.remove();
    var F  = 'Nunito,system-ui';
    var MN = '\'JetBrains Mono\',monospace';

    var hub = _ralloHub(deadCity);  // { hub, miles } or null

    var ov = document.createElement('div'); ov.id = '_ef-casec';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9030;background:rgba(6,12,17,.76);display:flex;align-items:center;justify-content:center';

    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1px solid rgba(251,152,3,.35);border-radius:14px;width:480px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.9)';

    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'background:rgba(251,152,3,.1);border-bottom:1px solid rgba(251,152,3,.25);padding:20px 24px 16px;display:flex;align-items:flex-start;gap:14px';
    hdr.innerHTML =
      '<div style="width:36px;height:36px;border-radius:50%;background:rgba(251,152,3,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FB9803" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>' +
          '<line x1="12" y1="9" x2="12" y2="13"></line>' +
          '<line x1="12" y1="17" x2="12.01" y2="17"></line>' +
        '</svg>' +
      '</div>' +
      '<div>' +
        '<div style="font:800 15px '+F+';color:#FBFBFB;letter-spacing:-.015em">Plan reached a dead end</div>' +
        '<div style="font:400 12px '+F+';color:#8B939B;margin-top:4px">No outbound routes from <span style="font-family:'+MN+';color:#FB9803;font-weight:600">' + deadCity + '</span></div>' +
      '</div>';
    modal.appendChild(hdr);

    // Body
    var body = document.createElement('div');
    body.style.cssText = 'padding:20px 24px';

    if (hub) {
      // Reallocator found a hub
      var nextFromHub = _NEXT_DEST[hub.hub] ? _NEXT_DEST[hub.hub].dest : '—';
      body.innerHTML =
        '<div style="font:600 12px '+F+';color:#9BA3AB;margin-bottom:14px;text-transform:uppercase;letter-spacing:.06em">Suggested repositioning</div>' +
        '<div style="background:#0B131B;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:14px 16px;display:flex;flex-direction:column;gap:10px">' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span style="font-family:'+MN+';font-size:12px;color:#FB9803;font-weight:700">DH</span>' +
            '<span style="font:600 12px '+F+';color:#FBFBFB">' + deadCity + '</span>' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
            '<span style="font:600 12px '+F+';color:#FBFBFB">' + hub.hub + '</span>' +
            '<span style="font:400 11px '+F+';color:#6B7373;margin-left:auto">' + hub.miles + ' mi DH</span>' +
          '</div>' +
          '<div style="height:1px;background:rgba(255,255,255,.07)"></div>' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span style="font-family:'+MN+';font-size:12px;color:#3FC281;font-weight:700">→</span>' +
            '<span style="font:600 12px '+F+';color:#FBFBFB">' + hub.hub + '</span>' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
            '<span style="font:600 12px '+F+';color:#FBFBFB">' + nextFromHub + '</span>' +
            '<span style="font:400 11px '+F+';color:#6B7373;margin-left:auto">connected</span>' +
          '</div>' +
        '</div>' +
        '<div style="font:400 12px '+F+';color:#6B7373;margin-top:12px;line-height:1.5">Repositioning adds <strong style="color:#FBFBFB">' + hub.miles + ' deadhead miles</strong> to your plan, then continues from <strong style="color:#FBFBFB">' + hub.hub + '</strong>.</div>';
    } else {
      // No hub found within 300 mi
      body.innerHTML =
        '<div style="background:rgba(251,152,3,.08);border:1px solid rgba(251,152,3,.2);border-radius:10px;padding:14px 16px;display:flex;align-items:flex-start;gap:10px">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FB9803" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
          '<div style="font:400 12.5px '+F+';color:#9BA3AB;line-height:1.55">No hub found within <strong style="color:#FBFBFB">300 mi</strong> of <span style="font-family:'+MN+';color:#FB9803">' + deadCity + '</span>. The Reallocator can\'t build a plan from here.</div>' +
        '</div>' +
        '<div style="font:400 12px '+F+';color:#6B7373;margin-top:12px;line-height:1.5">Use <strong style="color:#FBFBFB">Hunter Mode</strong> to manually search for any available load from this location.</div>';
    }
    modal.appendChild(body);

    // Footer
    var ftr = document.createElement('div');
    ftr.style.cssText = 'padding:0 24px 20px;display:flex;align-items:center;justify-content:flex-end;gap:10px';

    if (hub) {
      var hmBtn = document.createElement('button');
      hmBtn.style.cssText = 'padding:9px 18px;background:transparent;border:1px solid rgba(255,255,255,.15);border-radius:10px;color:#9BA3AB;font:600 12px '+F+';cursor:pointer';
      hmBtn.textContent = 'Hunter Mode instead';
      hmBtn.addEventListener('click', function() {
        ov.remove();
        // Open the load search so the user can pick any available lane from deadCity
        _openMyLoads(rId, null, deadCity);
      });

      var confBtn = document.createElement('button');
      confBtn.style.cssText = 'padding:9px 22px;background:#FB9803;border:none;border-radius:10px;color:#0B131B;font:800 12px '+F+';cursor:pointer';
      confBtn.textContent = 'Confirm repositioning';
      confBtn.addEventListener('click', function() {
        // Add a DH Unbooked lane from deadCity to hub
        var prevLoad = (loadsOf(rId).slice(-1)[0] || {});
        LOADS.push({
          id: 'ef-dh-' + Math.random().toString(36).slice(2, 8),
          route: rId, origin: deadCity, dest: hub.hub, miles: hub.miles, income: 0,
          status: 'Unbooked', pickup: '--', pickupTime: '--', delivery: '--', deliveryTime: '--',
          customer: 'DH Repositioning', eta: '--', onTime: '--', stops: 0,
          truck: prevLoad.truck || '--', equipment: prevLoad.equipment || 'Van 53',
        });
        ov.remove();
        setState({});
      });

      ftr.appendChild(hmBtn);
      ftr.appendChild(confBtn);
    } else {
      var hmOnlyBtn = document.createElement('button');
      hmOnlyBtn.style.cssText = 'padding:9px 22px;background:#FB9803;border:none;border-radius:10px;color:#0B131B;font:800 12px '+F+';cursor:pointer';
      hmOnlyBtn.textContent = 'Open Hunter Mode';
      hmOnlyBtn.addEventListener('click', function() {
        ov.remove();
        _openMyLoads(rId, null, deadCity);
      });
      var cancelBtn = document.createElement('button');
      cancelBtn.style.cssText = 'padding:9px 16px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#6B7373;font:600 12px '+F+';cursor:pointer';
      cancelBtn.textContent = 'Cancel';
      cancelBtn.addEventListener('click', function() { ov.remove(); });
      ftr.appendChild(cancelBtn);
      ftr.appendChild(hmOnlyBtn);
    }

    modal.appendChild(ftr);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    // No backdrop click — user must choose
  }

  // ── Dev simulation helpers ───────────────────────────────────────────────
  function _mockSnapGood(base) {
    var newIncome = Math.round(base.income * 1.18);
    var newMiles  = Math.round(base.miles  * 0.88);
    return {
      income: newIncome, miles: newMiles,
      days:   Math.max(1, base.days - 1),
      rpm:    newMiles > 0 ? newIncome / newMiles : 0,
      cost:   Math.round(newMiles * 2.4),
      profit: Math.round(newIncome - newMiles * 2.4)
    };
  }
  function _mockSnapBad(base, dhMiles) {
    dhMiles = dhMiles || 0;
    var newIncome = Math.round(base.income * 0.71);
    var newMiles  = Math.round(base.miles  * 1.32) + dhMiles;
    return {
      income: newIncome, miles: newMiles,
      days:   base.days + 2,
      rpm:    newMiles > 0 ? newIncome / newMiles : 0,
      cost:   Math.round(newMiles * 2.4),
      profit: Math.round(newIncome - newMiles * 2.4)
    };
  }
  function _mockSnapBadPinned(base) {
    // Plan reaches pinned dest but worsens metrics (slightly less bad than best-elsewhere)
    var newIncome = Math.round(base.income * 0.80);
    var newMiles  = Math.round(base.miles  * 1.18);
    return {
      income: newIncome, miles: newMiles,
      days:   base.days + 1,
      rpm:    newMiles > 0 ? newIncome / newMiles : 0,
      cost:   Math.round(newMiles * 2.4),
      profit: Math.round(newIncome - newMiles * 2.4)
    };
  }

  function _clearDownstreamUnbooked(rId) {
    for (var i = LOADS.length - 1; i >= 0; i--) {
      if (LOADS[i].route === rId && LOADS[i].status === 'Unbooked') LOADS.splice(i, 1);
    }
    setState({});
  }

  function _warnToast(msg) {
    var t = document.createElement('div');
    t.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);z-index:9999;background:#1A2732;border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:10px 18px;font:600 12px Nunito,system-ui;color:#FBFBFB;box-shadow:0 8px 32px rgba(0,0,0,.7);pointer-events:none';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function(){ t.style.transition='opacity .4s'; t.style.opacity='0'; setTimeout(function(){ t.remove(); }, 400); }, 2800);
  }

  function _runSimCase(caseNum, rId, snapBefore, simCtx) {
    _simReturnCtx = { rId: rId, snapBefore: snapBefore, toDest: simCtx.toDest || null, fromDest: simCtx.fromDest || null };
    var _fd = simCtx.fromDest || null;
    var _td = simCtx.toDest   || null;
    switch (caseNum) {
      case 1: {
        var good = _mockSnapGood(snapBefore);
        var c1Routes = [
          { id:'before', label:'Initial plan',      lanes:_simBeforeLanes||[], snap:snapBefore, discarded:true, badge:'Discarded' },
          { id:'after',  label:'Recommended plan',  lanes:_simAfterLanes||[], snap:good, accent:'#3FC281', badge:'Best plan', tags:['Best profit','Best connectivity'] }
        ];
        if (simCtx.hasPinned && simCtx.pinnedCity) {
          c1Routes[1].tags.push('Reaches '+simCtx.pinnedCity.split(',')[0]);
        }
        _showRouteReviewModal(1, rId, snapBefore, c1Routes, { fromDest:_fd, toDest:_td, hasPinned:simCtx.hasPinned });
        break;
      }
      case 2: {
        var badBest  = _mockSnapBad(snapBefore, 0);
        var _rOrig2 = (_simBeforeLanes && _simBeforeLanes.length) ? _simBeforeLanes[0].origin : (_simAfterLanes && _simAfterLanes.length ? _simAfterLanes[0].origin : '');
        var _altSeq2 = (_simAfterLanes && _simAfterLanes.length)
          ? (function(){ var s=[_rOrig2].concat(_simAfterLanes.map(function(l){return l.dest;})); var i=s.indexOf(_td); return i>-1?s.slice(0,i+1):(_td?s.concat([_td]):s); })()
          : (_rOrig2&&_td?[_rOrig2,_td]:[]);
        var c2Routes = [
          { id:'before', label:'Initial plan',    lanes:_simBeforeLanes||[], snap:snapBefore, discarded:true, badge:'Discarded' },
          { id:'after',  label:'Alternative plan', lanes:_simAfterLanes||[], snap:badBest, accent:'#FBB303', badge:'', tags:[], displaySeq:_altSeq2 }
        ];
        if (simCtx.hasPinned && simCtx.pinnedCity) {
          var badPinned = _mockSnapBadPinned(snapBefore);
          var _pinOrig2 = (_simBeforeLanes && _simBeforeLanes.length) ? _simBeforeLanes[0].origin : (_fd||'');
          c2Routes.push({ id:'pinned', label:'Reaches '+simCtx.pinnedCity.split(',')[0], lanes:[], snap:badPinned, accent:'#7BCBCB', badge:'Target destination', tags:[], displaySeq:[_pinOrig2, simCtx.pinnedCity] });
        }
        _showRouteReviewModal(2, rId, snapBefore, c2Routes, { hasPinned:simCtx.hasPinned, pinnedCity:simCtx.pinnedCity, dh:false, fromDest:_fd, toDest:_td });
        break;
      }
      case 3: {
        var dhMi = simCtx.ralloInfo ? simCtx.ralloInfo.miles : 185;
        var badBest3   = _mockSnapBad(snapBefore, dhMi);
        // dhOrigin = last booked lane's dest (where the truck actually is when DH begins)
        var _dhDep3 = (function(){
          var ls = _simAfterLanes||[];
          for (var i = ls.length-1; i >= 0; i--) { if (ls[i].status === 'Booked') return ls[i].dest; }
          return ls.length ? ls[0].origin : (_fd||'');
        })();
        var _rOrig3 = (_simBeforeLanes && _simBeforeLanes.length) ? _simBeforeLanes[0].origin : (_simAfterLanes && _simAfterLanes.length ? _simAfterLanes[0].origin : '');
        var _altSeq3 = (_simAfterLanes && _simAfterLanes.length)
          ? (function(){ var s=[_rOrig3].concat(_simAfterLanes.map(function(l){return l.dest;})); var i=s.indexOf(_td); return i>-1?s.slice(0,i+1):(_td?s.concat([_td]):s); })()
          : (_rOrig3&&_td?[_rOrig3,_td]:[]);
        var c3Routes = [
          { id:'before', label:'Initial plan',    lanes:_simBeforeLanes||[], snap:snapBefore, discarded:true, badge:'Discarded' },
          { id:'after',  label:'Alternative plan', lanes:_simAfterLanes||[], snap:badBest3, accent:'#FBB303', badge:'Requires deadhead', tags:[], dhOrigin:_dhDep3, dhMiles:dhMi, displaySeq:_altSeq3 }
        ];
        if (simCtx.hasPinned && simCtx.pinnedCity) {
          var badPinned3 = _mockSnapBadPinned(snapBefore);
          var _pinOrig3 = (_simBeforeLanes && _simBeforeLanes.length) ? _simBeforeLanes[0].origin : (_fd||'');
          c3Routes.push({ id:'pinned', label:'Reaches '+simCtx.pinnedCity.split(',')[0], lanes:[], snap:badPinned3, accent:'#7BCBCB', badge:'Target destination', tags:[], displaySeq:[_pinOrig3, simCtx.pinnedCity] });
        }
        _showRouteReviewModal(3, rId, snapBefore, c3Routes, { hasPinned:simCtx.hasPinned, pinnedCity:simCtx.pinnedCity, dh:true, dhHub:simCtx.ralloInfo?simCtx.ralloInfo.hub:'Hub cercano', dhMiles:dhMi, fromDest:_fd, toDest:_td });
        break;
      }
      case 4:
        _showCaseNoRouteModal(rId, _td);
        break;
    }
  }

  // ── Case 2/3: plan found but worsens ────────────────────────────────────
  function _showCaseWorsenModal(rId, before, afterBest, afterPinned, opts) {
    var ex = document.getElementById('_ef-worsen'); if (ex) ex.remove();
    var F  = 'Nunito,system-ui';
    var MN = '\'JetBrains Mono\',monospace';
    opts = opts || {};
    var hasPinned = opts.hasPinned && afterPinned;
    var pinnedName = hasPinned ? (opts.pinnedCity||'').split(',')[0] : '';
    // Mock "best plan" endpoint city for display
    var bestEndCity = 'Pittsburgh, PA';
    var bestEndDist = hasPinned ? '185 mi from '+pinnedName : '';

    var fmt$ = function(n){ return '$'+Math.round(n).toLocaleString('en-US'); };
    var fmtR = function(n){ return '$'+n.toFixed(2)+'/mi'; };
    var pctOf = function(bv, av){ if (!bv && bv!==0) return '—'; if (bv===0 && av===0) return '—'; if (bv===0) return '—'; var d=(av-bv)/Math.abs(bv)*100; return (d>=0?'+':'')+d.toFixed(1)+'%'; };
    var pctClr = function(bv, av, higher){ if (av===bv) return 'rgba(255,255,255,.35)'; return (higher ? av>bv : av<bv) ? '#3FC281' : '#EB4343'; };

    var ov = document.createElement('div'); ov.id = '_ef-worsen';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9030;background:rgba(6,12,17,.76);display:flex;align-items:center;justify-content:center';

    var modal = document.createElement('div');
    modal.style.cssText = 'background:#111D25;border:1px solid rgba(255,255,255,.1);border-radius:18px;width:490px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 28px 80px rgba(0,0,0,.95)';

    // ── Back nav ──
    var wNavTop = document.createElement('div');
    wNavTop.style.cssText = 'padding:12px 18px 0;flex-shrink:0';
    var bRetW = document.createElement('button');
    bRetW.style.cssText = 'display:flex;align-items:center;gap:5px;background:none;border:none;padding:3px 0;color:#8B939B;font:700 11px '+F+';cursor:pointer;letter-spacing:.01em';
    bRetW.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>Return to simulation';
    bRetW.onclick = function() {
      ov.remove();
      if (_simReturnCtx) {
        _showScenarioPicker(_simReturnCtx.rId, _simReturnCtx.toDest, _simReturnCtx.snapBefore, function(cn, sc) {
          _showAdaptingPlan(function() { _runSimCase(cn, _simReturnCtx.rId, _simReturnCtx.snapBefore, sc); });
        }, _simReturnCtx.fromDest);
      }
    };
    wNavTop.appendChild(bRetW);
    modal.appendChild(wNavTop);

    // ── Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'padding:12px 22px 16px;flex-shrink:0';
    var _fromStr = opts.fromDest ? opts.fromDest.split(',')[0] : null;
    var _toStr   = opts.toDest   ? opts.toDest.split(',')[0]   : null;
    var titleText = 'Review Updated Plan';
    var subText   = hasPinned
      ? ((_fromStr && _toStr)
          ? 'The lane destination changed from <strong style="color:#FBFBFB">'+_fromStr+'</strong> to <strong style="color:#FBFBFB">'+_toStr+'</strong>. The plan no longer reaches <strong style="color:#7BCBCB">'+pinnedName+'</strong>. Select an option below.'
          : 'Adding this load shifted the route away from your target destination. Select an option below.')
      : (_fromStr && _toStr
          ? 'The lane destination changed from <strong style="color:#FBFBFB">'+_fromStr+'</strong> to <strong style="color:#FBFBFB">'+_toStr+'</strong>. This is the best available plan given the new destination. Accept or adjust manually.'
          : 'This is the best available plan given the new destination. Accept or adjust manually.');
    hdr.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">' +
        '<div style="width:36px;height:36px;border-radius:10px;background:rgba(251,179,3,.12);border:1px solid rgba(251,179,3,.3);display:grid;place-items:center;flex-shrink:0">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBB303" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
        '</div>' +
        '<div style="font:800 15px '+F+';color:#FBFBFB;letter-spacing:-.015em">'+titleText+'</div>' +
      '</div>' +
      '<div style="font:400 12px '+F+';color:#8B939B;line-height:1.5">'+subText+'</div>';
    modal.appendChild(hdr);

    // ── DH banner
    if (opts.dh) {
      var dhBanner = document.createElement('div');
      dhBanner.style.cssText = 'padding:9px 22px;background:rgba(245,166,35,.05);border-top:1px solid rgba(245,166,35,.12);border-bottom:1px solid rgba(245,166,35,.12);display:flex;align-items:center;gap:9px;flex-shrink:0';
      dhBanner.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A623" stroke-width="2" stroke-linecap="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
        '<span style="font:400 11px '+F+';color:#F5A623">Requires <strong>'+(opts.dhMiles||185)+' mi deadhead</strong> repositioning to '+(opts.dhHub||'simulated hub')+' to restore connectivity.</span>';
      modal.appendChild(dhBanner);
    }

    // ── Route comparison diagram ──
    if (_simBeforeLanes && _simAfterLanes) {
      var _wSeqWrap = document.createElement('div');
      _wSeqWrap.style.cssText = 'background:#080F15;border-bottom:1px solid rgba(255,255,255,.07);overflow-x:auto;overflow-y:hidden;flex-shrink:0;padding:14px 0 10px';
      _wSeqWrap.innerHTML = _buildRouteCompSvg(_simBeforeLanes, _simAfterLanes, '#FBB303');
      modal.appendChild(_wSeqWrap);
    }

    var body = document.createElement('div');
    body.style.cssText = 'overflow-y:auto;flex:1;padding:0 22px';

    // ── Option selector (only when hasPinned)
    var _selectedAfter = hasPinned ? afterPinned : afterBest;
    var _selectedCity  = hasPinned ? pinnedName : 'Best plan';
    var _selectedPinned = hasPinned; // tracks which option is active

    if (hasPinned) {
      var optRow = document.createElement('div');
      optRow.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:16px 0 14px';

      function _optCard(label, city, sub, isPinned, isSelected) {
        var c = document.createElement('div');
        var selColor = isPinned ? '#FBB303' : 'rgba(255,255,255,.5)';
        c.style.cssText = 'border:1.5px solid '+(isSelected?(isPinned?'#FBB303':'rgba(255,255,255,.35)'):'rgba(255,255,255,.08)')+';border-radius:12px;padding:12px 14px;cursor:pointer;background:'+(isSelected?(isPinned?'rgba(251,179,3,.06)':'rgba(255,255,255,.04)'):'transparent')+';transition:all .15s;position:relative';
        // radio dot
        var dotOuter = 'width:14px;height:14px;border-radius:50%;border:1.5px solid '+(isSelected?selColor:'rgba(255,255,255,.2)')+';display:grid;place-items:center;flex-shrink:0;position:absolute;top:12px;right:12px;';
        var dotInner = isSelected ? '<div style="width:7px;height:7px;border-radius:50%;background:'+selColor+'"></div>' : '';
        c.innerHTML =
          '<div style="'+dotOuter+'">'+dotInner+'</div>' +
          '<div style="font:600 9px '+F+';letter-spacing:.07em;text-transform:uppercase;color:'+(isSelected?selColor:'rgba(255,255,255,.3)')+';margin-bottom:6px">'+label+'</div>' +
          '<div style="font:800 14px '+F+';color:'+(isSelected?'#FBFBFB':'rgba(255,255,255,.4)')+';margin-bottom:'+(sub?'4px':'0')+'">'+city+'</div>' +
          (sub?'<div style="font:400 11px '+F+';color:'+(isSelected?(isPinned?'#FBB303':'#8B939B'):'rgba(255,255,255,.25)')+'">'+sub+'</div>':'');
        return c;
      }

      var cardBest   = _optCard('BEST PLAN ENDS AT',        bestEndCity, bestEndDist, false, !_selectedPinned);
      var cardPinned = _optCard('YOUR TARGET DESTINATION',  pinnedName,  'Worsens metrics', true, _selectedPinned);

      function _refreshCards() {
        optRow.innerHTML = '';
        var cb = _optCard('BEST PLAN ENDS AT',       bestEndCity, bestEndDist, false, !_selectedPinned);
        var cp = _optCard('YOUR TARGET DESTINATION', pinnedName, 'Worsens metrics', true, _selectedPinned);
        cb.addEventListener('click', function(){ _selectedPinned = false; _selectedAfter = afterBest; _selectedCity = bestEndCity.split(',')[0]; _refreshCards(); _rebuildTable(); });
        cp.addEventListener('click', function(){ _selectedPinned = true;  _selectedAfter = afterPinned; _selectedCity = pinnedName; _refreshCards(); _rebuildTable(); });
        optRow.appendChild(cb); optRow.appendChild(cp);
      }
      cardBest.addEventListener('click',   function(){ _selectedPinned = false; _selectedAfter = afterBest;   _selectedCity = bestEndCity.split(',')[0]; _refreshCards(); _rebuildTable(); });
      cardPinned.addEventListener('click', function(){ _selectedPinned = true;  _selectedAfter = afterPinned; _selectedCity = pinnedName; _refreshCards(); _rebuildTable(); });
      optRow.appendChild(cardBest); optRow.appendChild(cardPinned);
      body.appendChild(optRow);
    } else {
      body.style.paddingTop = '16px';
    }

    // ── Metric table (dynamic)
    var tableWrap = document.createElement('div');
    tableWrap.style.cssText = 'padding-bottom:16px';

    function _rebuildTable() {
      tableWrap.innerHTML = '';
      var colHdr = document.createElement('div');
      colHdr.style.cssText = 'display:grid;grid-template-columns:1fr 100px 120px 72px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.07)';
      ['Metric','Before','After','Change'].forEach(function(h){
        var s = document.createElement('span');
        s.style.cssText = 'font:700 9px '+F+';letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.2)';
        s.textContent = h; colHdr.appendChild(s);
      });
      tableWrap.appendChild(colHdr);

      function trow(lbl, bv, av, bFmt, aFmt, hi) {
        var d = document.createElement('div');
        d.style.cssText = 'display:grid;grid-template-columns:1fr 100px 120px 72px;align-items:center;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.04)';
        var chg = pctOf(bv, av);
        d.innerHTML =
          '<span style="font:500 12px '+F+';color:#8B939B">'+lbl+'</span>' +
          '<span style="font:500 12px '+MN+';color:rgba(255,255,255,.28);text-decoration:line-through">'+bFmt+'</span>' +
          '<span style="font:800 12px '+MN+';color:'+(bv!==av?'#FBFBFB':'rgba(255,255,255,.4)')+'">'+aFmt+'</span>' +
          '<span style="font:700 11px '+F+';color:'+pctClr(bv,av,hi)+'">'+chg+'</span>';
        tableWrap.appendChild(d);
      }

      trow('Income',        before.income, _selectedAfter.income, fmt$(before.income), fmt$(_selectedAfter.income), true);
      trow('Cost',          before.cost,   _selectedAfter.cost,   fmt$(before.cost),   fmt$(_selectedAfter.cost),   false);
      trow('Profit',        before.profit, _selectedAfter.profit, fmt$(before.profit), fmt$(_selectedAfter.profit), true);
      trow('Rate per mile', before.rpm,    _selectedAfter.rpm,    fmtR(before.rpm),    fmtR(_selectedAfter.rpm),    true);
      trow('Distance',      before.miles,  _selectedAfter.miles,  before.miles.toLocaleString('en-US')+' mi', _selectedAfter.miles.toLocaleString('en-US')+' mi', false);
      trow('Duration',      before.days,   _selectedAfter.days,   before.days+' d',    _selectedAfter.days+' d',   false);
    }
    _rebuildTable();
    body.appendChild(tableWrap);
    modal.appendChild(body);

    // ── Footer
    var ftr = document.createElement('div');
    ftr.style.cssText = 'padding:14px 22px 20px;border-top:1px solid rgba(255,255,255,.07);display:flex;gap:10px;flex-shrink:0';

    var bMan = document.createElement('button');
    bMan.style.cssText = 'flex:1;padding:11px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#6B7373;font:700 13px '+F+';cursor:pointer';
    bMan.textContent = 'Adjust manually';
    bMan.onclick = function() {
      ov.remove();
      _clearDownstreamUnbooked(rId);
    };

    var bAcc = document.createElement('button');
    bAcc.style.cssText = 'flex:1;padding:11px;background:#27A767;border:none;border-radius:12px;color:#0B131B;font:800 13px '+F+';cursor:pointer';
    bAcc.textContent = 'Accept plan';
    bAcc.onclick = function() {
      if (hasPinned && !_selectedPinned) { delete _pinnedFinalDest[rId]; }
      ov.remove();
    };

    ftr.appendChild(bMan); ftr.appendChild(bAcc);
    modal.appendChild(ftr);
    ov.appendChild(modal);
    document.body.appendChild(ov);
  }

  // ── Case 4: no route anywhere ────────────────────────────────────────────
  function _showCaseNoRouteModal(rId, originCity) {
    var ex = document.getElementById('_ef-noroute'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var ov = document.createElement('div'); ov.id = '_ef-noroute';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9030;background:rgba(6,12,17,.76);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1px solid rgba(224,82,82,.28);border-radius:14px;width:420px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.9)';
    modal.innerHTML =
      '<div style="padding:24px 24px 0">' +
        '<div style="width:36px;height:36px;border-radius:10px;background:rgba(224,82,82,.1);border:1px solid rgba(224,82,82,.3);display:grid;place-items:center;margin-bottom:14px">' +
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E05252" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>' +
        '</div>' +
        '<div style="font:800 14.5px '+F+';color:#FBFBFB;margin-bottom:7px">No route available</div>' +
        '<div style="font:400 12px '+F+';color:#8B939B;line-height:1.65;margin-bottom:18px">The system found no viable plan from the new destination — no direct route or repositioning hub within 300 mi. The plan must be built lane by lane.</div>' +
        '<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:9px;padding:12px 14px;font:400 11px '+F+';color:#6B7373;line-height:1.55;margin-bottom:20px">' +
          'Use the destination opportunities tool below to search for available loads from this point.' +
        '</div>' +
      '</div>' +
      '<div style="padding:0 24px 20px">' +
        '<button id="_ef-noroute-ok" style="width:100%;padding:10px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#6B7373;font:700 12px '+F+';cursor:pointer">Got it</button>' +
      '</div>';
    var bRetNR = document.createElement('button');
    bRetNR.style.cssText = 'position:absolute;top:16px;left:16px;display:flex;align-items:center;gap:5px;background:rgba(8,15,21,.82);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:6px 11px;color:#8B939B;font:700 11px '+F+';cursor:pointer;white-space:nowrap;backdrop-filter:blur(6px);z-index:1';
    bRetNR.innerHTML = '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"></polyline></svg>Simulation';
    bRetNR.onmouseenter = function(){ bRetNR.style.color='#FBFBFB'; bRetNR.style.borderColor='rgba(255,255,255,.22)'; };
    bRetNR.onmouseleave = function(){ bRetNR.style.color='#8B939B'; bRetNR.style.borderColor='rgba(255,255,255,.1)'; };
    bRetNR.onclick = function(){
      ov.remove();
      if (_simReturnCtx) {
        _showScenarioPicker(_simReturnCtx.rId, _simReturnCtx.toDest, _simReturnCtx.snapBefore, function(cn, sc){
          _showAdaptingPlan(function(){ _runSimCase(cn, _simReturnCtx.rId, _simReturnCtx.snapBefore, sc); });
        }, _simReturnCtx.fromDest);
      }
    };
    ov.appendChild(modal);
    ov.appendChild(bRetNR);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e){ if(!modal.contains(e.target) && !bRetNR.contains(e.target)) ov.remove(); });
    modal.querySelector('#_ef-noroute-ok').addEventListener('click', function(){
      ov.remove();
      _clearDownstreamUnbooked(rId);
    });
  }

  // ── Dev scenario picker ──────────────────────────────────────────────────
  function _showScenarioPicker(rId, toDest, snapBefore, onSelect, fromDest) {
    var ex = document.getElementById('_ef-sim'); if (ex) ex.remove();
    var F  = 'Nunito,system-ui';
    var MN = '\'JetBrains Mono\',monospace';

    var _hasPinned  = !!_pinnedFinalDest[rId];
    var _pinnedCity = _pinnedFinalDest[rId] || null;
    var _hasRoute   = !!(_NEXT_DEST && _NEXT_DEST[toDest]);
    var _ralloInfo  = typeof _ralloHub === 'function' ? _ralloHub(toDest) : null;
    var _hasRallo   = !!_ralloInfo;

    var ov = document.createElement('div'); ov.id = '_ef-sim';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9025;background:rgba(6,12,17,.76);display:flex;align-items:center;justify-content:center';

    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1.5px solid rgba(245,166,35,.45);border-radius:14px;width:500px;max-height:88vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.9)';

    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'padding:16px 20px 12px;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0';
    hdr.innerHTML =
      '<div style="display:flex;align-items:center;gap:9px;margin-bottom:4px">' +
        '<div style="background:rgba(245,166,35,.12);border:1px solid rgba(245,166,35,.3);border-radius:5px;padding:2px 8px;font:700 9.5px '+F+';color:#F5A623;letter-spacing:.07em;text-transform:uppercase">🧪 Dev</div>' +
        '<div style="font:800 13px '+F+';color:#FBFBFB">Simulación de escenario — no es producción</div>' +
      '</div>' +
      '<div style="font:400 11px '+F+';color:#6B7373">Escoge qué caso quieres testear. No ejecuta lógica real.</div>';
    modal.appendChild(hdr);

    // Context
    var ctx = document.createElement('div');
    ctx.style.cssText = 'padding:10px 20px;background:rgba(255,255,255,.015);border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;display:grid;grid-template-columns:1fr 1fr;gap:6px 20px';
    function cRow(lbl, val, col) {
      var d = document.createElement('div'); d.style.cssText = 'display:flex;flex-direction:column;gap:1px';
      d.innerHTML = '<span style="font:600 9px '+F+';letter-spacing:.07em;text-transform:uppercase;color:#2A3A47">'+lbl+'</span><span style="font:600 11.5px '+MN+';color:'+(col||'#8B939B')+'">'+val+'</span>';
      ctx.appendChild(d);
    }
    cRow('Nuevo destino', (toDest||'—').split(',')[0]);
    cRow('Destino fijado', _hasPinned ? (_pinnedCity||'').split(',')[0] : 'Ninguno', _hasPinned ? '#7BCBCB' : '#2A3A47');
    cRow('Ruta de salida', _hasRoute ? '→ '+(_NEXT_DEST[toDest]||{dest:'?'}).dest.split(',')[0] : 'No hay', _hasRoute ? '#3FC281' : '#E05252');
    cRow('Hub cercano', _hasRallo ? (_ralloInfo.hub||'').split(',')[0]+' ('+_ralloInfo.miles+' mi)' : 'No hay', _hasRallo ? '#F5A623' : '#2A3A47');
    modal.appendChild(ctx);

    // Case cards
    var body = document.createElement('div');
    body.style.cssText = 'padding:12px 20px 16px;display:flex;flex-direction:column;gap:8px;overflow-y:auto;flex:1';

    // Case 1 and 4 — simple clickable cards
    function _simpleCard(num, color, bg, border, label, desc, sub, onClick) {
      var card = document.createElement('div');
      card.style.cssText = 'border:1px solid '+border+';border-radius:10px;padding:12px 14px;cursor:pointer;background:'+bg+';transition:background .12s';
      card.innerHTML =
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">' +
          '<span style="font:700 9px '+MN+';letter-spacing:.07em;color:'+color+'">CASO '+num+'</span>' +
          '<span style="font:700 12px '+F+';color:#FBFBFB">'+label+'</span>' +
        '</div>' +
        '<div style="font:400 11px '+F+';color:#7A8FA0;line-height:1.55'+(sub?';margin-bottom:4px':'')+'">' + desc + '</div>' +
        (sub ? '<div style="font:600 10.5px '+F+';color:'+color+'">'+sub+'</div>' : '');
      card.addEventListener('mouseenter', function(){ card.style.background = bg.replace('.07','.13'); });
      card.addEventListener('mouseleave', function(){ card.style.background = bg; });
      card.addEventListener('click', onClick);
      return card;
    }

    // Case 2/3 — split card with two sub-options
    function _splitCard(num, color, bg, border, label, desc, dhSub, onClickNoPin, onClickPin, pinName) {
      var card = document.createElement('div');
      card.style.cssText = 'border:1px solid '+border+';border-radius:10px;padding:12px 14px;background:'+bg;
      card.innerHTML =
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">' +
          '<span style="font:700 9px '+MN+';letter-spacing:.07em;color:'+color+'">CASO '+num+'</span>' +
          '<span style="font:700 12px '+F+';color:#FBFBFB">'+label+'</span>' +
        '</div>' +
        '<div style="font:400 11px '+F+';color:#7A8FA0;line-height:1.55;margin-bottom:'+(dhSub?'4px':'10px')+'">'+desc+'</div>' +
        (dhSub ? '<div style="font:600 10.5px '+F+';color:'+color+';margin-bottom:10px">'+dhSub+'</div>' : '');
      var btns = document.createElement('div');
      btns.style.cssText = 'display:flex;gap:6px';
      var b1 = document.createElement('button');
      b1.style.cssText = 'flex:1;padding:7px 10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#FBFBFB;font:700 11px '+F+';cursor:pointer;text-align:left';
      b1.innerHTML = '<div style="font:600 9px '+F+';color:#6B7373;letter-spacing:.05em;text-transform:uppercase;margin-bottom:2px">Lo mejor posible</div>Accept plan + lane a lane';
      b1.addEventListener('mouseenter', function(){ b1.style.background='rgba(255,255,255,.09)'; });
      b1.addEventListener('mouseleave', function(){ b1.style.background='rgba(255,255,255,.05)'; });
      b1.addEventListener('click', function(e){ e.stopPropagation(); ov.remove(); onClickNoPin(); });
      var b2 = document.createElement('button');
      b2.style.cssText = 'flex:1;padding:7px 10px;background:rgba(123,203,203,.06);border:1px solid rgba(123,203,203,.25);border-radius:8px;color:#FBFBFB;font:700 11px '+F+';cursor:pointer;text-align:left';
      b2.innerHTML = '<div style="font:600 9px '+F+';color:#7BCBCB;letter-spacing:.05em;text-transform:uppercase;margin-bottom:2px">Mantener '+(pinName||'destino')+'</div>Opción A + Opción B + lane a lane';
      b2.addEventListener('mouseenter', function(){ b2.style.background='rgba(123,203,203,.12)'; });
      b2.addEventListener('mouseleave', function(){ b2.style.background='rgba(123,203,203,.06)'; });
      b2.addEventListener('click', function(e){ e.stopPropagation(); ov.remove(); onClickPin(); });
      btns.appendChild(b1); btns.appendChild(b2);
      card.appendChild(btns);
      return card;
    }

    var simCtxBase = { pinnedCity:_pinnedCity, hasRallo:_hasRallo, ralloInfo:_ralloInfo, fromDest:fromDest||null, toDest:toDest||null };
    var pinnedName = _hasPinned ? (_pinnedCity||'').split(',')[0] : '';

    // Caso 1
    body.appendChild(_simpleCard(1,'#3FC281','rgba(63,194,129,.07)','rgba(63,194,129,.28)',
      'Plan mantiene métricas',
      'El sistema encontró una ruta. Income, RPM y profit no empeoran considerablemente.',
      'Sistema escoge la mejor ruta disponible.',
      function(){ ov.remove(); onSelect(1, Object.assign({hasPinned:_hasPinned}, simCtxBase)); }
    ));

    // Caso 2 — simple if no pinned, split if pinned
    if (!_hasPinned) {
      body.appendChild(_simpleCard(2,'#F5A623','rgba(245,166,35,.07)','rgba(245,166,35,.28)',
        'Ruta encontrada — empeora (sin DH)',
        'El sistema encontró continuidad pero las métricas caen. No hay deadhead inicial.',
        'Acepta el plan o ajusta lane a lane.',
        function(){ ov.remove(); onSelect(2, Object.assign({hasPinned:false}, simCtxBase)); }
      ));
    } else {
      body.appendChild(_splitCard(2,'#F5A623','rgba(245,166,35,.07)','rgba(245,166,35,.28)',
        'Ruta encontrada — empeora (sin DH)',
        'El sistema encontró continuidad pero las métricas caen. No hay deadhead inicial.',
        null,
        function(){ onSelect(2, Object.assign({hasPinned:false}, simCtxBase)); },
        function(){ onSelect(2, Object.assign({hasPinned:true}, simCtxBase)); },
        pinnedName
      ));
    }

    // Caso 3 — same logic
    var dhSub3 = _hasRallo ? 'DH a '+(_ralloInfo.hub||'').split(',')[0]+' ('+_ralloInfo.miles+' mi)' : 'DH ficticio — 185 mi a hub simulado';
    if (!_hasPinned) {
      body.appendChild(_simpleCard(3,'#F5A623','rgba(245,166,35,.07)','rgba(245,166,35,.28)',
        'Ruta encontrada — empeora (con DH)',
        'Igual que Caso 2 pero con reposicionamiento deadhead inicial.',
        dhSub3,
        function(){ ov.remove(); onSelect(3, Object.assign({hasPinned:false}, simCtxBase)); }
      ));
    } else {
      body.appendChild(_splitCard(3,'#F5A623','rgba(245,166,35,.07)','rgba(245,166,35,.28)',
        'Ruta encontrada — empeora (con DH)',
        'Igual que Caso 2 pero con reposicionamiento deadhead inicial.',
        dhSub3,
        function(){ onSelect(3, Object.assign({hasPinned:false}, simCtxBase)); },
        function(){ onSelect(3, Object.assign({hasPinned:true}, simCtxBase)); },
        pinnedName
      ));
    }

    // Caso 4
    body.appendChild(_simpleCard(4,'#E05252','rgba(224,82,82,.07)','rgba(224,82,82,.28)',
      'No route available — manual adjust',
      'The system found no viable plan. Route must be built lane by lane.',
      'Clears downstream Unbooked lanes.',
      function(){ ov.remove(); onSelect(4, Object.assign({hasPinned:_hasPinned}, simCtxBase)); }
    ));

    modal.appendChild(body);
    ov.appendChild(modal);
    document.body.appendChild(ov);
  }

  // ── "Adding the load" mini loading modal ────────────────────────────────
  function _showAddingLoad(then) {
    var ex = document.getElementById('_ef-adding-load'); if (ex) ex.remove();
    var ov = document.createElement('div');
    ov.id = '_ef-adding-load';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9025;display:flex;align-items:center;justify-content:center;background:rgba(6,12,17,.5);pointer-events:none';
    var box = document.createElement('div');
    box.style.cssText = 'background:#0E1820;border:1px solid rgba(63,194,129,.2);border-radius:16px;padding:22px 28px;display:flex;flex-direction:column;gap:14px;box-shadow:0 20px 56px rgba(0,0,0,.8);min-width:260px;pointer-events:none';
    box.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px">' +
        '<div style="position:relative;width:28px;height:28px;flex-shrink:0">' +
          '<svg style="position:absolute;inset:0;animation:_efAdaptSpin 1s linear infinite" width="28" height="28" viewBox="0 0 28 28" fill="none">' +
            '<circle cx="14" cy="14" r="10" stroke="rgba(39,167,103,.15)" stroke-width="2.5"></circle>' +
            '<path d="M14 4 A10 10 0 0 1 24 14" stroke="#27A767" stroke-width="2.5" stroke-linecap="round"></path>' +
          '</svg>' +
        '</div>' +
        '<span style="font:800 14px Nunito,system-ui;color:#FBFBFB;letter-spacing:-.01em">Adding the load</span>' +
      '</div>' +
      '<div style="font:400 12px Nunito,system-ui;color:#8B939B;line-height:1.5">Please hold on — we\'re <span style="color:#3FC281;font-weight:700">adding the load</span> to your selected lane</div>';
    document.body.appendChild(ov);
    ov.appendChild(box);
    setTimeout(function() { ov.remove(); if (then) then(); }, 900);
  }

  // ── "Creating route" loading modal ──────────────────────────────────────
  // hasBookedLoads: true  → user added TMS loads; route starts with booked lanes
  //                false → blank slate; all lanes will be Unbooked
  function _showCreatingRoute(hasBookedLoads, then) {
    var ex = document.getElementById('_ef-creating-route'); if (ex) ex.remove();
    var ov = document.createElement('div');
    ov.id = '_ef-creating-route';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9025;display:flex;align-items:center;justify-content:center;background:rgba(6,12,17,.6)';
    var box = document.createElement('div');
    box.style.cssText = 'background:#0E1820;border:1px solid rgba(63,194,129,.25);border-radius:16px;padding:28px 36px;display:flex;flex-direction:column;align-items:center;gap:18px;box-shadow:0 20px 56px rgba(0,0,0,.8);min-width:240px';
    var titleText    = hasBookedLoads ? 'Creating route'                                                    : 'Creating route...';
    var subtitleText = hasBookedLoads ? 'Considering current loads and optimizing the rest of your plan.'  : 'Setting up lanes and your trip plan.';
    var iconInner = hasBookedLoads
      ? '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>'   // activity / booked loads
      : '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>'; // house / blank plan
    box.innerHTML =
      '<div style="position:relative;width:48px;height:48px;flex-shrink:0">' +
        '<svg style="position:absolute;inset:0;animation:_efAdaptSpin 1s linear infinite" width="48" height="48" viewBox="0 0 48 48" fill="none">' +
          '<circle cx="24" cy="24" r="18" stroke="rgba(39,167,103,.15)" stroke-width="3"></circle>' +
          '<path d="M24 6 A18 18 0 0 1 42 24" stroke="#27A767" stroke-width="3" stroke-linecap="round"></path>' +
        '</svg>' +
        '<svg style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3FC281" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+iconInner+'</svg>' +
      '</div>' +
      '<div style="text-align:center">' +
        '<div style="font:800 14px Nunito,system-ui;color:#FBFBFB;letter-spacing:-.01em">'+titleText+'</div>' +
        '<div style="font:400 11.5px Nunito,system-ui;color:#6B7373;margin-top:4px">'+subtitleText+'</div>' +
      '</div>';
    document.body.appendChild(ov);
    ov.appendChild(box);
    setTimeout(function() { ov.remove(); if (then) then(); }, 1400);
  }

  // ── "Adaptando plan" mini loading modal ─────────────────────────────────
  function _showAdaptingPlan(then) {
    var ex = document.getElementById('_ef-adapt'); if (ex) ex.remove();
    var ov = document.createElement('div');
    ov.id = '_ef-adapt';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9025;display:flex;align-items:center;justify-content:center;background:rgba(6,12,17,.5);pointer-events:none';
    var box = document.createElement('div');
    box.style.cssText = 'background:#0E1820;border:1px solid rgba(63,194,129,.25);border-radius:16px;padding:24px 32px;display:flex;align-items:center;gap:16px;box-shadow:0 20px 56px rgba(0,0,0,.75)';
    box.innerHTML =
      '<div style="position:relative;width:36px;height:36px;flex-shrink:0">' +
        '<svg style="position:absolute;inset:0;animation:_efAdaptSpin 1s linear infinite" width="36" height="36" viewBox="0 0 36 36" fill="none">' +
          '<circle cx="18" cy="18" r="14" stroke="rgba(39,167,103,.15)" stroke-width="3"></circle>' +
          '<path d="M18 4 A14 14 0 0 1 32 18" stroke="#27A767" stroke-width="3" stroke-linecap="round"></path>' +
        '</svg>' +
        '<svg style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3FC281" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>' +
        '</svg>' +
      '</div>' +
      '<div>' +
        '<div style="font:800 14px Nunito,system-ui;color:#FBFBFB;letter-spacing:-.01em">Updating plan</div>' +
        '<div style="font:400 11.5px Nunito,system-ui;color:#6B7373;margin-top:3px">Recalculating lanes and costs...</div>' +
      '</div>';
    document.body.appendChild(ov);
    ov.appendChild(box);
    setTimeout(function() { ov.remove(); if (then) then(); }, 950);
  }

  // ── Route comparison diagram — same visual language as Route Connections ──
  function _buildRouteCompSvg(beforeLanes, afterLanes, afterAccent) {
    afterAccent = afterAccent || '#3FC281';
    var svgNs = 'http://www.w3.org/2000/svg';
    function seqCities(lanes) {
      var n = [];
      if (!lanes || !lanes.length) return n;
      lanes.forEach(function(l) { var c = l.origin || ''; if (!n.length || n[n.length-1] !== c) n.push(c); });
      var lc = lanes[lanes.length-1].dest || '';
      if (!n.length || n[n.length-1] !== lc) n.push(lc);
      return n;
    }
    var bSeq = seqCities(beforeLanes), aSeq = seqCities(afterLanes);
    var commonLen = 0;
    while (commonLen < bSeq.length && commonLen < aSeq.length && bSeq[commonLen] === aSeq[commonLen]) commonLen++;

    var maxSteps = Math.max(bSeq.length, aSeq.length) - 1;
    if (maxSteps < 0) maxSteps = 0;

    // Fit columns to the modal (~470px usable), minimum 90px each so nodes stay legible
    var RC_LEFT = 40, RC_R = 20, RC_GAP = 70, RC_TOP = 44;
    var MODAL_W = 470;
    var RC_COL_W = Math.max(90, Math.floor((MODAL_W - RC_LEFT * 2) / (maxSteps + 1)));

    var colNodes = [];
    for (var _s = 0; _s <= maxSteps; _s++) colNodes.push([]);
    bSeq.forEach(function(c, si) { if (si <= maxSteps && colNodes[si].indexOf(c) < 0) colNodes[si].push(c); });
    aSeq.forEach(function(c, si) { if (si <= maxSteps && colNodes[si].indexOf(c) < 0) colNodes[si].push(c); });

    var maxColH = 0;
    colNodes.forEach(function(col) { if (col.length > maxColH) maxColH = col.length; });
    if (maxColH < 1) maxColH = 1;

    var nodeMap = {};
    colNodes.forEach(function(col, si) {
      var totalH = (col.length - 1) * RC_GAP;
      var startY = RC_TOP + RC_R + (maxColH * RC_GAP - totalH) / 2;
      col.forEach(function(city, ni) {
        nodeMap[city + '|' + si] = { cx: RC_LEFT + si * RC_COL_W + RC_COL_W / 2, cy: startY + ni * RC_GAP, city: city, step: si };
      });
    });

    var svgW = RC_LEFT + (maxSteps + 1) * RC_COL_W + RC_LEFT;
    var svgH = RC_TOP + maxColH * RC_GAP + RC_R + 36;

    // Natural dimensions — container handles overflow-x scroll so nodes stay full size
    var svg = document.createElementNS(svgNs, 'svg');
    svg.setAttribute('width', svgW);
    svg.setAttribute('height', svgH);
    svg.style.cssText = 'display:block';

    // Column headers + dividers
    for (var _ch = 0; _ch <= maxSteps; _ch++) {
      var chX = RC_LEFT + _ch * RC_COL_W + RC_COL_W / 2;
      var chLbl = _ch === 0 ? 'ORIGIN' : (_ch === maxSteps ? (maxSteps >= 4 ? 'DEST.' : 'STEP ' + _ch + ' (DESTINATION)') : 'STEP ' + _ch);
      var chT = document.createElementNS(svgNs, 'text');
      chT.setAttribute('x', chX); chT.setAttribute('y', '16');
      chT.setAttribute('text-anchor', 'middle'); chT.setAttribute('font-size', '9');
      chT.setAttribute('font-weight', '700'); chT.setAttribute('font-family', 'monospace');
      chT.setAttribute('fill', '#8B939B'); chT.setAttribute('letter-spacing', '0.08em');
      chT.textContent = chLbl; svg.appendChild(chT);
      if (_ch > 0) {
        var dvX = RC_LEFT + _ch * RC_COL_W;
        var dvL = document.createElementNS(svgNs, 'line');
        dvL.setAttribute('x1', dvX); dvL.setAttribute('x2', dvX);
        dvL.setAttribute('y1', '26'); dvL.setAttribute('y2', svgH);
        dvL.setAttribute('stroke', 'rgba(255,255,255,0.04)'); dvL.setAttribute('stroke-width', '1');
        svg.appendChild(dvL);
      }
    }

    // Before route edges (discarded portion dashed grey)
    for (var bi = 0; bi < bSeq.length - 1; bi++) {
      var fn = nodeMap[bSeq[bi] + '|' + bi];
      var tn = nodeMap[bSeq[bi + 1] + '|' + (bi + 1)];
      if (!fn || !tn) continue;
      var ln = document.createElementNS(svgNs, 'line');
      ln.setAttribute('x1', fn.cx + RC_R); ln.setAttribute('y1', fn.cy);
      ln.setAttribute('x2', tn.cx - RC_R); ln.setAttribute('y2', tn.cy);
      if (bi < commonLen - 1) {
        ln.setAttribute('stroke', afterAccent); ln.setAttribute('stroke-width', '2.5');
      } else {
        ln.setAttribute('stroke', 'rgba(255,255,255,0.2)'); ln.setAttribute('stroke-width', '1.5');
        ln.setAttribute('stroke-dasharray', '6,4');
      }
      ln.setAttribute('stroke-linecap', 'round');
      svg.appendChild(ln);
    }

    // After route edges (new path — accent, skip shared prefix already drawn)
    for (var ai = 0; ai < aSeq.length - 1; ai++) {
      if (ai < commonLen - 1) continue;
      var fn2 = nodeMap[aSeq[ai] + '|' + ai];
      var tn2 = nodeMap[aSeq[ai + 1] + '|' + (ai + 1)];
      if (!fn2 || !tn2) continue;
      var ln2 = document.createElementNS(svgNs, 'line');
      ln2.setAttribute('x1', fn2.cx + RC_R); ln2.setAttribute('y1', fn2.cy);
      ln2.setAttribute('x2', tn2.cx - RC_R); ln2.setAttribute('y2', tn2.cy);
      ln2.setAttribute('stroke', afterAccent); ln2.setAttribute('stroke-width', '2.5');
      ln2.setAttribute('stroke-linecap', 'round');
      svg.appendChild(ln2);
    }

    // Nodes — track sequential number for after/shared nodes only
    var afterStepNum = 0;
    // Build an ordered list: shared nodes first (step 0..commonLen-1), then after nodes
    var orderedKeys = Object.keys(nodeMap).sort(function(a, b) {
      var sa = nodeMap[a].step, sb = nodeMap[b].step;
      return sa !== sb ? sa - sb : (aSeq[sa] === nodeMap[a].city ? 1 : -1);
    });

    orderedKeys.forEach(function(nk) {
      var nd = nodeMap[nk];
      var isShared = nd.step < commonLen;
      var inAfter  = nd.step < aSeq.length && aSeq[nd.step] === nd.city;
      var inBefore = nd.step < bSeq.length && bSeq[nd.step] === nd.city;
      var discarded = !isShared && inBefore && !inAfter;

      var fill, stroke, strokeW, textColor, opacity;
      opacity = 1;
      if (isShared)       { fill = afterAccent;             stroke = afterAccent;               strokeW = 2;   textColor = '#0B131B'; }
      else if (inAfter)   { fill = 'rgba(35,45,55,0.9)';   stroke = afterAccent;               strokeW = 2;   textColor = afterAccent; }
      else                { fill = 'rgba(35,45,55,0.9)';   stroke = 'rgba(255,255,255,0.18)';  strokeW = 1.5; textColor = '#53636B'; opacity = 0.45; }

      var g = document.createElementNS(svgNs, 'g');
      if (opacity < 1) g.setAttribute('opacity', opacity);

      var circ = document.createElementNS(svgNs, 'circle');
      circ.setAttribute('cx', nd.cx); circ.setAttribute('cy', nd.cy); circ.setAttribute('r', RC_R);
      circ.setAttribute('fill', fill); circ.setAttribute('stroke', stroke); circ.setAttribute('stroke-width', strokeW);
      if (discarded) circ.setAttribute('stroke-dasharray', '4,3');
      g.appendChild(circ);

      if (discarded) {
        // Discarded node: X mark only, no step number
        var stk1 = document.createElementNS(svgNs, 'line');
        stk1.setAttribute('x1', nd.cx - RC_R*0.5); stk1.setAttribute('y1', nd.cy - RC_R*0.5);
        stk1.setAttribute('x2', nd.cx + RC_R*0.5); stk1.setAttribute('y2', nd.cy + RC_R*0.5);
        stk1.setAttribute('stroke', 'rgba(235,67,67,0.6)'); stk1.setAttribute('stroke-width', '2');
        g.appendChild(stk1);
        var stk2 = document.createElementNS(svgNs, 'line');
        stk2.setAttribute('x1', nd.cx + RC_R*0.5); stk2.setAttribute('y1', nd.cy - RC_R*0.5);
        stk2.setAttribute('x2', nd.cx - RC_R*0.5); stk2.setAttribute('y2', nd.cy + RC_R*0.5);
        stk2.setAttribute('stroke', 'rgba(235,67,67,0.6)'); stk2.setAttribute('stroke-width', '2');
        g.appendChild(stk2);
      } else {
        // Shared or new after node: sequential step number
        afterStepNum++;
        var stepN = document.createElementNS(svgNs, 'text');
        stepN.setAttribute('x', nd.cx); stepN.setAttribute('y', nd.cy + 1);
        stepN.setAttribute('text-anchor', 'middle'); stepN.setAttribute('dominant-baseline', 'middle');
        stepN.setAttribute('font-size', '13'); stepN.setAttribute('font-weight', '700');
        stepN.setAttribute('font-family', 'monospace'); stepN.setAttribute('fill', textColor);
        stepN.setAttribute('pointer-events', 'none');
        stepN.textContent = String(afterStepNum);
        g.appendChild(stepN);
      }

      var cityParts = nd.city.split(', ');
      var cityLbl = document.createElementNS(svgNs, 'text');
      cityLbl.setAttribute('x', nd.cx); cityLbl.setAttribute('y', nd.cy + RC_R + 13);
      cityLbl.setAttribute('text-anchor', 'middle'); cityLbl.setAttribute('font-size', '9');
      cityLbl.setAttribute('font-family', 'Nunito,system-ui');
      cityLbl.setAttribute('fill', discarded ? '#3A4550' : '#6B7373');
      cityLbl.setAttribute('pointer-events', 'none');
      cityLbl.textContent = cityParts[0] + (cityParts[1] ? ', ' + cityParts[1] : '');
      g.appendChild(cityLbl);

      svg.appendChild(g);
    });

    return svg.outerHTML;
  }

  // ── Unified Route Review modal (Route Connections style) ─────────────────
  function _showRouteReviewModal(caseNum, rId, snapBefore, routes, opts) {
    opts = opts || {};
    var F  = 'Nunito,system-ui';
    var NS = 'http://www.w3.org/2000/svg';
    ['_ef-rebal','_ef-worsen','_ef-routerev'].forEach(function(id){ var e=document.getElementById(id); if(e) e.remove(); });

    var _selIdx = 1;

    // ── Overlay + modal shell ──
    var ov = document.createElement('div'); ov.id = '_ef-routerev';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9030;background:rgba(6,12,17,.65);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'width:980px;max-width:96vw;height:88vh;background:#0B131B;border:1px solid rgba(255,255,255,.12);border-radius:16px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.85)';

    // ── Header ──
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:8px;padding:11px 16px;background:#101B23;border-bottom:1px solid rgba(255,255,255,.08);flex:none';
    var _fromStr = opts.fromDest ? opts.fromDest.split(',')[0] : null;
    var _toStr   = opts.toDest   ? opts.toDest.split(',')[0]   : null;
    var _iconColor = caseNum === 1 ? '#3FC281' : '#FBB303';
    var _iconBg    = caseNum === 1 ? 'rgba(63,194,129,.1)' : 'rgba(251,179,3,.1)';
    var _iconBd    = caseNum === 1 ? 'rgba(63,194,129,.25)' : 'rgba(251,179,3,.3)';
    var _iconPath  = caseNum === 1
      ? '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>'
      : '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>';

    // Build subtitle based on case
    var _sub;
    var _destChange = (_fromStr && _toStr)
      ? 'The lane destination changed from <strong style="color:#FBFBFB">'+_fromStr+'</strong> to <strong style="color:#FBFBFB">'+_toStr+'</strong>. '
      : '';
    if (caseNum === 1) {
      _sub = _destChange + 'The plan was adjusted to maintain truck profitability and connectivity.';
    } else if (opts.dh) {
      _sub = _destChange + 'No direct route was found — the truck must deadhead <strong style="color:#F5A623">'+(opts.dhMiles||185)+' mi</strong> to <strong style="color:#F5A623">'+(opts.dhHub||'a nearby hub')+'</strong> to restore connectivity. ' +
        (opts.hasPinned && opts.pinnedCity ? 'The plan no longer reaches <strong style="color:#7BCBCB">'+(opts.pinnedCity.split(',')[0])+'</strong>. Select an option below.' : 'This is the best available plan. Accept or adjust manually.');
    } else {
      _sub = _destChange +
        (opts.hasPinned && opts.pinnedCity
          ? 'The plan no longer reaches <strong style="color:#7BCBCB">'+(opts.pinnedCity.split(',')[0])+'</strong>. Select an option below.'
          : 'This is the best available plan given the new destination. Accept or adjust manually.');
    }

    hdr.innerHTML =
      '<div style="width:28px;height:28px;border-radius:8px;background:'+_iconBg+';border:1px solid '+_iconBd+';display:grid;place-items:center;flex-shrink:0">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="'+_iconColor+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+_iconPath+'</svg>' +
      '</div>' +
      '<span style="font:800 13px '+F+';color:#FBFBFB;flex:1">Review Updated Plan</span>';
    modal.appendChild(hdr);

    // ── Body ──
    var body = document.createElement('div');
    body.style.cssText = 'flex:1;overflow:hidden;min-height:0;display:flex';

    // ── SVG graph area ──
    var svgArea = document.createElement('div');
    svgArea.style.cssText = 'flex:1;overflow:hidden;background:#080F15;position:relative;cursor:grab';

    // Build city sequences + edge-type arrays from each route's lanes.
    // Lane structure is always DH/Loaded alternating (even index = DH, odd = Loaded).
    // Local DH (origin === dest) is invisible; repositioning DH (origin ≠ dest) adds a hub node.
    function _buildSeqData(lanes) {
      var cities = [], edgeTypes = [];
      if (!lanes || !lanes.length) return { cities: cities, edgeTypes: edgeTypes };
      if (lanes[0] && lanes[0].origin) cities.push(lanes[0].origin);
      for (var _li = 0; _li < lanes.length; _li++) {
        var _isDH = (_li % 2 === 0);
        var _ll = lanes[_li];
        if (_isDH) {
          // Repositioning DH (origin ≠ dest) → hub is a real numbered node
          if (_ll.origin !== _ll.dest && _ll.dest && cities[cities.length-1] !== _ll.dest) {
            edgeTypes.push('dh-repos');
            cities.push(_ll.dest);
          }
        } else {
          // Loaded lane → add destination
          if (_ll.dest && cities[cities.length-1] !== _ll.dest) {
            edgeTypes.push(_ll.status === 'Booked' ? 'booked' : 'new');
            cities.push(_ll.dest);
          }
        }
      }
      return { cities: cities, edgeTypes: edgeTypes };
    }
    var _seqDatas = routes.map(function(rt){
      if (rt.lanes && rt.lanes.length) return _buildSeqData(rt.lanes);
      if (rt.displaySeq && rt.displaySeq.length) {
        var _dc = rt.displaySeq.slice();
        return { cities: _dc, edgeTypes: _dc.slice(1).map(function(){ return 'new'; }) };
      }
      return { cities: [], edgeTypes: [] };
    });
    var seqs = _seqDatas.map(function(d){ return d.cities; });
    var _seqEdgeTypes = _seqDatas.map(function(d){ return d.edgeTypes; });

    // Layout constants (same as Route Connections tab)
    var RC_COL_W = 190, RC_R = 20, RC_GAP = 70, RC_TOP = 44, RC_LEFT = 52;

    var maxSteps = 0;
    seqs.forEach(function(s){ if (s.length-1 > maxSteps) maxSteps = s.length-1; });
    if (maxSteps < 1) maxSteps = 1;

    // Build column nodes (per-column city list)
    var colNodes = [];
    for (var _ci = 0; _ci <= maxSteps; _ci++) colNodes.push([]);
    seqs.forEach(function(seq){
      seq.forEach(function(city, si){ if (si <= maxSteps && colNodes[si].indexOf(city) < 0) colNodes[si].push(city); });
    });
    var maxColH = 1;
    colNodes.forEach(function(col){ if (col.length > maxColH) maxColH = col.length; });

    // Assign (cx, cy) to each city+step
    var nodeMap = {};
    colNodes.forEach(function(col, si){
      var totalH = (col.length-1) * RC_GAP;
      var startY = RC_TOP + RC_R + (maxColH * RC_GAP - totalH) / 2;
      col.forEach(function(city, ni){
        nodeMap[city+'|'+si] = { cx: RC_LEFT + si*RC_COL_W + RC_COL_W/2, cy: startY + ni*RC_GAP, city: city, step: si };
      });
    });

    var svgW = RC_LEFT + (maxSteps+1)*RC_COL_W + RC_LEFT;
    var svgH = RC_TOP + maxColH*RC_GAP + RC_R + 36;

    var svgEl = document.createElementNS(NS, 'svg');
    svgEl.setAttribute('width', svgW); svgEl.setAttribute('height', svgH);
    svgEl.style.cssText = 'display:block;transform-origin:0 0;position:absolute;top:0;left:0';

    // Column headers + vertical dividers
    for (var _ch = 0; _ch <= maxSteps; _ch++) {
      var chX = RC_LEFT + _ch*RC_COL_W + RC_COL_W/2;
      var chLbl = _ch === 0 ? 'ORIGIN' : (_ch === maxSteps ? 'STEP '+_ch+' (DEST.)' : 'STEP '+_ch);
      var chT = document.createElementNS(NS,'text');
      chT.setAttribute('x', chX); chT.setAttribute('y','16');
      chT.setAttribute('text-anchor','middle'); chT.setAttribute('font-size','9');
      chT.setAttribute('font-weight','700'); chT.setAttribute('font-family','monospace');
      chT.setAttribute('fill','#8B939B'); chT.setAttribute('letter-spacing','0.08em');
      chT.textContent = chLbl; svgEl.appendChild(chT);
      if (_ch > 0) {
        var dvL = document.createElementNS(NS,'line');
        dvL.setAttribute('x1', RC_LEFT+_ch*RC_COL_W); dvL.setAttribute('x2', RC_LEFT+_ch*RC_COL_W);
        dvL.setAttribute('y1','26'); dvL.setAttribute('y2', svgH);
        dvL.setAttribute('stroke','rgba(255,255,255,0.04)'); dvL.setAttribute('stroke-width','1');
        svgEl.appendChild(dvL);
      }
    }

    // Draw edges per route — each route in its own <g> for opacity toggling
    var _svgEdgeGroups = [];
    routes.forEach(function(rt, ri){
      var seq = seqs[ri];
      var isDisc = rt.discarded;
      var accent = rt.accent || '#8B939B';
      var _rtEdgeTypes = _seqEdgeTypes[ri] || [];
      var grp = document.createElementNS(NS,'g');
      grp.setAttribute('opacity', ri === _selIdx ? '1' : (isDisc ? '0.18' : '0.18'));
      if (seq.length >= 2) {
        for (var ei = 0; ei < seq.length-1; ei++) {
          var fn = nodeMap[seq[ei]+'|'+ei];
          var tn = nodeMap[seq[ei+1]+'|'+(ei+1)];
          if (!fn||!tn) continue;
          var _et = _rtEdgeTypes[ei] || 'new';
          var isDHEdge = !isDisc && _et === 'dh-repos';
          var isBookedEdge = !isDisc && _et === 'booked';
          var ln = document.createElementNS(NS,'line');
          ln.setAttribute('x1', fn.cx+RC_R); ln.setAttribute('y1', fn.cy);
          ln.setAttribute('x2', tn.cx-RC_R); ln.setAttribute('y2', tn.cy);
          if (isDisc) {
            ln.setAttribute('stroke','rgba(255,255,255,0.55)');
            ln.setAttribute('stroke-width','2');
            ln.setAttribute('stroke-dasharray','6,4');
          } else if (isDHEdge) {
            ln.setAttribute('stroke','#F5A623');
            ln.setAttribute('stroke-width','2');
            ln.setAttribute('stroke-dasharray','7,5');
          } else if (isBookedEdge) {
            ln.setAttribute('stroke','rgba(255,255,255,0.22)');
            ln.setAttribute('stroke-width','2');
          } else {
            ln.setAttribute('stroke', accent);
            ln.setAttribute('stroke-width','2.5');
          }
          ln.setAttribute('stroke-linecap','round');
          grp.appendChild(ln);
          // DH edge: add a small "X mi DH" label at midpoint
          if (isDHEdge && rt.dhMiles) {
            var mx = (fn.cx+RC_R + tn.cx-RC_R) / 2;
            var my = (fn.cy + tn.cy) / 2 - 8;
            var dhLbl = document.createElementNS(NS,'text');
            dhLbl.setAttribute('x', mx); dhLbl.setAttribute('y', my);
            dhLbl.setAttribute('text-anchor','middle'); dhLbl.setAttribute('font-size','8');
            dhLbl.setAttribute('font-weight','700'); dhLbl.setAttribute('font-family','monospace');
            dhLbl.setAttribute('fill','#F5A623'); dhLbl.setAttribute('letter-spacing','0.05em');
            dhLbl.textContent = rt.dhMiles+' mi DH';
            grp.appendChild(dhLbl);
          }
        }
      }
      svgEl.appendChild(grp);
      _svgEdgeGroups.push(grp);
    });

    // Draw nodes (each city+step gets exactly one circle)
    Object.keys(nodeMap).forEach(function(nk){
      var nd = nodeMap[nk];
      // Which routes include this node?
      var rIdxs = [];
      seqs.forEach(function(sq, ri){ if (nd.step < sq.length && sq[nd.step] === nd.city) rIdxs.push(ri); });
      // Primary: prefer non-discarded
      var pri = null;
      rIdxs.forEach(function(ri){ if (!routes[ri].discarded && pri === null) pri = ri; });
      if (pri === null) pri = rIdxs[0];
      var rt = routes[pri];
      var isDisc = rt.discarded && rIdxs.length === 1; // pure discarded (not shared)
      var accent = rt.accent || '#8B939B';
      // Find pivot step for primary route: first edge that is not 'booked'
      var _priEdgeTypes = _seqEdgeTypes[pri] || [];
      var _pivotStep = _priEdgeTypes.length; // default: all booked
      for (var _pei = 0; _pei < _priEdgeTypes.length; _pei++) {
        if (_priEdgeTypes[_pei] !== 'booked') { _pivotStep = _pei; break; }
      }
      var isBooked = !isDisc && nd.step <= _pivotStep;
      var isDHOriginNode = !isDisc && nd.step === _pivotStep && (_priEdgeTypes[_pivotStep] || '') === 'dh-repos';

      var g = document.createElementNS(NS,'g');
      if (isDisc) g.setAttribute('opacity','0.42');

      var circ = document.createElementNS(NS,'circle');
      circ.setAttribute('cx', nd.cx); circ.setAttribute('cy', nd.cy); circ.setAttribute('r', RC_R);
      circ.setAttribute('fill','rgba(20,32,42,0.95)');
      if (isDisc)          { circ.setAttribute('stroke','rgba(255,255,255,0.18)'); circ.setAttribute('stroke-width','1.5'); circ.setAttribute('stroke-dasharray','4,3'); }
      else if (isDHOriginNode) { circ.setAttribute('stroke','#F5A623'); circ.setAttribute('stroke-width','2'); circ.setAttribute('stroke-dasharray','4,3'); }
      else if (isBooked)   { circ.setAttribute('stroke','rgba(255,255,255,0.28)'); circ.setAttribute('stroke-width','1.5'); }
      else                 { circ.setAttribute('stroke', accent); circ.setAttribute('stroke-width','2'); }
      g.appendChild(circ);

      if (isDisc) {
        // X mark
        ['M '+(nd.cx-RC_R*0.45)+' '+(nd.cy-RC_R*0.45)+' L '+(nd.cx+RC_R*0.45)+' '+(nd.cy+RC_R*0.45),
         'M '+(nd.cx+RC_R*0.45)+' '+(nd.cy-RC_R*0.45)+' L '+(nd.cx-RC_R*0.45)+' '+(nd.cy+RC_R*0.45)].forEach(function(d){
          var x = document.createElementNS(NS,'path');
          x.setAttribute('d',d); x.setAttribute('stroke','rgba(235,67,67,0.6)'); x.setAttribute('stroke-width','2'); x.setAttribute('stroke-linecap','round');
          g.appendChild(x);
        });
      } else if (isDHOriginNode) {
        var trk = document.createElementNS(NS,'text');
        trk.setAttribute('x', nd.cx); trk.setAttribute('y', nd.cy+1);
        trk.setAttribute('text-anchor','middle'); trk.setAttribute('dominant-baseline','middle');
        trk.setAttribute('font-size','11'); trk.setAttribute('font-weight','700');
        trk.setAttribute('font-family','monospace'); trk.setAttribute('fill','#F5A623');
        trk.textContent = '→';
        g.appendChild(trk);
      } else {
        var stepT = document.createElementNS(NS,'text');
        stepT.setAttribute('x', nd.cx); stepT.setAttribute('y', nd.cy+1);
        stepT.setAttribute('text-anchor','middle'); stepT.setAttribute('dominant-baseline','middle');
        stepT.setAttribute('font-size','13'); stepT.setAttribute('font-weight','700');
        stepT.setAttribute('font-family','monospace');
        stepT.setAttribute('fill', isBooked ? '#8B939B' : accent);
        stepT.setAttribute('pointer-events','none');
        stepT.textContent = String(nd.step+1);
        g.appendChild(stepT);
      }

      var cityT = document.createElementNS(NS,'text');
      cityT.setAttribute('x', nd.cx); cityT.setAttribute('y', nd.cy+RC_R+14);
      cityT.setAttribute('text-anchor','middle'); cityT.setAttribute('font-size','9');
      cityT.setAttribute('font-family',F); cityT.setAttribute('fill', isDisc ? '#3A4549' : '#6B7373');
      cityT.setAttribute('pointer-events','none');
      var cp = nd.city.split(', ');
      cityT.textContent = cp[0]+(cp[1] ? ', '+cp[1] : '');
      g.appendChild(cityT);
      svgEl.appendChild(g);
    });

    svgArea.appendChild(svgEl);

    // Zoom / pan
    var _rrScale = 1, _rrTx = 0, _rrTy = 0;
    function _rrApply(){ svgEl.style.transform = 'translate('+_rrTx+'px,'+_rrTy+'px) scale('+_rrScale+')'; }
    setTimeout(function(){
      var cw = svgArea.clientWidth||640, ch = svgArea.clientHeight||400;
      _rrScale = Math.min((cw-40)/svgW, (ch-40)/svgH);
      if (_rrScale > 1.3) _rrScale = 1.3;
      _rrTx = (cw - svgW*_rrScale)/2;
      _rrTy = (ch - svgH*_rrScale)/2;
      _rrApply();
    }, 0);
    svgArea.addEventListener('wheel', function(e){
      e.preventDefault();
      var rect = svgArea.getBoundingClientRect();
      var mx = e.clientX-rect.left, my = e.clientY-rect.top;
      var factor = e.deltaY>0 ? 0.85 : 1.18;
      var ns = Math.max(0.15, Math.min(4, _rrScale*factor));
      _rrTx = mx - (mx-_rrTx)*(ns/_rrScale);
      _rrTy = my - (my-_rrTy)*(ns/_rrScale);
      _rrScale = ns; _rrApply();
    }, { passive:false });
    (function(area){
      var drag=false, sx,sy,stx,sty;
      area.addEventListener('mousedown',function(e){ drag=true; sx=e.clientX; sy=e.clientY; stx=_rrTx; sty=_rrTy; area.style.cursor='grabbing'; });
      window.addEventListener('mouseup',function(){ drag=false; area.style.cursor='grab'; });
      area.addEventListener('mousemove',function(e){ if(!drag) return; _rrTx=stx+e.clientX-sx; _rrTy=sty+e.clientY-sy; _rrApply(); });
    })(svgArea);

    // ── Right panel — route cards ──
    var rcPanel = document.createElement('div');
    rcPanel.style.cssText = 'border-left:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;overflow:hidden;background:rgba(0,0,0,.18);width:300px;flex:none';

    var panHdr = document.createElement('div');
    panHdr.style.cssText = 'padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
    panHdr.innerHTML =
      '<div style="font:800 11px '+F+';color:#FBFBFB;margin-bottom:8px">Route options</div>' +
      '<div style="font:400 11px '+F+';color:#8B939B;line-height:1.55">'+_sub+'</div>';
    rcPanel.appendChild(panHdr);

    var panScroll = document.createElement('div');
    panScroll.style.cssText = 'overflow-y:auto;flex:1;scrollbar-width:thin;scrollbar-color:#1E2E38 transparent';

    var _cardEls = [];

    function _selectRoute(idx) {
      _selIdx = idx;
      // Update card highlights
      _cardEls.forEach(function(card, ci){
        var isSel = ci === idx;
        var rt = routes[ci];
        card.style.background = isSel ? 'rgba(255,255,255,.04)' : 'transparent';
        card.style.borderLeftColor = isSel ? (rt.accent || '#27A767') : 'transparent';
      });
      // Update SVG edge group opacities
      _svgEdgeGroups.forEach(function(grp, ri){
        grp.setAttribute('opacity', ri === idx ? '1' : '0.1');
      });
      _updateFooter();
    }

    routes.forEach(function(rt, ri){
      var card = document.createElement('div');
      var isDisc = !!rt.discarded;
      var isSel  = ri === _selIdx;
      var accent = rt.accent || (isDisc ? '#8B939B' : '#27A767');
      card.style.cssText = 'padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;transition:background .15s;border-left:3px solid '+(isSel?accent:'transparent')+';background:'+(isSel?'rgba(255,255,255,.04)':'transparent');

      var seq = seqs[ri];
      var _displaySeq = (rt.displaySeq && rt.displaySeq.length > 0) ? rt.displaySeq : seq;
      var routeStr = _displaySeq.length <= 3 ? _displaySeq.join(' → ') :
                     _displaySeq[0]+' → '+(_displaySeq.length-2)+' cities → '+_displaySeq[_displaySeq.length-1];

      // Viability score (mock) and lane count
      var viab   = rt.viability  || (isDisc ? 45 : (accent==='#3FC281' ? 91 : (accent==='#FBB303' ? 63 : 72)));
      var lnCnt  = rt.laneCount  || (seq.length > 1 ? seq.length - 1 : 2);
      var viabClr = viab >= 80 ? '#3FC281' : (viab >= 65 ? '#FBB303' : '#EB4343');

      // Tags (Best profit, Best connectivity, etc.)
      var tagsHtml = (rt.tags||[]).map(function(tg){
        return '<span style="display:inline-block;padding:1px 6px;background:rgba(39,167,103,.08);border:1px solid rgba(39,167,103,.2);border-radius:4px;font:700 8px '+F+';color:#3FC281">'+tg+'</span>';
      }).join(' ');

      card.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:3px">' +
          '<div style="font:800 11px '+F+';color:'+(isDisc?'#53636B':'#FBFBFB')+';letter-spacing:.01em">'+rt.label+'</div>' +
          '<div style="font:800 14px \'JetBrains Mono\',monospace;color:'+(isDisc?'#3A4549':accent)+';flex-shrink:0">'+viab+'</div>' +
        '</div>' +
        (_displaySeq.length > 0 ? '<div style="font:400 10px '+F+';color:#3A5060;margin-bottom:4px;line-height:1.4">'+routeStr+'</div>' : '') +
        '<div style="font:400 10px '+F+';color:'+viabClr+';margin-bottom:'+(tagsHtml?'5px':'0')+'">' +
          viab+'% Viability | '+lnCnt+' lane'+(lnCnt!==1?'s':'')+
          (rt.badge ? ' | <span style="color:'+accent+'">'+rt.badge+'</span>' : '') +
        '</div>' +
        (tagsHtml ? '<div style="display:flex;flex-wrap:wrap;gap:3px">'+tagsHtml+'</div>' : '');

      card.addEventListener('click', function(){ _selectRoute(ri); });
      card.addEventListener('mouseenter', function(){ if (ri!==_selIdx) card.style.background='rgba(255,255,255,.02)'; });
      card.addEventListener('mouseleave', function(){ if (ri!==_selIdx) card.style.background='transparent'; });
      _cardEls.push(card);
      panScroll.appendChild(card);
    });
    rcPanel.appendChild(panScroll);

    body.appendChild(svgArea);
    body.appendChild(rcPanel);
    modal.appendChild(body);

    // ── Footer metrics bar ──
    var ftrBar = document.createElement('div');
    ftrBar.style.cssText = 'background:#0B131B;border-top:1px solid rgba(255,255,255,.07);padding:10px 0 10px 8px;display:flex;align-items:center;flex:none';

    var _fmt$ = function(n){ return (n<0?'-$':'$')+Math.abs(Math.round(n)).toLocaleString('en-US'); };
    var _fmtPct = function(bv, av){
      if (!bv || bv===0) return null;
      var d = (av-bv)/Math.abs(bv)*100;
      return (d>=0?'+':'')+d.toFixed(1)+'%';
    };
    var _pctClr = function(pctStr, higherIsBetter){
      if (!pctStr) return '#8B939B';
      var isPos = pctStr.charAt(0)==='+';
      return higherIsBetter ? (isPos?'#3FC281':'#EB4343') : (isPos?'#EB4343':'#3FC281');
    };

    function _ftrMetric(label, value, delta, higherIsBetter) {
      var el = document.createElement('div');
      el.style.cssText = 'flex:1;padding:0 20px;min-width:0';
      var deltaClr = delta ? _pctClr(delta,higherIsBetter) : 'transparent';
      var deltaText = delta || '';
      el.innerHTML =
        '<div style="font:700 9px '+F+';color:#53636B;letter-spacing:.08em;margin-bottom:3px">'+label+(deltaText ? ' <span style="color:'+deltaClr+';font-weight:700">'+deltaText+'</span>' : '')+'</div>' +
        '<div style="font:800 14px '+F+';color:#FBFBFB;white-space:nowrap">'+value+'</div>';
      return el;
    }

    function _updateFooter() {
      ftrBar.innerHTML = '';

      var rt = routes[_selIdx];
      var snap = rt ? rt.snap : null;
      var ref  = routes[0].snap;
      var isDisc = rt && rt.discarded;

      // ── Metrics section (flex:1) ──
      var metricsWrap = document.createElement('div');
      metricsWrap.style.cssText = 'flex:1;display:flex;min-width:0';
      if (snap) {
        var incPct  = isDisc ? null : _fmtPct(ref.income,  snap.income);
        var pftPct  = isDisc ? null : _fmtPct(ref.profit,  snap.profit);
        var miPct   = isDisc ? null : _fmtPct(ref.miles,   snap.miles);
        var daysPct = isDisc ? null : _fmtPct(ref.days,    snap.days);
        // Show ranges for non-discarded routes, single values for initial plan
        var incVal, pftVal, miVal, daysVal;
        if (isDisc) {
          incVal  = _fmt$(snap.income);
          pftVal  = _fmt$(snap.profit);
          miVal   = Math.round(snap.miles).toLocaleString('en-US')+' mi';
          daysVal = snap.days+' d';
        } else {
          var incLo = snap.income * 0.88, incHi = snap.income * 1.12;
          var pftLo = snap.profit * 0.88, pftHi = snap.profit * 1.12;
          incVal  = _fmt$(incLo)+'–'+_fmt$(incHi);
          pftVal  = _fmt$(Math.min(pftLo,pftHi))+'–'+_fmt$(Math.max(pftLo,pftHi));
          miVal   = Math.round(snap.miles).toLocaleString('en-US')+' mi';
          daysVal = snap.days+'–'+(snap.days+1)+' days';
        }
        metricsWrap.appendChild(_ftrMetric('INCOME',       incVal,  incPct,  true));
        metricsWrap.appendChild(_ftrMetric('PROFIT',       pftVal,  pftPct,  true));
        metricsWrap.appendChild(_ftrMetric('MILEAGE',      miVal,   miPct,   false));
        metricsWrap.appendChild(_ftrMetric('DAYS ON ROUTE',daysVal, daysPct, false));
      }
      ftrBar.appendChild(metricsWrap);

      // ── Separator + Action buttons (right, fixed width) ──
      var btnWrap = document.createElement('div');
      btnWrap.style.cssText = 'display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:0 16px;border-left:1px solid rgba(255,255,255,.07);width:300px;flex:none;box-sizing:border-box';

      if (isDisc) {
        // Initial plan selected — show passive message, no action buttons
        var discMsg = document.createElement('div');
        discMsg.style.cssText = 'font:400 11px '+F+';color:#3A5060;text-align:right;line-height:1.5';
        discMsg.textContent = 'This plan is no longer available. Select an alternative plan to continue.';
        btnWrap.appendChild(discMsg);
      } else {
        if (caseNum===2||caseNum===3) {
          var bAdj = document.createElement('button');
          bAdj.style.cssText = 'padding:7px 14px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#6B7373;font:700 11px '+F+';cursor:pointer;white-space:nowrap';
          bAdj.textContent = 'Adjust manually';
          bAdj.onclick = function(){
            ov.remove();
            _clearDownstreamUnbooked(rId);
          };
          btnWrap.appendChild(bAdj);
        }

        var bConf = document.createElement('button');
        bConf.style.cssText = 'padding:7px 18px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 12px '+F+';cursor:pointer;white-space:nowrap';
        bConf.textContent = 'Confirm plan';
        bConf.onclick = function(){
          if (opts.hasPinned && routes[_selIdx].id !== 'pinned') delete _pinnedFinalDest[rId];
          ov.remove();
        };
        btnWrap.appendChild(bConf);
      }
      ftrBar.appendChild(btnWrap);
    }

    _updateFooter();
    modal.appendChild(ftrBar);

    // ── Floating "← Simulation" button — outside modal, top-left of overlay ──
    var bRet = document.createElement('button');
    bRet.style.cssText = 'position:absolute;top:16px;left:16px;display:flex;align-items:center;gap:5px;background:rgba(8,15,21,.82);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:6px 11px;color:#8B939B;font:700 11px '+F+';cursor:pointer;white-space:nowrap;backdrop-filter:blur(6px);z-index:1';
    bRet.innerHTML = '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"></polyline></svg>Simulation';
    bRet.onmouseenter = function(){ bRet.style.color='#FBFBFB'; bRet.style.borderColor='rgba(255,255,255,.22)'; };
    bRet.onmouseleave = function(){ bRet.style.color='#8B939B'; bRet.style.borderColor='rgba(255,255,255,.1)'; };
    bRet.onclick = function(){
      ov.remove();
      if (_simReturnCtx) {
        _showScenarioPicker(_simReturnCtx.rId, _simReturnCtx.toDest, _simReturnCtx.snapBefore, function(cn, sc){
          _showAdaptingPlan(function(){ _runSimCase(cn, _simReturnCtx.rId, _simReturnCtx.snapBefore, sc); });
        }, _simReturnCtx.fromDest);
      }
    };

    ov.appendChild(modal);
    ov.appendChild(bRet);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e){
      if (!modal.contains(e.target) && !bRet.contains(e.target)) ov.remove();
    });
  }

  // ── Informative rebalance modal ──────────────────────────────────────────
  function _showRebalanceModal(before, after, opts) {
    opts = opts || {};
    var ex = document.getElementById('_ef-rebal'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var MN = '\'JetBrains Mono\',monospace';

    var ov = document.createElement('div'); ov.id = '_ef-rebal';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9030;background:rgba(6,12,17,.72);display:flex;align-items:center;justify-content:center';

    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1px solid rgba(63,194,129,.2);border-radius:14px;width:480px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.9)';

    // ── Back nav ──
    var navTop = document.createElement('div');
    navTop.style.cssText = 'padding:10px 16px 0';
    var bRetR = document.createElement('button');
    bRetR.style.cssText = 'display:flex;align-items:center;gap:5px;background:none;border:none;padding:3px 0;color:#8B939B;font:700 11px '+F+';cursor:pointer;letter-spacing:.01em';
    bRetR.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>Return to simulation';
    bRetR.onclick = function() {
      ov.remove();
      if (_simReturnCtx) {
        _showScenarioPicker(_simReturnCtx.rId, _simReturnCtx.toDest, _simReturnCtx.snapBefore, function(cn, sc) {
          _showAdaptingPlan(function() { _runSimCase(cn, _simReturnCtx.rId, _simReturnCtx.snapBefore, sc); });
        }, _simReturnCtx.fromDest);
      }
    };
    navTop.appendChild(bRetR);
    modal.appendChild(navTop);

    // ── Header ──
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:12px;padding:14px 20px 14px;border-bottom:1px solid rgba(255,255,255,.07)';
    var _fromStr = opts.fromDest ? opts.fromDest.split(',')[0] : null;
    var _toStr   = opts.toDest   ? opts.toDest.split(',')[0]   : null;
    var _rebalSub = (_fromStr && _toStr)
      ? 'The lane destination changed from <strong style="color:#FBFBFB">'+_fromStr+'</strong> to <strong style="color:#FBFBFB">'+_toStr+'</strong>. The plan was adjusted to maintain truck profitability and connectivity.'
      : 'The plan was adjusted to maintain truck profitability and connectivity.';
    hdr.innerHTML =
      '<div style="width:34px;height:34px;border-radius:10px;background:rgba(63,194,129,.1);border:1px solid rgba(63,194,129,.25);display:grid;place-items:center;flex-shrink:0">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3FC281" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>' +
      '</div>' +
      '<div style="flex:1">' +
        '<div style="font:800 13px '+F+';color:#FBFBFB">Review Updated Plan</div>' +
        '<div style="font:400 11px '+F+';color:#8B939B;margin-top:2px">'+_rebalSub+'</div>' +
      '</div>';
    modal.appendChild(hdr);

    // ── Route comparison diagram ──
    if (_simBeforeLanes && _simAfterLanes) {
      var seqWrap = document.createElement('div');
      seqWrap.style.cssText = 'background:#080F15;border-bottom:1px solid rgba(255,255,255,.07);overflow-x:auto;overflow-y:hidden;flex-shrink:0;padding:14px 0 10px';
      seqWrap.innerHTML = _buildRouteCompSvg(_simBeforeLanes, _simAfterLanes, '#3FC281');
      modal.appendChild(seqWrap);
    }

    // ── Warnings (pinned dest + dead-end) ──
    var hasWarnings = opts.pinnedDest || opts.deadEnd;
    if (hasWarnings) {
      var warn = document.createElement('div');
      warn.style.cssText = 'padding:10px 20px;display:flex;flex-direction:column;gap:6px;border-bottom:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02)';
      if (opts.pinnedDest) {
        var wPin = document.createElement('div');
        wPin.style.cssText = 'display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;background:rgba(123,203,203,.06);border:1px solid rgba(123,203,203,.18)';
        wPin.innerHTML =
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7BCBCB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>' +
          '<span style="font:400 11px '+F+';color:#7BCBCB">Planning toward your target destination: <strong style="font-weight:800">'+opts.pinnedDest+'</strong></span>';
        warn.appendChild(wPin);
      }
      if (opts.deadEnd) {
        var wDead = document.createElement('div');
        wDead.style.cssText = 'display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;background:rgba(235,67,67,.07);border:1px solid rgba(235,67,67,.25)';
        wDead.innerHTML =
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#EB4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>' +
          '<span style="font:400 11px '+F+';color:#EB4343">Plan had to be fully reset — no known routes out of <strong style="font-weight:800">'+(opts.deadCity||'this city')+'</strong>. Unbooked lanes need to be reassigned manually.</span>';
        warn.appendChild(wDead);
      }
      modal.appendChild(warn);
    }

    // ── Metric rows ──
    var body = document.createElement('div');
    body.style.cssText = 'padding:14px 20px 10px';

    // helpers
    var fmt$ = function(n){ return '$'+Math.round(n).toLocaleString('en-US'); };
    var fmtRpm = function(n){ return '$'+n.toFixed(2)+'/mi'; };
    var pct = function(bv, av){ if (!bv) return null; var d = (av - bv) / Math.abs(bv) * 100; return (d >= 0 ? '+' : '') + d.toFixed(1) + '%'; };
    var pctColor = function(bv, av, higherIsBetter) {
      if (av === bv) return 'rgba(255,255,255,.4)';
      var better = higherIsBetter ? av > bv : av < bv;
      return better ? '#3FC281' : '#EB4343';
    };

    // column header
    var colHdr = document.createElement('div');
    colHdr.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr 72px;padding:0 0 8px;border-bottom:1px solid rgba(255,255,255,.07);margin-bottom:2px';
    colHdr.innerHTML =
      '<span style="font:700 9px '+F+';letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.2)">Metric</span>' +
      '<span style="font:700 9px '+F+';letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.2)">Before</span>' +
      '<span style="font:700 9px '+F+';letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.2)">After</span>' +
      '<span style="font:700 9px '+F+';letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.2)">Change</span>';
    body.appendChild(colHdr);

    function _row(label, bFmt, aFmt, bv, av, higherIsBetter) {
      var pctStr = pct(bv, av);
      var col = pctColor(bv, av, higherIsBetter);
      var row = document.createElement('div');
      row.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr 72px;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)';
      row.innerHTML =
        '<span style="font:600 11px '+F+';color:#8B939B">'+label+'</span>' +
        '<span style="font:500 11px '+MN+';color:rgba(255,255,255,.38)">'+bFmt+'</span>' +
        '<span style="font:800 11.5px '+MN+';color:'+(bv!==av?'#FBFBFB':'rgba(255,255,255,.45)')+'">'+aFmt+'</span>' +
        '<span style="font:700 10.5px '+F+';color:'+col+'">'+((pctStr && bv!==av) ? pctStr : '—')+'</span>';
      return row;
    }

    body.appendChild(_row('Income',       fmt$(before.income), fmt$(after.income), before.income, after.income, true));
    body.appendChild(_row('Cost',         fmt$(before.cost),   fmt$(after.cost),   before.cost,  after.cost,  false));
    body.appendChild(_row('Profit',       fmt$(before.profit), fmt$(after.profit), before.profit, after.profit, true));
    body.appendChild(_row('Rate per mile',fmtRpm(before.rpm),  fmtRpm(after.rpm),  before.rpm,   after.rpm,   true));
    body.appendChild(_row('Distance',     before.miles.toLocaleString('en-US')+' mi', after.miles.toLocaleString('en-US')+' mi', before.miles, after.miles, false));
    body.appendChild(_row('Duration',     before.days+' d',    after.days+' d',    before.days,  after.days,  false));
    modal.appendChild(body);

    // ── Footer — manual confirm only ──
    var ftr = document.createElement('div');
    ftr.style.cssText = 'padding:14px 20px;border-top:1px solid rgba(255,255,255,.07);display:flex;justify-content:flex-end';
    var confirmBtn = document.createElement('button');
    confirmBtn.style.cssText = 'padding:9px 28px;background:#27A767;border:none;border-radius:10px;color:#0B131B;font:800 13px '+F+';cursor:pointer;letter-spacing:.01em';
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click', function(){ ov.remove(); });
    ftr.appendChild(confirmBtn);
    modal.appendChild(ftr);

    ov.appendChild(modal);
    document.body.appendChild(ov);
    // No backdrop-click-to-close — user must hit Confirm
  }

  // ── TMS Sync ─────────────────────────────────────────────────────────────
  var _TMS_SAMPLE = [
    { customer:'Echo Global',      income_per_mi: 2.6 },
    { customer:'Coyote Logistics', income_per_mi: 2.9 },
    { customer:'CH Robinson',      income_per_mi: 3.1 },
    { customer:'Transplace',       income_per_mi: 2.75 },
  ];
  // Simulated My Loads pool for auto-add
  var _MY_LOADS_POOL = [
    { customer:'Echo Global',      income_per_mi:2.6, pickup:'08/02/2026' },
    { customer:'Coyote Logistics', income_per_mi:2.9, pickup:'08/03/2026' },
    { customer:'CH Robinson',      income_per_mi:3.1, pickup:'08/04/2026' },
    { customer:'Transplace',       income_per_mi:2.75,pickup:'08/05/2026' },
  ];

  function _syncTMS(routeId, btnEl) {
    if (_syncingRoutes.has(routeId)) return;
    _syncingRoutes.add(routeId);
    var origInner = btnEl ? btnEl.innerHTML : '';
    if (btnEl) {
      btnEl.style.opacity = '0.5';
      btnEl.style.pointerEvents = 'none';
      btnEl.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation:_efDotPulse 0.8s ease-in-out infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>';
    }
    setTimeout(function() {
      var loads = loadsOf(routeId);
      var updated = []; // loads whose TMS data changed
      var added   = []; // loads auto-added from My Loads

      // Step 1: Update existing TMS loads — find first Dispatched/Booked and advance it
      var advIdx = loads.findIndex(function(l){ return l.status === 'Booked' || l.status === 'Dispatched'; });
      if (advIdx >= 0) {
        var advLd = loads[advIdx];
        var prevStatus = advLd.status;
        advLd.status = prevStatus === 'Booked' ? 'Dispatched' : 'In Transit';
        advLd.eta = prevStatus === 'Dispatched' ? (function(){ var h=8+Math.floor(Math.random()*4),m=Math.floor(Math.random()*6)*10; return (h<10?'0':'')+h+':'+(m<10?'0':'')+m; })() : '--';
        updated.push({ load: advLd, from: prevStatus, to: advLd.status });
      }

      // Step 2: Auto-add from My Loads if toggle is ON
      if (_autoAddFromLoads[routeId]) {
        var unbIdx = loads.findIndex(function(l){ return l.status === 'Unbooked'; });
        if (unbIdx >= 0) {
          var unbLd  = loads[unbIdx];
          var pool   = _MY_LOADS_POOL[unbIdx % _MY_LOADS_POOL.length];
          unbLd.status   = 'Booked';
          unbLd.customer = pool.customer;
          unbLd.income   = Math.round(unbLd.miles * pool.income_per_mi);
          unbLd.pickup   = pool.pickup;
          added.push({ load: unbLd });
        }
      }

      _syncDone[routeId] = true;
      setState({});
      _syncingRoutes.delete(routeId);
      _showSyncResultNotif(updated, added);
    }, 1500);
  }

  function _showSyncResultNotif(updated, added) {
    var ex = document.getElementById('_ef-sync-notif'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var notif = document.createElement('div'); notif.id = '_ef-sync-notif';
    notif.style.cssText = 'position:fixed;top:20px;right:24px;z-index:9040;background:#131F27;border:1px solid rgba(63,194,129,.3);border-radius:12px;padding:14px 16px;width:320px;box-shadow:0 8px 32px rgba(0,0,0,.7);display:flex;flex-direction:column;gap:10px';

    var STATUS_COLOR = { 'Booked':'#7BCBCB','Dispatched':'#3FC281','In Transit':'#fbbf24','Delivered':'#8B939B' };

    var nothingChanged = !updated.length && !added.length;
    var html =
      '<div style="display:flex;align-items:center;gap:8px">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="'+(nothingChanged?'#6B7373':'#3FC281')+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>' +
        '<span style="font:800 12px '+F+';color:#FBFBFB">Refresh complete</span>' +
        '<button id="_ef-sn-x" style="margin-left:auto;background:none;border:none;color:#6B7373;cursor:pointer;font-size:13px;padding:0">✕</button>' +
      '</div>' +
      (nothingChanged
        ? '<div style="font:400 11px '+F+';color:#6B7373;display:flex;align-items:center;gap:6px">' +
            '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#3FC281" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
            'All loads are up to date — no changes from TMS.' +
          '</div>'
        : '');

    // Updated section
    if (updated.length) {
      html += '<div style="display:flex;flex-direction:column;gap:6px">' +
        '<div style="font:700 9px '+F+';letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.25)">Updated from TMS</div>';
      updated.forEach(function(u) {
        var fc = STATUS_COLOR[u.to] || '#FBFBFB';
        html +=
          '<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:9px 11px">' +
            '<div style="font:600 11px '+F+';color:#FBFBFB;margin-bottom:4px">'+u.load.origin+' → '+u.load.dest+'</div>' +
            '<div style="display:flex;align-items:center;gap:6px">' +
              '<span style="font:400 10px '+F+';color:rgba(255,255,255,.3);text-decoration:line-through">'+u.from+'</span>' +
              '<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#6B7373" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>' +
              '<span style="font:700 10px '+F+';color:'+fc+'">'+u.to+'</span>' +
              (u.load.eta && u.load.eta !== '--' ? '<span style="margin-left:auto;font:600 10px \'JetBrains Mono\',monospace;color:rgba(255,255,255,.4)">ETA '+u.load.eta+'</span>' : '') +
            '</div>' +
          '</div>';
      });
      html += '</div>';
    }

    // Added section
    if (added.length) {
      html += '<div style="display:flex;flex-direction:column;gap:6px">' +
        '<div style="font:700 9px '+F+';letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.25)">Added from My Loads</div>';
      added.forEach(function(a) {
        var rpm = a.load.miles > 0 ? (a.load.income / a.load.miles).toFixed(2) : '--';
        html +=
          '<div style="background:rgba(39,167,103,.06);border:1px solid rgba(39,167,103,.2);border-radius:8px;padding:9px 11px">' +
            '<div style="font:600 11px '+F+';color:#FBFBFB;margin-bottom:4px">'+a.load.origin+' → '+a.load.dest+'</div>' +
            '<div style="display:flex;align-items:center;gap:8px">' +
              '<span style="font:700 10px '+F+';color:#3FC281">'+a.load.customer+'</span>' +
              '<span style="font:600 10px \'JetBrains Mono\',monospace;color:#3FC281">$'+a.load.income.toLocaleString('en-US')+'</span>' +
              '<span style="font:400 10px \'JetBrains Mono\',monospace;color:#7BCBCB;margin-left:auto">$'+rpm+'/mi</span>' +
            '</div>' +
          '</div>';
      });
      html += '</div>';
    }

    notif.innerHTML = html;
    document.body.appendChild(notif);
    notif.querySelector('#_ef-sn-x').addEventListener('click', function(){ notif.remove(); });
    setTimeout(function(){ if(notif.parentNode) notif.remove(); }, 8000);
  }

  function _openLaneLoads(rId, lIdx, originCity, destCity) {
    var ex = document.getElementById('_ef-ll'); if (ex) ex.remove();
    var _llBaseKey = rId + '_' + lIdx;
    var dest = destCity || 'Dallas, TX';
    var F = 'Nunito,system-ui';

    // Get route equipment type for pre-seeded filter
    var _rte = (ROUTES||[]).find(function(r){ return r.id===rId; }) || {};
    var _routeEqType = _rte.equipType || _rte.equipmentType || 'Van';

    function _warnToast(msg) {
      var _wid = '_ef-ll-warn';
      var ex = document.getElementById(_wid); if (ex) ex.remove();
      var t = document.createElement('div');
      t.id = _wid;
      t.style.cssText = 'position:fixed;top:24px;left:50%;transform:translateX(-50%);z-index:10001;background:#131F27;border:1px solid rgba(123,203,203,.25);border-radius:10px;padding:12px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,.75);min-width:340px;max-width:480px';
      t.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7BCBCB" stroke-width="2" stroke-linecap="round" style="flex:none"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
        '<span style="flex:1;font:400 12px Nunito,system-ui;color:#DDE3E9">' + msg + '</span>' +
        '<button onclick="var e=document.getElementById(\'_ef-ll-warn\');if(e)e.remove()" style="background:none;border:none;color:#6B7373;cursor:pointer;font-size:17px;padding:0;line-height:1;flex:none">×</button>';
      document.body.appendChild(t);
      setTimeout(function(){ var e=document.getElementById(_wid); if(e) e.remove(); }, 4000);
    }

    // All loads – single income value (actual rate), route: null for all ("No route")
    // laneLoad 0: WITH driver/truck/trailer · laneLoad 1: unassigned
    var ALL_LOADS = [
      { id:'ef-cc80f47', origin:originCity,    dest:dest,                 miles:245, income:686,  customer:'FreightQuote',    pickup:'08/01/2026', pickupTime:'08:00 AM', delivery:'08/02/2026', deliveryTime:'05:00 PM', onTime:'On time', status:'Unbooked',   route:null, equipmentType:_routeEqType, trailer:'TRL-9203', stops:1, driver:'Marcus Reed',   truck:'TRK-4821', laneLoad:true  },
      { id:'ef-38a5c6e', origin:originCity,    dest:dest,                 miles:258, income:723,  customer:'Echo Global',     pickup:'08/02/2026', pickupTime:'09:00 AM', delivery:'08/03/2026', deliveryTime:'04:00 PM', onTime:'On time', status:'Unbooked',   route:'R-2601', equipmentType:'Van',     trailer:'—',        stops:1, driver:'—',            truck:'—',        laneLoad:true  },
      { id:'ef-ab12c3d', origin:'Phoenix, AZ', dest:'Los Angeles, CA',    miles:372, income:930,  customer:'C.H. Robinson',   pickup:'08/03/2026', pickupTime:'07:00 AM', delivery:'08/04/2026', deliveryTime:'06:00 PM', onTime:'On time', status:'Booked',     route:null, equipmentType:'Reefer',  trailer:'—',        stops:2, driver:'—',            truck:'—',        laneLoad:false },
      { id:'ef-ef45g6h', origin:'Denver, CO',  dest:'Salt Lake City, UT', miles:525, income:1260, customer:'Echo Global',     pickup:'08/04/2026', pickupTime:'06:00 AM', delivery:'08/06/2026', deliveryTime:'03:00 PM', onTime:'On time', status:'In Transit', route:null, equipmentType:'Flatbed', trailer:'TRL-7714', stops:3, driver:'James Wilson', truck:'TRK-3201', laneLoad:false },
      { id:'ef-ij78k9l', origin:'Chicago, IL', dest:'Detroit, MI',        miles:281, income:703,  customer:'Coyote Logistics',pickup:'08/05/2026', pickupTime:'10:00 AM', delivery:'08/05/2026', deliveryTime:'07:00 PM', onTime:'On time', status:'Delivered',  route:null, equipmentType:'Van',     trailer:'TRL-2231', stops:1, driver:'Sarah Chen',   truck:'TRK-5507', laneLoad:false },
      { id:'ef-mn01o2p', origin:'Houston, TX', dest:'Dallas, TX',         miles:240, income:600,  customer:'FreightQuote',    pickup:'08/06/2026', pickupTime:'08:00 AM', delivery:'08/06/2026', deliveryTime:'04:00 PM', onTime:'On time', status:'Offer',      route:null, equipmentType:'Reefer',  trailer:'—',        stops:1, driver:'—',            truck:'—',        laneLoad:false },
      { id:'ef-qr34s5t', origin:'Seattle, WA', dest:'Portland, OR',       miles:174, income:435,  customer:'Transplace',      pickup:'08/07/2026', pickupTime:'07:00 AM', delivery:'08/07/2026', deliveryTime:'02:00 PM', onTime:'Late 1h', status:'Assigned',   route:null, equipmentType:'Van',     trailer:'TRL-5530', stops:1, driver:'Carlos Rivera',truck:'TRK-2098', laneLoad:false },
      { id:'ef-uv56w7x', origin:'Miami, FL',   dest:'Atlanta, GA',        miles:662, income:1655, customer:'Echo Global',     pickup:'08/08/2026', pickupTime:'06:00 AM', delivery:'08/09/2026', deliveryTime:'08:00 PM', onTime:'On time', status:'Booked',     route:null, equipmentType:'Reefer',  trailer:'—',        stops:2, driver:'—',            truck:'—',        laneLoad:false },
    ];

    var _statusTab = 'all';
    var _searchVal = '';
    var _llFilters = [
      { key:'origin',        label:'Origin',         value: originCity.split(',')[0].trim(), operator:'contains' },
      { key:'dest',          label:'Destination',    value: dest.split(',')[0].trim(),       operator:'contains' },
      { key:'route',         label:'Route',          value: 'No route',                     operator:'is' },
      { key:'equipmentType', label:'Equipment type', value: _routeEqType,                   operator:'is' },
    ];

    function _getActiveCols() {
      return state.columnOrder
        .filter(function(k){ return !state.hiddenCols.has(k); })
        .map(function(k){ return LOAD_COLS_BY_KEY[k]; })
        .filter(Boolean);
    }

    function _getOperators(key) {
      if (key === 'route') return [{value:'is',label:'is'},{value:'is not',label:'is not'}];
      if (key === 'equipmentType' || key === 'status' || key === 'onTime') return [{value:'is',label:'is'},{value:'is not',label:'is not'}];
      return [{value:'contains',label:'contains'},{value:'is',label:'is'},{value:'is not',label:'is not'},{value:'starts with',label:'starts with'}];
    }

    function _matchFilter(f, ld) {
      if (!f.value) return true;
      var op = f.operator || 'contains';
      if (f.key === 'route') {
        var isNoRoute = f.value.toLowerCase().trim() === 'no route';
        var ldNull = ld.route === null || ld.route === '';
        if (op === 'is')     return isNoRoute ? ldNull : (ld.route||'').toLowerCase() === f.value.toLowerCase();
        if (op === 'is not') return isNoRoute ? !ldNull : (ld.route||'').toLowerCase() !== f.value.toLowerCase();
        return true;
      }
      var rawMap = {origin:ld.origin,dest:ld.dest,customer:ld.customer,id:ld.id,equipmentType:ld.equipmentType||'',status:ld.status,onTime:ld.onTime,driver:ld.driver,truck:ld.truck,trailer:ld.trailer};
      var fv = (rawMap[f.key]||'').toLowerCase();
      var fq = f.value.toLowerCase();
      if (op === 'contains')    return fv.indexOf(fq) >= 0;
      if (op === 'is')          return fv === fq;
      if (op === 'is not')      return fv !== fq;
      if (op === 'starts with') return fv.startsWith(fq);
      return true;
    }

    function _getVisible() {
      return ALL_LOADS.filter(function(ld) {
        for (var fi = 0; fi < _llFilters.length; fi++) {
          if (!_matchFilter(_llFilters[fi], ld)) return false;
        }
        if (_statusTab !== 'all') {
          var tabMap = {'on-road':'In Transit','offer':'Offer','booked':'Booked','assigned':'Assigned','in-transit':'In Transit','delivered':'Delivered','invoiced':'Invoiced','paid':'Paid','canceled':'Canceled','unbooked':'Unbooked'};
          if (tabMap[_statusTab] && ld.status !== tabMap[_statusTab]) return false;
        }
        if (_searchVal) {
          var q = _searchVal.toLowerCase();
          if (ld.id.indexOf(q)<0 && ld.origin.toLowerCase().indexOf(q)<0 && ld.dest.toLowerCase().indexOf(q)<0 && ld.customer.toLowerCase().indexOf(q)<0) return false;
        }
        return true;
      });
    }

    // Closing the modal marks lane loads as "seen" → removes yellow dot automatically
    function _markSeen() {
      ALL_LOADS.forEach(function(ld, idx) { if (ld.laneLoad) _lbIgnored.add(_llBaseKey+'_load'+idx); });
      _lbIgnored.add(_llBaseKey);
      var _ab = document.getElementById('_ef-lb-add');
      if (_ab) { var _d = _ab.querySelector('span[style*="FBB303"]'); if (_d) _d.remove(); }
    }

    function _onTimeFg(ot) {
      return ot==='On time' ? '#3FC281' : (ot && ot.startsWith('Late') ? '#EB4343' : '#6B7373');
    }

    function _miniAvatar(name) {
      if (!name || name==='—') return '<span style="color:#4A5A6A;font:400 11.5px '+F+'">—</span>';
      var colors=['#7BCBCB','#3FC281','#FBB303','#B48CE0','#EB8A6B'];
      var ci = name.charCodeAt(0) % colors.length;
      var init = name.split(' ').map(function(p){return p[0]||'';}).join('').slice(0,2).toUpperCase();
      return '<span style="display:inline-flex;align-items:center;gap:5px">'+
        '<span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:'+colors[ci]+';font:800 8px '+F+';color:#0D141B;flex:none">'+init+'</span>'+
        '<span style="color:#C9CED2;font:400 11.5px '+F+'">'+name.split(' ')[0]+'</span>'+
        '</span>';
    }

    var ov = document.createElement('div'); ov.id = '_ef-ll';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9010;background:rgba(6,12,17,.6);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1px solid rgba(255,255,255,.1);border-radius:14px;width:min(96vw,1360px);max-height:88vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 64px rgba(0,0,0,.9)';

    // ── Top bar ──
    var topBar = document.createElement('div');
    topBar.style.cssText = 'display:flex;align-items:center;gap:10px;padding:12px 20px;border-bottom:1px solid rgba(255,255,255,.07);flex:none;background:#0D141B';

    var titleWrap = document.createElement('div');
    titleWrap.style.cssText = 'display:flex;align-items:center;gap:8px;flex-shrink:0';
    titleWrap.innerHTML = ICON.truck + '<span style="font:800 15px '+F+';color:#FBFBFB">My Loads</span>';

    var srchWrap = document.createElement('div');
    srchWrap.style.cssText = 'flex:1;display:flex;align-items:center;gap:8px;background:#101B23;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:0 12px;height:34px;min-width:0';
    srchWrap.innerHTML = ICON.search;
    var srchInp = document.createElement('input');
    srchInp.placeholder = 'Search loads, lanes, customers…';
    srchInp.style.cssText = 'flex:1;background:none;border:none;outline:none;font:400 12px '+F+';color:#DDE3E9;min-width:0';
    srchWrap.appendChild(srchInp);

    var resultsBadge = document.createElement('div');
    resultsBadge.style.cssText = 'display:flex;align-items:center;gap:6px;padding:0 12px;height:34px;border-radius:8px;background:#101B23;border:1px solid rgba(255,255,255,.1);font:700 12px '+F+';color:#8B939B;flex-shrink:0;white-space:nowrap';
    resultsBadge.innerHTML = ICON.search + '<span id="_ef-ll-rcount">Results: 0</span>';

    var syncBtn = document.createElement('div');
    syncBtn.style.cssText = 'display:flex;align-items:center;gap:7px;padding:0 12px;height:34px;border-radius:999px;border:1px solid rgba(255,255,255,.1);cursor:pointer;flex-shrink:0';
    syncBtn.innerHTML = ICON.refresh + '<div style="display:flex;flex-direction:column;gap:2px"><span style="font:800 12px '+F+';color:#FBFBFB;line-height:1">Refresh</span><span style="font:400 10px '+F+';color:#6B7373;line-height:1">DataTruck · Updated 3 min ago</span></div>';

    // Changelog history button
    var changelogBtn = document.createElement('div');
    changelogBtn.title = 'Changelog history';
    changelogBtn.style.cssText = 'width:34px;height:34px;display:grid;place-items:center;border-radius:8px;border:1px solid rgba(255,255,255,.1);cursor:pointer;color:#8B939B;flex-shrink:0;transition:background .12s,border-color .12s';
    changelogBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
    changelogBtn.addEventListener('mouseenter', function(){ changelogBtn.style.background='rgba(255,255,255,.06)'; changelogBtn.style.borderColor='rgba(255,255,255,.22)'; });
    changelogBtn.addEventListener('mouseleave', function(){ changelogBtn.style.background=''; changelogBtn.style.borderColor='rgba(255,255,255,.1)'; });

    // Columns button — reads/writes same state as MyLoads view
    var _colsOpen = false, _colsPanelEl = null, _colsOutsideH = null;
    var colsBtnWrap = document.createElement('div');
    colsBtnWrap.style.cssText = 'position:relative;flex-shrink:0';
    var colsBtn = document.createElement('div');
    colsBtn.style.cssText = 'display:flex;align-items:center;gap:7px;padding:0 12px;height:34px;border-radius:8px;border:1px solid rgba(255,255,255,.1);cursor:pointer;font:700 12px '+F+';color:#E3E6E8;white-space:nowrap;user-select:none';
    colsBtn.innerHTML = ICON.columns+' Columns '+ICON.chevDown;
    colsBtnWrap.appendChild(colsBtn);

    function _buildColsPanel() {
      if (_colsPanelEl) { _colsPanelEl.remove(); _colsPanelEl=null; }
      if (!_colsOpen) { if (_colsOutsideH){ document.removeEventListener('click',_colsOutsideH,true); _colsOutsideH=null; } return; }
      var panel = document.createElement('div');
      panel.style.cssText = 'position:absolute;top:38px;right:0;z-index:30;background:#17242E;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:10px;box-shadow:0 8px 24px rgba(0,0,0,.45);width:230px';
      panel.addEventListener('click', function(e){ e.stopPropagation(); });
      var hint = document.createElement('div'); hint.style.cssText='font:700 11px '+F+';color:#6B7373;padding:2px 8px 8px'; hint.textContent='Drag to reorder · check to show/hide';
      panel.appendChild(hint);
      var list = document.createElement('div'); list.style.cssText='display:flex;flex-direction:column;gap:2px;max-height:340px;overflow-y:auto';
      var _dKey = null;
      state.columnOrder.forEach(function(key) {
        var col = LOAD_COLS_BY_KEY[key]; if (!col) return;
        var hidden = state.hiddenCols.has(key);
        var r = document.createElement('div'); r.draggable=true;
        r.style.cssText = 'display:flex;align-items:center;gap:8px;padding:7px 8px;border-radius:6px;cursor:grab;opacity:'+(hidden?'.5':'1');
        var gp=document.createElement('span'); gp.style.cssText='color:#6B7373;display:flex;flex:none'; gp.innerHTML=ICON.grip;
        var cb=document.createElement('input'); cb.type='checkbox'; cb.checked=!hidden; cb.style.cssText='flex:none;cursor:pointer';
        (function(k){ cb.addEventListener('change', function(){ var hc=new Set(state.hiddenCols); if(hc.has(k)) hc.delete(k); else hc.add(k); setState({hiddenCols:hc}); _rebuildTable(); _buildColsPanel(); }); })(key);
        var lb=document.createElement('span'); lb.style.cssText='font:700 12.5px '+F; lb.textContent=col.label;
        r.appendChild(gp); r.appendChild(cb); r.appendChild(lb);
        (function(k){
          r.addEventListener('dragstart',function(e){ _dKey=k; e.dataTransfer.effectAllowed='move'; });
          r.addEventListener('dragover', function(e){ e.preventDefault(); });
          r.addEventListener('drop',    function(e){ e.preventDefault(); if(!_dKey||_dKey===k)return; var order=state.columnOrder.slice(),from=order.indexOf(_dKey),to=order.indexOf(k); order.splice(from,1);order.splice(to,0,_dKey); _dKey=null; setState({columnOrder:order}); _rebuildTable(); _buildColsPanel(); });
        })(key);
        list.appendChild(r);
      });
      panel.appendChild(list); _colsPanelEl=panel; colsBtnWrap.appendChild(panel);
      if (_colsOutsideH) document.removeEventListener('click',_colsOutsideH,true);
      _colsOutsideH = function(e){ if (!colsBtnWrap.contains(e.target)){ _colsOpen=false; _buildColsPanel(); } };
      setTimeout(function(){ document.addEventListener('click',_colsOutsideH,true); }, 0);
    }
    colsBtn.addEventListener('click', function(e){ e.stopPropagation(); _colsOpen=!_colsOpen; _buildColsPanel(); });

    var closeX = document.createElement('button');
    closeX.style.cssText = 'width:30px;height:30px;display:grid;place-items:center;border-radius:8px;cursor:pointer;color:#8B939B;border:1px solid rgba(255,255,255,.1);background:none;font-size:14px;flex-shrink:0';
    closeX.textContent = '✕';
    closeX.addEventListener('click', function(){ _markSeen(); ov.remove(); });

    topBar.appendChild(titleWrap); topBar.appendChild(srchWrap); topBar.appendChild(resultsBadge);
    topBar.appendChild(syncBtn); topBar.appendChild(colsBtnWrap); topBar.appendChild(closeX);
    modal.appendChild(topBar);

    // ── Status tabs ──
    var STATUS_TABS = [{id:'all',label:'All Loads'},{id:'on-road',label:'On The Road'},{id:'offer',label:'Offer'},{id:'booked',label:'Booked'},{id:'assigned',label:'Assigned'},{id:'in-transit',label:'In Transit'},{id:'delivered',label:'Delivered'},{id:'invoiced',label:'Invoiced'},{id:'paid',label:'Paid'},{id:'canceled',label:'Canceled'}];
    var tabsBar = document.createElement('div');
    tabsBar.style.cssText = 'display:flex;align-items:center;padding:0 20px 0 0;border-bottom:1px solid rgba(255,255,255,.07);flex:none;background:#0D141B';
    // scrollable tabs sub-container
    var _tabsScroll = document.createElement('div');
    _tabsScroll.style.cssText = 'display:flex;align-items:center;overflow-x:auto;flex:1;padding-left:20px';
    var _tabEls = [];
    STATUS_TABS.forEach(function(t) {
      var tab = document.createElement('div');
      var _isActive = t.id === _statusTab;
      tab.style.cssText = 'padding:10px 14px;font:700 12px '+F+';cursor:pointer;white-space:nowrap;border-bottom:2px solid '+(_isActive?'#27A767':'transparent')+';color:'+(_isActive?'#27A767':'#8B939B')+';flex-shrink:0;transition:color .12s';
      tab.textContent = t.label; tab.dataset.tid = t.id;
      _tabEls.push(tab); _tabsScroll.appendChild(tab);
    });
    tabsBar.appendChild(_tabsScroll);
    // Funnel / filter button — top right of tabs bar
    var funnelBtn = document.createElement('div');
    funnelBtn.id = '_ef-ll-funnel';
    funnelBtn.style.cssText = 'display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:7px;border:1px solid rgba(255,255,255,.12);background:transparent;cursor:pointer;flex-shrink:0;margin-left:12px;transition:border-color .15s,background .15s';
    funnelBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>';
    funnelBtn.title = 'Add filter';
    funnelBtn.addEventListener('mouseenter', function(){ funnelBtn.style.background='rgba(255,255,255,.06)'; funnelBtn.style.borderColor='rgba(255,255,255,.22)'; });
    funnelBtn.addEventListener('mouseleave', function(){ funnelBtn.style.background='transparent'; funnelBtn.style.borderColor='rgba(255,255,255,.12)'; });
    funnelBtn.addEventListener('click', function(){
      var _oldPop = document.getElementById('_ef-ll-filter-pop'); if (_oldPop) _oldPop.remove();
      filterBar.querySelectorAll('._ef-ll-pop').forEach(function(p){ p.remove(); });
      var _existPending = filterBar.querySelector('._ef-ll-chip-pending');
      if (_existPending) { _existPending.remove(); return; }
      var newKey = 'custom' + Date.now();
      var pendingFilter = { key: newKey, label: 'Field contains', value: '', operator: 'contains' };
      var pendingChip = document.createElement('div');
      pendingChip.className = '_ef-ll-chip _ef-ll-chip-pending';
      pendingChip.style.cssText = 'position:relative;display:inline-flex;align-items:center;gap:0;border-radius:6px;background:rgba(123,203,203,.06);border:1px solid rgba(123,203,203,.2);font:600 11px '+F+';color:#7BCBCB;cursor:pointer;flex-shrink:0';
      var pendingLbl = document.createElement('span');
      pendingLbl.style.cssText = 'padding:4px 10px;white-space:nowrap;color:#6B7373;font-style:italic';
      pendingLbl.textContent = 'New filter…';
      pendingChip.appendChild(pendingLbl);
      var _filterFields = [
        { key:'origin', label:'Origin' }, { key:'dest', label:'Destination' },
        { key:'customer', label:'Customer' }, { key:'status', label:'Status' },
        { key:'route', label:'Related route' }, { key:'equipmentType', label:'Equipment type' },
        { key:'driver', label:'Driver' }, { key:'truck', label:'Unit' },
        { key:'onTime', label:'On time' }, { key:'id', label:'Load ID' }
      ];
      var _popEl = document.createElement('div');
      _popEl.id = '_ef-ll-filter-pop';
      _popEl.className = '_ef-ll-pop';
      _popEl.style.cssText = 'position:fixed;z-index:9020;background:#1A2A35;border:1px solid rgba(255,255,255,.16);border-radius:10px;padding:14px 16px;min-width:270px;box-shadow:0 10px 32px rgba(0,0,0,.65);font-family:'+F;
      _popEl.addEventListener('click', function(e2){ e2.stopPropagation(); });
      var hdr = document.createElement('div');
      hdr.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:12px';
      var hdrLbl = document.createElement('div');
      hdrLbl.style.cssText = 'font:800 13px '+F+';color:#FBFBFB';
      hdrLbl.textContent = 'Add filter';
      var applyBtn = document.createElement('div');
      applyBtn.style.cssText = 'font:800 12px '+F+';color:#27A767;cursor:pointer';
      applyBtn.textContent = 'Apply';
      hdr.appendChild(hdrLbl); hdr.appendChild(applyBtn);
      _popEl.appendChild(hdr);
      // Field selector
      var fieldLbl = document.createElement('div');
      fieldLbl.style.cssText = 'font:600 10px '+F+';color:#5A6A7A;text-transform:uppercase;letter-spacing:.07em;margin-bottom:5px';
      fieldLbl.textContent = 'Field';
      _popEl.appendChild(fieldLbl);
      var fieldSel = document.createElement('select');
      fieldSel.style.cssText = 'width:100%;background:#0E1820;border:1px solid rgba(255,255,255,.15);border-radius:7px;color:#FBFBFB;font:600 12px '+F+';padding:8px 10px;margin-bottom:8px;cursor:pointer;box-sizing:border-box;outline:none';
      _filterFields.forEach(function(ff){ var opt=document.createElement('option'); opt.value=ff.key; opt.textContent=ff.label; fieldSel.appendChild(opt); });
      _popEl.appendChild(fieldSel);
      // Operator selector
      var opLbl = document.createElement('div');
      opLbl.style.cssText = 'font:600 10px '+F+';color:#5A6A7A;text-transform:uppercase;letter-spacing:.07em;margin-bottom:5px';
      opLbl.textContent = 'Condition';
      _popEl.appendChild(opLbl);
      var opSel = document.createElement('select');
      opSel.style.cssText = 'width:100%;background:#0E1820;border:1px solid rgba(255,255,255,.15);border-radius:7px;color:#FBFBFB;font:600 12px '+F+';padding:8px 10px;margin-bottom:8px;cursor:pointer;box-sizing:border-box;outline:none';
      _popEl.appendChild(opSel);
      function _refreshOps() {
        opSel.innerHTML = '';
        _getOperators(fieldSel.value).forEach(function(op){ var opt=document.createElement('option'); opt.value=op.value; opt.textContent=op.label; opSel.appendChild(opt); });
      }
      _refreshOps();
      fieldSel.addEventListener('change', _refreshOps);
      // Value input
      var valLbl = document.createElement('div');
      valLbl.style.cssText = 'font:600 10px '+F+';color:#5A6A7A;text-transform:uppercase;letter-spacing:.07em;margin-bottom:5px';
      valLbl.textContent = 'Value';
      _popEl.appendChild(valLbl);
      var valInp = document.createElement('input');
      valInp.placeholder = 'Filter value…';
      valInp.style.cssText = 'width:100%;background:#0E1820;border:1px solid rgba(255,255,255,.15);border-radius:7px;color:#FBFBFB;font:600 12px '+F+';padding:8px 10px;box-sizing:border-box;outline:none';
      _popEl.appendChild(valInp);
      var removeBtn = document.createElement('div');
      removeBtn.style.cssText = 'font:700 11px '+F+';color:#EB4343;cursor:pointer;margin-top:10px;text-align:center';
      removeBtn.textContent = 'Remove filter';
      _popEl.appendChild(removeBtn);
      function _discard() {
        pendingChip.remove();
        _popEl.remove();
        document.removeEventListener('click', _outside, true);
      }
      function _applyPending() {
        var val = valInp.value.trim();
        if (!val) { _discard(); return; }
        var selField = _filterFields.find(function(ff){ return ff.key === fieldSel.value; });
        pendingFilter.key = fieldSel.value;
        pendingFilter.label = selField ? selField.label : fieldSel.value;
        pendingFilter.operator = opSel.value;
        pendingFilter.value = val;
        _llFilters.push(pendingFilter);
        document.removeEventListener('click', _outside, true);
        pendingChip.remove();
        _popEl.remove();
        _llPage = 1; _buildFilterChips(); _rebuildTable();
      }
      removeBtn.addEventListener('click', _discard);
      applyBtn.addEventListener('click', _applyPending);
      valInp.addEventListener('keydown', function(ev){ if (ev.key === 'Enter') _applyPending(); });
      filterBar.appendChild(pendingChip);
      document.body.appendChild(_popEl);
      setTimeout(function(){
        var r = pendingChip.getBoundingClientRect();
        var popH = _popEl.offsetHeight;
        _popEl.style.top = Math.round(r.top - popH - 6) + 'px';
        _popEl.style.left = Math.round(Math.min(r.left, window.innerWidth - 286)) + 'px';
        valInp.focus();
      }, 0);
      function _outside(e2) {
        if (!pendingChip.contains(e2.target) && !_popEl.contains(e2.target)) { _discard(); }
      }
      setTimeout(function(){ document.addEventListener('click', _outside, true); }, 0);
    });
    tabsBar.appendChild(funnelBtn);
    modal.appendChild(tabsBar);

    // ── Filter chips bar ──
    var filterBar = document.createElement('div');
    filterBar.style.cssText = 'display:flex;align-items:center;gap:6px;padding:8px 20px;border-bottom:1px solid rgba(255,255,255,.06);flex:none;flex-wrap:wrap;background:rgba(0,0,0,.15)';

    function _buildFilterChips() {
      filterBar.querySelectorAll('._ef-ll-chip,._ef-ll-addbtn').forEach(function(c){c.remove();});
      _llFilters.forEach(function(f, fi) {
        if (!f.value) return;
        var chip = document.createElement('div'); chip.className = '_ef-ll-chip';
        chip.style.cssText = 'position:relative;display:inline-flex;align-items:center;gap:0;border-radius:6px;background:rgba(39,167,103,.08);border:1px solid rgba(39,167,103,.25);font:600 11px '+F+';color:#3FC281;cursor:pointer;flex-shrink:0';

        var lbl = document.createElement('span');
        lbl.style.cssText = 'padding:4px 8px 4px 10px;white-space:nowrap;max-width:220px;overflow:hidden;text-overflow:ellipsis';
        lbl.textContent = f.label + ' ' + (f.operator||'contains') + ' "' + f.value + '"';

        var xBtn = document.createElement('span');
        xBtn.style.cssText = 'padding:0 8px;height:100%;display:flex;align-items:center;color:#6B7373;font:700 13px system-ui;cursor:pointer;border-left:1px solid rgba(39,167,103,.15)';
        xBtn.textContent = '×';
        xBtn.addEventListener('click', function(e){
          e.stopPropagation();
          _llFilters[fi].value = ''; _llPage = 1; _buildFilterChips(); _rebuildTable();
        });

        chip.appendChild(lbl); chip.appendChild(xBtn);

        // ── Popover ──
        (function(filter, idx) {
          var _popEl = null;

          function _closeAll() {
            filterBar.querySelectorAll('._ef-ll-pop').forEach(function(p){ p.remove(); });
            _popEl = null;
          }

          function _openPop(e) {
            e.stopPropagation();
            if (_popEl) { _closeAll(); return; }
            _closeAll();

            _popEl = document.createElement('div');
            _popEl.className = '_ef-ll-pop';
            _popEl.style.cssText = 'position:absolute;top:calc(100% + 6px);left:0;z-index:600;background:#1A2A35;border:1px solid rgba(255,255,255,.16);border-radius:10px;padding:14px 16px;min-width:260px;box-shadow:0 10px 32px rgba(0,0,0,.65);font-family:'+F;
            _popEl.addEventListener('click', function(e2){ e2.stopPropagation(); });

            // Header
            var hdr = document.createElement('div');
            hdr.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:12px';
            var hdrLbl = document.createElement('div');
            hdrLbl.style.cssText = 'font:800 13px '+F+';color:#FBFBFB';
            hdrLbl.textContent = filter.label;
            var applyBtn = document.createElement('div');
            applyBtn.style.cssText = 'font:800 12px '+F+';color:#27A767;cursor:pointer';
            applyBtn.textContent = 'Apply';
            hdr.appendChild(hdrLbl); hdr.appendChild(applyBtn);
            _popEl.appendChild(hdr);

            // Operator select
            var ops = _getOperators(filter.key);
            var opSel = document.createElement('select');
            opSel.style.cssText = 'width:100%;background:#0E1820;border:1px solid rgba(255,255,255,.15);border-radius:7px;color:#FBFBFB;font:600 12px '+F+';padding:8px 10px;margin-bottom:8px;cursor:pointer;box-sizing:border-box;outline:none';
            ops.forEach(function(op){
              var opt = document.createElement('option');
              opt.value = op.value; opt.textContent = op.label;
              if (op.value === (filter.operator || ops[0].value)) opt.selected = true;
              opSel.appendChild(opt);
            });
            _popEl.appendChild(opSel);

            // Value input
            var valInp = document.createElement('input');
            valInp.value = filter.value;
            valInp.style.cssText = 'width:100%;background:#0E1820;border:1px solid rgba(255,255,255,.15);border-radius:7px;color:#FBFBFB;font:600 12px '+F+';padding:8px 10px;box-sizing:border-box;outline:none';
            valInp.placeholder = 'Filter value…';
            _popEl.appendChild(valInp);

            // Remove filter
            var removeBtn = document.createElement('div');
            removeBtn.style.cssText = 'font:700 11px '+F+';color:#EB4343;cursor:pointer;margin-top:10px;text-align:center';
            removeBtn.textContent = 'Remove filter';
            removeBtn.addEventListener('click', function(){
              _llFilters[idx].value = ''; _llPage = 1; _closeAll(); _buildFilterChips(); _rebuildTable();
            });
            _popEl.appendChild(removeBtn);

            function _apply() {
              _llFilters[idx].operator = opSel.value;
              _llFilters[idx].value = valInp.value.trim();
              _llPage = 1; _closeAll(); _buildFilterChips(); _rebuildTable();
            }
            applyBtn.addEventListener('click', _apply);
            valInp.addEventListener('keydown', function(ev){ if (ev.key === 'Enter') _apply(); });

            chip.appendChild(_popEl);
            setTimeout(function(){ valInp.focus(); valInp.select(); }, 0);

            // Outside click closes
            function _outside(e2) {
              if (!chip.contains(e2.target)) { _closeAll(); document.removeEventListener('click', _outside, true); }
            }
            setTimeout(function(){ document.addEventListener('click', _outside, true); }, 0);
          }

          lbl.addEventListener('click', _openPop);
          chip.addEventListener('click', function(e){ if (e.target === chip) _openPop(e); });
        })(f, fi);

        filterBar.appendChild(chip);
      });
    }
    _buildFilterChips();
    modal.appendChild(filterBar);

    // ── Table (horizontally scrollable, dynamic columns) ──
    var tblWrap = document.createElement('div');
    tblWrap.style.cssText = 'overflow:auto;flex:1'; // both-axis scroll
    var tblInner = document.createElement('div');
    tblInner.style.cssText = 'min-width:max-content;display:flex;flex-direction:column';
    tblWrap.appendChild(tblInner);
    modal.appendChild(tblWrap);

    // ── Pagination footer ──
    var _llPage = 1;
    var _llPerPage = 10;
    var pgFooter = document.createElement('div');
    pgFooter.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:10px 20px;border-top:1px solid rgba(255,255,255,.07);background:#0D141B;flex:none';
    var pgInfo = document.createElement('span');
    pgInfo.style.cssText = 'font:400 12px '+F+';color:#6B7373';
    var pgControls = document.createElement('div');
    pgControls.style.cssText = 'display:flex;align-items:center;gap:4px';
    pgFooter.appendChild(pgInfo); pgFooter.appendChild(pgControls);
    modal.appendChild(pgFooter);

    function _renderPagination(total) {
      var totalPages = Math.max(1, Math.ceil(total / _llPerPage));
      if (_llPage > totalPages) _llPage = totalPages;
      pgInfo.textContent = 'Page ' + _llPage + ' of ' + totalPages + ' · ' + total + ' load' + (total===1?'':'s');
      pgControls.innerHTML = '';
      var _btnStyle = function(active) {
        return 'width:30px;height:30px;display:grid;place-items:center;border-radius:6px;border:1px solid '+(active?'#27A767':'rgba(255,255,255,.1)')+';background:'+(active?'rgba(39,167,103,.15)':'transparent')+';color:'+(active?'#27A767':'#8B939B')+';font:700 12px '+F+';cursor:pointer';
      };
      // Prev
      var prevBtn = document.createElement('button');
      prevBtn.style.cssText = 'height:30px;padding:0 10px;display:flex;align-items:center;gap:4px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:transparent;color:'+(_llPage>1?'#8B939B':'#3C454D')+';font:600 12px '+F+';cursor:'+(_llPage>1?'pointer':'default');
      prevBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M15 18l-6-6 6-6"></path></svg>';
      if (_llPage > 1) prevBtn.addEventListener('click', function(){ _llPage--; _rebuildTable(); });
      pgControls.appendChild(prevBtn);
      // Page number buttons (show up to 5)
      var startP = Math.max(1, _llPage - 2), endP = Math.min(totalPages, startP + 4);
      if (endP - startP < 4) startP = Math.max(1, endP - 4);
      for (var p = startP; p <= endP; p++) {
        (function(pn){
          var btn = document.createElement('button');
          btn.style.cssText = _btnStyle(pn === _llPage);
          btn.textContent = pn;
          btn.addEventListener('click', function(){ _llPage = pn; _rebuildTable(); });
          pgControls.appendChild(btn);
        })(p);
      }
      // Next
      var nextBtn = document.createElement('button');
      nextBtn.style.cssText = 'height:30px;padding:0 10px;display:flex;align-items:center;gap:4px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:transparent;color:'+(_llPage<totalPages?'#8B939B':'#3C454D')+';font:600 12px '+F+';cursor:'+(_llPage<totalPages?'pointer':'default');
      nextBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 18l6-6-6-6"></path></svg>';
      if (_llPage < totalPages) nextBtn.addEventListener('click', function(){ _llPage++; _rebuildTable(); });
      pgControls.appendChild(nextBtn);
    }

    function _statusColor(st) {
      if (st==='Unbooked') return {c:'#FBB303',bg:'rgba(251,179,3,.1)',bd:'rgba(251,179,3,.25)'};
      if (st==='Booked')   return {c:'#27A767',bg:'rgba(39,167,103,.1)',bd:'rgba(39,167,103,.25)'};
      if (st==='In Transit'||st==='On The Road') return {c:'#7BCBCB',bg:'rgba(123,203,203,.1)',bd:'rgba(123,203,203,.25)'};
      if (st==='Delivered'||st==='Paid')  return {c:'#3FC281',bg:'rgba(63,194,129,.1)',bd:'rgba(63,194,129,.25)'};
      if (st==='Offer')    return {c:'#7BCBCB',bg:'rgba(123,203,203,.08)',bd:'rgba(123,203,203,.2)'};
      if (st==='Assigned') return {c:'#ABABAB',bg:'rgba(255,255,255,.07)',bd:'rgba(255,255,255,.15)'};
      return {c:'#8B939B',bg:'rgba(255,255,255,.05)',bd:'rgba(255,255,255,.12)'};
    }

    function _rebuildTable() {
      var visible = _getVisible();
      var rcount = document.getElementById('_ef-ll-rcount');
      if (rcount) rcount.textContent = 'Results: ' + visible.length;
      _renderPagination(visible.length);
      var pageLoads = visible.slice((_llPage-1)*_llPerPage, _llPage*_llPerPage);

      var cols = _getActiveCols();
      var gridTpl = cols.map(function(c){ return (typeof c.width==='number' ? c.width+'px' : c.width); }).join(' ') + ' 130px';

      tblInner.innerHTML = '';

      // Header
      var tblHead = document.createElement('div');
      tblHead.style.cssText = 'display:grid;grid-template-columns:'+gridTpl+';padding:0 20px;background:#131F27;border-bottom:1px solid rgba(255,255,255,.07);position:sticky;top:0;z-index:2';
      var _hpS = 'padding:10px 8px 10px 0;font:800 11px '+F+';color:#6B7373;display:flex;align-items:center;gap:3px;white-space:nowrap;letter-spacing:.02em';
      cols.forEach(function(c){
        var h=document.createElement('div'); h.style.cssText=_hpS;
        h.innerHTML = c.label + ' <span style="font-size:10px;opacity:.7">↕</span>';
        tblHead.appendChild(h);
      });
      var actH=document.createElement('div'); actH.style.cssText=_hpS; tblHead.appendChild(actH);
      tblInner.appendChild(tblHead);

      if (!pageLoads.length) {
        var empty=document.createElement('div');
        empty.style.cssText='text-align:center;padding:48px 20px;font:400 13px '+F+';color:#6B7373';
        empty.innerHTML='<div style="font-weight:700;margin-bottom:6px;font-size:14px">No results found for the selected filters.</div><div>Try adjusting or clearing your filters to see more results.</div>';
        tblInner.appendChild(empty); return;
      }

      pageLoads.forEach(function(ld) {
        var sc = _statusColor(ld.status);
        var rpm = (ld.income / ld.miles).toFixed(2);

        function _cell(html, extraStyle) {
          var d=document.createElement('div');
          d.style.cssText='padding:13px 8px 13px 0;'+(extraStyle||'');
          d.innerHTML=html; return d;
        }

        var cellMap = {
          id: (function(){
            var d=document.createElement('div'); d.style.cssText='padding:13px 8px 13px 0;display:flex;align-items:center;gap:6px';
            if (ld.laneLoad){ var dot=document.createElement('span'); dot.style.cssText='width:7px;height:7px;border-radius:50%;background:#FBB303;flex:none;box-shadow:0 0 5px rgba(251,179,3,.5)'; d.appendChild(dot); }
            var s=document.createElement('span'); s.style.cssText='font:800 12px monospace;color:#7BCBCB'; s.textContent=ld.id; d.appendChild(s); return d;
          })(),
          status:       _cell('<span style="font:700 10px '+F+';color:'+sc.c+';background:'+sc.bg+';border:1px solid '+sc.bd+';border-radius:4px;padding:2px 7px;white-space:nowrap">'+ld.status+'</span>'),
          route:        _cell(ld.route ? '<span style="font:600 12px '+F+';color:#7BCBCB">'+ld.route+'</span>' : '<span style="font:600 12px '+F+';color:#6B7373;font-style:italic">No route</span>'),
          origin:       _cell('<span style="font:600 12.5px '+F+';color:#7BCBCB">'+ld.origin+'</span>'),
          dest:         _cell('<span style="font:600 12.5px '+F+';color:#7BCBCB">'+ld.dest+'</span>'),
          miles:        _cell('<span style="font:700 12.5px '+F+'">'+ld.miles.toLocaleString('en-US')+' mi</span>'),
          pickup:       _cell('<div style="font:700 12px '+F+'">'+ld.pickup+'</div><div style="color:#6B7373;font-size:10.5px;font-family:\'JetBrains Mono\',monospace">'+ld.pickupTime+'</div>'),
          delivery:     _cell('<div style="font:700 12px '+F+'">'+ld.delivery+'</div><div style="color:#6B7373;font-size:10.5px;font-family:\'JetBrains Mono\',monospace">'+ld.deliveryTime+'</div>'),
          onTime:       _cell('<span style="font:800 11px '+F+';color:'+_onTimeFg(ld.onTime)+'">'+ld.onTime+'</span>'),
          income:       _cell('<div style="display:flex;align-items:center;gap:5px"><div style="font:800 13px '+F+';color:#3FC281">'+money(ld.income)+'</div><span style="width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;border-radius:4px;border:1px solid rgba(255,255,255,.1);color:#8B939B;flex-shrink:0;pointer-events:none"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span></div><div style="font:500 10.5px '+F+';color:#6B7373;margin-top:1px">$'+rpm+'/mi</div>'),
          driver:       _cell(_miniAvatar(ld.driver)),
          truck:        _cell('<span style="font:400 11.5px \'JetBrains Mono\',monospace;color:#ABABAB">'+ld.truck+'</span>'),
          equipment:    _cell('<span style="font:400 11.5px '+F+';color:#ABABAB">'+ld.trailer+'</span>'),
          equipmentType:_cell('<span style="font:400 11.5px '+F+';color:#ABABAB">'+(ld.equipmentType||'')+'</span>'),
          stops:        _cell('<span style="font:700 12.5px '+F+'">'+ld.stops+'</span>'),
          customer:     _cell('<span style="font:400 12px '+F+';color:#C9CED2">'+ld.customer+'</span>'),
        };

        var row=document.createElement('div');
        row.style.cssText='display:grid;grid-template-columns:'+gridTpl+';padding:0 20px;border-bottom:1px solid rgba(255,255,255,.05);align-items:center;transition:background .1s';
        cols.forEach(function(c){ row.appendChild(cellMap[c.key] || document.createElement('div')); });

        // Actions cell — "Add to lane" for lane loads only
        var actCell=document.createElement('div'); actCell.style.cssText='padding:13px 0 13px 8px;display:flex;align-items:center;justify-content:flex-end';
        if (ld.laneLoad) {
          var addBtn=document.createElement('button');
          addBtn.style.cssText='padding:5px 14px;background:#27A767;border:none;border-radius:6px;color:#0B131B;font:800 11px '+F+';cursor:pointer;white-space:nowrap';
          addBtn.textContent='Add to lane';
          (function(load){
            addBtn.addEventListener('click', function(e){
              e.stopPropagation();
              if (load.route !== null) {
                _warnToast('This load is already assigned to a lane in a route.');
                return;
              }
              var tgt=loadsOf(rId)[parseInt(lIdx)];
              var _alBefore=_snapStats(rId), _alDestChanged=false, _alCascadeResult=null;
              if (tgt) {
                var _oldDest=tgt.dest;
                tgt.origin=originCity; tgt.dest=load.dest; tgt.miles=load.miles;
                tgt.income=load.income; tgt.status='Booked'; tgt.customer=load.customer;
                if (load.dest!==_oldDest) { _alCascadeResult=_cascadeLane(rId, parseInt(lIdx), load.dest); _alDestChanged=true; }
              }
              var _alAfter=_snapStats(rId);
              ov.remove(); _hideLbBar(); _hideLbNotif();
              setState({});
              if (_alDestChanged && window.__EFR_DEV) {
                _showAddingLoad(function() {
                  _showScenarioPicker(rId, load.dest, _alBefore, function(caseNum, simCtx) {
                    _showAdaptingPlan(function() { _runSimCase(caseNum, rId, _alBefore, simCtx); });
                  }, _oldDest);
                });
              } else {
                _showAddingLoad(function() {
                  if (_alDestChanged) {
                    if (_alCascadeResult && _alCascadeResult.caseB) {
                      _showAdaptingPlan(function() { _showCaseBModal(rId, _alBefore, _alAfter, _alCascadeResult); });
                    } else if (_alCascadeResult && _alCascadeResult.deadEnd) {
                      _showAdaptingPlan(function() { _showCaseCModal(rId, _alCascadeResult.deadCity); });
                    } else {
                      var _opts = { pinnedDest: _pinnedFinalDest[rId] || null, deadEnd: false, deadCity: null, fromDest: _oldDest, toDest: load.dest };
                      _showAdaptingPlan(function() { _showRebalanceModal(_alBefore, _alAfter, _opts); });
                    }
                  }
                });
              }
            });
          })(ld);
          actCell.appendChild(addBtn);
        }
        row.appendChild(actCell);
        row.addEventListener('mouseenter', function(){ row.style.background='rgba(255,255,255,.025)'; });
        row.addEventListener('mouseleave', function(){ row.style.background=''; });
        tblInner.appendChild(row);
      });
    }
    _rebuildTable();

    // Wire search
    srchInp.addEventListener('input', function(){ _searchVal = srchInp.value; _llPage = 1; _rebuildTable(); });

    // Wire status tabs
    _tabEls.forEach(function(tab){
      tab.addEventListener('click', function(){
        _statusTab = tab.dataset.tid;
        _llPage = 1;
        _tabEls.forEach(function(t){
          var act = t.dataset.tid === _statusTab;
          t.style.borderBottomColor = act?'#27A767':'transparent';
          t.style.color = act?'#27A767':'#8B939B';
        });
        _rebuildTable();
      });
    });

    ov.appendChild(modal);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e){ if(e.target===ov){ _markSeen(); ov.remove(); } });
  }

  function _openMyLoads(rId, lIdx, originCity) {
    var ex = document.getElementById('_ef-my-loads'); if (ex) ex.remove();
    var LOADS_DATA = [
      { dest:'Dallas, TX',   miles:245, rm:[539,833],   customer:'FreightQuote',    pickup:'Aug 02', note:'Assigned to unit' },
      { dest:'Memphis, TN',  miles:312, rm:[686,1061],  customer:'Echo Global',     pickup:'Aug 03', note:'Unassigned' },
      { dest:'St. Louis, MO',miles:280, rm:[616,952],   customer:'Coyote Logistics',pickup:'Aug 04', note:'Unassigned' },
      { dest:'Atlanta, GA',  miles:460, rm:[1012,1564], customer:'Transplace',      pickup:'Aug 05', note:'Unassigned' }
    ];
    var ov = document.createElement('div'); ov.id = '_ef-my-loads';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9003;background:rgba(6,12,17,.55);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#101B23;border:1px solid rgba(255,255,255,.12);border-radius:14px;width:440px;max-height:78vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,.8)';
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:10px;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
    hdr.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h3"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg><div style="flex:1"><div style="font:800 14px Nunito,system-ui;color:#FBFBFB">My Loads</div><div style="font:400 11px Nunito,system-ui;color:#8B939B;margin-top:1px">From ' + originCity + ' · matching your unit</div></div><button id="_ef-ml-close" style="width:28px;height:28px;display:grid;place-items:center;border-radius:8px;cursor:pointer;color:#8B939B;border:1px solid rgba(255,255,255,.1);flex:none;background:none">✕</button>';
    modal.appendChild(hdr);
    var filters = document.createElement('div');
    filters.style.cssText = 'display:flex;gap:6px;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
    ['All','Assigned to unit','Unassigned'].forEach(function(f,fi) {
      var chip = document.createElement('div');
      chip.style.cssText = 'padding:4px 10px;border-radius:999px;font:700 11px Nunito,system-ui;cursor:pointer;border:1px solid ' + (fi===0?'#27A767':'rgba(255,255,255,.12)') + ';background:' + (fi===0?'rgba(39,167,103,.14)':'transparent') + ';color:' + (fi===0?'#3FC281':'#8B939B');
      chip.textContent = f; filters.appendChild(chip);
    });
    modal.appendChild(filters);
    var list = document.createElement('div');
    list.style.cssText = 'flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:8px';
    LOADS_DATA.forEach(function(load, li) {
      var card = document.createElement('div');
      card.style.cssText = 'background:#131F27;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px';
      var rMin = (load.rm[0]/load.miles).toFixed(2), rMax = (load.rm[1]/load.miles).toFixed(2);
      card.innerHTML = '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px"><div style="flex:1;font:700 13px Nunito,system-ui;color:#FBFBFB">' + originCity + ' → ' + load.dest + '</div><div style="font:700 10px Nunito,system-ui;color:#8B939B;padding:2px 7px;background:rgba(255,255,255,.06);border-radius:4px;white-space:nowrap">' + load.note + '</div></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-bottom:10px"><div style="font:400 10px Nunito;color:#6B7373">Miles<br><span style="font:700 13px Nunito;color:#FBFBFB">' + load.miles + '</span></div><div style="font:400 10px Nunito;color:#6B7373">Revenue<br><span style="font:700 11px Nunito;color:#3FC281">$' + load.rm[0].toLocaleString('en-US') + ' – $' + load.rm[1].toLocaleString('en-US') + '</span></div><div style="font:400 10px Nunito;color:#6B7373">RPM<br><span style="font:700 11px Nunito;color:#7BCBCB">$' + rMin + ' – $' + rMax + '</span></div></div><div style="display:flex;align-items:center;gap:8px"><div style="flex:1;font:400 11px Nunito;color:#6B7373">' + load.customer + ' · ' + load.pickup + '</div><button data-li="' + li + '" style="padding:5px 14px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 12px Nunito,system-ui;cursor:pointer">Add to lane</button></div>';
      list.appendChild(card);
    });
    modal.appendChild(list);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e) { if (e.target === ov) _closeMyLoads(); });
    modal.querySelector('#_ef-ml-close').addEventListener('click', _closeMyLoads);
    modal.querySelectorAll('[data-li]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var ld = LOADS_DATA[parseInt(btn.dataset.li)];
        var tgt = loadsOf(rId)[parseInt(lIdx)];
        var _mlBefore = _snapStats(rId), _mlDestChanged = false, _mlCascadeResult = null;
        if (tgt) {
          var _oldDest = tgt.dest;
          tgt.origin = originCity; tgt.dest = ld.dest; tgt.miles = ld.miles;
          tgt.income = Math.round((ld.rm[0]+ld.rm[1])/2); tgt.status = 'Booked';
          if (ld.dest !== _oldDest) { _mlCascadeResult = _cascadeLane(rId, parseInt(lIdx), ld.dest); _mlDestChanged = true; }
        }
        var _mlAfter = _snapStats(rId);
        _closeMyLoads();
        setState({});
        if (_mlDestChanged && window.__EFR_DEV) {
          _showAddingLoad(function() {
            _showScenarioPicker(rId, ld.dest, _mlBefore, function(caseNum, simCtx) {
              _showAdaptingPlan(function() { _runSimCase(caseNum, rId, _mlBefore, simCtx); });
            }, _oldDest);
          });
        } else {
          _showAddingLoad(function() {
            if (_mlDestChanged) {
              if (_mlCascadeResult && _mlCascadeResult.caseB) {
                _showAdaptingPlan(function() { _showCaseBModal(rId, _mlBefore, _mlAfter, _mlCascadeResult); });
              } else if (_mlCascadeResult && _mlCascadeResult.deadEnd) {
                _showAdaptingPlan(function() { _showCaseCModal(rId, _mlCascadeResult.deadCity); });
              } else {
                var _opts = { pinnedDest: _pinnedFinalDest[rId] || null, deadEnd: false, deadCity: null, fromDest: _oldDest, toDest: ld.dest };
                _showAdaptingPlan(function() { _showRebalanceModal(_mlBefore, _mlAfter, _opts); });
              }
            }
          });
        }
      });
    });
  }
  function _closeMyLoads() { var m = document.getElementById('_ef-my-loads'); if (m) m.remove(); }

  function _openNewLoadModal(routeId, originCity) {
    var ex = document.getElementById('_ef-nl'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var NL_LOADS = [
      { id:'ef-nb0', dest:'Dallas, TX',   miles:245, incMin:539, incMax:833, customer:'FreightQuote', pickup:'08/01/2026' },
      { id:'ef-nb1', dest:'Dallas, TX',   miles:258, incMin:568, incMax:878, customer:'Echo Global',  pickup:'08/02/2026' },
    ];
    var ov = document.createElement('div'); ov.id = '_ef-nl';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9010;background:rgba(6,12,17,.55);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#101B23;border:1px solid rgba(255,255,255,.12);border-radius:14px;width:700px;max-height:76vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 56px rgba(0,0,0,.85)';
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:10px;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
    hdr.innerHTML =
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h3"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>'+
      '<div style="flex:1"><div style="font:800 14px '+F+';color:#FBFBFB">My Loads · <span style="color:#7BCBCB">2 matching</span></div><div style="font:400 11px '+F+';color:#8B939B;margin-top:1px">'+originCity+' · Available loads</div></div>'+
      '<button id="_ef-nl-x" style="width:28px;height:28px;display:grid;place-items:center;border-radius:7px;cursor:pointer;color:#8B939B;border:1px solid rgba(255,255,255,.1);background:none;font-size:13px">✕</button>';
    modal.appendChild(hdr);
    var chips = document.createElement('div');
    chips.style.cssText = 'display:flex;gap:6px;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
    ['All Loads','On Road','Booked','Unbooked'].forEach(function(f,fi) {
      var chip = document.createElement('div');
      chip.style.cssText = 'padding:4px 12px;border-radius:999px;font:700 11px '+F+';cursor:pointer;border:1px solid '+(fi===0?'#27A767':'rgba(255,255,255,.1)')+';background:'+(fi===0?'rgba(39,167,103,.14)':'transparent')+';color:'+(fi===0?'#27A767':'#8B939B');
      chip.textContent = f; chips.appendChild(chip);
    });
    modal.appendChild(chips);
    var tblWrap = document.createElement('div');
    tblWrap.style.cssText = 'flex:1;overflow-y:auto;overflow-x:auto';
    var tblCols = '110px 90px 1fr 90px 100px 130px 120px';
    var tblHead = document.createElement('div');
    tblHead.style.cssText = 'display:grid;grid-template-columns:'+tblCols+';padding:0 16px;background:#131F27;border-bottom:1px solid rgba(255,255,255,.07);font:800 11px '+F+';color:#6B7373;position:sticky;top:0;z-index:1';
    var _thP = 'padding:10px 6px';
    tblHead.innerHTML = '<div style="'+_thP+'">Load ID</div><div style="'+_thP+'">Status</div><div style="'+_thP+'">Origin → Destination</div><div style="'+_thP+'">Distance</div><div style="'+_thP+'">Pickup</div><div style="'+_thP+'">Income</div><div></div>';
    tblWrap.appendChild(tblHead);
    NL_LOADS.forEach(function(ld, li) {
      var rMin = (ld.incMin/ld.miles).toFixed(2), rMax = (ld.incMax/ld.miles).toFixed(2);
      var row = document.createElement('div');
      row.style.cssText = 'display:grid;grid-template-columns:'+tblCols+';padding:0 16px;border-bottom:1px solid rgba(255,255,255,.05);align-items:center;transition:background .12s';
      row.innerHTML =
        '<div style="padding:12px 6px;font:700 12px monospace;color:#7BCBCB">'+ld.id+'</div>'+
        '<div style="padding:12px 6px"><span style="font:700 11px '+F+';color:#FBB303;background:rgba(251,179,3,.1);border:1px solid rgba(251,179,3,.25);border-radius:4px;padding:2px 7px">Unbooked</span></div>'+
        '<div style="padding:12px 6px;font:400 12px '+F+';color:#FBFBFB;display:flex;align-items:center;gap:5px">'+originCity+'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6B7373" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>'+ld.dest+'</div>'+
        '<div style="padding:12px 6px;font:400 12px '+F+';color:#ABABAB">'+ld.miles+' mi</div>'+
        '<div style="padding:12px 6px;font:400 12px '+F+';color:#ABABAB">'+ld.pickup+'</div>'+
        '<div style="padding:12px 6px"><div style="font:700 12px '+F+';color:#3FC281">$'+ld.incMin+'–$'+ld.incMax+'</div><div style="font:400 10px '+F+';color:#7BCBCB">$'+rMin+'–$'+rMax+'/mi</div></div>'+
        '<div style="padding:12px 6px"><button data-li="'+li+'" class="_ef-nl-add" style="padding:5px 12px;background:#27A767;border:none;border-radius:7px;color:#0B131B;font:800 11px '+F+';cursor:pointer;white-space:nowrap">Add to lane</button></div>';
      row.addEventListener('mouseenter', function() { row.style.background = 'rgba(255,255,255,.03)'; });
      row.addEventListener('mouseleave', function() { row.style.background = ''; });
      tblWrap.appendChild(row);
    });
    modal.appendChild(tblWrap);
    var ftr = document.createElement('div');
    ftr.style.cssText = 'display:flex;align-items:center;justify-content:flex-end;padding:12px 18px;background:#0D1820;border-top:1px solid rgba(255,255,255,.07);flex:none';
    var closeBtn = document.createElement('button');
    closeBtn.style.cssText = 'padding:6px 16px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:transparent;color:#ABABAB;font:600 12px '+F+';cursor:pointer';
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', function() { ov.remove(); });
    ftr.appendChild(closeBtn);
    modal.appendChild(ftr);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e) { if (e.target === ov) ov.remove(); });
    modal.querySelector('#_ef-nl-x').addEventListener('click', function() { ov.remove(); });
    tblWrap.querySelectorAll('._ef-nl-add').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var li = parseInt(btn.dataset.li);
        var ld = NL_LOADS[li];
        var prevLoad = (loadsOf(routeId).slice(-1)[0]||{});
        LOADS.push({ id:'ef-nb-'+Math.random().toString(36).slice(2,8), route:routeId, origin:originCity, dest:ld.dest, miles:ld.miles, income:Math.round((ld.incMin+ld.incMax)/2), status:'Booked', pickup:'08/10/2026', pickupTime:'08:00 - 12:00', delivery:'08/11/2026', deliveryTime:'12:00 - 16:00', customer:ld.customer, eta:'--', onTime:'--', stops:1, truck:prevLoad.truck||'--', equipment:prevLoad.equipment||'Van 53' });
        ov.remove();
        _showAddingLoad(function() { setState({}); });
      });
    });
  }

  function _openAddLaneModal(routeId, originCity) {
    var ex = document.getElementById('_ef-add-lane'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var DESTS = [
      { city:'Milwaukee, WI',    miles:476, incMin:1035, incMax:1809, rpmMin:2.17, rpmMax:3.80, score:100 },
      { city:'Springfield, MA',  miles:593, incMin:1948, incMax:3172, rpmMin:3.28, rpmMax:5.35, score:100 },
      { city:'Philadelphia, PA', miles:419, incMin:1463, incMax:2330, rpmMin:3.49, rpmMax:5.56, score:100 },
      { city:'New York, NY',     miles:380, incMin:1330, incMax:2090, rpmMin:3.50, rpmMax:5.50, score:100 },
    ];
    var ov = document.createElement('div'); ov.id = '_ef-add-lane';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9015;background:#0B131B;display:flex;flex-direction:column';
    // Top search bar
    var searchBar = document.createElement('div');
    searchBar.style.cssText = 'display:flex;align-items:center;gap:10px;padding:12px 20px;background:#0B131B;border-bottom:1px solid rgba(255,255,255,.08);flex:none';
    var originPill = document.createElement('div');
    originPill.style.cssText = 'display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:999px;background:rgba(123,203,203,.1);border:1px solid rgba(123,203,203,.25);font:700 12px '+F+';color:#7BCBCB;white-space:nowrap';
    originPill.innerHTML = originCity+' <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7BCBCB" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>';
    var arrow = document.createElement('span');
    arrow.style.cssText = 'color:#6B7373;font-size:14px'; arrow.textContent = '→';
    var destInput = document.createElement('input');
    destInput.placeholder = 'Enter destination city';
    destInput.style.cssText = 'flex:1;background:transparent;border:none;outline:none;color:#FBFBFB;font:400 13px '+F+';min-width:0';
    var addPlusBtn = document.createElement('button');
    addPlusBtn.textContent = 'Add +';
    addPlusBtn.style.cssText = 'padding:7px 16px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 12px '+F+';cursor:pointer';
    var closeXBtn = document.createElement('button');
    closeXBtn.textContent = '×';
    closeXBtn.style.cssText = 'width:30px;height:30px;display:grid;place-items:center;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#8B939B;font-size:18px;cursor:pointer';
    searchBar.appendChild(originPill); searchBar.appendChild(arrow); searchBar.appendChild(destInput); searchBar.appendChild(addPlusBtn); searchBar.appendChild(closeXBtn);
    ov.appendChild(searchBar);
    // Body
    var body = document.createElement('div');
    body.style.cssText = 'flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;max-width:900px;margin:0 auto;width:100%';
    var filterChip = document.createElement('div');
    filterChip.style.cssText = 'display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);font:600 12px '+F+';color:#ABABAB;cursor:pointer;align-self:flex-start';
    filterChip.innerHTML = 'Search alternatives: Recommended <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m6 9 6 6 6-6"></path></svg>';
    body.appendChild(filterChip);
    function addDestRow(dest) {
      var card = document.createElement('div');
      card.style.cssText = 'background:#101B23;border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:14px 18px;display:flex;align-items:center;gap:16px;cursor:pointer;transition:all .15s';
      card.addEventListener('mouseenter', function() { card.style.borderColor = '#7BCBCB'; card.style.background = '#0E1820'; });
      card.addEventListener('mouseleave', function() { card.style.borderColor = 'rgba(255,255,255,.07)'; card.style.background = '#101B23'; });
      card.innerHTML =
        '<div style="text-align:center;min-width:44px"><div style="font:900 24px '+F+';color:#27A767">'+dest.score+'</div><div style="font:400 10px '+F+';color:#6B7373;margin-top:1px">score</div></div>'+
        '<div style="flex:1;min-width:0"><div style="font:400 11px '+F+';color:#8B939B;margin-bottom:2px">Destination: <strong style="color:#FBFBFB">'+dest.city+'</strong></div><div style="font:400 11px '+F+';color:#8B939B">$'+dest.incMin.toLocaleString('en-US')+'–$'+dest.incMax.toLocaleString('en-US')+' · '+dest.miles+' mi · $'+dest.rpmMin+'–$'+dest.rpmMax+'/mi</div></div>'+
        '<div style="display:flex;gap:6px"><span style="font:700 10px '+F+';color:#27A767;background:rgba(39,167,103,.1);border:1px solid rgba(39,167,103,.25);border-radius:4px;padding:2px 7px">Profit</span><span style="font:700 10px '+F+';color:#27A767;background:rgba(39,167,103,.1);border:1px solid rgba(39,167,103,.25);border-radius:4px;padding:2px 7px">Booking</span><span style="font:700 10px '+F+';color:#27A767;background:rgba(39,167,103,.1);border:1px solid rgba(39,167,103,.25);border-radius:4px;padding:2px 7px">Connectivity</span></div>';
      card.addEventListener('click', function() {
        var prevLoad = (loadsOf(routeId).slice(-1)[0]||{});
        LOADS.push({ id:'ef-al-'+Math.random().toString(36).slice(2,8), route:routeId, origin:originCity, dest:dest.city, miles:dest.miles, income:0, status:'Unbooked', pickup:'08/10/2026', pickupTime:'08:00 - 12:00', delivery:'08/11/2026', deliveryTime:'12:00 - 16:00', customer:'--', eta:'--', onTime:'--', stops:1, truck:prevLoad.truck||'--', equipment:prevLoad.equipment||'Van 53' });
        ov.remove(); setState({});
      });
      body.appendChild(card);
    }
    DESTS.forEach(addDestRow);
    ov.appendChild(body);
    document.body.appendChild(ov);
    closeXBtn.addEventListener('click', function() { ov.remove(); });
    addPlusBtn.addEventListener('click', function() {
      var city = destInput.value.trim(); if (!city) return;
      var prevLoad = (loadsOf(routeId).slice(-1)[0]||{});
      LOADS.push({ id:'ef-al-'+Math.random().toString(36).slice(2,8), route:routeId, origin:originCity, dest:city, miles:350, income:0, status:'Unbooked', pickup:'08/10/2026', pickupTime:'08:00 - 12:00', delivery:'08/11/2026', deliveryTime:'12:00 - 16:00', customer:'--', eta:'--', onTime:'--', stops:1, truck:prevLoad.truck||'--', equipment:prevLoad.equipment||'Van 53' });
      ov.remove(); setState({});
    });
  }

  function _openAddRoutePanel(routeId, originCity) {
    var ex = document.getElementById('_ef-add-route'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var ROUTES = [
      { id:'bc1', section:'Best Choice', viability:100, repCap:361,
        cities:[originCity,'Columbus, OH','Charleston, WV'],
        income:'$2,233–$2,587', incomeDay:'$2,233–$2,587/day', rpm:'$4.20–$4.86/mi', miles:532, days:'1-2 days (20 h)',
        tags:['Best profit','Best connectivity'],
        lanes:[{from:originCity,to:'Columbus, OH',miles:182,incMin:526,incMax:910,driving:'3h 19min'},{from:'Columbus, OH',to:'Charleston, WV',miles:350,incMin:1089,incMax:1677,driving:'6h 22min'}],
        stats:{fuel:'$425',profit:'$1,518–$1,873',totalMiles:'532 mi',time:'1-2 days (20 h)'}
      },
      { id:'bh1', section:'Bi-hauls', viability:100, repCap:919,
        cities:[originCity,'Columbus, OH','Atlanta, GA'],
        income:'$2,598–$2,987', incomeDay:'$1,299–$1,493/day', rpm:'$3.46–$3.98/mi', miles:751, days:'2-3 days (25 h)',
        tags:['Best profit','Best connectivity'],
        lanes:[{from:originCity,to:'Columbus, OH',miles:182,incMin:526,incMax:910,driving:'3h 19min'},{from:'Columbus, OH',to:'Atlanta, GA',miles:569,incMin:2072,incMax:2077,driving:'9h 01min'}],
        stats:{fuel:'$595',profit:'$1,299–$1,493',totalMiles:'751 mi',time:'2-3 days (25 h)'}
      },
      { id:'bh2', section:'Bi-hauls', viability:100, repCap:1654,
        cities:[originCity,'Columbus, OH','Lafayette, IN'],
        income:'$3,513–$4,407', incomeDay:'$1,757–$2,203/day', rpm:'$4.97–$6.23/mi', miles:707, days:'2-3 days (24 h)',
        tags:['Best profit'],
        lanes:[{from:originCity,to:'Columbus, OH',miles:182,incMin:526,incMax:910,driving:'3h 19min'},{from:'Columbus, OH',to:'Lafayette, IN',miles:525,incMin:2987,incMax:3497,driving:'9h 22min'}],
        stats:{fuel:'$558',profit:'$1,757–$2,203',totalMiles:'707 mi',time:'2-3 days (24 h)'}
      },
    ];
    var ov = document.createElement('div'); ov.id = '_ef-add-route';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9015;background:#0B131B;display:flex;flex-direction:column';
    // Top bar
    var topBar = document.createElement('div');
    topBar.style.cssText = 'display:flex;align-items:center;gap:8px;padding:10px 18px;background:#0D141B;border-bottom:1px solid rgba(255,255,255,.08);flex:none';
    var titleEl = document.createElement('div');
    titleEl.style.cssText = 'font:800 14px '+F+';color:#FBFBFB;margin-right:6px'; titleEl.textContent = 'Easy routes';
    topBar.appendChild(titleEl);
    ['Jul 06','Van','All routes','Ma…'].forEach(function(t,ti) {
      var ch = document.createElement('div');
      ch.style.cssText = 'padding:4px 10px;border-radius:999px;font:600 11px '+F+';cursor:pointer;border:1px solid rgba(255,255,255,.1);'+(ti<2?'color:#7BCBCB;background:rgba(123,203,203,.08)':'color:#8B939B;background:transparent');
      ch.textContent = t; topBar.appendChild(ch);
    });
    var searchRound = document.createElement('button');
    searchRound.style.cssText = 'width:30px;height:30px;border-radius:999px;background:#27A767;border:none;cursor:pointer;display:grid;place-items:center';
    searchRound.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B131B" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>';
    topBar.appendChild(searchRound);
    var spacer = document.createElement('div'); spacer.style.cssText = 'flex:1'; topBar.appendChild(spacer);
    var arCloseBtn = document.createElement('button'); arCloseBtn.id = '_ef-ar-x';
    arCloseBtn.style.cssText = 'width:30px;height:30px;display:grid;place-items:center;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#8B939B;font-size:17px;cursor:pointer';
    arCloseBtn.textContent = '×';
    topBar.appendChild(arCloseBtn);
    ov.appendChild(topBar);
    // Body: 2-column grid
    var bodyGrid = document.createElement('div');
    bodyGrid.style.cssText = 'flex:1;display:grid;grid-template-columns:1fr 440px;min-height:0;overflow:hidden';
    // Left panel
    var leftPanel = document.createElement('div');
    leftPanel.style.cssText = 'display:flex;flex-direction:column;overflow:hidden;border-right:1px solid rgba(255,255,255,.07)';
    var listHdr = document.createElement('div');
    listHdr.style.cssText = 'display:flex;align-items:center;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
    listHdr.innerHTML = '<div style="flex:1;font:400 13px '+F+';color:#ABABAB">Routes from <strong style="color:#FBFBFB">'+originCity+'</strong></div>'+
      '<div style="display:flex;gap:6px"><div style="padding:3px 10px;border-radius:999px;font:600 11px '+F+';color:#8B939B;border:1px solid rgba(255,255,255,.1);cursor:pointer">Order by ▾</div><div style="padding:3px 10px;border-radius:999px;font:600 11px '+F+';color:#8B939B;border:1px solid rgba(255,255,255,.1);cursor:pointer">Filter ▾</div></div>';
    leftPanel.appendChild(listHdr);
    var listScroll = document.createElement('div');
    listScroll.style.cssText = 'flex:1;overflow-y:auto;padding:12px';
    // Notice bar
    var notice = document.createElement('div');
    notice.style.cssText = 'background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px 14px;font:400 11px '+F+';color:#6B7373;display:flex;align-items:center;gap:8px;margin-bottom:12px';
    notice.innerHTML = '<div style="flex:1">Can\'t find what you\'re looking for? Try these other options:</div><span style="color:#7BCBCB;cursor:pointer;font-weight:700">Edit filter</span>';
    listScroll.appendChild(notice);
    var selectedRoute = null;
    var rightPanel = document.createElement('div');
    rightPanel.id = '_ef-ar-right';
    rightPanel.style.cssText = 'overflow-y:auto;background:#0D141B';
    function renderRight(rt) {
      rightPanel.innerHTML = '';
      // Map placeholder
      var mapPh = document.createElement('div');
      mapPh.style.cssText = 'height:200px;background:#0B1822;display:grid;place-items:center;position:relative;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:24px 24px';
      mapPh.innerHTML = '<div style="padding:6px 14px;border-radius:999px;background:rgba(39,167,103,.18);border:1px solid rgba(39,167,103,.4);font:700 11px '+F+';color:#27A767">Route start</div>';
      rightPanel.appendChild(mapPh);
      // Try button row
      var tryRow = document.createElement('div');
      tryRow.style.cssText = 'display:flex;align-items:center;gap:10px;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.07)';
      var tryBtn = document.createElement('button');
      tryBtn.style.cssText = 'flex:1;padding:10px;background:#27A767;border:none;border-radius:10px;color:#0B131B;font:800 13px '+F+';cursor:pointer';
      tryBtn.textContent = 'Try this route →';
      tryBtn.addEventListener('click', function() {
        rt.lanes.forEach(function(lane, li) {
          var prevLoad = (loadsOf(routeId).slice(-1)[0]||{});
          LOADS.push({ id:'ef-ar-'+Math.random().toString(36).slice(2,8)+li, route:routeId, origin:lane.from, dest:lane.to, miles:lane.miles, income:0, status:'Unbooked', pickup:'08/1'+li+'/2026', pickupTime:'08:00 - 12:00', delivery:'08/1'+(li+1)+'/2026', deliveryTime:'12:00 - 16:00', customer:'--', eta:'--', onTime:'--', stops:1, truck:prevLoad.truck||'--', equipment:prevLoad.equipment||'Van 53' });
        });
        ov.remove(); setState({});
      });
      tryRow.appendChild(tryBtn);
      var sumEl = document.createElement('div');
      sumEl.style.cssText = 'font:400 11px '+F+';color:#6B7373'; sumEl.textContent = rt.miles+' mi · '+rt.days;
      tryRow.appendChild(sumEl);
      rightPanel.appendChild(tryRow);
      // 4 stat tiles
      var statsGrid = document.createElement('div');
      statsGrid.style.cssText = 'display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07)';
      [{label:'Fuel cost',val:rt.stats.fuel},{label:'Gross profit',val:rt.stats.profit},{label:'Total mileage',val:rt.stats.totalMiles},{label:'Time on route',val:rt.stats.time}].forEach(function(s) {
        var tile = document.createElement('div');
        tile.style.cssText = 'background:#0D141B;padding:12px 14px';
        tile.innerHTML = '<div style="font:400 10px '+F+';color:#6B7373;margin-bottom:3px">'+s.label+'</div><div style="font:700 13px '+F+';color:#FBFBFB">'+s.val+'</div>';
        statsGrid.appendChild(tile);
      });
      rightPanel.appendChild(statsGrid);
      // Lanes
      var lanesWrap = document.createElement('div');
      lanesWrap.style.cssText = 'padding:14px 18px;display:flex;flex-direction:column;gap:12px';
      rt.lanes.forEach(function(lane, li) {
        var laneEl = document.createElement('div');
        laneEl.innerHTML =
          '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span style="font:700 11px '+F+';color:#7BCBCB;background:#2B4353;padding:3px 10px;border-radius:999px">Lane '+(li+1)+'</span><span style="font:400 12px '+F+';color:#ABABAB">'+lane.from+' → '+lane.to+'</span></div>'+
          '<div style="background:#111C27;border-radius:8px;padding:10px 14px;display:grid;grid-template-columns:repeat(3,1fr);gap:6px"><div style="font:400 10px '+F+';color:#6B7373">Miles<br><span style="font:700 12px '+F+';color:#FBFBFB">'+lane.miles+' mi</span></div><div style="font:400 10px '+F+';color:#6B7373">Income<br><span style="font:700 12px '+F+';color:#3FC281">$'+lane.incMin+'–$'+lane.incMax+'</span></div><div style="font:400 10px '+F+';color:#6B7373">Drive time<br><span style="font:700 12px '+F+';color:#ABABAB">'+lane.driving+'</span></div></div>';
        lanesWrap.appendChild(laneEl);
      });
      rightPanel.appendChild(lanesWrap);
      // Bottom stats
      var bottomStats = document.createElement('div');
      bottomStats.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:rgba(255,255,255,.07);border-top:1px solid rgba(255,255,255,.07)';
      [{label:'HOS',val:'Available'},{label:'Est. Mileage',val:rt.stats.totalMiles},{label:'Est. Profit',val:rt.stats.profit}].forEach(function(s) {
        var tile = document.createElement('div');
        tile.style.cssText = 'background:#0D141B;padding:12px 14px';
        tile.innerHTML = '<div style="font:400 10px '+F+';color:#6B7373;margin-bottom:3px">'+s.label+'</div><div style="font:700 12px '+F+';color:#FBFBFB">'+s.val+'</div>';
        bottomStats.appendChild(tile);
      });
      rightPanel.appendChild(bottomStats);
    }
    function renderRightEmpty() {
      rightPanel.innerHTML = '';
      var ph = document.createElement('div');
      ph.style.cssText = 'height:100%;display:flex;align-items:center;justify-content:center;color:#4A6572;font:400 13px '+F;
      ph.textContent = 'Select a route to preview'; rightPanel.appendChild(ph);
    }
    renderRightEmpty();
    // Sections
    var sections = {};
    ROUTES.forEach(function(rt) { if (!sections[rt.section]) sections[rt.section] = []; sections[rt.section].push(rt); });
    Object.keys(sections).forEach(function(sec) {
      var secLabel = document.createElement('div');
      secLabel.style.cssText = 'font:800 11px '+F+';color:#6B7373;text-transform:uppercase;letter-spacing:.08em;padding:8px 4px 6px;margin-top:4px';
      secLabel.innerHTML = (sec==='Best Choice'?'★ ':'')+sec;
      listScroll.appendChild(secLabel);
      sections[sec].forEach(function(rt) {
        var card = document.createElement('div');
        card.style.cssText = 'background:#101B23;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:12px 14px;cursor:pointer;margin-bottom:8px;display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;transition:all .15s';
        // Left: viability + repCap
        var leftCol = document.createElement('div');
        leftCol.style.cssText = 'text-align:center;min-width:48px';
        leftCol.innerHTML = '<div style="font:900 20px '+F+';color:#27A767">'+rt.viability+'</div><div style="font:400 9px '+F+';color:#6B7373;margin-top:1px">viability</div><div style="font:600 10px '+F+';color:#4A6572;margin-top:4px">'+rt.repCap+'<br><span style="font-size:9px">rep cap</span></div>';
        // Center: city chain + income
        var centerCol = document.createElement('div');
        var cityChain = rt.cities.map(function(c,ci) {
          var dotColor = (ci===0||ci===rt.cities.length-1)?'#27A767':'#4A6572';
          return '<div style="display:flex;align-items:center;gap:6px;margin-bottom:'+(ci<rt.cities.length-1?'2px':'0')+'"><div style="width:8px;height:8px;border-radius:999px;background:'+dotColor+';flex:none"></div><span style="font:400 11px '+F+';color:#ABABAB">'+c+'</span></div>';
        }).join('');
        centerCol.innerHTML = cityChain+'<div style="margin-top:6px;font:700 12px '+F+';color:#3FC281">'+rt.income+'</div><div style="font:400 10px '+F+';color:#6B7373">'+rt.rpm+'</div>';
        // Right: miles + days + tags
        var rightCol = document.createElement('div');
        rightCol.style.cssText = 'text-align:right';
        rightCol.innerHTML = '<div style="font:700 12px '+F+';color:#FBFBFB">'+rt.miles+' mi</div><div style="font:400 10px '+F+';color:#6B7373;margin-bottom:5px">'+rt.days+'</div>'+
          rt.tags.map(function(t) { return '<div style="font:700 10px '+F+';color:#27A767;background:rgba(39,167,103,.1);border:1px solid rgba(39,167,103,.25);border-radius:4px;padding:2px 6px;display:inline-block;margin:1px">'+t+'</div>'; }).join(' ');
        card.appendChild(leftCol); card.appendChild(centerCol); card.appendChild(rightCol);
        card.addEventListener('mouseenter', function() { card.style.borderColor = 'rgba(39,167,103,.35)'; card.style.background = '#0E1820'; });
        card.addEventListener('mouseleave', function() { if (selectedRoute!==rt) { card.style.borderColor = 'rgba(255,255,255,.08)'; card.style.background = '#101B23'; } });
        card.addEventListener('click', function() {
          selectedRoute = rt;
          listScroll.querySelectorAll('[data-rt-id]').forEach(function(c) { c.style.borderColor='rgba(255,255,255,.08)'; c.style.background='#101B23'; });
          card.style.borderColor = 'rgba(39,167,103,.5)'; card.style.background = 'rgba(39,167,103,.06)';
          renderRight(rt);
        });
        card.dataset.rtId = rt.id;
        listScroll.appendChild(card);
      });
    });
    leftPanel.appendChild(listScroll);
    bodyGrid.appendChild(leftPanel);
    bodyGrid.appendChild(rightPanel);
    ov.appendChild(bodyGrid);
    document.body.appendChild(ov);
    arCloseBtn.addEventListener('click', function() { ov.remove(); });
  }

  function _showAddRowMenu(anchorEl, routeId, originCity) {
    var ex = document.getElementById('_ef-add-menu'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var rect = anchorEl.getBoundingClientRect();
    var menu = document.createElement('div'); menu.id = '_ef-add-menu';
    menu.style.cssText = 'position:fixed;z-index:9010;background:#101B23;border:1px solid rgba(255,255,255,.18);border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,.6);overflow:hidden;min-width:240px;left:'+rect.left+'px;top:'+(rect.bottom+6)+'px';
    // "Add route" only makes sense when outbound routes exist from this city
    var _hasOutbound = !!_NEXT_DEST[originCity];
    var _items = [
      { svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>', label:'Search loads', sub:'Find available loads from destination opportunities', fn:function() { menu.remove(); renderLaneMap(originCity, routeId, true); } },
      { svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>', label:'Add load', sub:'Search or register a load', fn:function() { menu.remove(); _openNewLoadModal(routeId, originCity); } },
    ];
    if (_hasOutbound) {
      _items.push({ svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>', label:'Add route', sub:'Let the system find the next route for you', fn:function() {
        menu.remove();
        var _lastLoad = (loadsOf(routeId).slice(-1)[0] || {});
        // Departure = last lane delivery date + 1 day (stored as MM/DD/YYYY)
        var _dep = '';
        if (_lastLoad.delivery && _lastLoad.delivery !== '--') {
          var _dp = _lastLoad.delivery.split('/');
          if (_dp.length === 3) {
            var _d = new Date(+_dp[2], +_dp[0]-1, +_dp[1]+1);
            _dep = _d.getFullYear() + '-' + String(_d.getMonth()+1).padStart(2,'0') + '-' + String(_d.getDate()).padStart(2,'0');
          }
        }
        var _prefillCabinId = _lastLoad.truck || null;
        setState({ showCreateRoute: true });
        setTimeout(function() {
          // Pre-fill cabin/driver/trailer (crPickerSelect also auto-fills linked fields)
          if (_prefillCabinId && window.crPickerSelect) {
            var _cab = (window.CR_CABIN_LIST||[]).find(function(c){ return c.id === _prefillCabinId; });
            if (_cab) window.crPickerSelect('cabin', _cab.id);
          }
          // Pre-fill origin (override whatever crPickerSelect may have set from cabin city)
          var _oi = document.getElementById('cr-origin-input');
          if (_oi) { _oi.value = originCity; _oi.classList.add('cr-filled'); if (window.crUpdateForecastVisibility) window.crUpdateForecastVisibility(); }
          // Pre-fill departure date
          if (_dep) { var _di = document.getElementById('cr-departure-date'); if (_di) _di.value = _dep; }
          // Final destination stays empty
        }, 60);
      } });
    }
    _items.forEach(function(item) {
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer';
      var icon = document.createElement('div');
      icon.style.cssText = 'flex:none;width:30px;height:30px;display:grid;place-items:center;border-radius:8px;background:rgba(255,255,255,.07);color:#8B939B';
      icon.innerHTML = item.svg;
      var txt = document.createElement('div');
      txt.style.cssText = 'flex:1;min-width:0';
      txt.innerHTML = '<div style="font:700 13px '+F+';color:#FBFBFB">'+item.label+'</div><div style="font:400 11px '+F+';color:#8B939B;margin-top:2px">'+item.sub+'</div>';
      row.appendChild(icon); row.appendChild(txt);
      row.addEventListener('mouseenter', function() { row.style.background = 'rgba(255,255,255,.04)'; });
      row.addEventListener('mouseleave', function() { row.style.background = ''; });
      row.addEventListener('click', function(e) { e.stopPropagation(); item.fn(); });
      menu.appendChild(row);
    });
    document.body.appendChild(menu);
    setTimeout(function() {
      document.addEventListener('click', function handler(e) {
        if (menu.contains(e.target) || anchorEl.contains(e.target)) return;
        menu.remove();
      }, { once: true });
    }, 0);
  }

  // ── Destination opportunities map modal (modal, not fullscreen) ───────
  function renderLaneMap(origin, rId, addLaneMode) {
    _lmSt.origin = origin;
    _lmSt.addLaneMode = !!addLaneMode;
    _lmSt.addLaneRid = rId || null;
    _lmSt.topDest = null;
    _doRenderLaneMap();
  }

  function _openRoutePreferences(routeId) {
    var ex = document.getElementById('_ef-rp'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var ls = loadsOf(routeId);
    var _orig = ls.length ? ls[0].origin : '';
    var _dest = ls.length ? ls[ls.length - 1].dest : '';
    var ov = document.createElement('div'); ov.id = '_ef-rp';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9020;background:rgba(6,12,17,.6);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#131F27;border:1px solid rgba(255,255,255,.12);border-radius:16px;width:420px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.9)';
    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:flex-start;gap:12px;padding:18px 20px 16px;border-bottom:1px solid rgba(255,255,255,.07)';
    hdr.innerHTML =
      '<div style="width:32px;height:32px;border-radius:8px;background:#17202A;border:1px solid rgba(255,255,255,.1);display:grid;place-items:center;flex:none">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7BCBCB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>' +
      '</div>' +
      '<div style="flex:1">' +
        '<div style="font:900 15px '+F+';color:#FBFBFB;line-height:1.2">Route preferences</div>' +
        '<div style="font:400 11px '+F+';color:#6B7373;margin-top:3px">Filters considered when optimizing this route.</div>' +
      '</div>' +
      '<button id="_ef-rp-x" style="width:28px;height:28px;display:grid;place-items:center;border-radius:7px;cursor:pointer;color:#8B939B;border:1px solid rgba(255,255,255,.1);background:none;font-size:16px;flex:none">×</button>';
    modal.appendChild(hdr);
    // Body
    var body = document.createElement('div');
    body.style.cssText = 'padding:20px;display:flex;flex-direction:column;gap:16px';
    function _rpLabel(t) {
      var l = document.createElement('div');
      l.style.cssText = 'font:800 10px '+F+';color:#8B939B;letter-spacing:.08em;text-transform:uppercase;margin-bottom:7px';
      l.textContent = t; return l;
    }
    function _rpInput(val) {
      var inp = document.createElement('input'); inp.value = val;
      inp.style.cssText = 'width:100%;box-sizing:border-box;background:#0D1820;border:1px solid rgba(255,255,255,.1);border-radius:9px;padding:10px 13px;color:#FBFBFB;font:500 13px '+F+';outline:none';
      inp.addEventListener('focus', function() { inp.style.borderColor = 'rgba(39,167,103,.5)'; });
      inp.addEventListener('blur', function() { inp.style.borderColor = 'rgba(255,255,255,.1)'; });
      return inp;
    }
    function _rpSelect(opts, val) {
      var w = document.createElement('div'); w.style.cssText = 'position:relative';
      var sel = document.createElement('select');
      sel.style.cssText = 'width:100%;box-sizing:border-box;background:#0D1820;border:1px solid rgba(255,255,255,.1);border-radius:9px;padding:10px 36px 10px 13px;color:#FBFBFB;font:500 13px '+F+';outline:none;cursor:pointer;appearance:none;-webkit-appearance:none';
      opts.forEach(function(o) { var op = document.createElement('option'); op.value = o; op.textContent = o; if (o === val) op.selected = true; sel.appendChild(op); });
      var arr = document.createElement('div');
      arr.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;color:#8B939B';
      arr.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m6 9 6 6 6-6"></path></svg>';
      w.appendChild(sel); w.appendChild(arr); return w;
    }
    function _rpAddRow(note, placeholder) {
      var wrap = document.createElement('div');
      var nt = document.createElement('div');
      nt.style.cssText = 'font:400 11px '+F+';color:#6B7373;margin-bottom:6px';
      nt.textContent = note; wrap.appendChild(nt);
      var row = document.createElement('div');
      row.style.cssText = 'background:#0D1820;border:1px solid rgba(255,255,255,.1);border-radius:9px;padding:10px 13px;color:#6B7373;font:500 13px '+F+';cursor:pointer';
      row.textContent = placeholder; wrap.appendChild(row); return wrap;
    }
    // ORIGIN + DESTINATION (side by side)
    var fod = document.createElement('div'); fod.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:12px';
    var fo = document.createElement('div'); fo.appendChild(_rpLabel('Origin')); fo.appendChild(_rpInput(_orig)); fod.appendChild(fo);
    var fd = document.createElement('div'); fd.appendChild(_rpLabel('Destination')); fd.appendChild(_rpInput(_dest)); fod.appendChild(fd);
    body.appendChild(fod);
    // DAYS ON ROUTE
    var fdr = document.createElement('div'); fdr.appendChild(_rpLabel('Days on route')); fdr.appendChild(_rpSelect(['1 day','1–2 days','1–4 days','1 week','Any'], '1–4 days')); body.appendChild(fdr);
    // BLOCKED REGIONS
    var fbr = document.createElement('div'); fbr.appendChild(_rpLabel('Blocked regions')); fbr.appendChild(_rpAddRow('None — all regions available', '+ Block a region...')); body.appendChild(fbr);
    // BLOCKED STATES
    var fbs = document.createElement('div'); fbs.appendChild(_rpLabel('Blocked states')); fbs.appendChild(_rpAddRow('None — all states available', '+ Block a state...')); body.appendChild(fbs);
    // OPERATIVE COST USED
    var foc = document.createElement('div'); foc.appendChild(_rpLabel('Operative cost used')); foc.appendChild(_rpSelect(['JM_test1 — $2.00 / mi','Standard — $1.75 / mi','Premium — $2.50 / mi','No operating cost'], 'JM_test1 — $2.00 / mi')); body.appendChild(foc);
    modal.appendChild(body);
    // Footer
    var ftr = document.createElement('div');
    ftr.style.cssText = 'display:flex;justify-content:flex-end;padding:14px 20px;border-top:1px solid rgba(255,255,255,.07)';
    var doneBtn = document.createElement('button');
    doneBtn.style.cssText = 'padding:8px 26px;background:#27A767;border:none;border-radius:10px;color:#0B131B;font:800 13px '+F+';cursor:pointer';
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', function() { ov.remove(); });
    ftr.appendChild(doneBtn); modal.appendChild(ftr);
    ov.appendChild(modal); document.body.appendChild(ov);
    ov.addEventListener('click', function(e) { if (e.target === ov) ov.remove(); });
    modal.querySelector('#_ef-rp-x').addEventListener('click', function() { ov.remove(); });
  }

  function _doRenderLaneMap() {
    var origin = _lmSt.origin;
    if (!origin) { var rm = document.getElementById('_ef-lane-map'); if (rm) rm.remove(); return; }
    var old = document.getElementById('_ef-lane-map'); if (old) old.remove();
    var F = 'Nunito,system-ui';
    var qc = { Best:'#27A767', Good:'#FBB303', Fair:'#EB4343' };

    var DESTS = [
      { city:'Dallas, TX',      miles:472, cx:51, cy:62, profit:'Best', ease:'Best', conn:'Good', seg:'Fort Worth, TX → Dallas, TX',       loads:148, rev:[563,943],   rpm:[5.63,9.43], pot:{revMin:808, revMax:1117,pftMin:619,pftMax:929, dMin:1,dMax:5,rMin:2.79,rMax:5.57}, ph:1 },
      { city:'Houston, TX',     cx:53, cy:68, profit:'Best', ease:'Best', conn:'Fair', seg:'Fort Worth, TX → Houston, TX',      loads:72,  rev:[849,1481],  rpm:[2.97,5.18], pot:{revMin:1100,revMax:2000,pftMin:450,pftMax:1200,dMin:2,dMax:4,rMin:2.10,rMax:4.30}, ph:2 },
      { city:'Fort Worth, TX',  cx:49, cy:61, profit:'Best', ease:'Good', conn:'Good', seg:'Current → Fort Worth, TX',         loads:91,  rev:[165,332],   rpm:[4.58,9.23], pot:{revMin:200, revMax:400, pftMin:60, pftMax:280, dMin:0,dMax:1,rMin:4.20,rMax:9.00}, ph:0 },
      { city:'Demopolis, AL',   cx:65, cy:59, profit:'Best', ease:'Good', conn:'Good', seg:'Fort Worth, TX → Demopolis, AL',   loads:34,  rev:[1809,2531], rpm:[2.88,4.03], pot:{revMin:2000,revMax:3200,pftMin:900,pftMax:1800,dMin:3,dMax:6,rMin:2.70,rMax:4.20}, ph:3 },
      { city:'Nashville, TN',   cx:63, cy:51, profit:'Good', ease:'Good', conn:'Best', seg:'Fort Worth, TX → Nashville, TN',  loads:58,  rev:[1050,1680], rpm:[2.36,3.78], pot:{revMin:1200,revMax:2000,pftMin:500,pftMax:1200,dMin:2,dMax:5,rMin:2.20,rMax:4.00}, ph:1 },
      { city:'Kansas City, MO', cx:55, cy:47, profit:'Good', ease:'Fair', conn:'Good', seg:'Fort Worth, TX → Kansas City, MO',loads:44,  rev:[780,1245],  rpm:[1.44,2.31], pot:{revMin:900, revMax:1500,pftMin:300,pftMax:900, dMin:2,dMax:4,rMin:1.80,rMax:3.20}, ph:0 }
    ];
    _lmSt.topDest = DESTS[0];
    var RC_PATHS = [
      { id:'p0', name:'Houston → Dallas → L. Rock → Memphis', income:'$1,520–$2,625', profit:'$320–$1,425', miles:829, days:'~2 días' },
      { id:'p1', name:'Houston → Dallas → Memphis',            income:'$1,550–$2,655', profit:'$550–$1,655', miles:692, days:'1–2 días' },
      { id:'p2', name:'Houston → Shreveport → Memphis',        income:'$1,030–$1,630', profit:'$270–$870',   miles:527, days:'~1 día'  },
      { id:'p3', name:'Houston → Shreveport → Dallas → Mem.',  income:'$1,590–$2,715', profit:'$320–$1,445', miles:877, days:'~2 días' },
    ];
    var RC_BEZ = { 'A-H':'M80,140 C165,140 190,215 250,215','A-C':'M80,140 C220,130 310,80 420,80','H-C':'M250,215 C325,215 375,80 420,80','H-B':'M250,215 C435,218 570,195 720,140','C-D':'M420,80 C475,80 508,165 570,165','C-B':'M420,80 C540,80 630,95 720,140','D-B':'M570,165 C625,165 670,152 720,140' };
    var RC_NODES = [{id:'A',x:80,y:140,key:true},{id:'H',x:250,y:215,key:false},{id:'C',x:420,y:80,key:false},{id:'D',x:570,y:165,key:false},{id:'B',x:720,y:140,key:true}];
    var PATH_EDGES = { p0:['A-C','C-D','D-B'], p1:['A-C','C-B'], p2:['A-H','H-B'], p3:['A-H','H-C','C-B'] };
    var RC_CHAINS = { p0:['A','C','D','B'], p1:['A','C','B'], p2:['A','H','B'], p3:['A','H','C','B'] };
    var RC_CITY = { A:'Houston, TX', H:'Shreveport, LA', C:'Dallas, TX', D:'Little Rock, AR', B:'Memphis, TN' };

    // ── Backdrop + modal shell ──
    var ov = document.createElement('div'); ov.id = '_ef-lane-map';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9004;background:rgba(6,12,17,.65);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'width:980px;max-width:96vw;height:88vh;background:#0B131B;border:1px solid rgba(255,255,255,.12);border-radius:16px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.85)';

    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:10px;padding:14px 20px;background:#101B23;border-bottom:1px solid rgba(255,255,255,.08);flex:none';
    hdr.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg><span style="font:800 14px ' + F + ';color:#FBFBFB;flex:1">Destination opportunities from <span style="color:#7BCBCB">' + origin + '</span></span><button id="_ef-lm-x" style="width:28px;height:28px;display:grid;place-items:center;border-radius:8px;cursor:pointer;color:#8B939B;border:1px solid rgba(255,255,255,.1);background:none;flex:none"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg></button>';

    // Tabs
    var tabs = document.createElement('div');
    tabs.style.cssText = 'display:flex;padding:0 20px;background:#101B23;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
    ['Destinations','Route connections'].forEach(function(t, ti) {
      var sel = (ti===0 && _lmSt.tab==='destinations') || (ti===1 && _lmSt.tab==='routes');
      var tab = document.createElement('div');
      tab.style.cssText = 'padding:10px 14px;font:' + (sel?'800':'600') + ' 12px ' + F + ';cursor:pointer;color:' + (sel?'#27A767':'#8B939B') + ';box-shadow:' + (sel?'inset 0 -2px 0 0 #27A767':'none');
      tab.textContent = t;
      tab.addEventListener('click', function() { _lmSt.tab = ti===0?'destinations':'routes'; _doRenderLaneMap(); });
      tabs.appendChild(tab);
    });

    modal.appendChild(hdr); modal.appendChild(tabs);
    var body = document.createElement('div');
    body.style.cssText = 'flex:1;overflow:hidden;min-height:0;display:flex;flex-direction:column';

    if (_lmSt.tab === 'destinations') {
      // ── Destinations: map left + cards right ──
      var destBody = document.createElement('div');
      destBody.style.cssText = 'flex:1;display:grid;grid-template-columns:1fr 380px;overflow:hidden;min-height:0';

      // Map area
      var mapArea = document.createElement('div');
      mapArea.style.cssText = 'position:relative;background:#131F27;overflow:hidden';
      var gridBg = document.createElement('div');
      gridBg.style.cssText = 'position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:40px 40px';
      mapArea.appendChild(gridBg);
      var ns = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS(ns,'svg'); svg.setAttribute('width','100%'); svg.setAttribute('height','100%'); svg.style.cssText = 'position:absolute;inset:0';
      var usP = document.createElementNS(ns,'path'); usP.setAttribute('d','M8 42 L10 28 L16 22 L22 18 L30 16 L40 15 L50 15 L60 16 L68 18 L74 22 L78 28 L80 34 L82 40 L80 46 L76 52 L70 57 L66 62 L62 65 L58 68 L54 70 L48 72 L42 72 L36 70 L30 68 L24 65 L18 60 L12 52 L8 42 Z'); usP.setAttribute('fill','rgba(255,255,255,.03)'); usP.setAttribute('stroke','rgba(255,255,255,.08)'); usP.setAttribute('stroke-width','1.5'); svg.appendChild(usP);
      var curDot = document.createElementNS(ns,'circle'); curDot.setAttribute('cx','51%'); curDot.setAttribute('cy','63%'); curDot.setAttribute('r','12'); curDot.setAttribute('fill','#27A767'); curDot.setAttribute('opacity','0.9'); svg.appendChild(curDot);
      var curTxt = document.createElementNS(ns,'text'); curTxt.setAttribute('x','51%'); curTxt.setAttribute('y','63%'); curTxt.setAttribute('text-anchor','middle'); curTxt.setAttribute('fill','#0B131B'); curTxt.setAttribute('font-size','8'); curTxt.setAttribute('font-family','Nunito,system-ui'); curTxt.setAttribute('font-weight','800'); curTxt.setAttribute('dominant-baseline','middle'); curTxt.textContent = 'Current'; svg.appendChild(curTxt);
      DESTS.forEach(function(d, di) {
        var isSel = _lmSt.selDest === di;
        var dot = document.createElementNS(ns,'circle'); dot.setAttribute('cx',d.cx+'%'); dot.setAttribute('cy',d.cy+'%'); dot.setAttribute('r',isSel?'11':'9'); dot.setAttribute('fill',isSel?'#27A767':'#EB4343'); dot.setAttribute('opacity','0.86'); dot.style.cssText='cursor:pointer'; svg.appendChild(dot);
        var lbl = document.createElementNS(ns,'text'); lbl.setAttribute('x',d.cx+'%'); lbl.setAttribute('y',d.cy+'%'); lbl.setAttribute('text-anchor','middle'); lbl.setAttribute('fill','#FBFBFB'); lbl.setAttribute('font-size','8'); lbl.setAttribute('font-family','Nunito,system-ui'); lbl.setAttribute('font-weight','800'); lbl.setAttribute('dominant-baseline','middle'); lbl.setAttribute('pointer-events','none'); lbl.textContent = String(di+1); svg.appendChild(lbl);
        dot.addEventListener('click', function() { _lmSt.selDest = isSel?-1:di; _doRenderLaneMap(); });
      });
      mapArea.appendChild(svg);
      var fp = document.createElement('div'); fp.style.cssText = 'position:absolute;bottom:14px;left:14px;display:flex;gap:7px';
      ['Regions ∨','States ∨','Distance ∨'].forEach(function(f) { var p=document.createElement('div'); p.style.cssText='padding:5px 11px;background:rgba(11,19,27,.82);border:1px solid rgba(255,255,255,.15);border-radius:999px;font:700 11px '+F+';color:#FBFBFB;cursor:pointer'; p.textContent=f; fp.appendChild(p); });
      mapArea.appendChild(fp);
      var sc = document.createElement('div'); sc.style.cssText='position:absolute;bottom:14px;right:14px;display:flex;gap:8px;padding:6px 12px;background:rgba(11,19,27,.82);border:1px solid rgba(255,255,255,.12);border-radius:8px;font:700 11px '+F; sc.innerHTML='<span style="color:#27A767">● Selected</span><span style="color:#EB4343">● Available</span>'; mapArea.appendChild(sc);
      // Market conditions banner
      var _selDestName = _lmSt.selDest >= 0 && DESTS[_lmSt.selDest] ? DESTS[_lmSt.selDest].city : null;
      var mkBanner = document.createElement('div');
      mkBanner.style.cssText = 'position:absolute;top:12px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:7px;padding:7px 14px;background:rgba(11,19,27,.88);border:1px solid rgba(255,255,255,.12);border-radius:999px;white-space:nowrap;backdrop-filter:blur(4px)';
      mkBanner.innerHTML =
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7BCBCB" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4M12 16h.01"></path></svg>' +
        '<span style="font:600 11px '+F+';color:#ABABAB">Destinations adjusted by market conditions &amp; your preferences' +
        (_selDestName ? ' · <span style="color:#7BCBCB">Planning toward ' + _selDestName + '</span>' : '') +
        '</span>';
      mapArea.appendChild(mkBanner);
      destBody.appendChild(mapArea);

      // Cards panel (right)
      var cardsPanel = document.createElement('div');
      cardsPanel.style.cssText = 'background:#0F1920;border-left:1px solid rgba(255,255,255,.07);overflow-y:auto;display:flex;flex-direction:column';
      DESTS.forEach(function(d, di) {
        var isSel = _lmSt.selDest === di;
        var card = document.createElement('div');
        card.style.cssText = 'border-bottom:1px solid rgba(255,255,255,.06);cursor:pointer' + (isSel?';background:rgba(39,167,103,.04)':'');
        // Card summary row
        var cHdr = document.createElement('div');
        cHdr.style.cssText = 'display:flex;align-items:center;gap:6px;padding:12px 14px 4px';
        cHdr.innerHTML = '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:' + (isSel?'#27A767':'#EB4343') + ';flex:none"></span>' +
          '<span style="font:800 12px '+F+';color:#FBFBFB;flex:1">' + (di+1) + '. ' + d.city + '</span>' +
          '<span style="font:600 10px '+F+';color:#8B939B;padding:2px 7px;background:rgba(255,255,255,.06);border-radius:4px">Not explored</span>' +
          (isSel ? '<span style="font:700 10px '+F+';color:#27A767;padding:2px 7px;background:rgba(39,167,103,.1);border:1px solid rgba(39,167,103,.25);border-radius:4px;margin-left:4px">Selected ×</span>' : '');
        var scores = document.createElement('div');
        scores.style.cssText = 'display:flex;gap:8px;padding:4px 14px 10px;flex-wrap:wrap';
        ['profit','ease','conn'].forEach(function(k) { var v=d[k],col=qc[v]||'#8B939B',lbl={profit:'Profit potential',ease:'Ease of booking',conn:'Lane connectivity'}[k]; scores.innerHTML+='<span style="font:600 10px '+F+';color:'+col+'">● '+v+' '+lbl+'</span>'; });
        card.appendChild(cHdr); card.appendChild(scores);

        // Expanded detail
        if (isSel) {
          var det = document.createElement('div');
          det.style.cssText = 'background:#131F27;border-top:1px solid rgba(255,255,255,.07);padding:14px';
          // Segment
          det.innerHTML += '<div style="font:800 12px '+F+';color:#FBFBFB;margin-bottom:12px">'+d.seg+'</div>';
          // 4 metrics grid
          var mg = document.createElement('div'); mg.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:12px';
          [{lbl:'Revenue',val:'$'+d.rev[0].toLocaleString('en-US')+' – $'+d.rev[1].toLocaleString('en-US'),col:'#3FC281'},
           {lbl:'Distance',val:d.rev[0]+' mi',col:'#FBFBFB'},
           {lbl:'Loads / day',val:String(d.loads),col:'#FBFBFB'},
           {lbl:'RPM',val:'$'+d.rpm[0].toFixed(2)+' – $'+d.rpm[1].toFixed(2)+'/mi',col:'#7BCBCB'}
          ].forEach(function(m){ mg.innerHTML+='<div style="background:rgba(255,255,255,.04);border-radius:8px;padding:9px 11px"><div style="font:600 9px '+F+';color:#6B7373;text-transform:uppercase;letter-spacing:.4px;margin-bottom:4px">'+m.lbl+'</div><div style="font:800 12px '+F+';color:'+m.col+'">'+m.val+'</div></div>'; });
          det.appendChild(mg);
          // Potential route results accordion
          var pot = d.pot;
          var potAcc = document.createElement('div'); potAcc.style.cssText='border:1px solid rgba(255,255,255,.08);border-radius:8px;overflow:hidden;margin-bottom:8px';
          var potHdr = document.createElement('div'); potHdr.style.cssText='display:flex;align-items:center;gap:8px;padding:10px 12px;cursor:pointer;background:rgba(255,255,255,.03)';
          potHdr.innerHTML='<span style="font:700 11px '+F+';color:#FBFBFB;flex:1">Potential route results</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>';
          var potBody = document.createElement('div'); potBody.style.cssText='padding:12px;display:flex;flex-direction:column;gap:8px';
          potBody.innerHTML='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">' +
            '<div><div style="font:600 9px '+F+';color:#6B7373;text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">Revenue</div><div style="font:800 12px '+F+';color:#3FC281">$'+pot.revMin.toLocaleString('en-US')+' – $'+pot.revMax.toLocaleString('en-US')+'</div></div>' +
            '<div><div style="font:600 9px '+F+';color:#6B7373;text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">Profit</div><div style="font:800 12px '+F+';color:#3FC281">$'+pot.pftMin.toLocaleString('en-US')+' – $'+pot.pftMax.toLocaleString('en-US')+'</div></div>' +
            '<div><div style="font:600 9px '+F+';color:#6B7373;text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">Days</div><div style="font:800 12px '+F+';color:#FBFBFB">'+pot.dMin+(pot.dMin!==pot.dMax?' – '+pot.dMax:'')+(pot.dMin===0?' today':' days')+'</div></div>' +
            '<div><div style="font:600 9px '+F+';color:#6B7373;text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">RPM</div><div style="font:800 12px '+F+';color:#7BCBCB">$'+pot.rMin.toFixed(2)+'/mi – $'+pot.rMax.toFixed(2)+'/mi</div></div>' +
          '</div>' +
          '<button id="_ef-lm-vr-'+di+'" style="width:100%;padding:7px;background:rgba(39,167,103,.1);border:1px solid rgba(39,167,103,.3);border-radius:8px;color:#27A767;font:800 12px '+F+';cursor:pointer;margin-top:4px">Ver rutas →</button>';
          potAcc.appendChild(potHdr); potAcc.appendChild(potBody);
          det.appendChild(potAcc);
          // Market accordion (closed)
          var mktAcc = document.createElement('div'); mktAcc.style.cssText='border:1px solid rgba(255,255,255,.08);border-radius:8px;overflow:hidden';
          mktAcc.innerHTML='<div style="display:flex;align-items:center;gap:8px;padding:10px 12px;cursor:pointer;background:rgba(255,255,255,.03)"><span style="font:700 11px '+F+';color:#FBFBFB;flex:1">Market from '+d.city+'</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg></div>';
          det.appendChild(mktAcc);
          card.appendChild(det);
          // Wire Ver rutas button after DOM insert
          setTimeout(function() { var vrBtn=document.getElementById('_ef-lm-vr-'+di); if(vrBtn) vrBtn.addEventListener('click',function(e){ e.stopPropagation(); _lmSt.tab='routes'; _lmSt.selPath=d.ph||0; _doRenderLaneMap(); }); }, 0);
        }
        card.addEventListener('click', function(e) {
          if (e.target.closest && e.target.closest('[id^="_ef-lm-vr"]')) return;
          _lmSt.selDest = isSel ? -1 : di; _doRenderLaneMap();
        });
        cardsPanel.appendChild(card);
      });
      destBody.appendChild(cardsPanel);
      body.appendChild(destBody);

    } else {
      // ── Route connections: full route history graph + route list ──

      // ── 1. Build committed chain from route history via state.openRoute ──
      var _rcRid = state.openRoute;
      var _rcAllLoads = _rcRid ? loadsOf(_rcRid) : [];
      var RC_CMT_ST = { 'Booked':1,'Dispatched':1,'In Transit':1,'Delivered':1,'Invoiced':1,'Paid':1 };
      var committedChain = [], committedLdSt = [];

      if (_rcAllLoads.length > 0) {
        committedChain.push(_rcAllLoads[0].origin);
        committedLdSt.push(null); // no load "to" the first hub
        for (var _rci0 = 0; _rci0 < _rcAllLoads.length; _rci0++) {
          var _rL0 = _rcAllLoads[_rci0];
          if (RC_CMT_ST[_rL0.status]) { committedChain.push(_rL0.dest); committedLdSt.push(_rL0.status); }
          else break; // first non-committed load stops the chain
        }
      }
      if (!committedChain.length) { committedChain = [origin]; committedLdSt = [null]; }

      // ── 2. Build adjacency + trace future chain from current position ──
      var rcAdj = {};
      LOADS.forEach(function(l) { if (!rcAdj[l.origin]) rcAdj[l.origin] = []; rcAdj[l.origin].push(l); });

      var rcCurrentPos = committedChain[committedChain.length - 1];
      var rcFuture = [rcCurrentPos], _rcCurr = rcCurrentPos;
      for (var _rcd = 0; _rcd < 3; _rcd++) {
        var _rcNexts = rcAdj[_rcCurr] || [], _rcNext = null;
        for (var _rci1 = 0; _rci1 < _rcNexts.length; _rci1++) {
          var _d = _rcNexts[_rci1].dest;
          if (rcFuture.indexOf(_d) < 0 && committedChain.indexOf(_d) < 0) { _rcNext = _rcNexts[_rci1]; break; }
        }
        if (!_rcNext) break;
        rcFuture.push(_rcNext.dest); _rcCurr = _rcNext.dest;
      }

      // Full spine = committed chain + future hops (current position is the junction)
      var fullSpine = committedChain.concat(rcFuture.slice(1));
      var _spLen = fullSpine.length;

      // ── 3. Generate route alternatives (prefixes + skips over fullSpine) ──
      var rcRouteHubsAll = [], _rSeen = {};
      function _rcAddRoute(hubs) { var k = hubs.join('|'); if (!_rSeen[k] && hubs.length >= 2) { _rSeen[k] = 1; rcRouteHubsAll.push(hubs); } }
      for (var _pi = 2; _pi <= _spLen; _pi++) _rcAddRoute(fullSpine.slice(0, _pi));
      if (_spLen >= 3) _rcAddRoute([fullSpine[0], fullSpine[2]]);
      if (_spLen >= 4) { _rcAddRoute([fullSpine[0], fullSpine[3]]); _rcAddRoute([fullSpine[0], fullSpine[1], fullSpine[3]]); }
      if (_spLen >= 5) {
        _rcAddRoute([fullSpine[0], fullSpine[4]]);
        _rcAddRoute([fullSpine[0], fullSpine[1], fullSpine[4]]);
        _rcAddRoute([fullSpine[0], fullSpine[1], fullSpine[2], fullSpine[4]]);
        _rcAddRoute([fullSpine[0], fullSpine[2], fullSpine[4]]);
      }

      // Build route objects
      var rcRoutes = rcRouteHubsAll.map(function(hubs, ri) {
        var totalMiles = 0, minInc = 0, maxInc = 0, lanes = [];
        for (var _lk = 0; _lk < hubs.length - 1; _lk++) {
          var _lfr = hubs[_lk], _lto = hubs[_lk + 1], _ll = null;
          var _fadj = rcAdj[_lfr] || [];
          for (var _fli = 0; _fli < _fadj.length; _fli++) { if (_fadj[_fli].dest === _lto) { _ll = _fadj[_fli]; break; } }
          var _mi = _ll ? _ll.miles : Math.round(280 + _lk * 130 + ri * 40);
          var _revBase = _ll ? _ll.income : Math.round(_mi * 2.1 + ri * 80);
          var _rMin = Math.round(_revBase * 0.85), _rMax = Math.round(_revBase * 1.28);
          totalMiles += _mi; minInc += _rMin; maxInc += _rMax;
          lanes.push({ mi: _mi, rev: '$' + _rMin.toLocaleString('en-US') + '–$' + _rMax.toLocaleString('en-US') });
        }
        var pMin = Math.round(minInc * 0.22), pMax = Math.round(maxInc * 0.52);
        var dayEst = Math.max(1, Math.round(totalMiles / 480));
        var tags = [];
        if (ri === 0) tags.push('Best profit');
        if (ri === 1) tags.push('Best connectivity');
        if (ri === 2) { tags.push('Best profit'); tags.push('Best connectivity'); }
        return {
          id: 'rc-' + ri, hubs: hubs,
          score: Math.round(Math.min(99, 65 + pMax / 80 + lanes.length * 3)),
          viability: Math.max(62, 98 - ri * 7),
          revenue: '$' + minInc.toLocaleString('en-US') + '–$' + maxInc.toLocaleString('en-US'),
          profit: '$' + pMin.toLocaleString('en-US') + '–$' + pMax.toLocaleString('en-US'),
          miles: totalMiles, days: dayEst + '–' + (dayEst + 1) + ' days',
          tags: tags, lanes: lanes
        };
      });

      var rcBody = document.createElement('div');
      rcBody.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0';

      if (!rcRoutes.length) {
        var noRt = document.createElement('div');
        noRt.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;color:#4A6572;font:600 13px ' + F;
        noRt.textContent = 'No route data available for this origin.';
        rcBody.appendChild(noRt);
        body.appendChild(rcBody);
      } else {
        // ── 4. Classify routes: active (matches committed chain) vs discarded ──
        function rcMatchCommitted(hubs) {
          if (hubs.length < committedChain.length) return false;
          for (var _ci = 0; _ci < committedChain.length; _ci++) { if (hubs[_ci] !== committedChain[_ci]) return false; }
          return true;
        }
        var rcActive = [], rcDisc = [];
        rcRoutes.forEach(function(rt) { (rcMatchCommitted(rt.hubs) ? rcActive : rcDisc).push(rt); });

        // Selection state
        var rcSelIdx = rcActive.length ? Math.max(0, Math.min(_lmSt.selPath, rcActive.length - 1)) : -1;
        var rcDiscSelIdx = (_lmSt.discSelIdx >= 0 && _lmSt.discSelIdx < rcDisc.length) ? _lmSt.discSelIdx : -1;
        var rcDiscExp = !!_lmSt.discExpanded;
        var rcSel = rcSelIdx >= 0 && rcDiscSelIdx < 0 ? rcActive[rcSelIdx] : null;
        var rcDiscSel = rcDiscSelIdx >= 0 ? rcDisc[rcDiscSelIdx] : null;
        var rcDisplayRoute = rcDiscSel || rcSel;

        // Routes shown on graph
        var rcGraphRoutes = rcActive.slice();
        if (rcDiscSel && rcGraphRoutes.indexOf(rcDiscSel) < 0) rcGraphRoutes.push(rcDiscSel);
        if (rcDiscExp) rcDisc.forEach(function(r) { if (rcGraphRoutes.indexOf(r) < 0) rcGraphRoutes.push(r); });

        // ── 5. Merged node graph layout ──
        var RC_COL_W = 190, RC_R = 20, RC_GAP = 70, RC_TOP = 44, RC_LEFT = 52;
        var maxSteps = 0;
        rcGraphRoutes.forEach(function(rt) { if (rt.hubs.length - 1 > maxSteps) maxSteps = rt.hubs.length - 1; });

        var colNodes = [];
        for (var _cs = 0; _cs <= maxSteps; _cs++) colNodes.push([]);
        rcGraphRoutes.forEach(function(rt) {
          rt.hubs.forEach(function(city, si) { if (colNodes[si].indexOf(city) < 0) colNodes[si].push(city); });
        });

        var maxColH = 0;
        colNodes.forEach(function(col) { if (col.length > maxColH) maxColH = col.length; });

        var nodeMap = {};
        colNodes.forEach(function(col, si) {
          var totalH = (col.length - 1) * RC_GAP;
          var startY = RC_TOP + RC_R + (maxColH * RC_GAP - totalH) / 2;
          col.forEach(function(city, ni) {
            nodeMap[city + '|' + si] = { cx: RC_LEFT + si * RC_COL_W + RC_COL_W / 2, cy: startY + ni * RC_GAP, city: city, step: si };
          });
        });

        var svgW = RC_LEFT + (maxSteps + 1) * RC_COL_W + RC_LEFT;
        var svgH = RC_TOP + maxColH * RC_GAP + RC_R + 32;

        // ── 6. Node state: uses full committedChain ──
        function rcNodeState(city, step) {
          if (step < committedChain.length) {
            if (committedChain[step] !== city) {
              if (rcDiscSel && step < rcDiscSel.hubs.length && rcDiscSel.hubs[step] === city) return 'disc-sel';
              return 'discarded';
            }
            // Incoming load status to this hub (null for origin step=0)
            var inSt = committedLdSt[step];
            // Truck is en route TO this hub → both origin and destination of the in-transit lane are 'current'
            if (inSt === 'Dispatched' || inSt === 'In Transit') return 'current';
            // Outgoing load FROM this hub
            var outLd = _rcAllLoads[step];
            var outSt = outLd ? outLd.status : null;
            // No outgoing load, or outgoing is Unbooked/Dispatched/In Transit → truck is here, mark as current
            if (!outSt || outSt === 'Unbooked' || outSt === 'Dispatched' || outSt === 'In Transit') return 'current';
            // Outgoing load is Delivered/Invoiced/Paid → this is a completed past stop
            return 'completed';
          }
          if (rcDiscSel && step < rcDiscSel.hubs.length && rcDiscSel.hubs[step] === city) return 'disc-sel';
          var onActive = rcActive.some(function(rt) { return step < rt.hubs.length && rt.hubs[step] === city; });
          return onActive ? 'tentative' : 'discarded';
        }

        // ── 7. SVG area with transform-based zoom/pan ──
        var svgArea = document.createElement('div');
        svgArea.style.cssText = 'flex:1;overflow:hidden;background:#080F15;position:relative;cursor:grab';

        var svgNs2 = 'http://www.w3.org/2000/svg';
        var svgEl2 = document.createElementNS(svgNs2, 'svg');
        svgEl2.setAttribute('width', svgW); svgEl2.setAttribute('height', svgH);
        svgEl2.style.cssText = 'display:block;transform-origin:0 0;position:absolute;top:0;left:0';

        // Column headers + dividers
        for (var _ch = 0; _ch <= maxSteps; _ch++) {
          var chX = RC_LEFT + _ch * RC_COL_W + RC_COL_W / 2;
          var chLbl = _ch === 0 ? 'ORIGIN' : (_ch === maxSteps ? 'STEP ' + _ch + ' (DESTINATION)' : 'STEP ' + _ch);
          var chT = document.createElementNS(svgNs2, 'text');
          chT.setAttribute('x', chX); chT.setAttribute('y', '16');
          chT.setAttribute('text-anchor', 'middle'); chT.setAttribute('font-size', '9');
          chT.setAttribute('font-weight', '700'); chT.setAttribute('font-family', 'monospace');
          chT.setAttribute('fill', '#8B939B'); chT.setAttribute('letter-spacing', '0.08em');
          chT.textContent = chLbl; svgEl2.appendChild(chT);
          if (_ch > 0) {
            var dvX = RC_LEFT + _ch * RC_COL_W;
            var dvL = document.createElementNS(svgNs2, 'line');
            dvL.setAttribute('x1', dvX); dvL.setAttribute('x2', dvX);
            dvL.setAttribute('y1', '26'); dvL.setAttribute('y2', svgH);
            dvL.setAttribute('stroke', 'rgba(255,255,255,0.04)'); dvL.setAttribute('stroke-width', '1');
            svgEl2.appendChild(dvL);
          }
        }

        // Draw edges per route
        rcGraphRoutes.forEach(function(rt) {
          var isDisc = rcDisc.indexOf(rt) >= 0;
          var isDiscSel = rt === rcDiscSel;
          var isSel = rt === rcDisplayRoute;

          for (var _ei = 0; _ei < rt.hubs.length - 1; _ei++) {
            var fn = nodeMap[rt.hubs[_ei] + '|' + _ei];
            var tn = nodeMap[rt.hubs[_ei + 1] + '|' + (_ei + 1)];
            if (!fn || !tn) continue;

            // Edge is "committed" when it's on an active route within the committed chain
            var isCommittedEdge = !isDisc && (_ei + 1 < committedChain.length);
            var eColor, eW, eDash;
            if (isCommittedEdge)              { eColor = '#27A767';                  eW = 2.5; eDash = null; }
            else if (isDisc && !isDiscSel)    { eColor = 'rgba(235,67,67,0.1)';     eW = 1;   eDash = '6,4'; }
            else if (isDiscSel)               { eColor = 'rgba(255,255,255,0.25)';  eW = 2;   eDash = '6,4'; }
            else                              { eColor = isSel ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.1)';
                                               eW = isSel ? 2.5 : 1.5; eDash = null; }

            var ln = document.createElementNS(svgNs2, 'line');
            ln.setAttribute('x1', fn.cx + RC_R); ln.setAttribute('y1', fn.cy);
            ln.setAttribute('x2', tn.cx - RC_R); ln.setAttribute('y2', tn.cy);
            ln.setAttribute('stroke', eColor); ln.setAttribute('stroke-width', eW);
            ln.setAttribute('stroke-linecap', 'round');
            if (eDash) ln.setAttribute('stroke-dasharray', eDash);
            svgEl2.appendChild(ln);

            // Lane label on selected route
            if (isSel && rt.lanes[_ei]) {
              var midX = (fn.cx + RC_R + tn.cx - RC_R) / 2;
              var midY = Math.max(fn.cy, tn.cy) + 18;
              var lc1 = isDiscSel ? 'rgba(255,255,255,0.5)' : 'rgba(39,167,103,0.7)';
              var lc2 = isDiscSel ? 'rgba(255,255,255,0.35)' : 'rgba(39,167,103,0.5)';
              var lt1 = document.createElementNS(svgNs2, 'text');
              lt1.setAttribute('x', midX); lt1.setAttribute('y', midY);
              lt1.setAttribute('text-anchor', 'middle'); lt1.setAttribute('font-size', '8');
              lt1.setAttribute('font-weight', '700'); lt1.setAttribute('font-family', 'monospace');
              lt1.setAttribute('fill', lc1);
              lt1.textContent = 'Lane ' + (_ei + 1) + ': ' + rt.lanes[_ei].mi + ' mi';
              svgEl2.appendChild(lt1);
              var lt2 = document.createElementNS(svgNs2, 'text');
              lt2.setAttribute('x', midX); lt2.setAttribute('y', midY + 11);
              lt2.setAttribute('text-anchor', 'middle'); lt2.setAttribute('font-size', '7');
              lt2.setAttribute('font-family', 'monospace'); lt2.setAttribute('fill', lc2);
              lt2.textContent = rt.lanes[_ei].rev;
              svgEl2.appendChild(lt2);
            }
          }
        });

        // Draw nodes
        Object.keys(nodeMap).forEach(function(key) {
          var nd = nodeMap[key];
          var state = rcNodeState(nd.city, nd.step);
          var fill, stroke, strokeW, textColor, opacity;
          opacity = 1;
          if (state === 'current')    { fill = 'transparent'; stroke = '#27A767'; strokeW = 2.5; textColor = '#27A767'; }
          else if (state === 'completed') { fill = '#27A767';  stroke = '#27A767'; strokeW = 2;   textColor = '#172737'; }
          else if (state === 'disc-sel')  { fill = 'rgba(35,45,55,0.9)'; stroke = 'rgba(255,255,255,0.2)'; strokeW = 1.5; textColor = '#8B939B'; }
          else if (state === 'discarded') { fill = 'rgba(35,45,55,0.9)'; stroke = 'rgba(255,255,255,0.1)'; strokeW = 1.5; textColor = '#53636B'; opacity = 0.4; }
          else                            { fill = 'rgba(35,45,55,0.9)'; stroke = 'rgba(255,255,255,0.1)'; strokeW = 1.5; textColor = '#53636B'; }

          var g = document.createElementNS(svgNs2, 'g');
          if (opacity < 1) g.setAttribute('opacity', opacity);

          var circ2 = document.createElementNS(svgNs2, 'circle');
          circ2.setAttribute('cx', nd.cx); circ2.setAttribute('cy', nd.cy); circ2.setAttribute('r', RC_R);
          circ2.setAttribute('fill', fill); circ2.setAttribute('stroke', stroke); circ2.setAttribute('stroke-width', strokeW);
          g.appendChild(circ2);

          var stepN = document.createElementNS(svgNs2, 'text');
          stepN.setAttribute('x', nd.cx); stepN.setAttribute('y', nd.cy + 1);
          stepN.setAttribute('text-anchor', 'middle'); stepN.setAttribute('dominant-baseline', 'middle');
          stepN.setAttribute('font-size', '13'); stepN.setAttribute('font-weight', '700');
          stepN.setAttribute('font-family', 'monospace'); stepN.setAttribute('fill', textColor);
          stepN.setAttribute('pointer-events', 'none');
          stepN.textContent = String(nd.step + 1);
          g.appendChild(stepN);

          var cityParts = nd.city.split(', ');
          var cityLbl = document.createElementNS(svgNs2, 'text');
          cityLbl.setAttribute('x', nd.cx); cityLbl.setAttribute('y', nd.cy + RC_R + 13);
          cityLbl.setAttribute('text-anchor', 'middle'); cityLbl.setAttribute('font-size', '9');
          cityLbl.setAttribute('font-family', 'Nunito,system-ui');
          cityLbl.setAttribute('fill', (state === 'current' || state === 'completed') ? '#6B7373' : '#53636B');
          cityLbl.setAttribute('pointer-events', 'none');
          cityLbl.textContent = cityParts[0] + (cityParts[1] ? ', ' + cityParts[1] : '');
          g.appendChild(cityLbl);

          svgEl2.appendChild(g);
        });

        // ── Zoom-to-fit on first open; persist zoom when switching routes ──
        var _rcScale = _lmSt.rcScale || 0, _rcTx = _lmSt.rcTx || 0, _rcTy = _lmSt.rcTy || 0;
        function _rcApplyTransform() {
          svgEl2.style.transform = 'translate(' + _rcTx + 'px,' + _rcTy + 'px) scale(' + _rcScale + ')';
          _lmSt.rcScale = _rcScale; _lmSt.rcTx = _rcTx; _lmSt.rcTy = _rcTy;
        }
        svgArea.appendChild(svgEl2);
        if (!_lmSt.rcScale) {
          setTimeout(function() {
            var cw = svgArea.clientWidth || 500, ch = svgArea.clientHeight || 300;
            _rcScale = Math.min((cw - 32) / svgW, (ch - 32) / svgH);
            if (_rcScale > 1.2) _rcScale = 1.2;
            if (_rcScale < 0.15) _rcScale = 0.15;
            _rcTx = (cw - svgW * _rcScale) / 2;
            _rcTy = (ch - svgH * _rcScale) / 2;
            _rcApplyTransform();
          }, 0);
        } else {
          _rcApplyTransform(); // restore saved zoom immediately — no setTimeout to avoid flash
        }

        svgArea.addEventListener('wheel', function(e) {
          e.preventDefault();
          var rect = svgArea.getBoundingClientRect();
          var mx = e.clientX - rect.left, my = e.clientY - rect.top;
          var factor = e.deltaY > 0 ? 0.85 : 1.18;
          var ns = Math.max(0.15, Math.min(4, _rcScale * factor));
          _rcTx = mx - (mx - _rcTx) * (ns / _rcScale);
          _rcTy = my - (my - _rcTy) * (ns / _rcScale);
          _rcScale = ns; _rcApplyTransform();
        }, { passive: false });

        (function(area) {
          var dragging = false, sx, sy, stx, sty;
          area.addEventListener('mousedown', function(e) { dragging = true; sx = e.clientX; sy = e.clientY; stx = _rcTx; sty = _rcTy; area.style.cursor = 'grabbing'; });
          window.addEventListener('mouseup', function() { dragging = false; area.style.cursor = 'grab'; });
          area.addEventListener('mousemove', function(e) { if (!dragging) return; _rcTx = stx + e.clientX - sx; _rcTy = sty + e.clientY - sy; _rcApplyTransform(); });
        })(svgArea);

        // ── Route panel (right) ──
        var rcPanel = document.createElement('div');
        rcPanel.style.cssText = 'border-left:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;overflow:hidden;background:rgba(0,0,0,.18);width:300px;flex:none';

        var rcPanelHdr = document.createElement('div');
        rcPanelHdr.style.cssText = 'padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
        var _hasCommit = committedChain.length > 1;
        var panelTitle = 'Route connections from ' + origin.split(',')[0];
        var _commitCount = committedChain.length - 1;
        var panelSub = _hasCommit
          ? 'Committed through ' + _commitCount + ' lane' + (_commitCount !== 1 ? 's' : '')
          : origin + ' → ' + (fullSpine[fullSpine.length - 1] || '');
        rcPanelHdr.innerHTML = '<div style="font:800 12px ' + F + ';color:#FBFBFB">' + panelTitle + '</div>';
        rcPanel.appendChild(rcPanelHdr);

        var rcScroll = document.createElement('div');
        rcScroll.style.cssText = 'overflow-y:auto;flex:1;scrollbar-width:thin;scrollbar-color:#1E2E38 transparent';

        // Active route cards
        rcActive.forEach(function(rt, ri) {
          var isSel = rcDiscSelIdx < 0 && ri === rcSelIdx;
          var isBlocked = _lmSt.blockedPaths.has(rt.id);
          var parts = rt.hubs;
          var isShort = parts.length <= 3;
          var routeLabel = isShort ? parts.join(' → ') : parts[0] + ' → ' + (parts.length - 2) + ' cities → ' + parts[parts.length - 1];
          var viabColor = rt.viability >= 75 ? '#27A767' : '#F5A623';
          var tagsHtml = rt.tags.map(function(tg) {
            return '<span style="display:inline-block;padding:1px 6px;background:rgba(39,167,103,.12);border:1px solid rgba(39,167,103,.25);border-radius:4px;font:700 8px ' + F + ';color:#27A767">' + tg + '</span>';
          }).join(' ');
          var metaLine = '<span style="color:' + viabColor + '">' + rt.viability + '%</span> Viability | ' + rt.lanes.length + ' lane' + (rt.lanes.length > 1 ? 's' : '') + (rt.tags.length ? ' | ' + tagsHtml : '');
          var card = document.createElement('div');
          card.style.cssText = 'padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.05);border-left:3px solid ' + (isSel ? '#27A767' : 'transparent') + ';background:' + (isSel ? 'rgba(39,167,103,.08)' : 'transparent') + ';cursor:pointer;opacity:' + (isBlocked ? 0.4 : 1);
          card.innerHTML =
            '<div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:4px">' +
              '<span style="font:' + (isSel ? 800 : 600) + ' 10px ' + F + ';color:' + (isSel ? '#FBFBFB' : '#ABABAB') + ';line-height:1.4;flex:1;min-width:0;margin-right:6px">' + routeLabel + (isBlocked ? ' <span style="font:700 8px ' + F + ';color:#EB4343">[Blocked]</span>' : '') + '</span>' +
              '<span style="font:700 9px ' + F + ';color:#4A8C6A;background:rgba(39,167,103,.1);border-radius:4px;padding:1px 5px;flex-shrink:0">' + rt.score + '</span>' +
            '</div>' +
            '<div style="font:600 9px ' + F + ';color:#6B7373">' + metaLine + '</div>';
          card.addEventListener('click', function() { _lmSt.selPath = ri; _lmSt.discSelIdx = -1; _doRenderLaneMap(); });
          rcScroll.appendChild(card);
        });

        // Discarded section (Committed modal only)
        if (rcDisc.length) {
          var chevronD = rcDiscExp ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6';
          var discHdr = document.createElement('div');
          discHdr.style.cssText = 'display:flex;align-items:center;gap:6px;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.05);border-top:1px solid rgba(235,67,67,.15);cursor:pointer;background:rgba(235,67,67,.08)';
          discHdr.innerHTML =
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EB4343" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="' + chevronD + '"></path></svg>' +
            '<span style="font:700 10px ' + F + ';color:#EB4343;flex:1">Discarded routes</span>' +
            '<span style="padding:1px 7px;background:rgba(235,67,67,.12);border-radius:999px;font:700 9px ' + F + ';color:#EB4343">' + rcDisc.length + '</span>';
          discHdr.addEventListener('click', function() { _lmSt.discExpanded = !_lmSt.discExpanded; _doRenderLaneMap(); });
          rcScroll.appendChild(discHdr);

          if (rcDiscExp) {
            rcDisc.forEach(function(rt, di) {
              var isDSel = di === rcDiscSelIdx;
              var dparts = rt.hubs;
              var dlabel = dparts.length <= 3 ? dparts.join(' → ') : dparts[0] + ' → ' + (dparts.length - 2) + ' cities → ' + dparts[dparts.length - 1];
              var dcard = document.createElement('div');
              dcard.style.cssText = 'padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.05);border-left:3px solid ' + (isDSel ? 'rgba(255,255,255,.2)' : 'transparent') + ';background:' + (isDSel ? 'rgba(255,255,255,.03)' : 'transparent') + ';cursor:pointer;opacity:' + (isDSel ? 1 : 0.5);
              dcard.innerHTML =
                '<div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:4px">' +
                  '<span style="font:' + (isDSel ? 700 : 600) + ' 10px ' + F + ';color:' + (isDSel ? '#8B939B' : '#4A6572') + ';line-height:1.4;flex:1;min-width:0;margin-right:6px">' + dlabel + '</span>' +
                  '<span style="font:700 9px ' + F + ';color:#3A4A54;background:rgba(255,255,255,.04);border-radius:4px;padding:1px 5px;flex-shrink:0">' + rt.score + '</span>' +
                '</div>' +
                '<div style="font:600 9px ' + F + ';color:#3A4A54">' + rt.viability + '% Viability | ' + rt.lanes.length + ' lane' + (rt.lanes.length > 1 ? 's' : '') + ' | <span style="padding:1px 5px;background:rgba(235,67,67,.1);border:1px solid rgba(235,67,67,.2);border-radius:4px;font:700 8px ' + F + ';color:#EB4343">Discarded</span></div>';
              dcard.addEventListener('click', function() { _lmSt.discSelIdx = isDSel ? -1 : di; _doRenderLaneMap(); });
              rcScroll.appendChild(dcard);
            });
          }
        }

        rcPanel.appendChild(rcScroll);

        var topRow = document.createElement('div');
        topRow.style.cssText = 'flex:1;display:flex;overflow:hidden;min-height:0';
        topRow.appendChild(svgArea); topRow.appendChild(rcPanel);
        rcBody.appendChild(topRow);

        // ── Bottom stats bar: [metrics spread] [block btn] | [dark bg: start search] ──
        // Compute search key from already-loaded route data
        var _sbKey = null;
        for (var _sbi = 0; _sbi < _rcAllLoads.length; _sbi++) {
          if (_rcAllLoads[_sbi].origin === origin && _rcAllLoads[_sbi].status === 'Unbooked') { _sbKey = _rcRid + '_' + _sbi; break; }
        }
        var _sbSt = _sbKey ? (_lbSearch[_sbKey] || '') : '';

        var statsBar = document.createElement('div');
        statsBar.style.cssText = 'display:flex;align-items:stretch;border-top:1px solid rgba(255,255,255,.07);flex:none;min-height:54px';

        // Metrics section — each item gets flex:1 so they spread evenly
        var sbLeft = document.createElement('div');
        sbLeft.style.cssText = 'flex:1;display:flex;align-items:center;padding:0 24px;gap:0;background:rgba(0,0,0,.22)';
        if (rcDisplayRoute) {
          var isBlk = _lmSt.blockedPaths.has(rcDisplayRoute.id);
          [['Income', rcDisplayRoute.revenue, '#27A767'], ['Profit', rcDisplayRoute.profit, '#7BCBCB'], ['Mileage', rcDisplayRoute.miles + ' mi', '#FBFBFB'], ['Days on route', rcDisplayRoute.days, '#FBFBFB']].forEach(function(kv, i) {
            if (i > 0) { var sdv = document.createElement('div'); sdv.style.cssText = 'width:1px;height:24px;background:rgba(255,255,255,.07);flex:none;margin:0 24px'; sbLeft.appendChild(sdv); }
            var sdm = document.createElement('div');
            sdm.style.cssText = 'flex:1;min-width:0';
            sdm.innerHTML = '<div style="font:600 9px ' + F + ';color:#4A6572;text-transform:uppercase;letter-spacing:.3px;margin-bottom:2px">' + kv[0] + '</div><div style="font:800 12px ' + F + ';color:' + (isBlk ? '#4A6572' : kv[2]) + ';white-space:nowrap">' + kv[1] + '</div>';
            sbLeft.appendChild(sdm);
          });
        }
        statsBar.appendChild(sbLeft);

        // Block route button — right of metrics, before divider
        if (rcDisplayRoute) {
          var sbBW = document.createElement('div');
          sbBW.style.cssText = 'display:flex;align-items:center;padding:0 20px;flex:none;background:rgba(0,0,0,.22)';
          var blockBtn = document.createElement('button');
          var _blk = _lmSt.blockedPaths.has(rcDisplayRoute.id);
          blockBtn.style.cssText = _blk
            ? 'padding:6px 16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:6px;color:#ABABAB;font:700 11px ' + F + ';cursor:pointer'
            : 'padding:6px 16px;background:rgba(235,67,67,.08);border:1px solid rgba(235,67,67,.25);border-radius:6px;color:#EB4343;font:700 11px ' + F + ';cursor:pointer';
          blockBtn.textContent = _blk ? '↩ Restore route' : '✕ Block route';
          blockBtn.addEventListener('click', function() {
            if (_lmSt.blockedPaths.has(rcDisplayRoute.id)) _lmSt.blockedPaths.delete(rcDisplayRoute.id);
            else _lmSt.blockedPaths.add(rcDisplayRoute.id);
            _doRenderLaneMap();
          });
          sbBW.appendChild(blockBtn);
          statsBar.appendChild(sbBW);
        }

        // Vertical divider — same style as the panel separator above
        var sbVd = document.createElement('div');
        sbVd.style.cssText = 'width:1px;background:rgba(255,255,255,.07);flex:none';
        statsBar.appendChild(sbVd);

        // Start search section — dark background matching panel tone
        var sbRight = document.createElement('div');
        sbRight.style.cssText = 'display:flex;align-items:center;justify-content:flex-end;padding:0 28px;background:rgba(0,0,0,.18);width:300px;flex:none;box-sizing:border-box';
        if (_sbSt === 'searching' || _sbSt === 'done') {
          var sbSave = document.createElement('button');
          sbSave.style.cssText = 'padding:8px 20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#ABABAB;font:700 12px ' + F + ';cursor:pointer';
          sbSave.textContent = 'Save changes';
          sbRight.appendChild(sbSave);
        } else if (_sbKey) {
          var sbStart = document.createElement('button');
          sbStart.style.cssText = 'display:flex;align-items:center;gap:6px;padding:8px 20px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 12px ' + F + ';cursor:pointer;white-space:nowrap';
          sbStart.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>Start search';
          (function(key, originCity) {
            sbStart.addEventListener('click', function() {
              var active = _getActiveSearch();
              if (active && active.key !== key && active.state === 'searching') {
                _showOneSearchWarning(sbStart, active.city, originCity, function() {
                  delete _lbSearch[active.key]; delete _lbCount[active.key];
                  var lmEl = document.getElementById('_ef-lane-map'); if (lmEl) lmEl.remove();
                  _lmSt.origin = null;
                  _lbSearch[key] = 'searching';
                  setTimeout(function() { _lbSearch[key] = 'done'; _lbCount[key] = 2 + Math.floor(Math.random() * 4); _showLbNotif(key, originCity); }, 3000);
                });
                return;
              }
              var lmEl = document.getElementById('_ef-lane-map'); if (lmEl) lmEl.remove();
              _lmSt.origin = null;
              _lbSearch[key] = 'searching';
              setTimeout(function() { _lbSearch[key] = 'done'; _lbCount[key] = 2 + Math.floor(Math.random() * 4); _showLbNotif(key, originCity); }, 3000);
            });
          })(_sbKey, origin);
          sbRight.appendChild(sbStart);
        }
        statsBar.appendChild(sbRight);
        rcBody.appendChild(statsBar);
        body.appendChild(rcBody);
      }
    }

    // ── Footer: Start search / Save changes ──
    var _lmRid = state.openRoute;
    var _lmKey = null;
    var _lmOriginCity = _lmSt.origin;
    if (_lmRid) {
      var _lmLs = loadsOf(_lmRid);
      var _lmLIdx = -1;
      for (var _fi = 0; _fi < _lmLs.length; _fi++) {
        if (_lmLs[_fi].origin === _lmOriginCity && _lmLs[_fi].status === 'Unbooked') { _lmLIdx = _fi; break; }
      }
      if (_lmLIdx >= 0) _lmKey = _lmRid + '_' + _lmLIdx;
    }
    var _lmSearchSt = _lmKey ? (_lbSearch[_lmKey] || '') : '';
    var _lmSearchActive = _lmSearchSt === 'searching' || _lmSearchSt === 'done';

    var footer = document.createElement('div');
    // Routes tab has its own integrated stats bar with Start search — hide the global footer there
    if (_lmSt.tab === 'routes') {
      footer.style.cssText = 'display:none';
    } else {
      footer.style.cssText = 'display:flex;align-items:center;justify-content:flex-end;padding:12px 20px;border-top:1px solid rgba(255,255,255,.07);background:#101B23;flex:none;gap:8px';
    }

    if (_lmSt.tab !== 'routes' && _lmSearchActive) {
      var saveBtn = document.createElement('button');
      saveBtn.style.cssText = 'padding:8px 20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#ABABAB;font:700 12px ' + F + ';cursor:pointer';
      saveBtn.textContent = 'Save changes';
      footer.appendChild(saveBtn);
    } else if (_lmSt.tab !== 'routes' && (_lmKey || _lmSt.addLaneMode)) {
      var startBtn = document.createElement('button');
      startBtn.style.cssText = 'display:flex;align-items:center;gap:6px;padding:8px 20px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 12px ' + F + ';cursor:pointer';
      startBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>Start search';
      if (_lmSt.addLaneMode) {
        (function(rId, originCity) {
          startBtn.addEventListener('click', function() {
            var topD = _lmSt.topDest || { city: 'Dallas, TX', miles: 472 };
            var _slMiles = topD.miles || 500;
            var _prevLoad = loadsOf(rId).slice(-1)[0] || {};
            function _addDays(dateStr, days) {
              var p = (dateStr || '').split('/');
              if (p.length !== 3 || isNaN(+p[2])) return null;
              var d = new Date(+p[2], +p[0]-1, +p[1]+days);
              return String(d.getMonth()+1).padStart(2,'0')+'/'+String(d.getDate()).padStart(2,'0')+'/'+d.getFullYear();
            }
            var _pickupDate  = _addDays(_prevLoad.delivery, 1) || '08/10/2026';
            var _delivDate   = _addDays(_pickupDate, Math.max(1, Math.ceil(_slMiles / 500)));
            var newLane = {
              id: 'ef-sl-' + Math.random().toString(36).slice(2, 8),
              route: rId, origin: originCity, dest: topD.city,
              miles: _slMiles, income: 0, status: 'Unbooked',
              pickup: _pickupDate, pickupTime: '08:00 - 12:00',
              delivery: _delivDate, deliveryTime: '08:00 - 12:00',
              customer: '--', eta: '--', onTime: '--', stops: 1,
              truck: _prevLoad.truck || '--',
              equipment: _prevLoad.equipment || 'Van 53'
            };
            LOADS.push(newLane);
            var lsAfter = loadsOf(rId);
            var newIdx = lsAfter.length - 1;
            var newKey = rId + '_' + newIdx;
            _doStartSearch(newKey, originCity);
            _lmSt.origin = null; _lmSt.addLaneMode = false; _lmSt.addLaneRid = null;
            var lmEl = document.getElementById('_ef-lane-map'); if (lmEl) lmEl.remove();
            _showAddingLoad(function() { setState({}); });
          });
        })(_lmSt.addLaneRid, _lmOriginCity);
      } else {
        (function(key, originCity) {
          startBtn.addEventListener('click', function() {
            var active = _getActiveSearch();
            if (active && active.key !== key && active.state === 'searching') {
              _showOneSearchWarning(startBtn, active.city, originCity, function() {
                delete _lbSearch[active.key]; delete _lbCount[active.key];
                var lmEl2 = document.getElementById('_ef-lane-map'); if (lmEl2) lmEl2.remove();
                _lmSt.origin = null;
                _doStartSearch(key, originCity, startBtn);
              });
              return;
            }
            var lmEl = document.getElementById('_ef-lane-map'); if (lmEl) lmEl.remove();
            _lmSt.origin = null;
            _doStartSearch(key, originCity);
          });
        })(_lmKey, _lmOriginCity);
      }
      footer.appendChild(startBtn);
    }

    modal.appendChild(body);
    modal.appendChild(footer);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e) { if(e.target===ov){ _lmSt.origin=null; _lmSt.tab='destinations'; _lmSt.selDest=-1; _lmSt.rcScale=0; _lmSt.rcTx=0; _lmSt.rcTy=0; var m=document.getElementById('_ef-lane-map'); if(m)m.remove(); } });
    modal.querySelector('#_ef-lm-x').addEventListener('click', function(){ _lmSt.origin=null; _lmSt.tab='destinations'; _lmSt.selDest=-1; _lmSt.rcScale=0; _lmSt.rcTx=0; _lmSt.rcTy=0; var m=document.getElementById('_ef-lane-map'); if(m)m.remove(); });
  }

  function renderDetail(routeId) {
    if (state.detailTab === 'control') return renderControl(routeId);
    const d = buildDetailRows(routeId);
    const r = d.r;
    const c = STATUS[r.status];

    const header = document.createElement('div');
    header.style.cssText = 'flex:none;display:flex;align-items:center;gap:16px;padding:0 16px;background:#0D141B;border-bottom:1px solid rgba(255,255,255,.07);height:64px;position:relative;z-index:10';
    // Back button
    var _hb = document.createElement('button');
    _hb.style.cssText = 'width:34px;height:34px;border-radius:8px;background:#17202A;border:1px solid rgba(255,255,255,.08);color:#ABABAB;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;flex-shrink:0';
    _hb.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>';
    _hb.addEventListener('click', function() { setState({ openRoute: null }); });
    header.appendChild(_hb);
    // Route name + edit pencil
    var _hn = document.createElement('div');
    _hn.style.cssText = 'display:flex;align-items:center;gap:8px;flex-shrink:0';
    _hn.innerHTML = '<span style="font:800 15px Nunito,system-ui;letter-spacing:-.01em;color:#DDE3E9">' + r.name + '</span><button style="width:26px;height:26px;border-radius:7px;background:#17202A;border:1px solid rgba(255,255,255,.06);color:#7BCBCB;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg></button>';
    header.appendChild(_hn);
    // ── Portal tooltip (body-level so no parent overflow clips it) ──
    var _pinTip = document.getElementById('_ef-pin-tip');
    if (!_pinTip) {
      _pinTip = document.createElement('div');
      _pinTip.id = '_ef-pin-tip';
      _pinTip.style.cssText = 'position:fixed;z-index:9999;top:-999px;left:-999px;display:none;align-items:center;gap:6px;padding:6px 11px;background:#141E28;border:1px solid rgba(255,255,255,.14);border-radius:9px;white-space:nowrap;font:700 12px Nunito,system-ui;color:#DDE3E9;box-shadow:0 8px 28px rgba(0,0,0,.6);pointer-events:none';
      document.body.appendChild(_pinTip);
    }
    function _showPinTip(anchorEl, htmlContent) {
      _pinTip.innerHTML = htmlContent;
      _pinTip.style.display = 'flex';
      _pinTip.style.top = '-999px';
      _pinTip.style.left = '-999px';
      var tipW = _pinTip.offsetWidth;
      var tipH = _pinTip.offsetHeight;
      var r = anchorEl.getBoundingClientRect();
      var cx = r.left + r.width / 2;
      var x = Math.max(6, Math.min(cx - tipW / 2, window.innerWidth - tipW - 6));
      var y = r.top - tipH - 8;
      _pinTip.style.left = Math.round(x) + 'px';
      _pinTip.style.top = Math.round(y) + 'px';
    }
    function _hidePinTip() { _pinTip.style.display = 'none'; }
    // ── Progress bar (3B: leaderboard pill + zone bar, markers below track) ──
    var _hp = document.createElement('div');
    _hp.style.cssText = 'flex:1 1 0;min-width:200px;align-self:stretch;display:flex;flex-direction:column;justify-content:flex-start;gap:4px;padding:8px 4px 0';
    _hp.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:space-between;font:700 11px Nunito,system-ui">' +
        '<span style="color:#8D99A6">Current income <span style="color:#27A767;font-weight:900">$14,077</span></span>' +
        '<span style="color:#FBB303;font-weight:800">★ $34,200 Top 10%</span>' +
      '</div>' +
      '<div style="position:relative;height:10px;border-radius:999px;background:#111A23;border:1px solid rgba(255,255,255,.06);overflow:visible">' +
        '<div style="position:absolute;top:0;bottom:0;left:0;width:37%;border-radius:999px 0 0 999px;background:linear-gradient(90deg,#1E8C56,#27A767)"></div>' +
        '<div style="position:absolute;top:0;bottom:0;left:37%;width:32%;background:repeating-linear-gradient(115deg,rgba(123,203,203,.2) 0 5px,transparent 5px 10px)"></div>' +
        '<div style="position:absolute;top:-3px;bottom:-3px;left:50%;width:1.5px;background:rgba(251,179,3,.5);border-radius:1px"></div>' +
        '<div style="position:absolute;top:-3px;bottom:-3px;left:90%;width:1.5px;background:rgba(251,179,3,.7);border-radius:1px"></div>' +
        '<div class="pin-wrap" data-tip-color="#27A767" data-tip-label="Current" data-tip-val="$14,077" style="position:absolute;bottom:calc(100% + 2px);left:37%;transform:translateX(-50%);cursor:default">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>' +
        '</div>' +
        '<div class="pin-wrap" data-tip-color="#7BCBCB" data-tip-label="Estimated" data-tip-val="$26,087" style="position:absolute;bottom:calc(100% + 2px);left:69%;transform:translateX(-50%);cursor:default">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7BCBCB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>' +
        '</div>' +
        '<div style="position:absolute;top:calc(100% + 4px);left:50%;transform:translateX(-50%);font:800 9px Nunito,system-ui;color:rgba(251,179,3,.7);white-space:nowrap;letter-spacing:.06em">TOP 50%</div>' +
      '</div>';
    _hp.querySelectorAll('.pin-wrap').forEach(function(pw) {
      var color = pw.dataset.tipColor, label = pw.dataset.tipLabel, val = pw.dataset.tipVal;
      var tipHtml = '<span style="width:8px;height:8px;border-radius:999px;background:'+color+';flex-shrink:0;display:inline-block"></span>' +
        '<span style="color:#8D99A6;font-weight:700">'+label+'</span>' +
        '<span style="color:'+color+';font-weight:900">'+val+'</span>';
      pw.addEventListener('mouseenter', function() { _showPinTip(pw, tipHtml); });
      pw.addEventListener('mouseleave', _hidePinTip);
    });
    // Leaderboard pill (3B)
    var _lpill = document.createElement('div');
    _lpill.style.cssText = 'display:flex;align-items:center;gap:7px;height:34px;padding:0 12px;border-radius:999px;background:rgba(39,167,103,.12);border:1px solid rgba(39,167,103,.35);flex-shrink:0';
    _lpill.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg><span style="font:900 13px Nunito,system-ui;color:#27A767">Beating <span style="color:#DDE3E9">63%</span> of routes</span>';
    header.appendChild(_lpill);
    header.appendChild(_hp);
    // RPM metrics pill
    var _hrpm = document.createElement('div');
    _hrpm.style.cssText = 'display:flex;align-items:center;gap:10px;height:38px;padding:0 12px;border-radius:8px;background:rgba(123,203,203,.10);border:1px solid rgba(123,203,203,.28);flex-shrink:0';
    _hrpm.innerHTML =
      '<div style="display:flex;flex-direction:column;gap:1px"><span style="font:800 9px Nunito,system-ui;letter-spacing:.1em;text-transform:uppercase;color:#7BCBCB">Effective RPM</span><span style="font:900 15px Nunito,system-ui;color:#7BCBCB;letter-spacing:-.02em;line-height:1">$3.32</span></div>' +
      '<div style="width:1px;height:24px;background:rgba(123,203,203,.25)"></div>' +
      '<div style="display:flex;flex-direction:column;gap:1px"><span style="font:800 9px Nunito,system-ui;letter-spacing:.1em;text-transform:uppercase;color:#8D99A6">Break-even</span><span style="font:900 15px Nunito,system-ui;color:#FBB303;letter-spacing:-.02em;line-height:1">$2.51</span></div>' +
      '<div style="width:1px;height:24px;background:rgba(255,255,255,.08)"></div>' +
      '<div style="display:flex;flex-direction:column;gap:1px"><span style="font:800 9px Nunito,system-ui;letter-spacing:.1em;text-transform:uppercase;color:#8D99A6">Fleet RPM</span><span style="font:900 15px Nunito,system-ui;color:#ABABAB;letter-spacing:-.02em;line-height:1">$3.18</span></div>';
    header.appendChild(_hrpm);
    // Finish route button
    var _hfin = document.createElement('button');
    _hfin.style.cssText = 'height:34px;padding:0 16px;border-radius:999px;border:0;background:#27A767;color:#172737;font:800 13px Nunito,system-ui;cursor:pointer;flex-shrink:0';
    _hfin.textContent = 'Finish route';
    header.appendChild(_hfin);
    // Truck icon button (green dot badge)
    var _htruck = document.createElement('div');
    _htruck.style.cssText = 'position:relative;flex-shrink:0';
    _htruck.innerHTML = '<button style="position:relative;width:36px;height:36px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;color:#DDE3E9;background:#17202A;border:1px solid rgba(255,255,255,.08)"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg><span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:999px;background:#27A767;border:2px solid #0D141B"></span></button>';
    _htruck.querySelector('button').addEventListener('click', function() {
      var _existing = document.getElementById('_ef-truck-modal');
      if (_existing) { _existing.remove(); var _existDp = document.getElementById('_ef-detail-panel'); if (_existDp) _existDp.remove(); return; }
      var _rteEq = (ROUTES||[]).find(function(rr){ return rr.id === routeId; });
      var _eqType = (_rteEq && _rteEq.equipmentType) || 'Van';
      var _tm = document.createElement('div');
      _tm.id = '_ef-truck-modal';
      _tm.style.cssText = 'position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:40px 20px';
      var _tmbg = document.createElement('div');
      _tmbg.style.cssText = 'position:absolute;inset:0;background:rgba(6,12,17,.65)';
      _tmbg.addEventListener('click', function() { _tm.remove(); var _dp2 = document.getElementById('_ef-detail-panel'); if (_dp2) _dp2.remove(); });
      var _tmc = document.createElement('div');
      _tmc.style.cssText = 'position:relative;width:100%;max-width:480px;background:#131F27;border:1px solid rgba(255,255,255,.1);border-radius:16px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.6)';
      var _chevSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A6A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>';
      var _reqLbl = '<span style="font:600 10px Nunito,system-ui;color:#5A6A7A;margin-left:auto;padding-left:8px">Required</span>';
      function _assignRow(iconHtml, mainText, subText, filled, detailKey) {
        return '<div style="display:flex;align-items:center;gap:12px;padding:13px 14px;background:#0E1820;border:1px solid rgba(255,255,255,' + (filled ? '.12' : '.07') + ');border-radius:10px;cursor:pointer">' +
          '<div style="width:36px;height:36px;border-radius:8px;background:#162330;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + iconHtml + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font:' + (filled ? '800' : '500') + ' 13px Nunito,system-ui;color:' + (filled ? '#DDE3E9' : '#8B939B') + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + mainText + '</div>' +
            '<div style="font:500 11px Nunito,system-ui;color:#5A6A7A;margin-top:1px">' + subText + '</div>' +
          '</div>' +
          '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">' +
            _chevSvg +
            (filled && detailKey ? '<span data-detail="' + detailKey + '" style="font:700 9.5px Nunito,system-ui;color:#7BCBCB;cursor:pointer;line-height:1;white-space:nowrap">View details</span>' : '') +
          '</div>' +
        '</div>';
      }
      var _driverIcon = '<span style="font:800 14px Nunito,system-ui;color:#7BCBCB">D</span>';
      var _truckIcon = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 7h3.5a1 1 0 0 1 .8.4l2.7 3.6V18h-3"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>';
      var _trailerIcon = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="7" y1="17" x2="7" y2="20"/><line x1="17" y1="17" x2="17" y2="20"/><line x1="5" y1="20" x2="9" y2="20"/><line x1="15" y1="20" x2="19" y2="20"/></svg>';
      var _eqIcon = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>';
      function _closeTruckAll() { var _m = document.getElementById('_ef-truck-modal'); if (_m) _m.remove(); var _dp = document.getElementById('_ef-detail-panel'); if (_dp) _dp.remove(); }
      function _openDetailPanel(activeTab) {
        var _existingDp = document.getElementById('_ef-detail-panel');
        if (_existingDp) _existingDp.remove();
        var _dp = document.createElement('div');
        _dp.id = '_ef-detail-panel';
        _dp.style.cssText = 'position:fixed;top:0;right:0;width:320px;height:100vh;z-index:201;background:#131F27;border-left:1px solid rgba(255,255,255,.1);box-shadow:-20px 0 48px rgba(0,0,0,.55);display:flex;flex-direction:column;overflow:hidden';
        var _titleMap = {
          unit:    { name: "TRK-4821 · Van 53'", sub: 'Unit' },
          driver:  { name: 'Marcus Reed', sub: 'Driver' },
          trailer: { name: 'TRL-9203 · ' + _eqType, sub: 'Trailer' }
        };
        var _fieldsMap = {
          unit: [
            { label: 'Current Location', value: '' }, { label: 'ETA', value: '' },
            { label: 'Cab ID', value: 'TRK-4821' },
            { label: 'ELD', value: '<span style="color:#8B939B">Not linked</span>&nbsp;&nbsp;<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5A6A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;cursor:pointer"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>' },
            { label: 'Cab Name', value: '' }, { label: 'Plate Number', value: '' },
            { label: 'VIN', value: '' }, { label: 'Fuel Type', value: '' },
            { label: 'Operating Cost', value: '' },
            { label: 'Max. Hitch', value: '<span style="color:#8B939B">lb</span>' },
            { label: 'Axle Config.', value: '' },
            { label: 'Tank Capacity', value: '<span style="color:#8B939B">gal</span>' }
          ],
          driver: [
            { label: 'Full Name', value: 'Marcus Reed' },
            { label: 'CDL Class', value: '' }, { label: 'License #', value: '' },
            { label: 'License Expiry', value: '' }, { label: 'Phone', value: '' },
            { label: 'HOS Status', value: '' }, { label: 'Home Base', value: '' }
          ],
          trailer: [
            { label: 'Trailer ID', value: 'TRL-9203' },
            { label: 'Type', value: _eqType },
            { label: 'Plate Number', value: '' }, { label: 'VIN', value: '' },
            { label: 'Length', value: '' }, { label: 'Capacity', value: '' },
            { label: 'Max. Weight', value: '' }
          ]
        };
        function _buildPanel(tab) {
          var t = _titleMap[tab];
          var fields = _fieldsMap[tab];
          var tabsHtml = ['unit','driver','trailer'].map(function(tk) {
            var isAct = tk === tab;
            var lbl = tk.charAt(0).toUpperCase() + tk.slice(1);
            return '<button data-tab="' + tk + '" style="padding:10px 0;border:0;background:transparent;font:' + (isAct?'800':'600') + ' 13px Nunito,system-ui;color:' + (isAct?'#DDE3E9':'#5A6A7A') + ';cursor:pointer;border-bottom:2px solid ' + (isAct?'#7BCBCB':'transparent') + ';flex:1">' + lbl + '</button>';
          }).join('');
          var fieldsHtml = fields.map(function(f) {
            return '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06)">' +
              '<span style="font:500 12px Nunito,system-ui;color:#5A6A7A;flex-shrink:0">' + f.label + '</span>' +
              '<span style="font:600 12px Nunito,system-ui;color:#DDE3E9;text-align:right;max-width:55%">' + (f.value || '') + '</span>' +
            '</div>';
          }).join('');
          _dp.innerHTML =
            '<div style="display:flex;align-items:center;justify-content:space-between;padding:16px 18px 12px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">' +
              '<div>' +
                '<div style="font:800 15px Nunito,system-ui;color:#DDE3E9;line-height:1.2">' + t.name + '</div>' +
                '<div style="font:500 11px Nunito,system-ui;color:#5A6A7A;margin-top:2px">' + t.sub + '</div>' +
              '</div>' +
              '<div style="display:flex;align-items:center;gap:5px">' +
                '<button style="width:28px;height:28px;border-radius:8px;background:#17202A;border:1px solid rgba(255,255,255,.08);color:#8B939B;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;padding:0">⋯</button>' +
                '<button id="_ef-dp-close" style="width:28px;height:28px;border-radius:8px;background:#17202A;border:1px solid rgba(255,255,255,.08);color:#8B939B;cursor:pointer;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;padding:0">×</button>' +
              '</div>' +
            '</div>' +
            '<div style="display:flex;border-bottom:1px solid rgba(255,255,255,.08);padding:0 18px;flex-shrink:0">' + tabsHtml + '</div>' +
            '<div style="flex:1;overflow-y:auto;padding:0 18px 20px" class="ef-scroll">' +
              '<div style="font:700 10px Nunito,system-ui;letter-spacing:.08em;text-transform:uppercase;color:#5A6A7A;padding:14px 0 6px">General information</div>' +
              fieldsHtml +
              (tab === 'unit' ?
                '<div style="font:700 10px Nunito,system-ui;letter-spacing:.08em;text-transform:uppercase;color:#5A6A7A;padding:14px 0 6px;margin-top:4px">Documents</div>' +
                '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06)">' +
                  '<span style="font:500 12px Nunito,system-ui;color:#5A6A7A">Vehicle Photos</span>' +
                  '<div style="width:34px;height:20px;border-radius:999px;background:#27A767;position:relative;cursor:pointer;flex-shrink:0"><div style="position:absolute;top:2px;right:2px;width:16px;height:16px;border-radius:999px;background:#fff"></div></div>' +
                '</div>'
              : '') +
            '</div>';
          _dp.querySelector('#_ef-dp-close').addEventListener('click', function() { _dp.remove(); });
          _dp.querySelectorAll('[data-tab]').forEach(function(btn) {
            btn.addEventListener('click', function() { _buildPanel(btn.getAttribute('data-tab')); });
          });
        }
        _buildPanel(activeTab);
        document.body.appendChild(_dp);
      }
      _tmc.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:18px 20px 16px;border-bottom:1px solid rgba(255,255,255,.08)">' +
          '<div style="display:flex;align-items:center;gap:8px;font:800 15px Nunito,system-ui;color:#DDE3E9">' +
            '<span style="color:#8B939B;font-weight:400">+</span> Assign driver &amp; equipment' +
          '</div>' +
          '<button id="_ef-tmc-close" style="width:28px;height:28px;border-radius:8px;background:#17202A;border:1px solid rgba(255,255,255,.08);color:#8B939B;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;font-size:18px;line-height:1">×</button>' +
        '</div>' +
        '<div style="padding:16px 20px;display:flex;flex-direction:column;gap:4px">' +
          _assignRow(_driverIcon, 'Marcus Reed', 'Driver', true, 'driver') +
          '<div style="text-align:right;padding:2px 4px 6px">' + _reqLbl + '</div>' +
          _assignRow(_truckIcon, 'TRK-4821 · Van 53\'', 'Unit', true, 'unit') +
          '<div style="text-align:right;padding:2px 4px 6px">' + _reqLbl + '</div>' +
          _assignRow(_trailerIcon, 'TRL-9203 · ' + _eqType, 'Trailer', true, 'trailer') +
          '<div style="text-align:right;padding:2px 4px 6px">' + _reqLbl + '</div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:12px 20px;border-top:1px solid rgba(255,255,255,.07)">' +
          '<button id="_ef-tmc-cancel" style="height:36px;padding:0 18px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:transparent;color:#8B939B;font:700 13px Nunito,system-ui;cursor:pointer">Cancel</button>' +
          '<button id="_ef-tmc-save" style="height:36px;padding:0 22px;border-radius:999px;border:0;background:#27A767;color:#111D25;font:800 13px Nunito,system-ui;cursor:pointer">Save</button>' +
        '</div>';
      _tmc.querySelector('#_ef-tmc-close').addEventListener('click', _closeTruckAll);
      _tmc.querySelector('#_ef-tmc-cancel').addEventListener('click', _closeTruckAll);
      _tmc.querySelector('#_ef-tmc-save').addEventListener('click', _closeTruckAll);
      _tmc.querySelectorAll('[data-detail]').forEach(function(btn) {
        btn.addEventListener('click', function(e) { e.stopPropagation(); _openDetailPanel(btn.getAttribute('data-detail')); });
      });
      _tm.appendChild(_tmbg);
      _tm.appendChild(_tmc);
      document.body.appendChild(_tm);
    });
    header.appendChild(_htruck);
    // Optimization (clock) button
    var _hopt = document.createElement('button');
    _hopt.style.cssText = 'width:36px;height:36px;border-radius:8px;background:#17202A;border:1px solid rgba(255,255,255,.08);color:#DDE3E9;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;flex-shrink:0';
    _hopt.title = 'Route preferences';
    _hopt.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>';
    _hopt.addEventListener('click', function() { _openRoutePreferences(routeId); });
    header.appendChild(_hopt);

    // Action elements – live in tabsBar (map hidden) or rightHdr (map visible)
    var _mapToggleEl = el('div', { class: 'hoverable', onclick: () => setState({ detailMapHidden: !state.detailMapHidden }), title: state.detailMapHidden ? 'Show map' : 'Hide map', style: { width: '30px', height: '30px', margin: '6px 0', borderRadius: '7px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: state.detailMapHidden ? '#27A767' : '#8B939B' } }, [
      el('svg', { style: { width: '15px', height: '15px', flex: 'none' }, html: state.detailMapHidden
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><polyline points="14 8 19 12 14 16"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><polyline points="14 8 9 12 14 16"/></svg>'
      })
    ]);
    var _editRouteEl = el('div', { class: 'hoverable', style: { padding: '6px 14px', margin: '6px 0', border: '1px solid rgba(255,255,255,.12)', borderRadius: '999px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' } }, ['Edit route']);
    var _syncPillEl = (function() {
        var rId = routeId;
        var F = 'Nunito,system-ui';
        var _hasRebuild = !!(_rebuildLoads[rId] && _rebuildLoads[rId].length);
        var wrap = document.createElement('div');
        wrap.style.cssText = 'position:relative;display:flex;align-items:center;margin:6px 0';
        var leftPart = document.createElement('div');
        leftPart.style.cssText = 'padding:6px 10px;display:flex;align-items:center;gap:6px;font:700 12px '+F+';border:1px solid rgba(255,255,255,.1);border-right:none;border-radius:999px 0 0 999px;cursor:pointer;color:#FBFBFB';
        leftPart.innerHTML = ICON.refresh + '<div style="display:flex;flex-direction:column;gap:2px"><span style="font:800 12px '+F+';color:#FBFBFB;line-height:1">Refresh</span><span style="font:400 10px '+F+';color:#6B7373;line-height:1">DataTruck · Updated 3 min ago</span></div>';
        leftPart.addEventListener('click', function() { _syncTMS(rId, leftPart); });
        var rightPart = document.createElement('div');
        rightPart.style.cssText = 'padding:6px 8px;border:1px solid rgba(255,255,255,.1);border-left:1px solid rgba(255,255,255,.07);border-radius:0 999px 999px 0;display:flex;align-items:center;cursor:pointer;color:#8B939B';
        rightPart.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>';
        function _closeDrop() {
          var ex = document.getElementById('_ef-sync-drop'); if (ex) ex.remove();
          document.removeEventListener('click', _closeDrop);
        }
        function _renderSyncDrop() {
          var ex = document.getElementById('_ef-sync-drop');
          if (ex) { _closeDrop(); return; }
          var drop = document.createElement('div');
          drop.id = '_ef-sync-drop';
          drop.style.cssText = 'position:absolute;top:calc(100% + 6px);right:0;z-index:200;background:#131F27;border:1px solid rgba(255,255,255,.12);border-radius:12px;width:290px;box-shadow:0 12px 32px rgba(0,0,0,.6);overflow:hidden';
          drop.addEventListener('click', function(e) { e.stopPropagation(); });
          var togSection = document.createElement('div');
          togSection.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.07)';
          var togText = document.createElement('div');
          togText.style.cssText = 'flex:1;min-width:0';
          togText.innerHTML = '<div style="font:700 12px '+F+';color:#FBFBFB;margin-bottom:2px">Auto-add from My Loads</div><div style="font:400 10.5px '+F+';color:#6B7373;line-height:1.4">When refreshing, add matching loads from My Loads into empty Unbooked lanes.</div>';
          var _arOn = !!_autoAddFromLoads[rId];
          var togTrack = document.createElement('div');
          togTrack.style.cssText = 'width:44px;height:24px;border-radius:999px;background:'+(_arOn?'#27A767':'rgba(255,255,255,.12)')+';position:relative;cursor:pointer;flex-shrink:0;transition:background .2s';
          var togKnob = document.createElement('div');
          togKnob.style.cssText = 'position:absolute;top:3px;left:'+(_arOn?'23px':'3px')+';width:18px;height:18px;border-radius:50%;background:#FBFBFB;transition:left .2s';
          togTrack.appendChild(togKnob);
          togTrack.addEventListener('click', function() {
            _arOn = !_arOn; _autoAddFromLoads[rId] = _arOn;
            togTrack.style.background = _arOn ? '#27A767' : 'rgba(255,255,255,.12)';
            togKnob.style.left = _arOn ? '23px' : '3px';
          });
          togSection.appendChild(togText); togSection.appendChild(togTrack);
          drop.appendChild(togSection);
          var cycleSection = document.createElement('div');
          cycleSection.style.cssText = 'padding:12px 16px;display:flex;flex-direction:column;gap:8px';
          var cycleHdr = document.createElement('div');
          cycleHdr.style.cssText = 'display:flex;align-items:center;gap:6px;margin-bottom:2px';
          cycleHdr.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FBB303" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 .49-4.14"></path></svg>' +
            '<span style="font:800 10.5px '+F+';color:#FBB303;letter-spacing:.04em;text-transform:uppercase">Cycle loads</span>' +
            (_hasRebuild ? '<span style="padding:1px 6px;border-radius:999px;background:#FBB303;color:#0B131B;font:900 9px '+F+'">'+_rebuildLoads[rId].length+'</span>' : '');
          cycleSection.appendChild(cycleHdr);
          if (_hasRebuild) {
            _rebuildLoads[rId].forEach(function(ld, li) {
              var card = document.createElement('div');
              card.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 10px;background:#17242E;border-radius:8px;border:1px solid rgba(255,255,255,.07)';
              var info = document.createElement('div');
              info.style.cssText = 'display:flex;flex-direction:column;gap:2px;min-width:0;flex:1';
              info.innerHTML = '<div style="font:700 11.5px '+F+';color:#FBFBFB;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+ld.origin+' → '+ld.dest+'</div><div style="font:600 10px '+F+';color:#8B939B">'+ld.miles+' mi · $'+ld.income.toLocaleString('en-US')+'</div>';
              var addBtn = document.createElement('button');
              addBtn.style.cssText = 'padding:5px 10px;background:#27A767;border:none;border-radius:7px;color:#0B131B;font:800 11px '+F+';cursor:pointer;white-space:nowrap;flex-shrink:0';
              addBtn.textContent = '+ Al plan';
              (function(capturedLd, capturedLi) {
                addBtn.addEventListener('click', function() {
                  var routeLoads = loadsOf(rId);
                  var firstLoad = routeLoads[0];
                  var newLd = { id:'ef-rb-'+rId+'-'+capturedLi, route:rId, origin:capturedLd.origin, dest:capturedLd.dest, miles:capturedLd.miles, income:capturedLd.income, status:'Booked', pickup:capturedLd.pickup, pickupTime:'08:00 - 12:00', delivery:capturedLd.pickup, deliveryTime:'12:00 - 16:00', customer:capturedLd.customer!=='--'?capturedLd.customer:(firstLoad?firstLoad.customer:'--'), eta:'--', onTime:'--', stops:1, truck:firstLoad?firstLoad.truck:'--', equipment:capturedLd.equipment||(firstLoad?firstLoad.equipment:'Van 53') };
                  var insertIdx = LOADS.findIndex(function(l){ return l.route===rId; });
                  if (insertIdx>=0) LOADS.splice(insertIdx,0,newLd); else LOADS.push(newLd);
                  _rebuildLoads[rId].splice(capturedLi,1);
                  if (_rebuildLoads[rId].length===0) {
                    delete _rebuildLoads[rId];
                    var _dotEl = document.getElementById('_ef-sync-dot-' + rId);
                    if (_dotEl) _dotEl.style.display = 'none';
                  }
                  _closeDrop();
                  _showAddingLoad(function() {
                    var _loadsNow = loadsOf(rId);
                    var _newIdx = _loadsNow.findIndex(function(l){ return l.id===newLd.id; });
                    _rebalancePlanChain(rId, _newIdx+1);
                  });
                });
              })(ld, li);
              card.appendChild(info); card.appendChild(addBtn); cycleSection.appendChild(card);
            });
          } else {
            var noCycle = document.createElement('div');
            noCycle.style.cssText = 'display:flex;align-items:center;gap:7px;color:#6B7373;font:400 11px '+F;
            noCycle.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No cycle loads to add.';
            cycleSection.appendChild(noCycle);
          }
          drop.appendChild(cycleSection);
          wrap.appendChild(drop);
          setTimeout(function() { document.addEventListener('click', _closeDrop); }, 0);
        }
        rightPart.addEventListener('click', function(e) { e.stopPropagation(); _renderSyncDrop(); });
        rightPart.style.position = 'relative';
        var _dot = document.createElement('div');
        _dot.id = '_ef-sync-dot-' + rId;
        _dot.style.cssText = 'position:absolute;top:-3px;right:2px;width:8px;height:8px;border-radius:50%;background:#FBB303;border:2px solid #0D141B;pointer-events:none;display:' + (_hasRebuild ? 'block' : 'none');
        rightPart.appendChild(_dot);
        wrap.appendChild(leftPart); wrap.appendChild(rightPart);
        return wrap;
    })();
    function _detailTab(id, icon, label) {
      var active = state.detailTab === id;
      return el('div', {
        onclick: id === 'report' ? undefined : (() => setState({ detailTab: id })),
        style: {
          display: 'flex', alignItems: 'center', gap: '7px', padding: '12px 12px',
          fontSize: '12.5px', fontWeight: '800',
          color: active ? '#27A767' : '#8B939B',
          boxShadow: active ? 'inset 0 -2px 0 0 #27A767' : 'none',
          cursor: id === 'report' ? 'default' : 'pointer',
          opacity: id === 'report' ? '.5' : '1'
        },
        html: icon + '<span style="margin-left:7px;">' + label + '</span>'
      });
    }
    var _planTabEls = [
      _detailTab('plan', ICON.plan, 'Plan'),
      _detailTab('control', ICON.onroad, 'Control'),
      _detailTab('report', ICON.report, 'Report')
    ];
    const _tbStyle = { flex: 'none', display: 'flex', alignItems: 'center', gap: '4px', background: '#0E1820', borderBottom: '1px solid rgba(255,255,255,.07)' };
    const _tbContents = [..._planTabEls, el('div', { style: { flex: '1' } }), _syncPillEl, _editRouteEl, _mapToggleEl];

    const laneCols = '40px minmax(200px,1fr) 110px 68px 84px 110px 100px 80px 65px 90px 80px 90px 110px 44px';
    const TABLE_MIN_W = '1264px';
    const tableOuter = el('div', { style: { border: '1px solid rgba(255,255,255,.08)', borderRadius: '12px', overflow: 'hidden' } });
    const table = el('div', { class: 'ef-scroll', style: { background: '#101B23', overflowX: 'auto' } });
    tableOuter.appendChild(table);
    const thP = { padding: '11px 6px 11px 0' };
    const thead = el('div', { style: { display: 'grid', gridTemplateColumns: laneCols, padding: '0 14px', background: '#131F27', borderBottom: '1px solid rgba(255,255,255,.07)', fontSize: '11px', fontWeight: '800', color: '#8B939B', minWidth: TABLE_MIN_W } }, [
      el('div', { style: thP }, ['']),
      el('div', { style: thP }, ['Origin - Destination']),
      el('div', { style: thP }, ['Status']),
      el('div', { style: thP }, ['Mileage']),
      el('div', { style: thP }, ['Driving time']),
      el('div', { style: thP }, ['Income']),
      el('div', { style: thP }, ['RPM']),
      el('div', { style: thP }, ['Fuel cost']),
      el('div', { style: thP }, ['Toll cost']),
      el('div', { style: thP }, ['Custom cost']),
      el('div', { style: thP, html: 'Op cost <svg style="vertical-align:middle;margin-left:3px;display:inline" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>' }),
      el('div', { style: thP }, ['Total cost']),
      el('div', { style: thP }, ['Profit']),
      el('div', { style: thP }, [''])
    ]);
    table.appendChild(thead);

    // ── Nearby-cities lookup for zone chip ──
    var NEARBY_CITIES = {
      'Newark, NJ':        ['New York, NY', 'Jersey City, NJ', 'Albany, NY'],
      'New York, NY':      ['Newark, NJ', 'Jersey City, NJ', 'Yonkers, NY'],
      'Philadelphia, PA':  ['Camden, NJ', 'Wilmington, DE', 'Trenton, NJ'],
      'Chicago, IL':       ['Joliet, IL', 'Aurora, IL', 'Gary, IN'],
      'Houston, TX':       ['Baytown, TX', 'Pasadena, TX', 'Sugar Land, TX'],
      'Dallas, TX':        ['Fort Worth, TX', 'Arlington, TX', 'Garland, TX'],
      'Phoenix, AZ':       ['Tempe, AZ', 'Mesa, AZ', 'Scottsdale, AZ'],
      'Los Angeles, CA':   ['Long Beach, CA', 'Anaheim, CA', 'Burbank, CA'],
      'San Diego, CA':     ['Chula Vista, CA', 'El Cajon, CA', 'Oceanside, CA'],
      'San Jose, CA':      ['Santa Clara, CA', 'Fremont, CA', 'Oakland, CA'],
      'San Antonio, TX':   ['Austin, TX', 'New Braunfels, TX', 'Laredo, TX'],
      'Austin, TX':        ['Round Rock, TX', 'San Marcos, TX', 'Georgetown, TX'],
      'Denver, CO':        ['Aurora, CO', 'Boulder, CO', 'Fort Collins, CO'],
      'Seattle, WA':       ['Tacoma, WA', 'Bellevue, WA', 'Renton, WA'],
      'Atlanta, GA':       ['Marietta, GA', 'Decatur, GA', 'Savannah, GA'],
      'Miami, FL':         ['Fort Lauderdale, FL', 'Hialeah, FL', 'West Palm Beach, FL'],
      'Kansas City, MO':   ['Overland Park, KS', 'Independence, MO', 'Lenexa, KS'],
      'Columbus, OH':      ['Dayton, OH', 'Cincinnati, OH', 'Cleveland, OH'],
      'Indianapolis, IN':  ['Carmel, IN', 'Anderson, IN', 'Louisville, KY'],
      'Nashville, TN':     ['Murfreesboro, TN', 'Franklin, TN', 'Knoxville, TN'],
      'Memphis, TN':       ['West Memphis, AR', 'Southaven, MS', 'Bartlett, TN'],
      'Louisville, KY':    ['Jeffersonville, IN', 'Lexington, KY', 'Cincinnati, OH'],
      'Albuquerque, NM':   ['Santa Fe, NM', 'Rio Rancho, NM', 'Farmington, NM'],
      'Minneapolis, MN':   ['St. Paul, MN', 'Bloomington, MN', 'Duluth, MN'],
      'Charlotte, NC':     ['Concord, NC', 'Gastonia, NC', 'Rock Hill, SC'],
      'Pittsburgh, PA':    ['Altoona, PA', 'Erie, PA', 'Harrisburg, PA'],
      'St. Louis, MO':     ['O\'Fallon, MO', 'Springfield, MO', 'Cape Girardeau, MO'],
      'Tulsa, OK':         ['Oklahoma City, OK', 'Broken Arrow, OK', 'Bixby, OK'],
      'Oklahoma City, OK': ['Norman, OK', 'Edmond, OK', 'Tulsa, OK'],
      'Baton Rouge, LA':   ['New Orleans, LA', 'Shreveport, LA', 'Lafayette, LA'],
      'Jackson, MS':       ['Ridgeland, MS', 'Hattiesburg, MS', 'Memphis, TN'],
      'Birmingham, AL':    ['Huntsville, AL', 'Montgomery, AL', 'Tuscaloosa, AL'],
      'El Paso, TX':       ['Las Cruces, NM', 'Albuquerque, NM', 'Tucson, AZ'],
      'Portland, OR':      ['Salem, OR', 'Eugene, OR', 'Vancouver, WA'],
      'Las Vegas, NV':     ['Henderson, NV', 'North Las Vegas, NV', 'Laughlin, NV'],
    };
    function _zoneNearby(city) {
      if (NEARBY_CITIES[city]) return NEARBY_CITIES[city];
      // Fallback: try to find by state
      var state = (city.split(', ')[1] || '').trim();
      var found = Object.keys(NEARBY_CITIES).filter(function(k) { return k.endsWith(', ' + state) && k !== city; });
      if (found.length) return NEARBY_CITIES[found[0]].slice(0, 2).concat([found[0]]);
      return ['ciudades del área', 'zonas aledañas'];
    }
    // Zone tooltip portal (body-level, not clipped by any overflow)
    var _zoneTip = document.getElementById('_ef-zone-tip');
    if (!_zoneTip) {
      _zoneTip = document.createElement('div');
      _zoneTip.id = '_ef-zone-tip';
      _zoneTip.style.cssText = 'position:fixed;z-index:9998;top:-999px;left:-999px;display:none;flex-direction:column;gap:0;padding:10px 13px 11px;background:#111C27;border:1px solid rgba(123,203,203,.2);border-radius:10px;min-width:190px;box-shadow:0 10px 32px rgba(0,0,0,.65);pointer-events:none';
      document.body.appendChild(_zoneTip);
    }
    var _zoneTipCloseHandler = null;
    function _showZoneTip(chipEl, destCity) {
      var nearby = _zoneNearby(destCity);
      _zoneTip.innerHTML =
        '<div style="font:700 10px Nunito,system-ui;letter-spacing:.08em;text-transform:uppercase;color:#7BCBCB;margin-bottom:5px">Search zone</div>' +
        '<div style="font:500 11.5px Nunito,system-ui;color:#8D99A6;margin-bottom:8px;line-height:1.4">Including nearby cities to<br>search for loads, such as</div>' +
        nearby.map(function(c) {
          return '<div style="display:flex;align-items:center;gap:7px;padding:3px 0">' +
            '<svg width="8" height="8" viewBox="0 0 8 8" style="flex-shrink:0"><circle cx="4" cy="4" r="3" fill="#7BCBCB" fill-opacity=".7"/></svg>' +
            '<span style="font:700 12px Nunito,system-ui;color:#DDE3E9">' + c + '</span></div>';
        }).join('');
      // Measure then position above the chip
      _zoneTip.style.display = 'flex';
      var tipW = _zoneTip.offsetWidth, tipH = _zoneTip.offsetHeight;
      var r = chipEl.getBoundingClientRect();
      var x = Math.max(6, Math.min(r.left, window.innerWidth - tipW - 6));
      var y = r.top - tipH - 8;
      _zoneTip.style.left = Math.round(x) + 'px';
      _zoneTip.style.top = Math.round(y) + 'px';
      // Click-outside to dismiss (pointer-events off so body click works)
      _zoneTip.style.pointerEvents = 'none';
    }
    function _hideZoneTip() {
      _zoneTip.style.display = 'none';
      if (_zoneTipCloseHandler) { document.removeEventListener('click', _zoneTipCloseHandler, true); _zoneTipCloseHandler = null; }
    }
    function _toggleZoneTip(chipEl, destCity) {
      if (_zoneTip.style.display === 'flex') { _hideZoneTip(); return; }
      _showZoneTip(chipEl, destCity);
      if (_zoneTipCloseHandler) document.removeEventListener('click', _zoneTipCloseHandler, true);
      _zoneTipCloseHandler = function(e) { if (e.target !== chipEl) { _hideZoneTip(); } };
      setTimeout(function() { document.addEventListener('click', _zoneTipCloseHandler, true); }, 0);
    }

    // Priority-based lane highlight: compute per-route before first appendRow call
    var _lHighlightPriority = {};
    (function() {
      var _importantStatuses = ['Unbooked','Booked','In Transit','Dispatched','Offer','Assigned'];
      var _priorityCount = 0;
      d.rows.forEach(function(r) {
        if (r.num === 'DH') return;
        var _isImportant = _importantStatuses.indexOf(r.status) >= 0;
        if (_isImportant) {
          _priorityCount++;
          _lHighlightPriority[r.origin + '|' + r.dest] = _priorityCount;
        }
      });
    })();

    var _firstDhRendered = false;
    function appendRow(row) {
      const _isDH = row.num === 'DH';
      const _isFirstDh = _isDH && !_firstDhRendered;
      if (_isDH) _firstDhRendered = true;
      let _lBorder = 'none';
      if (!_isDH) {
        var _pri = _lHighlightPriority[row.origin + '|' + row.dest] || 0;
        var _isUnbooked = row.status === 'Unbooked';
        var _solidColor = _isUnbooked ? '#FBB303' : (row.status === 'In Transit' || row.status === 'Dispatched') ? '#27A767' : 'rgba(39,167,103,.8)';
        var _muteColor  = _isUnbooked ? 'rgba(251,179,3,.3)' : (row.status === 'In Transit' || row.status === 'Dispatched') ? 'rgba(39,167,103,.3)' : 'rgba(39,167,103,.2)';
        if (_pri === 1) _lBorder = '3px solid ' + _solidColor;
        else if (_pri === 2) _lBorder = '3px solid ' + _muteColor;
      }
      const rowDiv = el('div', {
        class: 'row-hoverable',
        style: { display: 'grid', gridTemplateColumns: laneCols, alignItems: 'center', padding: '0 14px', borderBottom: '1px solid rgba(255,255,255,.05)', borderLeft: _lBorder, minWidth: TABLE_MIN_W, opacity: String(row.rowOpacity != null ? row.rowOpacity : 1) }
      }, [
        el('div', { style: { padding: '10px 6px 10px 0' } }, [el('span', { style: { display: 'grid', placeItems: 'center', width: '32px', height: '32px', borderRadius: '8px', fontSize: row.numFontSize || '10.5px', fontWeight: '800', background: row.numBg, color: row.numFg, border: row.numBorder || 'none', boxSizing: 'border-box' } }, [row.num])]),
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 6px 10px 0' } }, [
          el('div', { style: { flex: '1', minWidth: '0' } }, [
            el('div', { style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '12px', fontWeight: String(row.weight), color: row.textFg } }, [row.origin]),
            el('div', { style: { whiteSpace: 'nowrap', color: '#6B7373', fontSize: '10px', fontFamily: "'JetBrains Mono', monospace" } }, [row.originDate])
          ]),
          iconEl('arrow', { flex: 'none' }),
          el('div', { style: { flex: '1', minWidth: '0' } }, [
            el('div', { style: { display: 'flex', alignItems: 'center', gap: '5px', minWidth: '0' } }, [
              el('div', { style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '12px', fontWeight: String(row.weight), color: row.textFg, flex: '1', minWidth: '0' } }, [row.dest]),
              ...(row.status === 'Unbooked' ? [(function() {
                var chip = document.createElement('span');
                chip.style.cssText = 'display:inline-flex;align-items:center;gap:3px;padding:2px 8px;border-radius:999px;border:1px solid rgba(123,203,203,.28);background:rgba(123,203,203,.07);color:#7BCBCB;font:700 9px Nunito,system-ui;cursor:pointer;flex-shrink:0;text-transform:uppercase;letter-spacing:.05em;user-select:none;transition:background 120ms ease';
                chip.innerHTML = 'zone';
                chip.addEventListener('mouseenter', function() { chip.style.background = 'rgba(123,203,203,.14)'; });
                chip.addEventListener('mouseleave', function() { chip.style.background = 'rgba(123,203,203,.07)'; });
                chip.addEventListener('click', function(e) { e.stopPropagation(); _toggleZoneTip(chip, row.dest); });
                return chip;
              })()] : [])
            ]),
            el('div', { style: { whiteSpace: 'nowrap', color: '#6B7373', fontSize: '10px', fontFamily: "'JetBrains Mono', monospace" } }, [row.destDate])
          ])
        ]),
        (function() {
          var _stCell = document.createElement('div');
          _stCell.style.cssText = 'padding:10px 6px 10px 0;position:relative';
          var _badge = document.createElement('span');
          if (row.status === 'In Transit') {
            _badge.style.cssText = 'display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:4px;background:rgba(251,191,36,.12);color:#fbbf24;font:600 10px Nunito,system-ui;letter-spacing:.04em;text-transform:uppercase;cursor:default;user-select:none';
            var _dot = document.createElement('span');
            _dot.style.cssText = 'width:6px;height:6px;border-radius:50%;background:currentColor;animation:_efDotPulse 1.6s ease-in-out infinite;flex-shrink:0';
            _badge.appendChild(_dot);
            _badge.appendChild(document.createTextNode('In Transit'));
          } else {
            _badge.style.cssText = 'display:inline-block;padding:4px 10px;border-radius:8px;font-size:10.5px;font-weight:800;background:'+row.statusBg+';color:'+row.statusFg+';border:'+row.statusBorder;
            _badge.textContent = row.status;
          }
          _stCell.appendChild(_badge);
          if (row.status === 'In Transit' && row.loadIdx !== null) {
            var _ltt = loadsOf(routeId)[row.loadIdx];
            if (_ltt) {
              var _pct = 74;
              var _miDriven = Math.round(_ltt.miles * _pct / 100);
              var _isLate = _ltt.onTime && _ltt.onTime.indexOf('Late') === 0;
              var _depTime = (_ltt.pickupTime || '').split(' - ')[0] || '--';
              var _tip = document.createElement('div');
              _tip.style.cssText = 'display:none;position:absolute;bottom:calc(100% + 12px);left:50%;transform:translateX(-50%);z-index:300;background:#1a2030;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 18px;width:256px;box-shadow:0 20px 60px rgba(0,0,0,.6);font-family:Nunito,system-ui;pointer-events:none';
              _tip.innerHTML =
                // Down-pointing arrow
                '<div style="position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);width:0;height:0;border:7px solid transparent;border-bottom:none;border-top-color:#1a2030"></div>' +
                // Header
                '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px">' +
                  '<span style="font:700 9px Nunito,system-ui;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.25)">Live tracking</span>' +
                  '<span style="font:400 9px Nunito,system-ui;color:rgba(255,255,255,.2)">updated 4 min ago</span>' +
                '</div>' +
                // Departed
                '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:7px">' +
                  '<span style="font:400 11px Nunito,system-ui;color:rgba(255,255,255,.4)">Departed</span>' +
                  '<span style="font:600 11px \'JetBrains Mono\',monospace;color:rgba(255,255,255,.75)">'+_ltt.pickup.replace(/\/\d{4}$/,'')+' · '+_depTime+'</span>' +
                '</div>' +
                // Progress row
                '<div style="display:flex;justify-content:space-between;align-items:baseline">' +
                  '<span style="font:400 11px Nunito,system-ui;color:rgba(255,255,255,.4)">Progress</span>' +
                  '<span style="font:600 11px \'JetBrains Mono\',monospace;color:rgba(255,255,255,.75)">'+_miDriven.toLocaleString('en-US')+' mi / '+_ltt.miles.toLocaleString('en-US')+' mi</span>' +
                '</div>' +
                // Progress bar
                '<div style="display:flex;align-items:center;gap:8px;margin:10px 0 0">' +
                  '<div style="flex:1;height:4px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden">' +
                    '<div style="height:100%;width:'+_pct+'%;background:linear-gradient(90deg,#27A767,'+(_isLate?'#fbbf24':'#27A767')+');border-radius:2px"></div>' +
                  '</div>' +
                  '<span style="font:400 9px \'JetBrains Mono\',monospace;color:rgba(255,255,255,.25);flex-shrink:0">'+_pct+'%</span>' +
                '</div>' +
                // Divider
                '<div style="height:1px;background:rgba(255,255,255,.07);margin:12px 0"></div>' +
                // ETA + badge
                '<div style="display:flex;justify-content:space-between;align-items:center">' +
                  '<div>' +
                    '<div style="font:500 9px Nunito,system-ui;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:3px">Estimated ETA</div>' +
                    '<div style="font:800 14px \'JetBrains Mono\',monospace;color:#FFFFFF">'+_ltt.delivery.replace(/\/\d{4}$/,'')+' · '+(_ltt.eta||'--')+'</div>' +
                  '</div>' +
                  '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px">' +
                    '<span style="font:500 9px Nunito,system-ui;letter-spacing:.08em;text-transform:uppercase;color:'+(_isLate?'rgba(248,113,113,.6)':'rgba(39,167,103,.7)')+'">'+(_isLate?'Delay':'Status')+'</span>' +
                    (_isLate
                      ? '<span style="font:700 10px \'JetBrains Mono\',monospace;border-radius:4px;padding:2px 7px;color:#f87171;background:rgba(248,113,113,.1);border:1px solid rgba(248,113,113,.2)">+'+_ltt.onTime.replace('Late ','').replace('m',' min')+'</span>'
                      : '<span style="font:700 10px \'JetBrains Mono\',monospace;border-radius:4px;padding:2px 7px;color:#27A767;background:rgba(39,167,103,.1);border:1px solid rgba(39,167,103,.25)">On time</span>'
                    ) +
                  '</div>' +
                '</div>';
              _stCell.appendChild(_tip);
              _badge.addEventListener('mouseenter', function() { _tip.style.display = 'block'; });
              _badge.addEventListener('mouseleave', function() { _tip.style.display = 'none'; });
            }
          }
          return _stCell;
        })(),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: '12px', fontWeight: '700', color: row.textFg, fontVariantNumeric: 'tabular-nums' } }, [row.mileage]),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: '12px', color: row.textFg } }, [row.driving]),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: row.isRange ? '10px' : '12px', fontWeight: '800', color: row.incomeFg, fontVariantNumeric: 'tabular-nums' } }, [row.income]),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: row.isRange ? '10px' : '12px', color: '#7BCBCB', fontVariantNumeric: 'tabular-nums' } }, [row.rpm]),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: '12px', color: '#8B939B', fontVariantNumeric: 'tabular-nums' } }, [row.fuelCost || '--']),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: '12px', color: '#8B939B', fontVariantNumeric: 'tabular-nums' } }, [row.tollCost || '$0']),
        el('div', { style: { padding: '10px 6px 10px 0' } }, [el('div', { style: { display: 'inline-flex', alignItems: 'center', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,.12)', fontSize: '11px', fontWeight: '700', cursor: 'pointer', color: '#8B939B' } }, ['Add +'])]),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: '12px', color: '#8B939B', fontVariantNumeric: 'tabular-nums' } }, [row.opCost || '--']),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: '12px', color: '#8B939B', fontVariantNumeric: 'tabular-nums' } }, [row.cost]),
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: row.isRange ? '10px' : '12px', fontWeight: '800', color: row.profitFg || '#FBFBFB', fontVariantNumeric: 'tabular-nums' } }, [row.profitStr || '--']),
        (function() {
          var _wCell = document.createElement('div');
          _wCell.style.cssText = 'padding:10px 0;display:flex;align-items:center;justify-content:center';
          if (row.isRange && row.loadIdx !== null) {
            var _sk = routeId + '_' + row.loadIdx;
            var _ss = _lbSearch[_sk];
            var _wBtn = document.createElement('button');
            var _wColor, _wBg, _wBd, _wAnim = '';
            if (_ss === 'done') {
              _wColor = '#27A767'; _wBg = 'rgba(39,167,103,.12)'; _wBd = 'rgba(39,167,103,.4)';
            } else if (_ss === 'searching') {
              _wColor = '#FBB303'; _wBg = 'rgba(251,179,3,.08)'; _wBd = 'rgba(251,179,3,.3)';
              _wAnim = 'style="animation:_ef-wpulse .7s ease-in-out infinite alternate"';
            } else {
              _wColor = 'rgba(139,147,155,0.55)'; _wBg = 'rgba(255,255,255,.03)'; _wBd = 'rgba(255,255,255,.07)';
            }
            var _wCursor = _ss === 'searching' ? 'default' : 'pointer';
            _wBtn.style.cssText = 'display:flex;align-items:center;justify-content:center;width:28px;height:28px;background:'+_wBg+';border:1px solid '+_wBd+';border-radius:8px;color:'+_wColor+';cursor:'+_wCursor+';flex:none;padding:0';
            _wBtn.innerHTML = '<svg '+_wAnim+' width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>';
            (function(sk, origin) {
              _wBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                var st = _lbSearch[sk];
                if (st === 'done') {
                  if (document.getElementById('_ef-lb-notif')) { _hideLbNotif(); } else { _showLbNotif(sk, origin); }
                } else if (st !== 'searching') {
                  if (document.getElementById('_ef-lb-conf')) { _hideLbConf(); } else { _showLbConfirm(_wBtn, sk, origin); }
                }
                // 'searching': intentionally non-interactive
              });
            })(_sk, row.origin);
            _wCell.appendChild(_wBtn);
          }
          return _wCell;
        })()
      ]);
      if (row.isRange && row.loadIdx !== null) {
        rowDiv.addEventListener('mouseenter', function() { clearTimeout(_lbTimer); _renderLbBar(rowDiv, routeId, row.loadIdx, row.origin, row.dest); });
        rowDiv.addEventListener('mouseleave', function() { _lbTimer = setTimeout(function() { if (!document.getElementById('_ef-lb-conf') && !document.getElementById('_ef-lb-notif') && !document.getElementById('_ef-lb-menu')) { _hideLbBar(); } }, 200); });
      }
      if (_isFirstDh) {
        var _dhOrigCell = rowDiv.children[1] && rowDiv.children[1].children[0] && rowDiv.children[1].children[0].children[0];
        if (_dhOrigCell) {
          _dhOrigCell.style.display = 'flex';
          _dhOrigCell.style.alignItems = 'center';
          _dhOrigCell.style.gap = '4px';
          var _pencilBtn = document.createElement('span');
          _pencilBtn.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;flex-shrink:0;border-radius:4px;border:1px solid rgba(255,255,255,.1);color:#6B7373;cursor:pointer;transition:color .15s,border-color .15s';
          _pencilBtn.innerHTML = '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>';
          _pencilBtn.addEventListener('mouseenter', function() {
            _pencilBtn.style.color = '#7BCBCB';
            _pencilBtn.style.borderColor = 'rgba(123,203,203,.35)';
            _showPinTip(_pencilBtn, '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7BCBCB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg><span style="color:#FBFBFB;font-weight:500">Edit in Route Preferences</span>');
          });
          _pencilBtn.addEventListener('mouseleave', function() {
            _pencilBtn.style.color = '#6B7373';
            _pencilBtn.style.borderColor = 'rgba(255,255,255,.1)';
            _hidePinTip();
          });
          _pencilBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            _openRoutePreferences(routeId);
          });
          _dhOrigCell.appendChild(_pencilBtn);
        }
      }
      table.appendChild(rowDiv);
    }

    d.rows.forEach(appendRow);

    // ── "Add +" row at bottom of lane table ──
    (function() {
      var _addLs = loadsOf(routeId);
      var _addOrigin = _addLs.length ? _addLs[_addLs.length - 1].dest : '--';
      var addRowDiv = document.createElement('div');
      addRowDiv.style.cssText = 'display:grid;grid-template-columns:'+laneCols+';align-items:center;padding:0 14px;min-width:'+TABLE_MIN_W+';border-bottom:1px solid rgba(255,255,255,.04)';
      // Col 1: empty
      var _c1 = document.createElement('div'); addRowDiv.appendChild(_c1);
      // Col 2: Origin → Destination placeholder
      var _c2 = document.createElement('div');
      _c2.style.cssText = 'padding:10px 6px;display:flex;align-items:center;gap:8px;color:#2C3A47;font:400 12px Nunito,system-ui';
      _c2.innerHTML = 'Origin <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2C3A47" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> Destination';
      addRowDiv.appendChild(_c2);
      // Col 3: Add + button
      var _c3 = document.createElement('div'); _c3.style.cssText = 'padding:10px 0';
      var _addBtn = document.createElement('div');
      _addBtn.style.cssText = 'display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border:1px solid rgba(39,167,103,.5);border-radius:8px;color:#27A767;font:800 12px Nunito,system-ui;cursor:pointer;background:rgba(39,167,103,.07);user-select:none';
      _addBtn.innerHTML = 'Add <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"></path></svg>';
      _addBtn.addEventListener('click', function(e) { e.stopPropagation(); _showAddRowMenu(_addBtn, routeId, _addOrigin); });
      _c3.appendChild(_addBtn); addRowDiv.appendChild(_c3);
      // Cols 4-14: dashes + empty wifi col
      for (var _ci = 0; _ci < 11; _ci++) {
        var _cd = document.createElement('div'); _cd.style.cssText = 'padding:10px 6px;color:#2C3A47;font:400 11px Nunito,system-ui'; _cd.textContent = _ci < 10 ? '----------' : ''; addRowDiv.appendChild(_cd);
      }
      table.appendChild(addRowDiv);
    })();

    const _totHasUnb = d.st.loads.some(l => l.status === 'Unbooked');
    const _totIncUpper = Math.round(d.incomeNum * 1.45);
    const _totIncDisplay = _totHasUnb ? (d.totalIncome + '–' + money(_totIncUpper)) : d.totalIncome;
    const _totIncFontSize = _totHasUnb ? '10.5px' : '12.5px';
    const _totPftLow = money(Math.round(d.incomeNum * 0.22));
    const _totPftHigh = money(Math.round(_totIncUpper * 0.38));
    const _totPftDisplay = _totHasUnb ? (_totPftLow + '–' + _totPftHigh) : d.profit;
    const _totPftFontSize = _totHasUnb ? '10.5px' : '12.5px';
    table.appendChild(el('div', { style: { display: 'grid', gridTemplateColumns: laneCols, alignItems: 'start', padding: '0 14px', background: '#131F27', minWidth: TABLE_MIN_W } }, [
      el('div', {}, []),
      el('div', { style: { padding: '14px 6px', fontSize: '12.5px', fontWeight: '800', color: '#8B939B' } }, ['Total']),
      el('div', {}, []),
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: '12.5px', fontWeight: '900', fontVariantNumeric: 'tabular-nums' } }, [d.totalMiles]),
      el('div', { style: { padding: '14px 6px 14px 0' } }, [
        el('div', { style: { fontSize: '12.5px', fontWeight: '900' } }, [d.totalDriving]),
        el('div', { style: { color: '#6B7373', fontSize: '10px' } }, [d.totalDays])
      ]),
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: _totIncFontSize, fontWeight: '900', color: '#3FC281', fontVariantNumeric: 'tabular-nums' } }, [_totIncDisplay]),
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: '12.5px', fontWeight: '900', color: '#7BCBCB', fontVariantNumeric: 'tabular-nums' } }, [d.totalRpm]),
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: '12.5px', fontWeight: '900', color: '#8B939B', fontVariantNumeric: 'tabular-nums' } }, [d.totalFuelCost]),
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: '12.5px', fontWeight: '900', color: '#8B939B' } }, ['$0']),
      el('div', {}, []),
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: '12.5px', fontWeight: '900', color: '#8B939B', fontVariantNumeric: 'tabular-nums' } }, [d.totalOpCost]),
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: '12.5px', fontWeight: '900', color: '#8B939B', fontVariantNumeric: 'tabular-nums' } }, [d.totalCost]),
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: _totPftFontSize, fontWeight: '900', color: '#3FC281', fontVariantNumeric: 'tabular-nums' } }, [_totPftDisplay]),
      el('div', {}, [])
    ]));

    const mapPanel = el('div', { style: { position: 'relative', height: '360px', borderRadius: '12px', overflow: 'hidden', background: '#17242E', border: '1px solid rgba(255,255,255,.08)' } }, [
      el('div', { style: { position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)', backgroundSize: '30px 30px' } }),
      el('div', { style: { position: 'absolute', inset: '0' }, html: '<svg width="100%" height="300" viewBox="0 0 420 300" preserveAspectRatio="none"><path d="M90 150 C 140 90, 210 110, 260 90 S 380 130, 420 190" fill="none" stroke="#7BCBCB" stroke-width="2.5" stroke-linecap="round"></path><path d="M90 150 C 150 200, 240 210, 320 170" fill="none" stroke="#EB4343" stroke-width="2" stroke-dasharray="6 6" stroke-linecap="round"></path></svg>' }),
      el('div', { style: { position: 'absolute', left: '14px', bottom: '14px', display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '10px', background: 'rgba(11,19,27,.85)', border: '1px solid rgba(255,255,255,.1)' } }, [
        el('div', {}, [
          el('div', { style: { fontSize: '12px', fontWeight: '800' } }, ['ELD status']),
          el('div', { style: { color: '#6B7373', fontSize: '10.5px' } }, ['Assign unit to connect'])
        ]),
        el('div', { style: { color: '#8B939B', fontSize: '11px', fontWeight: '700' } }, ['Offline']),
        el('div', { style: { padding: '6px 12px', borderRadius: '999px', background: '#7BCBCB', color: '#0B131B', fontSize: '11.5px', fontWeight: '800', cursor: 'pointer' } }, ['Assign unit'])
      ]),
      el('div', { style: { position: 'absolute', right: '8px', bottom: '6px', fontSize: '9px', color: '#6B7373' } }, ['Map placeholder'])
    ]);
    // Map toolbar — 3 icon buttons (left) + Sync pill (right)
    (function() {
      var _F = 'Nunito,system-ui';
      var _rId = routeId;
      var toolbar = document.createElement('div');
      toolbar.style.cssText = 'position:absolute;left:12px;top:12px;display:flex;align-items:center;gap:3px;padding:4px;border-radius:10px;background:rgba(11,19,27,.82);border:1px solid rgba(255,255,255,.1);z-index:10';
      function _mb(svg, tip, fn) {
        var b = document.createElement('div');
        b.title = tip;
        b.style.cssText = 'width:30px;height:30px;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#C9CED2;flex-shrink:0';
        b.innerHTML = svg;
        b.addEventListener('mouseenter', function() { b.style.background = 'rgba(255,255,255,.09)'; });
        b.addEventListener('mouseleave', function() { b.style.background = ''; });
        if (fn) b.addEventListener('click', fn);
        return b;
      }
      function _sep() {
        var s = document.createElement('div');
        s.style.cssText = 'width:1px;height:18px;background:rgba(255,255,255,.1);flex-shrink:0;margin:0 1px';
        return s;
      }
      // Button 3: Expand map
      var _xBtn = _mb('<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>', 'Expand map', function() {
        var ex = document.getElementById('_ef-map-expand');
        if (ex) { ex.remove(); return; }
        var ov = document.createElement('div');
        ov.id = '_ef-map-expand';
        ov.style.cssText = 'position:fixed;inset:0;z-index:500;background:#17242E';
        ov.innerHTML = '<div style="position:relative;width:100%;height:100%;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:30px 30px"><svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 420 300" preserveAspectRatio="none"><path d="M90 150 C 140 90, 210 110, 260 90 S 380 130, 420 190" fill="none" stroke="#7BCBCB" stroke-width="2.5" stroke-linecap="round"></path><path d="M90 150 C 150 200, 240 210, 320 170" fill="none" stroke="#EB4343" stroke-width="2" stroke-dasharray="6 6" stroke-linecap="round"></path></svg><div id="_ef-map-exp-close" style="position:absolute;top:16px;right:16px;width:34px;height:34px;border-radius:8px;background:rgba(11,19,27,.82);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;cursor:pointer;color:#C9CED2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div></div>';
        document.body.appendChild(ov);
        document.getElementById('_ef-map-exp-close').addEventListener('click', function() { ov.remove(); });
      });
      // Button 2: Center / locate on map
      var _cBtn = _mb('<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/><line x1="12" y1="2" x2="12" y2="5.5"/><line x1="12" y1="18.5" x2="12" y2="22"/><line x1="2" y1="12" x2="5.5" y2="12"/><line x1="18.5" y1="12" x2="22" y2="12"/></svg>', 'Center map');
      toolbar.appendChild(_xBtn); toolbar.appendChild(_cBtn);
      toolbar.appendChild(_sep());
      // Button 1 (photo 1 btn 2): Layer visibility picker
      var _layersState = { icons: true, loaded: true, deadhead: true };
      var _lBtn = _mb('<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>', 'Layer visibility');
      _lBtn.style.position = 'relative';
      function _closeLDrop() {
        var ex = document.getElementById('_ef-layer-drop');
        if (ex) ex.remove();
        document.removeEventListener('click', _closeLDrop);
      }
      _lBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var ex = document.getElementById('_ef-layer-drop');
        if (ex) { _closeLDrop(); return; }
        var drop = document.createElement('div');
        drop.id = '_ef-layer-drop';
        drop.style.cssText = 'position:absolute;top:calc(100% + 8px);left:0;z-index:200;background:#131F27;border:1px solid rgba(255,255,255,.12);border-radius:12px;width:260px;box-shadow:0 12px 32px rgba(0,0,0,.6);overflow:hidden';
        drop.addEventListener('click', function(e2) { e2.stopPropagation(); });
        [{key:'unbooked',label:'Lane unbooked',desc:'Show unbooked lanes.'},{key:'booked',label:'Lane booked',desc:'Show lanes with booked loads.'},{key:'completed',label:'Lane completed',desc:'Show completed lanes.'},{key:'hub',label:'Hub Area',desc:'Show hub regions on the map.',off:true}].forEach(function(layer) {
          var row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:12px;padding:11px 14px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.05)';
          row.addEventListener('mouseenter', function() { row.style.background = 'rgba(255,255,255,.03)'; });
          row.addEventListener('mouseleave', function() { row.style.background = ''; });
          var txt = document.createElement('div');
          txt.style.cssText = 'flex:1;min-width:0';
          txt.innerHTML = '<div style="font:700 13px '+_F+';color:#DDE3E9;margin-bottom:2px">'+layer.label+'</div><div style="font:400 11.5px '+_F+';color:#6B7373">'+layer.desc+'</div>';
          var on = !layer.off;
          _layersState[layer.key] = on;
          var tog = document.createElement('div');
          tog.style.cssText = 'width:38px;height:22px;border-radius:999px;background:'+(on?'#7BCBCB':'rgba(255,255,255,.12)')+';position:relative;transition:background .18s;flex-shrink:0;cursor:pointer';
          var knob = document.createElement('div');
          knob.style.cssText = 'position:absolute;top:3px;left:'+(on?'19px':'3px')+';width:16px;height:16px;border-radius:50%;background:#0B131B;transition:left .18s';
          tog.appendChild(knob);
          row.addEventListener('click', function() {
            _layersState[layer.key] = !_layersState[layer.key];
            var nowOn = _layersState[layer.key];
            tog.style.background = nowOn ? '#7BCBCB' : 'rgba(255,255,255,.12)';
            knob.style.left = nowOn ? '19px' : '3px';
          });
          row.appendChild(txt); row.appendChild(tog);
          drop.appendChild(row);
        });
        _lBtn.appendChild(drop);
        setTimeout(function() { document.addEventListener('click', _closeLDrop); }, 0);
      });
      toolbar.appendChild(_lBtn);
      mapPanel.appendChild(toolbar);
      // Sync pill — right-aligned, separate; info icon triggers body-level tooltip
      var _syncWrap = document.createElement('div');
      _syncWrap.style.cssText = 'position:absolute;right:12px;top:12px;z-index:10';
      var _syncPill = document.createElement('div');
      _syncPill.style.cssText = 'display:flex;align-items:center;gap:5px;padding:5px 10px 5px 13px;border-radius:999px;background:rgba(11,19,27,.82);border:1px solid rgba(255,255,255,.1);font:700 12px '+_F+';color:#C9CED2;cursor:pointer;user-select:none';
      _syncPill.innerHTML = 'Sync';
      var _infoIcon = document.createElement('div');
      _infoIcon.style.cssText = 'display:flex;align-items:center;color:#FBB303;flex-shrink:0;line-height:0';
      _infoIcon.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
      _syncPill.appendChild(_infoIcon);
      // Tooltip at body level to escape overflow:hidden of mapPanel
      var _stip = document.getElementById('_ef-sync-map-tip');
      if (_stip) _stip.remove();
      _stip = document.createElement('div');
      _stip.id = '_ef-sync-map-tip';
      _stip.style.cssText = 'display:none;position:fixed;z-index:9999;background:#131F27;border:1px solid rgba(255,255,255,.12);border-radius:9px;padding:10px 13px;width:224px;font:400 11.5px '+_F+';color:#8B939B;line-height:1.5;box-shadow:0 10px 28px rgba(0,0,0,.6);pointer-events:none';
      _stip.textContent = 'Tracking unavailable: assign a unit to this route to enable real-time truck tracking.';
      document.body.appendChild(_stip);
      function _showSyncTip() {
        _stip.style.display = 'block';
        var r = _infoIcon.getBoundingClientRect();
        var tw = _stip.offsetWidth, th = _stip.offsetHeight;
        _stip.style.top = Math.round(r.top - th - 8) + 'px';
        _stip.style.left = Math.round(Math.min(r.right - tw, window.innerWidth - tw - 8)) + 'px';
        _infoIcon.style.color = '#FBB303';
      }
      function _hideSyncTip() {
        _stip.style.display = 'none';
        _infoIcon.style.color = '#FBB303';
      }
      _infoIcon.addEventListener('mouseenter', _showSyncTip);
      _infoIcon.addEventListener('mouseleave', _hideSyncTip);
      _syncWrap.appendChild(_syncPill);
      mapPanel.appendChild(_syncWrap);
    })();

    const hosPanel = el('div', { style: { padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)', borderRadius: '12px', background: '#131F27' } }, [
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px' } }, [
        iconEl('warnMute'),
        el('div', { style: { flex: '1', fontSize: '13px', fontWeight: '800' } }, ['HOS not available']),
        el('div', { style: { fontSize: '12px', fontWeight: '800', color: '#7BCBCB', cursor: 'pointer' } }, ['Assign equipment →'])
      ]),
      el('div', { style: { marginTop: '6px', color: '#8B939B', fontSize: '11.5px', lineHeight: '1.5' } }, ['Assign a driver and a unit to pull live HOS data — or use manual clocks.'])
    ]);

    const statTiles = el('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '12px', overflow: 'hidden' } }, [
      el('div', { style: { padding: '12px 14px', background: '#131F27' } }, [el('div', { style: { fontSize: '15px', fontWeight: '900' } }, [d.cycle]), el('div', { style: { color: '#6B7373', fontSize: '10px' } }, ['Cycle (est.)'])]),
      el('div', { style: { padding: '12px 14px', background: '#131F27' } }, [el('div', { style: { fontSize: '15px', fontWeight: '900' } }, [d.totalDriving]), el('div', { style: { color: '#6B7373', fontSize: '10px' } }, ['Driving (est.)'])]),
      el('div', { style: { padding: '12px 14px', background: '#131F27' } }, [el('div', { style: { fontSize: '15px', fontWeight: '900' } }, [d.onDuty]), el('div', { style: { color: '#6B7373', fontSize: '10px' } }, ['On duty'])]),
      el('div', { style: { padding: '12px 14px', background: '#131F27' } }, [el('div', { style: { fontSize: '15px', fontWeight: '900' } }, [d.days]), el('div', { style: { color: '#6B7373', fontSize: '10px' } }, ['Days (est.)'])])
    ]);

    const moneyTiles = renderPnlOpsCards(d);

    if (state.detailMapHidden) {
      const tabsBar = el('div', { style: { ..._tbStyle, padding: '0 20px' } }, _tbContents);
      const body = el('div', { class: 'ef-scroll', style: { flex: '1', minHeight: '0', overflowY: 'auto', padding: '16px 20px' } }, [tableOuter]);
      return el('div', { style: { display: 'flex', flexDirection: 'column', flex: '1', minHeight: '0' } }, [header, tabsBar, body]);
    }
    const leftTabsBar = el('div', { style: { ..._tbStyle, paddingLeft: '20px' } }, _tbContents);
    const leftTable = el('div', { class: 'ef-scroll', style: { flex: '1', minHeight: '0', overflowY: 'auto', padding: '16px 0 16px 20px' } }, [tableOuter]);
    const leftCol = el('div', { style: { display: 'flex', flexDirection: 'column', minHeight: '0', overflow: 'hidden' } }, [leftTabsBar, leftTable]);
    const rightWrapper = el('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', padding: '0 20px 16px 0' } }, [mapPanel, hosPanel, statTiles, moneyTiles]);
    const splitBody = el('div', { style: { flex: '1', minHeight: '0', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 520px', columnGap: '16px', overflow: 'hidden' } }, [leftCol, rightWrapper]);
    return el('div', { style: { display: 'flex', flexDirection: 'column', flex: '1', minHeight: '0' } }, [header, splitBody]);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CONTROL (On Road) — immersive live-execution view. Real data (miles driven,
  // departure time, delay, live position) vs Plan's estimated metrics.
  // ─────────────────────────────────────────────────────────────────────────
  function buildControlData(routeId) {
    const r = routeOf(routeId);
    const ls = loadsOf(routeId);
    const rows = [];
    function execOf(status) {
      if (status === 'In Transit' || status === 'Dispatched') return 'In progress';
      if (status === 'Delivered' || status === 'Invoiced' || status === 'Paid' || status === 'Completed') return 'Completed';
      if (status === 'Unbooked') return 'Upcoming';
      return 'Booked'; // Booked / Assigned / Offer
    }
    let loadNum = 0;
    ls.forEach((l, i) => {
      const prevDest = i === 0 ? l.origin : ls[i - 1].dest;
      const dhExec = (l.status === 'In Transit' || l.status === 'Dispatched') ? 'In progress'
        : (l.status === 'Delivered' || l.status === 'Invoiced' || l.status === 'Paid' || l.status === 'Completed') ? 'Completed'
        : 'Upcoming';
      rows.push({
        kind: 'dh', num: 'DH', origin: prevDest, dest: l.origin,
        originDate: 'Est. ' + prettyDate(i === 0 ? l.pickup : ls[i - 1].delivery),
        destDate: 'Est. ' + prettyDate(l.pickup), exec: dhExec, loadIdx: null
      });
      loadNum++;
      const exec = execOf(l.status);
      const pct = exec === 'Completed' ? 100 : exec === 'In progress' ? (55 + (i * 17) % 35) : 0;
      const _isLate = l.onTime && l.onTime.indexOf('Late') === 0;
      rows.push({
        kind: 'load', num: String(loadNum), origin: l.origin, dest: l.dest,
        originDate: 'Est. ' + prettyDate(l.pickup), destDate: 'Est. ' + prettyDate(l.delivery),
        exec: exec, loadIdx: i, load: l, pct: pct,
        milesDriven: Math.round(l.miles * pct / 100),
        departedAt: exec !== 'Upcoming' ? (l.pickup.replace(/\/\d{4}$/, '') + ' · ' + ((l.pickupTime || '').split(' - ')[0] || '--')) : '--',
        delay: _isLate ? l.onTime : (exec !== 'Upcoming' ? 'On time' : '--'), isLate: !!_isLate
      });
    });
    // ── Layer live-simulation state on top of the base rows ──
    const sim = _ctrlSim[routeId];
    if (sim && sim.started) {
      rows.forEach(row => {
        if (row.kind !== 'load') return;
        if (row.loadIdx < sim.activeLaneIdx) { row.exec = 'Completed'; row.pct = 100; row.milesDriven = row.load.miles; }
        else if (row.loadIdx === sim.activeLaneIdx) {
          row.exec = sim.progress >= 1 ? 'Completed' : 'In progress';
          row.pct = Math.round(sim.progress * 100);
          row.milesDriven = Math.round(row.load.miles * sim.progress);
          row.isLate = sim.delayMin > 0;
          row.delay = sim.delayMin > 0 ? ('+' + sim.delayMin + 'm') : 'On time';
          row.departedAt = row.load.pickup.replace(/\/\d{4}$/, '') + ' · ' + ((row.load.pickupTime || '').split(' - ')[0] || '--');
        } else { row.exec = 'Upcoming'; }
      });
      rows.forEach((row, i) => {
        if (row.kind !== 'dh') return;
        const nxt = rows[i + 1];
        if (nxt) row.exec = nxt.exec === 'Completed' ? 'Completed' : (nxt.exec === 'In progress' ? 'In progress' : 'Upcoming');
      });
    }
    const currentIncome = ls
      .filter(l => ['In Transit', 'Dispatched', 'Delivered', 'Invoiced', 'Paid'].indexOf(l.status) >= 0)
      .reduce((s, l) => s + l.income, 0);
    return { r: r, ls: ls, rows: rows, currentIncome: currentIncome };
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CONTROL — live-simulation engine (demo). Drives truck movement, situations,
  // driver permissions, plan edits, route optimization, and a change log.
  // ─────────────────────────────────────────────────────────────────────────
  const _ctrlSim = {};
  let _ctrlSimTimer = null;
  const _CTRL_PATH_ORIG = 'M560 545 C 610 505, 640 452, 700 425 S 812 372, 872 300';
  const _CTRL_PATH_OPT = 'M560 545 C 648 462, 772 356, 872 300';
  const _CTRL_PATH_DEV = 'M700 425 C 742 452, 720 512, 660 512';
  const _CTRL_SCENARIOS = {
    traffic:   { title: 'Heavy traffic ahead',            sev: 'warn', desc: 'I-40 congestion is adding ~35 min to the current leg.',           actions: [{ label: 'Re-optimize route', kind: 'reopt' }, { label: 'Notify customer', kind: 'notify' }, { label: 'Dismiss', kind: 'dismiss' }] },
    appt:      { title: 'Receiver moved the appointment', sev: 'warn', desc: 'Delivery window changed to 10:00 – 14:00.',                        actions: [{ label: 'Update stop time', kind: 'stoptime' }, { label: 'Message driver', kind: 'msg' }, { label: 'Dismiss', kind: 'dismiss' }] },
    hos:       { title: 'Driver low on drive hours',      sev: 'warn', desc: '2h 10m of drive time left — short of the delivery.',              actions: [{ label: 'Add rest stop', kind: 'addrest' }, { label: 'Enable PC miles', kind: 'pcmiles' }, { label: 'Dismiss', kind: 'dismiss' }] },
    driverreq: { title: 'Driver requests a route change',  sev: 'info', desc: 'Marcus wants to detour via US-72 to avoid a lane closure.',       actions: [{ label: 'Approve', kind: 'approve' }, { label: 'Deny', kind: 'deny' }] },
    breakdown: { title: 'Breakdown reported',             sev: 'crit', desc: 'Trailer tire blowout reported near the current position.',       actions: [{ label: 'Dispatch roadside', kind: 'roadside' }, { label: 'Re-plan remaining', kind: 'replan' }] },
    backhaul:  { title: 'Better backhaul available',       sev: 'info', desc: 'A reload at $3.10/mi (+$180) matches this lane.',                 actions: [{ label: 'Add to plan', kind: 'addlane' }, { label: 'Ignore', kind: 'dismiss' }] }
  };
  function _hhmm() { const d = new Date(); return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }
  function _ctrlSimGet(routeId) {
    if (!_ctrlSim[routeId]) {
      const ls = loadsOf(routeId);
      let ai = ls.findIndex(l => l.status === 'In Transit' || l.status === 'Dispatched');
      if (ai < 0) ai = 0;
      const al = ls[ai];
      const started = !!(al && (al.status === 'In Transit' || al.status === 'Dispatched'));
      const late = al && al.onTime && al.onTime.indexOf('Late') === 0;
      _ctrlSim[routeId] = {
        started: started, running: false, speed: 1,
        activeLaneIdx: ai, progress: started ? 0.42 : 0,
        variant: 'original', deviation: false, proposed: false,
        delayMin: late ? (parseInt(al.onTime.replace(/\D/g, ''), 10) || 0) : 0,
        permissions: { changeRoute: false, changeStops: false, pcMiles: false },
        pcActive: false,
        extraStops: {}, events: [], log: [],
        permOpen: false, logOpen: false, scenarioOpen: false
      };
      if (started && al) _ctrlSim[routeId].log.push({ time: '08:00', actor: 'System', text: 'Truck departed ' + al.origin, kind: 'ok' });
    }
    return _ctrlSim[routeId];
  }
  function _ctrlLog(routeId, actor, text, kind) { _ctrlSimGet(routeId).log.unshift({ time: _hhmm(), actor: actor, text: text, kind: kind || 'info' }); }
  function _ctrlActivePath(s) { return s.variant === 'optimized' ? _CTRL_PATH_OPT : _CTRL_PATH_ORIG; }
  function _ctrlAddStop(routeId, stop) { const s = _ctrlSimGet(routeId); const li = s.activeLaneIdx; if (!s.extraStops[li]) s.extraStops[li] = []; s.extraStops[li].push(stop); }
  function _ctrlSimPaint(routeId) {
    const s = _ctrlSim[routeId]; if (!s) return;
    const route = document.getElementById('ctrl-route');
    const trav = document.getElementById('ctrl-traveled');
    const truck = document.getElementById('ctrl-truck');
    if (route && trav) {
      const d = _ctrlActivePath(s);
      if (route.getAttribute('d') !== d) { route.setAttribute('d', d); trav.setAttribute('d', d); }
      let len = 400; try { len = trav.getTotalLength(); } catch (e) {}
      trav.style.strokeDasharray = len; trav.style.strokeDashoffset = (len * (1 - s.progress)).toFixed(1);
      if (truck) { try { const pt = trav.getPointAtLength(len * s.progress); truck.setAttribute('transform', 'translate(' + pt.x.toFixed(1) + ',' + pt.y.toFixed(1) + ')'); } catch (e) {} }
    }
    const prop = document.getElementById('ctrl-proposed'); if (prop) prop.style.display = s.proposed ? 'block' : 'none';
    const dev = document.getElementById('ctrl-deviation'); if (dev) dev.style.display = s.deviation ? 'block' : 'none';
    const ls = loadsOf(routeId); const al = ls[s.activeLaneIdx];
    const mi = al ? Math.round(al.miles * s.progress) : 0;
    document.querySelectorAll('.ctrl-live-mi').forEach(e => e.textContent = mi.toLocaleString('en-US') + ' mi');
    document.querySelectorAll('.ctrl-live-pct').forEach(e => e.textContent = Math.round(s.progress * 100) + '%');
    document.querySelectorAll('.ctrl-live-progress').forEach(e => e.style.width = (s.progress * 100) + '%');
    const delayTxt = s.delayMin > 0 ? '+' + s.delayMin + 'm late' : 'On time';
    const delayCol = s.delayMin > 0 ? '#f87171' : '#27A767';
    document.querySelectorAll('.ctrl-live-delay').forEach(e => { e.textContent = delayTxt; e.style.color = delayCol; });
    document.querySelectorAll('.ctrl-live-dot').forEach(e => { e.style.animation = s.running ? '_efDotPulse 1.2s ease-in-out infinite' : 'none'; e.style.background = s.running ? '#27A767' : '#8B939B'; });
  }
  function _ctrlSimStart(routeId) {
    if (_ctrlSimTimer) return;
    _ctrlSimTimer = setInterval(function () {
      const s = _ctrlSim[routeId];
      if (!s || !s.running) return;
      if (!document.getElementById('ctrl-route')) { clearInterval(_ctrlSimTimer); _ctrlSimTimer = null; return; }
      s.progress = Math.min(1, s.progress + 0.01 * s.speed);
      if (s.deviation && s.delayMin < 45) s.delayMin += 1;
      if (s.progress >= 1) { s.running = false; _ctrlLog(routeId, 'System', 'Arrived at ' + ((loadsOf(routeId)[s.activeLaneIdx] || {}).dest || 'destination'), 'ok'); _ctrlSimStop(); setState({}); }
      _ctrlSimPaint(routeId);
    }, 360);
  }
  function _ctrlSimStop() { if (_ctrlSimTimer) { clearInterval(_ctrlSimTimer); _ctrlSimTimer = null; } }
  function _ctrlPlay(routeId) { const s = _ctrlSimGet(routeId); if (!s.started) { s.started = true; _ctrlLog(routeId, 'System', 'Execution started — truck dispatched', 'ok'); } s.running = true; s.proposed = false; _ctrlSimStart(routeId); setState({}); }
  function _ctrlPause(routeId) { const s = _ctrlSimGet(routeId); s.running = false; _ctrlSimStop(); setState({}); }
  function _ctrlSpeed(routeId) { const s = _ctrlSimGet(routeId); s.speed = s.speed >= 4 ? 1 : s.speed * 2; setState({}); }
  function _ctrlOptimize(routeId) {
    const s = _ctrlSimGet(routeId);
    if (!s.started) { s.proposed = !s.proposed; setState({}); }
    else { s.variant = 'optimized'; s.deviation = false; s.delayMin = Math.max(0, s.delayMin - 20); _ctrlLog(routeId, 'Dispatcher', 'Re-optimized route from current position (−37 mi · ETA −42 min)', 'ok'); setState({}); }
  }
  function _ctrlAcceptProposed(routeId) { const s = _ctrlSimGet(routeId); s.variant = 'optimized'; s.proposed = false; _ctrlLog(routeId, 'Dispatcher', 'Applied optimized plan before dispatch (−52 mi · −1h 05m)', 'ok'); setState({}); }
  function _ctrlInject(routeId, id) {
    const s = _ctrlSimGet(routeId); s.scenarioOpen = false;
    if (id === 'driverreq' && s.permissions.changeRoute) {
      s.variant = 'optimized'; s.deviation = false;
      _ctrlLog(routeId, 'Driver', 'Changed route (auto-applied — permission granted)', 'ok');
      s.events.unshift({ id: 'driverreq_auto', title: 'Driver changed the route', sev: 'info', desc: 'Marcus re-routed via US-72. Auto-applied because the driver has route-change permission.', actions: [{ label: 'Acknowledge', kind: 'dismiss' }] });
    } else {
      if (id === 'traffic') s.deviation = true;
      s.events.unshift(Object.assign({ id: id }, _CTRL_SCENARIOS[id]));
    }
    setState({});
  }
  function _ctrlAction(routeId, kind) {
    const s = _ctrlSimGet(routeId);
    switch (kind) {
      case 'reopt': s.variant = 'optimized'; s.deviation = false; s.delayMin = Math.max(0, s.delayMin - 25); _ctrlLog(routeId, 'Dispatcher', 'Re-optimized route from current position (−37 mi · ETA −42 min)', 'ok'); break;
      case 'notify': _ctrlLog(routeId, 'Dispatcher', 'Sent delay notification to customer', 'info'); break;
      case 'stoptime': _ctrlLog(routeId, 'Dispatcher', 'Updated stop delivery window to 10:00 – 14:00', 'info'); break;
      case 'msg': _ctrlLog(routeId, 'Dispatcher', 'Messaged driver about the appointment change', 'info'); break;
      case 'addrest': _ctrlAddStop(routeId, { address: 'Rest Area — I-40 MM 292', tags: 'Rest · 30 min', role: 'Rest' }); _ctrlLog(routeId, 'Dispatcher', 'Added rest stop to the lane', 'info'); break;
      case 'pcmiles': s.permissions.pcMiles = true; s.pcActive = true; _ctrlLog(routeId, 'Dispatcher', 'Enabled PC (Personal Conveyance) miles for driver', 'ok'); break;
      case 'approve': s.variant = 'optimized'; s.deviation = false; _ctrlLog(routeId, 'Dispatcher', 'Approved driver route change', 'ok'); break;
      case 'deny': _ctrlLog(routeId, 'Dispatcher', 'Denied driver route change', 'warn'); break;
      case 'roadside': _ctrlLog(routeId, 'Dispatcher', 'Dispatched roadside assistance', 'crit'); break;
      case 'replan': _ctrlLog(routeId, 'Dispatcher', 'Re-planned the remaining lanes', 'info'); break;
      case 'addlane': _ctrlLog(routeId, 'Dispatcher', 'Added backhaul load to the plan', 'ok'); break;
      case 'dismiss': default: break;
    }
    s.events.shift();
    setState({});
  }
  function _ctrlTogglePerm(routeId, key) {
    const s = _ctrlSimGet(routeId); s.permissions[key] = !s.permissions[key];
    const names = { changeRoute: 'Change route', changeStops: 'Change stops', pcMiles: 'PC miles' };
    _ctrlLog(routeId, 'Dispatcher', (s.permissions[key] ? 'Granted' : 'Revoked') + ' driver permission: ' + names[key], 'info');
    setState({});
  }

  function renderControl(routeId) {
    const sim = _ctrlSimGet(routeId);
    const cd = buildControlData(routeId);
    const r = cd.r;
    const F = 'Nunito,system-ui';
    const laneMode = state.controlMode === 'lane' && state.controlLane != null && !!cd.ls[state.controlLane];
    const panelW = laneMode ? 404 : 470;

    // ── icons (inline) ──
    const IC = {
      spinner: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.2-8.5"/></svg>',
      box: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>',
      clock: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
      check: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
      chevDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
      pin: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      share: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
      smart: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3"/></svg>',
      dots: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
      crosshair: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/></svg>',
      sync: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15"/></svg>',
      arrowUpRight: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>',
      fuel: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="10" height="18" rx="1"/><path d="M13 9h3.5a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3"/><path d="M3 11h10"/></svg>',
      wash: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-3-3-7-7-11-4 4-7 8-7 11a7 7 0 0 0 7 7z"/></svg>',
      hotel: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20V8l10-5 10 5v12"/><path d="M2 20h20M9 20v-5h6v5"/></svg>'
    };

    function _chip(exec) {
      const M = {
        'In progress': { bg: 'rgba(39,167,103,.14)', fg: '#3FC281', ic: IC.spinner, pulse: true },
        'Booked': { bg: 'rgba(255,255,255,.05)', fg: '#8B939B', ic: IC.box },
        'Upcoming': { bg: 'transparent', fg: '#6B7373', ic: IC.clock, bd: '1px solid rgba(255,255,255,.1)' },
        'Completed': { bg: 'rgba(39,167,103,.12)', fg: '#6BD59E', ic: IC.check }
      };
      const m = M[exec] || M.Booked;
      const sp = document.createElement('span');
      sp.style.cssText = 'display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:7px;font:700 10.5px ' + F + ';background:' + m.bg + ';color:' + m.fg + ';border:' + (m.bd || '1px solid transparent') + (m.pulse ? ';animation:_efDotPulse 2s ease-in-out infinite' : '');
      sp.innerHTML = m.ic + '<span>' + exec + '</span>';
      return sp;
    }
    function _routePill(status) {
      const m = status === 'In progress' ? { bg: 'rgba(39,167,103,.14)', fg: '#3FC281', ic: IC.spinner }
        : status === 'Completed' ? { bg: 'rgba(39,167,103,.12)', fg: '#6BD59E', ic: IC.check }
        : { bg: 'rgba(251,179,3,.12)', fg: '#FBB303', ic: IC.clock };
      return el('div', { style: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: m.bg, color: m.fg, font: '800 12px ' + F, flexShrink: '0' }, html: m.ic + '<span>' + status + '</span>' });
    }
    function _numBadge(row) {
      const isDH = row.kind === 'dh';
      const done = row.exec === 'Completed';
      const active = row.exec === 'In progress';
      const bg = isDH ? (active ? 'rgba(123,203,203,.16)' : 'transparent') : (done ? '#27A767' : active ? 'rgba(123,203,203,.16)' : '#1B2A36');
      const fg = isDH ? '#7BCBCB' : (done ? '#0E1820' : active ? '#7BCBCB' : '#DDE3E9');
      const bd = isDH || active ? '1px solid rgba(123,203,203,.35)' : 'none';
      return el('div', { style: { display: 'grid', placeItems: 'center', width: '34px', height: '34px', borderRadius: '9px', background: bg, color: fg, border: bd, font: '800 11px ' + F, flexShrink: '0' } }, [row.num]);
    }
    function _endpoint(name, date, alignEnd) {
      return el('div', { style: { minWidth: '0', textAlign: alignEnd ? 'right' : 'left' } }, [
        el('div', { style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', font: '700 12px ' + F, color: '#E7ECF0' } }, [name]),
        el('div', { style: { whiteSpace: 'nowrap', font: '400 10px "JetBrains Mono",monospace', color: '#6B7373', marginTop: '1px' } }, [date])
      ]);
    }

    // ── Left panel: ROUTE mode ──
    function _routePanel() {
      const rows = el('div', { class: 'ef-scroll', style: { overflowY: 'auto', padding: '4px 12px 14px' } },
        cd.rows.map(row => el('div', {
          class: 'row-hoverable',
          onclick: row.kind === 'load' ? (() => setState({ controlMode: 'lane', controlLane: row.loadIdx })) : undefined,
          style: { display: 'grid', gridTemplateColumns: '34px 1fr auto', alignItems: 'center', gap: '11px', padding: '9px 8px', borderRadius: '10px', cursor: row.kind === 'load' ? 'pointer' : 'default' }
        }, [
          _numBadge(row),
          el('div', { style: { display: 'grid', gridTemplateColumns: '1fr 16px 1fr', alignItems: 'center', gap: '6px', minWidth: '0' } }, [
            _endpoint(row.origin, row.originDate, false),
            svg(ICON.arrow, { flex: 'none' }),
            _endpoint(row.dest, row.destDate, false)
          ]),
          _chip(row.exec)
        ]))
      );
      return el('div', { style: { position: 'absolute', top: '76px', left: '24px', width: panelW + 'px', maxHeight: 'calc(100% - 210px)', zIndex: '15', display: 'flex', flexDirection: 'column', borderRadius: '16px', background: 'rgba(11,17,23,.82)', border: '1px solid rgba(255,255,255,.09)', backdropFilter: 'blur(14px)', boxShadow: '0 20px 60px rgba(0,0,0,.5)', overflow: 'hidden' } }, [
        el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '18px 20px 14px' } }, [
          el('div', { style: { font: '800 17px ' + F, color: '#F4F6F8', letterSpacing: '-.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, [r.name]),
          _routePill(r.status)
        ]),
        el('div', { style: { display: 'grid', gridTemplateColumns: '1fr auto', padding: '9px 14px', margin: '0 16px 6px', background: 'rgba(255,255,255,.03)', borderRadius: '10px', font: '700 11px ' + F, color: '#8B939B' } }, [
          el('div', {}, ['Origin - Destination']),
          el('div', {}, ['Status'])
        ]),
        rows
      ]);
    }

    // ── Left panel: LANE mode ──
    const _CTRL_ADDR = ['2972 Thornbridge Cir, Shiloh, IL 85485', '1845 Cedar Grove Rd, Tempe, AZ 85281', '640 Riverside Dr, Gallup, NM 87301', '118 Old Mill Rd, Amarillo, TX 79101', '5521 Beacon St, Wichita, KS 67202', '89 Harbor View Ln, Kansas City, MO 64106'];
    function _ctrlStops(laneIdx) {
      const a = _CTRL_ADDR, n = a.length;
      const base = [
        { address: a[(laneIdx * 2) % n], role: 'Pick-up', tags: 'Pick-up · Gas · Weight' },
        { address: a[(laneIdx * 2 + 1) % n], role: 'Stop', tags: 'Fuel · Rest' },
        { address: a[(laneIdx * 2 + 2) % n], role: 'Delivery', tags: 'Delivery · Weight' }
      ];
      const extra = sim.extraStops[laneIdx];
      if (extra && extra.length) extra.forEach(es => base.splice(base.length - 1, 0, { address: es.address, role: es.role, tags: es.tags, added: true }));
      return base.map((b, i) => Object.assign({ n: i + 1 }, b));
    }
    function _lanePanel() {
      const idx = state.controlLane;
      const l = cd.ls[idx];
      const rowData = cd.rows.find(x => x.loadIdx === idx) || {};
      const stops = _ctrlStops(idx);
      const eqAbbr = (r.equipmentType || 'Van').slice(0, 2);

      // header
      const head = el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 16px 14px', borderBottom: '1px solid rgba(255,255,255,.07)' } }, [
        _numBadge({ kind: 'load', num: rowData.num || String(idx + 1), exec: rowData.exec }),
        el('div', { style: { display: 'grid', gridTemplateColumns: '1fr 16px 1fr', alignItems: 'center', gap: '6px', flex: '1', minWidth: '0' } }, [
          _endpoint(l.origin, rowData.originDate || '', false),
          svg(ICON.arrow, { flex: 'none' }),
          _endpoint(l.dest, rowData.destDate || '', false)
        ]),
        _chip(rowData.exec || 'Booked'),
        el('div', { class: 'hoverable', onclick: () => setState({ controlMode: 'route', controlLane: null }), style: { width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#8B939B', flexShrink: '0', font: '400 18px ' + F } }, ['×'])
      ]);

      // load summary card — REAL execution metrics
      const isReal = rowData.exec === 'In progress' || rowData.exec === 'Completed';
      const summary = el('div', { style: { margin: '14px 16px 0', padding: '12px 13px', borderRadius: '12px', background: '#0E1820', border: '1px solid rgba(255,255,255,.07)' } }, [
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } }, [
          el('div', { style: { display: 'flex', alignItems: 'flex-start', gap: '18px', flex: '1', minWidth: '0' } }, [
            el('div', {}, [
              el('div', { style: { font: '800 12px "JetBrains Mono",monospace', color: '#DDE3E9' } }, [l.id.replace('ef-', 'L').toUpperCase().slice(0, 9)]),
              el('div', { style: { font: '600 9.5px ' + F, color: '#6B7373', marginTop: '2px' } }, ['Load id'])
            ]),
            el('div', {}, [
              el('div', { style: { font: '800 12px ' + F, color: '#3FC281' } }, [money(rowData.exec === 'Upcoming' ? 0 : l.income)]),
              el('div', { style: { font: '600 9.5px ' + F, color: '#6B7373', marginTop: '2px' } }, ['Current income'])
            ]),
            el('div', {}, [
              el('div', { class: 'ctrl-live-mi', style: { font: '800 12px ' + F, color: '#E7ECF0' } }, [(rowData.milesDriven || 0).toLocaleString('en-US') + ' mi']),
              el('div', { style: { display: 'flex', alignItems: 'center', gap: '4px', font: '600 9.5px ' + F, color: '#6B7373', marginTop: '2px' } }, [
                (isReal ? el('span', { class: 'ctrl-live-dot', style: { width: '5px', height: '5px', borderRadius: '50%', background: '#27A767', animation: '_efDotPulse 1.6s ease-in-out infinite' } }) : null),
                (isReal ? 'Miles driven' : 'Estimated miles')
              ])
            ])
          ]),
          el('div', { style: { display: 'grid', placeItems: 'center', width: '34px', height: '34px', borderRadius: '9px', background: '#162330', color: '#7BCBCB', font: '800 12px ' + F, flexShrink: '0' } }, [eqAbbr]),
          el('div', { class: 'hoverable', style: { width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#8B939B', flexShrink: '0' }, html: IC.dots })
        ]),
        // real-tracking strip: departed + delay
        (isReal ? el('div', { style: { marginTop: '11px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,.06)' } }, [
          el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' } }, [
            el('div', { style: { font: '600 10.5px ' + F, color: '#8B939B' } }, ['Departed ', el('span', { style: { color: '#DDE3E9', fontWeight: '700' } }, [rowData.departedAt || '--'])]),
            el('span', { class: 'ctrl-live-delay', style: { font: '700 10px "JetBrains Mono",monospace', padding: '2px 8px', borderRadius: '6px', color: rowData.isLate ? '#f87171' : '#27A767', background: 'rgba(39,167,103,.1)' } }, [(rowData.delay || 'On time')])
          ]),
          el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginTop: '9px' } }, [
            el('div', { style: { flex: '1', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,.08)', overflow: 'hidden' } }, [
              el('div', { class: 'ctrl-live-progress', style: { height: '100%', width: (rowData.pct || 0) + '%', background: 'linear-gradient(90deg,#1E8C56,#27A767)', borderRadius: '2px', transition: 'width .3s linear' } })
            ]),
            el('span', { class: 'ctrl-live-pct', style: { font: '700 9px "JetBrains Mono",monospace', color: '#6B7373', flexShrink: '0' } }, [(rowData.pct || 0) + '%'])
          ])
        ]) : null)
      ]);

      // "Lista de paradas agregadas" heading row
      const stopsHead = el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', padding: '16px 16px 8px' } }, [
        el('div', { style: { font: '800 13px ' + F, color: '#E7ECF0' } }, ['Lista de paradas agregadas']),
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px' } }, [
          el('div', { class: 'hoverable', style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 11px', borderRadius: '999px', background: 'rgba(123,203,203,.1)', border: '1px solid rgba(123,203,203,.28)', color: '#7BCBCB', font: '800 11px ' + F, cursor: 'pointer' }, html: '<span>Smart trip</span>' + IC.smart }),
          el('div', { class: 'hoverable', style: { width: '30px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#8B939B', border: '1px solid rgba(255,255,255,.1)' }, html: IC.share })
        ])
      ]);

      // stop rows (expandable, DOM-only)
      const stopList = el('div', { style: { display: 'flex', flexDirection: 'column', gap: '6px', padding: '0 16px' } },
        stops.map((s, si) => {
          const body = el('div', { style: { display: 'none', padding: '2px 12px 12px 46px', flexDirection: 'column', gap: '6px' } }, [
            el('div', { style: { display: 'flex', justifyContent: 'space-between', font: '600 11px ' + F, color: '#8B939B' } }, [el('span', {}, ['Arrival window']), el('span', { style: { color: '#DDE3E9' } }, ['08:00 – 12:00'])]),
            el('div', { style: { display: 'flex', justifyContent: 'space-between', font: '600 11px ' + F, color: '#8B939B' } }, [el('span', {}, ['Reference']), el('span', { style: { color: '#DDE3E9', fontFamily: '"JetBrains Mono",monospace' } }, ['REF-' + (1000 + idx * 3 + si)])])
          ]);
          const chev = el('div', { style: { transition: 'transform .2s', color: '#6B7373', display: 'flex' }, html: IC.chevDown });
          const head = el('div', {
            class: 'hoverable',
            onclick: () => { const open = body.style.display === 'flex'; body.style.display = open ? 'none' : 'flex'; chev.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)'; },
            style: { display: 'grid', gridTemplateColumns: '30px 1fr auto', alignItems: 'center', gap: '10px', padding: '10px 12px', cursor: 'pointer' }
          }, [
            el('div', { style: { display: 'grid', placeItems: 'center', width: '24px', height: '24px', borderRadius: '999px', background: '#1B2A36', color: '#DDE3E9', font: '800 11px ' + F } }, [String(s.n)]),
            el('div', { style: { minWidth: '0' } }, [
              el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', minWidth: '0' } }, [
                svg(IC.pin, { color: '#7BCBCB', flex: 'none' }),
                el('div', { style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', font: '700 12px ' + F, color: '#E7ECF0' } }, [s.address])
              ]),
              el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' } }, [
                el('span', { style: { font: '600 10px ' + F, color: '#6B7373' } }, [s.tags]),
                (s.added ? el('span', { style: { font: '800 8.5px ' + F, letterSpacing: '.06em', textTransform: 'uppercase', color: '#27A767', background: 'rgba(39,167,103,.14)', padding: '1px 6px', borderRadius: '999px' } }, ['Added']) : null)
              ])
            ]),
            chev
          ]);
          return el('div', { style: { borderRadius: '11px', background: '#101B23', border: '1px solid rgba(255,255,255,.06)', overflow: 'hidden' } }, [head, body]);
        })
      );

      // + choose destination
      const addRow = el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 16px 16px' } }, [
        el('div', { style: { display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '999px', border: '1px dashed rgba(255,255,255,.18)', color: '#6B7373', font: '400 16px ' + F, flexShrink: '0' } }, ['+']),
        el('div', { class: 'hoverable', style: { flex: '1', display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', borderRadius: '10px', background: '#0E1820', border: '1px dashed rgba(255,255,255,.14)', color: '#6B7373', font: '500 12px ' + F, cursor: 'pointer' }, html: IC.pin + '<span>Choose destination or click on the map</span>' })
      ]);

      return el('div', { style: { position: 'absolute', top: '76px', left: '24px', width: panelW + 'px', maxHeight: 'calc(100% - 210px)', zIndex: '15', display: 'flex', flexDirection: 'column', borderRadius: '16px', background: 'rgba(11,17,23,.86)', border: '1px solid rgba(255,255,255,.09)', backdropFilter: 'blur(14px)', boxShadow: '0 20px 60px rgba(0,0,0,.5)', overflow: 'hidden' } }, [
        head,
        el('div', { class: 'ef-scroll', style: { overflowY: 'auto' } }, [summary, stopsHead, stopList, addRow])
      ]);
    }

    // ── POI chips (lane mode, top-center) ──
    function _poiChips() {
      const chip = (icon, label, primary) => el('div', { class: 'hoverable', style: { display: 'flex', alignItems: 'center', gap: '7px', height: '36px', padding: '0 14px', borderRadius: '999px', background: 'rgba(13,20,27,.85)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', color: primary ? '#DDE3E9' : '#B8C0C8', font: '700 12px ' + F, cursor: 'pointer', whiteSpace: 'nowrap' }, html: (icon || '') + '<span>' + label + '</span>' });
      return el('div', { style: { position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '18', display: 'flex', alignItems: 'center', gap: '8px' } }, [
        chip(ICON.search, 'See all stops', true),
        chip(IC.fuel, 'Fuel stop'),
        chip(IC.wash, 'Washout'),
        chip(IC.hotel, 'Hotel'),
        el('div', { class: 'hoverable', style: { width: '36px', height: '36px', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(13,20,27,.85)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', color: '#B8C0C8', cursor: 'pointer' }, html: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>' })
      ]);
    }

    // ── Top-right: Nearby stops toggle + View ──
    function _topRight() {
      const on = !!state.controlNearbyStops;
      const toggle = el('div', { onclick: () => setState({ controlNearbyStops: !on }), style: { display: 'flex', alignItems: 'center', gap: '10px', height: '40px', padding: '0 8px 0 16px', borderRadius: '999px', background: 'rgba(13,20,27,.85)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', cursor: 'pointer' } }, [
        el('span', { style: { font: '700 12.5px ' + F, color: '#DDE3E9' } }, ['Nearby stops']),
        el('div', { style: { width: '38px', height: '22px', borderRadius: '999px', background: on ? '#27A767' : 'rgba(255,255,255,.14)', position: 'relative', transition: 'background .18s', flexShrink: '0' } }, [
          el('div', { style: { position: 'absolute', top: '3px', left: on ? '19px' : '3px', width: '16px', height: '16px', borderRadius: '50%', background: '#fff', transition: 'left .18s' } })
        ])
      ]);
      const viewBtn = el('div', { class: 'hoverable', style: { display: 'flex', alignItems: 'center', gap: '8px', height: '40px', padding: '0 14px', borderRadius: '999px', background: 'rgba(13,20,27,.85)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', color: '#DDE3E9', font: '700 12.5px ' + F, cursor: 'pointer' }, html: '<span>View</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>' });
      return el('div', { style: { position: 'absolute', top: '20px', right: '24px', zIndex: '20', display: 'flex', alignItems: 'center', gap: '10px' } }, [toggle, viewBtn]);
    }

    // ── Bottom-left: Hours of Service (real) ──
    function _hosGauge(val, label, pct, color) {
      const C = (2 * Math.PI * 15).toFixed(1);
      const off = (2 * Math.PI * 15 * (1 - pct / 100)).toFixed(1);
      return el('div', { style: { display: 'flex', alignItems: 'center', gap: '9px' } }, [
        el('div', {}, [
          el('div', { style: { font: '900 15px "JetBrains Mono",monospace', color: '#F4F6F8', lineHeight: '1' } }, [val]),
          el('div', { style: { font: '600 10px ' + F, color: '#6B7373', marginTop: '3px' } }, [label])
        ]),
        el('div', { style: { width: '38px', height: '38px', flexShrink: '0' }, html: '<svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="15" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="3"/><circle cx="19" cy="19" r="15" fill="none" stroke="' + color + '" stroke-width="3" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="' + off + '" transform="rotate(-90 19 19)"/></svg>' })
      ]);
    }
    function _hosCard() {
      return el('div', { style: { position: 'absolute', left: '24px', bottom: '24px', zIndex: '15', width: panelW + 'px', padding: '16px 18px', borderRadius: '16px', background: 'rgba(11,17,23,.86)', border: '1px solid rgba(255,255,255,.09)', backdropFilter: 'blur(14px)', boxShadow: '0 20px 60px rgba(0,0,0,.5)' } }, [
        el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' } }, [
          el('div', { style: { font: '800 13px ' + F, color: '#E7ECF0' } }, ['Hours of Service (Now)']),
          el('div', { class: 'hoverable', style: { display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 11px', borderRadius: '999px', background: 'rgba(255,255,255,.05)', color: '#DDE3E9', font: '700 11px ' + F, cursor: 'pointer' }, html: '<span>Daily breakdown</span>' + IC.arrowUpRight })
        ]),
        el('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' } }, [
          _hosGauge('08:00', 'Break', 62, '#27A767'),
          _hosGauge('11:00', 'Drive', 74, '#27A767'),
          _hosGauge('14:00', 'Shift', 48, '#7BCBCB'),
          _hosGauge('00:00', 'Cycle', 8, '#7BCBCB')
        ])
      ]);
    }

    // ── Bottom-right: ELD status (real/synced) ──
    function _eldCard() {
      return el('div', { style: { position: 'absolute', right: '24px', bottom: '24px', zIndex: '15', display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 14px', borderRadius: '14px', background: 'rgba(11,17,23,.86)', border: '1px solid rgba(255,255,255,.09)', backdropFilter: 'blur(14px)', boxShadow: '0 20px 60px rgba(0,0,0,.5)' } }, [
        el('div', {}, [
          el('div', { style: { font: '800 12px ' + F, color: '#E7ECF0' } }, ['ELD status']),
          el('div', { style: { font: '500 10.5px ' + F, color: '#6B7373', marginTop: '2px' } }, ['Updated 2 min ago'])
        ]),
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', font: '800 11.5px ' + F, color: '#3FC281' } }, [
          el('span', { style: { width: '7px', height: '7px', borderRadius: '50%', background: '#27A767' } }),
          'Synced'
        ]),
        el('div', { class: 'hoverable', style: { display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 14px', borderRadius: '999px', background: '#27A767', color: '#0E1820', font: '800 12px ' + F, cursor: 'pointer' }, html: '<span>Update</span>' + IC.sync })
      ]);
    }

    // ── Map layer (stylized SVG) ──
    function _mapLayer() {
      const map = el('div', { style: { position: 'absolute', inset: '0', zIndex: '1', overflow: 'hidden' } });
      const activeD = _ctrlActivePath(sim);
      const S =
        '<svg width="100%" height="100%" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0">' +
          '<defs><radialGradient id="cGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(39,167,103,.28)"/><stop offset="100%" stop-color="rgba(39,167,103,0)"/></radialGradient></defs>' +
          '<rect width="1000" height="700" fill="#0A1018"/>' +
          '<g stroke="rgba(123,203,203,.06)" stroke-width="1.5" fill="none">' +
            '<path d="M0 200 C 220 260, 420 160, 1000 240"/>' +
            '<path d="M0 470 C 250 420, 520 520, 1000 450"/>' +
            '<path d="M300 0 C 340 200, 300 420, 360 700"/>' +
            '<path d="M700 0 C 660 220, 740 440, 720 700"/>' +
            '<path d="M0 340 C 300 320, 600 360, 1000 330"/>' +
          '</g>' +
          '<g fill="rgba(255,255,255,.09)" font-family="Nunito,system-ui" font-weight="800" font-size="19" letter-spacing="3">' +
            '<text x="560" y="300">ARIZONA</text>' +
            '<text x="835" y="305">NEW MEXICO</text>' +
            '<text x="815" y="66">COLORADO</text>' +
            '<text x="560" y="78">NEVADA</text>' +
            '<text x="630" y="630">SONORA</text>' +
          '</g>' +
          '<g>' +
            '<circle cx="720" cy="430" r="72" fill="rgba(123,203,203,.05)" stroke="rgba(123,203,203,.18)" stroke-width="1.5" stroke-dasharray="3 5"/>' +
            '<circle cx="852" cy="330" r="60" fill="rgba(123,203,203,.05)" stroke="rgba(123,203,203,.18)" stroke-width="1.5" stroke-dasharray="3 5"/>' +
            '<circle cx="620" cy="528" r="66" fill="rgba(123,203,203,.05)" stroke="rgba(123,203,203,.18)" stroke-width="1.5" stroke-dasharray="3 5"/>' +
          '</g>' +
          // hub pills
          '<g font-family="Nunito,system-ui" font-weight="800" font-size="13">' +
            '<rect x="686" y="345" width="66" height="26" rx="7" fill="#0E1820" stroke="rgba(255,255,255,.14)"/><text x="719" y="362" text-anchor="middle" fill="#DDE3E9">Hub 3</text>' +
            '<rect x="820" y="248" width="66" height="26" rx="7" fill="#0E1820" stroke="rgba(255,255,255,.14)"/><text x="853" y="265" text-anchor="middle" fill="#DDE3E9">Hub 3</text>' +
            '<rect x="588" y="446" width="66" height="26" rx="7" fill="#0E1820" stroke="rgba(255,255,255,.14)"/><text x="621" y="463" text-anchor="middle" fill="#DDE3E9">Hub 3</text>' +
          '</g>' +
          // proposed (planning optimize) — amber, toggled
          '<path id="ctrl-proposed" d="' + _CTRL_PATH_OPT + '" fill="none" stroke="#FBB303" stroke-width="3" stroke-dasharray="7 7" stroke-linecap="round" opacity=".9" style="display:' + (sim.proposed ? 'block' : 'none') + '"/>' +
          // planned route (dashed teal) — id-driven for optimize
          '<path id="ctrl-route" d="' + activeD + '" fill="none" stroke="#7BCBCB" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round" opacity=".9"/>' +
          // traveled overlay (solid green) — revealed by progress via dashoffset
          '<path id="ctrl-traveled" d="' + activeD + '" fill="none" stroke="#27A767" stroke-width="4.5" stroke-linecap="round" style="stroke-dasharray:1400;stroke-dashoffset:1400"/>' +
          // deviation (red dashed) — toggled by situations
          '<path id="ctrl-deviation" d="' + _CTRL_PATH_DEV + '" fill="none" stroke="#EB4343" stroke-width="2.5" stroke-dasharray="6 6" stroke-linecap="round" opacity=".85" style="display:' + (sim.deviation ? 'block' : 'none') + '"/>' +
          // stop pins
          '<g font-family="Nunito,system-ui" font-weight="800" font-size="12">' +
            '<circle cx="560" cy="545" r="8" fill="#3B82F6" stroke="#0A1018" stroke-width="2.5"/>' +
            '<rect x="682" y="410" width="20" height="20" rx="6" fill="#0E1820" stroke="rgba(255,255,255,.2)"/><text x="692" y="424" text-anchor="middle" fill="#DDE3E9">2</text>' +
            '<circle cx="872" cy="300" r="8" fill="#3B82F6" stroke="#0A1018" stroke-width="2.5"/>' +
            '<text x="700" y="398" text-anchor="middle" fill="rgba(255,255,255,.5)" font-size="11">Stop 10</text>' +
          '</g>' +
          // truck (live position, pulsing) — moved by simulation via transform
          '<g id="ctrl-truck" transform="translate(560,545)">' +
            '<circle r="46" fill="url(#cGlow)"/>' +
            '<circle r="14" fill="rgba(39,167,103,.3)"><animate attributeName="r" values="14;24;14" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values=".55;0;.55" dur="1.8s" repeatCount="indefinite"/></circle>' +
            '<circle r="10" fill="#27A767" stroke="#0A1018" stroke-width="3"/>' +
          '</g>' +
        '</svg>';
      map.innerHTML = S;
      // zoom controls
      const zBtn = (label) => el('div', { class: 'hoverable', style: { width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#C9CED2', font: '400 18px ' + F, userSelect: 'none' } }, [label]);
      map.appendChild(el('div', { style: { position: 'absolute', right: '24px', bottom: '120px', zIndex: '12', display: 'flex', flexDirection: 'column', borderRadius: '10px', overflow: 'hidden', background: 'rgba(13,20,27,.85)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)' } }, [
        zBtn('+'),
        el('div', { style: { height: '1px', background: 'rgba(255,255,255,.1)' } }),
        zBtn('−')
      ]));
      // locate
      map.appendChild(el('div', { class: 'hoverable', style: { position: 'absolute', right: '24px', bottom: '188px', zIndex: '12', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#C9CED2', background: 'rgba(13,20,27,.85)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)' }, html: IC.crosshair }));
      return map;
    }

    // ── command-bar icons ──
    const CB = {
      play: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l12 7-12 7z"/></svg>',
      pause: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
      bolt: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',
      shield: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      list: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>'
    };
    const sevColor = { info: '#7BCBCB', warn: '#FBB303', crit: '#f87171', ok: '#27A767' };

    // ── live status pill (route mode, top row next to Back) ──
    function _livePill() {
      const al = cd.ls[sim.activeLaneIdx] || {};
      const mi = Math.round((al.miles || 0) * sim.progress);
      const delayTxt = sim.delayMin > 0 ? '+' + sim.delayMin + 'm late' : 'On time';
      return el('div', { style: { position: 'absolute', top: '20px', left: '190px', zIndex: '20', display: 'flex', alignItems: 'center', gap: '9px', height: '40px', padding: '0 15px', borderRadius: '999px', background: 'rgba(13,20,27,.85)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', font: '700 12px ' + F } }, [
        el('span', { class: 'ctrl-live-dot', style: { width: '8px', height: '8px', borderRadius: '50%', background: sim.running ? '#27A767' : '#8B939B', animation: sim.running ? '_efDotPulse 1.2s ease-in-out infinite' : 'none', flexShrink: '0' } }),
        el('span', { style: { color: sim.running ? '#3FC281' : '#8B939B', fontWeight: '800', letterSpacing: '.04em' } }, [sim.running ? 'LIVE' : (sim.started ? 'PAUSED' : 'PLANNED')]),
        el('span', { style: { width: '1px', height: '16px', background: 'rgba(255,255,255,.12)' } }),
        el('span', { class: 'ctrl-live-mi', style: { color: '#DDE3E9', fontFamily: '"JetBrains Mono",monospace' } }, [mi.toLocaleString('en-US') + ' mi']),
        el('span', { class: 'ctrl-live-pct', style: { color: '#6B7373', fontFamily: '"JetBrains Mono",monospace' } }, [Math.round(sim.progress * 100) + '%']),
        el('span', { class: 'ctrl-live-delay', style: { color: sim.delayMin > 0 ? '#f87171' : '#27A767', fontWeight: '800' } }, [delayTxt])
      ]);
    }

    // ── command bar (plan / execute / react) ──
    function _cbBtn(inner, opts) {
      opts = opts || {};
      return el('div', { class: 'hoverable', onclick: opts.onclick, style: { position: 'relative', display: 'flex', alignItems: 'center', gap: '7px', height: '38px', padding: '0 13px', borderRadius: '10px', cursor: 'pointer', font: '800 12px ' + F, whiteSpace: 'nowrap', color: opts.on ? '#0E1820' : '#DDE3E9', background: opts.on ? (opts.onBg || '#27A767') : 'rgba(255,255,255,.04)', border: '1px solid ' + (opts.on ? (opts.onBg || '#27A767') : 'rgba(255,255,255,.08)') }, html: inner });
    }
    function _cbDiv() { return el('div', { style: { width: '1px', height: '22px', background: 'rgba(255,255,255,.1)', margin: '0 2px' } }); }
    function _permCountBadge() { const n = Object.keys(sim.permissions).filter(k => sim.permissions[k]).length; return n ? '<span style="margin-left:2px;min-width:16px;height:16px;padding:0 4px;border-radius:999px;background:#27A767;color:#0E1820;font:900 9px ' + F + ';display:inline-flex;align-items:center;justify-content:center">' + n + '</span>' : ''; }
    function _logCountBadge() { const n = sim.log.length; return n ? '<span style="margin-left:2px;min-width:16px;height:16px;padding:0 4px;border-radius:999px;background:rgba(255,255,255,.14);color:#DDE3E9;font:900 9px ' + F + ';display:inline-flex;align-items:center;justify-content:center">' + n + '</span>' : ''; }
    function _commandBar() {
      const playInner = sim.running ? CB.pause + '<span>Pause</span>' : CB.play + '<span>' + (sim.started ? 'Resume' : 'Simulate') + '</span>';
      return el('div', { style: { position: 'absolute', left: (24 + panelW + 20) + 'px', bottom: '24px', zIndex: '17', display: 'flex', alignItems: 'center', gap: '6px', padding: '7px', borderRadius: '14px', background: 'rgba(11,17,23,.92)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(14px)', boxShadow: '0 20px 60px rgba(0,0,0,.5)' } }, [
        _cbBtn(playInner, { on: sim.running, onclick: () => sim.running ? _ctrlPause(routeId) : _ctrlPlay(routeId) }),
        _cbBtn('<span>' + sim.speed + '×</span>', { onclick: () => _ctrlSpeed(routeId) }),
        _cbDiv(),
        _cbBtn(IC.smart + '<span>Optimize</span>', { on: sim.variant === 'optimized' || sim.proposed, onBg: '#FBB303', onclick: () => _ctrlOptimize(routeId) }),
        _cbBtn(CB.bolt + '<span>Scenario</span>', { on: sim.scenarioOpen, onBg: '#7BCBCB', onclick: () => { sim.scenarioOpen = !sim.scenarioOpen; setState({}); } }),
        _cbDiv(),
        _cbBtn(CB.shield + '<span>Permissions</span>' + _permCountBadge(), { on: sim.permOpen, onBg: '#7BCBCB', onclick: () => { sim.permOpen = !sim.permOpen; setState({}); } }),
        _cbBtn(CB.list + '<span>Log</span>' + _logCountBadge(), { on: sim.logOpen, onBg: '#7BCBCB', onclick: () => { sim.logOpen = !sim.logOpen; setState({}); } })
      ]);
    }

    // ── scenario popover ──
    function _scenarioPopover() {
      const items = [['traffic', 'Heavy traffic ahead'], ['appt', 'Appointment moved'], ['hos', 'Low on drive hours'], ['driverreq', 'Driver requests change'], ['breakdown', 'Breakdown reported'], ['backhaul', 'Better backhaul']];
      return el('div', { style: { position: 'absolute', left: (24 + panelW + 20) + 'px', bottom: '74px', zIndex: '19', width: '252px', padding: '6px', borderRadius: '14px', background: 'rgba(11,17,23,.96)', border: '1px solid rgba(255,255,255,.12)', backdropFilter: 'blur(14px)', boxShadow: '0 20px 60px rgba(0,0,0,.55)' } }, [
        el('div', { style: { font: '800 10px ' + F, letterSpacing: '.08em', textTransform: 'uppercase', color: '#6B7373', padding: '8px 10px 6px' } }, ['Inject a situation']),
        ...items.map(it => el('div', { class: 'hoverable', onclick: () => _ctrlInject(routeId, it[0]), style: { display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 10px', borderRadius: '9px', cursor: 'pointer', font: '700 12px ' + F, color: '#DDE3E9' } }, [
          el('span', { style: { width: '7px', height: '7px', borderRadius: '50%', background: sevColor[_CTRL_SCENARIOS[it[0]].sev], flexShrink: '0' } }),
          it[1]
        ]))
      ]);
    }

    // ── situation card (react to what the driver faces) ──
    function _situationCard() {
      const ev = sim.events[0]; if (!ev) return null;
      const col = sevColor[ev.sev] || '#7BCBCB';
      return el('div', { style: { position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '25', width: '440px', maxWidth: 'calc(100% - 540px)', borderRadius: '14px', overflow: 'hidden', background: 'rgba(13,20,27,.96)', border: '1px solid ' + col + '66', backdropFilter: 'blur(14px)', boxShadow: '0 20px 60px rgba(0,0,0,.55)' } }, [
        el('div', { style: { height: '3px', background: col } }),
        el('div', { style: { padding: '13px 16px' } }, [
          el('div', { style: { display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '4px' } }, [
            el('span', { style: { width: '8px', height: '8px', borderRadius: '50%', background: col, flexShrink: '0', animation: '_efDotPulse 1.4s ease-in-out infinite' } }),
            el('div', { style: { font: '800 13.5px ' + F, color: '#F4F6F8', flex: '1' } }, [ev.title]),
            el('span', { style: { font: '700 9px ' + F, letterSpacing: '.08em', textTransform: 'uppercase', color: col } }, [ev.sev === 'crit' ? 'Critical' : ev.sev === 'warn' ? 'Attention' : 'Update'])
          ]),
          el('div', { style: { font: '500 11.5px ' + F, color: '#9AA6B2', lineHeight: '1.5', marginBottom: '11px', paddingLeft: '17px' } }, [ev.desc]),
          el('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '7px', paddingLeft: '17px' } }, ev.actions.map((a, ai) => el('div', {
            class: 'hoverable', onclick: () => _ctrlAction(routeId, a.kind),
            style: { padding: '7px 13px', borderRadius: '999px', cursor: 'pointer', font: '800 11.5px ' + F, color: ai === 0 ? '#0E1820' : '#DDE3E9', background: ai === 0 ? col : 'rgba(255,255,255,.05)', border: '1px solid ' + (ai === 0 ? col : 'rgba(255,255,255,.1)') }
          }, [a.label])))
        ])
      ]);
    }

    // ── proposed-optimize bar (planning case) ──
    function _proposedBar() {
      return el('div', { style: { position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '25', display: 'flex', alignItems: 'center', gap: '14px', padding: '11px 14px 11px 16px', borderRadius: '14px', background: 'rgba(13,20,27,.96)', border: '1px solid rgba(251,179,3,.5)', backdropFilter: 'blur(14px)', boxShadow: '0 20px 60px rgba(0,0,0,.55)' } }, [
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '9px' } }, [
          svg(IC.smart, { color: '#FBB303' }),
          el('div', {}, [
            el('div', { style: { font: '800 12.5px ' + F, color: '#F4F6F8' } }, ['Optimized plan ready']),
            el('div', { style: { font: '600 10.5px ' + F, color: '#FBB303', marginTop: '1px' } }, ['Saves 52 mi · 1h 05m — preview in amber on map'])
          ])
        ]),
        el('div', { style: { display: 'flex', gap: '7px' } }, [
          el('div', { class: 'hoverable', onclick: () => _ctrlAcceptProposed(routeId), style: { padding: '8px 15px', borderRadius: '999px', background: '#FBB303', color: '#0E1820', font: '800 12px ' + F, cursor: 'pointer' } }, ['Apply']),
          el('div', { class: 'hoverable', onclick: () => { sim.proposed = false; setState({}); }, style: { padding: '8px 14px', borderRadius: '999px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: '#DDE3E9', font: '800 12px ' + F, cursor: 'pointer' } }, ['Discard'])
        ])
      ]);
    }

    // ── permissions modal ──
    function _permRow(key, title, desc) {
      const on = sim.permissions[key];
      return el('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', padding: '13px 14px', borderRadius: '11px', background: '#0E1820', border: '1px solid rgba(255,255,255,' + (on ? '.14' : '.06') + ')' } }, [
        el('div', { style: { flex: '1', minWidth: '0' } }, [
          el('div', { style: { font: '800 13px ' + F, color: '#E7ECF0' } }, [title]),
          el('div', { style: { font: '500 11px ' + F, color: '#6B7373', marginTop: '2px' } }, [desc])
        ]),
        el('div', { onclick: () => _ctrlTogglePerm(routeId, key), style: { width: '42px', height: '24px', borderRadius: '999px', background: on ? '#27A767' : 'rgba(255,255,255,.12)', position: 'relative', cursor: 'pointer', flexShrink: '0', transition: 'background .18s' } }, [
          el('div', { style: { position: 'absolute', top: '3px', left: on ? '21px' : '3px', width: '18px', height: '18px', borderRadius: '50%', background: '#fff', transition: 'left .18s' } })
        ])
      ]);
    }
    function _permissionsModal() {
      const bg = el('div', { onclick: () => { sim.permOpen = false; setState({}); }, style: { position: 'absolute', inset: '0', zIndex: '30', background: 'rgba(6,12,17,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' } });
      const modal = el('div', { onclick: e => e.stopPropagation(), style: { width: '440px', maxWidth: 'calc(100% - 48px)', borderRadius: '16px', background: '#131F27', border: '1px solid rgba(255,255,255,.1)', boxShadow: '0 24px 64px rgba(0,0,0,.6)', overflow: 'hidden' } }, [
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 20px 14px', borderBottom: '1px solid rgba(255,255,255,.08)' } }, [
          svg(CB.shield, { color: '#7BCBCB' }),
          el('div', { style: { flex: '1' } }, [
            el('div', { style: { font: '800 15px ' + F, color: '#F4F6F8' } }, ['Driver permissions']),
            el('div', { style: { font: '500 11px ' + F, color: '#6B7373', marginTop: '2px' } }, ['What the driver can change from the mobile app'])
          ]),
          el('div', { class: 'hoverable', onclick: () => { sim.permOpen = false; setState({}); }, style: { width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#8B939B', font: '400 18px ' + F } }, ['×'])
        ]),
        el('div', { style: { padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '10px' } }, [
          _permRow('changeRoute', 'Change route', 'Driver may re-route and choose alternate roads.'),
          _permRow('changeStops', 'Change stops', 'Driver may add, remove or reorder stops.'),
          _permRow('pcMiles', 'PC miles', 'Driver may log Personal Conveyance miles off-duty.')
        ])
      ]);
      bg.appendChild(modal);
      return bg;
    }

    // ── change-log slide-in panel ──
    function _logPanel() {
      const actorCol = { Dispatcher: '#7BCBCB', Driver: '#FBB303', System: '#8B939B' };
      return el('div', { style: { position: 'absolute', top: '0', right: '0', height: '100%', width: '360px', zIndex: '28', display: 'flex', flexDirection: 'column', background: 'rgba(13,20,27,.97)', borderLeft: '1px solid rgba(255,255,255,.1)', boxShadow: '-20px 0 48px rgba(0,0,0,.5)', backdropFilter: 'blur(14px)' } }, [
        el('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 18px 14px', borderBottom: '1px solid rgba(255,255,255,.08)' } }, [
          svg(CB.list, { color: '#7BCBCB' }),
          el('div', { style: { flex: '1', font: '800 14px ' + F, color: '#F4F6F8' } }, ['Plan change log']),
          el('div', { class: 'hoverable', onclick: () => { sim.logOpen = false; setState({}); }, style: { width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#8B939B', font: '400 18px ' + F } }, ['×'])
        ]),
        el('div', { class: 'ef-scroll', style: { flex: '1', overflowY: 'auto', padding: '10px 16px 18px' } }, sim.log.length ? sim.log.map(e => el('div', { style: { display: 'flex', gap: '11px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.05)' } }, [
          el('span', { style: { width: '9px', height: '9px', borderRadius: '50%', background: sevColor[e.kind] || '#8B939B', marginTop: '4px', flexShrink: '0' } }),
          el('div', { style: { flex: '1', minWidth: '0' } }, [
            el('div', { style: { font: '600 12px ' + F, color: '#DDE3E9', lineHeight: '1.4' } }, [e.text]),
            el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' } }, [
              el('span', { style: { font: '800 10px ' + F, color: actorCol[e.actor] || '#8B939B' } }, [e.actor]),
              el('span', { style: { font: '500 10px "JetBrains Mono",monospace', color: '#5A6A7A' } }, [e.time])
            ])
          ])
        ])) : [el('div', { style: { font: '500 12px ' + F, color: '#6B7373', padding: '20px 0', textAlign: 'center' } }, ['No changes yet.'])])
      ]);
    }

    // ── assemble ──
    const wrap = el('div', { style: { position: 'relative', flex: '1', minHeight: '0', overflow: 'hidden', background: '#0A1018' } });
    wrap.appendChild(_mapLayer());
    wrap.appendChild(el('div', { class: 'hoverable', onclick: () => { sim.running = false; _ctrlSimStop(); setState({ detailTab: 'plan' }); }, style: { position: 'absolute', top: '20px', left: '24px', zIndex: '20', display: 'flex', alignItems: 'center', gap: '8px', height: '40px', padding: '0 16px', borderRadius: '999px', background: 'rgba(13,20,27,.85)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', cursor: 'pointer', font: '800 13px ' + F, color: '#DDE3E9' }, html: ICON.back + '<span style="margin-left:2px">Back to plan</span>' }));
    if (!laneMode) wrap.appendChild(_livePill());
    wrap.appendChild(_topRight());
    const panel = laneMode ? _lanePanel() : _routePanel();
    wrap.appendChild(panel);
    const hasTopCard = sim.proposed || sim.events.length > 0;
    if (laneMode && !hasTopCard) wrap.appendChild(_poiChips());
    // collapse handle (DOM-only)
    const collapseBtn = el('div', { class: 'hoverable', style: { position: 'absolute', top: '150px', left: (24 + panelW + 6) + 'px', zIndex: '16', width: '28px', height: '42px', borderRadius: '10px', background: 'rgba(13,20,27,.9)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#8B939B' }, html: ICON.chevLeft });
    let _collapsed = false;
    collapseBtn.addEventListener('click', () => {
      _collapsed = !_collapsed;
      panel.style.display = _collapsed ? 'none' : 'flex';
      collapseBtn.style.left = _collapsed ? '24px' : (24 + panelW + 6) + 'px';
      collapseBtn.innerHTML = _collapsed ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>' : ICON.chevLeft;
    });
    wrap.appendChild(collapseBtn);
    wrap.appendChild(_commandBar());
    if (sim.scenarioOpen) wrap.appendChild(_scenarioPopover());
    if (sim.proposed) wrap.appendChild(_proposedBar());
    else if (sim.events.length > 0) wrap.appendChild(_situationCard());
    wrap.appendChild(_hosCard());
    wrap.appendChild(_eldCard());
    if (sim.permOpen) wrap.appendChild(_permissionsModal());
    if (sim.logOpen) wrap.appendChild(_logPanel());
    // initial paint (position truck / reveal traveled) + resume ticking if running
    setTimeout(() => _ctrlSimPaint(routeId), 0);
    if (sim.running && !_ctrlSimTimer) _ctrlSimStart(routeId);
    return wrap;
  }

  // Changelog modal
  const _changelogBtn = document.getElementById('ef-changelog-btn');
  if (_changelogBtn) {
    _changelogBtn.addEventListener('click', () => {
      if (document.querySelector('[data-changelog-overlay]')) return;
      const releases = [
        {
          date: '26 de agosto, 5:50pm',
          items: [
            'Modal "Review Updated Plan": diagrama SVG rediseñado — nodos booked en gris muted, nodo pivote con flecha → naranja, DH de reposicionamiento como edge dashed naranja al hub, detección automática por estructura DH/Loaded alternada',
            'Tarjetas de ruta en "Review Updated Plan": ruta correcta por caso (Recommended / Alternative / Reaches [city]); secuencia de ciudades muestra destino real de cada alternativa, no el destino pinned',
            'Búsqueda de loads: ícono de wifi verde es toggle (abre y cierra el panel); estado searching hace el ícono no clickeable; warning de búsqueda activa aparece como popover sobre el ícono, no como modal centrado',
            '"Adjust manually" y "Got it" (caso 4) ya no abren hunter mode; "Got it" limpia las lanes downstream no booked',
            'Footer del plan inicial muestra texto pasivo en lugar de botones de acción; métricas en footer muestran rangos ±12% para rutas alternativas',
          ]
        },
        {
          date: '24 de agosto, 2:36pm',
          items: [
            'Sistema "Fix Route": cuando el destino de una lane cambia al agregar o cambiar una carga, el sistema recalcula automáticamente las lanes Unbooked downstream para mantener conectividad y rentabilidad',
            'Crear ruta desde cero: el plan se encadena con _NEXT_DEST a partir del origen hasta alcanzar la duración configurada; si el usuario fijó un Final destination se respeta en el último lane Unbooked',
            'Modal de espera (plan vacío): título "Creating route…", subtítulo "Setting up lanes and your trip plan.", ícono de casa, duración ~1.4 s',
            'Modal de espera (plan con cargas): título "Creating route", subtítulo "Considering current loads and optimizing the rest of your plan.", ícono de pulso/actividad',
            'Auto Hunter Mode: al terminar el spinner de creación de ruta, se abre automáticamente el modal de HM (My Loads) solo cuando la ruta parte completamente desde cero — Any Unit sin cargas o Assign Unit con camión sin ciclo activo',
            'Botón "Add route" en el menú Add+: pre-llena el formulario de creación con Cabin/Driver/Trailer de la última carga del plan, Origin = destino de la última lane, Departure date = fecha de entrega + 1 día, Final destination vacío',
            'Botón "Add route" oculto cuando el último destino es un dead-end (sin salida en _NEXT_DEST)',
            'Spinner de transición "Updating plan" (~950 ms): subtítulo explícito "Changed from [Dest A] to [Dest B]" con los nombres de ciudad reales (ej: "Changed from Louisville to Columbus")',
            'Modal de reajuste: tabla Before / After con 6 métricas — Profit, Income, RPM (verde si suben), Est. cost, Distance, Duration (verde si bajan); columna Before en dimmed sin tachado',
            'Modal de reajuste: solo se cierra con el botón Confirm, no al hacer clic fuera',
            '"Leg" renombrado a "Lane" en la vista de detalle de ruta (ej: "Lane 1 of 3")',
          ]
        },
        {
          date: '19 de agosto, 4:23pm',
          items: [
            'Modal "Create Route" — modo "Assign unit": campos Driver, Unit y Trailer reemplazados por pickers personalizados con ícono + texto en 2 líneas (nombre + label)',
            'Panel de selección rediseñado: lista unificada sin separación entre equipos vinculados y no vinculados; avatar de color por conductor, tags con ícono de equipo para ítems vinculados, texto "No linked equipment" para los demás',
            'Ícono de Unit (tractor cab) y Trailer (caja contenedor) diferenciados visualmente en botones y panel',
            'Auto-fill: al seleccionar un driver, unit o trailer vinculado, los otros dos campos se llenan automáticamente',
            'Modo "Any unit": campo Trailer conserva el select original con opciones Van (preseleccionado), Flatbed, Reefer',
            'Layout modo "Assign unit": 2 columnas (Unit + Driver) en la primera fila, Trailer en fila separada',
            'Códigos de cabinas actualizados a formato numérico (ej: 5017, 2201); códigos de trailers actualizados a formato TR-XXXXX (ej: TR-11047)',
            'Tipo "dry van" corregido a "van" en todos los datos de equipos',
            'Toggle del picker: hacer click sobre un campo abierto ahora lo cierra en lugar de reabrirlo',
            'Avatar de unidades: muestra ícono de truck en lugar de letra/número; fondo gris neutro sin color de acento',
          ]
        },
        {
          date: '18 de agosto, 4:38pm',
          items: [
            'Modal "Route Preferences": se agregó el campo "Origin" al lado de "Destination", permitiendo editar el punto de inicio de la ruta directamente desde el modal',
            'Vista de plan — primer tramo DH: al hacer hover sobre la ciudad de origen, aparece un tooltip "Edit in Route Preferences" que abre el modal directo para modificar el origen de la ruta',
          ]
        },
        {
          date: '14 de agosto, 2:39pm',
          items: [
            'Toolbar del mapa rediseñada: se eliminaron los botones de texto confusos ("View ⌄", "Open", "Assign Unit + Sync pill") y se consolidó todo en una toolbar de íconos flotante top-left',
            'La barra de tabs (Plan / On road / Report) quedó limpia; Refresh y Edit route permanecen ahí como estaban, con un ícono de layout para hide/show del mapa sin texto',
            'Toolbar del mapa — botón 3: Expand map (abre overlay full-screen con botón de cerrar)',
            'Toolbar del mapa — botón 2: ícono de crosshair con círculo exterior y punto central relleno (Center map)',
            'Toolbar del mapa — botón 1 (ojito): Layer visibility picker — dropdown con 4 toggles: Lane unbooked, Lane booked, Lane completed, Hub Area; diseño con título + descripción por fila y knob oscuro sobre fondo teal',
            'Botón Sync separado a la derecha del mapa como pill independiente; incluye ícono ⓘ en amarillo (#FBB303) que muestra tooltip body-level al hacer hover: "Tracking unavailable: assign a unit to this route to enable real-time truck tracking."',
            'Tooltip del Sync usa position:fixed con getBoundingClientRect() para escapar el overflow:hidden del mapPanel y aparecer siempre encima del diseño',
            'Banner "Tracking unavailable" dentro del mapa eliminado',
            'Popover "Add filter" del modal My Loads movido a document.body con position:fixed y z-index:9020 para escapar el overflow del modal (z-index:9010); se abre hacia arriba (dropup) usando r.top - popH - 6',
            'Click-outside del popover "Add filter" actualizado para ignorar clics dentro del propio popover (evita cierre accidental al interactuar con selects e inputs)',
          ]
        },
        {
          date: '13 de agosto, 6:11pm',
          items: [
            'El tooltip de la zona de búsqueda se tradujo al inglés: "Search zone" y "Also reviewing in nearby cities like:"',
            'Modal "Assign driver & equipment": contenedores de íconos cambiados de círculo a cuadro redondeado; ícono SVG actualizado',
            'Modal "Assign driver & equipment": se eliminaron las pills de Equipment type (Van / Reefer / Flatbed)',
            'La fila del trailer en el modal de asignación muestra el tipo de equipo de la ruta junto al código (ej: "TRL-9203 · Van")',
            'Modal de filtros de ruta renombrado a "Route preferences"; nuevo ícono de sliders, subtítulo actualizado y opción "No operating cost" agregada',
            'El label "Profit" en el panel financiero quedó en blanco y negrita; el porcentaje ahora aparece en gris con paréntesis: "(-20.5%)"',
            'El valor de Profit (Total / Per mile / Per day) cambió de verde a blanco y negrita',
            'Modal "My Loads" al agregar carga a un lane: rediseño completo — columnas dinámicas sincronizadas con My Loads, filtros pre-cargados (origin, dest, no route, equipment type), valor único de income, botón de columnas, scroll horizontal',
            'Cerrando el modal "My Loads" del lane se marca la sugerencia como vista (elimina el punto amarillo del botón Add)',
            'Toast de advertencia al intentar agregar al lane una carga que ya tiene ruta asignada: "This load is already assigned to a lane in a route."',
            'Ícono de reloj (no clickeable) agregado al lado del valor de income en cada fila del modal de lane loads',
          ]
        },
        {
          date: '11 de agosto, 3:08pm',
          items: [
            'El modal "Destination opportunities" tiene ahora altura fija (88vh) en lugar de max-height',
            'El título del panel de rutas siempre muestra "Route connections from [Ciudad]" — eliminado el fallback a "Available routes"',
            'Eliminado el subtítulo debajo del encabezado del panel de rutas',
            'Tarjetas de rutas activas rediseñadas: viabilidad coloreada (verde ≥75%, amarillo <75%), separadores |, nombres abreviados para rutas con 4+ ciudades',
            'El score de cada ruta siempre es entero (sin decimales) y aparece alineado a la derecha en todas las tarjetas activas y descartadas',
            'Los días se removieron de las tarjetas — ahora aparecen solo en la barra inferior como "Days on route" en formato rango (ej: 2–3 days)',
            'Tarjetas de rutas descartadas rediseñadas: score a la derecha, tag "Discarded" en la línea meta',
            'El encabezado de la sección de rutas descartadas es ahora más visible con fondo rojo tenue y borde superior rojo',
            'Corregido el ícono chevron del acordeón de rutas descartadas — era invisible por usar sintaxis de path dentro de <polyline>; ahora usa <path> con comandos SVG válidos',
            'Los nombres de ciudades en el grafo incluyen código de estado: "Fresno, CA" (antes: "Fresno")',
            'Numeración de nodos cambiada a 1-based (nodo 1, 2, 3… — antes empezaba en 0)',
            'El nodo de posición actual del truck (Unbooked) muestra ahora un anillo verde (fill transparente + stroke verde)',
            'Ambos extremos de una carga Dispatched o In Transit muestran el mismo anillo verde de posición actual',
            'El nivel de zoom y posición del grafo se conservan al cambiar entre rutas en la misma sesión — solo se resetean al cerrar el modal',
            'Corregido el parpadeo visual al cambiar entre rutas — el restore de zoom ahora es sincrónico',
            'La barra inferior tiene sección izquierda con fondo semitransparente, divider alineado con el borde del panel de rutas, y sección derecha de 300px fijos',
            'El botón "Start search" quedó alineado a la derecha dentro de su sección',
            'Eliminados los tags "ELD", "Auto" y "From loads" del formulario de creación de ruta (campos Origin, Driver y Trailer)',
          ]
        },
        {
          date: '10 de agosto, 1:11pm',
          items: [
            'El formulario de creación de ruta (modal "Create Route") ahora tiene altura máxima fija y scroll interno — el toggle y el botón de acción siempre son visibles',
            'El componente "Loads in This Truck Cycle" muestra las cargas sugeridas preseleccionadas por defecto al elegir una unidad con ciclo activo',
            'El campo de origen se pre-rellena automáticamente con el destino de la última carga sugerida del ciclo',
            'El tooltip del ícono ⓘ junto al título "Loads in This Truck Cycle" ahora aparece correctamente sin ser cortado por el contenedor',
            'El ícono ⓘ del título quedó pegado al texto, con el contador de cargas alineado al extremo derecho',
            'La sección de estimados reordenó sus métricas: Match, Est. income, Est. profit, Est. duration',
            'El label "Match probability" se abrevió a "Match" y su tooltip tiene un texto más claro',
            'El botón de Refresh se eliminó de la vista de Routes — solo aparece en My Loads',
            'El dropdown de Refresh muestra un punto naranja cuando hay cargas del ciclo pendientes de considerar; desaparece al agregar todas',
          ]
        },
        {
          date: '10 de agosto, 11:30am',
          items: [
            'Se muestra un mensaje cuando no hay resultados en Routes, My Loads o en el modal de cargas de una ruta',
            'Cada tarjeta de ruta tiene un menú de 3 puntos con opciones "Abrir en nueva pestaña" y "Eliminar ruta"',
            'Se corrigió un error donde el campo de texto en filtros Origin/Destination perdía el foco al escribir',
            'El resumen de ruta ahora muestra el estado completo (ej: Jacksonville, FL en vez de solo Jacksonville)',
            'Los filtros de fecha ahora tienen los operadores: between, before, after y today',
            'Se agregó paginador en la vista de rutas con opciones de 10, 25 o 50 por página',
            'Al seleccionar un tab de estado en My Loads se activa un chip de filtro visible; al quitarlo se vuelve a All Loads',
            'Eliminar ruta solo aparece en rutas con estado Planned y muestra un modal de confirmación antes de borrar',
            'Se agregó botón de historial de cambios en el sidebar',
            'En la vista de rutas, el filtro de status se maneja solo con los tabs superiores (sin filtro en el panel)',
            'Al cambiar el operador de status a "in" en My Loads se puede seleccionar múltiples estados con checkboxes',
          ]
        },
        {
          date: '5 de agosto, 9:30am',
          items: [
            'Los filtros de tipo multi-select (Driver, Dispatcher, Unit, Trailer) ahora usan un campo unificado con chips inline y búsqueda en tiempo real',
            'Los filtros Driver, Dispatcher, Unit y Trailer solo permiten los operadores "is in" e "is not"',
          ]
        }
      ];
      const overlay = el('div', { 'data-changelog-overlay': 'true', style: { position: 'fixed', inset: '0', zIndex: '9100', background: 'rgba(0,0,0,.55)', display: 'grid', placeItems: 'center' } });
      const releaseEls = releases.map(r => {
        const detailWrap = el('div', { style: { display: 'none', flexDirection: 'column', gap: '0', marginTop: '10px' } },
          r.items.map(c => el('div', { style: { padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'flex-start', gap: '8px' } }, [
            el('span', { style: { color: '#27A767', fontSize: '13px', lineHeight: '1.5', flexShrink: '0' } }, ['•']),
            el('div', { style: { fontSize: '12.5px', color: '#C9CED2', fontWeight: '600', lineHeight: '1.5' } }, [c])
          ]))
        );
        const chevron = el('span', { style: { fontSize: '10px', color: '#8B939B', transition: 'transform .2s' } }, ['▶']);
        const header = el('div', {
          onclick: () => {
            const open = detailWrap.style.display === 'flex';
            detailWrap.style.display = open ? 'none' : 'flex';
            chevron.textContent = open ? '▶' : '▼';
          },
          style: { display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '10px 0' }
        }, [
          chevron,
          el('div', { style: { fontSize: '13px', fontWeight: '800', color: '#FBFBFB' } }, [r.date]),
          el('div', { style: { fontSize: '11px', color: '#6B7373', fontWeight: '600' } }, [r.items.length + ' cambios'])
        ]);
        return el('div', { style: { borderBottom: '1px solid rgba(255,255,255,.08)' } }, [header, detailWrap]);
      });
      const modal = el('div', { style: { background: '#17242E', border: '1px solid rgba(255,255,255,.12)', borderRadius: '14px', padding: '24px', width: '480px', maxHeight: '80vh', display: 'flex', flexDirection: 'column', boxShadow: '0 16px 48px rgba(0,0,0,.6)', fontFamily: 'inherit' } }, [
        el('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' } }, [
          el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: '800', color: '#FBFBFB' } }, [
            el('span', { html: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' }, []),
            'Historial de cambios'
          ]),
          el('div', { onclick: () => overlay.remove(), style: { cursor: 'pointer', color: '#8B939B', fontSize: '18px', lineHeight: '1' } }, ['×'])
        ]),
        el('div', { class: 'ef-scroll', style: { flex: '1', overflowY: 'auto' } }, releaseEls)
      ]);
      overlay.appendChild(modal);
      overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
      document.body.appendChild(overlay);
    });
  }

  render();
}
