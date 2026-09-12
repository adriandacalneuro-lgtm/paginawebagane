export type Provincia = 'A Coruña' | 'Lugo' | 'Ourense' | 'Pontevedra';

export interface Centro {
    nome: string;
    enderezo: string;
    provincia: Provincia;
    lat: number;
    lng: number;
    telefono?: string;
    web?: string;
    redes?: { label: string; url: string }[];
    logo?: string;
    tipo?: 'publico';
}

export const provincias: Provincia[] = ['A Coruña', 'Lugo', 'Ourense', 'Pontevedra'];

export const centrosPublicos: Centro[] = [
    {
        nome: 'CHUAC — Complexo Hospitalario Universitario de A Coruña',
        enderezo: 'Avenida das Xubias, 84, 15006 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3442634,
        lng: -8.3891462,
        tipo: 'publico'
    },
    {
        nome: 'Hospital Clínico Universitario de Santiago (CHUS)',
        enderezo: 'Rúa da Choupana, s/n, 15706 Santiago de Compostela',
        provincia: 'A Coruña',
        lat: 42.8698364,
        lng: -8.5663254,
        tipo: 'publico'
    },
    {
        nome: 'Hospital Arquitecto Marcide (Ferrol)',
        enderezo: 'Avenida da Residencia, s/n, 15405 Ferrol',
        provincia: 'A Coruña',
        lat: 43.5105586,
        lng: -8.2161469,
        tipo: 'publico'
    },
    {
        nome: 'Hospital Marítimo de Oza (A Coruña)',
        enderezo: 'As Xubias de Arriba, 1, 15006 A Coruña',
        provincia: 'A Coruña',
        lat: 43.344906,
        lng: -8.385036,
        tipo: 'publico'
    },
    {
        nome: 'Hospital Universitario Lucus Augusti (Lugo)',
        enderezo: 'Rúa Doutor Ulises Romero, 1, 27003 Lugo',
        provincia: 'Lugo',
        lat: 43.0206958,
        lng: -7.5338393,
        tipo: 'publico'
    },
    {
        nome: 'CHUO — Complexo Hospitalario Universitario de Ourense',
        enderezo: 'Rúa Ramón Puga, 54, 32005 Ourense',
        provincia: 'Ourense',
        lat: 42.3258516,
        lng: -7.860445,
        tipo: 'publico'
    },
    {
        nome: 'Hospital de Piñor (Ourense)',
        enderezo: 'Estrada de Piñor, s/n, 32930 Barbadás, Ourense',
        provincia: 'Ourense',
        lat: 42.3313143,
        lng: -7.9012722,
        tipo: 'publico'
    },
    {
        nome: 'Hospital Montecelo (Pontevedra)',
        enderezo: 'Rúa Montecelo, s/n, 36071 Pontevedra',
        provincia: 'Pontevedra',
        lat: 42.4286478,
        lng: -8.6143693,
        tipo: 'publico'
    },
    {
        nome: 'Hospital Álvaro Cunqueiro (Vigo)',
        enderezo: 'Estrada Clara Campoamor, 341, 36213 Vigo',
        provincia: 'Pontevedra',
        lat: 42.1888189,
        lng: -8.7129848,
        tipo: 'publico'
    }
];

export const centrosAsociados: Centro[] = [
    {
        nome: 'Axón Ourense',
        enderezo: 'Rúa Nosa Señora da Sainza, 6 Baixo, Ourense',
        provincia: 'Ourense',
        lat: 42.3249827,
        lng: -7.8625479,
        telefono: '604 030 515',
        web: 'https://axonourense.com/',
        redes: [
            { label: 'Instagram', url: 'https://www.instagram.com/axonourense/' },
            { label: 'Facebook', url: 'https://www.facebook.com/axon.ou' }
        ],
        logo: '/images/centros/axon-ourense.jpg'
    },
    {
        nome: 'Impulsa Neuro',
        enderezo: 'Avenida de Celanova, 82 Baixo 5, 32002 Barbadás, Ourense',
        provincia: 'Ourense',
        lat: 42.3221695,
        lng: -7.8815727,
        telefono: '659 28 69 92',
        web: 'https://impulsaneuro.com/',
        redes: [
            { label: 'Instagram', url: 'https://www.instagram.com/impulsa.neuro/' },
            { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61570929149281' },
            { label: 'TikTok', url: 'https://www.tiktok.com/@impulsa.neuro' }
        ],
        logo: '/images/centros/impulsa-neuro.png'
    },
    {
        nome: 'Cefine Neurología',
        enderezo: 'Avenida Miguel González Garcés, 17, 15174 Culleredo, A Coruña',
        provincia: 'A Coruña',
        lat: 43.3239868,
        lng: -8.3841779,
        telefono: '981 978 760',
        web: 'https://cefine.es/',
        redes: [
            { label: 'Instagram', url: 'https://www.instagram.com/cefine_salud/' },
            { label: 'Facebook', url: 'https://www.facebook.com/cefineneuro/' }
        ],
        logo: '/images/centros/cefine-neuroloxia.svg'
    },
    {
        nome: 'Neurostep',
        enderezo: 'Avenida de Montserrat, 16, 15009 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3366119,
        lng: -8.3913753,
        telefono: '981 901 757',
        web: 'https://neurostep.es/',
        redes: [{ label: 'Instagram', url: 'https://www.instagram.com/neurostep.fisioterapia/' }],
        logo: '/images/centros/neurostep.svg'
    },
    {
        nome: 'CEROCUATRO',
        enderezo: 'Rúa Maxistrado Manuel Artime, 18, 15004 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3650505,
        lng: -8.4102448,
        telefono: '981 144 245',
        web: 'https://cerocuatrosalud.es/',
        redes: [{ label: 'Instagram', url: 'https://www.instagram.com/cerocuatrosalud/' }],
        logo: '/images/centros/cerocuatro.svg'
    },
    {
        nome: 'ADACECO',
        enderezo: 'As Xubias de Arriba, 15, 15006 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3448812,
        lng: -8.3856595,
        telefono: '981 075 259',
        web: 'https://xn--danocerebralacorua-30b.org/',
        redes: [{ label: 'Instagram', url: 'https://www.instagram.com/adaceco_/' }],
        logo: '/images/centros/adaceco.png'
    },
    {
        nome: 'Move On Neurorrehabilitación',
        enderezo: 'Avenida de Oza, 114 Baixo, 15006 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3538822,
        lng: -8.3950154,
        telefono: '614 329 175',
        web: 'https://moveoneurorrehabilitacion.com/',
        redes: [{ label: 'Instagram', url: 'https://www.instagram.com/moveoneuro/' }],
        logo: '/images/centros/move-on-neurorrehabilitacion.png'
    },
    {
        nome: 'FEGEREC',
        enderezo: 'Ronda de Nelle, 24, 15005 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3583409,
        lng: -8.408071,
        telefono: '981 234 651',
        web: 'https://fegerec.es/',
        redes: [
            { label: 'Facebook', url: 'https://www.facebook.com/FEGEREC' },
            { label: 'Instagram', url: 'https://www.instagram.com/fegerec/' }
        ],
        logo: '/images/centros/fegerec.png'
    },
    {
        nome: 'Clínica Rehasalud',
        enderezo: 'Rúa Castiñeiras de Abaixo, 40, 15006 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3580651,
        lng: -8.404933,
        telefono: '981 168 964',
        web: 'https://rehasalud.com/',
        redes: [
            { label: 'Instagram', url: 'https://www.instagram.com/rehasalud/' },
            { label: 'Facebook', url: 'https://www.facebook.com/ClinicaRehasalud/' }
        ],
        logo: '/images/centros/rehasalud.png'
    },
    {
        nome: 'Asociación Down Coruña',
        enderezo: 'Avenida de Pedralonga, 74-A, 15009 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3310568,
        lng: -8.3902793,
        telefono: '981 263 388',
        web: 'https://www.downcoruna.org/',
        redes: [
            { label: 'Instagram', url: 'https://www.instagram.com/downcoruna/' },
            { label: 'Facebook', url: 'https://www.facebook.com/DownCoruna' }
        ],
        logo: '/images/centros/down-coruna.jpg'
    },
    {
        nome: 'Ingenia Neurología',
        enderezo: 'Avenida da Coruña, 6 Baixo Dereita, 15701 Santiago de Compostela',
        provincia: 'A Coruña',
        lat: 42.8761897,
        lng: -8.5502287,
        telefono: '981 906 731',
        web: 'https://ingenianeurologia.com/',
        redes: [
            { label: 'Instagram', url: 'https://www.instagram.com/ingenia.neurologia' },
            { label: 'Facebook', url: 'https://www.facebook.com/ingenianeurologia' }
        ],
        logo: '/images/centros/ingenia-neuroloxia.svg'
    },
    {
        nome: 'Diversa Neurorrehabilitación',
        enderezo: 'Rúa José Luis Bugallal Marchesi, 9A Baixo, 15008 A Coruña',
        provincia: 'A Coruña',
        lat: 43.3459456,
        lng: -8.4092185,
        telefono: '881 513 922',
        web: 'https://diversaneuro.com/',
        redes: [{ label: 'Instagram', url: 'https://www.instagram.com/diversa.neuro' }],
        logo: '/images/centros/diversa-neurorrehabilitacion.svg'
    },
    {
        nome: 'Dano Cerebral Santiago de Compostela (Sarela)',
        enderezo: 'Rúa Pedro Cabezas González, 3 - Traspaxonal, 15702 Santiago de Compostela',
        provincia: 'A Coruña',
        lat: 42.8608785,
        lng: -8.5448534,
        telefono: '981 577 037',
        web: 'https://www.danocerebralsantiagodecompostela.org/',
        redes: [
            { label: 'Instagram', url: 'https://www.instagram.com/danocerebralsantiago' },
            { label: 'Facebook', url: 'https://www.facebook.com/danocerebralsantiago' }
        ],
        logo: '/images/centros/sarela-santiago.png'
    },
    {
        nome: 'Avante Fisioterapia',
        enderezo: 'Rúa Monforte, 9 Baixo, 27003 Lugo',
        provincia: 'Lugo',
        lat: 43.0152788,
        lng: -7.5563487,
        telefono: '604 044 613',
        web: 'https://www.avantefisiolugo.com/',
        redes: [{ label: 'Instagram', url: 'https://www.instagram.com/avantefisiolugo/' }],
        logo: '/images/centros/avante-fisioterapia.png'
    },
    {
        nome: 'Hospital Ribera Polusa',
        enderezo: 'Rúa Doutor Iglesias Otero, s/n, 27004 Lugo',
        provincia: 'Lugo',
        lat: 42.9968431,
        lng: -7.5670052,
        telefono: '982 222 854',
        web: 'https://riberasalud.com/polusa/',
        logo: '/images/centros/hospital-ribera-polusa.png'
    },
    {
        nome: 'Neurosinais',
        enderezo: 'Avenida de Monforte, 115 Baixo, 27500 Chantada, Lugo',
        provincia: 'Lugo',
        lat: 42.6091733,
        lng: -7.7688664,
        telefono: '621 200 890',
        redes: [{ label: 'Instagram', url: 'https://www.instagram.com/neurosinais/' }]
    },
    {
        nome: 'Neurosaúde',
        enderezo: 'Rúa de Lugo, 9, 36202 Vigo',
        provincia: 'Pontevedra',
        lat: 42.1986395,
        lng: -8.727956,
        telefono: '986 115 909',
        web: 'https://neurosaude.es/',
        redes: [{ label: 'Instagram', url: 'https://www.instagram.com/neurosaudeag' }],
        logo: '/images/centros/neurosaude.png'
    }
];

export const centros: Centro[] = [...centrosAsociados, ...centrosPublicos];
