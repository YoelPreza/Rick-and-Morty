import Card from './Card';


export default function Cards(props) {
   const { characters } = props;
   console.log(characters)
   return (

      <div>
         {characters.map((character, index) =>
            <Card
               key={index}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               id={character.id}
               onClose={props.onClose}
            />)}


      </div>);
}
