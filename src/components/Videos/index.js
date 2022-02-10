import React from 'react';
import { makeStyles } from '@material-ui/core/';
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      marginTop: '3px',
      backgroundColor: 'white',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderWidth: '.1px',
      textAlign: 'center',
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      marginTop: '10px',
    },

  }));

const Videos = () => {
    
    const classes = useStyles();

    return(
        <>
        <div className={classes.root}  >
            <ReactPlayer  
                style={{display: 'block', margin: '0 auto'}}
                width='480px'
                height='240px'
                controls 
                url='https://www.youtube.com/watch?v=8_T7ti1T_F0' />
            <p>A Seleção Brasileira de Futebol participou pela nona vez da Copa do Mundo FIFA. 
              A então bicampeã mundial se classificara em primeiro lugar em seu grupo nas eliminatórias para a 
              Copa do Mundo. Foi sorteado no grupo 3, onde enfrentou a Inglaterra, a Romênia e a Tchecoslováquia, 
              classificando-se em primeiro lugar. Nas quartas-de-final, venceu o Peru, bateu o Uruguai nas semifinais 
              e conquistou o título vencendo a Itália na final. A equipe brasileira desta copa contava com jogadores de 
              grande prestígio nacional e internacional, como Pelé, Tostão, Rivellino, Gérson, Jairzinho, entre outros, 
              sendo eleita pela revista World Soccer a melhor equipe de futebol de todos os tempos.</p>    
        </div>
        <div className={classes.root} >
        <ReactPlayer  
            style={{display: 'block', margin: '0 auto'}}
            width='480px'
            height='240px'
            controls 
            url='https://www.youtube.com/watch?v=X3Zs-HZczUM' />
            <p>A Liga dos Campeões da UEFA (em inglês: UEFA Champions League) é uma competição anual de clubes de futebol
               a nível continental, organizada pela União das Associações Europeias de Futebol (UEFA) e disputada por 
               clubes europeus. É um dos torneios mais prestigiados do mundo e a competição de clubes mais prestigiada 
               no futebol europeu, disputada pelas equipas mais bem classificadas nos respectivos campeonato nacionais 
               na época anterior, sendo o número de vagas atribuídos consoante o ranking da UEFA. A final da Liga dos 
               Campeões da UEFA é o evento esportivo anual mais visto em todo o mundo.</p>
        </div>
        <div className={classes.root} >
        <ReactPlayer  
            style={{display: 'block', margin: '0 auto'}}
            width='480px'
            height='240px'
            controls 
            url='https://www.youtube.com/watch?v=Sx86-18V3m8' />    
            <p>O Clube de Regatas do Flamengo (mais conhecido simplesmente como Flamengo, e popularmente pelos apelidos
               de Mengo, Mengão e Fla) é uma agremiação poliesportiva brasileira com sede na cidade do Rio de Janeiro, 
               capital do estado de mesmo nome. Fundado no bairro do Flamengo[nota 1] para disputas do esporte remo em 
               17 de novembro de 1895, tornou-se um dos clubes mais bem-sucedidos e populares do esporte 
               brasileiro, especialmente pelo futebol. Tem como suas cores tradicionais o vermelho e o preto e como seus 
               maiores rivais esportivos o Vasco da Gama, o Fluminense e o Botafogo. </p>
        </div>
        </>
    )
}

export default Videos;