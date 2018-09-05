import React from 'react';
import { Pagination, PaginationItem, PaginationLink  } from 'reactstrap';

const ReactStrapPagination = (props) => {
    var page_numbers = []
    for (var i = 1; i <= props.pageCount; i++) {
        page_numbers.push(i);
    }
    return (
        <Pagination aria-label="Page navigation example">
             <PaginationItem disabled={props.currentPage===1}>
                <PaginationLink previous onClick={()=>props.onPageChange(props.currentPage-1)} href="#"/>
            </PaginationItem>
            {
                page_numbers.map(m=>{
                    return <PaginationItem active={props.currentPage === m}>
                        <PaginationLink onClick={()=>props.onPageChange(m)}>
                            {m}
                        </PaginationLink>
                    </PaginationItem>
                })
            }
            <PaginationItem disabled={props.currentPage === props.pageCount}>
                <PaginationLink next onClick={()=>props.onPageChange(props.currentPage+1)} />
            </PaginationItem>
        </Pagination>
    );
};

export default ReactStrapPagination;