import React from 'react';

//Incluir os arquivos que possuem os componentes
import Videos from '../components/Videos';
import Side from '../components/Side';

//Criar a classe e incluir os componentes Headers, Article, Footer
class Adicionais extends React.Component{
  render(){
    return (
        <>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <Side />
              </div>
              <div className="col-9">
                <Videos/>
              </div>
            </div>
          </div>      
        </>
    );
  }
}

//Exportar o componente sendo a página inicial
export default Adicionais;
