import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { v4 } from "uuid";

const StyledPaginator = styled.div`
  display: flex;
  gap: 1rem;
  width: max-content;

  .page-number {
    width: auto;
    height: 5rem;
    border: 1px solid #a9a9a9;
    border-radius: 7px;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #dad6e0;
    }

    .page-link {
      padding: 0 1.1rem;
      color: var(--color-primary);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &--active {
        color: var(--white);
        background-color: var(--color-primary);
        border-radius: 7px;
      }
    }
  }
`;

const Paginator = ({ pageNumber, humanPageNumber, numberOfPages, previousPagePath, nextPagePath }) => {
  const linkArray = [];
  for (let i = 1; i <= pageNumber + 1; i++)
    linkArray.push(
      <div className="page-number" key={v4()}>
        <Link to={`/blog/${i}`} className="page-link">
          {i}
        </Link>
      </div>
    );
  const linkArray2 = [];
  for (let i = 1; i <= pageNumber + 2; i++) {
    linkArray2.push(
      <div className="page-number" key={v4()}>
        <Link
          to={i === 1 ? "/blog" : `/blog/${i}`}
          className={humanPageNumber === i ? "page-link page-link--active" : "page-link"}
        >
          {i}
        </Link>
      </div>
    );
  }
  const linkArray3 = [];
  for (let i = 1; i <= numberOfPages; i++) {
    linkArray3.push(
      <div className="page-number" key={v4()}>
        <Link to={`/blog/${i}`} className={humanPageNumber === i ? "page-link page-link--active" : "page-link"}>
          {i}
        </Link>
      </div>
    );
  }
  const linkArray4 = [];
  for (let i = pageNumber - 2; i <= pageNumber + 2; i++) {
    linkArray4.push(
      <div className="page-number" key={v4()}>
        <Link to={`/blog/${i}`} className={humanPageNumber === i ? "page-link page-link--active" : "page-link"}>
          {i}
        </Link>
      </div>
    );
  }
  const linkArray5 = [];
  for (let i = pageNumber - 2; i < numberOfPages + 1; i++) {
    linkArray5.push(
      <div className="page-number" key={v4()}>
        <Link to={`/blog/${i}`} className={humanPageNumber === i ? "page-link page-link--active" : "page-link"}>
          {i}
        </Link>
      </div>
    );
  }
  const linkArray6 = [];
  for (let i = pageNumber - 2; i < numberOfPages + 1; i++) {
    linkArray6.push(
      <div className="page-number" key={v4()}>
        <Link to={`/blog/${i}`} className={humanPageNumber === i ? "page-link page-link--active" : "page-link"}>
          {i}
        </Link>
      </div>
    );
  }
  const linkArray7 = [];
  for (let i = numberOfPages - 2; i < numberOfPages + 1; i++) {
    linkArray7.push(
      <div className="page-number" key={v4()}>
        <Link to={`/blog/${i}`} className={humanPageNumber === i ? "page-link page-link--active" : "page-link"}>
          {i}
        </Link>
      </div>
    );
  }

  if (!numberOfPages > 1) return <></>;

  return (
    <StyledPaginator className="paginator">
      {numberOfPages > 1 && humanPageNumber !== 1 && (
        <div className="page-number">
          <Link to="/blog" className="page-link">
            <span>First Page</span>
          </Link>
        </div>
      )}
      {numberOfPages > 1 && humanPageNumber > 1 && (
        <div className="page-number">
          <Link to={previousPagePath} className="page-link">
            <span>{"<"}</span>
          </Link>
        </div>
      )}
      {numberOfPages > 1 && pageNumber < 3 && numberOfPages === 2 && (
        <>
          <div className="page-number">
            <Link to="/blog" className="page-link">
              1
            </Link>
          </div>
          <div className="page-number">
            <Link to="/blog/2" className="page-link page-link--active">
              2
            </Link>
          </div>
        </>
      )}
      {numberOfPages > 1 && pageNumber < 3 && numberOfPages === 2 && pageNumber !== 2 && linkArray.map((link) => link)}
      {numberOfPages > 1 && pageNumber < 3 && pageNumber !== 3 && linkArray2.map((link) => link)}
      {numberOfPages === 3 && pageNumber < 3 && linkArray3.map((link) => link)}
      {numberOfPages > 1 &&
        pageNumber >= 3 &&
        pageNumber !== numberOfPages &&
        pageNumber !== numberOfPages - 1 &&
        linkArray4.map((link) => link)}
      {numberOfPages - 1 === pageNumber && numberOfPages > 3 && linkArray5.map((link) => link)}
      {numberOfPages === pageNumber && numberOfPages > 2 && linkArray6.map((link) => link)}
      {numberOfPages === pageNumber && numberOfPages > 2 && linkArray7.map((link) => link)}
      {numberOfPages > 1 && humanPageNumber < numberOfPages && (
        <>
          <div className="page-number">
            <Link className="page-link" to={nextPagePath}>
              {">"}
            </Link>
          </div>

          <div className="page-number">
            <Link className="page-link" to={`/blog/${numberOfPages}`}>
              Last Page
            </Link>
          </div>
        </>
      )}
    </StyledPaginator>
  );
};

export default Paginator;
