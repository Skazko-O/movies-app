import Pagination from 'react-bootstrap/Pagination';

export default function CustomPagination({ currentPage, totalPages, onPageChange }) {
    const paginationItems = [];

    if (currentPage - 2 > 1) {
        paginationItems.push(<Pagination.Item key={1} onClick={() => onPageChange(1)}>{1}</Pagination.Item>);
    }
    if (currentPage - 2 > 2) {
        paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
    }

    for (let page = currentPage - 2; page <= currentPage + 2; page++) {
        if (page > 0 && page <= totalPages) {
           
            paginationItems.push(
                <Pagination.Item
                    key={page}
                    active={page === currentPage}                    
                    onClick={() => onPageChange(page)}
                >
                    {page}                    
                </Pagination.Item>
            );
        }
    }

    if (currentPage + 2 < totalPages) {
  if (totalPages - (currentPage + 2) > 1) {
    paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
  }
  paginationItems.push(
    <Pagination.Item key={totalPages} onClick={() => onPageChange(totalPages)}>
      {totalPages}
    </Pagination.Item>
  );
}

    return (
        <Pagination>
            <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
            {paginationItems}            
        <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    );
}

