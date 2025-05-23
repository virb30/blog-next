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
    <div className="flex flex-col items-center my-12" role="navigation" aria-label="Paginação">
      <div className="flex">
        <PageButton type="button" disabled={!prev} onClick={() => toPage(prev)} aria-label="Página anterior">
          <FontAwesomeIcon icon={faChevronLeft} />
        </PageButton>
        {pages.map((page) => (
          <PageButton key={page}
            aria-label={`Página ${page}`}
            active={page === currentPage}
            onClick={() => toPage(page)}
          >
            {page}
          </PageButton>
        ))}
        <PageButton disabled={!next} onClick={() => toPage(next)} aria-label="Próxima página">
          <FontAwesomeIcon icon={faChevronRight} />
        </PageButton>
      </div>
    </div >

  )
}