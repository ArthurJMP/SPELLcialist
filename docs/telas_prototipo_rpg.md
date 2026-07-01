# Documentação de Telas — Protótipo de Design RPG

Este documento descreve todas as telas necessárias para criar um protótipo de design de um aplicativo/experiência de RPG. Cada tela contém: objetivo, prioridades, componentes principais, layout, estados/variações, fluxo principal, dados necessários e notas de design.

---

**1. Tela Inicial / Dashboard**
- Objetivo: Entrada principal; mostra resumo do jogador e atalhos para recursos (Grimório, Catálogo, Personagem, Partida).
- Prioridade: Alta
- Componentes: Cabeçalho (nome do jogador, avatar), cartões de ação rápida, barra de navegação inferior ou lateral, notificações.
- Layout: Topo com perfil; grid de cards centrais; rodapé com navegação persistente.
- Estados: vazio (novo usuário), com dados (usuário ativo), carregamento, erro.
- Fluxos: navegar para Grimório, abrir Catálogo, iniciar lançamento de feitiço/modal rápido.
- Dados: nome do jogador, nível, recursos (mana), contadores de tempo/quests.
- Notas: confirmar chamadas rápidas a ações primárias; foco em clareza e hierarquia.

**2. Catálogo de Feitiços (Lista)**
- Objetivo: Navegar e descobrir feitiços disponíveis por nível/categoria.
- Prioridade: Alta
- Componentes: barra de pesquisa, filtros (nível, escola, custo), lista de `SpellCard`, paginação/scroll infinito.
- Layout: Filtro lateral (ou topo em mobile), lista em grid ou lista vertical responsiva.
- Estados: sem resultados, resultados, filtrando, carregando.
- Fluxos: aplicar filtro → ver cartão → abrir detalhe/modal → adicionar ao Grimório.
- Dados: nome do feitiço, nível, escola, ícone, descrição curta, custo.
- Notas: permitir comparação rápida de feitiços e salvar favoritos.

**3. Grimório (Minha Coleção)**
- Objetivo: Gerenciar feitiços que o jogador possui/usa frequentemente.
- Prioridade: Alta
- Componentes: lista de `SpellCard`, seções por nível, ordenar, busca local, ações em lote (remover, reagrupar), botão de editar.
- Layout: lista por abas/expansível por nível; detalhes rápidos ao tocar.
- Estados: vazio, com feitiços, edição, sincronizando.
- Fluxos: abrir feitiço → editar posição/atalho → usar/lançar → abrir `CastModal`.
- Dados: lista de feitiços do jogador, tags, atalhos.
- Notas: foco em usabilidade para rearranjo (drag & drop).

**4. Cartão de Feitiço (`SpellCard`) — componente reutilizável**
- Objetivo: Apresentar resumo do feitiço em listas e grades.
- Componentes: ícone, nome, nível, custo, botão "Detalhes" ou "Lançar".
- Estados: normal, ativo/selecionado, desabilitado (sem recursos), hover.
- Interações: toque abre detalhe; ação rápida "lançar" abre `CastModal`.
- Notas: manter informação compacta; priorizar ação primária.

**5. Filtros de Feitiços (`SpellFilters`) — componente**
- Objetivo: Permitir refinamento de catálogo (escola, nível, alcance, tipo).
- Componentes: seletores (dropdown), sliders (custo), chips de seleção, botão "Aplicar/Reset".
- Estados: aberto/fechado, com seleções, sem resultado.
- Notas: preservar estado entre visitas; buscar ajustes com debounce na busca.

**6. Detalhes do Feitiço (Página/Modal)**
- Objetivo: Informar propriedades completas do feitiço e ações (adicionar ao Grimório, favoritar, lançar).
- Prioridade: Alta
- Componentes: título, ícone grande, descrição completa, componentes de mecânica (efeitos, duração, alcance), exemplos, requisitos, botão "Lançar".
- Layout: modal central em desktop; full screen em mobile.
- Estados: leitura, edição (se usuário tem permissão), carregamento.
- Fluxos: abrir → revisar → adicionar/usar → confirmar custo/efeitos.
- Dados: texto longo, variantes, custo, efeitos, animações sugeridas.
- Notas: incluir microcopy explicando termos técnicos.

**7. Modal de Lançamento (`CastModal`)**
- Objetivo: Confirmar e executar o lançamento de um feitiço; mostrar custos e resultados previstos.
- Prioridade: Alta
- Componentes: resumo do feitiço, alvo(s) selecionáveis, sliders/opções (nivel de potência), pré-visualização de custo/efeito, botão confirmar/cancelar.
- Estados: confirmação, executando, resultado (sucesso/fracasso), erro.
- Fluxos: selecionar alvo → ajustar parâmetros → confirmar → animação/feedback.
- Dados: alvo (alvo único/múltiplo), custo atual, chance de sucesso, efeitos.
- Notas: feedback imediato e animação curta; bloquear enquanto executa.

**8. Criar / Editar Feitiço**
- Objetivo: Permitir criação ou edição de feitiços (para designers/GM ou usuários avançados).
- Prioridade: Média
- Componentes: formulário (nome, nível, escola), editor de texto rico, campos de parâmetros (dano, duração), tags, salvar/preview.
- Estados: rascunho, validando, salvo, erro de validação.
- Fluxos: preencher campos → validar → salvar → visualizar.
- Dados: campos do feitiço, histórico de versões.
- Notas: incluir validações e previews de efeitos.

**9. Ficha de Personagem (Character Sheet)**
- Objetivo: Mostrar atributos do personagem, recursos, equipamentos e habilidades.
- Prioridade: Alta
- Componentes: avatar, atributos (força, agilidade, etc.), pontos de vida/mana, lista de feitiços, inventário, ações rápidas.
- Layout: painel dividido esquerdo (atributos), direito (inventário/feitiços).
- Estados: normal, em combate (restrições), edição.
- Fluxos: equipar item → ajustar atributos → usar habilidade → abrir Grimório.
- Dados: valores numéricos, itens, buffs ativos.
- Notas: permitir exportar/compartilhar ficha.

**10. Inventário**
- Objetivo: Gerenciar itens, consumíveis e equipamentos.
- Prioridade: Média
- Componentes: grid/lista de itens, filtros, ações (equipar, descartar, usar), detalhes do item.
- Estados: cheio/vazio, filtro aplicado.
- Fluxos: selecionar item → ações contextuais → atualizar ficha.
- Notas: destacar itens ligados ao uso de feitiços (componentes de mana).

**11. Mapa / Mundo**
- Objetivo: Navegação geográfica, pontos de interesse, encontros e eventos.
- Prioridade: Média
- Componentes: mapa interativo, pins/markers, minimap, controles de zoom, lista de locais.
- Estados: explorando, encontro ativo, viagem rápida.
- Fluxos: tocar marcador → abrir local → iniciar encontro/quest.
- Notas: considerar camadas (regional vs local) e performance de renderização.

**12. Encontro / Batalha (UI de combate)**
- Objetivo: Interface de resolução de encontros (turn-based ou tempo real simplificado).
- Prioridade: Alta (se protótipo incluir sistema de combate)
- Componentes: painel de turnos, ações por personagem, indicadores de status, log de eventos, botões de ação, confirmação de alvo.
- Estados: preparação, em combate, vitória/derrota, pausa.
- Fluxos: início do combate → selecionar ação → resolver → atualizar HP/status.
- Notas: foco em clareza de feedback e prioridade de ações.

**13. Configurações / Preferências**
- Objetivo: Ajustes do usuário (som, notificações, idioma, contas, acessibilidade).
- Prioridade: Média
- Componentes: toggles, selects, salvar, resetar, gerenciamento de conta.
- Notas: incluir controle de tamanho de fonte e contraste.

**14. Onboarding / Tutorial**
- Objetivo: Introduzir mecânicas principais e guiar primeiros passos.
- Prioridade: Alta
- Componentes: tour guiado, dicas contextuais, checklists de tarefas iniciais.
- Fluxos: primeiro acesso → completar tutorial → recompensa inicial.
- Notas: permitir pular; salvar progresso do tutorial.

**15. Notificações / Feed de Atividades**
- Objetivo: Historico de eventos, conquistas, convites e mensagens.
- Prioridade: Baixa/Média
- Componentes: lista cronológica, filtros por tipo, ações rápidas.
- Notas: garantir persistência e leitura fácil.

---

**Guidelines de Design Comuns**
- Hierarquia: priorizar ações primárias (lançar, adicionar ao Grimório).
- Consistência: `SpellCard` e `SpellFilters` reutilizáveis em várias telas.
- Responsividade: layouts adaptados para mobile (modal → full screen) e desktop (sidebar persistente).
- Acessibilidade: textos legíveis (contraste), atalhos de teclado, labels em campos de formulário.
- Microinterações: feedback rápido em ações críticas (lançar, salvar, deletar).
- Dados e performance: carregar listas com lazy-loading e debounce em buscas.

---

Se quiser, posso:
- Gerar wireframes simples (estáticos) para cada tela;
- Exportar frames iniciais para um arquivo compatível com Figma (JSON/Esboço básico);
- Ajustar o documento para refletir apenas as telas que o seu app realmente usa (`src/app` e `src/components`).

Arquivo gerado: [docs/telas_prototipo_rpg.md](docs/telas_prototipo_rpg.md)
