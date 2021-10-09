import {Component, Fragment} from 'react';


class Form extends Component {

    /* recibo las propiedades */
    constructor(props) {
        super(props)

        /* declaro el estado inicial del componente */
        this.state = {
            title : "",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmuKon8fBArTQfhMXgD1k4WZpGbrp8Zg11UKzbDreDNX4vyKFRrbGAtEM8H04eg8hY5U&usqp=CAU",
            price : 0
        }

        /* se tiene que bindiar las funciones para que se reconozcan con this */

        this.changeTitle = this.changeTitle.bind(this)
        this.changeImage = this.changeImage.bind(this)
        this.changePrice = this.changePrice.bind(this)

    }

    /* 
    this.setState

    => el evento recibe un callback que recibe por parámetro el evento y devuelve this.setState()
    => setState recibe como parámetro un objeto con la propiedad que se quiere setear
    
    */

    changeTitle(e) {
        this.setState({
            title : e.target.value
        })
    }

    changeImage(e) {
        this.setState({
            image : e.target.value
        })
    }

    changePrice(e) {
        this.setState({
            price : e.target.value
        })
    }

    render() {
        return (
            <Fragment>
            <div>
                <h2>Agregar curso</h2>
                <form>
                    <div className="form__item" >
                        <label htmlFor="title">Titulo del curso</label>
                        <input type="text" id="title" onChange={this.changeTitle}/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="image">Imagen</label>
                        <input type="text" id="image"  onChange = {this.changeImage}/>
                    </div>
                    <div className="form__item" >
                        <label htmlFor="price">Precio</label>
                        <input
                            type="number" 
                            id="price"
                            onChange = {this.changePrice}
                        />
                    </div>
                    <div className="form__item">
                        <input 
                            className="button full" 
                            type="submit" 
                            value="Enviar"
                        />
                    </div>
                </form>
            </div>
            <div>
                <article className="card">
                    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                        {
                            <img 
                                src={this.state.image}
                                alt={this.state.title}        
                            /> 
                        }
                        
                    </div>
                    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                        <h3 className="t5 s-mb-2 s-center">
                            {this.state.title}
                        </h3>
                        <div className="s-main-center">
                            <a className="button--ghost-alert button--tiny" href="/#">$ {this.state.price}USD</a>
                        </div>
                    </div>
                </article>
            </div>
            </Fragment>
        )
    }
}

export default Form