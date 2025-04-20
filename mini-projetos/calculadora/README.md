# 🧮 Calculadora Web Interativa

Este é um projeto de **calculadora aritmética** desenvolvido com **JavaScript**, **HTML** e **CSS**, que simula o funcionamento de uma calculadora física básica com suporte a operações matemáticas simples e funcionalidades adicionais, como CE, C, apagar dígito, inversão de sinal e suporte a números decimais.

![Calculadora em funcionamento](assets/calculadora.png)

## 🔧 Funcionalidades

- Operações básicas: adição (`+`), subtração (`-`), multiplicação (`*`) e divisão (`/`)
- CE: limpa o segundo operador digitado
- C: limpa toda a operação
- A: apaga o último dígito inserido
- ±: inverte o sinal do número
- Vírgula (`,`): adiciona separador decimal (suporte à notação brasileira)
- Tratamento de resultados inválidos (ex: divisão por zero)
- Formatação de números decimais com `,` para melhor visualização

## 📦 Tecnologias utilizadas

- HTML
- CSS
- JavaScript Puro (Vanilla JS)

## ▶️ Demonstração

📹 *[Adicione aqui o link do vídeo demonstrativo]*  
<!-- Exemplo:
[![Vídeo de Demonstração](https://img.youtube.com/vi/SEU_VIDEO_ID/mqdefault.jpg)](https://youtu.be/SEU_VIDEO_ID)
-->

## 🧠 Estrutura do Código

- `clicou_botao()`: função principal de controle dos botões
- `faz_operacao_aritmetica()`: executa as operações matemáticas
- `trata_resultado()`: formata e exibe o resultado na tela
- `trata_decimal()`: converte entre `,` e `.`
- Funções auxiliares:
  - `faz_operacao_ce()`, `faz_operacao_c()`, `faz_operacao_a()`
  - `faz_operacao_inverter_sinal()`
  - `faz_operacao_adicionar_virgula()`

## 💡 Observações

- A calculadora suporta operações encadeadas de dois em dois operandos.
- O visor é limpo automaticamente após a exibição de um resultado, para facilitar novas operações.
- A lógica também trata inserções indevidas e garante consistência visual e funcional.

## 🖼️ Interface

A interface simula uma calculadora comum com visor e botões numéricos e funcionais.  
O visor é atualizado conforme as interações com os botões.

## 🚀 Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
