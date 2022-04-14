const itemDetail =({id, name, img, color, description, price}) => {
    return(
        <article>
            <header>
                <h2>{name}</h2>   
            </header> 
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>{color}</p>
                <p>{description}</p>
                <p>{price}</p>
            </section>
        </article>
    )
}
export default itemDetail