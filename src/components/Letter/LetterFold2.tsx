import { useMemo } from "react"


type LetterFold2Props = {
    title: string,
    surname: string,
    gender: 'M' | 'F'
}

export default function LetterFold2({title, surname, gender}: LetterFold2Props) {

    const greetings = useMemo(() => {
      return gender === 'F'? 'Prezada': 'Prezado';
    }, [gender]);

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
        <div className="content front__content">
          <p className="content__greeting">{`${greetings} ${title} ${surname},` }</p>
          <section className="content__body">
            <p className="content__paragraph">
              Temos o prazer de informar que V. Sa. tem uma vaga na Escola de Magia e
              Bruxaria de Hogwarts. Estamos anexando uma lista dos livros e equipamentos
              necessários.
            </p>
            <p className="content__paragraph">
              O ano letivo se inicia em 1 de setembro. Aguardamos sua coruja até 31 de
              julho, no mais tardar.
            </p>
          </section>
        </div>
        <div className="content back__content back__content__body page2-content">
          <h3 className="back__section__heading">LIVROS</h3>
          <p>Os alunos devem comprar um exemplar de cada um dos seguintes:</p>
          <ul className="back__body__list">
            <li>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization('Livro padrão de feitiços (série 1) por Miranda Goshawk')
              }}/>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization('História da Magia por Bathilda Bagshot')
              }}/>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization('Teoria da magia por Adalbert Waffling')
              }} />
            </li>
            <li>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization('Guia de transfiguração para iniciantes por Emeric Switch')
              }}/>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization('Mil ervas e fungos mágicos por Phyllida Spore')
              }}/>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization('Bebidas e poções mágicas por Arsenius Jigger')
              }}/>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization('Animais fantásticos e onde habitam por Newt Scamander')
              }}/>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{
                __html: applyItalicization('As forças das trevas: Um guia de autoproteção por Quentin Trimble')
              }}/>
            </li>
          </ul>
        </div>
      </div>
    )
}