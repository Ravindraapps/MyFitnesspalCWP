import { TableRow } from "../CompareTable/tableRow/TableRow"
import { tableData } from "../CompareTable/data"
import "./premiumCmp2.css"

export const PremiumCmp2 = ()=>{

    return (
        <>
        <div className="cpm2_div">
            <div className="cmp2_content">
                <header className="cmp2_header">
                    <h1>Your Goals, Your Way</h1>
                    <p>Advanced tools and in-depth analysis to help you build lifelong healthy habits.</p>
                </header>
                <div className="cmp2_table">
                    <div></div>
                        <div className="yellow_line"></div>
                    <table>
                        <thead className="cmp_thead">
                            <tr  className="head_row">
                                <td></td>
                                <td className="table-heading" >Free</td>
                                <td className="table-heading" >Premium</td>
                            </tr>
                        </thead>
                        <tbody className="cmp-table-body">
                                {tableData.map((ele)=>(
                                    <TableRow element = {ele} key = {ele.desc}  />
                                ))}
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}