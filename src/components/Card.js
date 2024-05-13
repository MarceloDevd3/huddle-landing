import React from "react"

export default function Card(props) {
   return (
    <article className={props.CardClass}>
     <div className="responsive-img">
       <img src={props.CardImg} alt="illustratrion-img"></img>
     </div>
     <section className="Card-info">
       <h2>{props.titleCard}</h2>
       <p>{props.TextCard}</p>
     </section>
   </article>
   )
}