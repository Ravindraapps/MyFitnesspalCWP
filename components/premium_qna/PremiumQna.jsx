import { useEffect } from "react"
import "./premiumQna.css"
import { QNAArray } from "./QNAData"
import { QnaAccordian } from "./qna_tiles/QnaAccordian"

export const PremiumQNA = () => {
    useEffect(()=>{},[])

    return (
        <>
            <div className="qna-main">
                <div className="qna-div">
                    <header>
                        <div>PREMIUM</div>
                        <h2>Frequently Asked Questions</h2>
                    </header>

                    {QNAArray.map((qna, index)=>(
                        <QnaAccordian qna = {qna} index = {index} key= {qna.id} />
                    ))}


                </div>
            </div>

        </>
    )
}