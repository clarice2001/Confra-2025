Instruções rápidas para publicação no GitHub Pages:

1) Crie um novo repositório no GitHub (ex.: 'sorteio-ceia').
2) Faça upload dos arquivos deste pacote (index.html, admin.html, README.txt).
3) No repositório, ative GitHub Pages (Settings -> Pages) e escolha branch 'main' (ou 'gh-pages') e / (root).
4) Após alguns minutos, sua página estará disponível em https://<seunome>.github.io/<reponame>/

Uso:
- Envie o link para index.html (ex.: https://<seunome>.github.io/<reponame>/index.html) para os participantes.
- Dê aos participantes a senha de acesso ao sorteio: 2025FamOliveira
- Quando cada participante sortear, ele deve copiar o texto criptografado (blob) e enviar para você (organizadora).
- Você abre admin.html e cola todos os blobs (um por linha), insere a senha mestra: Oliveira2025
- Clique em 'Descriptografar' para ver quem pegou qual item e os itens restantes.

Segurança/observações:
- Os blobs são criptografados com AES-GCM usando a senha mestra. Mesmo que alguém veja os blobs, não conseguirá ler sem a senha mestra.
- Como o site será hospedado estaticamente, não há banco de dados; o envio dos blobs fica a cargo dos participantes (por e-mail/WhatsApp).
- Se quiser que os participantes enviem automaticamente para um lugar central, será necessário configurar um backend (ex.: GitHub API com token, Firebase, ...)

Se quiser, eu posso gerar também um arquivo .zip pronto para upload (já incluído neste pacote).
