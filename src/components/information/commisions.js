import { exchange } from '../ExchangeRate'

export const commisionStatus = false

const prices = {
  head: {
    simple: 4,
    full: 7,
  },
  halfbody: {
    simple: 6,
    full: 8,
  },
  fullbody: {
    simple: 8,
    full: 10,
  },
}
const usdRate = 1.057921
const copRate = 4630.1

export let status

if (commisionStatus) {
  status = 'open'
} else {
  status = 'closed'
}

export const TOS = [
  // EN
  {
    title: 'terms of service',
    subtitle: 'by commisioning me you agree to the following terms of service:',
    TOS: {
      general: [
        'i do not support nft or ia, if you are going to use my art for it, you better not commision me.',
        'you can request advances on your order anytime.',
        'you can post your commision, as long as you give credits.',
      ],
      workflow: [
        'i start to work once 50% of the order has been paid.',
        'if you have a specific deadline, please let me know in advance, otherwise i will work with the standard delivery time.',
        'orders are delivered within 7 working days.',
        'if I have a problem (with the university or something else) I will notify you about the delay.',
        'i require a visual reference of the character (preferred digital).',
        'the references in traditional must be clear and with their colors in digital.',
        'i do not accept shaded drawings as reference',
        "i can make minor modifications to the drawing, but don't make me do it all over again.",
      ],
      'payments and refounds': [
        'all prices are in USD.',
        'payments are made via paypal only.',
        'please wait for my approval before making the payment.',
        'payments must be made within 48 hours, otherwise the order will be cancelled.',
        'once the piece has been started no refounds can be requested.',
      ],
    },
  },
  // ES
  {
    title: 'terminos de servicio',
    subtitle: 'al comisionarme aceptas los siguientes terminos de servicio:',
    TOS: {
      general: [
        'no apoyo a los nft ni las ia, sí vas a usar mi arte para ello mejor no me comisiones.',
        'puedes solicitar en cualquier momento avances de tu pedido.',
        'puedes postear tu comisión, siempre y cuando des créditos.',
      ],
      'manera de trabajar': [
        'empiezo a trabajar una vez el 50% del precio del del pedido ha sido pagado.',
        'si tienes una fecha limite, por favor, avisa con anticipación, de resto trabajaré con el plazo de entrega estándar.',
        'los pedidos se entregan en un plazo de 7 días hábiles',
        'si presento un inconveniente (temas de estudios de la universidad u otra cosa) te notificaré sobre el atraso.',
        'requiero una referencia visual del personaje (de preferencia digital).',
        'las referencias en tradicional deben ser claras y con sus colores en digital.',
        'no acepto como referencia dibujos sombreados.',
        'puedo hacer pequeñas modificaciones al dibujo, pero no me hagas hacerlo todo de nuevo.',
      ],
      'pagos y reembolsos': [
        'todos los precios están en pesos colombianos (COP) y dólares estadounidences (USD).',
        'los pagos se realizan solo por NEQUI o PayPal.',
        'por favor espera mi aprovación antes de realizar el pago.',
        'los pagos tienen un plazo de 48 horas para realizarlos, en caso contrario, el pedido será cancelado.',
        'una vez he comenzado a trabajar en el pedido no se pueden pedir reembolsos.',
      ],
    },
  },
]

export const chart = [
  // EN
  {
    title: 'commision chart',
    table: {
      headers: ['tier', 'type', 'price'],
      tableBody: {
        headSimple: [
          'color only',
          'head',
          `${Math.floor(usdRate * prices.head.simple)} USD`,
        ],
        halfbodySimple: [
          'color only',
          'halfbody',
          `${Math.floor(usdRate * prices.halfbody.simple)} USD`,
        ],
        fullbodySimple: [
          'color only',
          'fullbody',
          `${Math.floor(usdRate * prices.fullbody.simple)} USD`,
        ],
        separator: ['------------', '------------', '------------'],
        headFull: [
          'full color',
          'head',
          `${Math.floor(usdRate * prices.head.full)} USD`,
        ],
        halfbodyFull: [
          'full color',
          'halfbody',
          `${Math.floor(usdRate * prices.halfbody.full)} USD`,
        ],
        fullbodyFull: [
          'full color',
          'fullbody',
          `${Math.floor(usdRate * prices.fullbody.full)} USD`,
        ],
      },
    },
  },
  // ES
  {
    title: 'tabla de comisiones',
    table: {
      headers: ['tier', 'type', 'price COP', 'price USD'],
      tableBody: {
        headSimple: [
          'color only',
          'head',
          `${Math.floor(copRate * prices.head.simple)} COP`,
          `${Math.floor(usdRate * prices.head.simple)} USD`,
        ],
        halfbodySimple: [
          'color only',
          'halfbody',
          `${Math.floor(copRate * prices.halfbody.simple)} COP`,
          `${Math.floor(usdRate * prices.halfbody.simple)} USD`,
        ],
        fullbodySimple: [
          'color only',
          'fullbody',
          `${Math.floor(copRate * prices.fullbody.simple)} COP`,
          `${Math.floor(usdRate * prices.fullbody.simple)} USD`,
        ],
        separator: [
          '------------',
          '------------',
          '------------',
          '------------',
        ],
        headFull: [
          'full color',
          'head',
          `${Math.floor(copRate * prices.head.full)} COP`,
          `${Math.floor(usdRate * prices.head.full)} USD`,
        ],
        halfbodyFull: [
          'full color',
          'halfbody',
          `${Math.floor(copRate * prices.halfbody.full)} COP`,
          `${Math.floor(usdRate * prices.halfbody.full)} USD`,
        ],
        fullbodyFull: [
          'full color',
          'fullbody',
          `${Math.floor(copRate * prices.fullbody.full)} COP`,
          `${Math.floor(usdRate * prices.fullbody.full)} USD`,
        ],
      },
    },
  },
]
