import PropTypes from 'prop-types'

const Curso = ({title,image,price}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {title}
            </h3>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="/#">$ {price}USD</a>
            </div>
        </div>
    </article>
)

Curso.propsTypes = {
    title : PropTypes.string,
    image : PropTypes.string,
    price : PropTypes.number
}

Curso.defaultProps = {
    title : "sin título",
    image : "https://www.jesusbedmar.es/wp-content/uploads/sin-imagen.jpg",
    price : 0
}

export default Curso;