# @kaninchen/schematics

Este pacote fornece Angular Schematics personalizados que automatizam a criação de componentes, stories e testes seguindo os padrões arquiteturais do projeto.

A intenção não é apenas gerar arquivos.  
É preservar coerência estrutural e reduzir erosão arquitetural ao longo do tempo.

---

## Objetivo

Padronizar automaticamente:

- Componentes standalone
    
- Arquivos `.spec.ts` orientados a comportamento
    
- Arquivos `.stories.ts` para Storybook
    
- Estrutura consistente de pastas
    
- Convenções de naming
    

Arquitetura não deve depender de memória humana.

---

## Instalação

No projeto Angular:

npm install @kaninchen/schematics

Ou localmente durante desenvolvimento:

npm install ../kaninchen.schematics

---

## Uso

Gerar componente:

```bash
ng generate @kaninchen/schematics:component user-card
```

Ou forma abreviada:

```bash
ng g @kaninchen/schematics:component user-card
```

Com estilo customizado (o padrão é `scss`):

```bash
ng g @kaninchen/schematics:component user-card --style=css
```

Isso criará, por exemplo:

```
user-card.component.html
user-card.component.scss
user-card.component.ts  
user-card.spec.ts  
user-card.stories.ts
```

Seguindo os padrões do projeto e injetando todo o boilerplete necessário!

---

## Estrutura do Projeto

```
src/  
  component/  
    index.ts  
    schema.json  
    files/  
      __name@dasherize__.component.ts.template  
      __name@dasherize__.component.html.template  
      __name@dasherize__.component.__style__.template  
      __name@dasherize__.spec.ts.template  
      __name@dasherize__.stories.ts.template  
  
collection.json  
tsconfig.json  
package.json
```

### Responsabilidades

- `index.ts` → lógica do generator
    
- `schema.json` → define opções do CLI
    
- `files/` → templates dos arquivos gerados
    
- `collection.json` → registra os schematics disponíveis
    

---

## Como Funciona

1. O Angular CLI lê `collection.json`
    
2. Executa a factory definida em `dist/`
    
3. Aplica os templates em `files/`
    
4. Substitui placeholders como:
    

```
__name__  
__name@dasherize__  
__name@classify__
```

5. Remove `.template`
    
6. Escreve os arquivos no projeto Angular
    

Todo o processo acontece em build-time.

---

## Desenvolvimento

Instalar dependências:

`npm install`

Buildar:

`npm run build`

Isso gera a pasta `dist/`, que é usada pelo Angular CLI.

Sempre rebuildar após alterar arquivos `.ts`.

---

## Convenções

- Componentes são standalone
    
- Testes usam Testing Library
    
- Stories seguem padrão Storybook 7+
    
- Nenhuma lógica de negócio é gerada no componente por padrão
    
- Templates são mínimos e extensíveis
    

---

## Filosofia

Este pacote existe para:

- Evitar inconsistência estrutural
    
- Reduzir boilerplate manual
    
- Forçar boas práticas desde o primeiro commit
    
- Transformar decisões arquiteturais em código executável
    

Schematics não são sobre conveniência.  
São sobre governança técnica.

---

## Roadmap

- Generator para Widgets (com mock de Store)
    
- Generator para Feature (NgRx + Effects)
    
- Generator para Sync Engine
    
- Schematic `init` para bootstrap completo da stack
    

---

Arquitetura sustentável não depende de boas intenções.  
Depende de automação.
