import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useDispatch } from "react-redux";
import { setPageCount } from "../../redux/reducers/filterSlice";

export const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ReactPaginate
        className={styles.root}
        // breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => dispatch(setPageCount(event.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        // renderOnZeroPageCount={null}
      />
    </div>
  );
};
