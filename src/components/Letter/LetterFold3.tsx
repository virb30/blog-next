export default function LetterFold3() {

  const applyItalicization = (text: string) => {
      // Italicizing text in parentheses
      text = text.replace(
        /\(([^)]+)\)/g,
        '<span style="font-style: italic; font-size: 0.8em; color: #0c0434;">($1)</span>'
      );
    
      // Italicizing text following 'by'
      text = text.replace(
        /por\s+([\w\s]+)/g,
        '<span style="font-style: italic; font-size: 0.8em; color: #0c0434;">por $1</span>'
      );
    
      return text;
    }


    return (
      <div className="content__container">
        <div>
          <div className="content__signOff front__content">
            <p>Atenciosamente,</p>
            <p className="content__signature">Minerva McGonagall</p>
            <p>Diretora substituta</p>
          </div>
          <div className="content__footer  front__content">
            <div className="content">
              <h2>ESCOLA DE MAGIA E BRUXARIA DE HOGWARTS</h2>
              <p className="content__footerText">
                Diretor: Alvo Dumbledore (Orde de Merlim, Primeira Classe, Grande
                Feiticeiro, Bruxo Chefe, Cacique Supremo, Confederação Internacional
                de Bruxos)
              </p>
            </div>
          </div>
          <div className="content back__content back__content__footer page2-content">
            <h3 className="back__section__heading footer__heading">
              OUTROS EQUIPAMENTOS
            </h3>
            <ul className="back__footer__list">
              <li>
                <span dangerouslySetInnerHTML={{
                  __html:applyItalicization(' 1 varinha mágica')
                }}/>
              </li>
              <li>
                <span dangerouslySetInnerHTML={{
                  __html:applyItalicization(' 1 caldeirão (estanho, tamanho padrão 2)')
                }}/>
              </li>
              <li>
                <span dangerouslySetInnerHTML={{
                  __html: applyItalicization(' 1 conjunto de frascos')
                }}/>
              </li>
              <li>
                <span dangerouslySetInnerHTML={{
                __html: applyItalicization(' 1 telescópio')
              }}/>
              </li>
              <li>
                <span dangerouslySetInnerHTML={{
                __html: applyItalicization(' 1 balança de latão')
              }}/>
              </li>
            </ul>
            <h4>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization(' Os alunos podem ainda trazer uma coruja OU um gato OU um sapo')
              }}/>
            </h4>
            <h3 className="back__footer content__footerText">
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization(' LEMBRAMOS AOS PAIS QUE OS ALUNOS DO PRIMEIRO ANO NÃO PODEM USAR VASSOURAS PESSOAIS')
              }}/>
            </h3>
          </div>
        </div>
      </div>
    )
}