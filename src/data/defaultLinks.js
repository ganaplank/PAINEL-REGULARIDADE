export const DEFAULT_CATEGORIES = [
  { 
    id: 'fiscal', 
    name: 'Regularidade Fiscal & Cadastral', 
    icon: 'Building2', 
    color: '#059669', 
    lightColor: '#10b981',
    bgTint: 'rgba(16, 185, 129, 0.06)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
    badgeBg: '#10b981'
  },
  { 
    id: 'trabalhista', 
    name: 'Regularidade Trabalhista', 
    icon: 'HardHat', 
    color: '#2563eb', 
    lightColor: '#3b82f6',
    bgTint: 'rgba(37, 99, 235, 0.06)',
    borderColor: 'rgba(37, 99, 235, 0.25)',
    badgeBg: '#3b82f6'
  },
  { 
    id: 'juridico', 
    name: 'Justiça & Protestos', 
    icon: 'Scale', 
    color: '#d97706', 
    lightColor: '#f59e0b',
    bgTint: 'rgba(245, 158, 11, 0.06)',
    borderColor: 'rgba(245, 158, 11, 0.25)',
    badgeBg: '#f59e0b'
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
