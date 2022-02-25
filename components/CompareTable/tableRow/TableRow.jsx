import { BlueTick } from "../bluetick/BlueTick"
import "./tableRow.css"


export const TableRow = ({element}) => {
    return (
        
        <tr className= {element.id%2 === 0 ? 'table_row bg-ws' : "table_row"  }  key={element.name}   >
            <td>
                <h3>{element.name}</h3>
                <p>{element.desc}</p>
            </td>
            <td>{element.free ?  <BlueTick/> : ""}</td>
            <td>{<element className="premium"></element> ? <BlueTick/> : "NO"}</td>
        </tr>
        
    )
}