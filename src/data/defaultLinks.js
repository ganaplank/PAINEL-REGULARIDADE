export const DEFAULT_CATEGORIES = [
  { 
    id: 'fiscal', 
    name: 'Regularidade Fiscal & Cadastral', 
    icon: 'Building2', 
    color: '#047857', 
    lightColor: '#10b981',
    bgTint: '#ecfdf5',
    cardBg: '#ffffff',
    borderColor: '#6ee7b7',
    badgeBg: '#059669',
    headerBg: '#d1fae5'
  },
  { 
    id: 'trabalhista', 
    name: 'Regularidade Trabalhista', 
    icon: 'HardHat', 
    color: '#1d4ed8', 
    lightColor: '#3b82f6',
    bgTint: '#eff6ff',
    cardBg: '#ffffff',
    borderColor: '#93c5fd',
    badgeBg: '#2563eb',
    headerBg: '#dbeafe'
  },
  { 
    id: 'juridico', 
    name: 'Justiça & Protestos', 
    icon: 'Scale', 
    color: '#b45309', 
    lightColor: '#f59e0b',
    bgTint: '#fffbeb',
    cardBg: '#ffffff',
    borderColor: '#fcd34d',
    badgeBg: '#d97706',
    headerBg: '#fef3c7'
  }
];

export const DEFAULT_LINKS = {
  fiscal: [
    { id: 'f1', nome: 'Certidão Federal (Receita / PGFN)', url: 'https://servicos.receitafederal.gov.br/servico/certidoes/#/home/cnpj', fav: false, tag: 'Federal' },
    { id: 'f2', nome: 'Comprovante CNPJ (Receita Federal)', url: 'https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp', fav: true, tag: 'CNPJ' },
    { id: 'f3', nome: 'Certificado de Regularidade FGTS (Caixa)', url: 'https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf', fav: false, tag: 'FGTS' },
    { id: 'f4', nome: 'Certidão de Débitos DUC (Pref. SP)', url: 'https://duc.prefeitura.sp.gov.br/certidoes/forms_anonimo/frmConsultaEmissaoCertificado.aspx', fav: false, tag: 'Municipal' },
    { id: 'f5', nome: 'Certidão Negativa Débitos (Sefaz SP)', url: 'https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx', fav: false, tag: 'Estadual' },
    { id: 'f6', nome: 'Jucesp Online (Ficha Cadastral)', url: 'https://www.jucesponline.sp.gov.br/Default.aspx', fav: true, tag: 'Junta Comercial' }
  ],
  trabalhista: [
    { id: 't1', nome: 'CNDT - Certidão Trabalhista (TST)', url: 'https://cndt-certidao.tst.jus.br/inicio.faces', fav: false, tag: 'Nacional' },
    { id: 't2', nome: 'Certidão Trabalhista TRT-2 (SP)', url: 'https://pje.trt2.jus.br/certidoes/trabalhista/emissao', fav: false, tag: 'TRT-2 SP' }
  ],
  juridico: [
    { id: 'j1', nome: 'Certidão de Falência e Concordata (TJSP)', url: 'https://esaj.tjsp.jus.br/sco/abrirCadastro.do', fav: false, tag: 'TJSP' },
    { id: 'j2', nome: 'Certidão Cível / Criminal TRF-3 (Federal)', url: 'https://web.trf3.jus.br/certidao-regional/CertidaoCivelEleitoralCriminal/SolicitarDadosCertidao', fav: false, tag: 'TRF-3' },
    { id: 'j3', nome: 'Consulta de Protesto (IEPTB SP)', url: 'https://protestosp.com.br/consulta-de-protesto', fav: true, tag: 'Protestos' }
  ]
};
