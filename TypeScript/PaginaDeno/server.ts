import { serveDir } from "https://deno.land/std@0.207.0/http/file_server.ts";

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: "public",   // ← Serve a pasta correta
    urlRoot: "",
    showDirListing: true,
  });
}); // O ponto e vírgula no final é opcional, mas é uma boa prática para evitar erros em alguns casos.

// deno run --allow-net server.ts
// O comando acima é usado para executar o arquivo server.ts com permissões de rede. O Deno exige permissões explícitas para acessar recursos do sistema, como rede, arquivos e ambiente. A flag --allow-net permite que o script acesse a rede, o que é necessário para criar um servidor HTTP. Sem essa permissão, o Deno não permitirá que o script escute solicitações de rede.