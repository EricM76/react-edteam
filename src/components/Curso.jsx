const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F7204fcde-37aa-49a2-a619-63459f834ada.png&w=1920&q=75" alt="imageCard" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                React desde cero
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://edteam-media.s3.amazonaws.com/users/avatar/c3e463c6-8c4f-415e-b4c4-a2e283d9a205.png" alt="" />
                        </div>
                    </div>
                    <span className="small">Beto Quiroga</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="/#">$ 20USD</a>
            </div>
        </div>
    </article>
)

export default Curso;