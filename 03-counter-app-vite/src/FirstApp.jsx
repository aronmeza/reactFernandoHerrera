
const persona1 = {
  message: 'Hola',
  title: 'soy un Subtitulo',
};

const getSaludo = (persona) =>{
  return(
    <>
      <h1>{persona.message}</h1>
      <p>Soy {persona.title}</p>
    </>
  );
}

// export const FirstApp = () => {
//
//   return (
//     <>
//       {/*<code> { JSON.stringify(newMessage) } </code>*/}
//       <h1>{getSaludo(persona1)}</h1>
//     </>);
// }

import PropTypes from "prop-types";
export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>);
}




FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  title : "No titulo",
  subTitle: "Soy un subtitulo",
  name: 'Fernando Herrera'
}