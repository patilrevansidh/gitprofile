import React from 'react';
import { Table } from 'reactstrap';

const Repotable = (props) => {
    const tbHeader = Array.isArray(props.headers) ? props.headers.map(m=><th>{m}</th>) : null
    const tbRow = Array.isArray(props.data) 
                ? props.data.map((d)=>{
                    return <tr>
                        {
                            props.keys.map(m=><td>{d[m]}</td>)
                        }
                    </tr>
                }) : '';
    return (
        <Table striped>
            <thead>
                {tbHeader}
            </thead>
            <tbody>
                {tbRow}
            </tbody>
        </Table>
    );
};

export default Repotable;