import React from "react";
import * as style from "./quote.module.css"

const Quote = ({text}: {text: string}) => {
    return (
        <section className={style.container}>
            <p className={style.quote}>{text}</p>
        </section>
    )
}

export default Quote
