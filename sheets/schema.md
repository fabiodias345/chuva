# Schema das Planilhas

## usuarios

```text
id
nome
email
tipo
ativo
created_at
updated_at
```

## predios

```text
id
codigo
nome
localizacao
setor_responsavel
ativo
```

## chamados

```text
id
numero
predio_id
descricao
prioridade
status
executante
data_abertura
data_fechamento
created_at
updated_at
```

## historico_chamado

```text
id
chamado_id
usuario_id
acao
observacao
created_at
```

## fotos_chamado

```text
id
chamado_id
drive_file_id
tipo
sincronizado_em
created_at
```

## sync_logs

```text
id
origem
acao
status
mensagem
created_at
```

