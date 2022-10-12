
<div align='center'>

<img src="images/app.png" >

</div>

<br>

<p align="center">
    <a href="https://github.com/sponsors/melchisedech333"><img src="https://img.shields.io/badge/patrocinar-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white" ></a>
    <br><br>
    <img src="https://badgen.net/badge/nível de amor/8 de 10/purple" >
    <img src="https://img.shields.io/github/languages/count/melchisedech333/log-viewer?color=%23f34b7d&label=linguagens" >
    <img src="https://img.shields.io/github/languages/top/melchisedech333/log-viewer?color=%23f34b7d" >
    <img src="https://img.shields.io/github/directory-file-count/melchisedech333/log-viewer?label=arquivos" >
    <img src="https://img.shields.io/github/repo-size/melchisedech333/log-viewer?label=tamanho repo" >
    <img src="https://img.shields.io/github/license/melchisedech333/log-viewer?label=licen%C3%A7a" >
</p>

Language: <a href="readme.md">EN-US</a>

Quando você está implementando coisas como Linux Daemons, ou qualquer aplicação onde você não possua acesso ao IO padrão, é interessante ter uma aplicação para receber mensagens do seu programa.

É exatamente isto que esta aplicação faz, ela se conecta em um servidor TCP na porta <b>1337</b> (você pode editar a porta e o endereço IP de destino no arquivo <b>example/debug.h</b>).

Para não travar a aplicação ao realizar o envio das mensagens, é utilizado técnicas de Non-Blocking Socket.

**Se meu código te ajudou em algo, considere [ser um patrocinador](https://github.com/sponsors/melchisedech333) :blue_heart:** 

<br>

:computer: Exemplo de uso
---

Basta adicionar o header <b>debug.h</b> em sua aplicação, e utilizar como demonstra o código abaixo.

<br>

```c
#include "debug.h"

int main (int argc, char *argv[])
{
    /**
     * Detailed message example.
     */
    say_debug_detail("Iesus Hominum Salvator!");

    /**
     * Example of common usage.
     */
    
    for (int a=0; a<10; a++) {
        say_debug("Message %d: Iesus Hominum Salvator!", a);
        sleep(1);
    }

    return 0;
}
```

Para utilizar a aplicação de visualização das mensagens (como mostra na imagem acima), basta abrir-la utilizando o Electron. Lembrando que a versão do Electron utilizada é a 19.0.0, e você pode encontrá-la aqui: https://github.com/electron/electron/releases/tag/v19.0.0

Tudo que você precisa fazer é executar o Electron, passando como parâmetro para ele o diretório da aplicação.

```bash
electron .
```

<br>

:smiley: Autor
---

Patrocinar: [melchisedech333](https://github.com/sponsors/melchisedech333)<br>
YouTube: [Melchisedech](https://www.youtube.com/channel/UC4Sh4wxncr5arnydpUfWPKw)<br>
Twitter: [Melchisedech333](https://twitter.com/Melchisedech333)<br>
Blog: [melchisedech333.github.io](https://melchisedech333.github.io/)<br>
LinkedIn: [Melchisedech Rex](https://www.linkedin.com/in/melchisedech-rex-724152235/)

<img src="https://github.com/melchisedech333.png?size=200" height="100" />

<br>

:scroll: Licença
---

[ BSD-3-Clause license](./license)

<br><br>

<div align="center">

## Lembre-se de deixar <br> uma linda estrelinha :star_struck:

</div>


