"use client";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageButton from "./PageButton";
import { useCallback, useMemo } from "react";

interface PaginationProps {
  next: number | null;
  prev: number | null;
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {

  const { prev, next, currentPage, totalPages, onChange } = props;

  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  const toPage = useCallback((page: number | null) => {
    if (page) {
      onChange(page);
    }
  }, [onChange]);

  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex">
        <PageButton type="button" disabled={!prev} onClick={() => toPage(prev)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </PageButton>
        {pages.map((page) => (
          <PageButton key={page} active={page === currentPage}
            onClick={() => toPage(page)}>
            {page}
          </PageButton>
        ))}
        <PageButton disabled={!next} onClick={() => toPage(next)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </PageButton>
      </div>
    </div >

  )
}