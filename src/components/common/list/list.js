/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Button } from "..";
import InfiniteScroll from "react-infinite-scroller";

export default function List({
  styles,
  children,
  defaultNumberElements = children.length,
  betweenElementsGap = 0,
}) {
  const [page, setPage] = useState(0);
  const addPage = () => {
    setPage(page + 1);
  };

  const getNumberOfPages = () => {
    return children.length / 3;
  };
  const [showAllListElements, setShowAllListElements] = useState(false);
  const childrenToShow = showAllListElements
    ? children
    : children.filter(({}, index) => index < defaultNumberElements);

  const pagedChildrenToShow = childrenToShow.filter(
    ({}, index) => index < (page + 1) * 3
  );

  return (
    <>
      <InfiniteScroll
        sx={{ height: "100%", width: "100%", ...styles }}
        key={1}
        pageStart={page}
        loadMore={() => addPage()}
        hasMore={page < getNumberOfPages()}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <div
          sx={{
            display: "grid",
            width: "100%",
            justifyItems: "center",
            alignItems: "center",
            rowGap: "20px",
          }}
        >
          <div
            sx={{
              display: "grid",
              width: "100%",
              justifyItems: "center",
              alignItems: "center",
              rowGap: betweenElementsGap,
            }}
          >
            {pagedChildrenToShow.map((element, index) => (
              <div
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {element}
              </div>
            ))}
            {!showAllListElements &&
              children.length > defaultNumberElements && (
                <Button onClick={() => setShowAllListElements(true)}>
                  Ver todos
                </Button>
              )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
