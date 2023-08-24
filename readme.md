[Documentation](https://linktodocumentation)  
<!DOCTYPE html>
<html>

<head>
  <title>Análise de Código Malicioso</title>
</head>

<body>

<h1>Detecção e Análise de Código Malicioso em dominios gov.br ou edu.br</h1>

<p>Este documento descreve a análise de um código malicioso encontrado em um site. O código em questão realiza várias ações suspeitas, como manipulação de URLs, redirecionamentos e ocultação de elementos.</p>

<h2>Visão Geral do Código</h2>

<p>O código é uma combinação de JavaScript e código obfuscado que executa várias ações em um determinado alvo.</p>

<h3>Script de Rastreamento de Análise</h3>
<p>Os primeiros scripts no código são para serviços de rastreamento, como Baidu Analytics e Google Analytics, para acompanhar as interações dos usuários no site.</p>

<h3>Decodificação de Dados</h3>
<p>O código contém uma função personalizada para decodificar dados obfuscados, usando decodificação base64 com operações adicionais.</p>

<h3>Manipulação de URLs</h3>
<p>O código manipula URLs usando a função de decodificação e atribui as URLs decodificadas de volta às variáveis.</p>

<h3>Análise de Cliente e Referenciador</h3>
<p>O código verifica o domínio de referência do usuário e compara com informações na matriz customerx.</p>

<h3>Detecção de Dispositivo Móvel</h3>
<p>Uma função tenta detectar se o usuário está em um dispositivo móvel com base no agente do usuário.</p>

<h3>Redirecionamento de URL e Injeção de Iframe</h3>
<p>Com base na análise anterior, o código redireciona o usuário para diferentes URLs ou injeta um iframe.</p>

<h3>Manipulação do DOM e Ocultação</h3>
<p>O código tenta manipular o DOM e ocultar elementos na página.</p>

<h3>Comportamento Malicioso ou Suspeito</h3>
<p>A obfuscação do código e suas ações suspeitas indicam comportamento malicioso.</p>

<h2>Detalhes Adicionais</h2>

<p>O código inclui uma requisição feita pelo Burp Suite, retornando um código 200 para um título "404".</p>
<p>Um link no código aponta para um script em um domínio suspeito.</p>

<h2>Exemplos de Código</h2>

<h3>Integração de Rastreamento e Análise</h3>
<pre>
<code>
<h1> BUSCA NO BURP SUITE DE ALGUNS ALVOS</h1>

Claramente, consegui acha algumas formas que esses 167 sites governamentais e educacional sofreram esse ataque, porem não vou divulgar nesse documento, não vai ser apresentado as tecnicas. 

Aqui esta a requesição que fiz pelo burp suite

![Alt text](image/image.png)

Obeserve o titulo *404*, porem a solicitação retorno 200, dentro do corpo da resposta tem cereja do bolo que é script 

link acesso o codigo https://js.eventbr.xyz/vip/crazy.js

vamos tentar obeter algumas informação para entender melhor
alguns exemplos para onde estamos sendo direcionados. 

url_pc_jpx="YUhSMGNITTZMeTkzZDNjdWQycGlaWFF1WTJ4MVlpOXBibVJsZUQ5aFptWnBiR2xoZEdWRGIyUmxQWFpwY0RnNE9BPT0=";

Observe pela imagem que ele foi criptografado em base64, 2 vez para tentar ofuscar. 

![!\[urls base64\](image-1.png)](image/image-1.png)

</code>
</pre>

<h3>Manipulação de URLs e Redirecionamento</h3>
<pre>
<code>
url_pc_jpx = "https://www.wjbet.club/index?affiliateCode=vip888";
url_m_jpx = "https://www.wjbet.club/index?affiliateCode=vip888";
url_pc_jpx = mydecx(mydecx(url_pc_jpx));
url_m_jpx = mydecx(mydecx(url_m_jpx));

url_pc_frmex = "https://www.wjbet.club/index?affiliateCode=vip888";
url_m_frmex = "https://www.wjbet.club/index?affiliateCode=vip888";
url_pc_frmex = mydecx(mydecx(url_pc_frmex));
url_m_frmex = mydecx(mydecx(url_m_frmex));
</code>
</pre>

<h3>Screenshot</h3>

![Pequisa no google](image/pesquisa.png)

<p>Observe o endereço de ip</p>

![Alt text](image/requestIp.jpg)


<h2>Conclusão</h2>

<p>O código analisado exibe características típicas de comportamento malicioso, como obfuscação e manipulação de URLs. A análise detalhada fornece insights sobre as ações executadas pelo código.
Para quem quiser colaborar com a pesquisa esta aberto para todos.
Tive que ocultar muitas informação, não sou bom em documentação mais utilizei forma mais simples de tentar explicar para todos. </p>

</body>

</html>

## Authors  
- [@jacksonzacarias](https://www.github.com/jacksonzacarias)  
