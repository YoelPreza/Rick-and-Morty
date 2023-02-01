import style from "./About.module.css"
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src: require('../images/YO4.jpg'),
    altText: 'Great Experiences',
    caption: 'Great Experiences',
    caption2:"Aeromexico"
  },
  {
    src: require('../images/YO5.jpg'),
    altText: 'Enjoy the life',
    caption: 'Enjoy the life',
    caption2:"CDMX"
  },
  {
    src: require('../images/YO3.jpg'),
    altText: 'Travel all you can',
    caption: 'Travel all you can',
    caption2:"Tulum"
  }
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="450px" height="450px"/>
          <CarouselCaption captionText={item.caption2} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
        <div className={style.display}>
           
           <div className={style.about}>
               <h1>Yoel Preza</h1>
               <h2 className={style.FullStack}>FullStack Web Developer</h2>

               <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>


               <div className={style.Me}>
                   <p> I'm a curious people who loves to learn and teach.
                       Be a FullStack Developer is a new opportunity to show
                       to the world my own projects and the talent I have.

                       At the beginning, being a programmer was a huge challenge,
                       Some days I hated the code, other days I hated me,
                       but now I love it, I love the way I can see the result 
                       in projects.

                       This project is a sing of the love I have for programming.
                    </p>
               </div>

<div  className={style.DisplayHS}> 
               <div className={style.Hobbies}>
                   <h2>Hobbies</h2>
                   <ul>
                       <li>Dance</li>
                       <li>Travel</li>
                       <li>Workout</li>
                       <li>Watch Series</li>
                       <li>Meet new friends</li>
                   </ul>
               </div>


               <div className={style.Skills}>
                   <h2>Skills</h2>
                   <ul>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li>NodeJS</li>
                       <li>React </li>
                       <li>React Native</li>
                       <li>Redux</li>
                       <li>Express</li>
                       <li>Sequelize</li>
                       <li>Y otros frameworks basados en JavaScript.</li>
                   </ul>
               </div>

               </div>

        
      
        </div>
          </div>
      
    );
  }
}

export default About;




// export function About() {
//     return (

//         <div className={style.display}>
           
//             <div className={style.about}>
//                 <h1>Yoel Preza</h1>
//                 <h2>Full Stack Web Developer</h2>
//                 <div>
//                     <p> I'm a curious people who loves to learn and teach.
//                         Be a FullStack Developer is a new opportunity to show
//                         to the world my own projects and the talent I have.

//                         At the beginning, being a programmer was a huge challenge,
//                         Some days I hated the code, other days I hated me,
//                         but now I love it, I love the way I can see the result 
//                         in projects.

//                         This project is a sing of the love I have for programming.

//                         {/* Soy una perosna muy curiosa que le encanta aprender,
//                     y cuando vi que tenia oportunidad de entrar al mundo
//                     de programcion Web me llamo mucho la atención,
//                     el poder desarrollar proyectos propios me motivo mucho
//                     y el conocer herramientas que son por mucho diferentes a
//                     las que siempre habia estado acostumbrado, me lleno de emocion,
//                     porque sin duda seria un reto muy grande*/}    </p>
//                 </div>


//                 <div>
//                     <h2>Hobbies</h2>
//                     <ul>
//                         <li>Dance</li>
//                         <li>Travel</li>
//                         <li>Workout</li>
//                         <li>Watch Series</li>
//                         <li>Meet new friends</li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h2>Skils</h2>
//                     <ul>
//                         <li>HTML</li>
//                         <li>CSS</li>
//                         <li>NodeJS</li>
//                         <li>React </li>
//                         <li>React Native</li>
//                         <li>Redux</li>
//                         <li>Express</li>
//                         <li>Sequelize</li>
//                         <li>Y otros frameworks basados en JavaScript.</li>


//                     </ul>
//                 </div>



//             </div>
//         </div>
//     )
// }
