import DataTables from 'datatables.net-dt';
import { useEffect, useRef } from 'react';


function JHUBDataTable() {
    const tableRef = useRef<HTMLTableElement>(null);
    
    useEffect(() => {
        const dt = new DataTables(tableRef.current!);
        return () => {
            dt.destroy()
        }
    }, [])
    

    return (
        <table ref={tableRef}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
                <tr><td>Ganesh</td><td>25</td></tr>
            </tbody>
        </table>
    )
}

export default JHUBDataTable