# IA Assistant

1 - Install Ollama

IA open source platform to run Large Language Models (LLMs) locally.
[https://ollama.com/](https://ollama.com/)
- validate installation with `ollama version`
- download a models with `ollama pull \<model_name\>` (e.g. `ollama pull llama2`)
- [qwen2.5-coder](https://ollama.com/library/qwen2.5-coder:7b)
- [nomic-embed-text](https://ollama.com/library/nomic-embed-text:v1.5)
- [llama3.1](https://ollama.com/library/llama3.1:8b)
- or latest version of the model you want to use

shoild be able to run `ollama list` to see the models you have downloaded
 ollama list
NAME                     ID              SIZE      MODIFIED
nomic-embed-text:v1.5    0a109f422b47    274 MB    6 seconds ago
qwen2.5-coder:7b         dae161e27b0e    4.7 GB    2 minutes ago
llama3:latest            365c0bd3c000    4.7 GB    48 minutes ago

2 - Install Visual Studio Code extension
[Continue.continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue)
- restart VS Code
- open extension menu
- go to local options
- select Ollama as provider
- select your models

check your settings

Continue uses a config file at:

Linux/macOS: ~/.continue/config.json

Windows: %USERPROFILE%\.continue\config.json

```json

{
  "models": [
    {
      "title": "LLaMA 3 (Local)",
      "model": "llama3",
      "provider": "ollama"
    }
  ]
}
```

```yml
name: Local Agent
version: 1.0.0
schema: v1
models:
  - name: mistral:7b-instruct-q4_K_M
    provider: mistral:7b-instruct-q4_K_M
    model: llama3.1:8b
    roles:
      - chat
      - edit
      - apply
  - name: Qwen2.5-Coder 1.5B
    provider: ollama
    model: qwen2.5-coder:1.5b-base
    roles:
      - autocomplete
  - name: Nomic Embed
    provider: ollama
    model: nomic-embed-text:latest
    roles:
      - embed
```


"model requires more system memory (10.8 GiB) than is available (8.2 GiB)"
