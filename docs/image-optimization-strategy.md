# Estratégia de Imagens Modernas

## Objetivo

Preparar o projeto para servir imagens com `picture` + `source` em formatos modernos (`AVIF` e `WebP`) sem quebrar o fallback atual em PNG/JPG.

## Estrutura criada

- Manifesto central de imagens: `src/data/images.ts`
- Componente reutilizável: `src/components/common/ResponsiveImage.tsx`
- Script de geração: `scripts/generate-modern-images.mjs`

## Fluxo esperado

1. Manter a imagem original em `public/`.
2. Gerar versões `.webp` e `.avif` com:

```bash
npm run images:modern
```

3. O script cria os arquivos em `public/optimized/`.
4. Os componentes usam `ResponsiveImage` com fallback garantido no arquivo original.

## Convenção de saída

- `public/home.png` -> `public/optimized/home.webp`
- `public/home.png` -> `public/optimized/home.avif`

## Observação

O código já está preparado para `picture/source`, mas os formatos modernos só passam a ser servidos depois da geração dos assets.
