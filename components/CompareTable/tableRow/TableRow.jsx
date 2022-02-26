import { BlueTick } from "../bluetick/BlueTick"
import "./tableRow.css"


export const TableRow = ({element}) => {
    return (
        
        <tr className= {element.id%2 === 0 ? 'cmpr_table_row bg-ws' : "cmpr_table_row"  }  key={element.name}   >
            <td className="cmpr-tbl-row" >
                <h3>{element.name}</h3>
                <p>{element.desc}</p>
            </td>
            <td className="cmpr-tbl-row" >{element.free ?  <BlueTick/> : ""}</td>
            <td className="cmpr-tbl-row" >{<element className="premium"></element> ? <BlueTick/> : "NO"}</td>
        </tr>
        
    )
}