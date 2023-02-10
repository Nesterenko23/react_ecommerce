import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setPageNumber } from "../../Redux/Slices/paginationSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

const ListPagination = () => {

  const pageNumber = useAppSelector((state)=>state.pagination.pageNumber)

  const pagesCount = Math.ceil(13/6)

  const dispatch = useAppDispatch();

  return (
    <Stack spacing={2} style={{marginTop: '20px'}}>
      <Pagination
        color="primary"
        size="large"
        count={pagesCount}
        page={pageNumber}
        onChange={(event, page) => dispatch(setPageNumber(page))}
      />
    </Stack>
  );
};

export default ListPagination;
