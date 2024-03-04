import { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../main.jsx";
import { observer } from "mobx-react-lite";

const Pages = observer(() =>{
  
  const {devices} = useContext(Context)

  const pageCount = Math.ceil(devices.totalCount / devices.limit)

  const pages = Array.from(Array(+pageCount), (_, i)=> i+1)

  return (
    <Pagination className="mt-5">
        {pages.map((page)=>
            <Pagination.Item 
              key={page}
              active={devices.page === page}
              onClick={()=> devices.setPage(page)}
            >
              {page}
            </Pagination.Item>    
        )}
    </Pagination>
  )

});

export default Pages;