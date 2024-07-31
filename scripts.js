let subTitulo = document.getElementById('sub-titulo')

let paragrafoPrincipal = document.getElementById('paragrafo-principal')
let paragrafoSub = document.getElementById('sub-paragrafo')
let referencia = document.getElementById('referencia')
let link = document.getElementById('link')

let imagemPrincipal = document.getElementById('imagem-principal')
let video = document.getElementById("video")

function Seguranca(){
    subTitulo.innerHTML = 'Segurança nas escolas públicas de Campos'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>O vereador Maicon Cruz protocolou na manhã desta segunda-feira (10) um pacote de projetos com medidas para reforçar a segurança nas escolas públicas de Campos. A iniciativa acontece mediante ao aumento de atentados em escolas do Brasil nos últimos meses."

    video.style.display = 'none'
    
    imagemPrincipal.src = "../imagens/Maicon/atividades_Fotos/Segurança.jpg"
    imagemPrincipal.style.display = 'block'

    paragrafoSub.style.paddingBottom = '20px'
    paragrafoSub.style.paddingTop = '15px'

    paragrafoSub.innerHTML = '<span></span>Maicon também afirma que marcou para esta semana uma reunião com o Comandante do 8º Batalhão de Polícia Militar de Campos, Ricardo Ricardo Alexandre, para conversar sobre a ronda escolar. <br><br> </><span></span><em>Confira as medidas protocoladas pelo vereador:</em> <br><br> <span></span>1. Projeto de Lei 005/23, que Dispõe sobre a instalação de dispositivo eletrônico de segurança do tipo botão de pânico nas escolas públicas da Rede de Ensino da cidade de Campos dos Goytacazes; <br><br> <span></span>2. Projeto de Lei 004/23, que estabelece as Políticas Públicas para a segurança escolar nas instituições públicas e privadas de ensino no município; <br><br> <span></span>3. Está articulando a reativação do Conselho de Segurança Escolar, com reuniões descentralizadas nas unidades de ensino e com a participação das autoridades de segurança pública'

    referencia.style.paddingBottom = '0px'
    referencia.style.paddingTop = '0px'

    referencia.style.paddingTop = '20px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada do <strong>Blog do Arnaldo</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://blogdoarnaldoneto.com.br/maicon-cruz-protocola-projeto-que-reforca-a-seguranca-nas-escolas-de-campos/" target="_blank" rel="external">https://blogdoarnaldoneto.com.br/maicon-cruz-protocola-projeto-que-reforca-a-seguranca-nas-escolas-de-campos/</a>'
}

function Turismo(){
    subTitulo.innerHTML = 'Ministério do Turismo para Campos'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>O vereador Maicon Cruz liderou uma comitiva de parlamentares campistas em agenda com a ministra do Turismo, Daniela Carneiro, nesta quarta-feira (14). Na pauta do encontro, investimentos da ordem de R$ 14 milhões no setor em Campos."

    video.style.display = 'none'
    
    imagemPrincipal.src = "../imagens/Maicon/atividades_Fotos/Investimentos.jpeg"
    imagemPrincipal.style.display = 'block'

    paragrafoSub.style.paddingBottom = '20px'
    paragrafoSub.style.paddingTop = '15px'

    paragrafoSub.innerHTML = '<span></span>Participaram, ainda, da iniciativa, os vereadores Rogério Matoso, Igor Pereira, Dandinho de Rio Preto, Marquinho do Transporte, Bruno Vianna, Helinho Nahim e Fred Rangel, além do secretário municipal de Turismo Hans Muylaert. <br><br> <span></span>Nascida em Campos, a ministra conhece o potencial turístico do município e entende a importância de investimentos nas regiões de Rio Preto, Lagoa de Cima, Morro do Itaoca e Imbé, que têm potencial de colocar a cidade definitivamente no roteiro turístico do estado do Rio de Janeiro.'

    referencia.style.paddingTop = '20px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada de <strong>J3NEWS</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://j3news.com/2023/06/14/vereador-maicon-cruz-lidera-comitiva-para-captar-r-14-milhoes-junto-ao-ministerio-do-turismo-para-investimentos-em-campos/" target="_blank" rel="external">https://j3news.com/2023/06/14/vereador-maicon-cruz-lidera-comitiva-para-captar-r-14-milhoes-junto-ao-ministerio-do-turismo-para-investimentos-em-campos/</a>'
}

function Emendas(){
    subTitulo.innerHTML = 'Emendas Parlamentares'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>O vereador de Campos dos Goytacazes, Maicon Cruz, tem se destacado pelas emendas parlamentares que tem conseguido durante o seu mandato, trazendo benefícios para saúde e educação do município localizado no Norte Fluminense. <br><br> <span></span>Na última segunda-feira, os recursos concretizados foram destinados a Obra do Salvador, um valor de R$ 500 mil que abrirá portas para a integração de jovens, proporcionando chance de explorar novas fronteiras por meio da tecnologia e da musicalização."

    video.style.display = 'none'
    
    imagemPrincipal.src = "../imagens/Maicon/atividades_Fotos/Emendas.jpg"
    imagemPrincipal.style.display = 'block'

    paragrafoSub.style.paddingBottom = '20px'
    paragrafoSub.style.paddingTop = '15px'

    paragrafoSub.innerHTML = '<span></span>Vale ressaltar, que após assumir uma das cadeiras na Câmara Municipal, Maicon já é o vereador que conseguiu mais emendas para a cidade de Campos, em parceria com a deputada federal Daniela do Waguinho e com o senador Carlos Portinho. Entre as de destaque, estão: <br><br> <span></span>1. 500 mil para a Secretaria de Desenvolvimento Humano e Social para a ampliação do serviço de convivência familiar e fortalecimento de vínculos; <br><br> <span></span>2. 500 mil para o Hospital Escola Alvaro Alvim; <br><br> <span></span>3. 500 mil para a reforma da UPH de Ururai; <br><br> <span></span>4. 300 mil para um castra móvel; <br><br> <span></span>5. 1.000 um milhão para reforma de escolas; <br><br> <span></span>6. 300 mil para aquisição de um ônibus escolar; <br><br> <span></span>7. 2 milhões para o Hospital Beneficência Portuguesa <br><br> <span></span>“E o meu dever contribuir com nosso município, especialmente nas áreas de saúde e educação. Com o apoio da deputada federal Daniela do Waguinho e do senador Carlos Portinho, conseguimos direcionar importantes emendas para projetos como a ampliação do serviço de convivência familiar, reforma de unidades de saúde e investimentos em escolas.  <br><br> <span></span>Acredito que essas ações vão impactar positivamente a vida do cidadão campista, proporcionando melhores condições de educação e saúde. Estamos empenhados em trazer mais oportunidades e qualidade de vida para Campos dos Goytacazes.”, disse Maicon. <br><br> <span></span>Todos recursos representam um investimento significativo na educação e na saúde de Campos, que certamente terá impactos positivos na qualidade do ensino e no desenvolvimento dos alunos, além de trazer mais recursos e condições de cuidar da vida das pessoas.'

    referencia.style.paddingTop = '20px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada de <strong>MANCHETE RJ</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://mancheterj.com/politicatrc/vereador-maicon-cruz-totaliza-mais-de-r-5-milhoes-em-emendas-parlamentares-ao-municipio-de-campos/" target="_blank" rel="external">https://mancheterj.com/politicatrc/vereador-maicon-cruz-totaliza-mais-de-r-5-milhoes-em-emendas-parlamentares-ao-municipio-de-campos/</a>'
}

function Defesa(){
    subTitulo.innerHTML = 'Proteção e Defesa dos Animais'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>A Câmara de Campos aprovou, em sessão ordinária realizada nesta quarta-feira (20), o Projeto de Lei de nº 0196/2022, de autoria do vereador Maicon Cruz, que cria o Conselho Municipal de Promoção e Defesa dos Animais – CMPDA, Fundo Municipal de Proteção à Vida Animal – FUNPROVIDA."

    video.style.display = 'none'
    
    imagemPrincipal.src = "../imagens/Maicon/atividades_Fotos/animais2.jpg"
    imagemPrincipal.style.display = 'block'

    paragrafoSub.style.paddingBottom = '20px'
    paragrafoSub.style.paddingTop = '15px'

    paragrafoSub.innerHTML = '<span></span>O Conselho tem como objetivo desenvolver medidas de proteção dos animais, de grande e pequeno porte, e auxiliar na definição das políticas públicas a serem seguidas no setor. Já o Fundo Municipal visa criar projetos para a proteção e a preservação da saúde animal e humana e ao incentivo das diferentes formas de expressão, prática e valorização da vida animal. <br><br> <span></span>O vereador Maicon Cruz disse à reportagem do Manchete RJ que “este projeto representa um passo significativo em direção a uma cidade mais compassiva e consciente, onde os direitos e o bem-estar dos animais são prioridade.” <br><br> <span></span>“A criação do Fundo e do Conselho é um compromisso com a responsabilidade e o respeito para com todas as formas de vida que compartilham nossa cidade”, completou o parlamentar.'

    referencia.style.paddingTop = '20px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada de <strong>TRC</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://tarolandonacidade.com.br/vereador-maicon-cruz-comemora-aprovacao-do-projeto-que-cria-conselho-municipal-de-protecao-e-defesa-dos-animais/" target="_blank" rel="external">https://tarolandonacidade.com.br/vereador-maicon-cruz-comemora-aprovacao-do-projeto-que-cria-conselho-municipal-de-protecao-e-defesa-dos-animais/</a>'
}

function Gincana(){
    subTitulo.innerHTML = 'Comemoração ao Dia da Consciência Negra'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>Comemorando o Dia da Consciência Negra, o vereador e presidente da Comissão Parlamentar de Educação da Câmara Campista, Maicon Cruzz, realizou nesta segunda-feira (21), uma Gincana envolvendo seis escolas públicas do município, cujos patronos das unidades marcaram a história abolicionista. <br> <br> <span></span>A competição, dividida em quatro etapas, foi disputada por times de cinco integrantes cada e consagrou, com o plenário lotado, o Colégio Estadual Visconde do Rio Branco como campeão."

    video.style.display = 'none'
    
    imagemPrincipal.src = "../imagens/Maicon/atividades_Fotos/negra.jpeg"
        imagemPrincipal.style.display = 'block'
    
    paragrafoSub.style.paddingBottom = '20px'
    paragrafoSub.style.paddingTop = '15px'

    paragrafoSub.innerHTML = '<span></span>Além de perguntas e respostas sobre o período da escravidão, discriminação racial, personalidades negras e leis relacionadas, as equipes apresentaram teatro, música e a história de seu patrono. Na Comissão julgadora, responsável pela pontuação dos times, esteve a professora, graduada pela UERJ com pesquisa e estudos Afro-americanos e secretária executiva da UFF em Campos, Fernanda Magalhães, o advogado e membro da Comissão de Igualdade Racial da 12ª subseção da OAB Adilson Lucas e a professora da UENF, mestre pela UFRS com pesquisa anti-racismo, doutora em sociologia pela UFRJ, Luciane Soares. <br><br> <span></span>Todas as equipes, formadas por alunos do terceiro ano do ensino médio foram recebidas com um café da manhã e ganharam R$500,00 cada para auxílio em suas formaturas. O time campeão recebeu R$2mil como premiação. <br><br> <span></span>O dinheiro das premiações foi pago através da doação de 50% do 13º salário do vereador Maicon. Para ele, o evento foi importante para o protagonismo jovem e o debate dessa importante pauta, “as mudanças sociais positivas passam pela educação. Nossos jovens merecem ser protagonistas na reflexão da importância do combate a discriminação racial. A Gincana foi uma ação importante na luta contra o racismo, na disseminação da história de conquistas dos negros. Agradeço a todos que participaram, colaboraram, em especial a juventude que deu um show no plenário da Casa”. <br><br> <span></span>Participaram da Gincana: Colégio Estadual José do Patrocínio, Liceu de Humanidades de Campos, Colégio Estadual Benta Pereira, Colégio Estadual Visconde do Rio Branco, Colégio Estadual Nilo Peçanha e CIEP 417 José do Patrocínio.'

    referencia.style.paddingTop = '20px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada de <strong>Jornal Online Baixada Campista</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://baixadacampista.com.br/vereador-maicon-cruz-promove-gincana-da-consc-negra.html" target="_blank" rel="external">https://baixadacampista.com.br/vereador-maicon-cruz-promove-gincana-da-consc-negra.html</a>'
}

function Piso(){
    subTitulo.innerHTML = 'Cumprimento da lei do piso salarial'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>O vereador Maicon Cruz, segue cumprindo uma vasta agenda em Brasília. No final da tarde desta terça-feira (13), Maicon se reuniu com a deputada federal e presidente da Frente Nacional de Educação, Tabata Amaral, para discutir a necessidade do cumprimento da lei do piso salarial do magistério. <br><br> <span></span>Durante o encontro, Maicon ressaltou a importância de uma legislação que responsabilize os gestores que não estão cumprindo a lei do piso."

    video.style.display = 'none'
    
    imagemPrincipal.src = "../imagens/Maicon/atividades_Fotos/piso.jpg"
    imagemPrincipal.style.display = 'block'

    paragrafoSub.style.paddingBottom = '20px'
    paragrafoSub.style.paddingTop = '15px'

    paragrafoSub.innerHTML = '<span></span>"É fundamental que o Congresso Nacional aprove uma lei que responsabilize devidamente os gestores que não cumprem o piso salarial dos professores", ressaltou o vereador Maicon Cruz. <br><br> <span></span>"É uma situação desumana termos uma lei que reconhece e valoriza os professores, mas que não é efetivamente cumprida, deixando esses profissionais humilhados e sem o devido reconhecimento", completou. <br><br> <span></span>A visita a Brasília tem como objetivo principal buscar soluções para essa problemática e garantir que os educadores sejam devidamente valorizados, conforme estabelecido pela legislação em vigor.'

    referencia.style.paddingTop = '20px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada de <strong> Exclusivo RJ</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://portalexclusivorj.com/noticia/18460/vereador-maicon-cruz-e-deputada-federal-tabata-amaral-discutem-cumprimento-do-piso-salarial-do-magis.html" target="_blank" rel="external">https://portalexclusivorj.com/noticia/18460/vereador-maicon-cruz-e-deputada-federal-tabata-amaral-discutem-cumprimento-do-piso-salarial-do-magis.html</a>'

}

function Programa(){
    subTitulo.innerHTML = 'Programa Escola em Tempo Integral.'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>A presença do vereador de Campos, Maicon Cruz, em Brasília, trouxe uma informação privilegiada para as escolas do município. <br><br> <span></span>Em reunião com a Secretária Nacional de Educação Básica do Ministério da Educação, Kátia Schweickardt, foi anunciado ao parlamentar que a cidade do Norte do Estado contará com o Programa Escola em Tempo Integral. <br><br> <span></span>Na ocasião, o vereador estava acompanhado do Deputado Federal, Caio Viana (PSD), também de Campos."

    video.style.display = 'none'
    
    imagemPrincipal.src = "../imagens/Maicon/atividades_Fotos/progama_escolar.jpeg"
    imagemPrincipal.style.display = 'block'

    paragrafoSub.style.paddingBottom = '20px'
    paragrafoSub.style.paddingTop = '15px'

    paragrafoSub.innerHTML = '<span></span>O objetivo do projeto é ampliar o acesso dos alunos a uma educação de qualidade e em tempo integral. Segundo o MEC, serão destinadas para Campos 1.386 vagas para o programa, proporcionando uma série de benefícios para estudantes e comunidades locais. <br><br> </><span></span>“Essa iniciativa visa transformar a experiência educacional dos alunos, oferecendo atividades extracurriculares, apoio pedagógico e alimentação adequada, garantindo um ambiente propício para o aprendizado”, afirmou o vereador. <br><br> </><span></span>O município tem até o dia 15 de outubro para pactuar a proposta, e os detalhes já estão sendo cuidadosamente planejados para que a implementação ocorra com sucesso. <br><br> </><span></span>Uma das principais novidades é o montante de recursos que Campos receberá para investir nas unidades que oferecerão o ensino em tempo integral. Serão destinados mais de R$ 8 milhões, especificamente R$ 8.559.000,00 (oito milhões, quinhentos e cinquenta e nove mil reais), para a melhoria das instalações e aprimoramento do ensino. <br><br> </><span></span>O destaque é que metade desse valor, o equivalente a R$ 4.279.500,00 (quatro milhões, duzentos e setenta e nove mil e quinhentos reais), será repassado ainda em 2023, permitindo que as escolas iniciem as melhorias de infraestrutura e implementem o programa o mais rápido possível. Os outros 50% serão disponibilizados no ano de 2024, garantindo a continuidade das melhorias. <br><br> </><span></span>Esses recursos representam um investimento significativo na educação de Campos, que certamente terá impactos positivos na qualidade do ensino e no desenvolvimento dos alunos. Além disso, a oferta de vagas em tempo integral cria novas oportunidades para que os pais possam trabalhar com mais tranquilidade, sabendo que seus filhos estão em um ambiente seguro e educativo durante todo o dia.'

    referencia.style.paddingTop = '20px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada de <strong> Campos Ocorrências</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://camposocorrencias.com.br/2023/10/05/ao-lado-de-secretaria-nacional-de-educacao-basica-vereador-maicon-cruz-anuncia-o-programa-escola-em-tempo-integral-em-campos/" target="_blank" rel="external">https://camposocorrencias.com.br/2023/10/05/ao-lado-de-secretaria-nacional-de-educacao-basica-vereador-maicon-cruz-anuncia-o-programa-escola-em-tempo-integral-em-campos/</a>'
}

function Homenagem(){
    subTitulo.innerHTML = 'Homenagem à Atleta Campista'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>Colecionadora de títulos e brilhando no futebol, atualmente defendendo o time da AFE – Associação Ferroviária de Esportes, que é considerado o melhor clube de base do Brasil no futebol feminino, Yasmim Lima de Queiroz Azevedo, 13 anos, foi homenageada no plenário da Câmara Campista nesta terça-feira (13), recebendo Moção de Aplausos proposta pelo vereador Maicon Cruz, aprovada de forma unânime."

    video.style.display = 'none'
    
    imagemPrincipal.src = "../imagens/Maicon/atividades_Fotos/atleta.jpg"
    imagemPrincipal.style.display = 'block'

    paragrafoSub.style.paddingBottom = '20px'
    paragrafoSub.style.paddingTop = '15px'

    paragrafoSub.innerHTML = '<span></span>Yasmim, muito aplaudida por todos os presentes no plenário, começou a jogar futebol em 2018 na AFAP – Campos, sendo a única menina na cidade à disputar competições compondo um time masculino. Dentre as conquistas da atleta estão: COPA POLENTA-ES, COPA MSR-Macaé 2021, COPA MSR – Macaé 2022, Taça Guarús, COPA GIGGS, campeã do SUB-15 do campeonato paulista onde também foi campeã pelo SUB-14. Yasmin, jogando pelo A11 (time de São Fidelis) também disputou e venceu em time masculino a RIO DAS OSTRAS CUP, onde foi observada por captadores de talentos (olheiros) que fizeram a ela o convite para o ingresso no time paulista, que atualmente ela integra desde março deste ano.<br><br> </><span></span>Orgulho da família, assim como o irmão que também segue os passos do futebol, Yasmin se diz realizada no esporte e sonha com voos mais altos, “sou muito grata a minha família pelo apoio, aos clubes que passei e defendi, a todos que de alguma forma contribuíram para esse caminho que venho trilhando no esporte, ao vereador Maicon Cruz pelo incentivo, pelo apoio, pela parceria e reconhecimento com essa moção e dizer que me sinto muito realizada, mesmo não tendo apoio da minha cidade através do governo, mas sabendo que muitos campistas estão torcendo por mim e quero poder subir nas categorias e poder corresponder as expectativas de todos que me acompanham com resultados de vitórias e conquistas”.'

    referencia.style.paddingTop = '20px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada de <strong> Exclusivo RJ</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://portalexclusivorj.com/noticia/14853/atleta-campista-e-homenageada-na-camara-municipal-pelo-vereador-maicon-cruz.html" target="_blank" rel="external">https://portalexclusivorj.com/noticia/14853/atleta-campista-e-homenageada-na-camara-municipal-pelo-vereador-maicon-cruz.html</a>'
}

function Voto(){
    subTitulo.innerHTML = 'Posicionamento Contrário ao Código Tributário'

    paragrafoPrincipal.style.paddingBottom = '20px'
    paragrafoPrincipal.style.paddingTop = '15px'

    paragrafoPrincipal.innerHTML = "<span></span>O vereador Maicon Cruz (PSC) se posicionou nesta quarta-feira (16) sobre como vota em relação ao Novo Código Tributário proposto pelo prefeito Wladimir Garotinho (PSD). Ele diz que votará contra ao projeto na sessão da Câmara de Vereadores de Campos dos Goytacazes que deve ser bastante movimentada. A sessão está marcada para às 17h. <br><br> <span></span>Desde terça-feira (15), outros vereadores já tinham se posicionado sobre a votação (clique aqui). <br><br> <span></span>Há grandes chances de Wladimir conseguir aprovação com ajuda dos parlamentares para a reforma tributária que prevê aumento de impostos."

    imagemPrincipal.style.display = 'none'

    video.style.display = 'block'
    video.innerHTML = "<video width='100%' height='400' preload='auto' controls> <source src='../imagens/videos/codigo_tributario.mp4' type='video/mp4'> </video>"

    paragrafoSub.style.paddingBottom = '0px'
    paragrafoSub.style.paddingTop = '0px'
    paragrafoSub.innerHTML = ''

    referencia.style.paddingTop = '15px'
    referencia.style.paddingBottom = '0px'

    referencia.innerHTML = 'Notícia e Imagem Retirada de <strong> J3NEWS</strong>'

    link.style.paddingBottom = '0px'
    link.style.paddingTop = '0px'
    
    link.innerHTML = 'Link: <a href="https://j3news.com/2021/06/16/vereador-maicon-cruz-fala-sobre-seu-voto-contrario-ao-codigo-tributario/" target="_blank" rel="external">https://j3news.com/2021/06/16/vereador-maicon-cruz-fala-sobre-seu-voto-contrario-ao-codigo-tributario/</a>'
}