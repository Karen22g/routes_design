export function initApp() {
  "use strict";

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
    laneMapOrigin: null
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
    const trailerEl = document.getElementById('cr-trailer-select');
    let trailerType = trailerEl ? trailerEl.value : 'Van';
    if (trailerType.includes('·')) trailerType = trailerType.split('·').pop().trim();

    let driver = 'Unassigned', unit = 'Unassigned';
    if (mode === 'assign') {
      const cabinEl = document.getElementById('cr-cabin-select');
      const driverEl = document.getElementById('cr-driver-select');
      if (cabinEl && cabinEl.value) {
        unit = cabinEl.value;
        const dTxt = driverEl ? driverEl.options[driverEl.selectedIndex].text.trim() : '';
        driver = (dTxt && dTxt !== '—') ? dTxt : 'Unassigned';
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

    setState({ showCreateRoute: false, openRoute: newId, view: 'routes', detailLanesExpanded: false });
    if (tmsLoads.length === 0 && newLoads.length > 0) {
      setTimeout(function() { _lmSt.origin = newLoads[0].origin; _doRenderLaneMap(); }, 80);
    }
  };

  window.CR_UNITS = {
    'TRK-1042': { city: 'Houston, TX', driver: 'James Whitmore', hasLoads: true, trailerId: 'T454', trailerType: 'Reefer' },
    'TRK-2078': { city: 'Dallas, TX', driver: 'Carlos Medina', hasLoads: false, trailerId: 'T112', trailerType: 'Van' },
    'TRK-3390': { city: 'Laredo, TX', driver: 'Ava Brooks', hasLoads: false, trailerId: 'T289', trailerType: 'Van' }
  };

  const CR_TRAILER_OPTIONS_HTML = '<option selected>Van</option><option>Reefer</option><option>Flatbed</option>';

  // mode: 'free' | 'assign' ; unit: CR_UNITS entry or null
  window.crApplyTrailer = function (mode, unit) {
    const tag = document.getElementById('cr-trailer-tag');
    const sel = document.getElementById('cr-trailer-select');
    if (mode === 'free') {
      tag.style.display = 'none';
      sel.disabled = false;
      sel.innerHTML = CR_TRAILER_OPTIONS_HTML;
      sel.value = 'Van';
      return;
    }
    tag.style.display = '';
    if (!unit) {
      tag.textContent = 'Auto';
      sel.disabled = false;
      sel.innerHTML = CR_TRAILER_OPTIONS_HTML;
      sel.value = 'Van';
      return;
    }
    tag.textContent = unit.hasLoads ? 'From loads' : 'Auto';
    sel.disabled = true;
    sel.innerHTML = '<option selected>' + unit.trailerId + ' · ' + unit.trailerType + '</option>';
  };

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

    if (mode === 'free') {
      cabinRow.style.display = 'none';
    } else {
      cabinRow.style.display = '';
      cabinRow.classList.add('cr-fade-up');
      document.getElementById('cr-cabin-select').value = '';
      document.getElementById('cr-driver-select').innerHTML = '<option value="">—</option>';
    }
    tmsBlock.classList.remove('cr-visible');
    originInput.value = '';
    originInput.classList.remove('cr-filled');
    originSource.style.display = 'none';
    routeName.value = 'Unassigned_Unassigned_2026-07-30';
    window.crApplyTrailer(mode, null);
    window.crUpdateForecastVisibility();
  };

  window.crOnCabinChange = function (sel) {
    const unit = window.CR_UNITS[sel.value];
    const originInput = document.getElementById('cr-origin-input');
    const originSource = document.getElementById('cr-origin-source');
    const driverSelect = document.getElementById('cr-driver-select');
    const tmsBlock = document.getElementById('cr-tms-block');
    const routeName = document.getElementById('cr-route-name');

    if (!unit) {
      driverSelect.innerHTML = '<option value="">—</option>';
      originInput.value = '';
      originInput.classList.remove('cr-filled');
      originSource.style.display = 'none';
      tmsBlock.classList.remove('cr-visible');
      routeName.value = 'Unassigned_Unassigned_2026-07-30';
      window.crApplyTrailer('assign', null);
      window.crUpdateForecastVisibility();
      return;
    }

    driverSelect.innerHTML = '<option selected>' + unit.driver + '</option>';
    routeName.value = sel.value + '_' + unit.driver.split(' ')[1] + '_2026-07-30';
    window.crApplyTrailer('assign', unit);

    if (unit.hasLoads) {
      tmsBlock.classList.add('cr-visible');
      // Pre-select all load cards
      tmsBlock.querySelectorAll('.cr-load-card').forEach(function(card) {
        card.classList.add('cr-on');
        var cb = card.querySelector('input[type="checkbox"]');
        if (cb) cb.checked = true;
      });
      // Origin = destination of last suggested load
      var cards = tmsBlock.querySelectorAll('.cr-load-card');
      var lastCard = cards[cards.length - 1];
      var lastDest = '';
      if (lastCard) {
        var routeEl = lastCard.querySelector('.cr-load-route');
        if (routeEl) {
          var txt = routeEl.textContent;
          var arrow = txt.indexOf('→');
          lastDest = arrow >= 0 ? txt.substring(arrow + 1).trim() : '';
        }
      }
      originInput.value = lastDest || unit.city;
      originInput.classList.add('cr-filled');
      originSource.style.display = 'none';
    } else {
      tmsBlock.classList.remove('cr-visible');
      originInput.value = unit.city;
      originInput.classList.add('cr-filled');
      originSource.style.display = 'flex';
    }

    window.crUpdateForecastVisibility();
  };

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
    window.CR_OPEN_PICKER = null; // panels are recreated fresh per open; nothing to remove yet
    ['region', 'city', 'state'].forEach(k => window.crRenderChips(k));
    window.crApplyTrailer('free', null);
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
          <select class="cr-select" id="cr-cabin-select" onchange="crOnCabinChange(this)">
            <option value="">Select unit...</option>
            <option value="TRK-1042">TRK-1042 · Houston, TX</option>
            <option value="TRK-2078">TRK-2078 · Dallas, TX</option>
            <option value="TRK-3390">TRK-3390 · Laredo, TX</option>
          </select>
        </div>
        <div class="cr-field">
          <div class="cr-field-label">Driver <span style="color:#EB4343">*</span> <span class="cr-tag">Auto</span></div>
          <select class="cr-select" id="cr-driver-select">
            <option value="">—</option>
          </select>
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
          <div class="cr-field-label">Origin <span style="color:#EB4343">*</span>
            <span class="cr-source" id="cr-origin-source" style="display:none">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="3.5" stroke="currentColor" stroke-width="1.5"/></svg>
              ELD
            </span>
          </div>
          <input class="cr-input" id="cr-origin-input" placeholder="City or state..." oninput="crUpdateForecastVisibility()">
        </div>
        <div class="cr-field">
          <div class="cr-field-label">Departure date <span style="color:#EB4343">*</span></div>
          <input class="cr-input" type="date" value="2026-07-30">
        </div>
      </div>

      <div class="cr-row cr-row-2">
        <div class="cr-field" style="margin-bottom:0">
          <div class="cr-field-label">Trailer <span style="color:#EB4343">*</span> <span class="cr-tag" id="cr-trailer-tag">Auto</span></div>
          <select class="cr-select" id="cr-trailer-select">
            <option selected>Van</option>
            <option>Reefer</option>
            <option>Flatbed</option>
          </select>
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
            <option>Custom</option>
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
                onclick: e => { e.stopPropagation(); setState({ view: 'routes', openRoute: r.id, openLoad: null }); },
                style: { display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#7BCBCB', fontWeight: '700', fontSize: '12px', cursor: 'pointer', borderBottom: '1px dashed rgba(123,203,203,.4)' }
              }, [iconEl('route'), routeNameShort]),
              el('div', { style: { color: '#6B7373', fontSize: '10.5px', marginTop: '2px' } }, ['Leg ' + idx + ' of ' + loadsOf(l.route).length])
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
            el('div', { class: 'hoverable', onclick: e2 => { e2.stopPropagation(); menu.remove(); setState({ openRoute: r.id, detailLanesExpanded: false }); }, style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#FBFBFB' } }, [
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
        onclick: () => setState({ openRoute: r.id, detailLanesExpanded: false }),
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
      cols = 6;
      kpis = [
        { label: 'Total loads', value: String(loads.length), color: '#FBFBFB' },
        { label: 'Income total', value: money(inc), color: '#3FC281' },
        { label: 'Total miles', value: loadedMiles.toLocaleString('en-US') + ' mi', color: '#FBFBFB' },
        { label: 'Effective RPM', value: '$' + effectiveRpm.toFixed(2), color: '#7BCBCB' },
        { label: 'Loaded RPM', value: '$' + loadedRpm.toFixed(2), color: '#7BCBCB' },
        { label: 'Total DH miles', value: dhMiles.toLocaleString('en-US') + ' mi', color: '#ABABAB' }
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
        { label: 'Income total', value: money(inc), color: '#3FC281' },
        { label: 'Total miles', value: totalMiles.toLocaleString('en-US') + ' mi', color: '#FBFBFB' },
        { label: 'DH miles', value: dhMiles.toLocaleString('en-US') + ' mi (' + dhPct.toFixed(1) + '%)', color: '#ABABAB' },
        { label: 'Loaded RPM', value: '$' + loadedRpm.toFixed(2), color: '#7BCBCB' },
        { label: 'Effective RPM', value: '$' + effectiveRpm.toFixed(2), color: '#7BCBCB' }
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
      field('Route', el('div', { onclick: () => setState({ openLoad: null, view: 'routes', openRoute: r.id }), style: { fontSize: '12px', fontWeight: '700', color: '#7BCBCB', cursor: 'pointer' } }, [r.name + ' →'])),
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

    const profitLabel = el('span', { style: { fontSize: '12px', fontWeight: '400', color: '#8B939B' } }, [
      'Profit ',
      el('span', { style: { color: '#6B7373', fontSize: '11px', fontWeight: '400' } }, [profitPctDisplay + '%'])
    ]);
    const profitRow = el('div', { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' } }, [
      profitLabel,
      el('span', { style: { fontSize: '20px', fontWeight: '900', color: '#3FC281' } }, [pnlFmt(pnl.pft)])
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
      row('Income', el('span', { style: { fontSize: '18px', fontWeight: '900' } }, [pnlFmt(pnl.inc)])),
      row('Cost', el('span', { style: { fontSize: '18px', fontWeight: '900', color: '#8B939B' } }, [pnlFmt(pnl.cst)])),
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
  const _rebuildLoads = {}; // rId → [{origin,dest,miles,income,pickup,customer,equipment}]
  const _syncingRoutes = new Set();
  const _syncDone = {}; // routeId → bool (button disabled after sync)
  const _autoAddFromLoads = {}; // routeId → bool (toggle state per route)
  var _lbConfHandler = null, _lbNotifHandler = null;
  let _lmSt = { tab: 'destinations', selDest: -1, selPath: 0, blockedPaths: new Set() };

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
      btn.onclick = function(e) { e.stopPropagation(); if(document.getElementById('_ef-lb-notif')){_hideLbNotif();}else{_showLbNotif(key,originCity);} };
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

    // WiFi button — changes color based on search state
    var wifiBtn = document.createElement('button');
    var wifiColor = searchSt === 'done' ? '#27A767' : searchSt === 'searching' ? '#FBB303' : '#8B939B';
    var wifiBg    = searchSt === 'done' ? 'rgba(39,167,103,.12)' : searchSt === 'searching' ? 'rgba(251,179,3,.08)' : '#17242E';
    var wifiBd    = searchSt === 'done' ? 'rgba(39,167,103,.4)' : searchSt === 'searching' ? 'rgba(251,179,3,.3)' : 'rgba(255,255,255,.15)';
    wifiBtn.style.cssText = 'display:flex;align-items:center;justify-content:center;width:30px;height:30px;background:'+wifiBg+';border:1px solid '+wifiBd+';border-radius:8px;color:'+wifiColor+';cursor:pointer;flex:none';
    var wifiAnim = searchSt === 'searching' ? 'style="animation:_ef-wpulse .7s ease-in-out infinite alternate"' : '';
    wifiBtn.innerHTML = '<svg '+wifiAnim+' width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>';
    wifiBtn.onclick = function(e) {
      e.stopPropagation(); _hideLbMenu();
      if (searchSt === 'done') {
        if (document.getElementById('_ef-lb-notif')) { _hideLbNotif(); }
        else { _showLbNotif(key, originCity); }
      } else if (!searchSt || searchSt === 'idle') {
        if (document.getElementById('_ef-lb-conf')) { _hideLbConf(); }
        else { _showLbConfirm(wifiBtn, key, originCity); }
      }
    };
    bar.appendChild(wifiBtn);

    bar.style.display = 'flex';
    var rect = rowEl.getBoundingClientRect();
    bar.style.right = '24px'; bar.style.left = 'auto';
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

  function _showLbConfirm(wifiBtn, key, originCity) {
    _hideLbConf();
    var bar = document.getElementById('_ef-lb');
    var barRect = bar ? bar.getBoundingClientRect() : { right: window.innerWidth - 24, top: window.innerHeight / 2 };
    var conf = document.createElement('div'); conf.id = '_ef-lb-conf';
    conf.style.cssText = 'position:fixed;z-index:9003;background:#131F27;border:1px solid rgba(255,255,255,.15);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.7);width:300px;padding:16px;right:' + (window.innerWidth - barRect.right) + 'px;top:' + (barRect.top - 178) + 'px';
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
      _lbSearch[key] = 'searching';
      // update wifi button visually right away
      var barEl = document.getElementById('_ef-lb');
      if (barEl) { var wb = barEl.querySelectorAll('button')[1]; if (wb) _applyWifiStyle(wb, 'searching', key, originCity); }
      setTimeout(function() {
        _lbSearch[key] = 'done'; _lbCount[key] = 2 + Math.floor(Math.random() * 4);
        var barEl2 = document.getElementById('_ef-lb');
        if (barEl2) { var wb2 = barEl2.querySelectorAll('button')[1]; if (wb2) _applyWifiStyle(wb2, 'done', key, originCity); }
        _showLbNotif(key, originCity);
      }, 3000);
    });
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
    notif.querySelector('#_ef-lb-notif-stop').addEventListener('click', function() { _lbSearch[key] = 'idle'; delete _lbCount[key]; _hideLbNotif(); var barEl=document.getElementById('_ef-lb'); if(barEl){var wb=barEl.querySelectorAll('button')[1];if(wb)_applyWifiStyle(wb,'idle',key,originCity);} });
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
    var SAMPLE = [
      { dest:'Memphis, TN',     miles:445, rev:'$1,050–$1,680', rpm:'$2.36–$3.78', broker:'Echo Global',      pickup:'Today'    },
      { dest:'Nashville, TN',   miles:680, rev:'$1,360–$2,040', rpm:'$2.00–$3.00', broker:'Coyote Logistics', pickup:'Tomorrow' },
      { dest:'St. Louis, MO',   miles:540, rev:'$1,080–$1,782', rpm:'$2.00–$3.30', broker:'CH Robinson',      pickup:'Aug 02'   },
      { dest:'Kansas City, MO', miles:620, rev:'$1,364–$2,108', rpm:'$2.20–$3.40', broker:'Transplace',       pickup:'Aug 03'   },
    ];
    // Parse lbKey → rId + lIdx so "Add load" can update the real lane
    var _slRid = null, _slLIdx = null;
    if (lbKey) {
      var _us = lbKey.lastIndexOf('_');
      _slRid = lbKey.substring(0, _us);
      _slLIdx = parseInt(lbKey.substring(_us + 1));
    }
    var ov = document.createElement('div'); ov.id = '_ef-sl';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9010;background:rgba(6,12,17,.55);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#101B23;border:1px solid rgba(255,255,255,.12);border-radius:14px;width:520px;max-height:70vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,.8)';
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:10px;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
    hdr.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg><div style="flex:1"><div style="font:800 14px Nunito,system-ui;color:#FBFBFB">Loadboard</div><div style="font:400 11px Nunito,system-ui;color:#8B939B">From ' + originCity + ' · <span style="color:#27A767">' + count + ' loads found</span> · Active search</div></div><button id="_ef-sl-x" style="width:28px;height:28px;display:grid;place-items:center;border-radius:8px;cursor:pointer;color:#8B939B;border:1px solid rgba(255,255,255,.1);background:none">✕</button>';
    modal.appendChild(hdr);
    var list = document.createElement('div');
    list.style.cssText = 'flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:8px';
    SAMPLE.forEach(function(load, si) {
      var card = document.createElement('div');
      card.style.cssText = 'background:#131F27;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:13px;display:flex;align-items:center;gap:10px';
      card.innerHTML = '<div style="flex:1"><div style="font:800 12px Nunito,system-ui;color:#FBFBFB;margin-bottom:3px">' + originCity + ' → ' + load.dest + '</div><div style="font:400 11px Nunito,system-ui;color:#6B7373">' + load.broker + ' · ' + load.pickup + ' · ' + load.miles + ' mi</div></div><div style="text-align:right;flex:none"><div style="font:700 12px Nunito,system-ui;color:#3FC281">' + load.rev + '</div><div style="font:400 10px Nunito,system-ui;color:#7BCBCB">' + load.rpm + '</div></div><button data-si="' + si + '" style="padding:5px 12px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 11px Nunito,system-ui;cursor:pointer;white-space:nowrap;flex:none">Add load</button>';
      list.appendChild(card);
    });
    // Wire "Add load" buttons — update the real lane, cascade if dest changed
    list.querySelectorAll('button[data-si]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var ld = SAMPLE[parseInt(btn.dataset.si)];
        var _destChanged = false;
        if (_slRid !== null && _slLIdx !== null) {
          var tgt = loadsOf(_slRid)[_slLIdx];
          if (tgt) {
            var _before = _snapStats(_slRid);
            var _oldDest = tgt.dest;
            var _revParts = ld.rev.replace(/[$,]/g,'').split(/[–\-]/);
            var _avgIncome = Math.round((parseFloat(_revParts[0]) + parseFloat(_revParts[1] || _revParts[0])) / 2);
            tgt.origin = originCity; tgt.dest = ld.dest; tgt.miles = ld.miles;
            tgt.income = _avgIncome; tgt.status = 'Booked';
            if (ld.dest !== _oldDest) { _cascadeLane(_slRid, _slLIdx, ld.dest); _destChanged = true; }
            var _after = _snapStats(_slRid);
          }
        }
        var slEl = document.getElementById('_ef-sl'); if (slEl) slEl.remove();
        _hideLbBar(); _hideLbNotif();
        setState({});
        if (_destChanged && typeof _before !== 'undefined') _showAdaptingPlan(function() { _showRebalanceModal(_before, _after); });
      });
    });
    modal.appendChild(list);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e) { if (e.target === ov) ov.remove(); });
    modal.querySelector('#_ef-sl-x').addEventListener('click', function() { ov.remove(); });
  }

  // When a load is added to lane lIdx and its dest differs from the old dest,
  // cascade the new origin down every subsequent Unbooked lane so the plan re-routes.
  function _cascadeLane(rId, changedIdx, newDest) {
    var NEXT_DEST = {
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
    var all = loadsOf(rId);
    for (var j = changedIdx + 1; j < all.length; j++) {
      if (all[j].status === 'Unbooked') {
        var prevDest = all[j - 1].dest;
        all[j].origin = prevDest;
        var nd = NEXT_DEST[prevDest];
        if (nd) { all[j].dest = nd.dest; all[j].miles = nd.miles; }
      } else {
        break;
      }
    }
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
          var _loadsNow = loadsOf(rId);
          var _newIdx = _loadsNow.findIndex(function(l){ return l.id === newLd.id; });
          _rebalancePlanChain(rId, _newIdx + 1);
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
    return { income:income, miles:miles, days:days, rpm:rpm };
  }

  // ── Rebalance chain: update downstream Unbooked origins ─────────────────
  function _rebalancePlanChain(routeId, fromIdx) {
    var loads = loadsOf(routeId);
    var before = _snapStats(routeId);
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
    _showAdaptingPlan(function() { _showRebalanceModal(before, after); });
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
        '<div style="font:800 14px Nunito,system-ui;color:#FBFBFB;letter-spacing:-.01em">Adaptando plan</div>' +
        '<div style="font:400 11.5px Nunito,system-ui;color:#6B7373;margin-top:3px">Recalculando lanes y costos...</div>' +
      '</div>';
    document.body.appendChild(ov);
    ov.appendChild(box);
    setTimeout(function() { ov.remove(); if (then) then(); }, 950);
  }

  // ── Informative rebalance modal ──────────────────────────────────────────
  function _showRebalanceModal(before, after) {
    var ex = document.getElementById('_ef-rebal'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var ov = document.createElement('div'); ov.id = '_ef-rebal';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9030;background:rgba(6,12,17,.65);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1px solid rgba(63,194,129,.2);border-radius:14px;width:440px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.9)';
    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:center;gap:12px;padding:18px 20px 14px;border-bottom:1px solid rgba(255,255,255,.07)';
    hdr.innerHTML =
      '<div style="width:34px;height:34px;border-radius:10px;background:rgba(63,194,129,.1);border:1px solid rgba(63,194,129,.25);display:grid;place-items:center;flex-shrink:0">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3FC281" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>' +
      '</div>' +
      '<div style="flex:1">' +
        '<div style="font:800 13px '+F+';color:#FBFBFB">Plan rebalanced</div>' +
        '<div style="font:400 11px '+F+';color:#8B939B;margin-top:2px">Downstream Unbooked lanes updated to the new route chain.</div>' +
      '</div>';
    modal.appendChild(hdr);
    // Before / After grid
    var body = document.createElement('div');
    body.style.cssText = 'padding:18px 20px';
    function _statRow(label, bVal, aVal, color) {
      var changed = bVal !== aVal;
      var row = document.createElement('div');
      row.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05)';
      row.innerHTML =
        '<span style="font:400 11px '+F+';color:#8B939B">'+label+'</span>' +
        '<span style="font:600 11px \'JetBrains Mono\',monospace;color:rgba(255,255,255,.35);text-decoration:line-through">'+bVal+'</span>' +
        '<span style="font:800 12px \'JetBrains Mono\',monospace;color:'+(changed?(color||'#3FC281'):'rgba(255,255,255,.5)')+'">'+aVal+(changed?'':'')+'</span>';
      return row;
    }
    // Column headers
    var colHdr = document.createElement('div');
    colHdr.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;padding:0 0 8px;border-bottom:1px solid rgba(255,255,255,.07);margin-bottom:2px';
    colHdr.innerHTML =
      '<span style="font:700 9px '+F+';letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.2)">Metric</span>' +
      '<span style="font:700 9px '+F+';letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.2)">Before</span>' +
      '<span style="font:700 9px '+F+';letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.2)">After</span>';
    body.appendChild(colHdr);
    var fmt$ = function(n){ return '$'+Math.round(n).toLocaleString('en-US'); };
    var fmtRpm = function(n){ return '$'+n.toFixed(2)+'/mi'; };
    body.appendChild(_statRow('Total income',  fmt$(before.income),  fmt$(after.income),  after.income>before.income?'#3FC281':'#EB4343'));
    body.appendChild(_statRow('Avg RPM',        fmtRpm(before.rpm),   fmtRpm(after.rpm),   after.rpm>before.rpm?'#3FC281':'#EB4343'));
    body.appendChild(_statRow('Total days',     before.days+' days',  after.days+' days',  after.days<before.days?'#3FC281':'#FBB303'));
    body.appendChild(_statRow('Total miles',    before.miles.toLocaleString('en-US')+' mi', after.miles.toLocaleString('en-US')+' mi', '#7BCBCB'));
    modal.appendChild(body);
    // Footer
    var ftr = document.createElement('div');
    ftr.style.cssText = 'padding:14px 20px;border-top:1px solid rgba(255,255,255,.07);display:flex;justify-content:flex-end';
    var gotIt = document.createElement('button');
    gotIt.style.cssText = 'padding:8px 24px;background:#27A767;border:none;border-radius:10px;color:#0B131B;font:800 13px '+F+';cursor:pointer';
    gotIt.textContent = 'Got it';
    gotIt.addEventListener('click', function(){ ov.remove(); });
    ftr.appendChild(gotIt);
    modal.appendChild(ftr);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e){ if(e.target===ov) ov.remove(); });
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

    // Full loads dataset — first 2 are lane-specific, rest are system-wide
    var ALL_LOADS = [
      { id:'ef-cc80f47', origin:originCity, dest:dest,              miles:245, incMin:539,  incMax:833,  rpm:[2.20,3.40], customer:'FreightQuote',    pickup:'08/01/2026', delivery:'08/02/2026', status:'Unbooked',   equipment:'Van 53',    driver:'—', truck:'—',    laneLoad:true },
      { id:'ef-38a5c6e', origin:originCity, dest:dest,              miles:258, incMin:568,  incMax:878,  rpm:[2.20,3.40], customer:'Echo Global',     pickup:'08/02/2026', delivery:'08/03/2026', status:'Unbooked',   equipment:'Van 53',    driver:'—', truck:'—',    laneLoad:true },
      { id:'ef-ab12c3d', origin:'Phoenix, AZ',       dest:'Los Angeles, CA',  miles:372, incMin:744,  incMax:1116, rpm:[2.00,3.00], customer:'C.H. Robinson',   pickup:'08/03/2026', delivery:'08/04/2026', status:'Booked',     equipment:'Reefer 53', driver:'—',           truck:'—',    laneLoad:false },
      { id:'ef-ef45g6h', origin:'Denver, CO',         dest:'Salt Lake City, UT',miles:525, incMin:1050, incMax:1575, rpm:[2.00,3.00], customer:'Echo Global',     pickup:'08/04/2026', delivery:'08/06/2026', status:'In Transit', equipment:'Flatbed 48',driver:'James Wilson', truck:'#3201',laneLoad:false },
      { id:'ef-ij78k9l', origin:'Chicago, IL',        dest:'Detroit, MI',      miles:281, incMin:562,  incMax:843,  rpm:[2.00,3.00], customer:'Coyote Logistics',pickup:'08/05/2026', delivery:'08/05/2026', status:'Delivered',  equipment:'Van 53',    driver:'Sarah Chen',  truck:'#5507',laneLoad:false },
      { id:'ef-mn01o2p', origin:'Houston, TX',        dest:'Dallas, TX',       miles:240, incMin:480,  incMax:720,  rpm:[2.00,3.00], customer:'FreightQuote',    pickup:'08/06/2026', delivery:'08/06/2026', status:'Offer',      equipment:'Reefer 48', driver:'—',           truck:'—',    laneLoad:false },
      { id:'ef-qr34s5t', origin:'Seattle, WA',        dest:'Portland, OR',     miles:174, incMin:348,  incMax:522,  rpm:[2.00,3.00], customer:'Transplace',      pickup:'08/07/2026', delivery:'08/07/2026', status:'Assigned',   equipment:'Van 53',    driver:'Carlos Rivera',truck:'#2098',laneLoad:false },
      { id:'ef-uv56w7x', origin:'Miami, FL',          dest:'Atlanta, GA',      miles:662, incMin:1324, incMax:1986, rpm:[2.00,3.00], customer:'Echo Global',     pickup:'08/08/2026', delivery:'08/09/2026', status:'Booked',     equipment:'Reefer 53', driver:'—',           truck:'—',    laneLoad:false },
    ];

    var _statusTab = 'all';
    var _searchVal = '';
    var _llFilters = [
      { key:'origin', label:'Origin contains (case insensitive)', value: originCity.split(',')[0].trim().toLowerCase() },
      { key:'dest',   label:'Dest contains (case insensitive)',   value: dest.split(',')[0].trim().toLowerCase() },
    ];

    function _getVisible() {
      return ALL_LOADS.filter(function(ld) {
        var fOrig = _llFilters.find(function(f){return f.key==='origin';});
        var fDest = _llFilters.find(function(f){return f.key==='dest';});
        if (fOrig && fOrig.value && ld.origin.toLowerCase().indexOf(fOrig.value.toLowerCase()) < 0) return false;
        if (fDest && fDest.value && ld.dest.toLowerCase().indexOf(fDest.value.toLowerCase()) < 0) return false;
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

    var ov = document.createElement('div'); ov.id = '_ef-ll';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9010;background:rgba(6,12,17,.6);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#0E1820;border:1px solid rgba(255,255,255,.1);border-radius:14px;width:1100px;max-height:86vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 64px rgba(0,0,0,.9)';

    // ── Top bar ──
    var topBar = document.createElement('div');
    topBar.style.cssText = 'display:flex;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid rgba(255,255,255,.07);flex:none;background:#0D141B';
    var titleWrap = document.createElement('div');
    titleWrap.style.cssText = 'display:flex;align-items:center;gap:8px;flex-shrink:0';
    titleWrap.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#27A767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h3"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg><span style="font:800 15px '+F+';color:#FBFBFB">My Loads</span>';
    // Search
    var srchWrap = document.createElement('div');
    srchWrap.style.cssText = 'flex:1;display:flex;align-items:center;gap:8px;background:#101B23;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:0 12px;height:34px';
    srchWrap.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7373" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>';
    var srchInp = document.createElement('input');
    srchInp.placeholder = 'Search loads, lanes, customers…';
    srchInp.style.cssText = 'flex:1;background:none;border:none;outline:none;font:400 12px '+F+';color:#DDE3E9;min-width:0';
    srchInp.style.setProperty('--placeholder-color','#6B7373');
    srchWrap.appendChild(srchInp);
    // Results badge
    var resultsBadge = document.createElement('div');
    resultsBadge.style.cssText = 'display:flex;align-items:center;gap:6px;padding:0 12px;height:34px;border-radius:8px;background:#101B23;border:1px solid rgba(255,255,255,.1);font:700 12px '+F+';color:#8B939B;flex-shrink:0;white-space:nowrap';
    resultsBadge.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7373" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><span id="_ef-ll-rcount">Results: 2</span>';
    // Refresh button
    var syncBtn = document.createElement('div');
    syncBtn.style.cssText = 'display:flex;align-items:center;gap:7px;padding:0 12px;height:34px;border-radius:999px;border:1px solid rgba(255,255,255,.1);cursor:pointer;flex-shrink:0';
    syncBtn.innerHTML = ICON.refresh + '<div style="display:flex;flex-direction:column;gap:2px"><span style="font:800 12px '+F+';color:#FBFBFB;line-height:1">Refresh</span><span style="font:400 10px '+F+';color:#6B7373;line-height:1">DataTruck · Updated 3 min ago</span></div>';
    // Close
    var closeX = document.createElement('button');
    closeX.style.cssText = 'width:30px;height:30px;display:grid;place-items:center;border-radius:8px;cursor:pointer;color:#8B939B;border:1px solid rgba(255,255,255,.1);background:none;font-size:14px;flex-shrink:0';
    closeX.textContent = '✕';
    closeX.addEventListener('click', function(){ov.remove();});
    topBar.appendChild(titleWrap); topBar.appendChild(srchWrap); topBar.appendChild(resultsBadge); topBar.appendChild(syncBtn); topBar.appendChild(closeX);
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
      var newKey='custom'+Date.now();
      _llFilters.push({key:newKey,label:'Field contains',value:'value'});
      _buildFilterChips();
      var chips=filterBar.querySelectorAll('._ef-ll-chip');
      if(chips.length){var lastLbl=chips[chips.length-1].querySelector('span');if(lastLbl)lastLbl.click();}
    });
    tabsBar.appendChild(funnelBtn);
    modal.appendChild(tabsBar);

    // ── Filter chips bar ──
    var filterBar = document.createElement('div');
    filterBar.style.cssText = 'display:flex;align-items:center;gap:6px;padding:8px 20px;border-bottom:1px solid rgba(255,255,255,.06);flex:none;flex-wrap:wrap;background:rgba(0,0,0,.15)';

    function _buildFilterChips() {
      filterBar.querySelectorAll('._ef-ll-chip,._ef-ll-addbtn').forEach(function(c){c.remove();});
      _llFilters.forEach(function(f,fi) {
        if (!f.value) return;
        var chip = document.createElement('div'); chip.className = '_ef-ll-chip';
        chip.style.cssText = 'display:inline-flex;align-items:center;gap:0;border-radius:6px;background:rgba(39,167,103,.08);border:1px solid rgba(39,167,103,.25);font:600 11px '+F+';color:#3FC281;overflow:hidden;cursor:pointer';
        var lbl = document.createElement('span');
        lbl.style.cssText = 'padding:4px 8px 4px 10px;white-space:nowrap';
        lbl.textContent = f.label + ': "' + f.value + '"';
        lbl.title = 'Click to edit';
        lbl.addEventListener('click', function(e) {
          e.stopPropagation();
          var inp = document.createElement('input');
          inp.value = f.value;
          inp.style.cssText = 'background:transparent;border:none;outline:none;font:600 11px '+F+';color:#3FC281;width:'+(Math.max(f.value.length*7+40, 120))+'px;padding:4px 8px 4px 10px';
          chip.replaceChild(inp, lbl);
          inp.focus(); inp.select();
          function _commit(){ var v=inp.value.trim(); _llFilters[fi].value=v; _llPage=1; _buildFilterChips(); _rebuildTable(); }
          inp.addEventListener('blur', _commit);
          inp.addEventListener('keydown', function(ev){ if(ev.key==='Enter'){ev.preventDefault();_commit();} if(ev.key==='Escape'){_llFilters[fi].value=f.value;_buildFilterChips();} });
        });
        var xBtn = document.createElement('span');
        xBtn.style.cssText = 'padding:0 8px;height:100%;display:flex;align-items:center;color:#6B7373;font:700 13px system-ui;cursor:pointer;border-left:1px solid rgba(39,167,103,.15)';
        xBtn.textContent = '×';
        xBtn.addEventListener('click', function(e){ e.stopPropagation(); _llFilters[fi].value=''; _llPage=1; _buildFilterChips(); _rebuildTable(); });
        chip.appendChild(lbl); chip.appendChild(xBtn);
        filterBar.appendChild(chip);
      });
    }
    _buildFilterChips();
    modal.appendChild(filterBar);

    // ── Table ──
    var tblWrap = document.createElement('div');
    tblWrap.style.cssText = 'overflow:auto;flex:1';
    var tblCols = '140px 100px 100px 1fr 1fr 80px 100px 100px 150px';
    var tblHead = document.createElement('div');
    tblHead.style.cssText = 'display:grid;grid-template-columns:'+tblCols+';padding:0 20px;background:#131F27;border-bottom:1px solid rgba(255,255,255,.07);font:700 11px '+F+';color:#6B7373;position:sticky;top:0;z-index:2;min-width:860px';
    var _hp = 'padding:9px 6px;display:flex;align-items:center;gap:3px;white-space:nowrap';
    tblHead.innerHTML = '<div style="'+_hp+'">Load ID ↕</div><div style="'+_hp+'">Status ↕</div><div style="'+_hp+'">Route ↕</div><div style="'+_hp+'">Origin ↕</div><div style="'+_hp+'">Dest ↕</div><div style="'+_hp+'">Distance ↕</div><div style="'+_hp+'">Pickup ↕</div><div style="'+_hp+'">Delivery ↕</div><div style="'+_hp+'">Income ↕</div>';
    tblWrap.appendChild(tblHead);
    var tblBody = document.createElement('div');
    tblBody.style.cssText = 'min-width:860px';
    tblWrap.appendChild(tblBody);
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

    // Check if all lane loads are ignored → remove dot from Add button
    function _checkAllIgnored() {
      var laneLoads = ALL_LOADS.filter(function(l){return l.laneLoad;});
      var allIgn = laneLoads.every(function(ld, _li) {
        var globalIdx = ALL_LOADS.indexOf(ld);
        return _lbIgnored.has(_llBaseKey + '_load' + globalIdx);
      });
      if (allIgn) {
        _lbIgnored.add(_llBaseKey);
        var _ab = document.getElementById('_ef-lb-add');
        if (_ab) { var _d = _ab.querySelector('span[style*="FBB303"]'); if (_d) _d.remove(); }
      }
    }

    function _rebuildTable() {
      var visible = _getVisible();
      var rcount = document.getElementById('_ef-ll-rcount');
      if (rcount) rcount.textContent = 'Results: ' + visible.length;
      _renderPagination(visible.length);
      var startIdx = (_llPage - 1) * _llPerPage;
      visible = visible.slice(startIdx, startIdx + _llPerPage);
      tblBody.innerHTML = '';
      if (!visible.length) {
        var empty = document.createElement('div');
        empty.style.cssText = 'text-align:center;padding:48px 20px;font:400 13px '+F+';color:#6B7373';
        empty.innerHTML = '<div style="font-weight:700;margin-bottom:6px;font-size:14px">No results found for the selected filters.</div><div style="font-size:13px">Try adjusting or clearing your filters to see more results.</div>';
        tblBody.appendChild(empty); return;
      }
      visible.forEach(function(ld) {
        var globalIdx = ALL_LOADS.indexOf(ld);
        var _subKey = _llBaseKey + '_load' + globalIdx;
        var _alreadyIgnored = _lbIgnored.has(_subKey);
        var sc = _statusColor(ld.status);
        var rMin = ld.rpm[0].toFixed(2), rMax = ld.rpm[1].toFixed(2);
        var row = document.createElement('div');
        row.style.cssText = 'display:grid;grid-template-columns:'+tblCols+';padding:0 20px;border-bottom:1px solid rgba(255,255,255,.05);align-items:center;transition:background .1s;cursor:default';
        // Load ID (with yellow dot for lane-specific loads)
        var idCell = document.createElement('div');
        idCell.style.cssText = 'padding:12px 6px;display:flex;align-items:center;gap:6px';
        if (ld.laneLoad && !_alreadyIgnored) {
          var dot = document.createElement('span');
          dot.className = '_ef-ll-dot-'+globalIdx;
          dot.style.cssText = 'width:7px;height:7px;border-radius:50%;background:#FBB303;flex:none;box-shadow:0 0 4px rgba(251,179,3,.5)';
          idCell.appendChild(dot);
        }
        var idSpan = document.createElement('span');
        idSpan.style.cssText = 'font:600 12px monospace;color:#7BCBCB';
        idSpan.textContent = ld.id;
        idCell.appendChild(idSpan);
        row.appendChild(idCell);
        // Status badge
        var statusCell = document.createElement('div');
        statusCell.style.cssText = 'padding:12px 6px';
        statusCell.innerHTML = '<span style="font:700 10px '+F+';color:'+sc.c+';background:'+sc.bg+';border:1px solid '+sc.bd+';border-radius:4px;padding:2px 7px;white-space:nowrap">'+ld.status+'</span>';
        row.appendChild(statusCell);
        // Route (short)
        var rtCell = document.createElement('div');
        rtCell.style.cssText = 'padding:12px 6px;font:400 11px '+F+';color:#6B7373';
        rtCell.textContent = '—';
        row.appendChild(rtCell);
        // Origin
        var origCell = document.createElement('div');
        origCell.style.cssText = 'padding:12px 6px;font:400 12px '+F+';color:#DDE3E9';
        origCell.textContent = ld.origin;
        row.appendChild(origCell);
        // Dest
        var destCell = document.createElement('div');
        destCell.style.cssText = 'padding:12px 6px;font:400 12px '+F+';color:#DDE3E9';
        destCell.textContent = ld.dest;
        row.appendChild(destCell);
        // Distance
        var distCell = document.createElement('div');
        distCell.style.cssText = 'padding:12px 6px;font:400 12px '+F+';color:#ABABAB';
        distCell.textContent = ld.miles + ' mi';
        row.appendChild(distCell);
        // Pickup
        var pkCell = document.createElement('div');
        pkCell.style.cssText = 'padding:12px 6px;font:400 12px '+F+';color:#ABABAB';
        pkCell.textContent = ld.pickup;
        row.appendChild(pkCell);
        // Delivery
        var dlCell = document.createElement('div');
        dlCell.style.cssText = 'padding:12px 6px;font:400 12px '+F+';color:#ABABAB';
        dlCell.textContent = ld.delivery;
        row.appendChild(dlCell);
        // Income + actions (last cell)
        var incCell = document.createElement('div');
        incCell.style.cssText = 'padding:12px 6px;display:flex;align-items:center;justify-content:space-between;gap:8px';
        var incInfo = document.createElement('div');
        incInfo.innerHTML = '<div style="font:700 12px '+F+';color:#3FC281">$'+ld.incMin+'–$'+ld.incMax+'</div><div style="font:400 10px '+F+';color:#7BCBCB">$'+rMin+'–$'+rMax+'/mi</div>';
        incCell.appendChild(incInfo);
        if (ld.laneLoad) {
          var actWrap = document.createElement('div');
          actWrap.style.cssText = 'display:flex;flex-direction:column;align-items:flex-end;gap:4px';
          var addBtn2 = document.createElement('button');
          addBtn2.dataset.gidx = globalIdx;
          addBtn2.className = '_ef-ll-add';
          addBtn2.style.cssText = 'padding:4px 11px;background:#27A767;border:none;border-radius:6px;color:#0B131B;font:800 11px '+F+';cursor:pointer;white-space:nowrap';
          addBtn2.textContent = 'Add to lane';
          actWrap.appendChild(addBtn2);
          if (!_alreadyIgnored) {
            var ignBtn = document.createElement('button');
            ignBtn.style.cssText = 'display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border:1px solid rgba(255,255,255,.08);border-radius:5px;background:transparent;color:#6B7373;font:600 10px '+F+';cursor:pointer;white-space:nowrap';
            ignBtn.innerHTML = '<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"></path></svg> Ignore load';
            (function(gidx, btn, rw){
              btn.addEventListener('click', function(){
                _lbIgnored.add(_llBaseKey+'_load'+gidx);
                var dot = rw.querySelector('._ef-ll-dot-'+gidx);
                if (dot) dot.remove();
                btn.remove();
                _checkAllIgnored();
              });
            })(globalIdx, ignBtn, row);
            actWrap.appendChild(ignBtn);
          }
          incCell.appendChild(actWrap);
        }
        row.appendChild(incCell);
        row.addEventListener('mouseenter', function(){ row.style.background='rgba(255,255,255,.025)'; });
        row.addEventListener('mouseleave', function(){ row.style.background=''; });
        tblBody.appendChild(row);
      });
      // Wire "Add to lane" buttons
      tblBody.querySelectorAll('._ef-ll-add').forEach(function(btn){
        btn.addEventListener('click', function(e){
          e.stopPropagation();
          var gidx = parseInt(btn.dataset.gidx);
          var ld = ALL_LOADS[gidx];
          var tgt = loadsOf(rId)[parseInt(lIdx)];
          if (tgt) {
            var _oldDest = tgt.dest;
            tgt.origin = originCity; tgt.dest = ld.dest; tgt.miles = ld.miles;
            tgt.income = Math.round((ld.incMin+ld.incMax)/2); tgt.status = 'Booked'; tgt.customer = ld.customer;
            if (ld.dest !== _oldDest) _cascadeLane(rId, parseInt(lIdx), ld.dest);
          }
          ov.remove(); _hideLbBar(); _hideLbNotif(); setState({});
        });
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
    ov.addEventListener('click', function(e){ if(e.target===ov) ov.remove(); });
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
        if (tgt) {
          var _oldDest = tgt.dest;
          tgt.origin = originCity; tgt.dest = ld.dest; tgt.miles = ld.miles;
          tgt.income = Math.round((ld.rm[0]+ld.rm[1])/2); tgt.status = 'Booked';
          if (ld.dest !== _oldDest) _cascadeLane(rId, parseInt(lIdx), ld.dest);
        }
        _closeMyLoads(); setState({});
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
        ov.remove(); setState({});
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
    [
      { svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>', label:'Add load', sub:'Search or register a load', fn:function() { menu.remove(); _openNewLoadModal(routeId, originCity); } },
      { svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>', label:'Add lane', sub:'Add a new lane', fn:function() { menu.remove(); _openAddLaneModal(routeId, originCity); } },
      { svg:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>', label:'Add route', sub:'Add bi-hauls, tri-hauls, or loops', fn:function() { menu.remove(); _openAddRoutePanel(routeId, originCity); } },
    ].forEach(function(item) {
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
  function renderLaneMap(origin) { _lmSt.origin = origin; _doRenderLaneMap(); }

  function _openRoutePreferences(routeId) {
    var ex = document.getElementById('_ef-rp'); if (ex) ex.remove();
    var F = 'Nunito,system-ui';
    var ls = loadsOf(routeId);
    var _dest = ls.length ? ls[ls.length - 1].dest : '';
    var ov = document.createElement('div'); ov.id = '_ef-rp';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9020;background:rgba(6,12,17,.6);display:flex;align-items:center;justify-content:center';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#131F27;border:1px solid rgba(255,255,255,.12);border-radius:16px;width:420px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.9)';
    // Header
    var hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;align-items:flex-start;gap:12px;padding:18px 20px 16px;border-bottom:1px solid rgba(255,255,255,.07)';
    hdr.innerHTML =
      '<div style="width:32px;height:32px;border-radius:8px;background:#EB4343;display:grid;place-items:center;flex:none">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"></path></svg>' +
      '</div>' +
      '<div style="flex:1">' +
        '<div style="font:900 15px '+F+';color:#FBFBFB;line-height:1.2">Route filters</div>' +
        '<div style="font:400 11px '+F+';color:#6B7373;margin-top:3px">Filters applied when generating this route</div>' +
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
    // DESTINATION
    var fd = document.createElement('div'); fd.appendChild(_rpLabel('Destination')); fd.appendChild(_rpInput(_dest)); body.appendChild(fd);
    // DAYS ON ROUTE
    var fdr = document.createElement('div'); fdr.appendChild(_rpLabel('Days on route')); fdr.appendChild(_rpSelect(['1 day','1–2 days','1–4 days','1 week','Any'], '1–4 days')); body.appendChild(fdr);
    // BLOCKED REGIONS
    var fbr = document.createElement('div'); fbr.appendChild(_rpLabel('Blocked regions')); fbr.appendChild(_rpAddRow('None — all regions available', '+ Block a region...')); body.appendChild(fbr);
    // BLOCKED STATES
    var fbs = document.createElement('div'); fbs.appendChild(_rpLabel('Blocked states')); fbs.appendChild(_rpAddRow('None — all states available', '+ Block a state...')); body.appendChild(fbs);
    // OPERATIVE COST USED
    var foc = document.createElement('div'); foc.appendChild(_rpLabel('Operative cost used')); foc.appendChild(_rpSelect(['JM_test1 — $2.00 / mi','Standard — $1.75 / mi','Premium — $2.50 / mi'], 'JM_test1 — $2.00 / mi')); body.appendChild(foc);
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
      { city:'Dallas, TX',      cx:51, cy:62, profit:'Best', ease:'Best', conn:'Good', seg:'Fort Worth, TX → Dallas, TX',       loads:148, rev:[563,943],   rpm:[5.63,9.43], pot:{revMin:808, revMax:1117,pftMin:619,pftMax:929, dMin:1,dMax:5,rMin:2.79,rMax:5.57}, ph:1 },
      { city:'Houston, TX',     cx:53, cy:68, profit:'Best', ease:'Best', conn:'Fair', seg:'Fort Worth, TX → Houston, TX',      loads:72,  rev:[849,1481],  rpm:[2.97,5.18], pot:{revMin:1100,revMax:2000,pftMin:450,pftMax:1200,dMin:2,dMax:4,rMin:2.10,rMax:4.30}, ph:2 },
      { city:'Fort Worth, TX',  cx:49, cy:61, profit:'Best', ease:'Good', conn:'Good', seg:'Current → Fort Worth, TX',         loads:91,  rev:[165,332],   rpm:[4.58,9.23], pot:{revMin:200, revMax:400, pftMin:60, pftMax:280, dMin:0,dMax:1,rMin:4.20,rMax:9.00}, ph:0 },
      { city:'Demopolis, AL',   cx:65, cy:59, profit:'Best', ease:'Good', conn:'Good', seg:'Fort Worth, TX → Demopolis, AL',   loads:34,  rev:[1809,2531], rpm:[2.88,4.03], pot:{revMin:2000,revMax:3200,pftMin:900,pftMax:1800,dMin:3,dMax:6,rMin:2.70,rMax:4.20}, ph:3 },
      { city:'Nashville, TN',   cx:63, cy:51, profit:'Good', ease:'Good', conn:'Best', seg:'Fort Worth, TX → Nashville, TN',  loads:58,  rev:[1050,1680], rpm:[2.36,3.78], pot:{revMin:1200,revMax:2000,pftMin:500,pftMax:1200,dMin:2,dMax:5,rMin:2.20,rMax:4.00}, ph:1 },
      { city:'Kansas City, MO', cx:55, cy:47, profit:'Good', ease:'Fair', conn:'Good', seg:'Fort Worth, TX → Kansas City, MO',loads:44,  rev:[780,1245],  rpm:[1.44,2.31], pot:{revMin:900, revMax:1500,pftMin:300,pftMax:900, dMin:2,dMax:4,rMin:1.80,rMax:3.20}, ph:0 }
    ];
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
    modal.style.cssText = 'width:980px;max-width:96vw;max-height:88vh;background:#0B131B;border:1px solid rgba(255,255,255,.12);border-radius:16px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.85)';

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
      // ── Route connections: map top-left + list top-right + stats bar bottom ──
      var ap = RC_PATHS[_lmSt.selPath], isAB = _lmSt.blockedPaths.has(ap.id);
      var activeEdges = new Set(PATH_EDGES[ap.id]||[]);
      var activeNodes = new Set(); (PATH_EDGES[ap.id]||[]).forEach(function(e){ var pts=e.split('-'); activeNodes.add(pts[0]); activeNodes.add(pts[1]); });

      var rcBody = document.createElement('div');
      rcBody.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0';

      // ── Top row: SVG map (left) + path list (right) ──
      var topRow = document.createElement('div');
      topRow.style.cssText = 'flex:1;display:grid;grid-template-columns:1fr 260px;overflow:hidden;min-height:0';

      // SVG map
      var svgArea = document.createElement('div');
      svgArea.style.cssText = 'overflow:hidden;background:#080F15;position:relative';
      var svgNs = 'http://www.w3.org/2000/svg';
      var svgEl = document.createElementNS(svgNs,'svg');
      svgEl.setAttribute('viewBox','0 0 800 260');
      svgEl.setAttribute('preserveAspectRatio','xMidYMid meet');
      svgEl.style.cssText = 'width:100%;height:100%;display:block';

      // Node definitions (positions match RC_BEZ coordinates)
      var NP = {
        A:{ x:80,  y:140, r:26, city:'Houston',     state:'TX', up:true  },
        H:{ x:250, y:215, r:22, city:'Shreveport',  state:'LA', up:false },
        C:{ x:420, y:80,  r:22, city:'Dallas',      state:'TX', up:true  },
        D:{ x:570, y:165, r:22, city:'Little Rock', state:'AR', up:true  },
        B:{ x:720, y:140, r:26, city:'Memphis',     state:'TN', up:true  }
      };

      // All edges — dim background
      Object.keys(RC_BEZ).forEach(function(eid) {
        var bg = document.createElementNS(svgNs,'path');
        bg.setAttribute('d', RC_BEZ[eid]);
        bg.setAttribute('fill','none');
        bg.setAttribute('stroke', activeEdges.has(eid) ? 'rgba(255,255,255,.05)' : 'rgba(255,255,255,.07)');
        bg.setAttribute('stroke-width','2');
        bg.setAttribute('stroke-linecap','round');
        svgEl.appendChild(bg);
      });

      // Active edges — green glow + line
      activeEdges.forEach(function(eid) {
        var glowColor = isAB ? 'rgba(235,67,67,.15)' : 'rgba(39,167,103,.15)';
        var lineColor = isAB ? '#EB4343' : '#27A767';
        var gw = document.createElementNS(svgNs,'path');
        gw.setAttribute('d', RC_BEZ[eid]); gw.setAttribute('fill','none');
        gw.setAttribute('stroke', lineColor); gw.setAttribute('stroke-width','18');
        gw.setAttribute('stroke-linecap','round'); gw.setAttribute('opacity','0.09');
        svgEl.appendChild(gw);
        var ln = document.createElementNS(svgNs,'path');
        ln.setAttribute('d', RC_BEZ[eid]); ln.setAttribute('fill','none');
        ln.setAttribute('stroke', lineColor); ln.setAttribute('stroke-width','3.5');
        ln.setAttribute('stroke-linecap','round');
        svgEl.appendChild(ln);
      });

      // Nodes — outlined circles (photo 3 style) with city name labels
      Object.keys(NP).forEach(function(nid) {
        var np = NP[nid];
        var isAct = activeNodes.has(nid);
        var isKey = nid === 'A' || nid === 'B';
        var actColor = isAB ? '#EB4343' : '#27A767';

        // Circle (outlined, subtle fill)
        var circ = document.createElementNS(svgNs,'circle');
        circ.setAttribute('cx', np.x); circ.setAttribute('cy', np.y); circ.setAttribute('r', np.r);
        circ.setAttribute('fill', isAct ? (isAB ? 'rgba(235,67,67,.1)' : 'rgba(39,167,103,.12)') : 'rgba(11,18,24,.7)');
        circ.setAttribute('stroke', isAct ? actColor : 'rgba(255,255,255,.18)');
        circ.setAttribute('stroke-width', isKey ? '2.5' : '1.5');
        svgEl.appendChild(circ);

        // State abbreviation inside circle
        var st = document.createElementNS(svgNs,'text');
        st.setAttribute('x', np.x); st.setAttribute('y', np.y + 4);
        st.setAttribute('text-anchor','middle'); st.setAttribute('dominant-baseline','middle');
        st.setAttribute('font-size', isKey ? '10' : '9'); st.setAttribute('font-weight','900');
        st.setAttribute('font-family','Nunito,system-ui');
        st.setAttribute('fill', isAct ? actColor : 'rgba(255,255,255,.28)');
        st.setAttribute('pointer-events','none');
        st.textContent = np.state;
        svgEl.appendChild(st);

        // City name — above or below circle
        var labelY = np.up ? np.y - np.r - 10 : np.y + np.r + 13;
        // Line 1: city
        var l1 = document.createElementNS(svgNs,'text');
        l1.setAttribute('x', np.x); l1.setAttribute('y', labelY);
        l1.setAttribute('text-anchor','middle'); l1.setAttribute('font-size','9');
        l1.setAttribute('font-weight','700'); l1.setAttribute('font-family','Nunito,system-ui');
        l1.setAttribute('fill', isAct ? 'rgba(255,255,255,.75)' : 'rgba(255,255,255,.25)');
        l1.setAttribute('pointer-events','none');
        l1.textContent = np.city;
        svgEl.appendChild(l1);
        // Line 2: state (abbreviated suffix already in circle, but city line only shows city name)
      });

      svgArea.appendChild(svgEl);
      topRow.appendChild(svgArea);

      // Path list (right column)
      var pathList = document.createElement('div');
      pathList.style.cssText = 'border-left:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;overflow:hidden;background:rgba(0,0,0,.18)';
      var plHdr = document.createElement('div');
      plHdr.style.cssText = 'padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.07);flex:none';
      plHdr.innerHTML = '<div style="font:800 12px '+F+';color:#FBFBFB">Caminos disponibles</div><div style="font:400 10px '+F+';color:#6B8A9A;margin-top:2px">'+origin+' → Memphis, TN</div>';
      pathList.appendChild(plHdr);
      var plItems = document.createElement('div'); plItems.style.cssText='overflow-y:auto;flex:1';
      RC_PATHS.forEach(function(p, pi) {
        var isSel = pi === _lmSt.selPath, isBlocked = _lmSt.blockedPaths.has(p.id);
        var pRow = document.createElement('div');
        pRow.style.cssText = 'padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.05);border-left:3px solid '+(isSel?'#27A767':'transparent')+';background:'+(isSel?'rgba(39,167,103,.08)':isBlocked?'rgba(235,67,67,.04)':'transparent')+';cursor:'+(isBlocked?'default':'pointer')+';opacity:'+(isBlocked?.45:1);
        pRow.innerHTML = '<div style="font:'+(isSel?800:600)+' 10px '+F+';color:'+(isSel?'#FBFBFB':(isBlocked?'#4A6572':'#ABABAB'))+';margin-bottom:6px;line-height:1.45">'+p.name+(isBlocked?' <span style="color:#EB4343;font-size:8px">[Bloq.]</span>':'')+'</div>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px">'+
          ['income','profit','days'].map(function(k){
            var lbl={income:'Ingreso',profit:'Profit',days:'Días'}[k];
            var val={income:p.income,profit:p.profit,days:p.days}[k];
            var col=k==='income'?(isSel?'#27A767':'#8B939B'):(isSel?'#FBFBFB':'#6B7373');
            return '<div><div style="font:600 8px '+F+';color:#4A6572;text-transform:uppercase;letter-spacing:.3px;margin-bottom:1px">'+lbl+'</div><div style="font:700 9px '+F+';color:'+col+'">'+val+'</div></div>';
          }).join('')+'</div>';
        if (!isBlocked) pRow.addEventListener('click', function() { _lmSt.selPath=pi; _doRenderLaneMap(); });
        plItems.appendChild(pRow);
      });
      pathList.appendChild(plItems);
      topRow.appendChild(pathList);
      rcBody.appendChild(topRow);

      // ── Bottom stats bar ──
      var statsBar = document.createElement('div');
      statsBar.style.cssText = 'display:flex;align-items:center;padding:9px 18px;border-top:1px solid rgba(255,255,255,.07);background:rgba(0,0,0,.22);flex:none;gap:0';
      [['Ingreso est.',ap.income,'#27A767'],['Profit est.',ap.profit,'#7BCBCB'],['Duración',ap.days,'#FBFBFB'],['Millas',ap.miles+' mi','#ABABAB']].forEach(function(kv,i){
        if(i>0){ var dv=document.createElement('div'); dv.style.cssText='width:1px;height:26px;background:rgba(255,255,255,.07);margin:0 16px;flex:none'; statsBar.appendChild(dv); }
        var d=document.createElement('div');
        d.innerHTML='<div style="font:600 9px '+F+';color:#4A6572;text-transform:uppercase;letter-spacing:.3px;margin-bottom:2px">'+kv[0]+'</div><div style="font:800 12px '+F+';color:'+(isAB?'#4A6572':kv[2])+';white-space:nowrap">'+kv[1]+'</div>';
        statsBar.appendChild(d);
      });
      var sbFlex=document.createElement('div'); sbFlex.style.flex='1'; statsBar.appendChild(sbFlex);
      var blockBtn=document.createElement('button');
      blockBtn.style.cssText = isAB
        ? 'padding:6px 16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:6px;color:#ABABAB;font:700 11px '+F+';cursor:pointer'
        : 'padding:6px 16px;background:rgba(235,67,67,.08);border:1px solid rgba(235,67,67,.25);border-radius:6px;color:#EB4343;font:700 11px '+F+';cursor:pointer';
      blockBtn.textContent = isAB ? '↩ Restaurar ruta' : '✕ Bloquear ruta';
      blockBtn.addEventListener('click', function(){
        if(_lmSt.blockedPaths.has(ap.id)) _lmSt.blockedPaths.delete(ap.id); else _lmSt.blockedPaths.add(ap.id);
        _doRenderLaneMap();
      });
      statsBar.appendChild(blockBtn);
      rcBody.appendChild(statsBar);
      body.appendChild(rcBody);
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
    footer.style.cssText = 'display:flex;align-items:center;justify-content:flex-end;padding:12px 20px;border-top:1px solid rgba(255,255,255,.07);background:#101B23;flex:none;gap:8px';

    if (_lmSearchActive) {
      var saveBtn = document.createElement('button');
      saveBtn.style.cssText = 'padding:8px 20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#ABABAB;font:700 12px ' + F + ';cursor:pointer';
      saveBtn.textContent = 'Save changes';
      footer.appendChild(saveBtn);
    } else if (_lmKey) {
      var startBtn = document.createElement('button');
      startBtn.style.cssText = 'display:flex;align-items:center;gap:6px;padding:8px 20px;background:#27A767;border:none;border-radius:8px;color:#0B131B;font:800 12px ' + F + ';cursor:pointer';
      startBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>Start search';
      (function(key, originCity) {
        startBtn.addEventListener('click', function() {
          var lmEl = document.getElementById('_ef-lane-map'); if (lmEl) lmEl.remove();
          _lmSt.origin = null;
          _lbSearch[key] = 'searching';
          setTimeout(function() {
            _lbSearch[key] = 'done'; _lbCount[key] = 2 + Math.floor(Math.random() * 4);
            _showLbNotif(key, originCity);
          }, 3000);
        });
      })(_lmKey, _lmOriginCity);
      footer.appendChild(startBtn);
    }

    modal.appendChild(body);
    modal.appendChild(footer);
    ov.appendChild(modal);
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e) { if(e.target===ov){ _lmSt.origin=null; _lmSt.tab='destinations'; _lmSt.selDest=-1; var m=document.getElementById('_ef-lane-map'); if(m)m.remove(); } });
    modal.querySelector('#_ef-lm-x').addEventListener('click', function(){ _lmSt.origin=null; _lmSt.tab='destinations'; _lmSt.selDest=-1; var m=document.getElementById('_ef-lane-map'); if(m)m.remove(); });
  }

  function renderDetail(routeId) {
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
      if (_existing) { _existing.remove(); return; }
      var _tm = document.createElement('div');
      _tm.id = '_ef-truck-modal';
      _tm.style.cssText = 'position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:40px 20px';
      var _tmbg = document.createElement('div');
      _tmbg.style.cssText = 'position:absolute;inset:0;background:rgba(6,12,17,.65)';
      _tmbg.addEventListener('click', function() { _tm.remove(); });
      var _tmc = document.createElement('div');
      _tmc.style.cssText = 'position:relative;width:100%;max-width:480px;background:#131F27;border:1px solid rgba(255,255,255,.1);border-radius:16px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.6)';
      var _chevSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A6A7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>';
      var _reqLbl = '<span style="font:600 10px Nunito,system-ui;color:#5A6A7A;margin-left:auto;padding-left:8px">Required</span>';
      function _assignRow(iconHtml, mainText, subText, filled) {
        return '<div style="display:flex;align-items:center;gap:12px;padding:13px 14px;background:#0E1820;border:1px solid rgba(255,255,255,' + (filled ? '.12' : '.07') + ');border-radius:10px;cursor:pointer">' +
          '<div style="width:36px;height:36px;border-radius:50%;background:#162330;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + iconHtml + '</div>' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font:' + (filled ? '800' : '500') + ' 13px Nunito,system-ui;color:' + (filled ? '#DDE3E9' : '#8B939B') + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + mainText + '</div>' +
            '<div style="font:500 11px Nunito,system-ui;color:#5A6A7A;margin-top:1px">' + subText + '</div>' +
          '</div>' +
          _chevSvg +
        '</div>';
      }
      var _driverIcon = '<span style="font:800 14px Nunito,system-ui;color:#7BCBCB">D</span>';
      var _truckIcon = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"></path><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"></path><circle cx="7.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>';
      var _trailerIcon = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8B939B" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"></rect><path d="M16 8h4l3 5v3h-7V8z"></path><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>';
      _tmc.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:18px 20px 16px;border-bottom:1px solid rgba(255,255,255,.08)">' +
          '<div style="display:flex;align-items:center;gap:8px;font:800 15px Nunito,system-ui;color:#DDE3E9">' +
            '<span style="color:#8B939B;font-weight:400">+</span> Assign driver &amp; equipment' +
          '</div>' +
          '<button onclick="document.getElementById(\'_ef-truck-modal\').remove()" style="width:28px;height:28px;border-radius:8px;background:#17202A;border:1px solid rgba(255,255,255,.08);color:#8B939B;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;font-size:18px;line-height:1">×</button>' +
        '</div>' +
        '<div style="padding:16px 20px;display:flex;flex-direction:column;gap:4px">' +
          _assignRow(_driverIcon, 'Marcus Reed', 'Driver', true) +
          '<div style="text-align:right;padding:2px 4px 6px">' + _reqLbl + '</div>' +
          _assignRow(_truckIcon, 'TRK-4821 · Van 53\'', 'Unit', true) +
          '<div style="text-align:right;padding:2px 4px 6px">' + _reqLbl + '</div>' +
          _assignRow(_trailerIcon, 'TRL-9203', 'Trailer', true) +
          '<div style="text-align:right;padding:2px 4px 6px">' + _reqLbl + '</div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:12px 20px;border-top:1px solid rgba(255,255,255,.07)">' +
          '<button onclick="document.getElementById(\'_ef-truck-modal\').remove()" style="height:36px;padding:0 18px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:transparent;color:#8B939B;font:700 13px Nunito,system-ui;cursor:pointer">Cancel</button>' +
          '<button onclick="document.getElementById(\'_ef-truck-modal\').remove()" style="height:36px;padding:0 22px;border-radius:999px;border:0;background:#27A767;color:#111D25;font:800 13px Nunito,system-ui;cursor:pointer">Save</button>' +
        '</div>';
      _tm.appendChild(_tmbg);
      _tm.appendChild(_tmc);
      document.body.appendChild(_tm);
    });
    header.appendChild(_htruck);
    // Optimization (clock) button
    var _hopt = document.createElement('button');
    _hopt.style.cssText = 'width:36px;height:36px;border-radius:8px;background:#17202A;border:1px solid rgba(255,255,255,.08);color:#DDE3E9;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;flex-shrink:0';
    _hopt.title = 'Route filters';
    _hopt.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>';
    _hopt.addEventListener('click', function() { _openRoutePreferences(routeId); });
    header.appendChild(_hopt);

    // Action elements – live in tabsBar (map hidden) or rightHdr (map visible)
    var _mapToggleEl = el('div', { class: 'hoverable', onclick: () => setState({ detailMapHidden: !state.detailMapHidden }), style: { padding: '6px 14px', margin: '6px 0', border: '1px solid rgba(255,255,255,.12)', borderRadius: '999px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: state.detailMapHidden ? '#27A767' : undefined } }, [state.detailMapHidden ? 'Show map' : 'Hide map']);
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
                  var _loadsNow = loadsOf(rId);
                  var _newIdx = _loadsNow.findIndex(function(l){ return l.id===newLd.id; });
                  _rebalancePlanChain(rId, _newIdx+1);
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
    var _planTabEls = [
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '7px', padding: '12px 12px', fontSize: '12.5px', fontWeight: '800', color: '#27A767', boxShadow: 'inset 0 -2px 0 0 #27A767', cursor: 'pointer' }, html: ICON.plan + '<span style="margin-left:7px;">Plan</span>' }),
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '7px', padding: '12px 12px', fontSize: '12.5px', fontWeight: '800', color: '#8B939B', cursor: 'pointer' }, html: ICON.onroad + '<span style="margin-left:7px;">On road</span>' }),
      el('div', { style: { display: 'flex', alignItems: 'center', gap: '7px', padding: '12px 12px', fontSize: '12.5px', fontWeight: '800', color: '#8B939B', cursor: 'pointer' }, html: ICON.report + '<span style="margin-left:7px;">Report</span>' })
    ];
    const _tbStyle = { flex: 'none', display: 'flex', alignItems: 'center', gap: '4px', background: '#0E1820', borderBottom: '1px solid rgba(255,255,255,.07)' };
    const _tbContents = [..._planTabEls, el('div', { style: { flex: '1' } }), _mapToggleEl, _syncPillEl, _editRouteEl];

    const laneCols = '40px minmax(200px,1fr) 110px 68px 84px 110px 100px 80px 65px 90px 80px 90px 110px';
    const TABLE_MIN_W = '1220px';
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
      el('div', { style: thP }, ['Profit'])
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
        '<div style="font:700 10px Nunito,system-ui;letter-spacing:.08em;text-transform:uppercase;color:#7BCBCB;margin-bottom:5px">Zona de búsqueda</div>' +
        '<div style="font:500 11.5px Nunito,system-ui;color:#8D99A6;margin-bottom:8px;line-height:1.4">Revisando en ciudades<br>cercanas como:</div>' +
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

    function appendRow(row) {
      const _isDH = row.num === 'DH';
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
                  '<span style="font:600 11px \'JetBrains Mono\',monospace;color:rgba(255,255,255,.75)">'+_ltt.pickup+' · '+_depTime+'</span>' +
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
                    '<div style="font:800 14px \'JetBrains Mono\',monospace;color:#fbbf24">'+_ltt.delivery+' · '+(_ltt.eta||'--')+'</div>' +
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
        el('div', { style: { padding: '10px 6px 10px 0', fontSize: row.isRange ? '10px' : '12px', fontWeight: '800', color: row.profitFg || '#FBFBFB', fontVariantNumeric: 'tabular-nums' } }, [row.profitStr || '--'])
      ]);
      if (row.isRange && row.loadIdx !== null) {
        rowDiv.addEventListener('mouseenter', function() { clearTimeout(_lbTimer); _renderLbBar(rowDiv, routeId, row.loadIdx, row.origin, row.dest); });
        rowDiv.addEventListener('mouseleave', function() { _lbTimer = setTimeout(function() { if (!document.getElementById('_ef-lb-conf') && !document.getElementById('_ef-lb-notif') && !document.getElementById('_ef-lb-menu')) { _hideLbBar(); } }, 200); });
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
      // Cols 4-13: dashes
      for (var _ci = 0; _ci < 10; _ci++) {
        var _cd = document.createElement('div'); _cd.style.cssText = 'padding:10px 6px;color:#2C3A47;font:400 11px Nunito,system-ui'; _cd.textContent = '----------'; addRowDiv.appendChild(_cd);
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
      el('div', { style: { padding: '14px 6px 14px 0', fontSize: _totPftFontSize, fontWeight: '900', color: '#3FC281', fontVariantNumeric: 'tabular-nums' } }, [_totPftDisplay])
    ]));

    const mapPanel = el('div', { style: { position: 'relative', height: '360px', borderRadius: '12px', overflow: 'hidden', background: '#17242E', border: '1px solid rgba(255,255,255,.08)' } }, [
      el('div', { style: { position: 'absolute', inset: '0', backgroundImage: 'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)', backgroundSize: '30px 30px' } }),
      el('div', { style: { position: 'absolute', inset: '0' }, html: '<svg width="100%" height="300" viewBox="0 0 420 300" preserveAspectRatio="none"><path d="M90 150 C 140 90, 210 110, 260 90 S 380 130, 420 190" fill="none" stroke="#7BCBCB" stroke-width="2.5" stroke-linecap="round"></path><path d="M90 150 C 150 200, 240 210, 320 170" fill="none" stroke="#EB4343" stroke-width="2" stroke-dasharray="6 6" stroke-linecap="round"></path></svg>' }),
      el('div', { style: { position: 'absolute', left: '14px', top: '12px', display: 'flex', gap: '8px' } }, [
        el('div', { style: { padding: '5px 11px', borderRadius: '999px', background: 'rgba(11,19,27,.72)', border: '1px solid rgba(255,255,255,.1)', fontSize: '11px', fontWeight: '700' } }, ['View ⌄']),
        el('div', { style: { padding: '5px 11px', borderRadius: '999px', background: 'rgba(11,19,27,.72)', border: '1px solid rgba(255,255,255,.1)', fontSize: '11px', fontWeight: '700', color: '#27A767' } }, ['Open'])
      ]),
      el('div', { style: { position: 'absolute', left: '14px', right: '14px', top: '52px', display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 12px', borderRadius: '10px', background: 'rgba(11,19,27,.85)', border: '1px solid rgba(255,255,255,.1)', fontSize: '11.5px', lineHeight: '1.5', color: '#C9CED2' } }, [
        iconEl('warn', { flex: 'none', marginTop: '1px' }),
        'Tracking unavailable: this route doesn\'t have a unit assigned yet, so we can\'t display a truck location.'
      ]),
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

  // Changelog modal
  const _changelogBtn = document.getElementById('ef-changelog-btn');
  if (_changelogBtn) {
    _changelogBtn.addEventListener('click', () => {
      if (document.querySelector('[data-changelog-overlay]')) return;
      const releases = [
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
