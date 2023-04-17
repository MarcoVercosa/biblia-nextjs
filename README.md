# Bem vindo ao FONTE DE VIDA! <img src=https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Earth.gif width="30">

## SITE: http://fontedevida.app.br/

 
<img align="center" width="600" height="400" src="https://miro.medium.com/max/700/1*xI-Cj8LCx2XFD_GswRxJ6Q.png">
 

## :computer: About site

### Status: 
:heavy_check_mark: Produção

### Título: 
FONTE DE VIDA on line

### Descrição: 
Site criado para disponibilizar as 13 versões da bíblia e os 524 hinos da harpa:

- 1993 – Almeida Revisada e Atualizada
- 1969 – Almeida Revisada e Corrigida
- 2009 – Almeida Revisada e Corrigida
- 2017 – Nova Almeida Atualizada
- 2000 – Nova Tradução na Linguagem de Hoje
- Nova Versão Internacional
- Nova Versão Transformadora
- 1848 – Almeida Antiga
- Almeida Recebida
- King James Atualizada
- Basic English Bible
- New International Version
- American Standard Version
- Hinos harpa
- Auxilio IA (GTP)


:computer: Desenvolvido para navegadores Desktop.

:iphone: Desenvolvido para navegadores Mobile.

# Funcionanlidades:
- :heavy_check_mark: Disponibilizar as 13 versões da Bíblia Sagrada.
- :heavy_check_mark: Diponibilizar os 524 hinos da harpa.
- :heavy_check_mark: Encontrar o conteudo da bíblia com interface intuitiva.
- :heavy_check_mark: Curiosidades conforme o livro selecionado.
- :heavy_check_mark: Leitura dinâmica.
- :heavy_check_mark: Pesquisar versículos enviando palavra chave.
- :heavy_check_mark: Buscar hino da Harpa selecionando o número desejado.
- :heavy_check_mark: Buscar hino da Harpa enviando palavra chave.
- :heavy_check_mark: Auxilio da IA para um melhor entendimento do conteudo.


# Tecnologias presentes:
 
## FRONT-END -> <img align="center" width="80" height="80" src="https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png">
### NEXTJS     ->  <img align="center" width="160" height="160" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg">  
## BACK-END -> <img align="center" width="80" height="80" src="https://cdn.worldvectorlogo.com/logos/typescript.svg">
## DOCKER -> <img align="center" width="150" height="150" src="https://event-driven.io/static/67fd4c42f3de35627317b5d2fe97ce92/00d43/2022-05-11-cover.png">

### NODE JS
 -> Axios

 -> cors

 -> dotenv

 -> express

 -> mysql
 
 -> Winston
 
 <img align="center" width="90" height="40" src="https://miro.medium.com/max/1400/1*R36nHDnQ9i7vizbSJqTb1g.png">
 A API está --documentada-- com a lib Swagger (http://localhost:9000/api-documentation/).
 Se o ambiente (.env) estiver como "developer" a rota com documentação ficará disponível.

# Arquitetura:
- BACK-END: Utiliza as boas práticas do MVC e os princípios do S.O.L.I.D, onde permitiu a criação de um códido limpo, organizado e de fácil manutenção.

- FRONT-END: 
Criada em Next JS.
Utiliza componentização, renderização condicional e um código com responsabilidades bem separadas, permitindo fácil manutenção e proporcionando um site rápido e intuitivo.

# InfraEstrutura:
## O Front-End e BackEnd estão hospedados na nuvem (VPS). Ambos estão rodando dentro de containers Docker isolados e automatizados.

- Front-End: Docker (next - node) 
- Front-End? Docker Nginx
- Back-End: Docker Node
- MySQL: Docker Mysql
