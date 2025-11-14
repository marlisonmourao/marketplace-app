## Visão Geral
- Atualizar a configuração do Biome para alinhar com a versão do CLI e ajustar regras que geram falsos positivos no projeto (Tailwind).
- Corrigir tipos e padrões de código nos arquivos afetados para atender às regras de linter sem alterar comportamento.
- Validar executando `yarn check:fix` e garantir zero diagnósticos pendentes.

## Ajustes de Configuração
- `biome.jsonc:2` → Atualizar `$schema` para `https://biomejs.dev/schemas/2.2.6/schema.json` (mensagem do CLI indica divergência de schema).
- `biome.jsonc` → Desativar `linter.rules.suspicious.noUnknownAtRules` para evitar alertas em diretivas Tailwind no CSS.

## Correções por Arquivo
- `src/app/index.tsx:4` → Corrigir `lint/suspicious/noEvolvingTypes` tipando explicitamente:
  - Definir `userData` com tipo explícito (ex.: `const userData: null = null`). Mantém lógica e elimina evolução implícita de tipo.
- `src/shared/api/market-place.ts:6,7` → Resolver `useReadonlyClassProperties` e `noUnusedPrivateClassMembers`:
  - Tornar `instance` readonly: `private readonly instance: AxiosInstance`.
  - Remover `isRefreshing` (não usado).
- `src/shared/components/button/button.variants.ts:3-6,45` → Resolver `lint/style/noEnum`:
  - Substituir enum por união de string: `type ButtonVariant = 'field' | 'outline'`.
  - Atualizar `defaultVariants.variant` para `'field'`.
- `src/shared/components/input/index.tsx:20` → Resolver `noConfusingVoidType`:
  - Alterar `mask?: (value: string) => string | void` para `string | undefined`.
- `src/shared/components/input/use-input-view-model.ts:11` → Resolver `noConfusingVoidType`:
  - Alterar `mask?: (value: string) => string | void` para `string | undefined`.
- `src/shared/components/input/use-input-view-model.ts:50-52` → Resolver `useBlockStatements`:
  - Envolver retornos em blocos: `if (isError) { return colors.danger }` etc.
- `src/shared/queries/auth/use-login.mutation.ts:15` e `src/shared/queries/auth/use-register.mutation.ts:9,12` → Resolver `noConsole`:
  - Remover `console.log(...)` em `onError`/`onSuccess`.
- `src/styles/global.css:1-3` → Resolver `noUnknownAtRules`:
  - Manter diretivas Tailwind e confiar na regra desativada em `biome.jsonc` (evita quebrar estilos).
- `src/view-models/register/use-register-view-model.tsx:27` → Resolver `noUnusedVariables`:
  - Construir `userData` explicitamente sem `confirmPassword`:
    - `const { name, email, phone, password } = formData; const userData = { name, email, phone, password };`

## Validação
- Rodar `yarn check:fix` e confirmar que:
  - Não há mais erros de schema do Biome.
  - Erros `noEnum`, `noConfusingVoidType`, `useBlockStatements`, `noConsole`, `noUnusedVariables` e `useReadonlyClassProperties` foram sanados.
- Se surgirem diagnósticos adicionais, aplicar correções localizadas e, se necessário, revisar regras no `biome.jsonc` para alinhar com práticas do projeto.

## Notas
- Todas as alterações são mínimas e não mudam a lógica de negócio.
- Preferimos ajuste de configuração para Tailwind em vez de remover diretivas CSS.
- Não serão adicionados comentários no código além do necessário para suprimir regras (não previsto neste plano).